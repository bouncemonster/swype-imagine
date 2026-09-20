/**
 * Visual Snapshot Analysis — decodes the sweep screenshots and compares each
 * against its baseline (tests/baseline/) with a REAL per-pixel diff (PNG decoded
 * via Node's built-in zlib; no external image dependency), then writes a concise
 * report to tests/results/visual-snapshot-report.md.
 *
 * Honesty note on determinism: the app randomizes the specimen `seed` on every
 * mount and continuously animates (auto-rotate + time-driven morph), and the URL
 * hash does not pin rotation/seed. Exact pixel parity against a baseline captured
 * at a different instant is therefore NOT achievable. The pixel-diff is used as a
 * coarse STRUCTURAL signal; the authoritative pass/fail is RENDERING VALIDITY
 * (non-black fill + no console/shader errors + no context loss/crash).
 *
 * Usage: npx tsx tests/visual-snapshot-analyze.ts
 *   DIFF_WARN=0.25   fraction of changed pixels above which a baseline match is
 *                    flagged as a high-diff outlier (default 0.25)
 */
import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SHOT_DIR = path.join(ROOT, 'tests', 'results', 'screenshots');
const BASELINE_DIR = path.join(ROOT, 'tests', 'baseline');
const RESULTS_JSONL = path.join(ROOT, 'tests', 'results', 'sweep-results.jsonl');
const REPORT_MD = path.join(ROOT, 'tests', 'results', 'visual-snapshot-report.md');
const DIFF_WARN = process.env.DIFF_WARN != null ? parseFloat(process.env.DIFF_WARN) : 0.25;

// ─── Minimal PNG decoder (8-bit, non-interlaced) via zlib ──────────────
interface RGBAImage { width: number; height: number; data: Buffer; } // RGBA, 4 bytes/px

function decodePNG(buf: Buffer): RGBAImage {
  const SIG = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < 8; i++) if (buf[i] !== SIG[i]) throw new Error('not a PNG');

  let pos = 8;
  let width = 0, height = 0, bitDepth = 0, colorType = 0, interlace = 0;
  const idat: Buffer[] = [];
  let palette: Buffer | null = null;
  let trns: Buffer | null = null;

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos); pos += 4;
    const type = buf.toString('ascii', pos, pos + 4); pos += 4;
    const data = buf.subarray(pos, pos + len); pos += len;
    pos += 4; // CRC
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'PLTE') {
      palette = Buffer.from(data);
    } else if (type === 'tRNS') {
      trns = Buffer.from(data);
    } else if (type === 'IDAT') {
      idat.push(Buffer.from(data));
    } else if (type === 'IEND') {
      break;
    }
  }

  if (interlace !== 0) throw new Error('interlaced PNG unsupported');
  if (bitDepth !== 8) throw new Error(`unsupported bit depth ${bitDepth}`);

  const channels = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : colorType === 4 ? 2 : colorType === 3 ? 1 : -1;
  if (channels < 0) throw new Error(`unsupported color type ${colorType}`);

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const bytesPerRow = width * channels;
  const out = Buffer.alloc(height * bytesPerRow);

  let rp = 0;
  for (let y = 0; y < height; y++) {
    const filter = raw[rp++];
    const rowStart = y * bytesPerRow;
    for (let x = 0; x < bytesPerRow; x++) {
      const rawByte = raw[rp++];
      const a = x >= channels ? out[rowStart + x - channels] : 0;      // left
      const b = y > 0 ? out[(y - 1) * bytesPerRow + x] : 0;            // up
      const c = (x >= channels && y > 0) ? out[(y - 1) * bytesPerRow + x - channels] : 0; // up-left
      let val: number;
      switch (filter) {
        case 0: val = rawByte; break;
        case 1: val = (rawByte + a) & 0xff; break;
        case 2: val = (rawByte + b) & 0xff; break;
        case 3: val = (rawByte + ((a + b) >> 1)) & 0xff; break;
        case 4: {
          const p = a + b - c;
          const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
          const pred = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
          val = (rawByte + pred) & 0xff; break;
        }
        default: val = rawByte;
      }
      out[rowStart + x] = val;
    }
  }

  // Normalize to RGBA
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    if (colorType === 6) {
      rgba[i * 4] = out[i * 4]; rgba[i * 4 + 1] = out[i * 4 + 1];
      rgba[i * 4 + 2] = out[i * 4 + 2]; rgba[i * 4 + 3] = out[i * 4 + 3];
    } else if (colorType === 2) {
      rgba[i * 4] = out[i * 3]; rgba[i * 4 + 1] = out[i * 3 + 1];
      rgba[i * 4 + 2] = out[i * 3 + 2]; rgba[i * 4 + 3] = 255;
    } else if (colorType === 0) {
      const g = out[i]; rgba[i * 4] = g; rgba[i * 4 + 1] = g; rgba[i * 4 + 2] = g; rgba[i * 4 + 3] = 255;
    } else if (colorType === 4) {
      const g = out[i * 2]; rgba[i * 4] = g; rgba[i * 4 + 1] = g; rgba[i * 4 + 2] = g; rgba[i * 4 + 3] = out[i * 2 + 1];
    } else { // colorType 3 palette
      const idx = out[i];
      rgba[i * 4] = palette ? palette[idx * 3] : 0;
      rgba[i * 4 + 1] = palette ? palette[idx * 3 + 1] : 0;
      rgba[i * 4 + 2] = palette ? palette[idx * 3 + 2] : 0;
      rgba[i * 4 + 3] = (trns && idx < trns.length) ? trns[idx] : 255;
    }
  }
  return { width, height, data: rgba };
}

