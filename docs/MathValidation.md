# MathValidation.ts

**253 lines | Mathematical validation utilities**

## Purpose
Validate mathematical operations in fractal rendering pipeline. Logs errors/warnings via RenderDiagnostics.

## Exported Functions

### `validateVec3(vec, context, position?)` (lines 11-35)
Validates 3D vector:
- NaN → error
- Infinity → error
- |value| > 1e6 → warning

### `validateScalar(value, context, position?, expectedRange?)` (lines 40-69)
Validates scalar value:
- NaN → error
- Infinity → error
- Out of expectedRange → warning

### `validateMatrix(matrix, context, expectedSize?)` (lines 74-98)
Validates matrix:
- Size mismatch → error
- NaN/Infinity elements → error

### `validateFractalIteration(iteration, maxIterations, orbitValue, position)` (lines 103-136)
Validates fractal iteration:
- iteration < 0 or > maxIterations → error
- NaN/Infinity orbitValue → error
- orbitValue > 1e10 → warning (diverging)

### `validateSDFDistance(distance, position, fractalType)` (lines 141-166)
Validates SDF distance:
- NaN → error
- Infinity → error
- |distance| > 100 → warning

### `validateNormal(normal, position)` (lines 171-191)
Validates normal vector:
- Calls validateVec3
- |length - 1.0| > 0.01 → warning (not normalized)

### `validateColor(color, context)` (lines 196-222)
Validates color values:
- NaN → error
- Infinity → error
- max > 100 → warning (HDR can exceed [0,1])

### `validateTransform(matrix, context)` (lines 227-245)
Validates transformation matrix:
- Calls validateMatrix
- 4x4: checks determinant for singularity

### `measurePerformance<T>(fn, operationName)` (lines 250-263)
Performance monitoring wrapper:
- Measures execution time
- Warns if > 16ms (one frame)
- Returns { result, duration }

## Critical Notes
1. **All functions return boolean** - true if valid, false if invalid
2. **Logs via RenderDiagnostics** - centralized error tracking
3. **Context parameter** - identifies where validation failed
4. **Position parameter** - optional 3D position for debugging
5. **HDR colors** - can exceed [0,1], only warn if > 100

## Usage
Called from WebGLEngine.ts and WebGPUEngine.ts:
```typescript
if (!validateScalar(this.uniformValues[2], 'u_time', undefined, [0, 1000])) {
  renderDiagnostics.log('error', 'render', 'Invalid time value', { time: this.uniformValues[2] });
}
```

## Dependencies
- `RenderDiagnostics.ts` - logging
