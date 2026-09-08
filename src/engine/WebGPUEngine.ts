/// <reference types="@webgpu/types" />
import { FractalParams } from '../types/fractal';
import { WGSL_SHADER } from '../shaders/webgpuShaders';
import { COLOR_PALETTES } from '../palettes';
import {
  getFractalIndex,
  getCompositeOpIndex,
  getCameraModeIndex,
  getSliceAxisIndex,
  getRenderStyleIndex,
} from './fractalMappers';

export class WebGPUEngine {
  private canvas: HTMLCanvasElement;
  private adapter: GPUAdapter | null = null;
  private device: GPUDevice | null = null;
  private context: GPUCanvasContext | null = null;
  private pipeline: GPURenderPipeline | null = null;
  private uniformBuffer: GPUBuffer | null = null;
  private bindGroup: GPUBindGroup | null = null;
  private uniformValues = new Float32Array(48); // 192 bytes (aligned to 16 bytes: 12 * 16)
  private isDestroyed = false;
  public adapterInfo: string = 'Unknown GPU';

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public static isSupported(): boolean {
    return typeof navigator !== 'undefined' && 'gpu' in navigator && !!navigator.gpu;
  }

  public async init(): Promise<boolean> {
    if (!WebGPUEngine.isSupported()) {
      console.info('[WebGPU] navigator.gpu not available');
      return false;
    }

    try {
      // Timeout: if adapter request takes >5s, GPU is likely unavailable (headless/software renderer)
      const adapterPromise = navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
      const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000));
      this.adapter = await Promise.race([adapterPromise, timeoutPromise]);

      if (!this.adapter) {
        console.warn('[WebGPU] Adapter request failed or timed out — GPU unavailable');
        return false;
      }

      console.info('[WebGPU] Adapter acquired, requesting device...');

      // Read adapter info if available
      try {
        const info = (this.adapter as unknown as { info?: { vendor?: string; architecture?: string; description?: string } }).info;
        if (info && (info.vendor || info.description)) {
          this.adapterInfo = `${info.vendor || ''} ${info.description || info.architecture || ''}`.trim();
        } else {
          this.adapterInfo = 'WebGPU Hardware Accelerated';
        }
      } catch {
        this.adapterInfo = 'WebGPU Generic Adapter';
      }

      this.device = await this.adapter.requestDevice();

      // Handle device loss gracefully to prevent unhandled errors each frame
      this.device.lost.then((info) => {
        console.warn(`WebGPU device lost: ${info.message}`, info);
        this.isDestroyed = true;
      });

      this.context = this.canvas.getContext('webgpu') as GPUCanvasContext;

      if (!this.context) {
        return false;
      }

      const format = navigator.gpu.getPreferredCanvasFormat();
      this.context.configure({
        device: this.device,
        format,
        alphaMode: 'premultiplied',
      });

      // Clear initial surface immediately so screen is never blank during compilation
      try {
        const initialEncoder = this.device.createCommandEncoder();
        const initialPass = initialEncoder.beginRenderPass({
          colorAttachments: [
            {
              view: this.context.getCurrentTexture().createView(),
              clearValue: { r: 0.02, g: 0.015, b: 0.025, a: 1.0 },
              loadOp: 'clear',
              storeOp: 'store',
            },
          ],
        });
        initialPass.end();
        this.device.queue.submit([initialEncoder.finish()]);
      } catch (clearErr) {
        console.debug('Initial clear pass handled:', clearErr);
      }

      const shaderModule = this.device.createShaderModule({
        label: 'Golden Ratio WGSL Fractal Shader',
        code: WGSL_SHADER,
      });

      // Query shader compilation status for precise diagnostics
      if ('getCompilationInfo' in shaderModule) {
        try {
          const compInfo = await shaderModule.getCompilationInfo();
          const errors = compInfo.messages.filter(m => m.type === 'error');
          if (errors.length > 0) {
            for (const err of errors) {
              console.error(`[WGSL Compile Error] Line ${err.lineNum}:${err.linePos}: ${err.message}`);
            }
            return false;
          }
        } catch (e) {
          console.debug('Compilation info inspection skipped:', e);
        }
      }

      // Asynchronous pipeline compilation prevents main-thread stalls while driver JIT-compiles WGSL
      this.pipeline = await this.device.createRenderPipelineAsync({
        label: 'Golden Ratio Pipeline',
        layout: 'auto',
        vertex: {
          module: shaderModule,
          entryPoint: 'vs_main',
        },
        fragment: {
          module: shaderModule,
          entryPoint: 'fs_main',
          targets: [{ format }],
        },
        primitive: {
          topology: 'triangle-list',
        },
      });

      // 48 floats * 4 bytes = 192 bytes (aligned to 16 bytes: 12 * 16)
      this.uniformBuffer = this.device.createBuffer({
        size: 192,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });

      this.bindGroup = this.device.createBindGroup({
        layout: this.pipeline.getBindGroupLayout(0),
        entries: [
          {
            binding: 0,
            resource: { buffer: this.uniformBuffer },
          },
        ],
      });

