# useRenderEngine.ts

**782 lines | React hook for engine lifecycle**

## Purpose
Manages WebGPU/WebGL2 initialization, render loop, keyboard shortcuts, telemetry, and real loading progress.

## Key Functions
- Engine init (WebGPU → WebGL2 fallback)
- Loading progress (`loadProgress` state, line ~79): set to 0.12 on context acquire (~lines 243/279); `glEngine.onCompileProgress` maps shader stages to `Math.max(prev, 0.12 + (pct/100) * 0.8)` — monotonic, so out-of-order stage callbacks can never regress the bar (~line 280); `setLoadProgress(1)` + `onEngineReady` fire ONLY when `engine.render()` returns `true` (a real `drawArrays`/`submit` executed), gated by `firstRenderDoneRef` (~lines 519-535). Both engines' `render()` return `boolean`: `false` on silent skips (lazy shader compile still in progress / swap guard / oversized canvas) so the loader is never dismissed over an unpainted canvas.
- Failure paths (init failure / setup crash) set `loadProgress(1)` + fire `onEngineReady` so the loader can never stick
- Background prefetch: option `nextSpecimenType` (predicted next specimen) → effect retries every 2s until `WebGLEngine.canPrefetch`, then `prefetchFractal(getFractalIndex(type))` compiles it into the LRU while the user views the current fractal; the actual switch takes the engine's synchronous cached-swap path (no overlay, no skipped frames)
- Swap overlay grace: `isCompiling` is only raised when `isSwappingShader` persists >400ms (rising-edge timestamp `swapGraceStartRef`) — instant cached swaps never flash the "Initializing GPU" chip
- Render loop (requestAnimationFrame, FPS targeting)
- Shader swap feedback: when the WebGL engine's `isSwappingShader` is true (after first render), `setIsCompiling(true)` re-shows the loading overlay during per-fractal recompilation
- Keyboard shortcuts (1-7, F, R, S, I, WASD); Space/ArrowRight/ArrowDown/PageDown = next specimen, ArrowLeft/ArrowUp/PageUp = prev. Guarded: INPUT/TEXTAREA/SELECT targets are ignored, and Space/Enter on a focused BUTTON belongs to native activation (no double-advance); nav buttons blur themselves after click
- Telemetry dispatch (every 250ms)

## Critical Notes
1. Auto defaults to WebGL2 (WebGPU blocked in embedded browsers)
2. DPR capped: 1.0 (mobile), 1.5 (embedded), 2.0 (desktop) — line ~165
3. rotY clamped [-1.52, 1.52] to prevent gimbal lock
4. Russian keyboard support (Ы, Ш, А, К)
5. Context loss handled here (re-init on restore)
6. Mobile starts at quality level 0; embedded/desktop at 1 (medium)

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| 1-7 | Render modes (solid→gemstone) |
| F | Toggle flyThrough/orbit |
| R | Reset camera |
| S | Stop rotation |
| I | Toggle inertia |
| WASD/Arrows | Fly-through movement |
| Space/Arrows | Next/prev specimen |

## Dependencies
- `WebGLEngine.ts` - WebGL2 renderer
- `WebGPUEngine.ts` - WebGPU renderer
- `FractalParams, TelemetryData` - types
