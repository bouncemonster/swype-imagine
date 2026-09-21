# webglShaders.ts

**4195 lines | 161KB | GLSL ES 3.0 shaders**

## Purpose
Complete WebGL2 shader pipeline: vertex shader, fragment shader, 131 inline SDF map functions + 5 parameterized variant families, 7 render modes, post-processing. All 431 fractal type indices (0-430) dispatch through this fragment shader.

## Structure
```
1. Vertex Shader (lines 63-71, VERTEX_SHADER_SOURCE)
   - Simple fullscreen-triangle passthrough
   
2. Fragment Shader (lines 74-4193, FRAGMENT_SHADER_SOURCE)
   - 34 uniforms (lines 80-119)
   - Constants (PI, TWO_PI, GOLDEN_RATIO, GOLDEN_ANGLE)
   - Helper functions (rot2D, rotateVec)
   - 131 inline map* functions (fractal indices 0-130)
   - Embedded variation modules (indices 131-430, via ${...} interpolation)
   - evalSingleFractal() - dispatch for ALL 431 indices (lines 2893-3060)
   - sceneSDF() - composite evaluation (line 3115)
   - Lighting (soft shadows, SSS, AO, reflections)
   - 7 render modes (solid, xray, topo, hologram, iridescent, quantum, gemstone)
   - Post-processing (ACES, bloom, DOF, motion blur, god rays, vignette)
   - main() - entry point (line 3396)
```

## Key Sections
| Lines | Content |
|-------|---------|
| 63-71 | Vertex shader |
| 74-119 | Fragment preamble: precision + 34 uniforms |
| 120-2587 | Constants, helpers, inline SDF functions (part 1) |
| 2588-2602 | Variation module GLSL interpolated (julia/ifs/lsystem/flame/hybrid) |
| 2604-2892 | More inline SDF functions (visually-distinct sets) |
| 2893-3060 | evalSingleFractal() dispatch (ftype 0-140 explicit, 141-430 range rules) |
| 3115-3350 | sceneSDF() + composite ops |
| 3352-3395 | Soft shadows / lighting helpers |
| 3396-4193 | main(): raymarch, render modes, post-processing |

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
- [44] palette_rotation, [45] auto_rotate, [46] quality_level, [47] reserved

## Fractal Dispatch (evalSingleFractal, lines 2893-3060)
All 431 type indices dispatch here: explicit `ftype == 0…140` branches for Mandelbrot variants (131-140), then compressed range rules (:3045-3057) — Julia 141-190, IFS 191-240, L-System 241-290, Flame 291-340, Hybrid 341-430 — each delegating to the module lookup functions. Unmapped indices fall through to `mapPhyllotaxis`.

## Render Modes (u_render_style)
Every mode now blends its effect OVER the base PBR relief (`col = mix(col*0.2–0.45, styleCol, 0.72–0.85)`) instead of discarding it, and carries a palette-independent identity so the figure stays readable and the 7 modes stay visually distinct on any palette:
0: solid - PBR with AO, soft shadows, SSS (exposure rebased into ACES chromatic region)
1: xray - Cool blue-white volumetric tomography w/ contrast curve
2: topo/sonar/lidar - Real water→snow elevation ramp + high-contrast contours
3: hologram - Cyan projector identity + stronger scanlines/hex grid
4: iridescent - Thin-film interference (relief-preserving)
5: quantum - Cold-cyan→hot-magenta field (tamed additive blowout)
6: gemstone - Prismatic blue→magenta cast + Beer-Lambert + caustics

## Exposure & Internal Evolution
- Auto-exposure target 1.8→1.1, bloom threshold 0.6→0.8 / strength 0.35→0.16, and a lighter PBR composite prevent the cream-blowout that previously hid all form and hue.
- God rays are gated on the Ether Fog slider and reduced 8→5 `sceneSDF` samples/pixel (perf + no warm-white veil).
- `sceneSDF` evolves structurally: `phi` drifts on golden sub-harmonics of `u_time*u_morph_speed` and iteration depth breathes ±2, so figures develop over time (morphSpeed=0 freezes). Mirrored in `ShaderManager.generateMinimalSceneSDF` and `webgpuShaders.ts`.
- Post-processing dead-code cleanup: the 25-tap "bokeh" DOF and 5-tap "motion blur" loops averaged `col` with itself (offsets never re-sampled the scene) — mathematical no-ops that only cost GPU time; removed. The chromatic-aberration and both dither hashes had a `+ u_time` term that manifested as per-pixel flicker/grain on the slowly-evolving surface, not dispersion or banding relief; CA is now a stable radial RGB lift and the dithers are static per-pixel hashes (still break banding, no shimmer). Mirrored in `webgpuShaders.ts` (which never had the DOF/motion loops but did carry the noisy CA/dither).

## Dependencies
- `modules/juliaVariations.ts` - 50 Julia variants (ftype 141-190)
- `modules/ifsVariations.ts` - 50 IFS variants (ftype 191-240)
- `modules/lsystemVariations.ts` - 50 L-System variants (ftype 241-290)
- `modules/flameVariations.ts` - 50 Flame variants (ftype 291-340)
- `modules/hybridVariations.ts` - 90 Hybrid variants (ftype 341-430)

## Notes
- All 7 render modes embedded (no external modules needed)
- Post-processing embedded inline (duplicate module files were deleted)
- KHR_parallel_shader_compile for async compilation
- Binary search refinement (20 iterations) for surface accuracy
