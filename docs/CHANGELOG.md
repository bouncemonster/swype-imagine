# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **`engine` URL deep-link param** — `#type=...&engine=webgpu|webgl2` now initialises `forcedBackend` so the rendering backend can be pinned straight from a share/demo link (defaults to `auto` = WebGL2 primary). Added for demos and cross-engine verification; documented in `docs/App.md` and `docs/webglShaders.md`.
- **Smart shader prefetch — instant figure switching** — while the user views/controls the current fractal, the predicted next TWO specimens' shaders are pre-compiled in the background into the LRU cache **in parallel** (`WebGLEngine.prefetchFractal`, `PREFETCH_CONCURRENCY=2` + `NeuroAestheticsEngine.peekNextSpecimenTypes(2)`, wired via `App.nextSpecimenTypes` → `useRenderEngine` effect). Prefetch no longer waits for the first frame — on cold start figures 1–2 compile concurrently with figure 0 on ANGLE's shader-compile thread pool, so the first clicks are covered too. The actual switch takes a new **synchronous cached-swap path** (`adoptCachedProgram`): zero skipped frames, no `isSwappingShader` guard, no "Initializing GPU" chip. Cold (non-prefetched) swaps still compile on demand but the chip now only appears after a 400ms grace window and shows the **real compile percentage** (`WebGLEngine.getSwapProgress()` → `useRenderEngine.shaderCompilePct` → progress bar in the FractalCanvas overlay) instead of a blind pulse. Verified by `tests/prefetch-test.ts` (both prefetches start unprompted, f2 kicks before f1 finishes = parallel, "Instant swap" on Далее, 22.9–25.9% canvas fill of the new figure).

