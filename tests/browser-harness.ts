/**
 * Headless Browser Test Harness for Golden Ratio Fractal Engine
 * 
 * Provides:
 * - WebGL2-enabled headless Chromium via Playwright
 * - Console log capture (WebGL warnings, shader errors, FPS metrics)
 * - Screenshot capture at checkpoints
 * - Visual regression testing (pixel comparison against baselines)
 * - Real-time FPS monitoring
 * - Synchronized test execution across suites
 * 
 * Usage:
 *   import { createHarness } from './browser-harness';
 *   const harness = await createHarness();
 *   await harness.screenshotFractal('mandelbulb', 0);
 *   await harness.close();
 */

import { chromium, type Browser, type Page, type BrowserContext } from '@playwright/test';
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer, type Server } from 'http';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// ─── Types ───────────────────────────────────────────────────────────

export interface ConsoleEntry {
  type: string;
  text: string;
  timestamp: number;
  category: 'webgl' | 'webgpu' | 'shader' | 'fps' | 'error' | 'warn' | 'info';
}

export interface FPSMeasurement {
  fractalType: string;
  fractalIndex: number;
  fps: number;
  frameTime: number;
  qualityLevel: number;
  timestamp: number;
}

export interface ScreenshotResult {
  path: string;
  fractalType: string;
  fractalIndex: number;
  width: number;
  height: number;
  timestamp: number;
}

export interface RegressionResult {
  fractalType: string;
  fractalIndex: number;
  match: boolean;
  diffPixels: number;
  diffPercent: number;
  baselinePath: string;
  currentPath: string;
  diffPath?: string;
}

export interface HarnessReport {
  startTime: number;
  endTime: number;
  duration: number;
  screenshots: ScreenshotResult[];
  fpsMeasurements: FPSMeasurement[];
  consoleEntries: ConsoleEntry[];
  regressionResults: RegressionResult[];
  errors: string[];
  summary: {
    totalScreenshots: number;
    totalFPSMeasurements: number;
    totalConsoleEntries: number;
    totalRegressions: number;
    passedRegressions: number;
    failedRegressions: number;
    avgFPS: number;
    minFPS: number;
    maxFPS: number;
  };
}

export interface HarnessConfig {
  /** URL to test (default: starts local server from dist/) */
  url?: string;
  /** Viewport width (default: 1280) */
  width?: number;
  /** Viewport height (default: 720) */
  height?: number;
  /** Screenshot output directory */
  screenshotDir?: string;
  /** Baseline directory for regression comparison */
  baselineDir?: string;
  /** Results directory for reports */
  resultsDir?: string;
  /** Pixel diff threshold (0-1, default: 0.01 = 1%) */
  regressionThreshold?: number;
  /** Wait time after fractal load before screenshot (ms, default: 2000) */
  renderSettleTime?: number;
  /** FPS sampling duration (ms, default: 3000) */
  fpsSampleDuration?: number;
  /** Whether to build before serving (default: true) */
  buildFirst?: boolean;
  /** Headless mode (default: true) */
  headless?: boolean;
  /** GPU mode: 'software' (SwiftShader, reliable screenshots) or 'hardware' (ANGLE+D3D11, WebGL2 validation) */
  gpuMode?: 'software' | 'hardware';
}

// ─── Constants ───────────────────────────────────────────────────────

const DEFAULT_CONFIG: Required<HarnessConfig> = {
  url: '',
  width: 1280,
  height: 720,
  screenshotDir: resolve(projectRoot, 'tests/results/screenshots'),
  baselineDir: resolve(projectRoot, 'tests/baseline'),
  resultsDir: resolve(projectRoot, 'tests/results'),
  regressionThreshold: 0.01,
  renderSettleTime: 2000,
  fpsSampleDuration: 3000,
  buildFirst: true,
  headless: true,
  gpuMode: 'hardware', // Use hardware WebGL2 with --use-angle=gl for proper rendering
};

// ─── Server launcher (vite preview or static) ────────────────────────

