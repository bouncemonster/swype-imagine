# RenderDiagnostics.ts

**257 lines | Rendering pipeline diagnostics**

## Purpose
Advanced logging and validation for fractal rendering pipeline. Tracks performance, math errors, GPU health.

## Key Interfaces

### RenderStats (lines 6-28)
```typescript
{
  // Performance metrics
  frameTime: number;
  fps: number;
  rayMarchSteps: number;
  rayMarchStepsAvg: number;
  
  // Math validation
  sdfMin: number;
  sdfMax: number;
  sdfNaN: number;
  sdfInfinity: number;
  
  // Rendering quality
  hitRate: number; // percentage of rays that hit geometry
  averageDistance: number;
  maxDistance: number;
  
  // GPU health
  gpuMemoryUsed: number;
  shaderCompileTime: number;
  contextLost: boolean;
}
```

### DiagnosticLog (lines 30-36)
```typescript
{
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  category: 'render' | 'math' | 'gpu' | 'performance';
  message: string;
  data?: any;
}
```

## Key Methods

### `log(level, category, message, data)` (lines 67-89)
Logs diagnostic message. Keeps last 1000 logs. Console output for errors/warnings.

### `updateFrameStats(steps, hitDistance, maxRayDistance)` (lines 94-125)
Updates per-frame statistics:
- frameTime, fps
- rayMarchSteps (EMA: 90% old + 10% new)
- sdfNaN, sdfInfinity counters
- hitRate (EMA: 95% old + 5% new)
- averageDistance (EMA)

### `validateSDF(sdfValue, position)` (lines 130-146)
Validates SDF output:
- NaN → error
- Infinity → error
- < -1000 → warning

### `validateNormal(normal, position)` (lines 151-165)
Validates normal vector:
- NaN → error
- |length - 1.0| > 0.01 → warning (not normalized)

### `trackGPUContext(lost, shaderCompileTime)` (lines 170-184)
Tracks GPU context state. Warns if shader compilation > 1000ms.

### `exportReport()` (lines 213-228)
Returns JSON report with stats, recent logs, summary.

### `isHealthy()` (lines 250-257)
Returns true if:
- sdfNaN === 0
- sdfInfinity === 0
- !contextLost
- fps > 10

## Critical Notes
1. **Rolling window**: 1000 logs max
2. **EMA learning**: 0.9/0.1 for steps, 0.95/0.05 for hit rate
3. **Console output**: Only errors and warnings
4. **Singleton**: `renderDiagnostics` exported instance
5. **Health check**: isHealthy() for quick status

## Usage
Called from WebGLEngine.ts and WebGPUEngine.ts:
```typescript
renderDiagnostics.updateFrameStats(128, 0.001, 20.0);
renderDiagnostics.trackGPUContext(false, renderTime);
```

## Dependencies
- No internal dependencies