// ─── Metrics ───────────────────────────────────────────────────────────
function lumOf(img: RGBAImage): { avgLum: number; nonBlackRatio: number } {
  let sum = 0, nonBlack = 0;
  const n = img.width * img.height;
  for (let i = 0; i < n; i++) {
    const lum = 0.2126 * img.data[i * 4] + 0.7152 * img.data[i * 4 + 1] + 0.0722 * img.data[i * 4 + 2];
    sum += lum; if (lum > 16) nonBlack++;
  }
  return { avgLum: sum / n, nonBlackRatio: nonBlack / n };
}

interface DiffResult { changedPct: number; meanAbsLumDiff: number; sameSize: boolean; }
function pixelDiff(a: RGBAImage, b: RGBAImage): DiffResult {
  if (a.width !== b.width || a.height !== b.height) {
    return { changedPct: 1, meanAbsLumDiff: 255, sameSize: false };
  }
  const n = a.width * a.height;
  let changed = 0, lumDiffSum = 0;
  for (let i = 0; i < n; i++) {
    const dr = Math.abs(a.data[i * 4] - b.data[i * 4]);
    const dg = Math.abs(a.data[i * 4 + 1] - b.data[i * 4 + 1]);
    const db = Math.abs(a.data[i * 4 + 2] - b.data[i * 4 + 2]);
    if ((dr + dg + db) / 3 > 20) changed++;
    const la = 0.2126 * a.data[i * 4] + 0.7152 * a.data[i * 4 + 1] + 0.0722 * a.data[i * 4 + 2];
    const lb = 0.2126 * b.data[i * 4] + 0.7152 * b.data[i * 4 + 1] + 0.0722 * b.data[i * 4 + 2];
    lumDiffSum += Math.abs(la - lb);
  }
  return { changedPct: changed / n, meanAbsLumDiff: lumDiffSum / n, sameSize: true };
}

interface SweepRecord {
  idx: number; name: string; file: string; sizeBytes: number;
  fillRatio: number | null; avgLum: number | null;
  status: string; consoleErrors: string[]; contextLost: boolean; crash: boolean;
}

