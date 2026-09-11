# WebGLEngine.ts

**404 lines | WebGL2 renderer**

## Purpose
Primary rendering engine. Compiles GLSL shaders, uploads uniforms, renders fractals.

## Key Methods
- `init()` - Context creation, shader compilation, uniform caching
- `render(timeSec, params)` - Frame rendering
- `destroy()` - GPU resource cleanup

## Uniform Buffer (48 floats)
Packed in `FractalEngineBase.packUniforms()`, uploaded per-frame.

## Critical Notes
1. Context loss handled by `FractalCanvas.tsx`, NOT here
2. 3 fallback attempts for context creation
3. KHR_parallel_shader_compile for async compilation
4. Ambient color used directly in shader (not separate uniform)

## Dependencies
- `webglShaders.ts` - GLSL source code
- `FractalEngineBase.ts` - uniform packing
- `RenderDiagnostics.ts` - performance tracking
- `MathValidation.ts` - uniform validation
- `UserProblemLogger.ts` - error logging
