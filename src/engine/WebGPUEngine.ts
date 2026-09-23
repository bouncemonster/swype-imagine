/// <reference types="@webgpu/types" />
import { FractalParams } from '../types/fractal';
import { WGSL_SHADER } from '../shaders/webgpuShaders';
import { FractalEngineBase } from './FractalEngineBase';
import { renderDiagnostics } from './RenderDiagnostics';
import { userProblemLogger } from './UserProblemLogger';
import { logger } from '../utils/logger';

export class WebGPUEngine extends FractalEngineBase {
  private adapter: GPUAdapter | null = null;
  private device: GPUDevice | null = null;
  private context: GPUCanvasContext | null = null;
  private pipeline: GPURenderPipeline | null = null;
  private uniformBuffer: GPUBuffer | null = null;
  private bindGroup: GPUBindGroup | null = null;
  private uniformValues = new Float32Array(52); // 208 bytes (WGSL struct with vec3 alignment padding)
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
      logger.info('[WebGPU] navigator.gpu not available');
      return false;
    }

    try {
      // Timeout: if adapter request takes >5s, GPU is likely unavailable (headless/software renderer)
      const adapterPromise = navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
      const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000));
      this.adapter = await Promise.race([adapterPromise, timeoutPromise]);

      if (!this.adapter) {
        logger.warn('[WebGPU] Adapter request failed or timed out — GPU unavailable');
        return false;
      }

      logger.info('[WebGPU] Adapter acquired, requesting device...');

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
        logger.warn(`WebGPU device lost: ${info.message}`, info);
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
        logger.debug('Initial clear pass handled:', clearErr);
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
              logger.error(`[WGSL Compile Error] Line ${err.lineNum}:${err.linePos}: ${err.message}`);
            }
            return false;
          }
        } catch (e) {
          logger.debug('Compilation info inspection skipped:', e);
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

      // 52 floats * 4 bytes = 208 bytes (WGSL struct size with vec3 alignment padding)
      this.uniformBuffer = this.device.createBuffer({
        size: 208,
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
      logger.warn('WebGPU init failed, will use fallback:', e);
      return false;
    }
  }

  /**
   * Renders one frame. Returns true ONLY when a command buffer with a draw was
   * actually submitted — callers use this to distinguish a real on-screen frame
   * from a silent skip (pipeline not ready / surface texture unavailable).
   */
  public render(timeSec: number, params: FractalParams): boolean {
    if (this.isDestroyed || !this.device || !this.context || !this.pipeline || !this.uniformBuffer || !this.bindGroup) {
      return false;
    }

    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return false;
    // Safety: cap texture size to prevent GPU OOM on high-DPR displays
    if (width > 4096 || height > 4096) return false;

    // Pack uniforms and write to GPU uniform buffer
    const palette = this.resolvePalette(params);
    const indices = this.computeIndices(params);
    this.packUniforms(this.uniformValues, timeSec, params, palette, indices);

    let drew = false;
    // Command encoder — wrapped in try/catch to survive surface/device transient errors
    try {
      // Re-check isDestroyed after packUniforms (device.lost may have fired during pack)
      if (this.isDestroyed) return false;
      this.device.queue.writeBuffer(this.uniformBuffer, 0, this.uniformValues);
      const commandEncoder = this.device.createCommandEncoder();
      // getCurrentTexture can throw if canvas was resized to 0 or context was reconfigured
      let textureView: GPUTextureView;
      try {
        const currentTexture = this.context.getCurrentTexture();
        // Safety: check texture hasn't been destroyed due to resize race
        if (!currentTexture || currentTexture.width === 0 || currentTexture.height === 0) {
          return false;
        }
        textureView = currentTexture.createView();
      } catch (textureErr) {
        // Surface texture not available (resize in progress, etc.) — skip frame
        logger.debug('WebGPU surface texture unavailable:', (textureErr as Error).message);
        return false;
      }

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
      drew = true;
    } catch (e) {
      // Surface texture acquisition failed (device lost, context reconfigured, etc.)
      // Silently skip this frame — the device.lost handler will set isDestroyed
      renderDiagnostics.log('warn', 'render', 'WebGPU render frame skipped', { error: (e as Error).message });
      logger.debug('WebGPU render frame skipped:', (e as Error).message);
    }

    // Update diagnostics
    renderDiagnostics.updateFrameStats(128, 0.001, 20.0);
    renderDiagnostics.trackGPUContext(false, 0);
    return drew;
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