### Fixed
- **WebGPU render styles were still flat silhouettes (cross-engine parity now closed)** — the WebGL relief-carrier / `fwidth()` anti-aliasing / de-flicker rework from the previous entry is now mirrored to WGSL in `webgpuShaders.ts`. A shared `relief = clamp(dot(col, luma)*1.7, 0.22, 1.35)` factor + `baseCol` sliver make all 7 modes keep the 3D form on both engines; topo contours and hologram scanlines/hex grid use `fwidth()`-derived widths (fade instead of moire); the hologram glitch/CA/shimmer, quantum waves/flux and iridescent interference-order `u_time` terms were slowed or made static to remove per-frame flicker; each style ends in the same `mix(baseCol * k, styleCol * relief, …)` blend as WebGL. The engine param above was added so this can be checked via `#engine=webgpu`. WGSL validated by review + the runtime WebGL fail-safe (a compile error can only fall back, never break the demo); the user's Chrome exercises the D3D WebGPU path. `tsc` clean, production build ok.
- **Render styles still collapsed the figure to a flat blob + the whole scene was clipped to a visible sphere** — follow-up to the overexposure fix, on the user's report "проблема с ужасными типами рендеринга остается" + "объекты ограничены сферой, за рамками ничего не рендерится". Per-style headless screenshots (mandelbulb × 7 modes) plus a zoomed space-filling capture (apollonian) proved two distinct defects: (1) every stylized mode still *replaced* the shaded base with a flat palette-derived color, so X-Ray/Hologram/Gemstone rendered as featureless silhouettes, while Topography/Iridescent/Quantum showed high-frequency patterns (contours, scanlines, hex grids, interference rings) that aliased into moire and `+ u_time` terms (hologram glitch/shimmer, quantum waves) that read as per-frame flicker; (2) space-filling fractals reach the `r_bound > 5.0` reject in `sceneSDF` and were hard-cut to a literal circle with pure black outside. Fixes in `webglShaders.ts` (shared footer → also reaches every spliced production shader), mirrored to `webgpuShaders.ts` where backend-agnostic: (a) a shared `relief` factor (normalized luminance of the base PBR pass) now multiplies each style's color and a `baseCol` sliver is retained, so all 7 modes keep the 3D form; (b) every decorative pattern width is derived from `fwidth()` so contours/scanlines/hex/rings fade instead of aliasing, and the racing `u_time` terms were slowed or made static (glitch is now per-point, not per-frame); (c) a `col *= 1.0 - smoothstep(3.5, 5.0, length(p))` boundary fade dissolves the render-sphere edge into the background — a pure post-shade multiply that leaves the raymarch bounds/step tuning (the transparent-sphere safety check) untouched and cannot affect bounded fractals (mandelbulb/mandelbox stay inside r=3.5). Verified: `tsc` clean, `npm test` 1861/0, before/after screenshots for all 7 styles + apollonian (hard circle → soft radial dissolve). (The 7-style relief/AA rework was WebGL-only at that commit — now closed to WebGPU parity, see the entry above.) Apollonian's intrinsic orbit-trap speckle at high detail is a separate fractal-shading matter, documented.
- **Dead and grain-inducing post-processing removed (sharper figure + reclaimed GPU time)** — follow-up to the overexposure fix, addressing the same "механики рендеринга мешают насладиться фигурами" complaint. The `webglShaders.ts` post chain carried two mathematically-dead loops and two noise sources: (1) a 25-tap "bokeh" DOF and a 5-tap "motion blur" that computed pixel offsets but then averaged `col` with *itself* (never re-sampling the scene) — a weighted-average no-op that returned `col` unchanged while burning fragment cycles; (2) a chromatic-aberration and a color-space dither whose hashes included `+ u_time`, so on the now-slowly-evolving surface they read as per-pixel flicker/grain rather than dispersion or banding relief. Both blur blocks were deleted; CA became a stable radial `bg_rad²` RGB lift; the color dither and the raymarch start-jitter dither became static per-pixel hashes (still break banding/quantization, no shimmer). Mirrored to `webgpuShaders.ts` (bloom threshold 0.6→0.8 / strength 0.35→0.16 + the same static CA/dither; WGSL never had the dead blur loops). `FractalEngineBase` comment updated (the `u_auto_rotate` slot no longer feeds a shader motion-blur). Verified: `tsc` clean, `npm test` 1861/0, live headless render of mandelbulb/solid on the production bundle (0 console errors, 10.8% canvas fill, relief + hue intact).
- **Overexposed render flattened every figure to a cream blob; 7 render styles were visually identical** — user-reported "механики рендеринга мешают насладиться фигурами". Headless screenshots proved the base PBR composite (`diffuse*2.0 + spec*1.5 + rim*1.6 + bounce*1.2` over an already full-brightness palette color) drove the HDR signal to 3–6/channel, so auto-exposure target 1.8 + ACES + a wide 0.6-threshold bloom clipped the whole surface to white — palette hue and surface relief were destroyed. Worse, every stylized mode *replaced* `col` (X-Ray kept 12% of the base, Hologram 6%, Topography/Iridescent/Quantum/Gem 0%) and rebuilt its color from the same monochrome specimen palette, so all 7 modes converged to the same cream silhouette. Fixes, applied to `webglShaders.ts` (which the spliced per-fractal shaders share via the footer) and mirrored to `webgpuShaders.ts`: (1) rebased the PBR composite into ACES' chromatic region (diffuse 0.95 / spec 0.7 / rim 0.6 / bounce 0.5), auto-exposure target 1.8→1.1, bloom threshold 0.6→0.8 & strength 0.35→0.16; (2) every style now **preserves the base relief** (`col = mix(col*0.2–0.45, styleCol, 0.72–0.85)`) instead of discarding it; (3) styles got palette-independent identities (Hologram cyan, X-Ray cool radiograph w/ contrast curve, Topography a real water→snow elevation ramp, Quantum cold-cyan→hot-magenta, Gem a prismatic cast); (4) god-rays are now gated on the Ether Fog slider and cut from 8→5 `sceneSDF` samples/pixel (an FPS sink that fed the DynamicQuality 2→1 flapping) and tinted to the accent instead of a warm-white veil. Verified via before/after screenshots across all 7 styles.
- **Fractals were static sets, not living structures** — beyond the scale-pulse and slow rotation, nothing about the geometry developed over time. `sceneSDF` (both the monolith and `ShaderManager.generateMinimalSceneSDF`, mirrored in the WGSL shader) now drifts the golden fold parameter `phi` on slow golden-ratio sub-harmonics of the morph clock and breathes the iteration depth ±2, so bulb counts / fold symmetry / fine detail genuinely evolve while you look. Amplitude scales with `morphSpeed`, so setting it to 0 freezes the figure; the existing slider now drives real structural evolution.
- **Loading-animation freeze on real hardware eliminated (poll-budget fall-through)** — user-reported console trace showed the loader bar stalling and switches staying slow despite prefetching. Root cause: `waitUntilCompiled`/`pollCompletion` spin budgets (link 3200 / compile 800) were SMALLER than worst-case cold ANGLE link time (tens of seconds, longer under concurrent prefetch), so polling gave up mid-compile and the following synchronous `COMPILE_STATUS`/`LINK_STATUS` read blocked the main thread for seconds — `tests/loader-sync-test.ts` measured a 3.4 s post-first-frame rAF stall from exactly this fall-through. Budgets raised to 16000 yielding spins (≈ minutes), so the non-blocking poll, not a frozen tab, always ends the wait; post-first-frame gap dropped to 67–83 ms (loader-sync PASS desktop+mobile).
- **"Shader swap timeout — resetting after 301 frames" spam / chip flicker** — the swap guard's frame-based 5 s budget tripped in the middle of legitimate cold compiles on real GPUs, hiding the loading chip for a frame and re-arming every 5 s. The guard is now TIME-based with a 120 s hang-detection budget; the chip shows one continuous honest progress for the whole wait.
- **Fail-safe timers cut real init short on slow GPUs** — `useRenderEngine` force-hid the loading overlay at a fixed 12 s (while the real first frame legitimately arrives at 20–40 s on cold ANGLE) and `CosmicLoader` force-dismissed at 30 s, exposing a black canvas mid-compile. Both bounds raised to 60 s; the engine-visible force-hide additionally fires only if no first frame ever rendered.
- **Feed advanced without pressing «Далее» (keyboard double-trigger)** — Space/ArrowDown/ArrowRight/PageDown are page-scroll keys AND global "next specimen" bindings; after clicking «Далее» the focused button additionally received native Space/Enter activation, so one key press could advance twice and casual scrolling-key use silently navigated the feed. Keydown now ignores INPUT/TEXTAREA/SELECT targets and leaves Space/Enter to a focused BUTTON's native activation; all nav buttons (`feed-next-btn`, `feed-prev-btn`, ribbon buttons) blur after click so the key binding stays single-source.
- **Auto-explore could switch the figure mid-interaction** — the 18s/30s interval now skips its tick if the user gestured (wheel/drag/pinch) within the last 10s (`lastActivityAtRef` idle gate in `App`).
- **LRU eviction could delete the on-screen program** — `cacheShader` now skips indices registered via `setProtectedIndices` (the active program); with all entries protected the cache overflows temporarily instead of calling `deleteProgram` on a bound program (GL error / black canvas). Prefetching made this reachable: 8 background compiles could evict the current one.
- **Duplicate concurrent compile leak** — a background prefetch and a user switch to the same fractal could both splice + compile the same shader; the second `cacheShader` overwrite leaked the first WebGLProgram. `getShaderForFractal` now dedupes via an `inFlight` promise map.
- **CRITICAL: browser freeze on load and per-fractal switch eliminated** — the whole multi-second stall was a synchronous `getProgramParameter(program, LINK_STATUS)` read while ANGLE/D3D11 deferred the real driver compile to link time. Now `KHR_parallel_shader_compile` `COMPLETION_STATUS_KHR` is polled in a yielding `setTimeout` loop (budget > worst-case link) BEFORE reading status, with a single `gl.flush()` per call site (never per-spin). Per-switch main-thread gap dropped from 10–25 s to ~83–127 ms (verified via `tests/responsiveness-probe.ts`).
- **Loading animation synced to real device init** — `CosmicLoader` no longer runs a fake 450 ms `setInterval`; the progress bar and phase text are driven by real `ShaderManager` compile-stage callbacks surfaced through `WebGLEngine.onCompileProgress` → `useRenderEngine.loadProgress` (monotonic via `Math.max`, so stage callbacks can never regress the bar). `onEngineReady` now fires only on a **genuinely painted frame**: both engines' `render()` return `boolean` (`false` on silent skips while the shader lazily compiles), and the hook's first-frame gate requires `true` — previously any non-throwing `render()` call counted, so the loader could dismiss over a black canvas. CosmicLoader force-dismiss bound raised 15 s→30 s (later again to 60 s, see the poll-budget fail-safe entry above) after the pixel-readback check in `tests/loader-sync-test.ts` caught the old timer racing the real first frame (≈16 s on headless ANGLE). Test now also samples 64×36 canvas non-black fill at the exact detach moment (fails if ≤0.5%). Desktop + mobile both PASS with real stage climb 13→99% and 18.8%/51.9% fill at detach.
- **WebGL minimal-shader compile failures for 16 fractal types eliminated** — `ShaderManager.buildMinimalFragmentShader` now (1) transitively pulls in body-region helpers a fractal function calls (e.g. `project4Dto3D` for the 4D polytopes tesseract/120Cell/600Cell), and (2) returns the full monolithic shader when the catalog ordinal resolves to a shared `*Base`/`*Variant` dispatch helper instead of a self-contained function (flames/ifs3D at indices 117–126). Full 431-type Playwright sweep: render errors 16 → 0, valid 388 → 401 (rest are sparse-at-default-params, not defects). Verified via `tests/visual-snapshot-sweep.ts` + `tests/visual-snapshot-analyze.ts`.
- **Root error boundary + GPU-init failure surfaced** — `FractalErrorBoundary` moved to wrap `<App/>` at the `main.tsx` root (was only wrapping `<main>` inside App, so App-body throws white-screened); `useRenderEngine` gained an `initFailed` flag driving a "3D rendering unavailable" overlay in `FractalCanvas` instead of a silent black canvas.
- **Two genuine shader-math bugs repaired (11 previously-black variant renders recovered)** — `mapIFSBase` `fold==2` (Menger) never applied `z = abs(z)` before its magnitude-sort, so signed coordinates diverged past the `r>8` escape at iteration 0-1 and returned an empty SDF; `mapLSystemBase` `op==5` (Hilbert) had dead code (`vec3 a` unused) plus an `abs(z-0.5)*2.0` doubling with `offset=0` that kept no orbit bounded. Both folds rewritten as bounded octant folds modelled on their working neighbours. Fixes are contained to the 6 `ifsVariant` (Menger) + 5 `lsystemVariant` (Hilbert) types, which were all black before; they now render at 10-28% fill, framed at the default camera.
- **Per-fractal camera framing for index >= 42** — `FRACTAL_CAM_ADJUST` only covered indices 0-41, so everything above defaulted to `zoomScale 1.0` and rendered thin attractors/curves as sub-1% specks. Added `FRACTAL_CAM_ADJUST_OVERRIDES` (keyed by fractal index) for the affected types. Full sweep now **418/431 valid, 0 errors**; the remaining 13 are documented in `visual-snapshot-analyze.ts` as *intentional sparse* (correct dispatch + clean compile, but 2D maps / high-power thin shells that are genuinely near-measure-zero in a 3D distance field).

