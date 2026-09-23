# Competitor Snapshot — 2026-09-23

Scope: projects under `_lab/` (local mirrors) + public signals via WebSearch.
Purpose: identify what techniques and UX affordances competitors ship that we don't, so
roadmap choices are informed rather than reactive. Every cited claim links back to a
README line or a public URL; nothing here is inference from a marketing page.

## Sources

- `_lab/Fractr/README.md` — Vue 3 + WebGPU fractal explorer, live at
  <https://shinigami92.github.io/Fractr/>
- `_lab/glChAoS.P/readme.md` — C++ OpenGL + WebGL/WebAssembly strange-attractor scout,
  live at <https://michelemorrone.eu/glchaosp/webGL.html>
- `_lab/3d-fractal-generator-webgl/` — barebones WebGL single-shader generator (not compared;
  no feature surface worth noting)
- WebSearch: "shadertoy 2026 trending techniques" (hits below)

## Fractr (WebGPU, 19 fractals) vs. our engine

Their README (lines 11–26) enumerates 16 shipped capabilities. Honest delta table:

| Fractr ships | We ship | Notes / where to look in our code |
|--------------|---------|------------------------------------|
| 19 fractals | **431** (131 DE + 10 Mandelbrot-powers + 290 parameterised variants) | We win 20×, verified by `docs/fractal-catalog.md` + `tests/visual-snapshot-sweep.ts` (406 rendered / 23 sparse / 2 black / 0 error) |
| 13 color modes | 26 hand + 640 procedural palettes (666 total) | We win numerically; they win on *named* color effects (AO, Temperature, Chromatic) — see gap #2 |
| **17 render modes** incl. Path Tracing, Whitted Ray Trace, Volume Rendering, Cel Shading | **10** SDF-based (Solid PBR, X-Ray, Topography, Hologram, Iridescent, Quantum, Gemstone, Wireframe, Heatmap, Neon) | Gap #1 — no stochastic/path-traced/volumetric mode |
| Progressive accumulation (stochastic modes converge when still) | None | Consequence of gap #1 |
| 6DOF camera with roll (Q/E) | Yaw + pitch + zoom only | Gap #3 — small, camera math already supports it |
| Radial menu (hold R/C/V wheel picker) | ExplanationModal + ControlsPanel tabs | Different UX; not strictly worse |
| Saved locations with **thumbnail + browse + filter + export/import** | Only URL hash `#type=X&engine=...&pos=...` | Gap #4 — persistence, real value |
| Distance-based camera speed (auto-slow near surfaces) | Constant rotate/zoom rate | Gap #5 — improves deep-zoom UX |
| Dynamic iterations by proximity to surface | FPS-driven DynamicQuality (resolution scale) | Similar goal, different lever |
| Gamepad support | None | Gap #6 — small, WebKit Gamepad API |
| Mobile dual-joystick touch (left=move, right=look) | Basic drag-orbit + pinch-zoom | Gap #7 — we're passive-viewer, they're explorer |
| Live URL updates with camera position | Static hash deep-links only | Gap #8 |
| F1 controls overlay | ExplanationModal (F key) | Parity |
| Shareable URLs (P to copy) | `share-fractal-btn` copies full URL | Parity |
| Game-style title/pause/settings HUD | CosmicLoader + full-screen HUD ribbon | Aesthetic choice; different target audience |

## glChAoS.P (OpenGL + WASM/WebGL, 250+ attractors)

Their niche is *strange attractors + IIM hypercomplex fractals + DLA3D*, not classic
mandelbulb-style SDF fractals. Two ideas worth stealing:

- **TransformFeedback → multi-Dot particle emitter** (README lines 38–40) — visualise
  dp/dt attractors as evolving point clouds, first-person cockpit view travel inside
  the particle stream. Our WebGL2 already supports `gl_TRANSFORM_FEEDBACK`; this would
  unlock a new *mechanic class* orthogonal to raymarching.
- **Cross-target desktop + web build** — same C++ codebase compiles to Windows/Linux/Mac
  native AND to WASM/WebGL for the browser (their "webGL" release is a *lightened* variant,
  frequently rebuilt from last commits). We are web-only; that's a scope choice, not a gap.

## Shadertoy context (public signals)

- Shadertoy's `/trending` returned "Sorry!" via our scrape (page itself 403s to bots).
  No live trending list obtained today.
- WebSearch hits:
  - "3D on the Web 2026 — WebGPU Updates" (Khronos GDC-week event, Mar 11 2026) — the
    WebGPU ecosystem is actively evolving; our dual-backend (WebGL2 primary + WebGPU subset
    131/431) is future-proof for that direction.
  - "Extruded Fibonacci Zoom" (sfVGDG, Aug 2026) — fractal infinite-zoom effects are still
    a hot technique; our `u_morph_speed` structural evolution is related but different.
  - "WebGPU Shader Toy" pongasoft v2026.06.11 — external tooling keeps improving for
    WebGPU authoring.

## Prioritised gaps for our roadmap

Ranked by (user-value × engineering-cost):

1. **[High value, medium cost] Path-traced render mode** — 1 of 10 → 11 styles, adds
   soft shadows + GI beyond our current SDF shading. Would take ~2–3 days in `webglShaders.ts`
   post-processing block, or a WGSL-only v1 (progressive accumulation on `webgpuShaders.ts`).
   This is the only Fractr feature class we clearly don't have.
2. **[High value, low cost] Saved locations + thumbnails** — a small IndexedDB store, a
   `Save` button next to `Share`, a modal browser. ~1 day. Differentiates against every
   fractal demo that only offers share-URL.
3. **[Medium value, low cost] 6DOF camera + distance-based speed** — extend `params` with
   roll, wire Q/E, scale step by `1/cam_dist`. ~0.5 day. Directly improves deep-zoom UX.
4. **[Medium value, medium cost] Particle-emitter mode for attractors** — enables glChAoS.P-
   class visualisation of the ~7 attractor entries we currently render as sparse dust
   (they are outside our `SOLID_EXPLORATION_TYPES` curation). ~3–4 days: new shader mode +
   `gl_TRANSFORM_FEEDBACK` binding in `WebGLEngine.ts`.
5. **[Low value, low cost] Gamepad support** — 200 lines with the standard Gamepad API.
   Nice-to-have for touch-adjacent exploration.
6. **[Nice-to-have] Live URL camera-position updates** — 50 lines in `useRenderEngine` +
   a router subscriber.

## Non-gaps (things competitors have that we intentionally don't)

- Native desktop builds (glChAoS.P) — we are a browser demo by design.
- VR / WebXR — still on our `Planned` list, no rush.
- Social feed / community gallery — this is what Shadertoy is; we're a single-user
  artistic explorer.

## Reproduce this snapshot

```powershell
cd app
# Re-read competitor READMEs:
type ..\_lab\Fractr\README.md
type ..\_lab\glChAoS.P\readme.md
# Live-verify their public URLs (browser):
start https://shinigami92.github.io/Fractr/
start https://michelemorrone.eu/glchaosp/webGL.html
```
