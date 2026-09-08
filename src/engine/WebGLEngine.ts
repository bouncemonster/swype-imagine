import { FractalParams } from '../types/fractal';
import { GLSL_VERTEX_SHADER, GLSL_FRAGMENT_SHADER } from '../shaders/webglShaders';
import { COLOR_PALETTES } from '../palettes';
import {
  getFractalIndex,
  getCompositeOpIndex,
  getCameraModeIndex,
  getSliceAxisIndex,
  getRenderStyleIndex,
} from './fractalMappers';

export class WebGLEngine {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private vao: WebGLVertexArrayObject | null = null;
  private vbo: WebGLBuffer | null = null;
  private uniformLocs: Record<string, WebGLUniformLocation | null> = {};
  public rendererInfo: string = 'WebGL2 Shader Pipeline';

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public init(): boolean {
    console.group('[WebGL2] === INITIALIZATION START ===');
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
      'u_headlamp_power', 'u_volumetric_fog'
    ];

    uniformNames.forEach(name => {
      this.uniformLocs[name] = gl.getUniformLocation(program, name);
    });

    return true;
  }

  private compileShader(type: number, source: string): WebGLShader | null {
    if (!this.gl) return null;
    const gl = this.gl;
    const shader = gl.createShader(type);
    if (!shader) return null;

    // Enable parallel shader compilation (KHR_parallel_shader_compile)
    // This prevents the browser from freezing during shader compilation
    const parallelCompile = gl.getExtension('KHR_parallel_shader_compile');

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    // If parallel compile is available, poll for completion with timeout
    if (parallelCompile) {
      const startTime = performance.now();
      const timeout = 15000; // 15s max compile time
      while (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const completionStatus = parallelCompile.COMPLETION_STATUS_KHR;
        if (gl.getShaderParameter(shader, completionStatus)) break;
        if (performance.now() - startTime > timeout) {
          console.error('[WebGL2] Shader compilation timeout after 15s');
          console.error('Shader info:', gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
      }
    }

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    console.info('[WebGL2] Shader compiled successfully (' + (type === gl.VERTEX_SHADER ? 'vertex' : 'fragment') + ')');
    return shader;
  }

  public render(timeSec: number, params: FractalParams) {
    const gl = this.gl;
    if (!gl || !this.program || !this.vao) return;

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);

    const palette = (params as any).customPalette || COLOR_PALETTES.find(p => p.id === params.paletteId) || COLOR_PALETTES[0];

    const fractalIdx = getFractalIndex(params.type);
    const hybridIdx = getFractalIndex(params.hybridType || params.type);
    const tertiaryIdx = getFractalIndex(params.tertiaryType || 'riemannZeta');

    if (this.uniformLocs['u_resolution']) gl.uniform2f(this.uniformLocs['u_resolution'], this.canvas.width, this.canvas.height);
    if (this.uniformLocs['u_time']) gl.uniform1f(this.uniformLocs['u_time'], timeSec);
    if (this.uniformLocs['u_phi_val']) gl.uniform1f(this.uniformLocs['u_phi_val'], params.phiMultiplier);

    if (this.uniformLocs['u_cam_rot']) gl.uniform2f(this.uniformLocs['u_cam_rot'], params.rotX, params.rotY);
    if (this.uniformLocs['u_zoom']) gl.uniform1f(this.uniformLocs['u_zoom'], params.zoom);
    if (this.uniformLocs['u_fractal_type']) gl.uniform1f(this.uniformLocs['u_fractal_type'], fractalIdx);
    if (this.uniformLocs['u_hybrid_type']) gl.uniform1f(this.uniformLocs['u_hybrid_type'], hybridIdx);
    if (this.uniformLocs['u_tertiary_type']) gl.uniform1f(this.uniformLocs['u_tertiary_type'], tertiaryIdx);

    if (this.uniformLocs['u_iterations']) gl.uniform1f(this.uniformLocs['u_iterations'], params.iterations);
    if (this.uniformLocs['u_glow_intensity']) gl.uniform1f(this.uniformLocs['u_glow_intensity'], params.glowIntensity);
    if (this.uniformLocs['u_morph_speed']) gl.uniform1f(this.uniformLocs['u_morph_speed'], params.morphSpeed);
    if (this.uniformLocs['u_hybrid_blend']) gl.uniform1f(this.uniformLocs['u_hybrid_blend'], params.hybridBlend ?? 0.0);
    if (this.uniformLocs['u_tertiary_blend']) gl.uniform1f(this.uniformLocs['u_tertiary_blend'], params.tertiaryBlend ?? 0.0);

    if (this.uniformLocs['u_compose_op']) gl.uniform1f(this.uniformLocs['u_compose_op'], getCompositeOpIndex(params.compositeOp));
    if (this.uniformLocs['u_smooth_k']) gl.uniform1f(this.uniformLocs['u_smooth_k'], params.smoothK ?? 0.35);
    if (this.uniformLocs['u_warp_strength']) gl.uniform1f(this.uniformLocs['u_warp_strength'], params.warpStrength ?? 0.3);
    if (this.uniformLocs['u_octave_layers']) gl.uniform1f(this.uniformLocs['u_octave_layers'], params.octaveLayers ?? 2);

    if (this.uniformLocs['u_box_fold']) gl.uniform1f(this.uniformLocs['u_box_fold'], params.boxFold ?? 1.2);
    if (this.uniformLocs['u_sphere_fold']) gl.uniform1f(this.uniformLocs['u_sphere_fold'], params.sphereFold ?? 0.65);
    if (this.uniformLocs['u_interior_cut']) gl.uniform1f(this.uniformLocs['u_interior_cut'], params.interiorCut ?? 0.35);

    if (this.uniformLocs['u_primary_color']) gl.uniform3f(this.uniformLocs['u_primary_color'], palette.primary[0], palette.primary[1], palette.primary[2]);
    if (this.uniformLocs['u_secondary_color']) gl.uniform3f(this.uniformLocs['u_secondary_color'], palette.secondary[0], palette.secondary[1], palette.secondary[2]);
    if (this.uniformLocs['u_accent_color']) gl.uniform3f(this.uniformLocs['u_accent_color'], palette.accent[0], palette.accent[1], palette.accent[2]);

    if (this.uniformLocs['u_cam_mode']) gl.uniform1f(this.uniformLocs['u_cam_mode'], getCameraModeIndex(params.cameraMode));
    if (this.uniformLocs['u_cam_pos']) gl.uniform3f(this.uniformLocs['u_cam_pos'], params.camPosX ?? 0.0, params.camPosY ?? 0.0, params.camPosZ ?? 0.0);
    if (this.uniformLocs['u_slice_plane']) gl.uniform1f(this.uniformLocs['u_slice_plane'], params.slicePlane ?? 0.0);
    if (this.uniformLocs['u_slice_axis']) gl.uniform1f(this.uniformLocs['u_slice_axis'], getSliceAxisIndex(params.sliceAxis));
    if (this.uniformLocs['u_render_style']) gl.uniform1f(this.uniformLocs['u_render_style'], getRenderStyleIndex(params.renderStyle));
    if (this.uniformLocs['u_headlamp_power']) gl.uniform1f(this.uniformLocs['u_headlamp_power'], params.headlampPower ?? 0.3);
    if (this.uniformLocs['u_volumetric_fog']) gl.uniform1f(this.uniformLocs['u_volumetric_fog'], params.volumetricFog ?? 0.15);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
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
