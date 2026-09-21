# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Smart shader prefetch — instant figure switching** — while the user views/controls the current fractal, the predicted next specimen's shader is pre-compiled in the background into the LRU cache (`WebGLEngine.prefetchFractal` + `NeuroAestheticsEngine.peekNextSpecimenType`, wired via `App.nextSpecimenType` → `useRenderEngine` effect). The actual switch takes a new **synchronous cached-swap path** (`adoptCachedProgram`): zero skipped frames, no `isSwappingShader` guard, no "Initializing GPU" chip. Cold (non-prefetched) swaps still work as before but the chip now only appears after a 400ms grace window, so sub-frame swaps never flash it. Verified by `tests/prefetch-test.ts` (prefetch starts unprompted → "Instant swap" on Далее → 30.6% canvas fill of the new figure).

### Fixed
- **Feed advanced without pressing «Далее» (keyboard double-trigger)** — Space/ArrowDown/ArrowRight/PageDown are page-scroll keys AND global "next specimen" bindings; after clicking «Далее» the focused button additionally received native Space/Enter activation, so one key press could advance twice and casual scrolling-key use silently navigated the feed. Keydown now ignores INPUT/TEXTAREA/SELECT targets and leaves Space/Enter to a focused BUTTON's native activation; all nav buttons (`feed-next-btn`, `feed-prev-btn`, ribbon buttons) blur after click so the key binding stays single-source.
- **Auto-explore could switch the figure mid-interaction** — the 18s/30s interval now skips its tick if the user gestured (wheel/drag/pinch) within the last 10s (`lastActivityAtRef` idle gate in `App`).
- **LRU eviction could delete the on-screen program** — `cacheShader` now skips indices registered via `setProtectedIndices` (the active program); with all entries protected the cache overflows temporarily instead of calling `deleteProgram` on a bound program (GL error / black canvas). Prefetching made this reachable: 8 background compiles could evict the current one.
- **Duplicate concurrent compile leak** — a background prefetch and a user switch to the same fractal could both splice + compile the same shader; the second `cacheShader` overwrite leaked the first WebGLProgram. `getShaderForFractal` now dedupes via an `inFlight` promise map.
- **CRITICAL: browser freeze on load and per-fractal switch eliminated** — the whole multi-second stall was a synchronous `getProgramParameter(program, LINK_STATUS)` read while ANGLE/D3D11 deferred the real driver compile to link time. Now `KHR_parallel_shader_compile` `COMPLETION_STATUS_KHR` is polled in a yielding `setTimeout` loop (budget > worst-case link) BEFORE reading status, with a single `gl.flush()` per call site (never per-spin). Per-switch main-thread gap dropped from 10–25 s to ~83–127 ms (verified via `tests/responsiveness-probe.ts`).
- **Loading animation synced to real device init** — `CosmicLoader` no longer runs a fake 450 ms `setInterval`; the progress bar and phase text are driven by real `ShaderManager` compile-stage callbacks surfaced through `WebGLEngine.onCompileProgress` → `useRenderEngine.loadProgress` (monotonic via `Math.max`, so stage callbacks can never regress the bar). `onEngineReady` now fires only on a **genuinely painted frame**: both engines' `render()` return `boolean` (`false` on silent skips while the shader lazily compiles), and the hook's first-frame gate requires `true` — previously any non-throwing `render()` call counted, so the loader could dismiss over a black canvas. CosmicLoader force-dismiss bound raised 15 s→30 s after the pixel-readback check in `tests/loader-sync-test.ts` caught the old timer racing the real first frame (≈16 s on headless ANGLE). Test now also samples 64×36 canvas non-black fill at the exact detach moment (fails if ≤0.5%). Desktop + mobile both PASS with real stage climb 13→99% and 18.8%/51.9% fill at detach.
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
