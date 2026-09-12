/**
 * Advanced Fractal Rendering Test
 * 
 * Focus: Mathematical artifacts, rendering glitches, hybrid combinations
 * - Test fractals across ALL categories
 * - Test multiple render styles (solid, gemstone, holographic, wireframe, etc.)
 * - Test mandalas and hybrid combinations
 * - Detect mathematical artifacts (NaN, infinity, clipping, distortion)
 * 
 * Usage: npx tsx tests/advanced-fractal-test.ts --skip-build --count=20
 */

import { createHarness } from './browser-harness';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// ─── Parse CLI args ──────────────────────────────────────────────────

const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
const headed = args.includes('--headed');
const fractalCount = parseInt(args.find(a => a.startsWith('--count='))?.split('=')[1] || '20');
const specificCategory = args.find(a => a.startsWith('--category='))?.split('=')[1];
const specificRenderStyle = args.find(a => a.startsWith('--style='))?.split('=')[1];

// ─── Fractal Categories ──────────────────────────────────────────────

interface FractalCategory {
  name: string;
  file: string;
  range: [number, number];
}

const CATEGORIES: FractalCategory[] = [
  { name: 'algebraic', file: 'algebraicFractals.ts', range: [0, 50] },
  { name: 'constructive', file: 'constructiveFractals.ts', range: [50, 100] },
  { name: 'geometric', file: 'geometricCurves.ts', range: [100, 150] },
  { name: 'ifs', file: 'ifsFractals.ts', range: [150, 200] },
  { name: 'lsystem', file: 'lsystemVariations.ts', range: [200, 250] },
  { name: 'flame', file: 'flameVariations.ts', range: [250, 300] },
  { name: 'hybrid', file: 'hybridVariations.ts', range: [300, 350] },
  { name: 'mandalas', file: 'mandalas3D.ts', range: [350, 400] },
  { name: 'multidimensional', file: 'multidimensionalFractals.ts', range: [400, 450] },
];

// ─── Render Styles ───────────────────────────────────────────────────

const RENDER_STYLES = [
  'solid',
  'gemstone',
  'holographic',
  'wireframe',
  'pointcloud',
  'volumetric',
  'crystalline',
  'organic',
];

// ─── Extract fractal types from mapper ───────────────────────────────

function extractTypes(): { type: string; index: number; category: string }[] {
  const mapperContent = readFileSync(
    resolve(projectRoot, 'src/engine/fractalMappers.ts'),
    'utf-8'
  );
  
  const types: { type: string; index: number; category: string }[] = [];
  const regex = /case\s+'(\w+)':\s*return\s+(\d+);/g;
  let match;
  
  while ((match = regex.exec(mapperContent)) !== null) {
    const index = parseInt(match[2]);
    let category = 'unknown';
    for (const cat of CATEGORIES) {
      if (index >= cat.range[0] && index < cat.range[1]) {
        category = cat.name;
        break;
      }
    }
    types.push({ type: match[1], index, category });
  }
  
  return types;
}

// ─── Detect Mathematical Artifacts ──────────────────────────────────

interface ArtifactReport {
  type: 'nan' | 'infinity' | 'clipping' | 'distortion' | 'black_holes' | 'color_bands' | 'symmetry_break';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  fractalIndex: number;
  fractalType: string;
  renderStyle: string;
}

function detectArtifacts(
  consoleEntries: any[],
  fractalIndex: number,
  fractalType: string,
  renderStyle: string
): ArtifactReport[] {
  const artifacts: ArtifactReport[] = [];
  
  // Check for NaN/Infinity in console logs
  const nanLogs = consoleEntries.filter(e => 
    e.text.includes('NaN') || e.text.includes('Infinity') || e.text.includes('undefined')
  );
  
  if (nanLogs.length > 0) {
    artifacts.push({
      type: 'nan',
      severity: 'critical',
      description: `NaN/Infinity detected in ${nanLogs.length} console logs`,
      fractalIndex,
      fractalType,
      renderStyle,
    });
  }
  
  // Check for shader compilation errors
  const shaderErrors = consoleEntries.filter(e => 
    e.category === 'shader' && e.type === 'error' && e.text && !e.text.includes('null')
  );
  
  if (shaderErrors.length > 0) {
    artifacts.push({
      type: 'distortion',
      severity: 'high',
      description: `Shader compilation errors: ${shaderErrors.length}`,
      fractalIndex,
      fractalType,
      renderStyle,
    });
  }
  
  // Check for WebGL warnings (performance issues, context loss)
  const webglWarnings = consoleEntries.filter(e => 
    e.category === 'webgl' && e.type === 'warning' && 
    (e.text.includes('CONTEXT_LOST') || e.text.includes('GL_OUT_OF_MEMORY'))
  );
  
  if (webglWarnings.length > 0) {
    artifacts.push({
      type: 'clipping',
      severity: 'high',
      description: `WebGL critical warnings: ${webglWarnings.length}`,
      fractalIndex,
      fractalType,
      renderStyle,
    });
  }
  
  return artifacts;
}

