# Golden Ratio WebGPU Fractal Engine - Architecture

## Project Overview
Real-time 3D fractal visualization engine with **431 fractal types** (141 core + 290 variants), **10 render modes**, and advanced PBR lighting. **v6.0.0** stable release; modular shader architecture with lazy compilation (introduced v2.4.0).

## Tech Stack
- **Runtime**: TypeScript 5.8, React 19, Vite ^6.2.3
- **Rendering**: WebGL2 (primary, all 431 types), WebGPU (optional — 131/431 types implemented, 131-430 fall back to phyllotaxis)
- **Shaders**: GLSL ES 3.00 (WebGL2), WGSL (WebGPU)
- **Build**: Vite with esbuild, ~4s build time
- **Bundle**: boot `index` 283 KB / 88 KB brotli; total JS ~830 KB across 9 chunks, 80 KB CSS
- **Code splitting**: React.lazy on ControlsPanel + 4 modals (ExplanationModal, UserProfileModal,
  ProjectManifestModal, FractalAtlasModal) — 5 lazy chunks fetched on demand, not at boot

## Directory Structure
```
src/                                          # 54 TypeScript/TSX files, ~935KB source
├── shaders/
│   ├── webglShaders.ts          # Main shader (161KB, 4195 lines) - ALL 431 types, 7 render modes
│   ├── webgpuShaders.ts         # WebGPU shader (158KB, 4069 lines) - 131/431 types
│   └── modules/
│       ├── juliaVariations.ts   # 50 Julia variations (6.3KB, 110 lines, 12x compression)
│       ├── flameVariations.ts   # 50 Fractal Flame variations (6.2KB, 114 lines, 11x compression)
│       ├── hybridVariations.ts  # 90 Hybrid fractals (12KB, 180 lines, 15x compression)
│       ├── ifsVariations.ts     # 50 IFS variations (6.3KB, 115 lines, 11x compression)
│       └── lsystemVariations.ts # 50 L-System variations (7.1KB, 130 lines, 11x compression)
├── engine/
│   ├── FractalEngineBase.ts     # Base class, uniform packing (9.6KB, 220 lines)
│   ├── WebGLEngine.ts           # WebGL2 renderer (23KB, 523 lines)
│   ├── WebGPUEngine.ts          # WebGPU renderer (8.7KB, 238 lines)
│   ├── ShaderManager.ts         # Lazy minimal shader assembly + LRU cache (15KB, 327 lines)
│   ├── fractalMappers.ts        # Type/index mappings (22KB, 577 lines, 451 names → 431 indices)
│   ├── NeuroAestheticsEngine.ts # AI aesthetics scoring (44KB, 1112 lines)
│   ├── UserProblemLogger.ts     # Error logging (6.9KB, 238 lines)
│   ├── RenderDiagnostics.ts     # Diagnostics (6.7KB, 261 lines)
│   └── MathValidation.ts        # Math validation (1.5KB, 58 lines; not used in render paths)
├── components/
│   ├── FractalCanvas.tsx        # Main canvas, camera controls (10KB, 269 lines)
│   ├── ControlsPanel.tsx        # UI controls (43KB, 873 lines) — lazy
│   ├── TelemetryHUD.tsx         # FPS/stats display (7.6KB, 171 lines)
│   ├── FractalInfoHUD.tsx       # Fractal info overlay (17KB, 389 lines)
│   ├── FractalProbeHUD.tsx      # Probe overlay (5.5KB, 128 lines)
│   ├── FractalScrollFeed.tsx    # Horizontal browser (12KB, 281 lines)
│   ├── FractalAtlasModal.tsx    # Atlas modal (33KB, 574 lines) — lazy (+ 95KB catalog)
│   ├── ExplanationModal.tsx     # Explanation modal (16KB, 207 lines) — lazy
│   ├── UserProfileModal.tsx     # User profile modal (18KB, 363 lines) — lazy
│   ├── ProjectManifestModal.tsx # Manifest modal (8.5KB, 176 lines) — lazy
│   ├── CosmicLoader.tsx         # Progress-driven loading overlay (6.9KB, 180 lines)
│   └── DebugOverlay.tsx         # Debug overlay (6.6KB, 158 lines)
├── hooks/
│   └── useRenderEngine.ts       # Main render loop, keyboard shortcuts, loadProgress (33KB, 781 lines)
├── data/
│   ├── canonicalFractals.ts     # Fractal catalog (1.4KB, 31 lines)
│   ├── fractalCatalogTypes.ts   # Catalog types (4.1KB, 115 lines)
│   ├── fractalFactory.ts        # Factory function (2.4KB, 86 lines)
│   ├── compatibleHybrids.ts     # Hybrid breeding matrix (16KB, 250 lines)
│   ├── fractalArchitectures.ts  # Architecture tab data (7.7KB, 194 lines)
│   └── categories/              # 11 category files (10 FractalCategoryKey, 145 catalog entries)
│       ├── geometricCurves.ts   # Geometric curves (16KB, 298 lines)
│       ├── constructiveFractals.ts  # Constructive fractals (8.6KB, 182 lines)
│       ├── algebraicFractals.ts     # Algebraic fractals (12KB, 210 lines)
│       ├── multidimensionalFractals.ts # Multidimensional (3.9KB, 96 lines)
│       ├── ifsFractals.ts           # IFS fractals (6.8KB, 152 lines)
│       ├── stochasticFractals.ts      # Stochastic fractals (4.2KB, 113 lines)
│       ├── physicalFractals.ts        # Physical fractals (6.5KB, 152 lines)
│       ├── expandedRealFractals.ts    # Expanded real fractals (8.1KB, 250 lines)
│       ├── visuallyDistinctFractals.ts # Visually distinct (6.7KB, 162 lines)
│       ├── mandalas3D.ts              # 3D Mandalas (13KB, 313 lines)
│       ├── temporalManifolds.ts       # Temporal manifolds (12KB, 307 lines, 19 entries)
│       └── index.ts                   # Category exports (690B, 16 lines)
├── audio/
│   └── goldenAudio.ts           # φ-tuned ambient audio (22KB, 556 lines)
├── types/
│   └── fractal.ts               # TypeScript interfaces (33KB, 576 lines)
├── palettes.ts                  # Color palettes — 26 hand-crafted (7.6KB, 212 lines)
├── palettesProcedural.ts        # Procedural palettes — 640 (80 themes × 8) (3.3KB, 89 lines)
├── App.tsx                      # Main app component (30KB, 717 lines) — 5 React.lazy() + Suspense
└── main.tsx                     # Entry point (725B, 18 lines)

tests/                                        # 19 test files, ~5480 lines
├── fractal-autotest.ts          # 822-assertion integration test (421 lines)
├── fractal-mapper-test.ts       # Mapper completeness (524 assertions, 260 lines)
├── shader-math-validation-test.ts # GLSL math safety (113 assertions, 578 lines)
├── cross-engine-parity-test.ts  # WebGL/WebGPU parity (81 assertions, 307 lines)
├── browser-harness.ts           # Playwright browser test harness (764 lines)
├── browser-fractal-test.ts      # Browser integration test (230 lines)
├── external-browser-test.ts     # External-browser rendering test (269 lines)
├── advanced-fractal-test.ts     # Advanced fractal browser test (376 lines)
├── headless-fractal-test.ts     # Headless smoke test (140 lines)
├── browser-smoke-test.ts        # Quick smoke test (63 lines)
├── render-style-test.ts         # Render style visual test (74 lines)
├── visual-step-test.ts          # Per-fractal visual step regression (285 lines)
├── stress-test-cycle.ts         # Long-run stress cycle (416 lines)
├── continuous-render-test.ts    # Sustained render stability (376 lines)
├── loader-sync-test.ts          # Loader/progress sync check (154 lines)
├── responsiveness-probe.ts      # Input-latency probe (121 lines)
├── performance-benchmark.ts     # Performance benchmark (256 lines)
├── code-quality-check.ts        # Code quality validation (353 lines)
└── palette-diagnostic.ts        # Palette diagnostic (57 lines)
```

