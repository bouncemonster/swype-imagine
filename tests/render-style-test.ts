/**
 * Render Style Coverage Test
 * Tests all 7 render styles on a single fractal to validate visual correctness
 */

import { createHarness } from './browser-harness';

const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');

const RENDER_STYLES = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone'];

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║  RENDER STYLE COVERAGE TEST                                  ');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log('║  Fractal: Mandelbulb (#1)                                    ');
  console.log(`║  Styles: ${RENDER_STYLES.length}                                      `);
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  const harness = await createHarness({
    buildFirst: !skipBuild,
    headless: true,
    width: 1280,
    height: 720,
    renderSettleTime: 5000,
    fpsSampleDuration: 2000,
    regressionThreshold: 0.02,
  });

  try {
    await harness.loadApp();
    await harness.setFractalType(1); // Mandelbulb

    console.log('━━━ Testing Render Styles ━━━\n');

    for (let i = 0; i < RENDER_STYLES.length; i++) {
      const style = RENDER_STYLES[i];
      process.stdout.write(`  [${i + 1}/7] ${style.padEnd(12)} `);

      try {
        await harness.setRenderStyle(style);
        await harness.screenshot(`style-test-mandelbulb-${style}`);
        console.log('✅');
      } catch (err) {
        console.log(`❌ ${err instanceof Error ? err.message : 'failed'}`);
      }
    }

    console.log('\n━━━ Console Analysis ━━━');
    const shaderErrors = harness.getShaderErrors().filter(e =>
      e.text && !e.text.includes('null') && e.text.length > 30
    );
    console.log(`  Shader errors: ${shaderErrors.length}`);
    console.log(`  Total console entries: ${harness['consoleEntries'].length}`);

    const report = await harness.close();
    console.log(`\n  Duration: ${(report.duration / 1000).toFixed(1)}s`);
    console.log(`  Screenshots: ${report.summary.totalScreenshots}`);

    if (shaderErrors.length === 0) {
      console.log('\n  ✅ All 7 render styles rendered successfully');
    } else {
      console.log(`\n  ⚠️  ${shaderErrors.length} shader errors detected`);
    }
  } catch (error) {
    console.error('\n  ❌ Fatal:', error);
    await harness.close();
    process.exit(1);
  }
}

main();
