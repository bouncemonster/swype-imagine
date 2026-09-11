# useRenderEngine.ts

**636 lines | React hook for engine lifecycle**

## Purpose
Manages WebGPU/WebGL2 initialization, render loop, keyboard shortcuts, telemetry.

## Key Functions
- Engine init (WebGPU → WebGL2 fallback)
- Render loop (requestAnimationFrame, FPS targeting)
- Keyboard shortcuts (1-7, F, R, S, I, WASD)
- Telemetry dispatch (every 250ms)

## Critical Notes
1. Auto defaults to WebGL2 (WebGPU blocked in embedded browsers)
2. DPR capped: 1.5 (mobile/embedded), 2.0 (desktop)
3. rotY clamped [-1.52, 1.52] to prevent gimbal lock
4. Russian keyboard support (Ы, Ш, А, К)
5. Context loss handled here (re-init on restore)

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
