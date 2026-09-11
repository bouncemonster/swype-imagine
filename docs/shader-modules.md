# Shader Modules

**~220KB GLSL + 140KB WGSL | Shader code for fractal rendering**

## Overview
Collection of shader modules containing fractal variations, rendering techniques, and post-processing effects. Two parallel implementations:
- **GLSL modules** (shaders/modules/): Used by WebGL2 renderer
- **WGSL shader** (webgpuShaders.ts): Used by WebGPU renderer

Both implement the same fractal types and rendering algorithms.

## Module Files

### 1. hybridVariations.ts (67KB)
**Purpose**: Hybrid fractal combinations blending multiple fractal types
**Contents**: ~50 hybrid variations combining different fractal algorithms
**Key functions**: `mapHybridVariant1()` through `mapHybridVariant50()`

### 2. juliaVariations.ts (36KB)
**Purpose**: Mandelbulb and Julia set variations
**Contents**: 50 variants with different power values (4.2-31.0)
**Key functions**: `mapJuliaVariant1()` through `mapJuliaVariant50()`
**Categories**:
- Standard Mandelbulb (power variations)
- Julia Sets (constant c)
- Burning Ship (abs transformation)
- Tricorn (conjugate)
- Rotated Mandelbulb
- Folded Mandelbulb
- Custom escape radius

### 3. lsystemVariations.ts (30KB)
**Purpose**: L-system (Lindenmayer system) fractals
**Contents**: ~30 L-system variations
**Key functions**: `mapLSystemVariant1()` through `mapLSystemVariantN()`
**Fractal types**:
- Dragon curves
- Koch snowflakes
- Sierpinski triangles
- Plant-like structures
- Space-filling curves

### 4. flameVariations.ts (28KB)
**Purpose**: Iterated Function System (IFS) flame fractals
**Contents**: ~40 flame variations
**Key functions**: `mapFlameVariant1()` through `mapFlameVariantN()`
**Features**:
- Nonlinear transformations
- Color palette integration
- Symmetry variations
- Pre/post affine transforms

### 5. ifsVariations.ts (26KB)
**Purpose**: General IFS (Iterated Function System) attractors
**Contents**: ~30 IFS variations
**Key functions**: `mapIFSVariant1()` through `mapIFSVariantN()`
**Attractors**:
- Strange attractors (Lorenz, Rossler, etc.)
- Fractal attractors (Hopalong, Phoenix, etc.)
- Chaotic systems

### 6. advancedRendering.ts (12KB)
**Purpose**: Advanced rendering techniques
**Contents**:
- Ambient occlusion
- Soft shadows
- Global illumination approximations
- Material properties (PBR)
- Subsurface scattering

### 7. renderModes.ts (10KB)
**Purpose**: 7 render mode implementations
**Contents**:
- **solid**: PBR + shadows + AO
- **xray**: Density tomography
- **topo**: Curvature-based topography
- **hologram**: Chromatic aberration, scan lines
- **iridescent**: Multi-order interference
- **quantum**: Energy field visualization
- **gemstone**: Refraction, caustics, dispersion

### 8. postProcessing.ts (6KB)
**Purpose**: Post-processing effects
**Contents**:
- Tone mapping (HDR → LDR)
- Bloom/glow effects
- Color grading
- Vignette
- Depth of field hints
- Anti-banding dithering

### 9. sdfOperations.ts (5KB)
**Purpose**: Signed Distance Field operations
**Contents**:
- **Boolean operations**: union, intersection, subtraction
- **Smooth operations**: smin, smax (polynomial, exponential)
- **Domain operations**: warp, repeat, bend, twist
- **Transformations**: rotate, scale, translate
- **Infinite repetition**: tile patterns with gaps

### 10. index.ts (756B)
**Purpose**: Module exports
**Contents**: Re-exports all module constants

## Common Patterns

### Function Signature
```glsl
float mapVariantN(vec3 p, float t, float phi, int iters)
```
- `p`: 3D point to evaluate
- `t`: Time parameter (for animation)
- `phi`: Golden ratio multiplier
- `iters`: Maximum iteration count

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
3. **~360KB total**: Large shader code (220KB GLSL + 140KB WGSL)
4. **50+ variants per module**: Repetitive structure
5. **Distance estimation**: Core technique for ray marching
6. **Escape radius**: Typically 2.0, some variants use larger
7. **Max iterations**: 32 (controlled by uniform)
8. **Power parameter**: Varies by fractal type (4-31 for Mandelbulb)
9. **Derivative tracking**: Essential for distance estimation
10. **Performance**: All computation on GPU in parallel

## Dependencies
- GLSL modules: Pure GLSL code, no external imports
- WGSL shader: Single file (webgpuShaders.ts)
- Used by WebGLEngine.ts and WebGPUEngine.ts
- GLSL modules concatenated by webglShaders.ts
