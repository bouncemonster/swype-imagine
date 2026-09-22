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
                              color:   palette( sceneSDF().y orbitTrap , … ) + 10 render styles
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

### 3b. Verified runtime dispatch probe (corrects the "variants → monolith" claim)

A headless probe (loaded production with `#type=<variant>` and read the app's own
`[ShaderManager] Built minimal shader for fractal N (mapX)` line) shows the lazy per-fractal path
does **NOT** uniformly fall back to the monolith for `idx ≥ 131`. `extractFractalFunction` resolves
an index to the **N-th `map*` definition by source position**, and because the five `*Variations`
modules are `import`ed and concatenated at the TOP of the source (webglShaders.ts:2-6), the
definition order is shifted relative to the catalog ordinal. Result (measured, 0 compile errors):

| catalog idx | type | minimal shader actually built | correct? |
|-------------|------|-------------------------------|----------|
| 1 | mandelbulb | `mapMandelbulb` | ✅ |
| 135 | mandelbrotVariant5 | **`mapFlameSwirl`** | ❌ wrong form |
| 141 | juliaVariant1 | **`mapFlameDiamond`** | ❌ wrong form |
| 167 | juliaVariant27 | (none built → monolith fallback) | ⚠️ fallback |
| 197/262/296/356/430 | ifs/lsystem/flame/hybrid variants | (none built → monolith fallback) | ⚠️ fallback |

So indices that happen to land on an existing definition (131–~145) render a **silently wrong**
form; indices past the definition count fall through to the monolith (which dispatches correctly
via `if (ftype == N)`). **This is latent, not user-facing:** the live UI never selects `idx ≥ 131`
— the showcase is 61 curated, `ALL_FRACTAL_TYPES` is 113, and the Atlas catalog resolves to 57
unique core types, all `idx 0–130` (verified: 0 `*Variant`-typed catalog entries). The monolith
`evalSingleFractal` dispatch (0–430) is correct; only the WebGL *lazy splice* path is misaligned.
Do not surface `*Variant` ids in the UI without first fixing `extractFractalFunction` to key on the
catalog ordinal (explicit name table), not source position.

## 4. Alias mappings in `getFractalIndex` (defensive fallbacks, NOT catalog items)

`fractalMappers.ts:138-156` maps 19 extra `FractalType` union names onto existing indices.
Verified against `tests/fractal-autotest.ts:147-159`: the advertised **431** types are a
closed, uniquely-indexed set (`ALL_FRACTAL_TYPES`, indices 0–430) that **does not contain these
alias names** — so they are *not* selectable catalog/atlas entries. They exist only so that a
legacy caller (e.g. a hand-typed `#type=chenAttractor` deep-link) returns a visually-related
figure instead of falling through `default: return 0` (phyllotaxis). Impact is therefore low, and
the earlier "advertised ≠ rendered" framing here overstated a user-facing problem — corrected.

They split into two honest groups:

| Group | Names → index | Reality |
|-------|---------------|---------|
| **Exact synonyms** (benign — same math) | `burningShip`→27 (`burningShip3D`), `newtonFractal`→28 (`newtonBasins`), `dlAggregate`→33 (`dlaCluster`), `schwarzSurface`→50 (`schwarzP`), `mobiusStrip3D`→111 | correct by design |
| **Different-math fallbacks** (name implies X, renders a *similar* Y) | `chenAttractor`/`dadrasAttractor`→rossler(73), `sprottAttractor`→deJong(77), `perlinNoise`/`randomTerrain`→sph-harmonics(58), `worleyNoise`→reaction-diffusion(60), `percolationCluster`→dla(33), `mandala`→phyllotaxis(0), `fibonacciSphere`/`goldenSpiral`→fib-snowflake(22), `penroseTiling`→quasicrystal(10), `platonicSolids`→icosahedral(6), `sierpinskiTriangle`→sierp-octa(14), `ifsFractal`→dragon(25), `torusKnot`→goldenKnot(57) | graceful approximation, not distinct DEs |

