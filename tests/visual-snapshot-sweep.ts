/**
 * Visual Snapshot Sweep — captures one screenshot per fractal type (all 431)
 * from the live site via Playwright, into tests/results/screenshots/ using the
 * baseline naming convention `fractal-NNN-{slug}.png`.
 *
 * It is the "expand external-browser-test into a full sweep over all 431 types
 * with stable waits for shader compilation and first-frame render" step.
 *
 * How it deterministically selects a fractal: the app parses the URL hash
 * (`#type=<FractalName>`) ONLY on mount, then clears it. A Playwright `goto`
 * that changes only the hash does NOT remount React, so we append a unique
 * query param (`_f=<index>`) to force a full document reload per type. `?test=1`
 * makes WebGLEngine create the context with preserveDrawingBuffer so the canvas
 * can be read back reliably in headless mode.
 *
 * Chunkable & resumable (Node 24 / Windows: run in the foreground, never detach):
 *   START / END   inclusive fractal index range (default 0..430)
 *   FRACTALS      comma-separated indices, overrides START/END
 *   SKIP_EXISTING=1  skip indices already recorded as rendered in the JSONL
 *
 * Usage:
 *   npx tsx tests/visual-snapshot-sweep.ts                 # all 431
 *   START=0 END=50 npx tsx tests/visual-snapshot-sweep.ts  # one chunk
 *   BASE_URL=http://127.0.0.1:4178 npx tsx tests/visual-snapshot-sweep.ts
 */
import { chromium, type Browser, type Page, type BrowserContext } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4178';
const SHOT_DIR = path.join(ROOT, 'tests', 'results', 'screenshots');
const RESULTS_JSONL = path.join(ROOT, 'tests', 'results', 'sweep-results.jsonl');
const SRC_TYPES = path.join(ROOT, 'src', 'types', 'fractal.ts');

const VIEWPORT = { width: 1280, height: 720 };
const RENDER_STYLE = process.env.RENDER_STYLE || 'solid';

interface TypeResult {
  idx: number;
  name: string;
  file: string;
  sizeBytes: number;
  fillRatio: number | null;
  avgLum: number | null;
  status: 'rendered' | 'black' | 'error' | 'timeout';
  consoleErrors: string[];
  contextLost: boolean;
  crash: boolean;
  durationMs: number;
  ts: string;
}

/** Parse the ordered FractalType string-literal union (index === array position). */
function loadFractalTypes(): string[] {
  const src = fs.readFileSync(SRC_TYPES, 'utf8');
  const start = src.indexOf('export type FractalType');
  const end = src.indexOf('export type RenderStyle');
  if (start < 0 || end < 0 || end <= start) {
    throw new Error('Could not locate FractalType union boundaries in src/types/fractal.ts');
  }
  const seg = src.slice(start, end);
  const names = [...seg.matchAll(/\|\s*'([^']+)'/g)].map((m) => m[1]);
  return names;
}

function pad3(n: number): string {
  return String(n).padStart(3, '0');
}

function loadRecordedRendered(): Set<number> {
  const done = new Set<number>();
  if (!fs.existsSync(RESULTS_JSONL)) return done;
  for (const line of fs.readFileSync(RESULTS_JSONL, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t) continue;
    try {
      const r = JSON.parse(t) as TypeResult;
      if (r.status === 'rendered') done.add(r.idx);
    } catch {
      /* ignore malformed line */
    }
  }
  return done;
}