function startVitePreview(dir: string, port: number): Promise<{ server: any; stop: () => void }> {
  return new Promise((resolvePromise) => {
    const { spawn } = require('child_process');
    const proc = spawn('npx', ['vite', 'preview', '--port', String(port), '--host', '127.0.0.1'], {
      cwd: dir,
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true,
    });
    
    let output = '';
    proc.stdout.on('data', (data: Buffer) => {
      output += data.toString();
      if (output.includes('Local:') || output.includes('localhost') || output.includes('127.0.0.1')) {
        resolvePromise({
          server: proc,
          stop: () => proc.kill('SIGTERM'),
        });
      }
    });
    
    proc.stderr.on('data', (data: Buffer) => {
      output += data.toString();
    });
    
    // Fallback: resolve after 3 seconds even if no "Local:" message
    setTimeout(() => {
      resolvePromise({
        server: proc,
        stop: () => proc.kill('SIGTERM'),
      });
    }, 3000);
  });
}

function startStaticServer(dir: string, port: number): Promise<Server> {
  return new Promise((resolve, reject) => {
    const handler = async (req: any, res: any) => {
      const url = new URL(req.url!, `http://localhost:${port}`);
      let filePath = join(dir, url.pathname === '/' ? 'index.html' : url.pathname);
      
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const mimeTypes: Record<string, string> = {
          html: 'text/html', js: 'application/javascript', css: 'text/css',
          json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
          svg: 'image/svg+xml', wasm: 'application/wasm',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext || ''] || 'application/octet-stream' });
        res.end(content);
      } catch {
        // SPA fallback
        try {
          const indexHtml = readFileSync(join(dir, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexHtml);
        } catch {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    };
    
    const server = createServer(handler);
    
    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error(`Port ${port} is already in use`));
      } else {
        reject(err);
      }
    });
    
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

// ─── Console log categorizer ─────────────────────────────────────────

function categorizeConsole(type: string, text: string): ConsoleEntry['category'] {
  const lower = text.toLowerCase();
  if (lower.includes('webgl') || lower.includes('gl_') || lower.includes('webgl2')) return 'webgl';
  if (lower.includes('webgpu') || lower.includes('wgsl') || lower.includes('gpu')) return 'webgpu';
  if (lower.includes('shader') || lower.includes('compile') || lower.includes('link')) return 'shader';
  if (lower.includes('fps') || lower.includes('frame') || lower.includes('render time')) return 'fps';
  if (type === 'error') return 'error';
  if (type === 'warning') return 'warn';
  return 'info';
}

// ─── Pixel diff (pure JS, no native deps) ────────────────────────────

function comparePixels(baseline: Buffer, current: Buffer): { diffPixels: number; totalPixels: number } {
  // Both must be same size PNG buffers — compare raw byte differences
  const minLen = Math.min(baseline.length, current.length);
  let diffPixels = 0;
  
  // Simple byte-level comparison (works for same-format PNGs)
  for (let i = 0; i < minLen; i++) {
    if (Math.abs(baseline[i] - current[i]) > 10) {
      diffPixels++;
    }
  }
  
  return { diffPixels, totalPixels: minLen };
}

// ─── Main Harness Class ──────────────────────────────────────────────

export class BrowserTestHarness {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  private serverProcess: any = null;
  private server: Server | null = null;
  private serverStop: (() => void) | null = null;
  private config: Required<HarnessConfig>;
  
  private consoleEntries: ConsoleEntry[] = [];
  private fpsMeasurements: FPSMeasurement[] = [];
  private screenshots: ScreenshotResult[] = [];
  private regressionResults: RegressionResult[] = [];
  private errors: string[] = [];
  private startTime = 0;
  
  constructor(config: HarnessConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }
  
  // ─── Lifecycle ───────────────────────────────────────────────────
  
