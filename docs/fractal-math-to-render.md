# Fractal Math → 3D Render: The Real Translation Pipeline

Deep-dive companion to `fractalMappers-analysis.md` and `shader-modules.md`. This documents
**how fractal mathematics is actually converted into the rendered 3D form** (the real factors),
and the **true size of the mathematical set** behind the advertised 431 types. Every claim is
tied to a source location.

## 1. The end-to-end chain (string name → pixels)

```
FractalType string  →  getFractalIndex()  →  u_fractal_type (float, uniform slot [7])
   (fractalMappers.ts)                        ↓
                     evalSingleFractal(ftype,…)   ← monolith only (WebGL)
   ShaderManager.splice (most 0–130)      mapXXX(p, t, phi, iters) → vec2(DE, orbitTrap)
   *Base/*Variant → full monolith               ↓
                                          sceneSDF(p)  [domain pre-transforms + composites]
                                                 ↓
                              raymarch:  step = |DE| · relax(0.85–1.05), capped 0.5, sign-tracked
                              normals: tetrahedral gradient of sceneSDF().x
                              color:   palette( sceneSDF().y orbitTrap , … ) + 7 render styles
```

So the **single most important math→render factor is the quality of the Distance Estimator**
returned as `sceneSDF().x`: sphere-tracing (`webglShaders.ts:3560-3597`) and shading normals
(`:3329`) are only correct if that value is a true lower-bound distance. The orbit trap
`.y` is a *separate* quantity that only drives colour — geometry never depends on it.

## 2. Five representation strategies (fidelity tiers)

Fractals are NOT all turned into 3D the same way; the technique sets how faithful the render is
to the defining equation:

| Tier | Technique | Example (webglShaders.ts) | Fidelity |
|------|-----------|---------------------------|----------|
| **A** | Analytic escape-time DE with derivative tracking `d = 0.5·log(r)·r/dr` | `mapMandelbulb:170`, `mapQuaternionJulia:207`, `mapJuliaBase` (module) | High — real surface, `dr` recurrence |
| **B** | Implicit surface `|f(p)|/‖∇f‖` (TPMS, band structures) | `mapGyroid:381`, `mapHofstadterButterfly:886` | Medium-High — Lipschitz-normalised |
| **C** | **Orbit-traced tube SDF** `minDist(orbit) − tubeR` (attractors, chaos) | `mapLorenzAttractor:851`, `mapChuaCircuit:1573` | Approximate — NOT a true SDF; fuzzy blobs, cost re-traces the whole orbit **per march sample** |
| **D** | 2D escape-time lifted to 3D (3rd axis modulates the c-plane) | `mapTricorn:1552` (z→c) | True 3D DE but intrinsically slab-like |
| **E** | Constructive / point-and-radius fields (no iteration DE) | `mapPhyllotaxis`, `mapPrimeSpiral:396` | Decorative geometry |

**Consequences that affect "seeing the math":**
- Tier C (≈30 of the classic types are attractors/chaos) share one visual language (glowing
  tubes) and are the most expensive per pixel; their sharpness is bounded by orbit-sample density
  and `tubeR`, not by the ODE itself.
- Tier A is where a wrong/missing `dr` silently degrades the form (see §4).
- WebGPU implements only indices **0–130** (tier A/B/D/E self-contained DEs); the whole
  attractor-heavy and variant-heavy space (131–430) falls back to `mapPhyllotaxis` there.

## 3. The real mathematical set (vs the 431 marketing count)

`evalSingleFractal` (`webglShaders.ts:2893-3059`) dispatches 0–430, but the distinct geometry
**functions** number ~146:

- **0–130** — 131 genuinely distinct DE functions (classic 86 + "beautiful" 10 + modern 8 +
  4D polytopes 5 + manifolds 4 + flames 13 + advanced IFS 5).
- **131–140** — 10 separate `mapMandelbrotVariantN` functions.
- **141–430** — collapsed into **five parameterised base generators**, each taking a variant index:
  `mapJuliaVariant` (:3045, 50), `mapIFSVariant` (:3048, 50), `mapLSystemVariant` (:3051, 50),
  `mapFlameVariant` (:3054, 50), `mapHybridVariant` (:3057, 90).

So ~290 of the 431 "types" are **parameter sweeps of 5 DEs**, not new equations. Concretely,
`mapJuliaBase` (`modules/juliaVariations.ts:13`) generates all 50 Julia variants from ONE
mandelbulb-power DE by choosing `(power ∈ 8…31, vtype ∈ {mandelbrot, julia, burningShip,
tricorn, rotated}, rot, c)`. **Form diversity is therefore real but far narrower than 431** —
the honest count of distinct *mechanisms* is ~146 functions spanning ~9 mathematical families
(algebraic escape-time, folding/KIFS, implicit/TPMS, dynamical-system attractors, higher-D
projections, number-theoretic fields, stochastic/growth, L-system/grammar, flame IFS).

## 4. Alias collisions (advertised ≠ rendered)

19 catalog names are silently mapped to a *different* fractal's math by `getFractalIndex`
(`fractalMappers.ts:138-156`) — they exist in the `FractalType` union but have no DE of their own:

