/**
 * Fractal Factory - Unified builder for canonical fractals
 * Eliminates duplication across all category files
 */

// NOTE: Import paths use non-standard resolution that works with Vite bundler but not tsc directly.
// The category data files also contain ~140 type mismatches (wrong FractalType/CategoryKey values)
// that need a separate cleanup pass. See AUDIT_REPORT.md.
import { CanonicalFractal, FractalCategoryKey } from '../fractalCatalogTypes';
import { FractalType, CompositeOp, RenderStyle } from '../../types/fractal';

export interface FractalBuilder {
  id: string;
  name: string;
  englishName: string;
  category: FractalCategoryKey;
  formula: string;
  dimension: string;
  description: string;
  phiPiRelation: string;
  generatorRule?: string;
  type: FractalType;
  hybridType?: FractalType;
  compositeOp: CompositeOp;
  zoom?: number;
  rotX?: number;
  rotY?: number;
  iterations?: number;
  hybridBlend?: number;
  renderStyle?: RenderStyle;
  paletteSeed?: number;
  boxFold?: number;
  sphereFold?: number;
  warpStrength?: number;
  smoothK?: number;
  octaveLayers?: number;
  glowIntensity?: number;
  morphSpeed?: number;
  phiMultiplier?: number;
  interiorCut?: number;
}

export function createFractal(b: FractalBuilder): CanonicalFractal {
  return {
    id: b.id,
    name: b.name,
    englishName: b.englishName,
    category: b.category,
    formula: b.formula,
    dimension: b.dimension,
    generatorRule: b.generatorRule,
    description: b.description,
    phiPiRelation: b.phiPiRelation,
    enginePreset: {
      type: b.type,
      hybridType: b.hybridType,
      compositeOp: b.compositeOp,
      zoom: b.zoom ?? 2.5,
      rotX: b.rotX ?? 0.4,
      rotY: b.rotY ?? 0.25,
      iterations: b.iterations ?? 32,
      hybridBlend: b.hybridBlend,
      paletteSeed: b.paletteSeed,
      boxFold: b.boxFold,
      sphereFold: b.sphereFold,
      warpStrength: b.warpStrength,
      smoothK: b.smoothK,
      octaveLayers: b.octaveLayers,
      glowIntensity: b.glowIntensity,
      morphSpeed: b.morphSpeed,
      phiMultiplier: b.phiMultiplier,
      interiorCut: b.interiorCut,
      renderStyle: b.renderStyle,
    },
  };
}

// Common defaults
export const DEFAULTS = {
  zoom: 2.5,
  rotX: 0.4,
  rotY: 0.25,
  iterations: 32,
  compositeOp: 'smoothUnion' as CompositeOp,
};
