# FractalCanvas.tsx

**270 lines | Main canvas component**

## Purpose
GPU canvas with pointer/touch controls, zoom, orbit with inertia. Surfaces real engine load progress to the app-level loader.

## Props Interface (lines 6-19)
```typescript
interface FractalCanvasProps {
  params: FractalParams;
  onParamsChange: (updater: (prev: FractalParams) => FractalParams) => void;
  onTelemetryUpdate: (telemetry: TelemetryData) => void;
  screenshotRequested: boolean;
  onScreenshotCaptured: (dataUrl: string) => void;
  forcedBackend?: 'webgpu' | 'webgl2' | 'auto';
  onInteraction?: (zoomDelta: number, orbitDelta: number) => void;
  onNextSpecimen?: () => void;
  onPrevSpecimen?: () => void;
  onEngineReady?: () => void;
  onLoadProgress?: (progress: number) => void;
  scrollMode?: 'feed' | 'zoom';
}
```

## Key Features
- **Wheel zoom**: Exponential, range [0.01, 100], sensitivity 0.0012
- **Touch pinch**: 2-finger zoom with ratio-based scaling
- **Pointer orbit**: Drag to rotate with inertia and braking
- **Braking logic**: Direction change → stop rotation immediately
- **Dynamic sensitivity**: Zoom-dependent rotation speed

## Load Progress (lines 72-78)
Destructures `loadProgress` from `useRenderEngine` (line 72) and surfaces it via a `useEffect` (lines 76-78):
```typescript
useEffect(() => {
  onLoadProgress?.(loadProgress);
}, [loadProgress, onLoadProgress]);
```
This feeds the CosmicLoader pipeline: device init → shader compile stages → first rendered frame (0 → 0.12 → 0.92 → 1.0).

## Critical Notes
1. `passive: false, capture: true` - only way to preventDefault in React 19
2. `touchAction: 'none'` - prevents browser zoom/scroll interference
3. `key={activeEngineType}` - forces fresh canvas context on backend switch
4. `paramsRef` - keeps animation loop stable without re-subscribing
5. Embedded browser detection (Qoder, Electron) → forces WebGL2
6. `isCompiling` overlay (`#gpu-pipeline-loading-overlay`) shows while GPU pipeline compiles shaders

## Interaction Tracking
- `onInteraction?.(zoomDelta, 0)` - zoom magnitude on wheel (line 111) and pinch (line 142)
- `onInteraction?.(0, orbitMagnitude)` - orbit magnitude on pointer drag, throttled to one report per 300ms (lines 179-182)
- No preference-learning calls here (UserPreferenceEngine was removed); engagement learning happens in App via NeuroAestheticsEngine

## Error/Info Logging
- `userProblemLogger.log({ level: 'error', ... })` when canvas ref is null on mount (lines 86-90)
- `userProblemLogger.log({ level: 'info', ... })` on successful mount with canvas size + active engine type (lines 94-103)

## Dependencies
- `useRenderEngine.ts` - engine lifecycle, exposes `loadProgress`
- `UserProblemLogger.ts` - mount/error logging via `userProblemLogger` singleton
- (No `UserPreferenceEngine` - deleted)
