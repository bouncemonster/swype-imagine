# webglShaders.ts

**4357 lines | 187KB | GLSL ES 3.0 shaders**

## Purpose
Complete WebGL2 shader pipeline: vertex shader, fragment shader, 86 SDF functions, 7 render modes, post-processing.

## Structure
```
1. Vertex Shader (lines 8-17)
   - Simple quad passthrough
   
2. Fragment Shader (lines 19-4654)
   - 32 uniforms (lines 25-64)
   - Constants (PI, TWO_PI, GOLDEN_RATIO, GOLDEN_ANGLE)
   - Helper functions (rot2D, rotateVec)
   - 86 SDF map* functions
   - sceneSDF() - composite evaluation
   - Lighting (soft shadows, SSS, AO, reflections)
   - 7 render modes (solid, xray, topo, hologram, iridescent, quantum, gemstone)
   - Post-processing (ACES, bloom, DOF, motion blur, god rays, vignette)
   - main() - entry point
```

## Key Sections
| Lines | Content |
|-------|---------|
| 8-17 | Vertex shader |
| 19-64 | Uniforms (32 total) |
| 66-87 | Constants + helpers |
| 89-2000 | SDF functions (86 map* functions) |
| 2000-3000 | sceneSDF() + lighting |
| 3000-4000 | Render modes |
| 4000-4654 | Post-processing + main() |

## Uniform Buffer Layout
48 floats packed in `FractalEngineBase.packUniforms()`:
- [0-1] resolution, [2] time, [3] phi
- [4-5] cam_rot, [6] zoom, [7] fractal_type
- [8-11] iterations, glow, morph, hybrid_type
- [12-15] hybrid params
- [16-18] primary_color, [19] tertiary_type
- [20-22] secondary_color, [23] tertiary_blend
- [24-26] accent_color, [27] compose_op
- [28-30] smooth_k, warp, octaves
- [31] cam_mode, [32-34] cam_pos
- [35] slice_plane, [36] headlamp, [37] fog
- [38] slice_axis, [39] render_style
- [40-42] ambient_color, [43] palette_seed
- [44] palette_rotation, [45-47] padding

## Render Modes (u_render_style)
0: solid - PBR with AO, soft shadows, SSS
1: xray - Volumetric tomography
2: topo/sonar/lidar - Topographic contours
3: hologram - Chromatic aberration + scanlines
4: iridescent - Thin-film interference
5: quantum - Wave interference + magnetic fields
6: gemstone - Beer-Lambert + caustics

## Dependencies
- `modules/juliaVariations.ts` - 50 Julia variants
- `modules/ifsVariations.ts` - 50 IFS variants
- `modules/lsystemVariations.ts` - 50 L-System variants
- `modules/flameVariations.ts` - 50 Flame variants
- `modules/hybridVariations.ts` - 90 Hybrid variants

## Notes
- All 7 render modes embedded (no external modules needed)
- Post-processing embedded inline (duplicate module files were deleted)
- KHR_parallel_shader_compile for async compilation
- Binary search refinement (20 iterations) for surface accuracy
