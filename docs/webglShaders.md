# webglShaders.ts

**4195 lines | 161KB | GLSL ES 3.0 shaders**

## Purpose
Complete WebGL2 shader pipeline: vertex shader, fragment shader, 131 inline SDF map functions + 5 parameterized variant families, 10 render modes, post-processing. All 431 fractal type indices (0-430) dispatch through this fragment shader.

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
   - 10 render modes (solid, xray, topo, hologram, iridescent, quantum, gemstone, wireframe, heatmap, neon)
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
Headless screenshots (mandelbulb, all 7 modes) exposed two artifact classes and they are now fixed:
- **Flat-blob collapse**: every stylized mode replaced `col` with a flat palette-derived color, so the 3D form vanished. A shared `relief` factor (normalized luminance of the shaded base PBR pass) now multiplies each style's color and a `baseCol` sliver is retained (`col = mix(baseCol*0.3–0.45, styleCol*relief, 0.7–0.82)`), so the figure stays three-dimensional on any palette.
- **Moire + temporal flicker**: high-frequency decorative patterns (topo contours, hologram scanlines/hex grid, quantum interference rings) aliased into noise at distance, and `+ u_time` terms (hologram glitch/shimmer, quantum waves) read as per-frame grain. All pattern widths are now derived from `fwidth()` (fade instead of alias) and the time terms are slowed/removed.
- **Cross-engine parity**: the full style rework (relief-carrier + `fwidth()` anti-aliasing + de-flicker + boundary fade) is now mirrored to WGSL in `webgpuShaders.ts`, so WebGL2 and WebGPU render the modes identically. Force WebGPU on any deep-link with `#engine=webgpu`.
- **PALETTE DETAIL LENS** (replaces the earlier ANTI-FLATTEN block): a single block runs **after** the style dispatch (before the fog, so it reaches every spliced + monolith shader) and is skipped for solid (`u_render_style > 0.5`). It RE-TINTS each mode with the **true specimen palette hue** — `paletteRef = u_primary*0.55 + u_secondary*0.30 + u_accent*0.15`, normalised — keeping only a 0.22 trace of the mode's own hue for identity, then modulates that colour by the mode's structural brightness through a Reinhard curve (`lumN = styleLum/(1+styleLum)`) and the shared `relief`, adds a `micro = length(fwidth(n))` fine-crease term and a `curvNorm` structure sliver, and ends with a HARD ANTI-BLIND CEILING (`col *= min(1, 0.82/outLum)`). The earlier version derived hue from `baseCol`, but the base PBR floods `mat_col` with the golden accent + near-white specular, so `baseCol` arrives desaturated — sourcing from it collapsed every palette to the same cream and made stylized modes look like solid. Taking the hue straight from the palette uniforms restores variety (verified: hologram renders gold on solar-plasma, emerald on celestial-aurora) while the Reinhard + ceiling keep highlights saturated instead of blowing out. WGSL mirror in `webgpuShaders.ts`.

Modes and their palette-independent identity:
0: solid - PBR with AO, soft shadows, SSS (exposure rebased into ACES chromatic region)
1: xray - Cool blue-white volumetric tomography w/ contrast curve
2: topo/sonar/lidar - water→snow elevation ramp + fwidth-AA contours
3: hologram - Cyan projector identity + anti-aliased scanlines/hex grid (glitch now static, no sparkle)
4: iridescent - Thin-film interference (relief-preserving)
5: quantum - Cold-cyan→hot-magenta field (halved spatial freq, slowed drift = no racing rings)
6: gemstone - Prismatic cast + Beer-Lambert + caustics (relief-preserving)
7: wireframe - Structural coordinate lattice the DE folds over, `fwidth()`-AA grid + depth fade
8: heatmap - Blackbody colormap of escape-time density (`steps`), the most literal read of the iteration math
9: neon - Emissive Fresnel rim contour on near-black (only surface edges emit; faint core keeps silhouette)