| Advertised name | Actually renders | 
|-----------------|------------------|
| `chenAttractor`, `dadrasAttractor` | Rossler (`73`) |
| `sprottAttractor` | DeJong (`77`) |
| `perlinNoise`, `randomTerrain` | Spherical harmonics (`58`) |
| `worleyNoise` | Reaction-diffusion (`60`) |
| `penroseTiling` | Quasicrystal (`10`) |
| `platonicSolids` | Icosahedron (`6`) |
| `sierpinskiTriangle` | Sierpinski-octahedron (`14`) |
| `mandala` | Phyllotaxis (`0`) |
| …(and 9 more: `burningShip`→27, `dlAggregate`/`percolationCluster`→33, `fibonacciSphere`/`goldenSpiral`→22, `ifsFractal`→25, `newtonFractal`→28, `schwarzSurface`→50, `torusKnot`→57) |

These are a **representational gap**: the UI/atlas can offer a name whose distinct mathematics is
never shown. Genuinely fixing them needs new catalog ordinals (risky — the 131–430 space is fully
allocated to variants), so they are documented here rather than silently rewired.

## 5. Concrete fidelity fix this session: `mapJuliaBase` derivative tracking

In `modules/juliaVariations.ts`, the `tricorn` (vtype 3) and `burningShip` (vtype 2) branches
advanced `z` but **never updated `dr`** (left at 1.0). Because conjugation and per-component
`abs()` both preserve `|z|`, the radial derivative recurrence is identical to the standard branch;
omitting it made the returned DE `0.5·log(r)·r/dr` grossly over-estimate distance → the
sphere-tracer oversampled and those ~16 Julia variants rendered as rounded blobs, hiding their
conjugate/abs filigree. Fix: add `dr = pow(r, power-1.0)*power*dr + 1.0;` to both branches
(matching the already-correct standard branch). This is WebGL-only — WebGPU has no `*Variant`
path. `tsc` 0, `npm test` 1861/0, build ok. (Live before/after headless capture was not possible:
`*Variant` types fall back to the 4230-line monolith which stalls headless ANGLE compile; validated
by logical equivalence to the standard branch + non-regression tests.)

### 5b. Cross-audit: is `mapJuliaBase` the only frozen-derivative DE? (No — and that locates the risk)

To find whether this defect class is systemic, every escape-time DE in the project was audited for
the "`dr`/`dz` advanced correctly each iteration" property (grep `0.5*log`, `dr =`, `dz =`,
`vtype ==` across both engine files and all five variant modules):

| Function | Engine | Derivative tracking | Verdict |
|----------|--------|---------------------|---------|
| `mapJuliaBase` tricorn/burningShip | WebGL | was frozen at 1.0 | **bug — fixed this session** |
| `mapJuliaBase` standard/julia/rotated | WebGL | `pow(r,·)*power*dr (+1)` | correct |
| `mapIFSBase` (:56), `mapLSystemBase` (:74) | WebGL | `dr*scale + 1.0` (isometric folds) | correct for linear-IFS |
| `mapFlameBase` (:53) | WebGL | `dr*scale + 1.0` only | approximates nonlinear `op` as linear contraction |
| `mapHybridBase` all vtypes (:59-74) | WebGL | each branch sets `dr`; vtype3 discards `mb` (dead code, still valid fold) | no frozen-dr |
| `mapMandelbulb:186`, `mapBurningShip3D:778`, `mapQuaternionMandelbrot:680` | WebGL | `dr/dz = … + 1.0` | correct |
| `:144/765/1895/2006` classic DEs | WebGPU | tracked; interior fallback `0.04*(r−k)` | correct |

**Conclusion:** the frozen-derivative defect is *not* present in any hand-written classic DE (tier A)
on either engine, and is the sole instance among the parameterised bases. The clear signal is that
**fidelity risk concentrates in the line-compression refactors** (`*Variations.ts`: 1353/1270/1414/
2670 → ~120 lines), where collapsing per-variant bodies into `vtype` branches can silently drop a
recurrence line — as happened to Julia's tricorn/burning-ship branches. The hand-written 0–130 maps
(pre-dating compression) are sound. Recommendation for future edits: when a variant base gains a new
`vtype`, mirror the *exact* `dr` recurrence of the standard branch and re-audit all branches.

## Known limits / recommendations
- **Tier C cost & fuzziness:** attractors re-run a 240–320-iteration orbit trace inside every
  `sceneSDF` evaluation. A per-frame orbit cache or screen-space density accumulation would cut
  this order-of-magnitude; not done here (render-loop architecture change).
- **Minimal vs monolith `sceneSDF` divergence:** spliced 0–130 shaders omit the hybrid/tertiary
  composites + `domainWarpByGeometry` + per-type adaptive-iterations that the monolith (and thus
  every `*Base/*Variant` type) applies. A single ordinal therefore gets slightly different
  structure/detail treatment depending on which path it takes.
- **Alias + variant inflation** means headline "431 fractals" overstates distinct mathematics;
  prefer quoting "~146 distinct distance estimators across 9 families, expanded to 431 catalogue
  entries via parameter sweeps (and 19 aliases pending real DEs)."
