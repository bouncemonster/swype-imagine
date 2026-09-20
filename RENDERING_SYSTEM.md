# Rendering System Documentation

## Overview
The rendering system uses WebGL2 with GLSL ES 3.00 shaders. Both backends are full-screen **fragment-shader ray-marching pipelines** (no compute shaders anywhere).

### Actual shader pipeline (v2.4.0)
There are no separate HEADER/module source files: `src/shaders/webglShaders.ts` exports one monolithic GLSL template string, and `ShaderManager` assembles small shaders from it at runtime.

| Stage | Where | What happens |
|-------|-------|--------------|
| Monolithic source | `webglShaders.ts` — `FRAGMENT_SHADER_SOURCE` (L74-4193, 4195 lines / 161KB total) | uniforms, all `map*` functions, `evalSingleFractal`, `sceneSDF`, lighting, `main()` |
| Lazy minimal assembly | `src/engine/ShaderManager.ts` (327 lines) | parses the monolithic string and builds ~900-line per-fractal shader: header + ONE fractal function + generated minimal `sceneSDF` + footer |
| Non-blocking compile wait | `ShaderManager` + `KHR_parallel_shader_compile` | polls compile/link completion (budget: link 3200 spins, stage 800) with a single `gl.flush()` per wait — never flushes inside the spin loop |
| Progress reporting | `WebGLEngine.onCompileProgress` | parsing 10% → compiling 40% → linking 80% → complete 100%, surfaced as `loadProgress` in `useRenderEngine` and consumed by `CosmicLoader` (loader dismisses on the first rendered frame) |
| Warmup | `WebGLEngine.beginWarmup()` | 24 frames (~0.4 s at 60 fps) at quality 0 after each shader swap, then restores pre-swap quality |
| Fallback | `WebGLEngine.ts:292-355` | if the minimal shader fails to compile/link, the full monolithic shader is compiled instead |
| LRU cache | `ShaderManager` | max 8 compiled programs |

The WebGPU backend mirrors the same fragment-pipeline design in `src/shaders/webgpuShaders.ts` (4069 lines, 158KB): it implements indices 0-130 (131/431 types); indices 131-430 fall back to phyllotaxis. WebGL2 renders all 431 types.

## Render Modes (7 Total)

### Mode 0: Solid PBR
**Uniform range**: `u_render_style == 0` (default)

**Features**:
- Full PBR lighting pipeline
- Environment reflections (1 sample)
- Bounce light (indirect illumination)
- Subsurface scattering (3 samples)
- Soft shadows (16 steps — GLSL only; removed in the WGSL pipeline)
- Micro normal detail (15% blend)

**Lighting equation** (`webglShaders.ts:3847`):
```glsl
col = ambient * 0.35 + diffuse * 2.0 + specular * 1.5 + rim * 1.6 
    + sssColor * sssBackLight + bounceCol * 1.2 + reflCol * 0.6;
```

**Visual**: Golden/olive 3D forms with realistic lighting

---

### Mode 1: X-Ray Tomography
**Uniform range**: `0.5 < u_render_style < 1.5`

**Features**:
- Volumetric path-length density
- Beam hardening effect
- Bone density mapping (curvature = cortical, trap = trabecular)
- Vasculature visualization (orbit trap channels)
- Edge glow (periosteum)
- Compton scatter (bluish haze)

**Key variables**:
- `boneDensity`: 0.15-1.0 based on curvature + AO + trap
- `beamHardening`: depth-based absorption
- `xrayCore`: dense bone color
- `xrayVessel`: vascular network

**Visual**: Medical X-ray style with blue/white bone structure

---

### Mode 2: Topography
**Uniform range**: `1.5 < u_render_style < 2.5`

**Features**:
- Height-based terrain coloring
- Multi-scale contour lines (20x, 8x, 3x frequency)
- Ridge/valley detection
- Slope shading
- Elevation zones (water, lowland, highland, peak)

**Color zones**:
- Water: `u_secondary_color * 0.35` (height < 0.35)
- Lowland: mix (0.35-0.65)
- Highland: `u_primary_color` (0.65-0.90)
- Peak: `u_accent_color` (> 0.90)

**Visual**: Topographic map with contour lines

---

### Mode 3: Hologram
**Uniform range**: `2.5 < u_render_style < 3.5`

**Features**:
- Chromatic aberration (per-channel offset)
- Fresnel edge glow
- Depth-varying scanlines
- Curvature wireframe
- Data glitch bursts
- Hexagonal grid overlay
- Shimmer effect

**Key effects**:
- `rOff/gOff/bOff`: sin-based chromatic shift
- `scanline`: 200-350 frequency based on depth
- `hexGrid`: 25.0 scale hexagonal mesh
- `glitch`: random bursts at 0.965 threshold

**Visual**: Sci-fi holographic projection with blue/cyan colors

---

### Mode 4: Iridescent/Pearl
**Uniform range**: `3.5 < u_render_style < 4.5`

**Features**:
- 5-order thin-film interference
- Fresnel-weighted specular
- Angle-dependent rainbow colors
- Material-tinted highlights

