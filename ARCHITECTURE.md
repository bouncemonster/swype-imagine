# Golden Ratio WebGPU Fractal Engine — Architecture

## Overview

Real-time SDF raymarching fractal engine with dual WebGL2/WebGPU backend.
**431 unique SDF functions**, 8 hybrid composite operators, harmonic cosine palette system.
Deployed at: `golden-ratio-fractal-engine.pages.dev`

**Stack**: React 19 + Vite + Tailwind CSS v4 + TypeScript  
**Render**: GLSL ES 3.0 (WebGL2) / WGSL (WebGPU) dual shader pipeline  
**Build**: `npm run build` → Cloudflare Pages via wrangler

---

## Module Map

```
src/
├── types/fractal.ts              # Core type definitions (FractalParams, TelemetryData, ColorPalette)
├── palettes.ts                   # 12 color palettes (IQ harmonic cosine system)
├── App.tsx                       # Root component, state management, specimen cycling
├── main.tsx                      # Entry point (React 19 createRoot)
├── index.css                     # Tailwind v4 global styles
│
├── hooks/
│   └── useRenderEngine.ts        # Render engine lifecycle hook (523 lines)
│
├── components/
│   ├── FractalCanvas.tsx         # GPU canvas + pointer interaction (244 lines)
│   ├── ControlsPanel.tsx         # Parameter UI panel with all controls (1060 lines)
│   ├── TelemetryHUD.tsx          # FPS/draw-call overlay
│   ├── FractalScrollFeed.tsx     # Horizontal fractal specimen browser
│   ├── FractalAtlasModal.tsx     # Full catalog browser (431 fractals × 8 categories)
│   ├── ExplanationModal.tsx      # Math/φ educational overlay
│   ├── FractalProbeHUD.tsx       # Surface probe debug HUD
│   ├── NeuroFeedHUD.tsx          # Neuro-aesthetics score overlay
│   ├── CosmicLoader.tsx          # Loading screen
│   ├── UserProfileModal.tsx      # User profile/settings
│   └── ProjectManifestModal.tsx  # Project info modal
│
├── engine/
│   ├── FractalEngineBase.ts      # Abstract base class (shared uniform packing, palette resolution)
│   ├── WebGLEngine.ts            # WebGL2 renderer (GLSL ES 3.0, 286 lines)
│   ├── WebGPUEngine.ts           # WebGPU renderer (WGSL, 216 lines)
│   ├── fractalMappers.ts         # String→index mapping for SDF dispatch (431 entries)
│   ├── NeuroAestheticsEngine.ts  # Aesthetic scoring algorithm
│   ├── UserPreferenceEngine.ts   # User preference tracking
│   ├── MathValidation.ts         # Math validation utilities
│   ├── RenderDiagnostics.ts      # Render diagnostics
│   └── UserProblemLogger.ts      # Problem logging
│
├── shaders/
│   ├── webglShaders.ts           # GLSL vertex+fragment shader source (4624 lines)
│   ├── webgpuShaders.ts          # WGSL compute+fragment shader source (3538 lines)
│   └── modules/                  # Modular shader architecture
│       ├── juliaVariations.ts    # Julia Variations 1-50 (337 lines)
│       ├── ifsVariations.ts      # IFS Variations 1-50 (151 lines)
│       ├── lsystemVariations.ts  # L-System Variations 1-50 (147 lines)
│       ├── flameVariations.ts    # Flame Variations 1-50 (160 lines)
│       ├── hybridVariations.ts   # Hybrid Variations 1-90 (230 lines)
│       ├── sdfOperations.ts      # SDF operations
│       ├── renderModes.ts        # Render modes
│       ├── postProcessing.ts     # Post-processing effects
│       ├── advancedRendering.ts  # Advanced rendering techniques
│       └── index.ts              # Module exports
│
├── audio/
│   └── goldenAudio.ts            # φ-tuned ambient audio engine (Web Audio API)
│
└── data/
    ├── canonicalFractals.ts      # Master catalog: 431 fractal presets with metadata (2991 lines)
    └── fractalCatalogTypes.ts    # Type definitions for catalog
```

---

## Data Flow

```
User Input
    │
    ▼
App.tsx ─── params: FractalParams ───► FractalCanvas.tsx
    │                                        │
    │  ◄── telemetry: TelemetryData ────────┤
    │                                        │
    │                             ┌──────────┴──────────┐
    │                             │                     │
    │                      useRenderEngine hook
    │                             │                     │
    │                      WebGPUEngine          WebGLEngine
    │                             │                     │
    │                      WGSL Shaders          GLSL Shaders
    │                             │                     │
    │                      GPU (WebGPU)          GPU (WebGL2)
    │                             │                     │
    │                             └──────────┬──────────┘
    │                                        │
    ▼                                        ▼
ControlsPanel.tsx ◄── onParamsChange ─── FractalCanvas.tsx
```

