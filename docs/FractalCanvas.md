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
  /** Predicted next specimen types (1st + 2nd ahead) — engine background-prefetches their shaders in parallel while the current one is viewed. */
  nextSpecimenTypes?: FractalType[];
  scrollMode?: 'feed' | 'zoom';
}
```

## Key Features
- **Wheel honours `scrollMode`** (was previously dead — always zoomed): **default is `'zoom'`** (prop default in `FractalCanvas` + `App` `useState('zoom')`) so the wheel zooms as it historically did — the earlier `'feed'` default made the wheel navigate specimens and read as a regression. `scrollMode==='feed'` navigates specimens (next/prev on scroll direction) debounced 250ms via `lastFeedNavRef`; `scrollMode==='zoom'` zooms with a proportional curve `exp(-clamp(deltaY/100, ±1.5) * 0.12)` (range [0.01, 100]) that feels identical on trackpad and discrete wheel, replacing the old inconsistent `exp(sign*min(|deltaY|*0.0012, 0.18))`. `scrollMode` is in the wheel-listener effect's dep array, so the «Лента/Зум» toggle re-binds the handler live.
- **Touch pinch**: 2-finger zoom with ratio-based scaling
- **Pointer orbit**: Drag to rotate with inertia and braking. Release velocity is an exponential moving average over a ~30ms window (not the raw last `pointermove` delta), so a sharp flick-and-release throws consistently and a small final move before lifting no longer kills the momentum
- **Braking logic**: Direction change → stop rotation immediately
- **Continuous glide**: release momentum reuses the exact drag rotation factor (`0.0035` rad/px, kept in sync with `useRenderEngine` `INERTIA_ROT_SPEED`) so the figure keeps spinning at release with no speed jump; the old zoom-dependent sensitivity stalled the glide at close zooms

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
6. `isCompiling` overlay (`#gpu-pipeline-loading-overlay`) shows while GPU pipeline compiles shaders; during a cold swap it renders the REAL compile percentage (`shaderCompilePct` from `engine.getSwapProgress()`) with a small progress bar — no blind pulse

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