**Interference orders**:
```glsl
order1 = nv * 3.0 * filmThickness
order2 = nv * 5.0 * filmThickness + time * 0.08
order3 = nv * 7.0 * filmThickness
order4 = nv * 9.0 * filmThickness - time * 0.05
order5 = nv * 11.0 * filmThickness
```

**Visual**: Rainbow pearl/soap bubble effect

---

### Mode 5: Quantum/Plasma
**Uniform range**: `4.5 < u_render_style < 5.5`

**Features**:
- Wave interference (3 directional waves)
- Magnetic flux lines (curl-like field)
- Probability density visualization
- Energy field coloring
- PBR diffuse + specular

**Wave equations**:
```glsl
wave1 = sin(length(p) * 12.0 - time * 3.5)
wave2 = cos(dot(p, normalize(1.618, 1.0, 0.618)) * 7.0 + time * 2.2)
wave3 = sin(dot(p, normalize(-0.618, 1.618, 1.0)) * 9.0 - time * 1.8)
```

**Visual**: Purple/blue plasma with magnetic field lines

---

### Mode 6: Crystal/Gemstone
**Uniform range**: `u_render_style > 5.5`

**Features**:
- Beer-Lambert absorption (asymmetric RGB)
- Caustics (focused light through facets)
- Dual internal reflections
- Dispersion (wavelength-dependent refraction)
- Facet strength based on curvature

**Absorption**:
```glsl
beer = exp(-beerDist * vec3(0.05, 0.15, 0.6))
// Red penetrates deepest, blue absorbs fastest
```

**Visual**: Transparent crystal with internal reflections and rainbow dispersion

---

## Post-Processing Pipeline

### 1. ACES Tone Mapping
```glsl
const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
col = (col * (a * col + b)) / (col * (c * col + d) + e);
```

### 2. Bloom Simulation
- Threshold: 0.6 brightness
- Strength: 0.35
- Accent color tint: 0.15

### 3. Depth of Field
- Focus distance: `cam_dist * 1.2`
- Aperture: `0.15 / max(cam_dist * 0.5, 0.5)`
- 5x5 bokeh kernel (25 samples)

### 4. Motion Blur
- Fly-through mode: 0.15 blur intensity
- Auto-rotate mode: 0.05 blur intensity
- 5-tap temporal sampling

### 5. God Rays / Volumetric Light
- 8-step sampling along light ray
- Occlusion-based light shafts
- Warm golden color (1.0, 0.95, 0.8)
- Distance falloff: `exp(-distance * 0.08)`

### 6. Chromatic Aberration
- Strength: 0.0015 * (1.0 + depth * 0.1)
- Red/blue channel shift
- Very subtle (0.008 intensity)

### 7. Vignette
- Strength based on camera distance
- Smooth falloff from center

### 8. Film Grain / Dither
- Color-space dither to eliminate banding
- 1/128.0 intensity

### 9. Edge Sharpening
- fwidth-based edge detection
- Unsharp mask: 12% blend

---

## Lighting System

### Soft Shadows (GLSL only)
- 16-step ray march
- Penumbra factor: `12.0 * d / t`
- Max distance: 8.0 units
- WGSL equivalent: removed — `sh1 = sh2 = 1.0`, shading relies on AO only

### Subsurface Scattering
- 3 samples along light direction
- Thickness accumulation
- Warm color: (1.0, 0.4, 0.2)
- Back-light term for thin parts

### Environment Reflections
- 1 sample along reflect direction
- Fresnel-based intensity
- Color bleeding approximation

### Bounce Light
- 1 sample along bounce direction
- Simplified indirect illumination
- 0.15 intensity * AO

---

## Normal Estimation

### Base Normal (Tetrahedral)
```glsl
vec3 e1 = vec3(eps, -eps, -eps);
vec3 e2 = vec3(-eps, -eps, eps);
vec3 e3 = vec3(-eps, eps, -eps);
vec3 e4 = vec3(eps, eps, eps);
n = e1 * SDF(p+e1) + e2 * SDF(p+e2) + e3 * SDF(p+e3) + e4 * SDF(p+e4);
```

### Micro Normal
- Scale: `clamp(cam_dist * 0.5, 0.5, 2.0)`
- Epsilon: `0.0005 * scale`
- Blend: 15% with base normal

---

## Ambient Occlusion

### Multi-Scale AO
- 7 samples along normal
- Distance-adaptive scale
- IQ 4-distance method:
  - 0.003: micro occlusion (20% weight)
  - 0.02: small details (35% weight)
  - 0.08: medium features (30% weight)
  - 0.18: large structures (15% weight)

---

## Ray Marching

### Parameters
- **Max steps**: GLSL 256 (close) / 192 (medium) / 128 (far) × `qualityMult` (0.5 + quality_level × 0.25) → 64-256; WGSL 512 / 384 / 256
- **Max distance**: 2048/1536/1024 based on camera distance
- **Bounding radius**: 6.0 (both backends)
- **Hit threshold**: `max(max(cam_dist * 0.0003, 0.0001) * 3.0, 0.002)`
- **Binary search**: 20 iterations for surface refinement (sign-aware)