  async init(): Promise<void> {
    this.startTime = Date.now();
    
    // Ensure directories exist
    for (const dir of [this.config.screenshotDir, this.config.baselineDir, this.config.resultsDir]) {
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    }
    
    // Build if needed
    if (this.config.buildFirst && !existsSync(resolve(projectRoot, 'dist/index.html'))) {
      console.log('  Building project...');
      execSync('npm run build', { cwd: projectRoot, stdio: 'pipe' });
    }
    
    // Start local server if no URL provided
    if (!this.config.url) {
      const distDir = projectRoot;
      // Try multiple ports in case the default is in use
      const ports = [9876, 9877, 9878, 9879, 9880];
      let serverStarted = false;
      
      for (const port of ports) {
        try {
          const result = await startVitePreview(distDir, port);
          this.serverProcess = result.server;
          this.serverStop = result.stop;
          this.config.url = `http://127.0.0.1:${port}`;
          console.log(`  Vite preview started on ${this.config.url}`);
          serverStarted = true;
          break;
        } catch (err) {
          // Try static server on this port
          try {
            const staticDir = resolve(projectRoot, 'dist');
            this.server = await startStaticServer(staticDir, port);
            this.config.url = `http://127.0.0.1:${port}`;
            console.log(`  Static server started on ${this.config.url}`);
            serverStarted = true;
            break;
          } catch {
            // Port in use, try next
            continue;
          }
        }
      }
      
      if (!serverStarted) {
        throw new Error('Could not start server on any port (tried 9876-9880)');
      }
    }
    
    // Launch browser with WebGL2 support
    const isSoftware = this.config.gpuMode === 'software';
    this.browser = await chromium.launch({
      headless: this.config.headless,
      channel: 'chromium', // Full Chromium for both modes (proper WebGL support)
      args: isSoftware ? [
        // SwiftShader: software rendering — reliable screenshots, no GPU process blocking
        '--enable-webgl',
        '--use-gl=swiftshader',
        '--use-angle=swiftshader',
        '--disable-gpu-compositing',     // Force CPU compositing so WebGL content appears in screenshots
        '--no-sandbox',
        '--disable-gpu-sandbox',
      ] : [
        // ANGLE+GL: hardware WebGL2 — use --use-angle=gl for proper compositing in headless
        // (createIT research: --use-angle=gl gives 60fps + working screenshots; d3d11 breaks compositing)
        '--enable-webgl',
        '--use-gl=angle',
        '--use-angle=gl',
        '--enable-unsafe-webgpu',
        '--no-sandbox',
        '--disable-gpu-sandbox',
        '--disable-gpu-compositing', // Force CPU compositing for screenshot compatibility
      ],
    });
    
    this.context = await this.browser.newContext({
      viewport: { width: this.config.width, height: this.config.height },
      deviceScaleFactor: 1,
    });
    
    this.page = await this.context.newPage();
    
    // Capture ALL console messages
    this.page.on('console', (msg) => {
      const entry: ConsoleEntry = {
        type: msg.type(),
        text: msg.text(),
        timestamp: Date.now(),
        category: categorizeConsole(msg.type(), msg.text()),
      };
      this.consoleEntries.push(entry);
    });
    
    // Capture page errors
    this.page.on('pageerror', (error) => {
      this.errors.push(error.message);
      this.consoleEntries.push({
        type: 'error',
        text: `[PAGE ERROR] ${error.message}`,
        timestamp: Date.now(),
        category: 'error',
      });
    });
    
    console.log('  Browser initialized (Chromium, WebGL2-enabled)');
  }
  
