/**
 * Shader Modules Index
 * Re-exports for variation GLSL fragments used by webglShaders.ts
 *
 * Note: Main fractal SDFs are defined inline in webglShaders.ts.
 * Only the range-compressed variation blocks are modularized.
 */

// Julia set variations (range 141-190; Mandelbrot variants 131-140 live in the main shader)
export { JULIA_VARIATIONS_GLSL } from './juliaVariations';
// IFS variations (range 191-240)
export { IFS_VARIATIONS_GLSL } from './ifsVariations';
// L-System variations (range 241-290)
export { LSYSTEM_VARIATIONS_GLSL } from './lsystemVariations';
// Fractal Flame variations (range 291-340)
export { FLAME_VARIATIONS_GLSL } from './flameVariations';
// Hybrid variations (range 341-430)
export { HYBRID_VARIATIONS_GLSL } from './hybridVariations';
