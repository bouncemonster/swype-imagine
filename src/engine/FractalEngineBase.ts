import { FractalParams, ColorPalette } from '../types/fractal';
import { COLOR_PALETTES } from '../palettes';
import {
  getFractalIndex,
  getCompositeOpIndex,
  getCameraModeIndex,
  getSliceAxisIndex,
  getRenderStyleIndex,
} from './fractalMappers';

export interface ResolvedIndices {
  fractalIdx: number;
  hybridIdx: number;
  tertiaryIdx: number;
  compositeOpIdx: number;
  cameraModeIdx: number;
  sliceAxisIdx: number;
  renderStyleIdx: number;
}

/**
 * Shared base for WebGL2 and WebGPU fractal engines.
 * Extracts common palette resolution, index computation, and uniform packing.
 */
export abstract class FractalEngineBase {
  protected canvas: HTMLCanvasElement;
  public rendererInfo: string = 'Unknown';

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  /** Resolve palette from params (supports custom procedural palettes) */
  protected resolvePalette(params: FractalParams): ColorPalette {
    return (params as any).customPalette
      || COLOR_PALETTES.find(p => p.id === params.paletteId)
      || COLOR_PALETTES[0];
  }

  /** Compute all shader indices from params */
  protected computeIndices(params: FractalParams): ResolvedIndices {
    return {
      fractalIdx: getFractalIndex(params.type),
      hybridIdx: getFractalIndex(params.hybridType || params.type),
      tertiaryIdx: getFractalIndex(params.tertiaryType || 'riemannZeta'),
      compositeOpIdx: getCompositeOpIndex(params.compositeOp),
      cameraModeIdx: getCameraModeIndex(params.cameraMode),
      sliceAxisIdx: getSliceAxisIndex(params.sliceAxis),
      renderStyleIdx: getRenderStyleIndex(params.renderStyle),
    };
  }

  /**
   * Pack all rendering parameters into a 48-float uniform buffer.
   * Layout matches both GLSL uniforms and WGSL Uniforms struct.
   * Returns the populated Float32Array (caller provides or reuses buffer).
   */
  protected packUniforms(
    out: Float32Array,
    timeSec: number,
    params: FractalParams,
    palette: ColorPalette,
    indices: ResolvedIndices,
  ): Float32Array {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // [0-3] resolution, time, phi
    out[0] = w;
    out[1] = h;
    out[2] = timeSec;
    out[3] = params.phiMultiplier;

    // [4-7] camera rotation, zoom, fractal type
    out[4] = params.rotX;
    out[5] = params.rotY;
    out[6] = params.zoom;
    out[7] = indices.fractalIdx;

    // [8-11] iterations, glow, morph speed, hybrid type
    out[8] = params.iterations;
    out[9] = params.glowIntensity;
    out[10] = params.morphSpeed;
    out[11] = indices.hybridIdx;

    // [12-15] hybrid blend, box fold, sphere fold, interior cut
    out[12] = params.hybridBlend ?? 0.0;
    out[13] = params.boxFold ?? 1.2;
    out[14] = params.sphereFold ?? 0.65;
    out[15] = params.interiorCut ?? 0.35;

    // [16-19] primary color RGB + tertiary index
    out[16] = palette.primary[0];
    out[17] = palette.primary[1];
    out[18] = palette.primary[2];
    out[19] = indices.tertiaryIdx;

    // [20-23] secondary color RGB + tertiary blend
    out[20] = palette.secondary[0];
    out[21] = palette.secondary[1];
    out[22] = palette.secondary[2];
    out[23] = params.tertiaryBlend ?? 0.0;

    // [24-27] accent color RGB + composite op
    out[24] = palette.accent[0];
    out[25] = palette.accent[1];
    out[26] = palette.accent[2];
    out[27] = indices.compositeOpIdx;

    // [28-31] smooth_k, warp, octaves, camera mode
    out[28] = params.smoothK ?? 0.35;
    out[29] = params.warpStrength ?? 0.3;
    out[30] = params.octaveLayers ?? 2;
    out[31] = indices.cameraModeIdx;

    // [32-35] camera position + slice plane
    out[32] = params.camPosX ?? 0.0;
    out[33] = params.camPosY ?? 0.0;
    out[34] = params.camPosZ ?? 0.0;
    out[35] = params.slicePlane ?? 0.0;

    // [36-39] headlamp, fog, slice axis, render style
    out[36] = params.headlampPower ?? 0.3;
    out[37] = params.volumetricFog ?? 0.15;
    out[38] = indices.sliceAxisIdx;
    out[39] = indices.renderStyleIdx;

    // [40-43] ambient color + palette seed
    out[40] = palette.ambient ? palette.ambient[0] : 0.02;
    out[41] = palette.ambient ? palette.ambient[1] : 0.02;
    out[42] = palette.ambient ? palette.ambient[2] : 0.02;
    out[43] = params.paletteSeed ?? 0.0;

    // [44-47] palette rotation + padding
    out[44] = params.paletteRotation ? 1.0 : 0.0;
    out[45] = 0.0;
    out[46] = 0.0;
    out[47] = 0.0;

    return out;
  }

  abstract init(): Promise<boolean> | boolean;
  abstract render(timeSec: number, params: FractalParams): void;
  abstract destroy(): void;
}