Style dispatch is bounded: every stylized branch tests `> X.5 && < Y.5`, so an out-of-range `render_style` falls through to the solid default rather than being swallowed by an open-ended `> 5.5` catch-all (gemstone previously used one; now `< 6.5`).

## Exposure & Internal Evolution
- Auto-exposure target 1.8→1.1→0.9 (0.9 lands the peak inside ACES' chromatic region so blown faces keep hue instead of converging to white), bloom threshold 0.6→0.8 / strength 0.35→0.16, and a lighter PBR composite prevent the cream-blowout that previously hid all form and hue.
- God rays are gated on the Ether Fog slider and reduced 8→5 `sceneSDF` samples/pixel (perf + no warm-white veil).
- **`u_morph_speed` is now a single "aliveness" dial (`morphGate = clamp(morph_speed,0,1)`)** in `sceneSDF`. Previously the genuine structural evolution (`phi` drift, ±2 iteration breath) used `t = u_time*u_morph_speed`, but the rigid FRACTAL BREATHING pulse and ORBITAL PRECESSION tumble ran off raw `u_time` — so the wobble drowned the math AND "morphSpeed=0 freezes" was false (the figure still pulsed and turned). Now `morphGate` scales the breath amplitude and the precession rate too, so: at `morph_speed→0` the figure is truly still for study; and because amplitudes saturate at clamp(0,1), pushing `morph_speed` PAST 1 only SPEEDS the mathematical development (via `t`) without amplifying the rigid wobble. `phi`-fold sub-harmonics raised (0.35/0.21→0.5/0.3, iter 0.13→0.18) so a full re-fold completes within the auto-explore dwell. Mirrored in `ShaderManager.generateMinimalSceneSDF` (the production WebGL path) and `webgpuShaders.ts`. The breath amplitude was later raised `0.06 → 0.11` (all three `sceneSDF` copies in lockstep) so growth/shrink is clearly visible.
- Post-processing dead-code cleanup: the 25-tap "bokeh" DOF and 5-tap "motion blur" loops averaged `col` with itself (offsets never re-sampled the scene) — mathematical no-ops that only cost GPU time; removed. The chromatic-aberration and both dither hashes had a `+ u_time` term that manifested as per-pixel flicker/grain on the slowly-evolving surface, not dispersion or banding relief; CA is now a stable radial RGB lift and the dithers are static per-pixel hashes (still break banding, no shimmer). Mirrored in `webgpuShaders.ts` (which never had the DOF/motion loops but did carry the noisy CA/dither).

## Boundary Fade (the "render sphere")
Space-filling fractals (apollonian, etc.) reach the `r_bound > 5.0` reject in `sceneSDF` and were hard-clipped to a visible circle with pure black outside it ("objects confined to a sphere, nothing renders outside"). A `col *= 1.0 - smoothstep(3.5, 5.0, length(p))` at the end of the hit block dissolves the outer shell into the background instead of a hard cut. It is a pure post-shade multiply — the raymarch bounds/step tuning (see the transparent-sphere safety check) are untouched, and bounded fractals (mandelbulb, mandelbox) never reach radius 3.5 so are completely unaffected. Mirrored in `webgpuShaders.ts`. Note: apollonian's intrinsic orbit-trap speckle at high detail is a separate fractal-shading matter, not a render-style or bounds artifact.

## Dependencies
- `modules/juliaVariations.ts` - 50 Julia variants (ftype 141-190)
- `modules/ifsVariations.ts` - 50 IFS variants (ftype 191-240)
- `modules/lsystemVariations.ts` - 50 L-System variants (ftype 241-290)
- `modules/flameVariations.ts` - 50 Flame variants (ftype 291-340)
- `modules/hybridVariations.ts` - 90 Hybrid variants (ftype 341-430)

## Notes
- All 10 render modes embedded (no external modules needed)
- Post-processing embedded inline (duplicate module files were deleted)
- KHR_parallel_shader_compile for async compilation
- Binary search refinement (20 iterations) for surface accuracy
