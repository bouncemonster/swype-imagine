# Golden Ratio WebGPU Fractal Engine - Agent Context

## Project Overview
**Type**: Real-time 3D fractal visualization web application  
**Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS v4  
**Graphics**: WebGPU (primary) + WebGL2 (fallback)  
**Deployment**: Cloudflare Pages  
**Language**: Russian UI, English code comments

## Core Statistics
- **Source files**: 54 TypeScript/TSX files (~650KB)
- **Documentation**: 44 markdown files (219KB, 5,965 lines)
- **Shader code**: 327KB (187KB GLSL + 140KB WGSL)
- **Fractal types**: 86 active, 431 total mapped, 110+ canonical
- **Render modes**: 7 (Solid, X-Ray, Topographic, Hologram, Iridescent, Quantum, Gemstone)
- **Color palettes**: 664 (24 hand-crafted + 640 procedural)

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
GPU: Vertex Shader → Fragment Shader → Ray Marching → SDF Evaluation → Lighting → Post-processing → Output
```

## Key Files

### Engine (9 files)
- `FractalEngineBase.ts` - Base class, uniform packing (48 floats)
- `WebGLEngine.ts` - WebGL2 renderer (404 lines)
- `WebGPUEngine.ts` - WebGPU renderer (204 lines)
- `fractalMappers.ts` - String→index mappings (431 types)
- `NeuroAestheticsEngine.ts` - Taste profile, archetypes (1224 lines)
- `UserPreferenceEngine.ts` - Learning patterns (226 lines)
- `RenderDiagnostics.ts` - Performance validation (257 lines)
- `MathValidation.ts` - Math utilities (253 lines)
- `UserProblemLogger.ts` - IndexedDB error tracking (206 lines)

### Shaders (12 files)
- `webglShaders.ts` - Main GLSL shader (4357 lines, 187KB)
- `webgpuShaders.ts` - Main WGSL shader (3288 lines, 140KB)
- `modules/juliaVariations.ts` - 50 Mandelbulb variants (1300 lines)
- `modules/hybridVariations.ts` - 50 hybrid combinations
- `modules/flameVariations.ts` - 40 flame variations
- `modules/ifsVariations.ts` - 30 IFS attractors
- `modules/lsystemVariations.ts` - 30 L-systems
- `modules/advancedRendering.ts` - AO, shadows, PBR
- `modules/renderModes.ts` - 7 render modes
- `modules/postProcessing.ts` - Tone mapping, bloom
- `modules/sdfOperations.ts` - Boolean ops, domain warp

### UI Components (13 files)
- `ControlsPanel.tsx` - 8-tab control panel (1012 lines)
- `FractalCanvas.tsx` - Canvas with gestures (231 lines)
- `FractalScrollFeed.tsx` - Neuro-feed ribbon (270 lines)
- `FractalInfoHUD.tsx` - HUD overlay (364 lines)
- `FractalProbeHUD.tsx` - Topological probe (115 lines)
- `TelemetryHUD.tsx` - FPS telemetry (161 lines)
- `DebugOverlay.tsx` - Diagnostics (155 lines)
- `ExplanationModal.tsx` - Scientific content (196 lines)
- `UserProfileModal.tsx` - Taste profile (342 lines)
- `ProjectManifestModal.tsx` - Welcome modal (161 lines)
- `CosmicLoader.tsx` - Loading screen (157 lines)
- `FractalAtlasModal.tsx` - Scientific atlas (538 lines)
- `App.tsx` - Root component (593 lines)

### Data Layer (14 files)
- `canonicalFractals.ts` - Composes catalog from 10 categories
- `fractalCatalogTypes.ts` - CanonicalFractal interface
- `fractalFactory.ts` - Factory pattern for fractals
- `categories/*` - 10 category files (geometric, constructive, algebraic, etc.)
- `palettes.ts` - 24 hand-crafted palettes
- `palettesProcedural.ts` - 640 procedural palettes
- `types/fractal.ts` - Core TypeScript interfaces (206 lines)

### Audio (1 file)
- `goldenAudio.ts` - 432 Hz sacred geometry audio (469 lines)

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
**WebGPU (WGSL)**: 52 floats, 208 bytes — vec3<f32> alignment padding adds 4 floats
```
CPU packUniforms writes 48 floats (indices 0-47)
WGSL struct maps 1:1 for first 48 floats
Indices 48-51: padding (pad5: vec3<f32> + 1 unused) — always zero
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
- GPU instancing
- Lazy loading
- Memoization
- Mobile-specific settings (lower iterations, resolution)

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
- **TypeScript**: Strict mode NOT yet enabled (see AUDIT_REPORT.md) — `as any` casts exist
- **React**: Functional components, hooks
- **Shaders**: GLSL for WebGL, WGSL for WebGPU
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: English for code, Russian for UI
- **Documentation**: Markdown with consistent structure

## Known Issues (from audit 2026-09-11)
- TypeScript strict mode not enabled in tsconfig.json
- `as any` casts in FractalEngineBase.ts and App.tsx (URL parsing)
- Unused GLSL stereo uniforms in webglShaders.ts
- No ESLint configuration (lint script = tsc --noEmit only)
- `express` dependency unnecessary in package.json
- See AUDIT_REPORT.md for full details

## Related Documentation
- [docs/README.md](docs/README.md) - Full documentation index
- [docs/ARCHITECTURE_DIAGRAMS.md](docs/ARCHITECTURE_DIAGRAMS.md) - Visual diagrams
- [docs/TUTORIALS.md](docs/TUTORIALS.md) - How-to guides
- [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Problem solving
- [docs/CONTEXT.md](docs/CONTEXT.md) - Always-in-context reference
