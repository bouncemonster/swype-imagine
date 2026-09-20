# MathValidation.ts

**59 lines | Mathematical validation utilities for CPU-side uniform checks**

## Purpose
Validate mathematical operations in fractal rendering pipeline. Logs errors/warnings via RenderDiagnostics.

## Current Status

**Both functions are defined but NOT called in the per-frame render loop.** They were intentionally removed from the hot path for performance:

- `validateScalar` — was previously called to validate CPU-side uniform values before uploading to GPU. Removed because these values are controlled by the application, not user input. The comment at `WebGLEngine.ts:432` explains: *"validateScalar removed from per-frame path — these check CPU-side uniform values we control, not GPU output."*
- `measurePerformance` — adds `performance.now()` × 2 per call (~0.01ms) but more importantly prevents V8 inlining of the wrapped function. Removed from per-frame path.

**GPU-side validation is not possible** — the GPU runs shaders in parallel and writes directly to the canvas. SDF distances, normals, and colors computed in GLSL/WGSL cannot be validated from CPU code. Numerical safety on the GPU is handled by:

1. **Clamp guards** in shaders: `clamp(...)`, `max(..., 0.0001)`, `max(..., 1e-6)` prevent division by zero and degenerate vectors
2. **Bounded ray marching**: Step size capped at 0.5, sign tracking, 20-iteration binary search, fine-grained fallback
3. **Normal safe fallback**: `length(n) > 0.00001 ? n / len : vec3(0.0, 1.0, 0.0)` in both `calcNormal` and `calcMicroNormal`
4. **Mandelbulb interior fix**: Returns small positive distance for interior points where `log(r)` would be negative
5. **Boundary safety**: Step size capped near r=5.0 boundary to prevent overshooting

## Exported Functions

### `validateScalar(value, context, position?, expectedRange?)` (lines 11-40)
Validates scalar value:
- NaN → error
- Infinity → error
- Out of expectedRange → warning

### `measurePerformance<T>(fn, operationName)` (lines 45-58)
Performance monitoring wrapper:
- Measures execution time
- Warns if > 16ms (one frame)
- Returns { result, duration }

## Removed Functions (previously documented, no longer exist)
The following functions were described in earlier documentation but have been removed to reduce file size. Their validation logic is handled inline in the shaders:
- `validateVec3` — GPU handles via `clamp()` and `max()` guards
- `validateMatrix` — Not applicable (no CPU-side matrix operations)
- `validateFractalIteration` — Iterations run entirely on GPU
- `validateSDFDistance` — SDF runs on GPU, validated by clamp guards
- `validateNormal` — GPU: `length(n) > 0.00001` fallback
- `validateColor` — GPU: ACES tone mapping + `clamp()` in final output
- `validateTransform` — Not applicable (rotation done in shader)

## Dependencies
- `RenderDiagnostics.ts` - logging