**Why the different-math group is documented, not implemented:** giving `chen`/`dadras`/`sprott`
et al. real DEs needs (a) a new ordinal, (b) a matching branch in *all three* `sceneSDF` copies
(monolith + `generateMinimalSceneSDF` + WGSL), and (c) new catalog entries just to be user-visible —
while (d) `*Variant`/new-monolith types cannot be headless-verified (the 4230-line monolith compile
stalls headless). Since none of these names reach a user through the catalog today, the change buys
no visible payoff yet risks the passing 431-unique-index invariant and the shader-sync contract, so
it is deliberately left as a documented fallback. If ever surfaced in the UI, the correct path is:
add the type to `ALL_FRACTAL_TYPES` + a new high ordinal + a self-contained Tier-A/C DE mirrored to
both engines, and verify on a real GPU (not headless).

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
- **Variant sharing vs the headline count:** the 431 catalogue entries are 431 *uniquely-indexed*
  types (test-enforced), but only ~146 distinct DE *functions*, because indices 131–430 are parameter
  sweeps through 5 bases. Prefer quoting "431 catalogue types drawn from ~146 distinct distance
  estimators across 9 mathematical families." (§4's 19 aliases are extra union names outside the 431
  and do not inflate the headline.)

## 6. Render-mechanics audit (the shared footer style dispatch)

The render styles are not per-fractal code — they live in the **shared footer** of every shader
(GLSL `webglShaders.ts` / WGSL `webgpuShaders.ts`), dispatched by `if (u_render_style > X.5 && u_render_style < Y.5)`.
Because the footer reaches all spliced and monolith shaders, a defect here affects every figure at once.
Audit findings that led to the current 10-style set:

- **Open-ended dispatch catch-all (fixed).** Gemstone was the last branch and tested only `> 5.5`
  with no upper bound, so *any* out-of-range `render_style` silently rendered as gemstone instead of
  falling through to the solid default. Adding styles 7/8/9 made this a correctness hazard (an interim
  index mismatch would have shown the wrong effect). Every stylized branch is now a bounded `> X.5 && < Y.5`
  window; `fractal-autotest.ts` asserts each new window string exists in BOTH shaders.
- **Per-style `sceneSDF` re-evaluation is an FPS sink (documented, not removed).** Gemstone computes two
  extra full `sceneSDF()` evaluations per pixel for its internal-reflection bounces (~3× the field cost of a
  single shade). This is deliberate light transport, kept for the look, but it is the heaviest style on the
  timeline and interacts with `DynamicQuality`; recorded here so it is a conscious trade-off.
- **Style identity must survive the palette.** A stylized mode that rebuilds `col` purely from palette colors
  flattens the 3D form; every style (including the 3 new ones) carries the shared `relief` factor + a `baseCol`
  sliver so geometry reads through any palette. The new **Heatmap (8)** deliberately leans on `steps`/iteration
  density (the escape-time math itself) rather than surface shading — it is the closest style to "showing the raw
  iteration count", complementing **Wireframe (7)** (shows the DE fold lattice) and **Neon (9)** (edge-only rim).
- **Shared ANTI-FLATTEN reinforcement (added).** The per-style `relief`/`baseCol` treatment is necessary
  but not sufficient — a stylized mode can still wash out the large-scale form or hide the finest folds. A
  single post-dispatch block in the footer (after the style `if/else`, before the fog; skipped when
  `u_render_style > 0.5` is false, i.e. solid) now re-injects three independent depth cues for *every*
  stylized mode at once: `form` (global relief from `baseCol` luminance, `col *= mix(1, form, 0.6)`),
  `micro = length(fwidth(n))` (the finest screen-space normal detail — tiny folds/creases that survive any
  recolor, tinted to the accent), and a `curvNorm` structure term. Because it lives after the dispatch it
  propagates to all spliced + monolith shaders on both engines simultaneously (WGSL mirror in
  `webgpuShaders.ts`). This is the mechanism that makes "all details, from the smallest to the largest,
  outside and inside" read regardless of the chosen style.
- **Fractal development (breath) amplitude.** The visible growth/shrink pulse is `p_eval *= 1.0 +
  (breath terms) * AMP * morphGate`; the amplitude `AMP` was raised `0.06 → 0.11` so development is
  perceptible. This constant is duplicated in exactly three places that must be kept in lockstep: the
  monolith `sceneSDF` (`webglShaders.ts`), the production splice generator string
  (`ShaderManager.generateMinimalSceneSDF`), and the WGSL `sceneSDF` (`webgpuShaders.ts`).
- **Naming drift (cosmetic).** Internal ids `quantum`/`gemstone`/`iridescent` differ from the UI labels
  "Плазма"/"Кристалл"/"Перламутр". Harmless (ids are stable, labels are display-only) but noted so a future
  rename touches both, not just one.
