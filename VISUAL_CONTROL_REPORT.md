# Visual Control Report — full 431-type sweep

Snapshot date: 2026-09-23. Backend under test: **WebGL2** (all 431 types render via
WebGL; WebGPU covers a 131-type subset). Harness:
[`tests/visual-snapshot-sweep.ts`](tests/visual-snapshot-sweep.ts) driven against
`vite preview` on `http://127.0.0.1:4178/` (port pinned via `vite.config.ts`
`preview.strictPort`). Each type is captured as one PNG via URL hash `#type=X`
plus a forced-reload query `_f=<idx>`; the canvas is sampled (peak non-black
ratio across up to 4 animation-aware attempts) and classified.

## Classification (current harness)

- **rendered** — peak fill > 3%: object clearly fills the frame.
- **sparse** — 0.5% < peak fill ≤ 3%: a real object is present but small / thin;
  a camera-framing (`FRACTAL_CAM_ADJUST`) candidate, **not** a crash.
- **black** — peak fill ≤ 0.5%: essentially empty; likely a broken distance field.
- **error / timeout** — page crash or navigation timeout.

The peak-fill sampling and the sparse/black split were added to remove the old
false "black" classifications caused by sampling a single animation frame near
the 3% threshold (see commit `ac5dd3b`).

## Headline result (all 431 types, last record per index)

| status   | count | note |
|----------|-------|------|
| rendered | 384   | healthy (incl. 4 flames + mandelbulbMandelboxHybrid + torusKnot4D fixed after the sweep; flameVariant43 black->rendered via framing) |
| sparse   | 44    | valid object, small — framing polish (incl. ifs3DFern, fitzHugh now black->valid) |
| black    | 3     | near-empty only — gosperCurve/vicsekFractal/popcornFunction, all at framing ceiling (see B). NO exact-0% field bugs remain |
| error    | 0     | no crashes, timeouts, context-loss, or console errors |

No shader compile errors, no page crashes, no WebGL context loss across the
entire catalog. The earlier favicon 404 noise was fixed (commit `b663210`).

## Defect inventory — 12 "black"

### A. Exact 0.0% — degenerate distance field (real render bugs)

| idx | type | root cause | status |
|-----|------|------------|--------|
| 102 | mandelbulbMandelboxHybrid | degenerate interior-zero field: no escape break + `0.5*log(max(|z|,1))` → every bounded orbit gave `log(1)=0`. Fixed by mirroring `mapMandelbulb` (escape break + consistent `dr` + small positive interior dist) in **both** GLSL and WGSL. A CodeReview pass then caught a box-branch double-scale (`sc` init 2.0 → x4 growth, not x2) and it was corrected in both backends | ✅ FIXED (WebGL verified 0→9.7%; WGSL parity port, headless-unverifiable) |
| 112 | torusKnot4D | old analytic `length(projected - torus)` point-to-angle approximation never crossed 0 (black). **Rewritten to sample the (2,3) knot curve and take min distance to a tube** (same technique the WGSL port already used) | ✅ FIXED (WebGL: black -> rendered, 6.0%) |
| 113 | flameSinusoidal | `sin()` op bounded → `pow(phi,-12)` crushed field to a constant | ✅ FIXED (WebGL) |
| 114 | flameSpherical | inversion `z/r2` bounded → same over-normalization crush | ✅ FIXED (WebGL) |
| 117 | flameButterfly | scaled only `xy` (z unscaled) → constant field; stale `zoomScale 0.5` | ✅ FIXED (WebGL) |
| 120 | flameHyperbolic | same `pow(phi,-N)` over-normalization on a non-phi-growing op | ✅ FIXED (WebGL) |
| 127 | ifs3DFern | old min-over-transformed-copies fold gave a zero-thickness degenerate field. **Rewritten as an orbit-traced Barnsley fern** (same technique as mapBarnsleyFern3D/idx 53), framed at zoomScale 0.4 | ✅ FIXED (WebGL: black -> valid; 2.5% fill, thin by nature like idx 53) |

**Fix applied (113/114/117/120):** the four standalone `mapFlame*` functions now
delegate to the proven `mapFlameBase` (correct escape-time derivative) with a
distinct `(scale, op, param)` per name. Verified via re-probe: all four went
0.0% → rendered, matching the look of their working siblings (flameSwirl /
flameHeart render as blobby DE surfaces in this engine, so the fixed flames are
consistent with the family aesthetic). **WebGPU (WGSL) is a separate, independent
implementation** — `src/shaders/webgpuShaders.ts` (mapFlameSinusoidal/Spherical/
Butterfly/Hyperbolic, lines ~2661-2789) renders these flames with an orbit-trap
technique (`trap = min(trap, length(z))`, returning `vec2(dist, trap)`), NOT the
`pow(phi,-N)` field that was broken in GLSL. Static review confirms **no
`pow(phi,-N)` degeneracy exists in WGSL**, so the WebGL fix has no WGSL
counterpart to port — the bug class is WebGL-only. A runtime `&engine=webgpu`
capture was attempted via the browser MCP but is **not obtainable headless**:
when the tab is hidden `requestAnimationFrame` suspends the render loop and a
WebGPU-canvas `drawImage`/`toDataURL` readback returns false-black, and native
screenshot requires a visible viewport. That false-black is an environment
artifact, NOT evidence of a defect. Conclusion: WGSL flames 113/114/117/120 are
mathematically non-degenerate and left unchanged; visual confirmation is deferred
to a machine with a visible browser + working WebGPU adapter.