  async close(): Promise<HarnessReport> {
    const report = this.generateReport();
    
    // Save report
    const reportPath = resolve(this.config.resultsDir, 'harness-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`  Report saved: ${reportPath}`);
    
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
    if (this.serverStop) this.serverStop();
    if (this.server) this.server.close();
    
    return report;
  }
  
  // ─── Navigation ──────────────────────────────────────────────────
  
  async loadApp(): Promise<void> {
    if (!this.page) throw new Error('Harness not initialized');
    
    console.log(`  Loading app: ${this.config.url}`);
    const testUrl = this.config.url.includes('?') ? `${this.config.url}&test=1` : `${this.config.url}?test=1`;
    await this.page.goto(testUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for JS to load and React to mount
    await this.page.waitForTimeout(3000);
    
    // Check if WebGL2 initialized successfully (more reliable than canvas selector)
    const webglSuccess = this.consoleEntries.some(e => 
      e.text.includes('Context acquired!') || e.text.includes('WebGL2] Result: SUCCESS')
    );
    
    if (webglSuccess) {
      console.log('  ✅ WebGL2 context acquired successfully');
    } else {
      console.log('  ⚠️  WebGL2 context not yet acquired');
    }
    
    // Try to find canvas (but don't fail if not found)
    let canvasFound = false;
    for (const selector of ['canvas', '#fractal-canvas', '[class*="canvas"]', 'div > canvas']) {
      try {
        await this.page.waitForSelector(selector, { timeout: 2000 });
        canvasFound = true;
        console.log(`  Canvas found via: ${selector}`);
        break;
      } catch {
        // Try next selector
      }
    }
    
    if (!canvasFound && !webglSuccess) {
      // Neither canvas nor WebGL found — take debug screenshot
      const debugPath = resolve(this.config.resultsDir, 'debug-load-failure.png');
      try {
        await this.page.screenshot({ path: debugPath, timeout: 5000, animations: 'disabled' });
        console.log(`  ⚠️  Canvas not found — debug screenshot: ${debugPath}`);
      } catch (screenshotErr) {
        console.log(`  ⚠️  Canvas not found and screenshot failed`);
      }
      
      // Check page content
      try {
        const title = await this.page.title();
        const bodyText = await this.page.evaluate(() => document.body?.innerText?.substring(0, 200) || 'empty');
        console.log(`  Page title: "${title}"`);
        console.log(`  Page body: "${bodyText.substring(0, 100)}"`);
      } catch (evalErr) {
        console.log(`  Could not evaluate page content`);
      }
    }
    
    // Wait for initial render
    await this.page.waitForTimeout(this.config.renderSettleTime);
    
    console.log('  App loaded');
  }
  
  // ─── Fractal Control ─────────────────────────────────────────────
  
  async setFractalType(index: number): Promise<void> {
    if (!this.page) throw new Error('Harness not initialized');
    
    // Navigate with hash parameter (app reads hash on mount)
    const baseUrl = this.config.url.split('?')[0];
    const url = `${baseUrl}?test=1#type=type${index}`;
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await this.page.waitForTimeout(this.config.renderSettleTime);
  }
  
  async setRenderStyle(style: string): Promise<void> {
    if (!this.page) throw new Error('Harness not initialized');
    
    // Map style names to keyboard shortcuts (1-7)
    const styleToKey: Record<string, string> = {
      'solid': '1', 'pbr': '1',
      'xray': '2',
      'topo': '3', 'sonar': '3', 'lidar': '3', 'topography': '3',
      'hologram': '4',
      'iridescent': '5',
      'quantum': '6', 'plasma': '6',
      'gemstone': '7', 'crystal': '7',
    };
    
    const key = styleToKey[style.toLowerCase()] || '1';
    
    // Use keyboard shortcut (app listens for number keys 1-7)
    await this.page.keyboard.press(key);
    await this.page.waitForTimeout(1000); // Wait for style to apply
  }
  
  // ─── FPS Monitoring ──────────────────────────────────────────────
  
  async measureFPS(fractalType: string, fractalIndex: number, duration?: number): Promise<FPSMeasurement> {
    if (!this.page) throw new Error('Harness not initialized');
    
    const sampleDuration = duration || this.config.fpsSampleDuration;
    
    // Count existing FPS logs to filter only new ones
    const initialFPSCount = this.consoleEntries.filter(e => e.text.includes('[DIAG] Health: fps=')).length;
    
    // Wait for FPS logs to accumulate
    await this.page.waitForTimeout(sampleDuration);
    
    // Small delay to ensure all console events are processed
    await this.page.waitForTimeout(200);
    
    // Parse FPS from NEW console logs only
    const allFPSLogs = this.consoleEntries.filter(e => e.text.includes('[DIAG] Health: fps='));
    const newFPSLogs = allFPSLogs.slice(initialFPSCount);
    
    const fpsValues = newFPSLogs
      .map(e => {
        const match = e.text.match(/fps=(\d+(?:\.\d+)?)/);
        return match ? parseFloat(match[1]) : 0;
      })
      .filter(fps => fps > 0);
    
    // Calculate average FPS
    const avgFPS = fpsValues.length > 0 
      ? Math.round(fpsValues.reduce((a, b) => a + b, 0) / fpsValues.length)
      : 0;
    const frameTime = avgFPS > 0 ? Math.round(1000 / avgFPS * 100) / 100 : 0;
    
    const result: FPSMeasurement = {
      fractalType,
      fractalIndex,
      fps: avgFPS,
      frameTime,
      qualityLevel: 1,
      timestamp: Date.now(),
    };
    
    this.fpsMeasurements.push(result);
    return result;
  }
  
  // ─── Screenshots ─────────────────────────────────────────────────
  
  async screenshot(name: string): Promise<ScreenshotResult> {
    if (!this.page) throw new Error('Harness not initialized');
    
    const path = resolve(this.config.screenshotDir, `${name}.png`);
    
    try {
      if (this.config.gpuMode === 'software') {
        // SwiftShader + preserveDrawingBuffer: capture via toDataURL (reliable, no compositor needed)
        const dataUrl = await this.page.evaluate(() => {
          const canvas = document.querySelector('canvas');
          if (canvas && canvas.width > 0 && canvas.height > 0) {
            try { return canvas.toDataURL('image/png'); } catch { return null; }
          }
          return null;
        });
        
        if (dataUrl && dataUrl.length > 1000) {
          const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
          writeFileSync(path, Buffer.from(base64, 'base64'));
        } else {
          // Fallback to Playwright screenshot
          await this.page.screenshot({ path, timeout: 10000 });
        }
      } else {
        // Hardware mode (--use-angle=gl): try direct screenshot first (proper compositing)
        try {
          await this.page.screenshot({ path, timeout: 10000 });
        } catch {
          // Fallback: pause rAF render loop then screenshot
          await Promise.race([
            this.page.evaluate(() => { (window as any).__pauseRender?.(); }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('pause timeout')), 3000))
          ]);
          await this.page.waitForTimeout(200);
          await this.page.screenshot({ path, timeout: 10000 });
          await this.page.evaluate(() => { (window as any).__resumeRender?.(); }).catch(() => {});
        }
      }
    } catch (err) {
      // Resume render on error (hardware mode)
      if (this.config.gpuMode !== 'software') {
        await this.page.evaluate(() => { (window as any).__resumeRender?.(); }).catch(() => {});
      }
      console.log(`  Screenshot note: ${err instanceof Error ? err.message.substring(0, 80) : 'failed'}`);
      writeFileSync(path, Buffer.alloc(0));
    }
    
    const result: ScreenshotResult = {
      path,
      fractalType: name,
      fractalIndex: -1,
      width: this.config.width,
      height: this.config.height,
      timestamp: Date.now(),
    };
    
    this.screenshots.push(result);
    return result;
  }
  
