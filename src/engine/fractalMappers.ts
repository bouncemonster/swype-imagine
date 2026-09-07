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
