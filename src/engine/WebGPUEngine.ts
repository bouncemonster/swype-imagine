/// <reference types="@webgpu/types" />
import { FractalParams } from '../types/fractal';
import { WGSL_SHADER } from '../shaders/webgpuShaders';
import { FractalEngineBase } from './FractalEngineBase';
import { renderDiagnostics } from './RenderDiagnostics';
import { validateScalar, measurePerformance } from './MathValidation';

export class WebGPUEngine extends FractalEngineBase {
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
    super(canvas);
    this.rendererInfo = 'WebGPU Engine';
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

    // Measure render performance
    const { duration: renderTime } = measurePerformance(() => {
      // Pack uniforms using shared base method
      const palette = this.resolvePalette(params);
      const indices = this.computeIndices(params);
      this.packUniforms(this.uniformValues, timeSec, params, palette, indices);

      // Validate uniform values
      if (!validateScalar(this.uniformValues[2], 'u_time', undefined, [0, 1000])) {
        renderDiagnostics.log('error', 'render', 'Invalid time value', { time: this.uniformValues[2] });
      }
      if (!validateScalar(this.uniformValues[6], 'u_zoom', undefined, [0.01, 100])) {
        renderDiagnostics.log('warn', 'render', 'Zoom out of range', { zoom: this.uniformValues[6] });
      }

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
        renderDiagnostics.log('warn', 'render', 'WebGPU render frame skipped', { error: (e as Error).message });
        console.debug('WebGPU render frame skipped:', (e as Error).message);
      }
    }, 'WebGPU render');

    // Update diagnostics
    renderDiagnostics.updateFrameStats(128, 0.001, 20.0); // Approximate values
    renderDiagnostics.trackGPUContext(false, renderTime);
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