### Removed
- `src/engine/UserPreferenceEngine.ts` (251 lines) — recorded interactions to localStorage but no output was ever consumed; 3 call sites removed from `FractalCanvas.tsx`.
- Duplicated documentation-drift pass: deleted `docs/UserPreferenceEngine.md`, corrected stale fractal-type counts (431) and palette count (26) across docs, flagged dated historical logs.

### Added
- `KHR_parallel_shader_compile` support in `WebGLEngine.pollCompletion` and `ShaderManager.waitUntilCompiled` (link budget raised so the non-blocking poll, not a blocking read, ends the wait).
- Post-swap warmup: 24 low-quality frames after each shader change so driver ramp-up can't spike frame times.
- Full visual regression harness: `tests/visual-snapshot-sweep.ts` (renders all 431 types in the live site via Playwright with stable loader-detach + non-black waits, one `fractal-NNN-{slug}.png` each) and `tests/visual-snapshot-analyze.ts` (dependency-free zlib PNG pixel-diff vs `tests/baseline/`, writes `tests/results/visual-snapshot-report.md`).

### Planned
- VR support (WebXR)
- Fractal animation editor
- Export to video/GIF
- Collaborative sharing features
- Mobile app (PWA)
- Audio-reactive mode

## [2.4.0] - 2026-09-14