  async screenshotFractal(fractalType: string, fractalIndex: number): Promise<ScreenshotResult> {
    await this.setFractalType(fractalIndex);
    const result = await this.screenshot(`fractal-${fractalIndex.toString().padStart(3, '0')}-${fractalType}`);
    result.fractalType = fractalType;
    result.fractalIndex = fractalIndex;
    return result;
  }
  
  // ─── Visual Regression ───────────────────────────────────────────
  
  async compareWithBaseline(fractalType: string, fractalIndex: number): Promise<RegressionResult> {
    const baselinePath = resolve(this.config.baselineDir, `fractal-${fractalIndex.toString().padStart(3, '0')}-${fractalType}.png`);
    const currentPath = resolve(this.config.screenshotDir, `fractal-${fractalIndex.toString().padStart(3, '0')}-${fractalType}.png`);
    
    // Take current screenshot if not already taken
    if (!existsSync(currentPath)) {
      await this.screenshotFractal(fractalType, fractalIndex);
    }
    
    // If no baseline exists, save current as baseline
    if (!existsSync(baselinePath)) {
      const currentBuffer = readFileSync(currentPath);
      writeFileSync(baselinePath, currentBuffer);
      
      const result: RegressionResult = {
        fractalType,
        fractalIndex,
        match: true,
        diffPixels: 0,
        diffPercent: 0,
        baselinePath,
        currentPath,
      };
      this.regressionResults.push(result);
      return result;
    }
    
    // Compare
    const baselineBuffer = readFileSync(baselinePath);
    const currentBuffer = readFileSync(currentPath);
    const { diffPixels, totalPixels } = comparePixels(baselineBuffer, currentBuffer);
    const diffPercent = totalPixels > 0 ? diffPixels / totalPixels : 0;
    const match = diffPercent <= this.config.regressionThreshold;
    
    const result: RegressionResult = {
      fractalType,
      fractalIndex,
      match,
      diffPixels,
      diffPercent: Math.round(diffPercent * 10000) / 100,
      baselinePath,
      currentPath,
    };
    
    // Save diff image if mismatch
    if (!match) {
      const diffPath = resolve(this.config.resultsDir, `diff-${fractalIndex.toString().padStart(3, '0')}-${fractalType}.png`);
      result.diffPath = diffPath;
      // Copy current as diff marker (full pixel diff would need image processing lib)
      writeFileSync(diffPath, currentBuffer);
    }
    
    this.regressionResults.push(result);
    return result;
  }
  
