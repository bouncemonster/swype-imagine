# Shader Modules

**161KB GLSL + 158KB WGSL | Shader code for fractal rendering**

## Overview
Collection of shader modules containing fractal variations, rendering techniques, and post-processing effects. Two parallel implementations:
- **GLSL modules** (shaders/modules/): Used by WebGL2 renderer
- **WGSL shader** (webgpuShaders.ts): Used by WebGPU renderer

GLSL dispatches all 431 fractal indices; the WGSL side currently implements 131/431 (indices 0-130, rest fall back to phyllotaxis). Same core math for the shared range.

## Module Files

**5 active module files + index.ts ≈38KB total** (kkrieger-style compressed GLSL strings — parameterized base functions + per-variant lookup, not per-variant code). Each module is embedded into `webglShaders.ts` via template interpolation:

| Module | GLSL dispatch range (ftype) | Variants |
|--------|------------------------------|----------|
| juliaVariations.ts | 141-190 | 50 |
| ifsVariations.ts | 191-240 | 50 |
| lsystemVariations.ts | 241-290 | 50 |
| flameVariations.ts | 291-340 | 50 |
| hybridVariations.ts | 341-430 | 90 |

### 1. hybridVariations.ts (180 lines, 11.9KB)
**Purpose**: Hybrid fractal combinations blending multiple fractal types
**Contents**: 90 hybrid variations combining different fractal algorithms
**Key function**: `mapHybridVariant(p, t, phi, iters, idx)` — parameterized lookup (idx 1-90) over a shared base implementation

### 2. juliaVariations.ts (110 lines, 6.3KB)
**Purpose**: Mandelbulb and Julia set variations
**Contents**: 50 variants with different power values (4.2-31.0)
**Key function**: `mapJuliaVariant(p, t, phi, iters, idx)` calling `mapJuliaBase(...)` with per-variant parameters
**Categories** (vtype in the base function: 0=mandelbrot, 1=julia, 2=burningShip, 3=tricorn, 4=rotated):
- Standard Mandelbulb (power variations)
- Julia Sets (constant c)
- Burning Ship (abs transformation)
- Tricorn (conjugate)
- Rotated Mandelbulb

### 3. lsystemVariations.ts (130 lines, 7.1KB)
**Purpose**: L-system (Lindenmayer system) fractals
**Contents**: 50 L-system variations
**Key function**: `mapLSystemVariant(p, t, phi, iters, idx)` (idx 1-50)
**Fractal types**:
- Dragon curves
- Koch snowflakes
- Sierpinski triangles
- Plant-like structures
- Space-filling curves

### 4. flameVariations.ts (114 lines, 6.2KB)
**Purpose**: Iterated Function System (IFS) flame fractals
**Contents**: 50 flame variations
**Key function**: `mapFlameVariant(p, t, phi, iters, idx)` (idx 1-50)
**Features**:
- Nonlinear transformations
- Color palette integration
- Symmetry variations
- Pre/post affine transforms

### 5. ifsVariations.ts (115 lines, 6.3KB)
**Purpose**: General IFS (Iterated Function System) attractors
**Contents**: 50 IFS variations
**Key function**: `mapIFSVariant(p, t, phi, iters, idx)` (idx 1-50)
**Attractors**:
- Strange attractors (Lorenz, Rossler, etc.)
- Fractal attractors (Hopalong, Phoenix, etc.)
- Chaotic systems

### Deleted Modules (merged into webglShaders.ts)
The following files were UNUSED DUPLICATES — all their code is embedded directly in `webglShaders.ts` (4195 lines):
- ~~advancedRendering.ts~~ — AO, soft shadows, PBR, SSS
- ~~renderModes.ts~~ — 7 render mode implementations
- ~~postProcessing.ts~~ — Tone mapping, bloom, color grading
- ~~sdfOperations.ts~~ — Boolean ops, domain warp, smooth ops
- ~~index.ts~~ — Module re-exports

## Common Patterns

### Function Signature
```glsl
float mapXxxVariant(vec3 p, float t, float phi, int iters, int idx)  // per-module variant lookup
float mapXxxBase(vec3 p, float t, float phi, int iters, /* params */) // parameterized core
```
- `p`: 3D point to evaluate
- `t`: Time parameter (for animation)
- `phi`: Golden ratio multiplier
- `iters`: Maximum iteration count
- `idx`: Variant number within the module's dispatch range

### Distance Estimation
All fractal functions return distance estimation:
```glsl
return 0.5 * log(r) * r / dr;
```
Where:
- `r`: Final radius after iterations
- `dr`: Derivative of radius (for distance estimation)

### Iteration Loop
```glsl
for (int i = 0; i < 32; i++) {
  if (i >= iters) break;
  r = length(z);
  if (r > escapeRadius) break;
  // Transformation
  z = transform(z, power, ...);
  z += contribution;
  dr = updateDerivative(dr, r, power);
}
```
Variation modules use a fixed 32-iteration ceiling broken by `iters`; the dispatch layer clamps `u_iterations` to 6-64.

## Key Mathematical Concepts

### Mandelbulb Formula
```glsl
// Convert to polar
float theta = acos(z.z / r);
float phiAngle = atan(z.y, z.x);

// Raise to power
float zr = pow(r, power);

// Convert back to cartesian
z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
              sin(theta * power) * sin(phiAngle * power), 
              cos(theta * power));
```

### Smooth Minimum (smin)
```glsl
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
```

### Domain Warp
```glsl
p += warpVector * strength;
```

## Critical Notes
1. **Two implementations**: GLSL (WebGL2) and WGSL (WebGPU) versions
2. **Concatenated**: GLSL modules combined into single shader
3. **~319KB total**: Large shader code (161KB GLSL webglShaders.ts + 158KB WGSL webgpuShaders.ts); the 5 variation modules themselves are only ≈38KB of compressed GLSL strings
4. **Parameterized variants**: each module is one base function + a variant lookup, not dozens of near-duplicate functions
5. **Distance estimation**: Core technique for ray marching
6. **Escape radius**: module base functions use 4.0 (julia, hybrid) or 8.0 (ifs, lsystem, flame) — increased from the original 2.0 to support high powers
7. **Iterations**: `u_iterations` clamped to 6-64 at dispatch (`clamp(u_iterations, 6.0, 64.0)`, webglShaders.ts:3140); variation modules internally cap their loop at 32. (NeuroAesthetics defaults keep the practical range around 12-32.)
8. **Power parameter**: Varies by fractal type (4-31 for Mandelbulb)
9. **Derivative tracking**: Essential for distance estimation
10. **Performance**: All computation on GPU in parallel

## Dependencies
- GLSL modules: Pure GLSL code, no external imports
- WGSL shader: Single file (webgpuShaders.ts)
- Used by WebGLEngine.ts and WebGPUEngine.ts
- GLSL modules concatenated by webglShaders.ts
