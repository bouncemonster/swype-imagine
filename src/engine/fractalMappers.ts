export function getFractalIndex(type?: string): number {
  switch (type) {
    case 'phyllotaxis': return 0;
    case 'mandelbulb': return 1;
    case 'quaternionJulia': return 2;
    case 'apollonian': return 3;
    case 'spiralTunnel': return 4;
    case 'mandelbox': return 5;
    case 'icosahedral': return 6;
    case 'menger': return 7;
    case 'gyroid': return 8;
    case 'primeSpiral': return 9;
    case 'quasicrystal': return 10;
    case 'hopfFibration': return 11;
    case 'calabiYau': return 12;
    case 'riemannZeta': return 13;
    case 'sierpinskiOcta': return 14;
    case 'cliffordKlein': return 15;
    case 'poincareSphere': return 16;
    case 'gaussianPrimes': return 17;
    case 'neoviusMinimal': return 18;
    case 'eulerTotientSpiral': return 19;
    case 'cliffordTorus4D': return 20;
    case 'kleinianLimit': return 21;
    case 'fibonacciSnowflake': return 22;
    case 'quaternionMandelbrot': return 23;
    case 'hilbertCurve3D': return 24;
    case 'dragonCurveIFS': return 25;
    case 'pythagorasTree3D': return 26;
    case 'burningShip3D': return 27;
    case 'newtonBasins': return 28;
    case 'jerusalemCube': return 29;
    case 'lorenzAttractor': return 30;
    case 'hofstadterButterfly': return 31;
    case 'antoineNecklace': return 32;
    case 'dlaCluster': return 33;
    case 'rosslerHyperchaos': return 34;
    case 'cliffordAttractor': return 35;
    case 'abrikosovLattice': return 36;
    case 'beltramiPseudosphere': return 37;
    case 'spinFoamNetwork': return 38;
    case 'ramanujanTau': return 39;
    case 'belousovWaves': return 40;
    case 'henonAttractor': return 41;
    case 'aizawaAttractor': return 42;
    case 'thomasAttractor': return 43;
    case 'halvorsenAttractor': return 44;
    case 'juliaSet3D': return 45;
    case 'multibrot3': return 46;
    case 'tetrix': return 47;
    case 'gosperCurve': return 48;
    case 'lSystemPlant': return 49;
    case 'schwarzP': return 50;
    case 'schwarzD': return 51;
    case 'apollonianGasket': return 52;
    case 'barnsleyFern3D': return 53;
    case 'kleinQuartic': return 54;
    case 'spherePacking': return 55;
    case 'novaFractal': return 56;
    case 'goldenKnot': return 57;
    case 'sphericalHarmonics': return 58;
    case 'fractalCross': return 59;
    case 'reactionDiffusion': return 60;
    case 'sierpinskiCarpet': return 61;
    case 'tricorn': return 62;
    case 'chuaCircuit': return 63;
    case 'standardMap': return 64;
    case 'ikedaMap': return 65;
    case 'kochSnowflake3D': return 66;
    case 'cantorDust': return 67;
    case 'phoenixFractal': return 68;
    case 'fatouSet': return 69;
    case 'e8Lattice': return 70;
    case 'chladniFigures': return 71;
    case 'fitzHugh': return 72;
    case 'rosslerAttractor': return 73;
    case 'duffingAttractor': return 74;
    case 'logisticBifurcation': return 75;
    default: return 0;
  }
}

export function getCompositeOpIndex(op?: string): number {
  switch (op) {
    case 'smoothMorph': return 0;
    case 'smoothUnion': return 1;
    case 'smoothIntersection': return 2;
    case 'smoothCarve': return 3;
    case 'domainWarp': return 4;
    case 'quantumResonance': return 5;
    case 'fractalLattice': return 6;
    case 'goldenSpiralFold': return 7;
    default: return 1;
  }
}

export function getCameraModeIndex(mode?: string): number {
  switch (mode) {
    case 'orbit': return 0;
    case 'flyThrough': return 1;
    case 'goldenSpiral': return 2;
    case 'kelvinInvert': return 3;
    default: return 0;
  }
}

export function getSliceAxisIndex(axis?: string): number {
  switch (axis) {
    case 'golden': return 0;
    case 'x': return 1;
    case 'y': return 2;
    case 'z': return 3;
    default: return 0;
  }
}

export function getRenderStyleIndex(style?: string): number {
  switch (style) {
    case 'solid': return 0;
    case 'xray': return 1;
    case 'topo':
    case 'sonar':
    case 'lidar': return 2;
    case 'hologram': return 3;
    case 'iridescent': return 4;
    case 'quantum': return 5;
    case 'gemstone': return 6;
    default: return 0;
  }
}
