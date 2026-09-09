import { FractalType, CompositeOp } from '../types/fractal';
export type { FractalCategoryKey, CanonicalFractal } from './fractalCatalogTypes';
export { FRACTAL_CATEGORIES } from './fractalCatalogTypes';
import { CanonicalFractal } from './fractalCatalogTypes';

// Import modular fractal categories
import { GEOMETRIC_CURVES } from './categories/geometricCurves';
import { CONSTRUCTIVE_FRACTALS } from './categories/constructiveFractals';
import { ALGEBRAIC_FRACTALS } from './categories/algebraicFractals';
import { MULTIDIMENSIONAL_FRACTALS } from './categories/multidimensionalFractals';
import { IFS_FRACTALS } from './categories/ifsFractals';
import { STOCHASTIC_FRACTALS } from './categories/stochasticFractals';
import { PHYSICAL_FRACTALS } from './categories/physicalFractals';
import { EXPANDED_REAL_FRACTALS } from './categories/expandedRealFractals';
import { VISUALLY_DISTINCT_FRACTALS } from './categories/visuallyDistinctFractals';
import { MANDALAS_3D } from './categories/mandalas3D';

// Compose catalog from modular categories
export const CANONICAL_FRACTALS_CATALOG: CanonicalFractal[] = [
  ...GEOMETRIC_CURVES,
  ...CONSTRUCTIVE_FRACTALS,
  ...ALGEBRAIC_FRACTALS,
  ...MULTIDIMENSIONAL_FRACTALS,
  ...IFS_FRACTALS,
  ...STOCHASTIC_FRACTALS,
  ...PHYSICAL_FRACTALS,
  ...EXPANDED_REAL_FRACTALS,
  ...VISUALLY_DISTINCT_FRACTALS,
  ...MANDALAS_3D,
];
