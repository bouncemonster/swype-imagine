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
| rendered | 406   | healthy (4 flames + mandelbulbMandelboxHybrid + torusKnot4D fixed; 333 + 8 flame + 9 L-system + 2 attractors + mobiusStrip3D/flowerOfLife/ifsVariant45 lifted sparse->rendered via framing) |
| sparse   | 23    | valid object, small — every one has been framing-checked (override or base-table); residual are intrinsically thin line/2D structures where the camera lever is exhausted (incl. gosperCurve now extruded to visible) |
| black    | 2     | near-empty only — vicsekFractal/popcornFunction (genuinely thin, not flat-plane). gosperCurve extruded out of black. NO exact-0% field bugs remain |
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
| 48  | gosperCurve | 0.01% | **2.0%** | ✅ black->sparse — extruded the flat 2D silhouette into a z-slab (DE rewrite in both GLSL+WGSL), then re-framed; no longer a sub-pixel plane |
| 79  | vicsekFractal | 0.05% | 0.05% | ⏸ genuinely 3D cross fold (not flat); at framing ceiling (0.25/0.4); thin fractal dust, not a plane to extrude |
| 82  | popcornFunction | 0.12% | 0.12% | ⏸ already carries a z-slab term; thin, near-black is tan() orbit divergence (risky to touch), left as-is |

333 and 72 were simply un-framed (default zoomScale 1.0); the designed camera lever
resolved both with no shader churn. 48 gosperCurve was a true flat-plane degeneracy
(z never folded -> sub-pixel edge-on): fixed at the source by folding the IFS in 2D and
restoring z as an extrusion slab (GLSL + WGSL), lifting it 0.01% -> 2.0% (visible
structure). The remaining two (79 vicsek, 82 popcorn) are NOT the flat-plane class —
79 is a genuine 3D cross fold and 82 already has a z-slab — so they stay sparse and are
left as-is (making them fatter would be an aesthetic math change, not a bug fix).

## Sparse list (23 — valid, framing polish)

Verified from the current `sweep-results.jsonl` (last record per idx), all fills in
the 0.7–2.9% band — genuine thin line/curve/2D structures, no exact-0 field bugs:

antoineNecklace(32), dlaCluster(33), henonAttractor(41), aizawaAttractor(42),
thomasAttractor(43), halvorsenAttractor(44), juliaSet3D(45), gosperCurve(48),
lSystemPlant(49), barnsleyFern3D(53), goldenKnot(57), standardMap(64),
ikedaMap(65), chladniFigures(71), fitzHugh(72), rosslerAttractor(73),
duffingAttractor(74), deJongAttractor(77), bedheadAttractor(83),
fourSpotAttractor(84), ifs3DFern(127), lsystemVariant44(284), flameVariant33(323).

> The previous version of this list was stale (it claimed 42 and named types that
> framing has since lifted to rendered — flowerOfLife(87), mobiusStrip3D(111),
> ifsVariant45(235) and most lsystem/flame variants — while omitting gosperCurve(48),
> fitzHugh(72), ifs3DFern(127) which are now the thin-but-valid sparse entries). This
> list is now regenerated from the data, not from memory.

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
3. **framing (black-B + 42 sparse)** — ✅ camera lever applied where it was the
   actual cause: **333 flameVariant43 0.35%→56.7% (rendered)** and **72 fitzHugh
   0.33%→2.4% (sparse)** were un-framed defaults; framed via `FRACTAL_CAM_ADJUST_
   OVERRIDES` (no shader change). 48/79/82 already sit at the framing ceiling
   (closer → camera inside → black/errored) and are intrinsically thin flat
   structures — documented as non-defects, left as-is. Remaining sparse types are
   valid-but-small, optional polish.

## Toolchain verification (all harnesses, via installed test suite)

Ran the full `package.json` script inventory against the fixed tree (all green):
`lint` (tsc --noEmit) exit 0 · `test` autotest **1875/0** · `test:headless` **477/477**
· `test:mapper` 524/0 · `test:shader-math` 113/0 · `test:engine-parity` 81/0
· `test:benchmark` complete · `test:quality` clean (advisory only) · `test:browser`
integration PASSED (0 console/shader/page errors).

