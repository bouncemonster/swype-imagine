# Golden Ratio WebGPU Fractal Engine - Architecture

## Project Overview
Real-time 3D fractal visualization engine with **431 fractal types**, **7 render modes**, and advanced PBR lighting.

## Tech Stack
- **Runtime**: TypeScript 5.8, React 19, Vite 6.4
- **Rendering**: WebGL2 (primary), WebGPU (optional — 104/431 types implemented)
- **Shaders**: GLSL ES 3.00 (WebGL2), WGSL (WebGPU)
- **Build**: Vite with esbuild, ~4s build time
- **Bundle**: 873 KB JS, 76 KB CSS

## Directory Structure
```
src/                                          # 51 TypeScript/TSX files, ~920KB source
├── shaders/
│   ├── webglShaders.ts          # Main shader (163KB, 4388 lines) - ALL 431 types, 7 render modes
│   ├── webgpuShaders.ts         # WebGPU shader (137KB, 3546 lines) - 104/431 types
│   └── modules/
│       ├── juliaVariations.ts   # 50 Julia variations (6.4KB, 111 lines, 12x compression)
│       ├── flameVariations.ts   # 50 Fractal Flame variations (6.3KB, 115 lines, 11x compression)
│       ├── hybridVariations.ts  # 90 Hybrid fractals (12KB, 181 lines, 15x compression)
│       ├── ifsVariations.ts     # 50 IFS variations (6.4KB, 116 lines, 11x compression)
│       └── lsystemVariations.ts # 50 L-System variations (7.2KB, 131 lines, 11x compression)
├── engine/
│   ├── FractalEngineBase.ts     # Base class, uniform packing (5.2KB, 153 lines)
│   ├── WebGLEngine.ts           # WebGL2 renderer (20KB, 470 lines)
│   ├── WebGPUEngine.ts          # WebGPU renderer (8.8KB, 236 lines)
│   ├── fractalMappers.ts        # Type/index mappings (23KB, 578 lines, 473 mapped types)
│   ├── NeuroAestheticsEngine.ts # AI aesthetics scoring (44KB, 1121 lines)
│   ├── UserPreferenceEngine.ts  # User learning (8.3KB, 251 lines)
│   ├── UserProblemLogger.ts     # Error logging (7.1KB, 239 lines)
│   ├── RenderDiagnostics.ts     # Diagnostics (6.8KB, 262 lines)
│   └── MathValidation.ts        # Math validation (6.9KB, 270 lines)
├── components/
│   ├── FractalCanvas.tsx        # Main canvas, camera controls (10KB, 263 lines)
│   ├── ControlsPanel.tsx        # UI controls (44KB, 876 lines)
│   ├── TelemetryHUD.tsx         # FPS/stats display (7.6KB, 171 lines)
│   ├── FractalInfoHUD.tsx       # Fractal info overlay (17KB, 389 lines)
│   ├── FractalProbeHUD.tsx      # Probe overlay (5.5KB, 128 lines)
│   ├── FractalScrollFeed.tsx    # Horizontal browser (12KB, 281 lines)
│   ├── FractalAtlasModal.tsx    # Atlas modal (33KB, 574 lines)
│   ├── ExplanationModal.tsx     # Explanation modal (16KB, 207 lines)
│   ├── UserProfileModal.tsx     # User profile modal (18KB, 363 lines)
│   ├── ProjectManifestModal.tsx # Manifest modal (8.5KB, 176 lines)
│   ├── CosmicLoader.tsx         # Loading animation (6.8KB, 174 lines)
│   └── DebugOverlay.tsx         # Debug overlay (6.6KB, 158 lines)
├── hooks/
│   └── useRenderEngine.ts       # Main render loop, keyboard shortcuts (28KB, 683 lines)
├── data/
│   ├── canonicalFractals.ts     # Fractal catalog (1.4KB, 31 lines)
│   ├── fractalCatalogTypes.ts   # Catalog types (4.1KB, 115 lines)
│   ├── fractalFactory.ts        # Factory function (2.4KB, 86 lines)
│   ├── compatibleHybrids.ts     # Hybrid breeding matrix (16KB, 250 lines)
│   ├── fractalArchitectures.ts  # Architecture tab data (7.7KB, 194 lines)
│   └── categories/              # 10 fractal categories
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
│       └── index.ts                   # Category exports (690B, 16 lines)
├── audio/
│   └── goldenAudio.ts           # φ-tuned ambient audio (22KB, 551 lines)
├── types/
│   └── fractal.ts               # TypeScript interfaces (33KB, 576 lines)
├── palettes.ts                  # Color palettes (7.8KB, 213 lines)
├── palettesProcedural.ts        # Procedural palettes (4.0KB, 114 lines)
├── App.tsx                      # Main app component (28KB, 657 lines)
└── main.tsx                     # Entry point (407B, 12 lines)

tests/                                        # 13 test files, ~3480 lines
├── fractal-autotest.ts          # 822-assertion integration test (421 lines)
├── fractal-mapper-test.ts       # Mapper completeness (521 assertions, 260 lines)
├── shader-math-validation-test.ts # GLSL math safety (113 assertions, 578 lines)
├── cross-engine-parity-test.ts  # WebGL/WebGPU parity (79 assertions, 301 lines)
├── browser-harness.ts           # Playwright browser test harness (764 lines)
├── browser-fractal-test.ts      # Browser integration test (230 lines)
├── advanced-fractal-test.ts     # Advanced fractal browser test (376 lines)
├── headless-fractal-test.ts     # Headless smoke test (140 lines)
├── browser-smoke-test.ts        # Quick smoke test (63 lines)
├── render-style-test.ts         # Render style visual test (74 lines)
├── performance-benchmark.ts     # Performance benchmark (256 lines)
├── code-quality-check.ts        # Code quality validation (353 lines)
└── palette-diagnostic.ts        # Palette diagnostic (57 lines)
```

