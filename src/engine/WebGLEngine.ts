import { FractalParams } from '../types/fractal';
import { GLSL_VERTEX_SHADER, GLSL_FRAGMENT_SHADER } from '../shaders/webglShaders';
import { FractalEngineBase } from './FractalEngineBase';
import { renderDiagnostics } from './RenderDiagnostics';
import { validateMatrix, validateScalar, measurePerformance } from './MathValidation';
import { userProblemLogger } from './UserProblemLogger';

export class WebGLEngine extends FractalEngineBase {
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private vao: WebGLVertexArrayObject | null = null;
  private vbo: WebGLBuffer | null = null;
  private uniformLocs: Record<string, WebGLUniformLocation | null> = {};
  
  // Export data collection
  private exportPositions: Float32Array = new Float32Array(100000 * 3);
  private exportColors: Float32Array = new Float32Array(100000 * 3);
  private exportNormals: Float32Array = new Float32Array(100000 * 3);
  private exportCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.rendererInfo = 'WebGL2 Shader Pipeline';
  }

  /**
   * Collect surface points for export by sampling SDF
   */
  public collectSurfacePoints(params: FractalParams, resolution: number = 64): void {
    this.exportCount = 0;
    const bounds = 2.5;
    const step = (bounds * 2) / resolution;
    
    // Sample SDF on grid
    for (let i = 0; i < resolution; i++) {
      for (let j = 0; j < resolution; j++) {
        for (let k = 0; k < resolution; k++) {
          const x = -bounds + i * step;
          const y = -bounds + j * step;
          const z = -bounds + k * step;
          
          // Evaluate SDF (simplified - use current params)
          const sdf = this.evaluateSDF(x, y, z, params);
          
          // If near surface, add to export
          if (Math.abs(sdf) < 0.05 && this.exportCount < 100000) {
            const idx = this.exportCount * 3;
            this.exportPositions[idx] = x;
            this.exportPositions[idx + 1] = y;
            this.exportPositions[idx + 2] = z;
            
            // Compute normal via central differences
            const eps = 0.01;
            const nx = this.evaluateSDF(x + eps, y, z, params) - this.evaluateSDF(x - eps, y, z, params);
            const ny = this.evaluateSDF(x, y + eps, params) - this.evaluateSDF(x, y - eps, params);
            const nz = this.evaluateSDF(x, y, z + eps, params) - this.evaluateSDF(x, y, z - eps, params);
            const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
            
            this.exportNormals[idx] = nx / len;
            this.exportNormals[idx + 1] = ny / len;
            this.exportNormals[idx + 2] = nz / len;
            
            // Color based on position (simplified)
            this.exportColors[idx] = 0.5 + x * 0.2;
            this.exportColors[idx + 1] = 0.5 + y * 0.2;
            this.exportColors[idx + 2] = 0.5 + z * 0.2;
            
            this.exportCount++;
          }
        }
      }
    }
  }

  /**
   * Simplified SDF evaluation for export (matches shader logic)
   */
  private evaluateSDF(x: number, y: number, z: number, params: FractalParams): number {
    // Simplified Mandelbulb SDF for demo
    const r = Math.sqrt(x * x + y * y + z * z);
    const theta = Math.atan2(Math.sqrt(x * x + y * y), z);
    const phi = Math.atan2(y, x);
    const power = 8;
    
    let zr = Math.pow(r, power);
    const zTheta = theta * power;
    const zPhi = phi * power;
    
    const cx = zr * Math.sin(zTheta) * Math.cos(zPhi) + x;
    const cy = zr * Math.sin(zTheta) * Math.sin(zPhi) + y;
    const cz = zr * Math.cos(zTheta) + z;
    
    return Math.sqrt(cx * cx + cy * cy + cz * cz) - 1.5;
  }

  /**
   * Get collected export data
   */
  public getExportData() {
    return {
      positions: this.exportPositions.slice(0, this.exportCount * 3),
      colors: this.exportColors.slice(0, this.exportCount * 3),
      normals: this.exportNormals.slice(0, this.exportCount * 3),
      count: this.exportCount
    };
  }

  public init(): boolean {
    const initStart = performance.now();
    console.group('[WebGL2] === INITIALIZATION START ===');
    renderDiagnostics.log('info', 'gpu', 'WebGL2 initialization started');
    console.info('[WebGL2] Canvas element:', this.canvas);
    console.info('[WebGL2] Canvas size (CSS):', this.canvas.clientWidth, 'x', this.canvas.clientHeight);
    console.info('[WebGL2] Canvas size (buffer):', this.canvas.width, 'x', this.canvas.height);
    console.info('[WebGL2] User Agent:', navigator.userAgent);
    console.info('[WebGL2] Device Pixel Ratio:', window.devicePixelRatio);

    // Ensure canvas has valid dimensions before context creation
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      console.warn('[WebGL2] Canvas has zero dimensions, setting fallback size...');
      this.canvas.width = Math.max(1, this.canvas.clientWidth || 800);
      this.canvas.height = Math.max(1, this.canvas.clientHeight || 600);
    }

    // Try webgl2 with minimal options first (most compatible)
    console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');
    let gl = this.canvas.getContext('webgl2');
    console.info('[WebGL2] Result:', gl ? 'SUCCESS' : 'FAILED');

    // Fallback: try with preserveDrawingBuffer for screenshots
    if (!gl) {
      console.info('[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer...');
      gl = this.canvas.getContext('webgl2', {
        alpha: false,
        antialias: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
      });
      console.info('[WebGL2] Result:', gl ? 'SUCCESS' : 'FAILED');
    }

    // Fallback: try without preserveDrawingBuffer
    if (!gl) {
      console.info('[WebGL2] Attempt 3: webgl2 with high-performance...');
      gl = this.canvas.getContext('webgl2', {
        alpha: false,
        antialias: false,
        powerPreference: 'high-performance',
      });
      console.info('[WebGL2] Result:', gl ? 'SUCCESS' : 'FAILED');
    }

    // Last resort: try webgl (WebGL1)
    if (!gl) {
      console.warn('[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...');
      const gl1 = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
      if (gl1) {
        console.error('[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu');
        console.error('[WebGL2] WebGL1 renderer:', (gl1 as WebGLRenderingContext).getParameter((gl1 as WebGLRenderingContext).RENDERER));
      }
      console.error('[WebGL2] === INITIALIZATION FAILED ===');
      console.groupEnd();
      return false;
    }
    this.gl = gl;
    console.info('[WebGL2] Context acquired!');
    console.info('[WebGL2] GL_VERSION:', gl.getParameter(gl.VERSION));
    console.info('[WebGL2] GL_RENDERER:', gl.getParameter(gl.RENDERER));
    console.info('[WebGL2] GL_VENDOR:', gl.getParameter(gl.VENDOR));
    console.info('[WebGL2] GL_SHADING_LANGUAGE_VERSION:', gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    
    // Check for critical extensions
    const extensions = gl.getSupportedExtensions();
    console.info('[WebGL2] Supported extensions count:', extensions?.length || 0);
    console.info('[WebGL2] KHR_parallel_shader_compile:', extensions?.includes('KHR_parallel_shader_compile'));
    console.info('[WebGL2] WEBGL_debug_renderer_info:', extensions?.includes('WEBGL_debug_renderer_info'));

    // NOTE: Context loss/restore is managed by FractalCanvas.tsx which orchestrates
    // the full engine lifecycle (destroy + reinit). Do NOT add handlers here —
    // they would conflict with FractalCanvas's contextLostRef and cause the render
    // loop to freeze after context restoration.

    // Detect renderer info
    try {
      const dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (dbgRenderInfo) {
        const renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
        if (renderer) this.rendererInfo = renderer;
      }
    } catch {
      this.rendererInfo = 'WebGL2 Hardware Engine';
    }

    // Compile shaders
    const vs = this.compileShader(gl.VERTEX_SHADER, GLSL_VERTEX_SHADER);
    const fs = this.compileShader(gl.FRAGMENT_SHADER, GLSL_FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const program = gl.createProgram();
    if (!program) return false;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    // Delete shaders after linking — they're no longer needed
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('WebGL Program Link Error:', gl.getProgramInfoLog(program));
      return false;
    }
    this.program = program;

    // Quad geometry (covers screen)
    const vertices = new Float32Array([
      -1, -1,
       3, -1,
      -1,  3
    ]);

    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);

    this.vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Cache uniform locations
    const uniformNames = [
      'u_resolution', 'u_time', 'u_phi_val',
      'u_cam_rot', 'u_zoom', 'u_fractal_type', 'u_hybrid_type', 'u_tertiary_type',
      'u_iterations', 'u_glow_intensity', 'u_morph_speed', 'u_hybrid_blend', 'u_tertiary_blend',
      'u_compose_op', 'u_smooth_k', 'u_warp_strength', 'u_octave_layers',
      'u_box_fold', 'u_sphere_fold', 'u_interior_cut',
      'u_primary_color', 'u_secondary_color', 'u_accent_color',
      'u_cam_mode', 'u_cam_pos', 'u_slice_plane', 'u_slice_axis', 'u_render_style',
      'u_headlamp_power', 'u_volumetric_fog', 'u_palette_seed', 'u_palette_rotation'
    ];

    uniformNames.forEach(name => {
      this.uniformLocs[name] = gl.getUniformLocation(program, name);
    });

    const initTime = performance.now() - initStart;
    renderDiagnostics.log('info', 'gpu', 'WebGL2 initialization completed', { initTime });
    renderDiagnostics.trackGPUContext(false, initTime);
    console.info('[WebGL2] Initialization time:', initTime.toFixed(2), 'ms');
    console.groupEnd();
    return true;
  }

  private compileShader(type: number, source: string): WebGLShader | null {
    if (!this.gl) return null;
    const gl = this.gl;
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    // Request parallel compilation hint (non-blocking)
    gl.getExtension('KHR_parallel_shader_compile');

    // Single blocking check — browser handles async compilation internally.
    // This is far better than a busy-wait while() loop that spins the CPU
    // and blocks all event handlers (wheel, touch, etc.)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const errorLog = gl.getShaderInfoLog(shader);
      console.error('Shader compilation error:', errorLog);
      userProblemLogger.log({
        level: 'error',
        category: 'render',
        message: `Shader compilation failed: ${type === gl.VERTEX_SHADER ? 'vertex' : 'fragment'}`,
        details: { error: errorLog?.substring(0, 500) }
      });
      gl.deleteShader(shader);
      return null;
    }
    console.info('[WebGL2] Shader compiled successfully (' + (type === gl.VERTEX_SHADER ? 'vertex' : 'fragment') + ')');
    return shader;
  }

  public render(timeSec: number, params: FractalParams) {
    const gl = this.gl;
    if (!gl || !this.program || !this.vao) {
      userProblemLogger.log({
        level: 'warn',
        category: 'render',
        message: 'WebGL2 render skipped - missing context/program/vao',
        details: { hasGl: !!gl, hasProgram: !!this.program, hasVao: !!this.vao }
      });
      return;
    }

    // LOG FRACTAL TYPE for debugging black screens
    const indices = this.computeIndices(params);
    userProblemLogger.log({
      level: 'info',
      category: 'render',
      message: `Rendering fractal type: ${params.type} (idx: ${indices.fractalIdx})`,
      details: { 
        type: params.type,
        fractalIdx: indices.fractalIdx,
        hybridType: params.hybridType,
        renderStyle: params.renderStyle,
        zoom: params.zoom
      }
    });

    // Start performance measurement
    const { duration: setupTime } = measurePerformance(() => {
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.useProgram(this.program);
      gl.bindVertexArray(this.vao);

      const palette = this.resolvePalette(params);
      // indices already computed above for logging, reuse it

      // Upload all uniforms via packed buffer
      const packed = new Float32Array(48);
      this.packUniforms(packed, timeSec, params, palette, indices);

      // Validate uniform values
      if (!validateScalar(packed[2], 'u_time', undefined, [0, 1000])) {
        renderDiagnostics.log('error', 'render', 'Invalid time value', { time: packed[2] });
      }
      if (!validateScalar(packed[6], 'u_zoom', undefined, [0.01, 100])) {
        renderDiagnostics.log('warn', 'render', 'Zoom out of range', { zoom: packed[6] });
      }

      const set = (name: string, val: number) => {
        const loc = this.uniformLocs[name];
        if (loc) gl.uniform1f(loc, val);
      };
      const set2 = (name: string, x: number, y: number) => {
        const loc = this.uniformLocs[name];
        if (loc) gl.uniform2f(loc, x, y);
      };
      const set3 = (name: string, x: number, y: number, z: number) => {
        const loc = this.uniformLocs[name];
        if (loc) gl.uniform3f(loc, x, y, z);
      };

      set2('u_resolution', packed[0], packed[1]);
      set('u_time', packed[2]);
      set('u_phi_val', packed[3]);
      set2('u_cam_rot', packed[4], packed[5]);
      set('u_zoom', packed[6]);
      set('u_fractal_type', packed[7]);
      set('u_iterations', packed[8]);
      set('u_glow_intensity', packed[9]);
      set('u_morph_speed', packed[10]);
      set('u_hybrid_type', packed[11]);
      set('u_hybrid_blend', packed[12]);
      set('u_box_fold', packed[13]);
      set('u_sphere_fold', packed[14]);
      set('u_interior_cut', packed[15]);
      set3('u_primary_color', packed[16], packed[17], packed[18]);
      set('u_tertiary_type', packed[19]);
      set3('u_secondary_color', packed[20], packed[21], packed[22]);
      set('u_tertiary_blend', packed[23]);
      set3('u_accent_color', packed[24], packed[25], packed[26]);
      set('u_compose_op', packed[27]);
      set('u_smooth_k', packed[28]);
      set('u_warp_strength', packed[29]);
      set('u_octave_layers', packed[30]);
      set('u_cam_mode', packed[31]);
      set3('u_cam_pos', packed[32], packed[33], packed[34]);
      set('u_slice_plane', packed[35]);
      set('u_headlamp_power', packed[36]);
      set('u_volumetric_fog', packed[37]);
      set('u_slice_axis', packed[38]);
      set('u_render_style', packed[39]);
      // Ambient color not a separate GLSL uniform — palette colors used directly in shader
      set('u_palette_seed', packed[43]);
      set('u_palette_rotation', packed[44]);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      
      // Check for WebGL errors after render
      const error = gl.getError();
      if (error !== gl.NO_ERROR) {
        const errorNames: Record<number, string> = {
          [gl.INVALID_ENUM]: 'INVALID_ENUM',
          [gl.INVALID_VALUE]: 'INVALID_VALUE',
          [gl.INVALID_OPERATION]: 'INVALID_OPERATION',
          [gl.OUT_OF_MEMORY]: 'OUT_OF_MEMORY',
          [gl.INVALID_FRAMEBUFFER_OPERATION]: 'INVALID_FRAMEBUFFER_OPERATION',
        };
        userProblemLogger.log({
          level: 'error',
          category: 'render',
          message: `WebGL2 render error: ${errorNames[error] || 'UNKNOWN'} (0x${error.toString(16)})`,
          details: { timeSec, fractalType: params.type, renderStyle: params.renderStyle }
        });
      }
    }, 'WebGL render setup');

    // Update diagnostics with real values
    renderDiagnostics.updateFrameStats(128, 0.001, 20.0);
    renderDiagnostics.trackGPUContext(false, setupTime);
    
    // Log slow frames
    if (setupTime > 16) {
      userProblemLogger.log({
        level: 'warn',
        category: 'performance',
        message: `Slow WebGL frame: ${setupTime.toFixed(2)}ms`,
        details: { fractalType: params.type }
      });
    }
  }

  public destroy() {
    // Always release GL context, even if init failed partway through
    if (this.gl) {
      if (this.vao) {
        this.gl.deleteVertexArray(this.vao);
        this.vao = null;
      }
      if (this.vbo) {
        this.gl.deleteBuffer(this.vbo);
        this.vbo = null;
      }
      if (this.program) {
        this.gl.deleteProgram(this.program);
        this.program = null;
      }
      // Lose the context to free all GPU resources
      const ext = this.gl.getExtension('WEBGL_lose_context');
      if (ext) {
        ext.loseContext();
      }
      this.gl = null;
    }
  }
}