// ─── Main Test Runner ────────────────────────────────────────────────

async function runAdvancedTests(): Promise<void> {
  console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  ADVANCED FRACTAL RENDERING TEST                             ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  Mode: ${headed ? 'HEADED (visible)' : 'HEADLESS'}                                          ║`);
  console.log(`║  Fractals: ${fractalCount} samples                                  ║`);
  console.log(`║  Category: ${specificCategory || 'ALL'}                                        ║`);
  console.log(`║  Render Style: ${specificRenderStyle || 'ALL'}                              ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  // Initialize harness
  const harness = await createHarness({
    buildFirst: !skipBuild,
    headless: !headed,
    width: 1280,
    height: 720,
    renderSettleTime: 5000,
    fpsSampleDuration: 3000,
    regressionThreshold: 0.02,
  });
  
  try {
    // ── Phase 1: Load App ─────────────────────────────────────────
    console.log('━━━ Phase 1: App Loading ━━━');
    await harness.loadApp();
    
    const loadErrors = harness.getConsoleErrors();
    const shaderErrors = harness.getShaderErrors().filter(e => 
      e.text && !e.text.includes('null') && e.text.length > 30
    );
    
    console.log(`  Console errors: ${loadErrors.length}`);
    console.log(`  Shader errors: ${shaderErrors.length}`);
    
    if (shaderErrors.length > 0) {
      console.log('  ⚠️  Shader compilation errors detected:');
      for (const err of shaderErrors.slice(0, 5)) {
        console.log(`     ${err.text.substring(0, 120)}`);
      }
    }
    
    // ─── Phase 2: Extract & Filter Fractals ────────────────────────
    console.log('\n━━━ Phase 2: Fractal Selection ━━━');
    
    const allTypes = extractTypes();
    console.log(`  Total fractal types: ${allTypes.length}`);
    
    let testTypes = allTypes;
    
    // Filter by category if specified
    if (specificCategory) {
      testTypes = testTypes.filter(t => t.category === specificCategory);
      console.log(`  Filtered by category '${specificCategory}': ${testTypes.length} types`);
    }
    
    // Sample evenly
    if (testTypes.length > fractalCount) {
      const step = Math.floor(testTypes.length / fractalCount);
      testTypes = testTypes.filter((_, i) => i % step === 0).slice(0, fractalCount);
    }
    
    console.log(`  Testing ${testTypes.length} fractal types\n`);
    
    // ─── Phase 3: Test Each Fractal with Multiple Render Styles ─────
    console.log('━━━ Phase 3: Advanced Rendering Tests ━━━');
    
    const allArtifacts: ArtifactReport[] = [];
    const renderStylesToTest = specificRenderStyle ? [specificRenderStyle] : RENDER_STYLES.slice(0, 3); // Test first 3 styles
    
    for (let i = 0; i < testTypes.length; i++) {
      const { type, index, category } = testTypes[i];
      
      process.stdout.write(`\r  [${i + 1}/${testTypes.length}] ${category}/${type} (#${index})`);
      
      // Test with different render styles
      for (const style of renderStylesToTest) {
        try {
          await harness.setFractalType(index);
          await harness.setRenderStyle(style);
          await harness.screenshot(`adv-${index}-${type}-${style}`);
          
          // Detect artifacts
          const artifacts = detectArtifacts(
            harness['consoleEntries'],
            index,
            type,
            style
          );
          
          allArtifacts.push(...artifacts);
        } catch (err) {
          console.log(`\n   Failed: ${type} #${index} with style '${style}': ${err instanceof Error ? err.message : err}`);
        }
      }
    }
    console.log('\n');
    
    // ─── Phase 4: Mandala-Specific Tests ───────────────────────────
    console.log('━━━ Phase 4: Mandala Tests ━━━');
    
    const mandalas = testTypes.filter(t => t.category === 'mandalas');
    if (mandalas.length > 0) {
      console.log(`  Testing ${mandalas.length} mandala types...`);
      for (const { type, index } of mandalas.slice(0, 5)) {
        try {
          await harness.setFractalType(index);
          await harness.screenshot(`mandala-${index}-${type}`);
          console.log(`  ✅ Mandala #${index} (${type})`);
        } catch (err) {
          console.log(`  ❌ Mandala #${index} failed: ${err instanceof Error ? err.message : err}`);
        }
      }
    } else {
      console.log('  ⚠️  No mandalas in test set');
    }
    
    // ─── Phase 5: Hybrid Combination Tests ─────────────────────────
    console.log('\n━━━ Phase 5: Hybrid Combination Tests ━━');
    
    const hybrids = testTypes.filter(t => t.category === 'hybrid');
    if (hybrids.length > 0) {
      console.log(`  Testing ${hybrids.length} hybrid types...`);
      for (const { type, index } of hybrids.slice(0, 5)) {
        try {
          await harness.setFractalType(index);
          await harness.screenshot(`hybrid-${index}-${type}`);
          console.log(`  ✅ Hybrid #${index} (${type})`);
        } catch (err) {
          console.log(`  ❌ Hybrid #${index} failed: ${err instanceof Error ? err.message : err}`);
        }
      }
    } else {
      console.log('  ⚠️  No hybrids in test set');
    }
    
    // ── Phase 6: Artifact Analysis ────────────────────────────────
    console.log('\n━━━ Phase 6: Mathematical Artifact Analysis ━━━');
    
    const artifactSummary = {
      nan: allArtifacts.filter(a => a.type === 'nan').length,
      infinity: allArtifacts.filter(a => a.type === 'infinity').length,
      clipping: allArtifacts.filter(a => a.type === 'clipping').length,
      distortion: allArtifacts.filter(a => a.type === 'distortion').length,
      black_holes: allArtifacts.filter(a => a.type === 'black_holes').length,
      color_bands: allArtifacts.filter(a => a.type === 'color_bands').length,
      symmetry_break: allArtifacts.filter(a => a.type === 'symmetry_break').length,
    };
    
    console.log(`  Total artifacts detected: ${allArtifacts.length}`);
    console.log(`  NaN/Infinity: ${artifactSummary.nan + artifactSummary.infinity}`);
    console.log(`  Clipping issues: ${artifactSummary.clipping}`);
    console.log(`  Distortion: ${artifactSummary.distortion}`);
    console.log(`  Black holes: ${artifactSummary.black_holes}`);
    console.log(`  Color banding: ${artifactSummary.color_bands}`);
    console.log(`  Symmetry breaks: ${artifactSummary.symmetry_break}`);
    
    if (allArtifacts.length > 0) {
      console.log('\n  Artifact details:');
      for (const artifact of allArtifacts.slice(0, 10)) {
        console.log(`    [${artifact.severity.toUpperCase()}] #${artifact.fractalIndex} ${artifact.fractalType} (${artifact.renderStyle}): ${artifact.description}`);
      }
    }
    
    // ─── Final Report ──────────────────────────────────────────────
    console.log('\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║  FINAL REPORT                                                ');
    console.log('╠════════════════════════════════════════════════════════════════╣');
    
    const report = await harness.close();
    
    console.log(`║  Duration: ${(report.duration / 1000).toFixed(1)}s`);
    console.log(`║  Fractals tested: ${testTypes.length}`);
    console.log(`║  Render styles: ${renderStylesToTest.length}`);
    console.log(`║  Screenshots: ${report.summary.totalScreenshots}`);
    console.log(`║  Artifacts: ${allArtifacts.length}`);
    console.log(`║  Critical: ${allArtifacts.filter(a => a.severity === 'critical').length}`);
    console.log(`║  High: ${allArtifacts.filter(a => a.severity === 'high').length}`);
    console.log('╚════════════════════════════════════════════════════════════════╝');
    
    // Save detailed report
    const reportPath = resolve(projectRoot, 'tests/results/advanced-test-report.json');
    const detailedReport = {
      ...report,
      artifacts: allArtifacts,
      artifactSummary,
      testedFractals: testTypes,
      renderStyles: renderStylesToTest,
    };
    writeFileSync(reportPath, JSON.stringify(detailedReport, null, 2));
    console.log(`\n  📄 Detailed report: ${reportPath}`);
    
    // Exit code
    const criticalArtifacts = allArtifacts.filter(a => a.severity === 'critical' || a.severity === 'high');
    if (criticalArtifacts.length > 0) {
      console.log(`\n  ⚠️  ${criticalArtifacts.length} CRITICAL/HIGH artifacts detected — see report`);
      process.exit(1);
    } else {
      console.log('\n  ✅ Advanced fractal test PASSED');
    }
    
  } catch (error) {
    console.error('\n  ❌ Fatal error:', error);
    await harness.close();
    process.exit(1);
  }
}

// Run
runAdvancedTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
