/**
 * Curated mathematical compatibility matrix for harmonic hybrid breeding.
 * Each fractal type has 3-5 compatible partners and preferred composite ops.
 * Extracted from NeuroAestheticsEngine.ts to reduce monolith size.
 */
import { FractalType, CompositeOp } from '../types/fractal';

export const COMPATIBLE_HYBRIDS: Record<FractalType, { partners: FractalType[]; ops: CompositeOp[] }> = {
  phyllotaxis: {
    partners: ['apollonian', 'fibonacciSnowflake', 'pythagorasTree3D', 'primeSpiral'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  mandelbulb: {
    partners: ['mandelbox', 'quaternionJulia', 'menger', 'apollonian', 'gyroid'],
    ops: ['smoothUnion', 'smoothMorph', 'fractalLattice', 'domainWarp'],
  },
  quaternionJulia: {
    partners: ['mandelbulb', 'quaternionMandelbrot', 'burningShip3D', 'apollonian'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  apollonian: {
    partners: ['phyllotaxis', 'mandelbulb', 'kleinianLimit', 'antoineNecklace'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  spiralTunnel: {
    partners: ['eulerTotientSpiral', 'cliffordKlein', 'mandelbulb', 'gyroid'],
    ops: ['smoothMorph', 'smoothUnion', 'goldenSpiralFold'],
  },
  mandelbox: {
    partners: ['mandelbulb', 'jerusalemCube', 'icosahedral', 'sierpinskiOcta', 'gyroid'],
    ops: ['smoothMorph', 'smoothUnion', 'smoothCarve', 'domainWarp'],
  },
  icosahedral: {
    partners: ['poincareSphere', 'sierpinskiOcta', 'quasicrystal', 'fibonacciSnowflake'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  menger: {
    partners: ['jerusalemCube', 'mandelbulb', 'mandelbox', 'sierpinskiOcta', 'gyroid'],
    ops: ['smoothUnion', 'smoothMorph', 'smoothCarve'],
  },
  gyroid: {
    partners: ['neoviusMinimal', 'quasicrystal', 'mandelbox', 'calabiYau', 'hopfFibration'],
    ops: ['smoothMorph', 'smoothUnion', 'fractalLattice', 'smoothCarve'],
  },
  primeSpiral: {
    partners: ['eulerTotientSpiral', 'riemannZeta', 'gaussianPrimes', 'phyllotaxis'],
    ops: ['smoothUnion', 'smoothMorph', 'quantumResonance'],
  },
  quasicrystal: {
    partners: ['icosahedral', 'gyroid', 'poincareSphere', 'hofstadterButterfly'],
    ops: ['smoothUnion', 'smoothMorph', 'fractalLattice'],
  },
  hopfFibration: {
    partners: ['cliffordTorus4D', 'cliffordKlein', 'poincareSphere', 'antoineNecklace'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  calabiYau: {
    partners: ['cliffordTorus4D', 'riemannZeta', 'hopfFibration', 'cliffordKlein', 'gyroid'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  riemannZeta: {
    partners: ['calabiYau', 'newtonBasins', 'primeSpiral', 'hofstadterButterfly'],
    ops: ['smoothMorph', 'smoothUnion', 'quantumResonance'],
  },
  sierpinskiOcta: {
    partners: ['icosahedral', 'fibonacciSnowflake', 'menger', 'jerusalemCube'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  cliffordKlein: {
    partners: ['cliffordTorus4D', 'hopfFibration', 'spiralTunnel', 'antoineNecklace'],
    ops: ['smoothMorph', 'smoothUnion', 'goldenSpiralFold'],
  },
  poincareSphere: {
    partners: ['hopfFibration', 'icosahedral', 'cliffordTorus4D', 'calabiYau'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  gaussianPrimes: {
    partners: ['primeSpiral', 'neoviusMinimal', 'eulerTotientSpiral', 'quasicrystal'],
    ops: ['smoothUnion', 'smoothMorph', 'fractalLattice'],
  },
  neoviusMinimal: {
    partners: ['gyroid', 'gaussianPrimes', 'quasicrystal', 'jerusalemCube'],
    ops: ['smoothMorph', 'smoothUnion', 'fractalLattice'],
  },
  eulerTotientSpiral: {
    partners: ['primeSpiral', 'spiralTunnel', 'gaussianPrimes', 'phyllotaxis'],
    ops: ['smoothUnion', 'smoothMorph', 'goldenSpiralFold'],
  },
  cliffordTorus4D: {
    partners: ['hopfFibration', 'calabiYau', 'cliffordKlein', 'poincareSphere'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  kleinianLimit: {
    partners: ['apollonian', 'poincareSphere', 'quasicrystal', 'primeSpiral'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  fibonacciSnowflake: {
    partners: ['phyllotaxis', 'icosahedral', 'apollonian', 'dragonCurveIFS'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  quaternionMandelbrot: {
    partners: ['quaternionJulia', 'mandelbulb', 'burningShip3D', 'newtonBasins'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  hilbertCurve3D: {
    partners: ['menger', 'dragonCurveIFS', 'jerusalemCube', 'dlaCluster'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  dragonCurveIFS: {
    partners: ['pythagorasTree3D', 'hilbertCurve3D', 'fibonacciSnowflake', 'dlaCluster'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  pythagorasTree3D: {
    partners: ['dragonCurveIFS', 'phyllotaxis', 'dlaCluster', 'fibonacciSnowflake'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  burningShip3D: {
    partners: ['mandelbulb', 'quaternionMandelbrot', 'menger', 'newtonBasins'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  newtonBasins: {
    partners: ['quaternionJulia', 'riemannZeta', 'mandelbulb', 'apollonian'],
    ops: ['smoothMorph', 'smoothUnion', 'quantumResonance'],
  },
  jerusalemCube: {
    partners: ['menger', 'mandelbox', 'sierpinskiOcta', 'neoviusMinimal'],
    ops: ['smoothUnion', 'smoothMorph', 'smoothCarve'],
  },
  lorenzAttractor: {
    partners: ['hofstadterButterfly', 'dlaCluster', 'cliffordKlein', 'primeSpiral'],
    ops: ['smoothMorph', 'smoothUnion', 'domainWarp'],
  },
  hofstadterButterfly: {
    partners: ['lorenzAttractor', 'riemannZeta', 'quasicrystal', 'newtonBasins'],
    ops: ['smoothMorph', 'smoothUnion', 'quantumResonance'],
  },
  antoineNecklace: {
    partners: ['hopfFibration', 'cliffordTorus4D', 'apollonian', 'kleinianLimit'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  dlaCluster: {
    partners: ['lorenzAttractor', 'pythagorasTree3D', 'primeSpiral', 'dragonCurveIFS'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  rosslerHyperchaos: {
    partners: ['cliffordAttractor', 'lorenzAttractor', 'mandelbulb', 'belousovWaves'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  cliffordAttractor: {
    partners: ['rosslerHyperchaos', 'cliffordKlein', 'hopfFibration', 'quasicrystal'],
    ops: ['smoothUnion', 'smoothMorph', 'goldenSpiralFold'],
  },
  abrikosovLattice: {
    partners: ['gyroid', 'neoviusMinimal', 'calabiYau', 'spinFoamNetwork'],
    ops: ['smoothUnion', 'smoothMorph', 'fractalLattice'],
  },
  beltramiPseudosphere: {
    partners: ['poincareSphere', 'apollonian', 'mandelbulb', 'spiralTunnel'],
    ops: ['smoothUnion', 'smoothMorph', 'goldenSpiralFold'],
  },
  spinFoamNetwork: {
    partners: ['abrikosovLattice', 'calabiYau', 'quasicrystal', 'dlaCluster'],
    ops: ['smoothUnion', 'smoothMorph', 'quantumResonance'],
  },
  ramanujanTau: {
    partners: ['riemannZeta', 'primeSpiral', 'eulerTotientSpiral', 'gaussianPrimes'],
    ops: ['smoothUnion', 'smoothMorph', 'quantumResonance'],
  },
  belousovWaves: {
    partners: ['rosslerHyperchaos', 'phyllotaxis', 'spiralTunnel', 'abrikosovLattice'],
    ops: ['smoothUnion', 'smoothMorph', 'domainWarp'],
  },
  henonAttractor: { partners: ['lorenzAttractor', 'aizawaAttractor', 'cliffordAttractor'], ops: ['smoothUnion', 'smoothMorph'] },
  aizawaAttractor: { partners: ['henonAttractor', 'thomasAttractor', 'rosslerHyperchaos'], ops: ['smoothUnion', 'domainWarp'] },
  thomasAttractor: { partners: ['halvorsenAttractor', 'aizawaAttractor', 'cliffordAttractor'], ops: ['smoothUnion', 'smoothMorph'] },
  halvorsenAttractor: { partners: ['thomasAttractor', 'lorenzAttractor', 'henonAttractor'], ops: ['smoothUnion', 'domainWarp'] },
  juliaSet3D: { partners: ['mandelbulb', 'quaternionJulia', 'novaFractal', 'multibrot3'], ops: ['smoothUnion', 'smoothMorph', 'smoothCarve'] },
  multibrot3: { partners: ['juliaSet3D', 'mandelbulb', 'quaternionMandelbrot'], ops: ['smoothUnion', 'smoothMorph'] },
  tetrix: { partners: ['sierpinskiOcta', 'menger', 'jerusalemCube'], ops: ['smoothUnion', 'fractalLattice'] },
  gosperCurve: { partners: ['hilbertCurve3D', 'dragonCurveIFS', 'phyllotaxis'], ops: ['smoothUnion', 'domainWarp'] },
  lSystemPlant: { partners: ['phyllotaxis', 'pythagorasTree3D', 'fibonacciSnowflake'], ops: ['smoothUnion', 'goldenSpiralFold'] },
  schwarzP: { partners: ['gyroid', 'neoviusMinimal', 'schwarzD'], ops: ['smoothUnion', 'fractalLattice', 'domainWarp'] },
  schwarzD: { partners: ['schwarzP', 'gyroid', 'neoviusMinimal'], ops: ['smoothUnion', 'fractalLattice'] },
  apollonianGasket: { partners: ['apollonian', 'spherePacking', 'fibonacciSnowflake'], ops: ['smoothUnion', 'smoothCarve'] },
  barnsleyFern3D: { partners: ['lSystemPlant', 'tetrix', 'phyllotaxis'], ops: ['smoothUnion', 'domainWarp'] },
  kleinQuartic: { partners: ['kleinianLimit', 'poincareSphere', 'cliffordKlein'], ops: ['smoothUnion', 'quantumResonance'] },
  spherePacking: { partners: ['apollonianGasket', 'apollonian', 'dlaCluster'], ops: ['smoothUnion', 'fractalLattice'] },
  novaFractal: { partners: ['juliaSet3D', 'newtonBasins', 'mandelbulb'], ops: ['smoothUnion', 'smoothMorph'] },
  goldenKnot: { partners: ['hopfFibration', 'cliffordTorus4D', 'cliffordKlein'], ops: ['smoothUnion', 'goldenSpiralFold'] },
  sphericalHarmonics: { partners: ['hopfFibration', 'poincareSphere', 'riemannZeta'], ops: ['smoothUnion', 'quantumResonance'] },
  reactionDiffusion: { partners: ['belousovWaves', 'dlaCluster', 'gyroid'], ops: ['smoothUnion', 'domainWarp', 'fractalLattice'] },
  fractalCross: { partners: ['menger', 'sierpinskiCarpet', 'tetrix'], ops: ['smoothUnion', 'fractalLattice'] },
  sierpinskiCarpet: { partners: ['menger', 'fractalCross', 'cantorDust'], ops: ['smoothUnion', 'fractalLattice'] },
  tricorn: { partners: ['mandelbulb', 'juliaSet3D', 'novaFractal'], ops: ['smoothUnion', 'domainWarp'] },
  chuaCircuit: { partners: ['lorenzAttractor', 'rosslerAttractor', 'rosslerHyperchaos'], ops: ['smoothUnion', 'domainWarp'] },
  standardMap: { partners: ['henonAttractor', 'ikedaMap', 'cliffordAttractor'], ops: ['smoothUnion', 'domainWarp'] },
  ikedaMap: { partners: ['standardMap', 'henonAttractor', 'cliffordAttractor'], ops: ['smoothUnion', 'domainWarp'] },
  kochSnowflake3D: { partners: ['gosperCurve', 'sierpinskiCarpet', 'tetrix'], ops: ['smoothUnion', 'fractalLattice'] },
  cantorDust: { partners: ['sierpinskiCarpet', 'apollonianGasket', 'spherePacking'], ops: ['smoothUnion', 'fractalLattice'] },
  phoenixFractal: { partners: ['juliaSet3D', 'mandelbulb', 'novaFractal'], ops: ['smoothUnion', 'domainWarp'] },
  fatouSet: { partners: ['juliaSet3D', 'newtonBasins', 'mandelbulb'], ops: ['smoothUnion', 'domainWarp'] },
  e8Lattice: { partners: ['quasicrystal', 'apollonian', 'poincareSphere'], ops: ['smoothUnion', 'fractalLattice'] },
  chladniFigures: { partners: ['sphericalHarmonics', 'gyroid', 'schwarzP'], ops: ['smoothUnion', 'domainWarp'] },
  fitzHugh: { partners: ['lorenzAttractor', 'rosslerAttractor', 'belousovWaves'], ops: ['smoothUnion', 'domainWarp'] },
  rosslerAttractor: { partners: ['lorenzAttractor', 'chuaCircuit', 'rosslerHyperchaos'], ops: ['smoothUnion', 'domainWarp'] },
  duffingAttractor: { partners: ['lorenzAttractor', 'chuaCircuit', 'rosslerAttractor'], ops: ['smoothUnion', 'domainWarp'] },
  logisticBifurcation: { partners: ['henonAttractor', 'mandelbulb', 'hofstadterButterfly'], ops: ['smoothUnion', 'domainWarp'] },
  fractalSpire: { partners: ['mandelbulb', 'spiralTunnel', 'quaternionJulia'], ops: ['smoothUnion', 'domainWarp', 'goldenSpiralFold'] },
  deJongAttractor: { partners: ['pickoverAttractor', 'svenssonAttractor', 'cliffordAttractor'], ops: ['smoothMorph', 'smoothUnion'] },
  pickoverAttractor: { partners: ['deJongAttractor', 'bedheadAttractor', 'fourSpotAttractor'], ops: ['smoothMorph', 'smoothUnion'] },
  vicsekFractal: { partners: ['sierpinskiCarpet', 'cantorDust', 'menger'], ops: ['smoothUnion', 'smoothCarve', 'fractalLattice'] },
  mandelbar: { partners: ['mandelbulb', 'tricorn', 'burningShip3D'], ops: ['smoothUnion', 'smoothMorph', 'domainWarp'] },
  weierstrass3D: { partners: ['gyroid', 'neoviusMinimal', 'schwarzP'], ops: ['smoothMorph', 'smoothUnion', 'fractalLattice'] },
  popcornFunction: { partners: ['hopfFibration', 'cliffordTorus4D', 'spiralTunnel'], ops: ['domainWarp', 'smoothMorph'] },
  bedheadAttractor: { partners: ['lorenzAttractor', 'rosslerAttractor', 'fourSpotAttractor'], ops: ['smoothMorph', 'smoothUnion'] },
  fourSpotAttractor: { partners: ['bedheadAttractor', 'halvorsenAttractor', 'thomasAttractor'], ops: ['smoothMorph', 'smoothUnion'] },
  svenssonAttractor: { partners: ['deJongAttractor', 'pickoverAttractor', 'cliffordAttractor'], ops: ['smoothMorph', 'smoothUnion'] },
  // 4D POLYTOPES
  tesseract: { partners: ['mandelbulb', 'cliffordTorus4D', 'hopfFibration'], ops: ['smoothUnion', 'domainWarp'] },
  '120Cell': { partners: ['icosahedral', 'poincareSphere', 'apollonian'], ops: ['smoothUnion', 'smoothMorph'] },
  '600Cell': { partners: ['icosahedral', 'apollonian', 'antoineNecklace'], ops: ['smoothUnion', 'domainWarp'] },
  '24Cell': { partners: ['menger', 'jerusalemCube', 'sierpinskiOcta'], ops: ['smoothUnion', 'smoothCarve'] },
  '5Cell': { partners: ['sierpinskiOcta', 'tetrix', 'menger'], ops: ['smoothUnion', 'fractalLattice'] },
  // HIGHER-DIMENSIONAL MANIFOLDS
  kleinBottle: { partners: ['cliffordTorus4D', 'hopfFibration', 'mobiusStrip'], ops: ['smoothMorph', 'domainWarp'] },
  projectivePlane: { partners: ['poincareSphere', 'cliffordKlein', 'kleinQuartic'], ops: ['smoothUnion', 'domainWarp'] },
  mobiusStrip: { partners: ['cliffordTorus4D', 'goldenKnot', 'hopfFibration'], ops: ['smoothMorph', 'domainWarp'] },
  torusKnot4D: { partners: ['hopfFibration', 'cliffordTorus4D', 'goldenKnot'], ops: ['smoothUnion', 'domainWarp'] },
  // FRACTAL FLAMES
  flameSinusoidal: { partners: ['flameSpherical', 'flameSwirl', 'mandelbulb'], ops: ['smoothMorph', 'domainWarp'] },
  flameSpherical: { partners: ['flameSinusoidal', 'flameHorseshoe', 'flameHeart'], ops: ['smoothUnion', 'domainWarp'] },
  flameSwirl: { partners: ['flameSinusoidal', 'flameButterfly', 'gyroid'], ops: ['smoothMorph', 'domainWarp'] },
  flameHorseshoe: { partners: ['flameSpherical', 'flameRings', 'mandelbulb'], ops: ['smoothUnion', 'domainWarp'] },
  flameButterfly: { partners: ['flameSwirl', 'flameHeart', 'phyllotaxis'], ops: ['smoothMorph', 'domainWarp'] },
  flameHeart: { partners: ['flameButterfly', 'flameSpherical', 'apollonian'], ops: ['smoothUnion', 'domainWarp'] },
  flameSpiral: { partners: ['spiralTunnel', 'eulerTotientSpiral', 'flameSinusoidal'], ops: ['smoothMorph', 'goldenSpiralFold'] },
  flameHyperbolic: { partners: ['poincareSphere', 'beltramiPseudosphere', 'kleinQuartic'], ops: ['smoothUnion', 'domainWarp'] },
  flameDiamond: { partners: ['menger', 'jerusalemCube', 'flameRings'], ops: ['smoothUnion', 'smoothCarve'] },
  flameWaves: { partners: ['belousovWaves', 'reactionDiffusion', 'flamePopcorn'], ops: ['smoothMorph', 'domainWarp'] },
  flamePopcorn: { partners: ['popcornFunction', 'flameWaves', 'phyllotaxis'], ops: ['smoothUnion', 'domainWarp'] },
  flameRings: { partners: ['flameHorseshoe', 'flameDiamond', 'hopfFibration'], ops: ['smoothUnion', 'domainWarp'] },
  flameFan: { partners: ['flameSinusoidal', 'flameSwirl', 'sphericalHarmonics'], ops: ['smoothMorph', 'domainWarp'] },
  // ADVANCED IFS
  ifs3DTree: { partners: ['tetrix', 'menger', 'sierpinskiOcta'], ops: ['smoothUnion', 'fractalLattice'] },
  ifs3DFern: { partners: ['barnsleyFern3D', 'lSystemPlant', 'phyllotaxis'], ops: ['smoothUnion', 'domainWarp'] },
  ifs3DSierpinski: { partners: ['sierpinskiOcta', 'sierpinskiCarpet', 'tetrix'], ops: ['smoothUnion', 'smoothCarve'] },
  ifs3DCantor: { partners: ['cantorDust', 'sierpinskiCarpet', 'vicsekFractal'], ops: ['smoothUnion', 'fractalLattice'] },
  ifs3DKoch: { partners: ['kochSnowflake3D', 'gosperCurve', 'apollonianGasket'], ops: ['smoothUnion', 'fractalLattice'] },
};