**Total**: 73 TypeScript/TSX files (54 src + 19 tests), ~935KB src source code

## Critical Architecture Decisions

### 1. kkrieger-Style Shader Compression (v2.3.0)
**PHILOSOPHY**: Exchange memory for computation — store only mathematical instructions, not pre-baked assets.

**RESULT**: 5 shader variation modules compressed from 7,934 lines → 649 lines (12x compression).
All mathematical formulas, parameters, and visual quality preserved.

| Module | Before | After | Compression | Math Preserved |
|--------|--------|-------|-------------|---------------|
| hybridVariations.ts | 2670 lines (67KB) | 180 lines (12KB) | 15x | 8 fold types |
| juliaVariations.ts | 1353 lines (36KB) | 110 lines (6KB) | 12x | 5 set types |
| ifsVariations.ts | 1227 lines (27KB) | 115 lines (6KB) | 11x | 8 IFS types |
| lsystemVariations.ts | 1414 lines (30KB) | 130 lines (7KB) | 11x | 11 L-System types |
| flameVariations.ts | 1270 lines (29KB) | 114 lines (6KB) | 11x | 11 Flame types |
| **Total modules** | **7934 lines (189KB)** | **649 lines (38KB)** | **12x** | **All 290 variants** |

**Method**: Parameterized base functions + lookup tables. Each module has one base function handling N operation types, with a dispatch function mapping variant index → parameters.

