# Golden Ratio WebGPU Fractal Engine - Architecture

## Project Overview
Real-time 3D fractal visualization engine with 431 fractal types, 7 render modes, and advanced PBR lighting.

## Tech Stack
- **Runtime**: TypeScript 5.x, React 19, Vite 6.x
- **Rendering**: WebGL2 (primary), WebGPU (fallback)
- **Shaders**: GLSL ES 3.00 (WebGL2), WGSL (WebGPU)
- **Build**: Vite with esbuild, 4.05s build time
- **Bundle**: 1029 KB JS, 76 KB CSS

## Directory Structure
```
src/
├── shaders/
│   ├── webglShaders.ts          # Main shader (4631 lines) - ALL render modes embedded
│   ├── webgpuShaders.ts         # WebGPU shader (WGSL)
│   └── modules/
│       ├── juliaVariations.ts   # 50 Julia set variations
│       ├── flameVariations.ts   # 50 Fractal Flame variations
│       ├── hybridVariations.ts  # 90 Hybrid fractal variations
│       ├── ifsVariations.ts     # 50 IFS variations
│       ├── lsystemVariations.ts # 50 L-System variations
│       ├── renderModes.ts       # UNUSED DUPLICATE (code in webglShaders.ts)
│       ├── advancedRendering.ts # UNUSED DUPLICATE (code in webglShaders.ts)
│       └── postProcessing.ts    # UNUSED DUPLICATE (code in webglShaders.ts)
├── engine/
│   ├── FractalEngineBase.ts     # Base class, uniform packing
│   ├── WebGLEngine.ts           # WebGL2 renderer
│   ├── WebGPUEngine.ts          # WebGPU renderer
│   ├── fractalMappers.ts        # Type/index mappings
│   ├── NeuroAestheticsEngine.ts # AI aesthetics scoring
│   └── UserPreferenceEngine.ts  # User learning
├── components/
│   ├── FractalCanvas.tsx        # Main canvas, camera controls
│   ├── ControlsPanel.tsx        # UI controls
│   ├── TelemetryHUD.tsx         # FPS/stats display
│   └── FractalInfoHUD.tsx       # Fractal info overlay
├── hooks/
│   └── useRenderEngine.ts       # Main render loop, keyboard shortcuts
├── data/
│   ├── canonicalFractals.ts     # 431 fractal catalog
│   ├── fractalFactory.ts        # Factory function
│   └── categories/              # 10 fractal categories
└── types/
    ── fractal.ts               # TypeScript interfaces
```

## Critical Architecture Decisions

### 1. Shader Code Duplication
**PROBLEM**: `renderModes.ts`, `advancedRendering.ts`, `postProcessing.ts` are UNUSED DUPLICATES.

**REASON**: All 7 render modes, post-processing, and advanced techniques are embedded directly in `webglShaders.ts` (4631 lines).

**IMPACT**: Module files can be deleted safely. All rendering code is in `webglShaders.ts`.

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
Three modes:
- **Orbit** (0): External view, rotate around fractal
- **Fly-Through** (1): First-person exploration inside fractal
- **Golden Spiral Dive** (2): Automatic spiral into core

### 5. Ray Marching
- Adaptive steps: 640 (close), 480 (medium), 320 (far)
- Max distance: 2048 (close), 1536 (medium), 1024 (far)
- Hit threshold: scale-adaptive
- Binary search refinement: 20 iterations
- Sign tracking for stability

## Performance Characteristics
- **Build time**: ~4s
- **Bundle size**: 1029 KB JS
- **FPS target**: 60 (configurable up to 240)
- **SDF calls per pixel**: ~50 (with all effects)
- **Shader compilation**: Parallel (KHR_parallel_shader_compile)

## Known Issues
1. **Passive event listener warnings**: Fixed with `touchAction: 'none'`
2. **Render mode switching**: Fixed to use string names
3. **WebGPU crashes in embedded browsers**: Defaults to WebGL2

## File Dependencies
```
FractalCanvas.tsx
  → useRenderEngine.ts
    → WebGLEngine.ts / WebGPUEngine.ts
      → FractalEngineBase.ts
        → fractalMappers.ts
webglShaders.ts
  → modules/*.ts (fractal variations only)
```

## Environment
- **Browser**: Chrome 152+, Edge (Chromium)
- **GPU**: WebGL2 required, WebGPU optional
- **OS**: Windows 10/11, macOS, Linux
- **Mobile**: Supported with reduced DPR (1.5 max)

## Build Commands
```bash
npm run dev      # Development server (localhost:5173)
npm run build    # Production build (dist/)
npm run preview  # Preview production build
```

## Deployment
- **Platform**: Cloudflare Pages
- **URL**: https://golden-ratio-fractal-engine.pages.dev/
- **Build command**: `npm run build`
- **Output directory**: `dist`