      return true;
    } catch (e) {
      console.warn('WebGPU init failed, will use fallback:', e);
      return false;
    }
  }

  public render(timeSec: number, params: FractalParams) {
    if (this.isDestroyed || !this.device || !this.context || !this.pipeline || !this.uniformBuffer || !this.bindGroup) {
      return;
    }

    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    // Palette lookup (supports procedural neuro-aesthetic palettes)
    const palette = (params as any).customPalette || COLOR_PALETTES.find(p => p.id === params.paletteId) || COLOR_PALETTES[0];

    const fractalIdx = getFractalIndex(params.type);
    const hybridIdx = getFractalIndex(params.hybridType || params.type);
    const tertiaryIdx = getFractalIndex(params.tertiaryType || 'riemannZeta');

    // Pack uniform float32 array (48 floats = 192 bytes)
    const u = this.uniformValues;
    u[0] = width;
    u[1] = height;
    u[2] = timeSec;
    u[3] = params.phiMultiplier;

    u[4] = params.rotX;
    u[5] = params.rotY;
    u[6] = params.zoom;
    u[7] = fractalIdx;

    u[8] = params.iterations;
    u[9] = params.glowIntensity;
    u[10] = params.morphSpeed;
    u[11] = hybridIdx;

    u[12] = params.hybridBlend ?? 0.0;
    u[13] = params.boxFold ?? 1.2;
    u[14] = params.sphereFold ?? 0.65;
    u[15] = params.interiorCut ?? 0.35;

    // Primary RGB + tertiary fractal index (fits natural 4-byte padding of vec3)
    u[16] = palette.primary[0];
    u[17] = palette.primary[1];
    u[18] = palette.primary[2];
    u[19] = tertiaryIdx;

    // Secondary RGB + tertiary blend
    u[20] = palette.secondary[0];
    u[21] = palette.secondary[1];
    u[22] = palette.secondary[2];
    u[23] = params.tertiaryBlend ?? 0.0;

    // Accent RGB + composite operator index
    u[24] = palette.accent[0];
    u[25] = palette.accent[1];
    u[26] = palette.accent[2];
    u[27] = getCompositeOpIndex(params.compositeOp);

    // Multi-operator distance field algebra & Fibonacci octave hierarchy & camera mode
    u[28] = params.smoothK ?? 0.35;
    u[29] = params.warpStrength ?? 0.3;
    u[30] = params.octaveLayers ?? 2;
    u[31] = getCameraModeIndex(params.cameraMode);

    // Inside-out free flight position & anatomical slicing
    u[32] = params.camPosX ?? 0.0;
    u[33] = params.camPosY ?? 0.0;
    u[34] = params.camPosZ ?? 0.0;
    u[35] = params.slicePlane ?? 0.0;

    // Immersion technologies: Headlamp power, volumetric fog, tomography axis & render modality
    u[36] = params.headlampPower ?? 0.3;
    u[37] = params.volumetricFog ?? 0.15;
    u[38] = getSliceAxisIndex(params.sliceAxis);
    u[39] = getRenderStyleIndex(params.renderStyle);

    // Ambient color & padding
    u[40] = palette.ambient ? palette.ambient[0] : 0.02;
    u[41] = palette.ambient ? palette.ambient[1] : 0.02;
    u[42] = palette.ambient ? palette.ambient[2] : 0.02;
    u[43] = params.paletteSeed ?? 0.0;

    u[44] = 0.0;
    u[45] = 0.0;
    u[46] = 0.0;
    u[47] = 0.0;

    // Write to GPU uniform buffer
    this.device.queue.writeBuffer(this.uniformBuffer, 0, this.uniformValues);

    // Command encoder — wrapped in try/catch to survive surface/device transient errors
    try {
      const commandEncoder = this.device.createCommandEncoder();
      const textureView = this.context.getCurrentTexture().createView();

      const renderPass = commandEncoder.beginRenderPass({
        colorAttachments: [
          {
            view: textureView,
            clearValue: { r: 0.01, g: 0.01, b: 0.02, a: 1.0 },
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      });

      renderPass.setPipeline(this.pipeline);
      renderPass.setBindGroup(0, this.bindGroup);
      renderPass.draw(3, 1, 0, 0);
      renderPass.end();

      this.device.queue.submit([commandEncoder.finish()]);
    } catch (e) {
      // Surface texture acquisition failed (device lost, context reconfigured, etc.)
      // Silently skip this frame — the device.lost handler will set isDestroyed
      console.debug('WebGPU render frame skipped:', (e as Error).message);
    }
  }

  public destroy() {
    this.isDestroyed = true;
    try { this.uniformBuffer?.destroy(); } catch { /* already destroyed */ }
    try { this.device?.destroy(); } catch { /* device may already be lost */ }
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
    this.context = null;
    this.device = null;
    this.adapter = null;
  }
}