**Total**: 64 TypeScript/TSX files (51 src + 13 tests), ~1052KB source code

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
- [44-47]: padding

### 3. Render Style Index Mapping
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

### 4. Camera System
Four modes:
- **Orbit** (0): External view, rotate around fractal
- **Fly-Through** (1): First-person exploration inside fractal
- **Golden Spiral Dive** (2): Automatic spiral into core
- **Kelvin Invert** (3): Inside-Out Kelvin Inversion (spherical conformal inversion)

### 5. Ray Marching
- Adaptive steps: 640 (close), 480 (medium), 320 (far)
- Max distance: 2048 (close), 1536 (medium), 1024 (far)
- Hit threshold: scale-adaptive
- Binary search refinement: 20 iterations
- Sign tracking for stability

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
  → categories/*.ts (10 category files)
    → fractalCatalogTypes.ts
    → fractalFactory.ts
```

## Performance Characteristics
- **Build time**: ~3.7s
- **Bundle size**: 873 KB JS (222 KB gzipped), 76 KB CSS
- **FPS target**: 60 (configurable up to 240)
- **SDF calls per pixel**: ~170-270 (with all effects)
- **Shader compilation**: Parallel (KHR_parallel_shader_compile)
- **Source code**: ~1052KB TypeScript (64 files: 51 src + 13 tests)
- **TypeScript errors**: 0 (strict mode)
- **Unit tests**: 713 assertions (521 mapper + 113 shader-math + 79 engine-parity)

## Known Issues
1. **Passive event listener warnings**: Fixed with `touchAction: 'none'`
2. **Render mode switching**: Fixed to use string names
3. **WebGPU crashes in embedded browsers**: Defaults to WebGL2
4. **WebGPU shader coverage**: Only 104/431 fractal types implemented in WGSL — types 104-430 fall back to phyllotaxis on WebGPU (WebGL has all 431)
5. **WebGL RenderingContext type narrowing**: Fixed with explicit `as WebGL2RenderingContext | null` casts
6. **Data category type mismatches**: Fixed all `FractalCategoryKey` and `FractalType` string values to match type definitions
7. **Record<FractalType> incompleteness**: Changed to `Partial<Record<FractalType, T>>` for Records covering only canonical entries (~110 of 431)

## Environment
- **Browser**: Chrome 152+, Edge (Chromium)
- **GPU**: WebGL2 required, WebGPU optional
- **OS**: Windows 10/11, macOS, Linux
- **Mobile**: Supported with reduced DPR (1.5 max)

## Build Commands
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build (dist/)
npm run preview      # Preview production build
npm run deploy:cf    # Deploy to Cloudflare Pages
npm run lint         # TypeScript type check (tsc --noEmit)
npm run test:unit    # Unit tests (713 assertions: mapper + shader-math + engine-parity)
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