**Dispatch compression** in webglShaders.ts: 290 individual `if (ftype == N)` lines → 5 range checks (`if (ftype >= A && ftype <= B)`).

### 2. Uniform Buffer Layout
48-float uniform buffer packed in `FractalEngineBase.ts`:
- [0-1]: resolution (vec2)
- [2]: time
- [3]: phi multiplier
- [4-5]: camera rotation (vec2)
- [6]: zoom
- [7]: fractal type index
- [8]: iterations
- [9]: glow intensity
- [10]: morph speed
- [11]: hybrid type index
- [12-15]: hybrid params
- [16-18]: primary color (vec3)
- [19]: tertiary type index
- [20-22]: secondary color (vec3)
- [23]: tertiary blend
- [24-26]: accent color (vec3)
- [27]: composite op index
- [28-30]: shader params
- [31]: camera mode index
- [32-34]: camera position (vec3)
- [35]: slice plane
- [36]: headlamp power
- [37]: volumetric fog
- [38]: slice axis index
- **[39]: render style index** ← KEY FOR MODE SWITCHING
- [40-42]: ambient color (vec3)
- [43]: palette seed
- [44]: palette rotation flag
- [45]: auto-rotate flag (drives shader motion blur)
- [46]: quality level (0=low/mobile, 1=medium, 2=high)
- [47]: unused (0.0)