Root cause for 113/114/117/120 is shared: the standalone `mapFlame*` functions
in [`src/shaders/webglShaders.ts`](src/shaders/webglShaders.ts) use a
`length(z) * pow(phi, -N) - K` normalization that assumes the inner loop grows
`|z|` by ~phi each iteration. Their operators are bounded/contracting, so the
field collapses to a constant and the raymarcher never hits a surface. The
proven `mapFlameBase` (in
[`src/shaders/modules/flameVariations.ts`](src/shaders/modules/flameVariations.ts),
used by the working `fractalFlameIFS` @ 59% fill) tracks the derivative
correctly and is the reference fix.

### B. Near-empty (0.01–0.35%) — object present, out of frame

Framing-lever pass (FRACTAL_CAM_ADJUST_OVERRIDES, verified via re-probe):

| idx | type | before | after | status |
|-----|------|--------|-------|--------|
| 333 | flameVariant43 | 0.35% | **56.7%** | ✅ black->rendered (thin flame on mapFlameBase; framed 1.0->0.6, no shader change) |
| 72  | fitzHugh | 0.33% | **2.4%** | ✅ black->sparse (flat 2D neural attractor; framed 1.0->0.22 face-on) |
| 48  | gosperCurve | 0.01% | 0.01% | ⏸ at ceiling (0.25+tilt put camera *inside* -> errored); intrinsic thin curve |
| 79  | vicsekFractal | 0.05% | 0.05% | ⏸ at ceiling (already 0.25/0.4); flat diffusion cluster |
| 82  | popcornFunction | 0.12% | 0.12% | ⏸ at ceiling (already 0.25/0.5); flat 2D map |

333 and 72 were simply un-framed (default zoomScale 1.0); the designed camera lever
resolved both with no shader churn. The remaining three already carry aggressive
overrides and closer camera goes inside -> black, so they are intrinsically thin
flat structures, **not defects** — they render a real but hairline 2D object that
the >3% / >0.5% thresholds classify as black/sparse. Making them fatter would mean
extruding 2D->3D in-shader (an aesthetic change to their math, not a bug fix) and
is intentionally not done here.

## Sparse list (42 — valid, framing polish)

antoineNecklace(32), dlaCluster(33), henonAttractor(41), aizawaAttractor(42),
thomasAttractor(43), halvorsenAttractor(44), juliaSet3D(45), lSystemPlant(49),
barnsleyFern3D(53), goldenKnot(57), standardMap(64), ikedaMap(65),
chladniFigures(71), rosslerAttractor(73), duffingAttractor(74),
deJongAttractor(77), pickoverAttractor(78), bedheadAttractor(83),
fourSpotAttractor(84), svenssonAttractor(85), flowerOfLife(87),
mobiusStrip3D(111), ifsVariant45(235), lsystemVariant{2,4,12,14,22,24,32,34,42,44},
flameVariant{3,5,13,15,23,25,33,35,45}.

## Fix plan (ordered by confidence)

1. **flame 113/114/117/120** — ✅ DONE (WebGL): re-implemented to delegate to
   `mapFlameBase`; verified black → rendered. WGSL checked: separate orbit-trap
   impl with **no `pow(phi,-N)` bug to port** (left unchanged); headless visual
   capture blocked (rAF suspended / false-black readback) — not a defect,
   deferred to a visible-adapter machine.
2. **102 / 112 / 127** — ✅ ALL DONE (WebGL, each re-probed):
   - **102**: `mapMandelbulb`-style DE rewrite (escape break + consistent `dr` +
     positive interior); 0% → 9.7%. WGSL shared the identical bug → same port.
     Follow-up CodeReview caught + fixed a box-branch `sc=2.0` double-scale in
     both backends (was x4 growth / `dr+3`; now x2 / `dr*sc*2+1`).
   - **112**: knot-curve sampling + tube (replacing the degenerate point-to-angle
     field); 0% → 6.0%. WGSL 112 already used this correct technique → no port.
   - **127**: orbit-traced fern + zoomScale 0.4; 0% → valid (2.5%, thin like idx
     53). WGSL 127 is a separate scale-normalized impl → no port.
   All three were confirmed distance-FIELD bugs (cheap framing/tube hypotheses
   re-probed and ruled out first). WGSL output remains headless-unverifiable.
3. **framing (5 black-B + 42 sparse)** — add/tune `FRACTAL_CAM_ADJUST`
   `zoomScale` entries so thin attractors fill the frame.

## Reproduce

```powershell
cd app
npm run build
npm run preview            # 127.0.0.1:4178 (keep this terminal alive)
# in a SEPARATE terminal:
$env:START=0;   $env:END=50;   npx tsx tests/visual-snapshot-sweep.ts
$env:START=51;  $env:END=150;  npx tsx tests/visual-snapshot-sweep.ts
$env:START=151; $env:END=290;  npx tsx tests/visual-snapshot-sweep.ts
$env:START=291; $env:END=430;  npx tsx tests/visual-snapshot-sweep.ts
```

Results accumulate in `tests/results/sweep-results.jsonl` (gitignored) and PNGs
in `tests/results/screenshots/`. Keep `vite preview` and the sweep on separate
terminals — launching the sweep on the preview's terminal kills the server and
yields `ERR_CONNECTION_REFUSED` false-errors.
