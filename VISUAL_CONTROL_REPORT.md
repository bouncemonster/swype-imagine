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
| rendered | 381   | healthy (incl. 4 flame types fixed after the sweep) |
| sparse   | 42    | valid object, small — framing polish |
| black    | 8     | 3 exact-0% field bugs + 5 near-empty framing |
| error    | 0     | no crashes, timeouts, context-loss, or console errors |

No shader compile errors, no page crashes, no WebGL context loss across the
entire catalog. The earlier favicon 404 noise was fixed (commit `b663210`).

## Defect inventory — 12 "black"

### A. Exact 0.0% — degenerate distance field (real render bugs)

| idx | type | root cause | status |
|-----|------|------------|--------|
| 102 | mandelbulbMandelboxHybrid | proper `dr` escape SDF, but object falls outside camera range at `zoomScale 0.5` | open |
| 112 | torusKnot4D | thin tube SDF (`length-0.08`) around a 4D→3D projection; never crossed within tube radius | open |
| 113 | flameSinusoidal | `sin()` op bounded → `pow(phi,-12)` crushed field to a constant | ✅ FIXED (WebGL) |
| 114 | flameSpherical | inversion `z/r2` bounded → same over-normalization crush | ✅ FIXED (WebGL) |
| 117 | flameButterfly | scaled only `xy` (z unscaled) → constant field; stale `zoomScale 0.5` | ✅ FIXED (WebGL) |
| 120 | flameHyperbolic | same `pow(phi,-N)` over-normalization on a non-phi-growing op | ✅ FIXED (WebGL) |
| 127 | ifs3DFern | crude SDF of a thin 2D fern; `d-0.1` never reached | open |

**Fix applied (113/114/117/120):** the four standalone `mapFlame*` functions now
delegate to the proven `mapFlameBase` (correct escape-time derivative) with a
distinct `(scale, op, param)` per name. Verified via re-probe: all four went
0.0% → rendered, matching the look of their working siblings (flameSwirl /
flameHeart render as blobby DE surfaces in this engine, so the fixed flames are
consistent with the family aesthetic). **WebGPU (WGSL) is a separate
implementation** — `src/shaders/webgpuShaders.ts` renders these flames with an
orbit-trap technique (`trap = min(trap, length(z))`, returning `vec2(dist, trap)`),
NOT the `pow(phi,-N)` field that was broken in GLSL. The WebGL-only sweep
(`?test=1` forces WebGLEngine) does not exercise the WGSL path, so the WGSL
flame output for 113/114/117/120 is **unverified** here; confirm with an
`#...&engine=webgpu` probe before assuming parity either way.

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

| idx | type | fill |
|-----|------|------|
| 48  | gosperCurve | 0.01% |
| 72  | fitzHugh | 0.33% |
| 79  | vicsekFractal | 0.05% |
| 82  | popcornFunction | 0.12% |
| 333 | flameVariant43 | 0.35% |

These render a real but extremely sparse/thin structure; they are framing
candidates (camera zoom), same treatment as the 42 sparse types.

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
   `mapFlameBase`; verified black → rendered. WGSL uses a different orbit-trap
   impl (not the same bug) — **unverified via an `engine=webgpu` probe**.
2. **102 / 127 / 112** — per-function SDF/camera rework; verify visually.
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