Not padding: indices 44-46 carry live data. WebGPU sends the same 48 values in a 52-float / 208-byte WGSL struct (indices 48-51 are the struct's `pad5` alignment tail).

### 3. Lazy Shader Compilation System (v3.0)
**PROBLEM**: The monolithic 4171-line fragment shader caused browser crashes (GL_OUT_OF_MEMORY) during GLSL compilation.

**ROOT CAUSE**: sceneSDF() calls evalSingleFractal() which references every map* function (all 431 dispatched types). Even modular approaches that kept the full sceneSDF failed because the GLSL linker required all map functions.

**SOLUTION**: ShaderManager parses FRAGMENT_SHADER_SOURCE as a string and generates a minimal shader per fractal (~900 lines vs 4171):

```
MINIMAL_SHADER = header + ONE_fractal_function + generated minimal_sceneSDF + footer
```

**Key innovation**: minimal_sceneSDF calls the fractal function DIRECTLY (not through evalSingleFractal), so the GLSL linker only needs that one map* function.

| Component | Lines | Purpose |
|-----------|-------|---------|
| ShaderManager | 327 | Parse FRAGMENT_SHADER_SOURCE, generate minimal shaders |
| Header (parsed) | ~73 | #version, uniforms, constants, helpers |
| One fractal function | ~20-80 | The specific map* function needed |
| Minimal sceneSDF (generated) | ~45 | Direct call to fractal function |
| Footer (parsed) | ~770 | calcNormal, calcAO, acesToneMap, main() |
| **Total per fractal** | **~900** | vs 4171 monolithic (78% reduction) |

**How it works**:
1. parseSections() splits FRAGMENT_SHADER_SOURCE into header/footer (cached)
2. extractFractalFunction() finds the specific map* function by index
3. generateMinimalSceneSDF() creates sceneSDF with direct function call
4. Assembled shader is compiled and cached (LRU, max 8 programs)
5. No dynamic imports, no module files; on compile/link error WebGLEngine falls back to the monolithic shader (WebGLEngine.ts:292-355)

**Benefits**:
- 78% smaller shaders: ~900 lines vs 4171 per compilation
- No GL_OUT_OF_MEMORY: Small shaders compile instantly
- No module files: Everything parsed from single source string
- Monolithic fallback: last-resort full shader keeps the canvas alive when a minimal build fails
- LRU caching: Max 8 compiled programs in memory
- Progress feedback: compile stages feed the loading overlay (see "Loading Progress Pipeline")

### 4. Render Style Index Mapping
```typescript
// In fractalMappers.ts
'solid' → 0
'xray' → 1
'topo'/'sonar'/'lidar' → 2
'hologram' → 3
'iridescent' → 4
'quantum' → 5
'gemstone' → 6
```

**CRITICAL**: Keyboard shortcuts must pass STRING names, not numbers!

### 5. Camera System
Four modes:
- **Orbit** (0): External view, rotate around fractal
- **Fly-Through** (1): First-person exploration inside fractal
- **Golden Spiral Dive** (2): Automatic spiral into core
- **Kelvin Invert** (3): Inside-Out Kelvin Inversion (spherical conformal inversion)

### 6. Ray Marching
- Adaptive steps (GLSL): 256 (close) / 192 (medium) / 128 (far) × qualityMult (0.5 + quality_level × 0.25) → 64-256 steps
- Adaptive steps (WGSL): 512 (close) / 384 (medium) / 256 (far)
- Max distance: 2048 (close), 1536 (medium), 1024 (far)
- Bounding radius for space leaping: 6.0 (both backends)
- Hit threshold: scale-adaptive
- Binary search refinement: 20 iterations
- Sign tracking for stability

### 7. Loading Progress Pipeline
Real progress values only — no fixed timers:
1. `ShaderManager` reports stages while assembling each minimal shader: parsing 10% → compiling 40% → linking 80% → complete 100%
2. `WebGLEngine` re-publishes them through `onCompileProgress(stage, percent)`
3. `useRenderEngine` maps them into `loadProgress`: 0.12 at context acquisition, 0.12-0.92 from compile stages, 1.0 on the FIRST RENDERED FRAME
4. `onEngineReady` fires only on that first rendered frame, so `CosmicLoader` (DOM ids `cosmic-loader-overlay` / `cosmic-loader-progress`) is dismissed by real output: 500 ms delay then 700 ms fade, with a 15 s force-dismiss safety net
5. Timing floor: one-time cold device init ~600 ms (ANGLE/D3D11), warm engine switches ~100 ms
6. Blocking is avoided via `KHR_parallel_shader_compile` polling with a single `gl.flush()` per wait (budgets: link 3200, stage 800 spins)

Verified by `tests/loader-sync-test.ts` and `tests/responsiveness-probe.ts`.

## Module Dependency Graph

```
main.tsx
  → App.tsx
    → FractalCanvas.tsx
      → useRenderEngine.ts
        → WebGLEngine.ts / WebGPUEngine.ts
          → FractalEngineBase.ts
            → fractalMappers.ts
          → webglShaders.ts / webgpuShaders.ts
            → modules/*.ts (5 compressed variation modules, 649 lines total)
    → ControlsPanel.tsx
    → TelemetryHUD.tsx
    → FractalInfoHUD.tsx
    → FractalScrollFeed.tsx
    → FractalAtlasModal.tsx
    → ExplanationModal.tsx
    → UserProfileModal.tsx
    → ProjectManifestModal.tsx
    → FractalProbeHUD.tsx
    → CosmicLoader.tsx
    → DebugOverlay.tsx
    → NeuroAestheticsEngine.ts
    → goldenAudio.ts
    → palettes.ts
    → palettesProcedural.ts

data/canonicalFractals.ts
  → categories/*.ts (11 category files, 145 entries)
    → fractalCatalogTypes.ts
    → fractalFactory.ts
```

## Performance Characteristics
- **Build time**: ~3.7s
- **Bundle size**: 873 KB JS (222 KB gzipped), 76 KB CSS
- **FPS target**: 60 (configurable up to 240)
- **SDF calls per pixel**: ~170-270 (with all effects)
- **Shader compilation**: Parallel (KHR_parallel_shader_compile)
- **Source code**: ~935KB TypeScript in src/ (73 ts/tsx files total: 54 src + 19 tests)
- **TypeScript errors**: 0 (strict mode ✅ enabled)
- **Unit tests**: 718 assertions (524 mapper + 113 shader-math + 81 engine-parity)

## Known Issues
1. **Passive event listener warnings**: Fixed with `touchAction: 'none'`
2. **Render mode switching**: Fixed to use string names
3. **WebGPU crashes in embedded browsers**: Defaults to WebGL2
4. **WebGPU shader coverage**: Only 131/431 fractal types implemented in WGSL — types 131-430 fall back to phyllotaxis on WebGPU (WebGL has all 431)
5. **WebGL RenderingContext type narrowing**: Fixed with explicit `as WebGL2RenderingContext | null` casts
6. **Data category type mismatches**: Fixed all `FractalCategoryKey` and `FractalType` string values to match type definitions
7. **Record<FractalType> incompleteness**: Changed to `Partial<Record<FractalType, T>>` for Records covering only canonical entries (~110 of 431)

## Environment
- **Browser**: Chrome 152+, Edge (Chromium)
- **GPU**: WebGL2 required, WebGPU optional
- **OS**: Windows 10/11, macOS, Linux
- **Mobile**: Supported with reduced DPR (1.0 max, quality level 0)

## Build Commands
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build (dist/)
npm run preview      # Preview production build
npm run deploy:cf    # Deploy to Cloudflare Pages
npm run lint         # TypeScript type check (tsc --noEmit)
npm run test:unit    # Unit tests (718 assertions: mapper + shader-math + engine-parity)
npm run test         # Integration tests (822 assertions)
npm run test:browser # Playwright browser tests
npm run test:all     # Full test suite (unit + integration + headless + benchmark + quality)
```

## Deployment
- **Platform**: Cloudflare Pages
- **URL**: https://golden-ratio-fractal-engine.pages.dev/
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Deploy command**: `npm run deploy:cf`