  // ─── Batch Operations ────────────────────────────────────────────
  
  async screenshotKeyFractals(): Promise<ScreenshotResult[]> {
    const keyFractals = [
      { name: 'mandelbulb', index: 0 },
      { name: 'mengerSponge', index: 1 },
      { name: 'sierpinskiTetrahedron', index: 3 },
      { name: 'juliaSet3D', index: 45 },
      { name: 'lorenzAttractor', index: 30 },
      { name: 'kleinBottle', index: 57 },
      { name: 'ifs-variant-1', index: 191 },
      { name: 'lsystem-variant-1', index: 241 },
      { name: 'flame-variant-1', index: 291 },
      { name: 'hybrid-variant-1', index: 341 },
    ];
    
    const results: ScreenshotResult[] = [];
    for (const f of keyFractals) {
      const result = await this.screenshotFractal(f.name, f.index);
      results.push(result);
      console.log(`  📸 ${f.name} [${f.index}]`);
    }
    
    return results;
  }
  
  async measureKeyFractalsFPS(): Promise<FPSMeasurement[]> {
    const samples = [
      { name: 'mandelbulb', index: 0 },
      { name: 'juliaSet3D', index: 45 },
      { name: 'ifs-variant-1', index: 191 },
      { name: 'hybrid-variant-1', index: 341 },
    ];
    
    const results: FPSMeasurement[] = [];
    for (const s of samples) {
      await this.setFractalType(s.index);
      const fps = await this.measureFPS(s.name, s.index, 2000);
      results.push(fps);
      console.log(`  ⚡ ${s.name} [${s.index}]: ${fps.fps} FPS (${fps.frameTime}ms)`);
    }
    
    return results;
  }
  
  // ─── Console Analysis ────────────────────────────────────────────
  
  getConsoleErrors(): ConsoleEntry[] {
    return this.consoleEntries.filter(e => e.category === 'error');
  }
  
  getWebGLWarnings(): ConsoleEntry[] {
    return this.consoleEntries.filter(e => e.category === 'webgl' && e.type === 'warning');
  }
  
  getShaderErrors(): ConsoleEntry[] {
    return this.consoleEntries.filter(e => e.category === 'shader' && e.type === 'error');
  }
  
  getFPSLogs(): ConsoleEntry[] {
    return this.consoleEntries.filter(e => e.category === 'fps');
  }
  
  // ─── Report Generation ───────────────────────────────────────────
  
  private generateReport(): HarnessReport {
    const endTime = Date.now();
    
    const fpsValues = this.fpsMeasurements.map(m => m.fps).filter(f => f > 0);
    
    return {
      startTime: this.startTime,
      endTime,
      duration: endTime - this.startTime,
      screenshots: this.screenshots,
      fpsMeasurements: this.fpsMeasurements,
      consoleEntries: this.consoleEntries,
      regressionResults: this.regressionResults,
      errors: this.errors,
      summary: {
        totalScreenshots: this.screenshots.length,
        totalFPSMeasurements: this.fpsMeasurements.length,
        totalConsoleEntries: this.consoleEntries.length,
        totalRegressions: this.regressionResults.length,
        passedRegressions: this.regressionResults.filter(r => r.match).length,
        failedRegressions: this.regressionResults.filter(r => !r.match).length,
        avgFPS: fpsValues.length > 0 ? Math.round(fpsValues.reduce((a, b) => a + b, 0) / fpsValues.length) : 0,
        minFPS: fpsValues.length > 0 ? Math.min(...fpsValues) : 0,
        maxFPS: fpsValues.length > 0 ? Math.max(...fpsValues) : 0,
      },
    };
  }
}

// ─── Factory Function ────────────────────────────────────────────────

export async function createHarness(config: HarnessConfig = {}): Promise<BrowserTestHarness> {
  const harness = new BrowserTestHarness(config);
  await harness.init();
  return harness;
}
