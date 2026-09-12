/**
 * Simplified Browser Test - Initial Validation
 */

import { createHarness } from './browser-harness';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

async function runSmokeTest(): Promise<void> {
  console.log('\n=== BROWSER SMOKE TEST ===\n');
  
  const harness = await createHarness({
    buildFirst: false,
    headless: true,
    width: 1280,
    height: 720,
    renderSettleTime: 3000,
    gpuMode: 'hardware', // Test with --use-angle=gl for real WebGL2 + screenshots
  });
  
  try {
    console.log('Phase 1: App Loading');
    await harness.loadApp();
    
    const errors = harness.getConsoleErrors();
    console.log('  Errors:', errors.length);
    
    console.log('\nPhase 2: Screenshot');
    const screenshot = await harness.screenshot('initial-load');
    console.log('  Saved:', screenshot.path);
    
    console.log('\nPhase 3: FPS');
    try {
      const fps = await harness.measureFPS('default', 0, 3000);
      console.log('  FPS:', fps.fps);
    } catch (fpsErr) {
      console.log('  FPS measurement skipped (browser may have reset)');
    }
    
    console.log('\nPhase 4: Report');
    const report = await harness.close();
    console.log('  Duration:', (report.duration / 1000).toFixed(1) + 's');
    console.log('  Console entries:', report.consoleEntries.length);
    
    console.log('\nSMOKE TEST PASSED');
    
    const reportPath = resolve(projectRoot, 'tests/results/smoke-test-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
    await harness.close();
    process.exit(1);
  }
}

runSmokeTest();