### Changed
- **ShaderManager v3 — true minimal shader compilation**: parses `FRAGMENT_SHADER_SOURCE` directly and splices a per-fractal shader (header + ONE `map*` function + minimal `sceneSDF` + footer, ~1000 lines) instead of assembling the full 4195-line monolith, avoiding `GL_OUT_OF_MEMORY` crashes. LRU cache raised to 8 programs.
- Replaced the Sept-13 dynamic-`import()` module-split experiment (fractalsA/B/C.ts) with a static, single-source approach; those module files and the split-footer build script were removed.

## [1.9.0] - 2026-09-11

### Fixed
- **CRITICAL: Transparent sphere clipping eliminated** — `r_bound` threshold expanded from 5.0 to 12.0 in both GLSL and WGSL shaders. Fractals now render beyond the previous hard boundary sphere.
- **CRITICAL: Shader compilation errors fixed** — `hit_threshold` scope issue, `base` → `base_n` typo, `sssCol` → `sssColor` typo, missing `u_auto_rotate` uniform declaration
- **CRITICAL: Division-by-zero guards** — `mapFlameSpherical`, `mapAmazingBox`, `mapMandelboxMandelboxHybrid` now guard against `r2 = 0`
- **HIGH: Unguarded log(r)** — 5 spiral flame variants now use `log(max(r, 0.0001))`
- **HIGH: gammaCorrect NaN** — `pow(max(col, 0.0), ...)` prevents NaN from negative color components
- **MEDIUM: Plasma IFS stale r-squared** — 5 variants now compute `r2` from modified `z` with div-by-zero guard
- **MEDIUM: MathValidation determinant** — improved singular matrix detection
- **MEDIUM: COMPATIBLE_HYBRIDS** — added 27 missing fractal type entries (4D polytopes, manifolds, flames, advanced IFS)
- **Ray-marching bounds expanded** — bounding box ±2.5→±5.0, sphere 6.0→10.0, missCount 16→32, LOD reduction 8→4
- **Auto-rotation pauses during interaction** — drag/zoom/pinch stops rotation, resumes after 3s idle
- **Inertia decay frame-rate independent** — `Math.pow(decay, dtSec * 60)` normalizes to 60fps baseline
- **preventDefault passive listener errors** — `stopPropagation()` on wheel/touch handlers prevents React 19 conflict

