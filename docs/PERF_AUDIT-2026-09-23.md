# Performance Audit — golden-ratio-fractal-engine.pages.dev

**Date**: 2026-09-23 · **Target release**: v6.0.0 · **Tool**: Lighthouse 12 (headless Chrome) + `curl` header/transfer probe + `browser-use` MCP runtime check
**Method note (read first)**: Lighthouse ran in **headless** with **software WebGL (SwiftShader)** under the default **4× CPU throttle + Slow-4G** profile, cold cache. These are *conservative gate numbers* — the visitor's real GPU Chrome paints far sooner and with a small fraction of the main-thread cost. Every figure below is reproducible with the command at the bottom.

## Core Web Vitals (Lighthouse, simulated mobile)

| Metric | Value | Rating | Threshold (good / NI / poor) |
|---|---:|---|---|
| **Performance score** | **69** | needs work | — |
| TTFB (root doc) | 30 ms | 🟢 good | < 800 ms |
| FCP | 2.01 s | 🟡 NI | 1.8 / 3.0 s |
| **LCP** | **2.52 s** | 🟡 NI (borderline) | 2.5 / 4.0 s |
| **TBT** | **1,584 ms** | 🔴 **poor** | 200 / 600 ms |
| Speed Index | 2.58 s | 🟡 NI | 3.4 s good |
| TTI | 3.90 s | 🟡 NI | 3.8 / 7.3 s |
| **CLS** | **0.0004** | 🟢 good | 0.1 / 0.25 |
| Total byte weight | 244 KiB | 🟢 tiny | — |
| RTT | 10 ms | 🟢 (Cloudflare edge) | — |
| DOM size | 225 elements | 🟢 fine | — |

**Headline**: the **network and edge are already excellent** — 244 KiB total over brotli, TTFB 30 ms, every chunk `modulepreload`-hinted, RTT 10 ms. **The one real problem is JavaScript main-thread work**: Script Evaluation alone is **3,668 ms**, driven by the `index` chunk **booting 5,139 ms** under throttle → TBT 1,584 ms. FCP/LCP/TBT are all downstream of that single number. CLS is effectively zero (the a11y pass already reserved layout).

### Cold transfer sizes (curl, brotli) — confirms code-splitting is healthy
| Chunk | On wire (br) | Decoded |
|---|---:|---:|
| `index-CU_cyHN7.js` | 121 KB | 447 KB |
| `shaders-C20Gj_B3.js` | 74.6 KB | 366 KB |
| `engine-DF7oTSNF.js` | 24.9 KB | 81 KB |
| `index-DtqurwRv.css` | 11 KB | 77 KB |
| `data-aGZf6gJQ.js` | 4.7 KB | 19 KB |
| `vendor-react-CYSfZuHu.js` | 4.2 KB | 12 KB |

## Top 5 bottlenecks → prioritized fixes for v6.0.0

Ranked by (impact × cost). #1–#2 are cheap wins to land first; #3 is the biggest single TBT cut.

1. **[High impact · low cost] FCP/LCP gated behind full JS boot — no pre-paint splash.**
   First paint waits for React hydration + `CosmicLoader` mount, so the 5 s of script work
   sits *in front of* FCP. **Fix**: inline a tiny critical-CSS splash in `index.html <body>`
   (reuse the golden-ratio ring SVG already used as the favicon) so a real element paints at
   ~0.4 s from HTML+CSS alone; React hydrates behind it. Decouples FCP from script eval and
   lowers perceived LCP. *Est: FCP 2.0 s → ~0.5 s.*

2. **[Med impact · low cost] Content-hashed assets served with `max-age=0, must-revalidate`.**
   `curl` shows `/assets/index-*.js` returns **no long cache** despite immutable hashed names,
   and there is **no `public/_headers`**. **Fix**: add `public/_headers`:
   ```
   /assets/*
     Cache-Control: public, max-age=31536000, immutable
   ```
   No first-load change (Lighthouse is cold), but returning visitors reload instantly.
   Also delete the empty `public/assets/aistudio/` build artifact. (Note: `public/assets/aistudio/.gitignore`
   is a `*`-only keep-dir placeholder for AI-Studio exports; it stays.)

   **Done 2026-09-23**: `public/_headers` created with `/assets/* immutable` and explicit
   `/index.html must-revalidate`. Needs a deploy to take effect; verify with `curl -sD -`.

3. **[High impact · med cost] TBT 1,584 ms from synchronous boot work in the `index` chunk.**
   Before the first frame the boot path builds the **431-type catalog**, the **666 palette**
   set, and runs **NeuroAesthetics personalization** — none of which are needed to show the
   *first curated specimen*. **Fix**: eagerly construct only the curated showcase subset
   (61 types) for boot; defer full catalog expansion, palette generation, and
   `NeuroAestheticsEngine` init to `requestIdleCallback` (or first pointer interaction).
   *Est: −400–600 ms TBT.*

4. **[Med impact · med cost] `shaders` chunk (366 KB decoded) parsed on the critical path.**
   ShaderManager v3 splices a *minimal per-fractal* shader (~1000 lines), yet the monolithic
   fallback still ships preloaded. **Fix**: move the monolith behind a dynamic `import()` that
   only fires for the rare non-spliced `*Variant` idx (>130) path — the 0–130 hot path stops
   paying its parse cost at boot. *Est: −150–250 ms scripting.* (Scoped reversal of the
   "lazy-load removed" decision, hot path untouched.)

5. **[Med impact · low cost] ControlsPanel + feed-ribbon DOM built under the loader.**
   Style & Layout (1,119 ms) + Rendering (525 ms) include the 8-tab `ControlsPanel`/HUD mounted
   *behind* the full-screen overlay. **Fix**: gate their mount on `CosmicLoader.onFinished`
   instead of rendering them hidden. *Est: −200–400 ms boot scripting+layout.*

**Also flagged (Lighthouse opportunity)**: *Reduce unused JavaScript ~150 ms / 35 KiB* — tree-
shakeable dead exports in the catalog/palette modules; verify with `rollup` visualizer before cutting.

## Caveats / what is NOT a problem
- **CLS ≈ 0** — no layout work needed (the a11y pass + fixed canvas already reserve space).
- **Byte weight / TTFB / caching-of-HTML** — Cloudflare edge is doing its job; the HTML itself
  correctly uses `must-revalidate` (so deploys are picked up); only *hashed assets* (#2) should
  switch to `immutable`.
- **Headless inflation** — items #3/#4/#5 numbers are 4×-throttled + software-WebGL; on a real
  GPU the absolute TBT is far lower, but the *relative ranking* (script-eval dominates) holds
  and is worth fixing for low-end mobile (our 20–30 FPS targets).

## Reproduce
```powershell
cd app
$env:TMP='j:\project\swype-imagine\app\.firecrawl\perf\tmp'   # keep Chrome temp in-workspace
npx --yes lighthouse@12 "https://golden-ratio-fractal-engine.pages.dev/" `
  --only-categories=performance --output=json `
  --output-path=".firecrawl/perf/lh-report.json" `
  --chrome-flags="--headless=new --no-sandbox --user-data-dir=$env:TMP\profile" --quiet
node .firecrawl/perf/extract.cjs                                # pulls the table above
# headers / cold transfer:
curl.exe -s -o NUL -D - -H "User-Agent: Mozilla/5.0 perf" -H "Accept-Encoding: br, gzip" "https://golden-ratio-fractal-engine.pages.dev/assets/index-CU_cyHN7.js"
```