async function main() {
  const types = loadFractalTypes();
  console.log(`Loaded ${types.length} FractalType names from src/types/fractal.ts`);
  if (types.length !== 431) {
    console.warn(`WARNING: expected 431 types, parsed ${types.length}. Proceeding with parsed list.`);
  }

  let indices: number[];
  if (process.env.FRACTALS) {
    indices = process.env.FRACTALS.split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => !Number.isNaN(n));
  } else {
    const start = process.env.START != null ? parseInt(process.env.START, 10) : 0;
    const end = process.env.END != null ? parseInt(process.env.END, 10) : types.length - 1;
    indices = [];
    for (let i = start; i <= end; i++) indices.push(i);
  }

  const skipExisting = process.env.SKIP_EXISTING === '1';
  const recorded = skipExisting ? loadRecordedRendered() : new Set<number>();

  fs.mkdirSync(SHOT_DIR, { recursive: true });

  console.log(`BASE_URL=${BASE_URL}  capturing ${indices.length} type(s) [${indices[0]}..${indices[indices.length - 1]}]`);
  if (skipExisting) console.log(`SKIP_EXISTING=1 — ${recorded.size} already-rendered index(es) will be skipped`);

  const browser: Browser = await chromium.launch({
    headless: true,
    channel: 'chromium',
    args: [
      '--enable-webgl',
      '--use-gl=angle',
      '--use-angle=gl',
      '--enable-unsafe-webgpu',
      '--no-sandbox',
      '--disable-gpu-sandbox',
      '--disable-gpu-compositing',
    ],
  });

  let context: BrowserContext = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let page: Page = await context.newPage();

  // Per-type mutable context; the console handler references this binding so we
  // can reset it each iteration without re-attaching listeners.
  let current = { errors: [] as string[], warnings: [] as string[], contextLost: false, crash: false };

  function attachHandlers(p: Page) {
    p.on('console', (msg) => {
      const text = msg.text();
      if (msg.type() === 'error') current.errors.push(text);
      else if (msg.type() === 'warning') current.warnings.push(text);
      if (/context lost|contextlost/i.test(text)) current.contextLost = true;
    });
    p.on('pageerror', (err) => current.errors.push(`PageError: ${err.message}`));
    p.on('crash', () => {
      current.crash = true;
      console.log('  [!!!] PAGE CRASHED — will recreate page');
    });
  }
  attachHandlers(page);

  async function recreatePage() {
    try { await page.close(); } catch { /* noop */ }
    try { await context.close(); } catch { /* noop */ }
    context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
    page = await context.newPage();
    attachHandlers(page);
  }

  async function readCanvasStats(): Promise<{ avgLum: number; nonBlackRatio: number } | null> {
    return page.evaluate(() => {
      const c = document.querySelector('canvas') as HTMLCanvasElement | null;
      if (!c || !c.width || !c.height) return null;
      let url: string;
      try { url = c.toDataURL('image/png'); } catch { return null; }
      return new Promise((res) => {
        const img = new Image();
        img.onload = () => {
          const off = document.createElement('canvas');
          off.width = img.width; off.height = img.height;
          const ctx = off.getContext('2d');
          if (!ctx) return res(null);
          ctx.drawImage(img, 0, 0);
          const d = ctx.getImageData(0, 0, off.width, off.height).data;
          let sum = 0, nonBlack = 0, count = 0;
          for (let y = 0; y < off.height; y += 4) {
            for (let x = 0; x < off.width; x += 4) {
              const i = (y * off.width + x) * 4;
              const lum = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
              sum += lum; if (lum > 16) nonBlack++; count++;
            }
          }
          res(count > 0 ? { avgLum: sum / count, nonBlackRatio: nonBlack / count } : null);
        };
        img.onerror = () => res(null);
        img.src = url;
      });
    });
  }

  const t0 = Date.now();
  let rendered = 0, black = 0, errored = 0;

  for (const idx of indices) {
    const name = types[idx];
    if (!name) { console.log(`  [${idx}] no type name — skipping`); continue; }
    if (recorded.has(idx)) { console.log(`  [${idx}] ${name} — already rendered, skip`); continue; }

    current = { errors: [], warnings: [], contextLost: false, crash: false };
    const iterStart = Date.now();
    const file = `fractal-${pad3(idx)}-${name}.png`;
    const filePath = path.join(SHOT_DIR, file);
    let status: TypeResult['status'] = 'rendered';

    // Unique _f forces a full document load so the mount-time hash parser runs.
    const url = `${BASE_URL}/?test=1&_f=${idx}#type=${encodeURIComponent(name)}&renderStyle=${RENDER_STYLE}`;

    try {
      await page.goto(url, { waitUntil: 'load', timeout: 25000 });

      // Wait for first-frame render + shader compile by watching the overlays detach.
      await page.waitForSelector('#cosmic-loader-overlay', { state: 'detached', timeout: 20000 })
        .catch(() => console.log(`  [${idx}] cosmic-loader still attached`));
      await page.waitForSelector('#gpu-pipeline-loading-overlay', { state: 'detached', timeout: 20000 })
        .catch(() => console.log(`  [${idx}] gpu-pipeline overlay still attached`));

      // Hide any lingering overlays (never remove React-owned nodes).
      await page.evaluate(() => {
        document.querySelectorAll('#cosmic-loader-overlay, #gpu-pipeline-loading-overlay')
          .forEach((el) => { (el as HTMLElement).style.display = 'none'; });
      });

      await page.waitForTimeout(2500);

      // Verify the canvas has real content; retry to give slow shaders time.
      let stats: { avgLum: number; nonBlackRatio: number } | null = null;
      for (let attempt = 0; attempt < 4; attempt++) {
        stats = await readCanvasStats();
        if (stats && stats.nonBlackRatio > 0.03) break;
        await page.waitForTimeout(4000);
      }

      await page.screenshot({ path: filePath, timeout: 15000 });

      const size = fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
      const fill = stats ? stats.nonBlackRatio : null;
      if (current.crash) status = 'error';
      else if (fill === null || fill <= 0.03 || size < 3000) status = 'black';
      else status = 'rendered';
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      current.errors.push(`navigate/screenshot: ${msg}`);
      status = /timeout/i.test(msg) ? 'timeout' : 'error';
      // If the page died, recreate it so the sweep can continue.
      if (current.crash || /closed|crash|Target/i.test(msg)) {
        await recreatePage();
      }
    }

    const result: TypeResult = {
      idx, name, file,
      sizeBytes: fs.existsSync(filePath) ? fs.statSync(filePath).size : 0,
      fillRatio: null, avgLum: null,
      status,
      consoleErrors: current.errors.slice(0, 10),
      contextLost: current.contextLost,
      crash: current.crash,
      durationMs: Date.now() - iterStart,
      ts: new Date().toISOString(),
    };
    // Re-read stats for the record if present (kept simple: recompute once).
    try {
      const s = await readCanvasStats();
      if (s) { result.fillRatio = s.nonBlackRatio; result.avgLum = s.avgLum; }
    } catch { /* noop */ }

    fs.appendFileSync(RESULTS_JSONL, JSON.stringify(result) + '\n');

    if (status === 'rendered') rendered++;
    else if (status === 'black') black++;
    else errored++;

    const fillPct = result.fillRatio != null ? (result.fillRatio * 100).toFixed(1) + '%' : 'n/a';
    console.log(`  [${idx}] ${name.padEnd(24)} ${status.padEnd(8)} fill=${fillPct} ${(result.sizeBytes / 1024).toFixed(0)}KB err=${result.consoleErrors.length}${result.contextLost ? ' CTX-LOST' : ''}`);
  }

  const dur = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\n=== SWEEP CHUNK DONE in ${dur}s ===`);
  console.log(`rendered=${rendered} black=${black} error/timeout=${errored} total=${indices.length}`);
  console.log(`Screenshots: ${SHOT_DIR}`);
  console.log(`Results JSONL: ${RESULTS_JSONL}`);

  await browser.close();
}

main().catch((err) => {
  console.error('Sweep failed:', err);
  process.exit(1);
});