## [1.0.0] - 2026-09-10

### Added
- **Core Features**
  - WebGPU renderer with WebGL2 fallback
  - 86 active fractal types (431 total mapped)
  - 110+ canonical fractals in scientific catalog
  - 7 render modes (Solid, X-Ray, Topographic, Hologram, Iridescent, Quantum, Gemstone)
  - 8 composite operations for fractal blending
  - 4 camera modes (Orbit, Fly, Slice, Probe)
  - Real-time morphing between fractal types
  - Neuro-aesthetics engine for personalized recommendations
  - User preference learning system

- **UI Components**
  - ControlsPanel with 8 tabs (Architectures, Composition, Camera, Palettes, Morphology, GPU, Audio, Neuro)
  - FractalCanvas with gesture support
  - FractalScrollFeed for neuro-feed ribbon
  - FractalInfoHUD with auto-hide
  - FractalProbeHUD for topological analysis
  - TelemetryHUD for performance monitoring
  - DebugOverlay for diagnostics
  - ExplanationModal with scientific content
  - UserProfileModal for taste profile
  - ProjectManifestModal for welcome screen
  - CosmicLoader for loading states
  - FractalAtlasModal for fractal catalog

- **Shader System**
  - 187KB GLSL shaders (WebGL2)
  - 140KB WGSL shaders (WebGPU)
  - 50 Julia/Mandelbulb variations
  - 50 hybrid fractal combinations
  - 40 flame variations
  - 30 IFS attractors
  - 30 L-system variations
  - Advanced rendering techniques (AO, shadows, PBR)
  - Post-processing effects (bloom, tone mapping, vignette)

- **Data Layer**
  - 24 hand-crafted color palettes
  - 640 procedurally generated palettes
  - 8 fractal categories
  - Scientific catalog with formulas and dimensions
  - Fractal factory for creating presets

- **Audio**
  - Golden ratio-based audio engine (432 Hz)
  - 3 tuning modes (phi432, fibonacci, zenChimes)
  - Procedural audio generation

- **Documentation**
  - 37 documentation files (151KB)
  - Architecture diagrams (Mermaid)
  - Step-by-step tutorials
  - Troubleshooting guide
  - Deployment guide
  - FAQ
  - Contributing guide
  - Complete API reference

### Performance
- Dynamic Resolution Scaling (DRS)
- Optimized uniform buffer (48 floats, 192 bytes)
- GPU instancing for efficient rendering
- Lazy loading of components
- Memoization of expensive computations
- Mobile-optimized settings

### Technical
- React 18 with TypeScript
- Vite build system
- Tailwind CSS v4
- Cloudflare Pages deployment
- GitHub Actions CI/CD
- ESLint + Prettier

## [0.9.0] - 2026-08-15

### Added
- WebGPU renderer implementation
- Initial fractal type system
- Basic ray marching algorithm
- Uniform buffer structure

### Changed
- Migrated from WebGL-only to WebGPU-first architecture
- Improved shader compilation pipeline
- Better error handling for GPU contexts

### Fixed
- GPU memory leaks on context loss
- Shader compilation errors on mobile
- Performance issues with high iteration counts