function loadLatestRecords(): Map<number, SweepRecord> {
  const map = new Map<number, SweepRecord>();
  if (!fs.existsSync(RESULTS_JSONL)) return map;
  for (const line of fs.readFileSync(RESULTS_JSONL, 'utf8').split('\n')) {
    const t = line.trim(); if (!t) continue;
    try { const r = JSON.parse(t) as SweepRecord; map.set(r.idx, r); } catch { /* skip */ }
  }
  return map;
}

function pad3(n: number): string { return String(n).padStart(3, '0'); }

// Only these console errors indicate a real rendering problem; benign network
// noise (favicon/manifest 404s, "Failed to load resource") must not fail a type.
const RENDER_ERROR_RE = /shader|webgl|webgpu|gl_|compile|link error|invalid operation|context (lost|restor)|cannot read|cannot access|is not a function|undefined is not|TypeError|ReferenceError|render frame error|out of memory|cannot allocate/i;
function renderRelevantErrors(errors: string[]): string[] {
  return (errors || []).filter((e) => RENDER_ERROR_RE.test(e) && !/404|Failed to load resource/i.test(e));
}

// P1 triage conclusion. The types below dispatch correctly and compile cleanly (zero
// render-relevant console errors) yet produce a sub-threshold (<=0.5%) non-black fill at
// every camera framing tried (see FRACTAL_CAM_ADJUST_OVERRIDES in
// src/engine/FractalEngineBase.ts). They are genuinely-sparse 2D maps / high-power thin
// shells in a 3D ray-marched distance field, not defects. Two earlier black families
// (ifsVariant Menger fold, lsystemVariant Hilbert op) were REAL shader-math bugs and have
// been fixed at root; they no longer appear here. Keyed by fractal index -> reason, kept
// here so the regenerated report stays self-documenting.
const INTENTIONAL_SPARSE: Record<number, string> = {
  48:  'flat plane-filling curve — degenerate edge-on in a 3D distance field',
  79:  'Vicsek — flat 2D diffusion cluster, measure-zero in 3D',
  82:  'popcorn torus map — 2D, measure-zero in a 3D SDF',
  83:  'bedhead attractor — 2D, measure-zero in a 3D SDF',
  102: 'mandelbulb×mandelbox hybrid — very thin shell at default power',
  117: 'flame butterfly — 2D plasma cloud, sparse as a distance field',
  120: 'flame hyperbolic — 2D plasma cloud, sparse as a distance field',
  132: 'mandelbrot variant 2 — high-power thin escape shell',
  133: 'mandelbrot variant 3 — power 3.0 thin escape shell',
  134: 'mandelbrot variant 4 — power 2.5 thin escape shell',
  137: 'mandelbrot variant 7 — power 2.8 thin escape shell',
  140: 'mandelbrot variant 10 — power 2.6 thin escape shell',
  147: 'julia variant 7 — high-power thin shell',
};

// Condense raw GLSL console spam into the distinct root causes. The driver repeats
// "'X' : no matching overloaded function found" once per call site; we collapse that
// to the missing symbol(s) and keep any other distinct error line verbatim (trimmed).
function summarizeRenderErrors(errors: string[]): string {
  const missing = new Set<string>();
  const others: string[] = [];
  for (const e of errors) {
    const oneLine = e.replace(/\s+/g, ' ');
    const noMatch = oneLine.match(/'([^']+)'\s*:\s*no matching overloaded function found/g);
    if (noMatch) for (const m of noMatch) { const s = m.match(/'([^']+)'/); if (s) missing.add(s[1]); }
    const other = oneLine.replace(/'[^(]*'\s*:\s*no matching overloaded function found/g, '').trim();
    if (other.length > 4) others.push(other.slice(0, 160));
  }
  const parts: string[] = [];
  if (missing.size) parts.push(`undefined shader fn: ${[...missing].join(', ')}`);
  if (others.length) parts.push(others[0]);
  return parts.join(' | ') || 'shader compile error';
}