---

## Shader Pipeline (Scene SDF)

```
sceneSDF(p_world)
    │
    ├── [Kelvin Inversion] — conformal inside-out mapping (camera mode 3)
    │
    ├── [Bounding Sphere] — r > 5.0 → return distance to sphere
    │
    ├── [Domain Warp] — optional sinusoidal displacement
    │
    ├── evalSingleFractal(primaryType)    → vec2(dist, trap)
    │     └── 431 SDF functions dispatched by integer index
    │
    ├── evalSingleFractal(secondaryType)  → vec2(dist, trap) [hybrid]
    │     └── Composite operator applied (8 ops)
    │
    └── evalSingleFractal(tertiaryType)   → vec2(dist, trap) [tertiary hybrid]
```

### SDF Function Categories (431 total)

| Index | Category | Count | Examples |
|-------|----------|-------|---------|
| 0-130 | Classic Fractals | 131 | phyllotaxis, mandelbulb, mandelbox, sierpinski |
| 131-140 | Mandelbrot Variations | 10 | Power 3-12, Multibrot |
| 141-190 | Julia Variations | 50 | Julia Set, Quaternion Julia |
| 191-240 | IFS Variations | 50 | Kaleidoscopic IFS, Dragon Curve |
| 241-290 | L-System Variations | 50 | Recursive branching, Lindenmayer |
| 291-340 | Flame Variations | 50 | Sinusoidal, Spherical, Swirl |
| 341-430 | Hybrid Variations | 90 | Mandelbrot-Julia, IFS-Flame |

### Composite Operators (8)

| Op | Name | Effect |
|----|------|--------|
| 0 | smoothMorph | Smooth blend with morph factor |
| 1 | smoothUnion | IQ smin (r-power) union |
| 2 | smoothIntersection | IQ smin intersection |
| 3 | smoothCarve | Subtraction via smin |
| 4 | domainWarp | Sinusoidal domain displacement |
| 5 | quantumResonance | Distance-modulated displacement |
| 6 | fractalLattice | Grid-based repetition blend |
| 7 | goldenSpiralFold | φ-angle rotational folding |

---

## Uniform Layout (48 floats)

Both GLSL and WGSL share the same uniform packing via `FractalEngineBase.packUniforms()`:

| Offset | GLSL Name | Type | Description |
|--------|-----------|------|-------------|
| 0-2 | u_resolution | vec3 | canvas width, height, aspect |
| 3 | u_time | float | animation time (seconds) |
| 4-6 | u_cam_pos | vec3 | camera position |
| 7-9 | u_cam_target | vec3 | camera look-at target |
| 10 | u_cam_fov | float | field of view |
| 11 | u_cam_mode | float | camera mode (0=orbit, 3=kelvin) |
| 12-14 | u_light_dir | vec3 | primary light direction |
| 15-17 | u_bg_color | vec3 | background color |
| 18-23 | u_pal_colors[0] | vec3×2 | palette primary colors |
| 24-29 | u_pal_colors[1] | vec3×2 | palette accent colors |
| 30-32 | u_pal_offset | vec3 | palette phase/brightness/contrast |
| 33 | u_phi_val | float | golden ratio φ value |
| 34 | u_fractal_type | float | primary SDF index |
| 35 | u_hybrid_type | float | secondary SDF index |
| 36 | u_composite_op | float | composite operator index |
| 37 | u_hybrid_blend | float | blend factor |
| 38 | u_warp_strength | float | domain warp strength |
| 39 | u_box_fold | float | box fold parameter |
| 40 | u_sphere_fold | float | sphere fold parameter |
| 41 | u_octaves | float | iteration count |
| 42 | u_zoom | float | zoom level |
| 43 | u_palette_seed | float | per-fractal color offset (0-100) |
| 44 | u_rot_x | float | X rotation angle |
| 45 | u_rot_y | float | Y rotation angle |
| 46 | u_fractal_hybrid | float | tertiary SDF index |
| 47 | u_tertiary_blend | float | tertiary blend factor |

---

## Engine Architecture (OOP)

```
FractalEngineBase (abstract)
├── resolve_palette(params) → ColorPalette
├── computeIndices(params) → { primary, secondary, tertiary }
├── packUniforms(out, time, params, palette, indices) → Float32Array
│
├── WebGLEngine extends FractalEngineBase
│   ├── init() → compiles GLSL, creates program, sets up buffers
│   ├── render(time, params) → packs uniforms, draws fullscreen quad
│   └── destroy() → releases GL context
│
└── WebGPUEngine extends FractalEngineBase
    ├── init() → creates WGSL pipeline, bind groups, textures
    ├── render(time, params) → updates uniform buffer, draws
    └── destroy() → destroys device references
```