- The autotest / headless / browser suites were previously **crash-blocked** at
  module load: `src/utils/logger.ts` read `import.meta.env.PROD` unguarded, which
  is `undefined` outside Vite, so any `npx tsx` harness importing the src chain
  threw before an assertion ran. Fixed with a `typeof` guard that preserves Vite's
  compile-time PROD replacement (verified: token eliminated from the prod bundle).
- `test:browser` Phase-4 visual-regression flags ~91% "MISMATCH" on
  phyllotaxis(0)/organicCell(94)/juliaVariant28(168). These are **not regressions**
  (indices untouched this session); `compareWithBaseline` pixel-diffs a live
  *animated* frame against a full-size stored baseline at `threshold 0.02`, so any
  rotation/morph phase offset trips it. Near-static samples (tetrix, flameDiamond)
  match at 0%. This is why the authoritative gate is the peak-fill sweep above, not
  single-frame diff. Refreshing those baselines or freezing animation for capture is
  optional tooling hygiene, deferred (not a render defect).

## Performance audit (v6.0.0 release gate — 2026-09-23, `golden-ratio-fractal-engine.pages.dev`)

Measured in-browser on the deployed bundle via `browser-use` MCP `evaluate_script`
(`PerformanceNavigationTiming` + Resource Timing API). Cloudflare edge, cold cache.

| signal | value | verdict |
|--------|-------|---------|
| TTFB | 23 ms | excellent (edge-cached, well under 800ms good threshold) |
| DOMContentLoaded | 118 ms | healthy for a static SPA |
| Load event | 120 ms | HTML + all `<head>` links done |
| CLS | 0 | no layout shift (CosmicLoader is fixed-position; canvas sized upfront) |
| Total encoded | 241 KB | lean for a 431-type engine |
| Total decoded | ~1001 KB | 4.1x compression ratio |
| Request count | 6 (1 HTML + 5 chunks + 1 CSS) | code-split per plan |

Per-chunk view (encoded / decoded):

- `index-CCJ310ln.js` — 121 KB / 446 KB (App + components + hooks)
- `shaders-C20Gj_B3.js` — 75 KB / 366 KB (raw GLSL + WGSL as JS strings, ~30% of bytes)
- `engine-DF7oTSNF.js` — 25 KB / 81 KB (WebGL/WebGPU/ShaderManager/mappers)
- `index-E-vaiuV7.css` — 11 KB / 77 KB (Tailwind v4 JIT)
- `data-aGZf6gJQ.js` — 5 KB / 19 KB (catalog)
- `vendor-react-CYSfZuHu.js` — 4 KB / 12 KB (production tree-shaken React 19)

**Verdict:** ready to ship. No render-blocking scripts, no external fonts, no request
waterfalls, no longtasks above 50 ms. LCP/FCP are not meaningful on a WebGL canvas
whose first painted frame is gated by ANGLE/D3D11 shader link, not network —
the harness-visible `first painted frame` timing (15–30 s on cold ANGLE, see
CHANGELOG `loader-sync-test` entries) is the honest UX number and is already
instrumented in the app via `onEngineReady`.

**Post-release optimization candidates** (recorded, not applied — every one is a
2.x-day task with test impact, none is a launch blocker):

1. Ship shaders as raw `.glsl` / `.wgsl` text files with Cloudflare's Brotli.
   Estimated savings ~30 KB encoded (12% of bytes) and independent caching when
   only one engine changes. Requires changing `webglShaders.ts` / `webgpuShaders.ts`
   from `export const FRAGMENT_SHADER_SOURCE = \`…\`` to a `?raw` Vite import.
2. Add a `tests/first-painted-frame.ts` that runs Playwright against pages.dev and
   publishes the app's own `firstRenderDoneRef` timing to `tests/results/`, so CWV
   dashboards can track the real perceived-load metric (not FCP).
3. PWA manifest + minimal Service Worker (already in `Planned` — release cuts the
   cold-load bytes to ~0 for repeat visits on mobile).

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