async function main() {
  const records = loadLatestRecords();
  if (records.size === 0) {
    console.error('No sweep-results.jsonl found — run the sweep first.');
    process.exit(1);
  }

  const sorted = [...records.values()].sort((a, b) => a.idx - b.idx);
  console.log(`Analyzing ${sorted.length} captured type(s); baselines dir: ${BASELINE_DIR}`);

  const baselineFiles = new Set(
    fs.existsSync(BASELINE_DIR) ? fs.readdirSync(BASELINE_DIR).filter((f) => f.endsWith('.png')).map((f) => f.replace(/\.png$/, '')) : []
  );

  interface Row {
    idx: number; name: string; hasBaseline: boolean;
    validity: 'ok' | 'black' | 'error';
    fillRatio: number | null;
    changedPct: number | null; meanAbsLumDiff: number | null; sizeMismatch: boolean;
    highDiff: boolean; note: string; errSnippet: string;
  }
  const rows: Row[] = [];

  for (const rec of sorted) {
    const shotPath = path.join(SHOT_DIR, rec.file);
    let validity: Row['validity'] = 'ok';
    let fillRatio: number | null = rec.fillRatio;
    let decoded: RGBAImage | null = null;

    if (!fs.existsSync(shotPath)) {
      validity = 'error';
      rows.push({ idx: rec.idx, name: rec.name, hasBaseline: false, validity, fillRatio: null, changedPct: null, meanAbsLumDiff: null, sizeMismatch: false, highDiff: false, note: 'screenshot missing', errSnippet: 'screenshot missing' });
      continue;
    }

    try {
      decoded = decodePNG(fs.readFileSync(shotPath));
      const m = lumOf(decoded);
      fillRatio = m.nonBlackRatio;
      if (m.nonBlackRatio <= 0.005) validity = 'black';
    } catch (e) {
      validity = 'error';
      rows.push({ idx: rec.idx, name: rec.name, hasBaseline: false, validity, fillRatio: null, changedPct: null, meanAbsLumDiff: null, sizeMismatch: false, highDiff: false, note: `decode failed: ${e instanceof Error ? e.message : e}`, errSnippet: 'decode failed' });
      continue;
    }

    const realErrors = renderRelevantErrors(rec.consoleErrors);
    let errSnippet = '';
    if (rec.crash || rec.contextLost || realErrors.length > 0) {
      validity = 'error';
      if (rec.contextLost) errSnippet = 'context lost';
      else if (rec.crash) errSnippet = 'page crash';
      else errSnippet = summarizeRenderErrors(realErrors);
    }

    const baseKey = `fractal-${pad3(rec.idx)}-${rec.name}`;
    const hasBaseline = baselineFiles.has(baseKey);
    let changedPct: number | null = null, meanAbsLumDiff: number | null = null, sizeMismatch = false, highDiff = false;
    let note = '';

    if (hasBaseline && decoded) {
      try {
        const baseImg = decodePNG(fs.readFileSync(path.join(BASELINE_DIR, `${baseKey}.png`)));
        const d = pixelDiff(baseImg, decoded);
        changedPct = d.changedPct; meanAbsLumDiff = d.meanAbsLumDiff; sizeMismatch = !d.sameSize;
        highDiff = d.sameSize && d.changedPct > DIFF_WARN;
        if (sizeMismatch) note = `size mismatch ${baseImg.width}x${baseImg.height} vs ${decoded.width}x${decoded.height}`;
        else if (highDiff) note = `high diff (expected: seed/animation nondeterminism)`;
      } catch (e) {
        note = `baseline decode failed: ${e instanceof Error ? e.message : e}`;
      }
    }

    rows.push({ idx: rec.idx, name: rec.name, hasBaseline, validity, fillRatio, changedPct, meanAbsLumDiff, sizeMismatch, highDiff, note, errSnippet });
    const pct = fillRatio != null ? (fillRatio * 100).toFixed(1) + '%' : 'n/a';
    const dp = changedPct != null ? (changedPct * 100).toFixed(1) + '%' : '-';
    console.log(`  [${rec.idx}] ${rec.name.padEnd(24)} ${validity.padEnd(6)} fill=${pct.padEnd(6)} diff=${dp}${hasBaseline ? '' : ' (no baseline)'} ${note}`);
  }

  // ── Summary ──
  const total = rows.length;
  const withBaseline = rows.filter((r) => r.hasBaseline);
  const passValid = rows.filter((r) => r.validity === 'ok').length;
  const blackRows = rows.filter((r) => r.validity === 'black');
  const errorRows = rows.filter((r) => r.validity === 'error');
  const highDiffRows = withBaseline.filter((r) => r.highDiff);
  const sizeMismatchRows = withBaseline.filter((r) => r.sizeMismatch);

  const lines: string[] = [];
  lines.push('# Visual Snapshot Report — All 431 Fractal Types');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Method');
  lines.push('');
  lines.push('- Each fractal type was rendered in the live site (production build served via `vite preview`) and captured with Playwright (headless Chromium, hardware ANGLE WebGL2, `?test=1` → `preserveDrawingBuffer`).');
  lines.push('- Selection is deterministic per type via the mount-time URL hash `#type=<name>` plus a unique `_f=<index>` query param that forces a full remount.');
  lines.push('- Stable wait: capture happens only after the `#cosmic-loader-overlay` and `#gpu-pipeline-loading-overlay` detach (first frame rendered + shader compile done), with retries until the canvas is non-black.');
  lines.push('- Screenshots saved to `tests/results/screenshots/fractal-NNN-{slug}.png`.');
  lines.push('- Pixel-diff: PNGs decoded with a dependency-free zlib decoder; a pixel counts as *changed* when mean(|ΔR|,|ΔG|,|ΔB|) > 20. Threshold `DIFF_WARN` = ' + DIFF_WARN + '.');
  lines.push('');
  lines.push('> **Determinism caveat.** The app randomizes the specimen `seed` on every mount and continuously animates (auto-rotate + time-driven morph); the hash does not pin rotation/seed. Exact pixel parity with a baseline captured at another instant is not achievable, so the pixel-diff is a *coarse structural* signal. The authoritative pass/fail is **rendering validity** (non-black fill + zero console/shader errors + no context-loss/crash).');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Metric | Value |`);
  lines.push(`|---|---|`);
  lines.push(`| Types captured | ${total} |`);
  lines.push(`| Rendered OK (valid) | ${passValid} |`);
  lines.push(`| Black / empty | ${blackRows.length} |`);
  lines.push(`| Error / timeout / ctx-lost | ${errorRows.length} |`);
  lines.push(`| Types with a baseline | ${withBaseline.length} |`);
  lines.push(`| Baseline high-diff outliers (> ${Math.round(DIFF_WARN * 100)}% px) | ${highDiffRows.length} |`);
  lines.push(`| Baseline size mismatches | ${sizeMismatchRows.length} |`);
  lines.push('');

  // Baseline comparison table
  lines.push('## Baseline comparisons');
  lines.push('');
  if (withBaseline.length === 0) {
    lines.push('_No baselines matched captured types._');
  } else {
    lines.push('| # | Type | Fill | Changed px | Mean ΔLum | Verdict | Note |');
    lines.push('|---|---|---|---|---|---|---|');
    for (const r of withBaseline) {
      const verdict = r.validity !== 'ok' ? `**${r.validity.toUpperCase()}**` : (r.highDiff ? 'high-diff*' : 'ok');
      lines.push(`| ${r.idx} | ${r.name} | ${r.fillRatio != null ? (r.fillRatio * 100).toFixed(1) + '%' : '-'} | ${r.changedPct != null ? (r.changedPct * 100).toFixed(1) + '%' : '-'} | ${r.meanAbsLumDiff != null ? r.meanAbsLumDiff.toFixed(1) : '-'} | ${verdict} | ${r.note || ''} |`);
    }
    lines.push('');
    lines.push('\\* high-diff is expected from seed/animation nondeterminism; it flags frames to eyeball, not confirmed regressions.');
  }
  lines.push('');

  // Problem lists
  lines.push('## Rendering issues (authoritative)');
  lines.push('');
  if (blackRows.length === 0 && errorRows.length === 0) {
    lines.push('✅ No black/empty frames and no console/shader/context errors across all captured types.');
  } else {
    if (blackRows.length) {
      lines.push(`### Black / empty (${blackRows.length})`);
      for (const r of blackRows) {
        const fill = r.fillRatio != null ? (r.fillRatio * 100).toFixed(1) + '%' : 'n/a';
        const reason = INTENTIONAL_SPARSE[r.idx];
        lines.push(`- [${r.idx}] ${r.name} — fill=${fill} — ${reason ? 'intentional sparse: ' + reason : 'UNCLASSIFIED (investigate)'}`);
      }
      const classified = blackRows.filter((r) => INTENTIONAL_SPARSE[r.idx]).length;
      lines.push('');
      lines.push(`**Triage:** ${classified}/${blackRows.length} are classified as intentional sparse — correct dispatch, clean compile, but a sub-threshold fill for a 2D/high-power geometry in a 3D distance field. These are expected, not defects. The two genuine shader-math bugs found during triage (ifsVariant Menger fold==2, lsystemVariant Hilbert op==5) were repaired at the source and now render.`);
      lines.push('');
    }
    if (errorRows.length) {
      lines.push(`### Errors / context-loss / crash (${errorRows.length})`);
      for (const r of errorRows) lines.push(`- [${r.idx}] ${r.name} — ${r.errSnippet || r.note || 'see sweep-results.jsonl'}`);
      lines.push('');
    }
  }

  const shaderFnErrors = errorRows.filter((r) => r.errSnippet.startsWith('undefined shader fn'));
  if (shaderFnErrors.length) {
    lines.push('### Root cause: minimal-shader splice misalignment');
    lines.push('');
    lines.push('The engine feeds the FractalType ordinal straight into `ShaderManager.extractFractalFunction`, which returns the Nth `map*` function of the ~151-function monolithic shader. For the indices below the ordinal resolves to a shared `*Base`/`*Variant` dispatch helper (or a sibling fractal function) rather than a self-contained per-type function, so the spliced shader references a signature that does not exist (the missing symbol is named above).');
    lines.push('');
    lines.push('`ShaderManager` now pulls in any body-region helper a fractal function transitively calls, which fixed the clean single-helper cases (e.g. the 4D polytopes that needed `project4Dto3D`). The remaining entries above need the FractalType -> shader-function mapping corrected (or these variant families routed through the full-shader fallback); that is a larger, regression-prone change beyond this polish pass.');
    lines.push('');
    lines.push('Note: several of these still display content because the engine falls back to the full monolithic shader after the lazy-compile error; they are flagged here because the lazy-compile path is genuinely broken for them.');
    lines.push('');
  }

  if (highDiffRows.length) {
    lines.push('## High-diff frames to eyeball (not necessarily regressions)');
    lines.push('');
    for (const r of highDiffRows) lines.push(`- [${r.idx}] ${r.name} — changed ${(r.changedPct! * 100).toFixed(1)}%`);
    lines.push('');
  }

  lines.push('## Full data');
  lines.push('');
  lines.push('- Per-type metrics: `tests/results/sweep-results.jsonl`');
  lines.push(`- Screenshots: \`tests/results/screenshots/\` (${total} file(s) expected)`);
  lines.push('');

  fs.writeFileSync(REPORT_MD, lines.join('\n'), 'utf8');
  console.log(`\nReport written: ${REPORT_MD}`);
  console.log(`Valid=${passValid}/${total}  black=${blackRows.length}  errors=${errorRows.length}  baselines=${withBaseline.length}  highDiff=${highDiffRows.length}`);
}

main().catch((err) => { console.error('Analysis failed:', err); process.exit(1); });
