# Golden Ratio WebGPU Fractal Engine - Agent Context

## Project Overview
**Type**: Real-time 3D fractal visualization web application  
**Tech Stack**: React 19 + TypeScript 5.8 + Vite 6 + Tailwind CSS v4  
**Graphics**: WebGL2 (primary, all 431 types) + WebGPU (optional, 131/431)  
**Deployment**: Cloudflare Pages  
**Language**: Russian UI, English code comments

## Core Statistics
- **Source files**: 54 TypeScript/TSX files (~935KB)
- **Documentation**: 44 markdown files (~254KB in `docs/`)
- **Shader code**: ~358KB in `src/shaders/` (161KB GLSL + 158KB WGSL + 38KB variation modules)
- **Fractal types**: 431 (indices 0-430) — all 431 dispatched and rendered in WebGL2; 131/431 implemented in WGSL (indices 0-130), 131-430 fall back to phyllotaxis
- **Exploration list**: `ALL_FRACTAL_TYPES` in App.tsx / NeuroAestheticsEngine.ts = 113 curated entries
- **Render modes**: 7 (Solid, X-Ray, Topographic, Hologram, Iridescent, Quantum, Gemstone)
- **Color palettes**: 666 (26 hand-crafted + 640 procedural = 80 themes × 8)

## Architecture Summary

### Entry Point
```
index.html → main.tsx → App.tsx
```

### Component Hierarchy
```
App
├── FractalCanvas (WebGPU/WebGL renderer)
│   └── useRenderEngine (hook)
│       ├── WebGPUEngine (WGSL shaders)
│       └── WebGLEngine (GLSL shaders)
├── ControlsPanel (8 tabs: architectures, composition, camera, palettes, morphology, gpu, audio, neuro)
├── HUD Components (FractalInfoHUD, TelemetryHUD, DebugOverlay, FractalProbeHUD)
├── Modals (Explanation, UserProfile, ProjectManifest, FractalAtlas)
└── FractalScrollFeed (neuro-feed ribbon)
```

### Data Flow
```
User Input → ControlsPanel → App State → useRenderEngine → Engine → GPU Shaders → Frame Buffer → Display
```

### Shader Pipeline
```
CPU: FractalParams (48 floats) → Uniform Buffer
GPU: Vertex Shader (fullscreen triangle) → Fragment Shader → Ray Marching → SDF Evaluation → Lighting → Post-processing → Output
```
Both backends are single-pass fragment pipelines — there are no compute shaders.

### Loading & Init Pipeline
```
ShaderManager stages: parsing 10% → compiling 40% → linking 80% → complete 100%
  → WebGLEngine.onCompileProgress → useRenderEngine.loadProgress (0.12 at context, 0.12-0.92 from stages)
  → first rendered frame: loadProgress 1.0 + onEngineReady() → CosmicLoader dismisses
```
- `CosmicLoader` is progress-driven (no fake 450 ms timer): ids `cosmic-loader-overlay` / `cosmic-loader-progress`, 15 s force-dismiss, 500 ms delay then 700 ms fade
- Cold device init floor ~600 ms (ANGLE/D3D11); warm engine switches ~100 ms
- `KHR_parallel_shader_compile` non-blocking poll (budget link 3200 / stage 800 spins, single `gl.flush()`, never inside the spin loop)
- Covered by `tests/loader-sync-test.ts` and `tests/responsiveness-probe.ts`
- After each shader swap `WebGLEngine.beginWarmup()` renders 24 warmup frames (~0.4 s at 60 fps) at quality 0

## Key Files

### Engine (9 files)
- `FractalEngineBase.ts` - Base class, uniform packing (48 floats, 220 lines)
- `WebGLEngine.ts` - WebGL2 renderer (523 lines)
- `WebGPUEngine.ts` - WebGPU renderer (238 lines)
- `ShaderManager.ts` - Lazy minimal per-fractal shader assembly, LRU cache max 8 (327 lines)
- `fractalMappers.ts` - String→index mappings (577 lines, 451 names → 431 indices)
- `NeuroAestheticsEngine.ts` - Taste profile, archetypes (1112 lines)
- `RenderDiagnostics.ts` - Performance validation (261 lines)
- `MathValidation.ts` - Math utilities (58 lines; defined but not used in render paths)
- `UserProblemLogger.ts` - IndexedDB error tracking (238 lines)

### Shaders (8 files)
- `webglShaders.ts` - Main GLSL shader (4195 lines, 161KB, dispatches ALL 431 types)
- `webgpuShaders.ts` - Main WGSL shader (4069 lines, 158KB, 131/431 types; 131-430 → phyllotaxis fallback)
- `modules/juliaVariations.ts` - 50 Julia variants 141-190 (110 lines, 6.3KB)
- `modules/hybridVariations.ts` - 90 hybrid combinations 341-430 (180 lines, 12KB)
- `modules/flameVariations.ts` - 50 flame variations 291-340 (114 lines, 6.2KB)
- `modules/ifsVariations.ts` - 50 IFS attractors 191-240 (115 lines, 6.3KB)
- `modules/lsystemVariations.ts` - 50 L-systems 241-290 (130 lines, 7.1KB)
- `modules/index.ts` - Re-exports the 5 variation modules (18 lines)

