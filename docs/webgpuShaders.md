# webgpuShaders.ts

**3538 lines | WGSL shaders for WebGPU renderer**

## Purpose
Complete WGSL shader implementation for WebGPU fractal rendering. Mirrors webglShaders.ts functionality but uses WebGPU Shading Language (WGSL) syntax.

## Export
```typescript
export const WGSL_SHADER: string
```
Single WGSL shader string containing all rendering code.

## Uniform Buffer Structure (lines 2-48)
```wgsl
struct Uniforms {
  resolution: vec2<f32>,      // [0-1] Screen dimensions
  time: f32,                  // [2] Animation time
  phi_val: f32,               // [3] Golden ratio value

  cam_rot: vec2<f32>,         // [4-5] Camera rotation (pitch, yaw)
  zoom: f32,                  // [6] Camera zoom
  fractal_type: f32,          // [7] Fractal type index

  iterations: f32,            // [8] Max iterations
  glow_intensity: f32,        // [9] Glow effect strength
  morph_speed: f32,           // [10] Morphing animation speed
  hybrid_type: f32,           // [11] Hybrid fractal type

  hybrid_blend: f32,          // [12] Blend factor for hybrids
  box_fold: f32,              // [13] Box folding parameter
  sphere_fold: f32,           // [14] Sphere folding parameter
  interior_cut: f32,          // [15] Interior cutaway

  primary_color: vec3<f32>,   // [16-18] Primary RGB
  tertiary_type: f32,         // [19] Tertiary fractal type

  secondary_color: vec3<f32>, // [20-22] Secondary RGB
  tertiary_blend: f32,        // [23] Tertiary blend factor

  accent_color: vec3<f32>,    // [24-26] Accent RGB
  compose_op: f32,            // [27] Composite operation

  smooth_k: f32,              // [28] Smooth minimum k
  warp_strength: f32,         // [29] Domain warp strength
  octave_layers: f32,         // [30] FBM octave layers
  cam_mode: f32,              // [31] Camera mode

  cam_pos: vec3<f32>,         // [32-34] Camera position
  slice_plane: f32,           // [35] Slice plane distance

  headlamp_power: f32,        // [36] Headlamp intensity
  volumetric_fog: f32,        // [37] Fog density
  slice_axis: f32,            // [38] Slice axis (0=X, 1=Y, 2=Z)
  render_style: f32,          // [39] Render mode index

  ambient_color: vec3<f32>,   // [40-42] Ambient RGB
  palette_seed: f32,          // [43] Palette random seed

  palette_rotation: f32,      // [44] Palette rotation angle
  pad5: vec3<f32>,            // [45-47] Padding (alignment)
};
```
**Total: 48 floats** (matches WebGL uniform buffer)

## Vertex Shader (lines 57-70)
```wgsl
@vertex
fn vs_main(@builtin(vertex_index) vertex_index: u32) -> VertexOutput {
  // Full-screen triangle (3 vertices)
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  // ...
}
```
- **Full-screen triangle**: Covers entire viewport
- **No vertex buffer**: Uses vertex_index to generate positions
- **UV coordinates**: Passed to fragment shader

## Constants (lines 72-75)
```wgsl
const PI: f32 = 3.141592653589793;
const TWO_PI: f32 = 6.283185307179586;
const GOLDEN_RATIO: f32 = 1.618033988749895;
const GOLDEN_ANGLE: f32 = 2.399963229728653; // 137.507764°
```

## Helper Functions

### Rotation (lines 77-93)
```wgsl
fn rot2D(p: vec2<f32>, a: f32) -> vec2<f32>
fn rotateVec(p: vec3<f32>, pitch: f32, yaw: f32) -> vec3<f32>
```

### Fractal Maps
Each fractal type has a `mapXxx()` function returning `vec2<f32>(distance, orbitTrap)`:
- `mapPhyllotaxis()` - Sacred geometry IFS
- `mapMandelbulb()` - Power-8 Mandelbulb
- `mapJuliaSet()` - Julia sets
- `mapBurningShip()` - Burning Ship fractal
- `mapTricorn()` - Tricorn (Mandelbar)
- And 80+ more...

## Key Differences from WebGL (webglShaders.ts)

| Feature | WebGL (GLSL) | WebGPU (WGSL) |
|---------|--------------|---------------|
| Syntax | `vec3`, `mat3` | `vec3<f32>`, `mat3x3<f32>` |
| Uniforms | `uniform float u_time;` | `var<uniform> u: Uniforms;` |
| Entry points | `void main()` | `@vertex fn vs_main()`, `@fragment fn fs_main()` |
| Binding | `gl_FragCoord` | `@builtin(position)` |
| Texture | `texture2D` | `texture_2d<f32>` |
| Precision | `precision highp float;` | Implicit f32 |
| Functions | `mix()`, `fract()` | `mix()`, `fract()` (same) |

## Critical Notes
1. **WGSL syntax**: WebGPU Shading Language, not GLSL
2. **48 uniforms**: Same layout as WebGL for consistency
3. **Full-screen triangle**: More efficient than quad (3 verts vs 4)
4. **No vertex buffers**: Generated from vertex_index
5. **Mirrors WebGL**: Same fractal types, same math
6. **Type annotations**: WGSL requires explicit types (`vec3<f32>`)
7. **Binding model**: `@group(0) @binding(0)` for uniforms
8. **Entry points**: `@vertex` and `@fragment` decorators
9. **No dynamic shader compilation**: Single monolithic shader
10. **Performance**: WebGPU generally faster than WebGL2

## Related Files
- `WebGPUEngine.ts` - WebGPU renderer using this shader
- `webglShaders.ts` - GLSL version (187KB)
- `shader-modules.md` - GLSL shader modules overview