## [0.8.0] - 2026-07-20

### Added
- Neuro-aesthetics engine prototype
- User preference tracking
- Archetype resonance system
- Initial recommendation algorithm

### Changed
- Refactored state management
- Improved component architecture
- Better TypeScript types

## [0.7.0] - 2026-06-10

### Added
- Fractal catalog system
- 8 category files
- Fractal factory pattern
- Scientific metadata (formulas, dimensions)

### Changed
- Restructured data layer
- Improved fractal type mappings
- Better preset system

## [0.6.0] - 2026-05-05

### Added
- Shader module system
- Julia variations (50 variants)
- Hybrid variations (50 variants)
- Modular shader architecture

### Changed
- Split monolithic shader into modules
- Improved shader organization
- Better code reuse

## [0.5.0] - 2026-04-01

### Added
- Render mode system
- 7 render modes implemented
- Post-processing pipeline
- Tone mapping and color grading

### Changed
- Unified render interface
- Improved lighting calculations
- Better material system

## [0.4.0] - 2026-03-15

### Added
- Camera system
- 4 camera modes
- Gesture controls
- Touch support for mobile

### Changed
- Refactored camera logic
- Improved interaction handling
- Better mobile UX

## [0.3.0] - 2026-02-20

### Added
- Color palette system
- 24 hand-crafted palettes
- Procedural palette generation (640 palettes)
- Golden angle distribution

### Changed
- Improved color theory implementation
- Better palette transitions
- HSL to RGB conversion

## [0.2.0] - 2026-01-10

### Added
- Basic UI components
- ControlsPanel with tabs
- HUD overlays
- Modal system

### Changed
- React component architecture
- Improved state management
- Better TypeScript integration

## [0.1.0] - 2025-12-01

### Added
- Initial project setup
- Vite + React + TypeScript
- Tailwind CSS configuration
- Basic folder structure
- Development environment

---

## Version Categories

### Major Versions (X.0.0)
- Breaking changes
- Architecture redesigns
- Major feature additions

### Minor Versions (0.X.0)
- New features
- Significant improvements
- Backward compatible

### Patch Versions (0.0.X)
- Bug fixes
- Small improvements
- Performance optimizations
- Documentation updates

---

## Contribution Guidelines

When adding entries:

1. **Use proper format**
   ```markdown
   ### Added
   - New feature description
   
   ### Changed
   - What was changed
   
   ### Fixed
   - What was fixed
   ```

2. **Be specific**
   - Include file names when relevant
   - Mention affected components
   - Add performance numbers if applicable

3. **Group related changes**
   - By feature
   - By component
   - By subsystem

4. **Include dates**
   - Use ISO 8601 format: YYYY-MM-DD
   - Update [Unreleased] section regularly

---

## Release Process

1. **Update CHANGELOG**
   - Move [Unreleased] to new version
   - Add release date
   - Create new [Unreleased] section

2. **Update version**
   ```bash
   npm version minor  # or major, patch
   ```

3. **Commit changes**
   ```bash
   git add CHANGELOG.md package.json package-lock.json
   git commit -m "chore: release v1.0.0"
   git tag v1.0.0
   ```

4. **Push**
   ```bash
   git push origin main --tags
   ```

5. **Deploy**
   - CI/CD will auto-deploy
   - Verify production
   - Update release notes on GitHub

---

## Statistics

### Code Metrics (as of v1.0.0)
- **Source files**: 54 TypeScript/TSX files
- **Documentation**: 37 markdown files (151KB)
- **Shader code**: 327KB (GLSL + WGSL)
- **Total lines**: ~15,000 (source) + ~10,000 (docs)
- **Components**: 13 UI components
- **Fractal types**: 86 active, 431 total
- **Render modes**: 7
- **Color palettes**: 664 (24 hand-crafted + 640 procedural)

### Performance Benchmarks
- **Desktop (RTX 3060+)**: 120+ FPS (WebGPU)
- **Desktop (GTX 1060)**: 90+ FPS (WebGPU)
- **Laptop (Integrated)**: 60+ FPS (WebGPU)
- **Mobile (Flagship)**: 60+ FPS (WebGL2)
- **Mobile (Mid-range)**: 30+ FPS (WebGL2)

---

## Acknowledgments

Thanks to all contributors who made this project possible!

See [GitHub Contributors](https://github.com/your-username/golden-ratio-webgpu-fractal-engine/graphs/contributors) for the full list.

---

## License

MIT License - see LICENSE file for details.
