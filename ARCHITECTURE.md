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
src/
── shaders/
│   ├── webglShaders.ts          # Main shader (187KB, ~4580 lines) - ALL render modes embedded
│   ├── webgpuShaders.ts         # WebGPU shader (140KB, 3546 lines)
│   └── modules/
│       ├── juliaVariations.ts   # 50 Julia variations (4KB, compressed from 36KB/1353 lines)
│       ├── flameVariations.ts   # 50 Fractal Flame variations (4KB, compressed from 29KB/1270 lines)
│       ├── hybridVariations.ts  # 90 Hybrid fractals (5KB, compressed from 67KB/2670 lines)
│       ├── ifsVariations.ts     # 50 IFS variations (4KB, compressed from 27KB/1227 lines)
│       └── lsystemVariations.ts # 50 L-System variations (4KB, compressed from 30KB/1414 lines)
├── engine/
│   ├── FractalEngineBase.ts     # Base class, uniform packing (4.7KB)
│   ├── WebGLEngine.ts           # WebGL2 renderer (18KB)
│   ├── WebGPUEngine.ts          # WebGPU renderer (8.8KB)
│   ├── fractalMappers.ts        # Type/index mappings (19KB)
│   ├── NeuroAestheticsEngine.ts # AI aesthetics scoring (56KB)
│   ├── UserPreferenceEngine.ts  # User learning (8.3KB)
│   ├── UserProblemLogger.ts     # Error logging (7.1KB)
│   ├── RenderDiagnostics.ts     # Diagnostics (6.8KB)
│   └── MathValidation.ts        # Math validation (6.5KB)
├── components/
│   ├── FractalCanvas.tsx        # Main canvas, camera controls (9.9KB)
│   ├── ControlsPanel.tsx        # UI controls (52KB)
│   ├── TelemetryHUD.tsx         # FPS/stats display (7.6KB)
│   ├── FractalInfoHUD.tsx       # Fractal info overlay (17KB)
│   ├── FractalProbeHUD.tsx      # Probe overlay (5.5KB)
│   ├── FractalScrollFeed.tsx    # Horizontal browser (12KB)
│   ├── FractalAtlasModal.tsx    # Atlas modal (33KB)
│   ├── ExplanationModal.tsx     # Explanation modal (16KB)
│   ├── UserProfileModal.tsx     # User profile modal (18KB)
│   ├── ProjectManifestModal.tsx # Manifest modal (8.5KB)
│   ├── CosmicLoader.tsx         # Loading animation (6.8KB)
│   └── DebugOverlay.tsx         # Debug overlay (6.6KB)
├── hooks/
│   ── useRenderEngine.ts       # Main render loop, keyboard shortcuts (25KB)
├── data/
│   ├── canonicalFractals.ts     # Fractal catalog (1.4KB)
│   ├── fractalCatalogTypes.ts   # Catalog types (3.4KB)
│   ├── fractalFactory.ts        # Factory function (2.2KB)
│   ├── compatibleHybrids.ts     # Hybrid breeding compatibility matrix (8KB)
│   ├── fractalArchitectures.ts  # Architecture tab data (6KB)
│   └── categories/              # 10 fractal categories
│       ├── geometricCurves.ts   # Geometric curves (16KB)
│       ├── constructiveFractals.ts  # Constructive fractals (8.7KB)
│       ├── algebraicFractals.ts     # Algebraic fractals (12KB)
│       ├── multidimensionalFractals.ts # Multidimensional (3.9KB)
│       ├── ifsFractals.ts           # IFS fractals (6.8KB)
│       ├── stochasticFractals.ts      # Stochastic fractals (4.2KB)
│       ├── physicalFractals.ts        # Physical fractals (6.5KB)
│       ├── expandedRealFractals.ts    # Expanded real fractals (8.2KB)
│       ├── visuallyDistinctFractals.ts # Visually distinct (6.7KB)
│       ├── mandalas3D.ts              # 3D Mandalas (13KB)
│       └── index.ts                   # Category exports
├── audio/
│   └── goldenAudio.ts           # φ-tuned ambient audio (22KB)
├── types/
│   └── fractal.ts               # TypeScript interfaces (13KB)
├── palettes.ts                  # Color palettes (7.8KB)
├── palettesProcedural.ts        # Procedural palettes (4.0KB)
├── App.tsx                      # Main app component (27KB)
└── main.tsx                     # Entry point (407B)
```

**Total**: 56 TypeScript/TSX files, ~480KB source code (compressed from ~660KB, -27%)

## Critical Architecture Decisions

### 1. Shader Code Duplication (RESOLVED)
**PROBLEM**: `renderModes.ts`, `advancedRendering.ts`, `postProcessing.ts` were UNUSED DUPLICATES.

**RESOLUTION**: All 5 duplicate module files were deleted. All rendering code lives in `webglShaders.ts` (4672 lines).

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
            → modules/*.ts (5 variation modules)
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
- **Build time**: ~4s
- **Bundle size**: 1029 KB JS, 76 KB CSS
- **FPS target**: 60 (configurable up to 240)
- **SDF calls per pixel**: ~170-270 (with all effects)
- **Shader compilation**: Parallel (KHR_parallel_shader_compile)
- **Source code**: ~650KB TypeScript

## Known Issues
1. **Passive event listener warnings**: Fixed with `touchAction: 'none'`
2. **Render mode switching**: Fixed to use string names
3. **WebGPU crashes in embedded browsers**: Defaults to WebGL2
4. **WebGPU shader coverage**: Only 104/431 fractal types implemented in WGSL — types 104-430 fall back to phyllotaxis on WebGPU (WebGL has all 431)

## Environment
- **Browser**: Chrome 152+, Edge (Chromium)
- **GPU**: WebGL2 required, WebGPU optional
- **OS**: Windows 10/11, macOS, Linux
- **Mobile**: Supported with reduced DPR (1.5 max)

## Build Commands
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (dist/)
npm run preview  # Preview production build
npm run deploy:cf # Deploy to Cloudflare Pages
```

## Deployment
- **Platform**: Cloudflare Pages
- **URL**: https://golden-ratio-fractal-engine.pages.dev/
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Deploy command**: `npm run deploy:cf`