---

## Backend Selection Logic

```
forcedBackend === 'webgl2'  →  WebGL2
forcedBackend === 'webgpu'  →  WebGPU (blocked in embedded browsers)
forcedBackend === 'auto'    →  WebGL2 (always, for stability)

Embedded browser detection:
  - window !== window.top (iframe)
  - UserAgent matches /qoder|electron/i
  → Forces WebGL2 to prevent native GPU driver crashes
```

---

## Render Loop

```
useRenderEngine hook (called by FractalCanvas):
  1. Init engine (WebGPU → fallback WebGL2, embedded browser safety)
  2. requestAnimationFrame loop:
     a. Read paramsRef.current
     b. Compute delta time, apply FPS throttle
     c. Apply fly-through keyboard movement + inertia decay
     d. Call activeEngine.render(time, effectiveParams)
     e. Compute telemetry (FPS, 1% low, frame time)
     f. Report telemetry via onTelemetryUpdateRef
     g. Handle screenshot capture if requested
  3. ResizeObserver + DPR capping (1.5 mobile/embedded, 2.0 desktop)
  4. Visibility change handler (pause when tab hidden)
  5. Context-lost/restored handlers (WebGL2 recovery)
  6. Keyboard navigation (next/prev specimen, fly-through WASD)
```

---

## Key Design Decisions

1. **Dual shader codebase**: GLSL and WGSL are maintained in parallel (not generated from template). This is intentional — WGSL has different semantics (no implicit type conversion, `let` vs `float`, struct-based uniforms).

2. **SDF dispatch by integer index**: All 431 fractals are compiled into a single shader. The `evalSingleFractal()` function uses if-chain dispatch. This avoids shader recompilation when switching fractals.

3. **Orbit trap coloring**: Every SDF returns `vec2(distance, trap)`. The trap value feeds the harmonic cosine palette for structure-aware coloring that follows fractal geometry.

4. **Distance-adaptive rendering**: AO, epsilon, and palette phase all scale with camera distance `t` to maintain visual quality at any zoom level.

5. **paletteSeed system**: Each fractal has a unique `paletteSeed` (0-100) that offsets the color phase, giving each fractal a distinct color identity even with the same palette.

6. **Modular shader architecture**: Shader modules are separate TypeScript files exporting GLSL/WGSL as string constants. This improves maintainability while keeping single-shader dispatch.

---

## Known Limitations

- Shader files are large (4624/3538 lines) — modular architecture helps but core dispatch remains monolithic
- SDF dispatch uses if-chains (not jump tables) — GPU compilers handle this efficiently for 431 entries
- canonicalFractals.ts is 2991 lines — single data file with all 431 presets
- No shader hot-reload — changes require rebuild

---

## Build & Deploy

```bash
# Development
npm run dev              # Vite dev server at :5173

# Production build
npm run build            # TypeScript check + Vite build → dist/

# Deploy
npx wrangler pages deploy dist --project-name golden-ratio-fractal-engine
```

**Chrome GPU flags** (for development/testing):
- `--enable-features=Vulkan,UseANGLE=d3d11`
- `--enable-unsafe-webgpu`
- `--ignore-gpu-blocklist`

---

## File Dependencies

```
App.tsx
  ├── types/fractal.ts
  ├── data/canonicalFractals.ts (FRACTAL_CATEGORIES, CANONICAL_FRACTALS_CATALOG)
  ├── engine/fractalMappers.ts (getFractalIndex)
  ├── palettes.ts (COLOR_PALETTES)
  ├── components/FractalCanvas.tsx
  ├── components/ControlsPanel.tsx
  ├── components/TelemetryHUD.tsx
  ├── components/FractalScrollFeed.tsx
  ├── components/FractalAtlasModal.tsx
  └── audio/goldenAudio.ts

FractalCanvas.tsx
  ├── hooks/useRenderEngine.ts (engine lifecycle, render loop, resize, telemetry)
  │   ├── engine/WebGPUEngine.ts → engine/FractalEngineBase.ts → shaders/webgpuShaders.ts
  │   └── engine/WebGLEngine.ts  → engine/FractalEngineBase.ts → shaders/webglShaders.ts
  ├── engine/UserPreferenceEngine.ts
  └── types/fractal.ts

ControlsPanel.tsx
  ├── types/fractal.ts
  ├── palettes.ts
  └── data/canonicalFractals.ts
```

---

*Last updated: September 2026*
