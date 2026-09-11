# FractalCanvas.tsx

**231 lines | Main canvas component**

## Purpose
GPU canvas with pointer/touch controls, zoom, orbit with inertia.

## Key Features
- **Wheel zoom**: Exponential, range [0.01, 100], sensitivity 0.0012
- **Touch pinch**: 2-finger zoom with ratio-based scaling
- **Pointer orbit**: Drag to rotate with inertia and braking
- **Braking logic**: Direction change → stop rotation immediately
- **Dynamic sensitivity**: Zoom-dependent rotation speed

## Critical Notes
1. `passive: false, capture: true` - only way to preventDefault in React 19
2. `touchAction: 'none'` - prevents browser zoom/scroll interference
3. `key={activeEngineType}` - forces fresh canvas context on backend switch
4. `paramsRef` - keeps animation loop stable without re-subscribing
5. Embedded browser detection (Qoder, Electron) → forces WebGL2

## Interaction Tracking
- `userPrefEngine.recordInteraction('zoom', ...)` - zoom magnitude
- `userPrefEngine.recordInteraction('rotate', ...)` - rotation speed
- `onInteraction(zoomDelta, orbitDelta)` - telemetry reporting

## Dependencies
- `useRenderEngine.ts` - engine lifecycle
- `UserPreferenceEngine.ts` - interaction tracking
- `UserProblemLogger.ts` - error logging