### Optimizations
1. **Hierarchical space leaping**: 3-level bounding volumes
2. **LOD system**: Reduce iterations at far distance
3. **Adaptive step size**: Larger when far, smaller when close
4. **Sign tracking**: Record surface crossings for stability
5. **Early termination**: miss count > `16 + quality_level * 8` breaks loop

### Binary Search
```glsl
for (int j = 0; j < 20; j++) {
  float tMid = (tLow + tHigh) * 0.5;
  float dMid = sceneSDF(pMid).x;
  if (abs(dMid) < hit_threshold) { hit = true; break; }
  // Use sign to determine which half contains surface
}
```

---

## Performance Budget

### SDF Calls Per Pixel
- Ray marching: ~100-200 (average case)
- Normal estimation: 4 (tetrahedral)
- Micro normal: 4
- Soft shadows: 16 * 2 lights = 32 (GLSL; WGSL skips them)
- AO: 7 + 4 = 11 (GLSL; WGSL 5 + 3 = 8)
- SSS: 3
- Environment reflection: 1
- Bounce light: 1
- God rays: 8
- **Total**: ~170-270 SDF calls

### GPU Requirements
- WebGL2 with GLSL ES 3.00
- KHR_parallel_shader_compile (optional)
- 32+ extensions supported
- 1024+ uniform components
- WebGPU (optional): async pipeline, 52-float / 208-byte uniform buffer (indices 48-51 are the struct alignment tail)

---

## Color System

### Palette
- Primary color: `u_primary_color` (vec3)
- Secondary color: `u_secondary_color` (vec3)
- Accent color: `u_accent_color` (vec3)
- Ambient color: `u_ambient_color` (vec3)

### Harmonic Cosine Palette Engine
```glsl
float phase = fract(
  normalPhase * 0.45 +       // Normal X — primary variation
  normalPhase2 * 0.30 +      // Normal Y
  normalPhase3 * 0.15 +      // Normal Z
  hashNoise * 0.15 +         // Reduced noise
  hashNoise2 * 0.10 +        // Secondary hash
  hashNoise3 * 0.05 +        // Tertiary hash
  trapSmooth * 0.25 +        // Orbit trap detail
  curvNorm * 0.20 +          // Curvature variation
  p.y * 0.04 + p.x * 0.02 + p.z * 0.02 +  // Position
  length(p - ro) * 0.015 +   // Distance-based
  u_time * 0.03 + seedAnim * 0.01 + 0.37   // Animation + offset
);
float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0/GOLDEN_RATIO));
float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0/GOLDEN_RATIO));
```

---

## Fog & Atmosphere

### Exponential-Squared Fog
```glsl
float fogStart = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
float fogDensity = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
float fog = 1.0 - exp(-fogDist * fogDist * fogDensity * 0.5);
```

### Rayleigh Scattering
- Sun direction: time-based rotation
- Scatter color: (0.3, 0.5, 0.8) blue
- Intensity: `pow(sunAmount, 2.0)`

---

## Debug & Diagnostics

### Console Logging
- Engine init: `[DIAG] Engine ready: WebGL2 | ...`
- Health check: Every 30s with FPS, fractal type, render style
- Render diagnostics: Invalid uniforms, out-of-range values
- MathValidation: defined but not used in render paths (removed for anti-freeze; validation runs at init only)

### Telemetry
- FPS (current, average, 1% low)
- Frame time (ms)
- Resolution
- Backend (WebGL2/WebGPU)
- Adapter name
- Draw call count
- Uniform buffer state

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 1-7 | Switch render mode (solid, xray, topo, hologram, iridescent, quantum, gemstone) |
| F | Toggle fly-through/orbit camera |
| R | Reset camera position |
| I | Toggle inertia |
| S | Stop rotation |
| W/A/S/D | Fly-through movement |
| Space/E | Fly up |
| Q/C | Fly down |
| Shift | Speed boost (2.8x) |

---

## Troubleshooting

### All modes look identical
**Cause**: Render style uniform not updating
**Fix**: Check keyboard shortcuts pass string names, not numbers

### GPU Unavailable error
**Cause**: WebGL2 context creation failed
**Fix**: Use non-embedded browser with GPU acceleration enabled

### Passive event listener warnings
**Cause**: Wheel/touch events with preventDefault()
**Fix**: Added `touchAction: 'none'` to canvas container

### Black screen
**Cause**: Shader compilation error or ray march miss
**Fix**: Check console for shader errors, verify SDF returns valid distances

### TypeScript errors after code changes
**Cause**: Strict type checking on FractalType union (431 values), FractalCategoryKey (10 values)
**Fix**: Use `Partial<Record<FractalType, T>>` for incomplete Records; ensure category keys match `FractalCategoryKey` type

### Low FPS
**Cause**: Too many SDF calls or high resolution
**Fix**: Reduce iterations, lower DPR, disable expensive effects