### UI Components + Hooks (14 files)
- `ControlsPanel.tsx` - 8-tab control panel (873 lines)
- `FractalCanvas.tsx` - Canvas with gestures (269 lines)
- `FractalScrollFeed.tsx` - Neuro-feed ribbon (280 lines)
- `FractalInfoHUD.tsx` - HUD overlay (388 lines)
- `FractalProbeHUD.tsx` - Topological probe (127 lines)
- `TelemetryHUD.tsx` - FPS telemetry (170 lines)
- `DebugOverlay.tsx` - Diagnostics (157 lines)
- `ExplanationModal.tsx` - Scientific content (206 lines)
- `UserProfileModal.tsx` - Taste profile (361 lines)
- `ProjectManifestModal.tsx` - Welcome modal (175 lines)
- `CosmicLoader.tsx` - Progress-driven loading screen (180 lines)
- `FractalAtlasModal.tsx` - Scientific atlas (573 lines)
- `App.tsx` - Root component (717 lines)
- `hooks/useRenderEngine.ts` - Render loop, keyboard shortcuts, loadProgress (781 lines)

### Data Layer (17 files in `src/data/`)
- `canonicalFractals.ts` - Composes the 145-entry catalog
- `fractalCatalogTypes.ts` - CanonicalFractal interface, 10 FractalCategoryKey values
- `fractalFactory.ts` - Factory pattern for fractals
- `categories/*` - 11 category files (10 FractalCategoryKey values; temporalManifolds.ts = 19 entries)
- `palettes.ts` - 26 hand-crafted palettes
- `palettesProcedural.ts` - 640 procedural palettes (80 themes × 8)
- `types/fractal.ts` - Core TypeScript interfaces (575 lines, 431-member FractalType union)

### Audio (1 file)
- `goldenAudio.ts` - 432 Hz sacred geometry audio (556 lines)

## Mathematical Concepts

### Fractal Types
- **Mandelbulb**: Power-8 spherical iteration
- **Julia Sets**: Constant c iteration
- **Burning Ship**: abs() transformation
- **Tricorn**: Conjugate transformation
- **IFS**: Iterated function systems
- **L-systems**: Lindenmayer systems
- **TPMS**: Triply periodic minimal surfaces
- **Hybrids**: Blended fractal types

### Key Formulas
```glsl
// Mandelbulb
z = z^n + c (in spherical coordinates)

// Distance estimation
DE = 0.5 * log(r) * r / dr

// Smooth minimum (smin)
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
```

### Golden Ratio (φ)
- φ ≈ 1.618033988749895
- Golden angle ≈ 137.508°
- Used in phyllotaxis, color distribution, aesthetics

## Uniform Buffer Layout
**WebGL (GLSL)**: 48 floats, 192 bytes — individual uniform uploads  
**WebGPU (WGSL)**: 52 floats, 208 bytes — same 48 values plus a 4-float struct tail
```
CPU packUniforms writes 48 floats (indices 0-47)
WGSL struct maps 1:1 for the first 48 floats
Tail is NOT padding: [44]=paletteRotation, [45]=autoRotate, [46]=qualityLevel, [47]=0.0
Indices 48-51: WGSL-only alignment tail (pad5) — always zero
```

## Performance Characteristics

### Expected FPS
- Desktop (RTX 3060+): 120+ FPS (WebGPU)
- Desktop (GTX 1060): 90+ FPS (WebGPU)
- Laptop (Integrated): 60+ FPS (WebGPU)
- Mobile (Flagship): 60+ FPS (WebGL2)
- Mobile (Mid-range): 30+ FPS (WebGL2)

### Optimization Techniques
- Dynamic Resolution Scaling (DRS)
- Single fullscreen-triangle draw call per frame
- Lazy minimal shader compilation (ShaderManager, LRU cache of 8 programs)
- Memoization
- Mobile-specific settings: DPR cap 1.0 and quality level 0 (embedded browsers 1.5, desktop 2.0); auto-explore interval 30 s mobile / 18 s desktop

## Documentation Structure
- **44 files** in `docs/` directory
- **ARCHITECTURE_DIAGRAMS.md** - Mermaid diagrams
- **TUTORIALS.md** - Step-by-step guides
- **TROUBLESHOOTING.md** - Problem solutions
- **DEPLOYMENT.md** - Deployment guides
- **FAQ.md** - 50+ questions
- **CONTRIBUTING.md** - Contribution guidelines
- **CHANGELOG.md** - Version history

## Common Issues
- **Black screen**: GPU backend not supported, shader compilation failed
- **Low FPS**: High iterations, resolution, complex render mode
- **Browser crashes**: Out of memory, GPU timeout, infinite shader loop
- **Mobile issues**: Touch not working, overheating, Safari limitations

## Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## Deployment
- **Platform**: Cloudflare Pages
- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **Auto-deploy**: On push to main branch

## Key Conventions
- **TypeScript**: Strict mode NOT yet enabled (see AUDIT_REPORT.md) — `as any` casts exist in useRenderEngine.ts / WebGLEngine.ts
- **React**: Functional components, hooks
- **Shaders**: GLSL for WebGL, WGSL for WebGPU
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: English for code, Russian for UI
- **Documentation**: Markdown with consistent structure

## Known Issues (from audit 2026-09-11, re-verified against code)
- TypeScript strict mode not enabled in tsconfig.json
- `as any` casts remain in `useRenderEngine.ts` (3) and `WebGLEngine.ts` (1)
- No ESLint configuration (lint script = tsc --noEmit only)
- WebGPU covers only 131/431 fractal types (131-430 fall back to phyllotaxis)
- See AUDIT_REPORT.md for full details

## Related Documentation
- [docs/README.md](docs/README.md) - Full documentation index
- [docs/ARCHITECTURE_DIAGRAMS.md](docs/ARCHITECTURE_DIAGRAMS.md) - Visual diagrams
- [docs/TUTORIALS.md](docs/TUTORIALS.md) - How-to guides
- [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Problem solving
- [docs/CONTEXT.md](docs/CONTEXT.md) - Always-in-context reference
