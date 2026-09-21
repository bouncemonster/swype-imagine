# useRenderEngine.ts

**782 lines | React hook for engine lifecycle**

## Purpose
Manages WebGPU/WebGL2 initialization, render loop, keyboard shortcuts, telemetry, and real loading progress.

## Key Functions
- Engine init (WebGPU → WebGL2 fallback)
- Loading progress (`loadProgress` state, line ~79): set to 0.12 on context acquire (~lines 243/279); `glEngine.onCompileProgress` maps shader stages to `Math.max(prev, 0.12 + (pct/100) * 0.8)` — monotonic, so out-of-order stage callbacks can never regress the bar (~line 280); `setLoadProgress(1)` + `onEngineReady` fire ONLY when `engine.render()` returns `true` (a real `drawArrays`/`submit` executed), gated by `firstRenderDoneRef` (~lines 519-535). Both engines' `render()` return `boolean`: `false` on silent skips (lazy shader compile still in progress / swap guard / oversized canvas) so the loader is never dismissed over an unpainted canvas.
- Failure paths (init failure / setup crash) set `loadProgress(1)` + fire `onEngineReady` so the loader can never stick
- Background prefetch: option `nextSpecimenTypes` (predicted next TWO specimens) → effect retries until `WebGLEngine.canPrefetch`, then `prefetchFractal(getFractalIndex(type))` for each compiles them into the LRU IN PARALLEL (up to 2 in flight); the actual switch then takes the engine's synchronous cached-swap path (no overlay, no skipped frames). **Cold-start guard (`firstRenderDoneRef`)**: prefetch is now HELD until the first real frame is painted (retried every 400ms). ANGLE/D3D11 serializes the driver-side LINK step, so the previous overlap of figures 1–2 with the critical-path figure 0 pushed figure 0's completion behind them and kept the loader up through ~3× the link work (visible in the init log: fractal 0 hits "linking 65%" early but only "complete 100%" AFTER the prefetched shaders finish). Warming the next figures after first paint still makes subsequent switches instant.
- `shaderCompilePct` (returned state): during a cold swap the render loop polls `engine.getSwapProgress()` — the chip shows real compile stage percentages (10/40/50/65/80/100)
- Swap overlay grace: `isCompiling` is only raised when `isSwappingShader` persists >400ms (rising-edge timestamp `swapGraceStartRef`) — instant cached swaps never flash the "Initializing GPU" chip; the failsafe force-hide fires only at 60s and only if no first frame ever rendered (a real-hardware cold start legitimately exceeds the old 12s bound)
- Render loop (requestAnimationFrame, FPS targeting)
- Shader swap feedback: when the WebGL engine's `isSwappingShader` is true (after first render), `setIsCompiling(true)` re-shows the loading overlay during per-fractal recompilation
- Keyboard shortcuts (1-9 and 0, F, R, S, I, WASD); Space/ArrowRight/ArrowDown/PageDown = next specimen, ArrowLeft/ArrowUp/PageUp = prev. Guarded: INPUT/TEXTAREA/SELECT targets are ignored, and Space/Enter on a focused BUTTON belongs to native activation (no double-advance); nav buttons blur themselves after click
- Telemetry dispatch (every 250ms)

## Critical Notes
1. Auto defaults to WebGL2 (WebGPU blocked in embedded browsers)
2. DPR capped: 1.0 (mobile), 1.5 (embedded), 2.0 (desktop) — line ~165
3. rotY clamped [-1.52, 1.52] to prevent gimbal lock
4. Russian keyboard support (Ы, Ш, А, К)
5. Context loss handled here (re-init on restore)
6. Mobile starts at quality level 0; embedded/desktop at 1 (medium)
7. **Orbit inertia physics**: post-release rotation glides from `velocityRef` (px/ms, EMA-smoothed in `FractalCanvas`) with `inertiaRot = velocity * deltaMs * INERTIA_ROT_SPEED (0.0035)` — the same factor as the drag, so the glide is continuous at release across all zooms — decaying frame-rate-independently (`0.94^(dt*60)`, threshold `0.00008`). Auto-rotation stays paused for 3s after the last move (`AUTO_ROTATION_RESUME_DELAY`) so it never fights the throw. Toggle with `I`.

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| 1-9, 0 | Render modes (keys 1-9 → solid…heatmap, key 0 → neon) |
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
