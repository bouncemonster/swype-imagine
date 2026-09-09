/**
 * Shader Modules Index
 * Modular architecture for better maintainability
 */

export { SDF_OPERATIONS_GLSL, SDF_OPERATIONS_WGSL } from './sdfOperations';
export { RENDER_MODES_GLSL, RENDER_MODES_WGSL } from './renderModes';
export { POST_PROCESSING_GLSL, POST_PROCESSING_WGSL } from './postProcessing';
export { ADVANCED_RENDERING_GLSL, ADVANCED_RENDERING_WGSL } from './advancedRendering';

// Fractal Type Variations (300 types total)
export { JULIA_VARIATIONS_GLSL } from './juliaVariations';
export { IFS_VARIATIONS_GLSL } from './ifsVariations';
export { LSYSTEM_VARIATIONS_GLSL } from './lsystemVariations';
export { FLAME_VARIATIONS_GLSL } from './flameVariations';
export { HYBRID_VARIATIONS_GLSL } from './hybridVariations';
