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
    case 'fractalSpire': return 76;
    case 'deJongAttractor': return 77;
    case 'pickoverAttractor': return 78;
    case 'vicsekFractal': return 79;
    case 'mandelbar': return 80;
    case 'weierstrass3D': return 81;
    case 'popcornFunction': return 82;
    case 'bedheadAttractor': return 83;
    case 'fourSpotAttractor': return 84;
    case 'svenssonAttractor': return 85;
    // ADDITIONAL TYPES from categories (were missing, causing black screens)
    case 'burningShip': return 27; // Map to burningShip3D
    case 'chenAttractor': return 73; // Map to rosslerAttractor (similar)
    case 'dadrasAttractor': return 73; // Map to rosslerAttractor (similar)
    case 'dlAggregate': return 33; // Map to dlaCluster
    case 'fibonacciSphere': return 22; // Map to fibonacciSnowflake
    case 'goldenSpiral': return 22; // Map to fibonacciSnowflake
    case 'ifsFractal': return 25; // Map to dragonCurveIFS
    case 'mandala': return 0; // Map to phyllotaxis (closest)
    case 'newtonFractal': return 28; // Map to newtonBasins
    case 'penroseTiling': return 10; // Map to quasicrystal
    case 'percolationCluster': return 33; // Map to dlaCluster
    case 'perlinNoise': return 58; // Map to sphericalHarmonics
    case 'platonicSolids': return 6; // Map to icosahedron
    case 'randomTerrain': return 58; // Map to sphericalHarmonics
    case 'schwarzSurface': return 50; // Map to schwarzP
    case 'sierpinskiTriangle': return 14; // Map to sierpinskiOcta
    case 'sprottAttractor': return 77; // Map to deJongAttractor (similar)
    case 'torusKnot': return 57; // Map to goldenKnot
    case 'worleyNoise': return 60; // Map to reactionDiffusion
    // 4D POLYTOPES (104-108)
    case 'tesseract': return 104;
    case '120Cell': return 105;
    case '600Cell': return 106;
    case '24Cell': return 107;
    case '5Cell': return 108;
    // HIGHER-DIMENSIONAL MANIFOLDS (109-112)
    case 'kleinBottle': return 109;
    case 'projectivePlane': return 110;
    case 'mobiusStrip': return 111;
    case 'torusKnot4D': return 112;
    // FRACTAL FLAMES (113-125)
    case 'flameSinusoidal': return 113;
    case 'flameSpherical': return 114;
    case 'flameSwirl': return 115;
    case 'flameHorseshoe': return 116;
    case 'flameButterfly': return 117;
    case 'flameHeart': return 118;
    case 'flameSpiral': return 119;
    case 'flameHyperbolic': return 120;
    case 'flameDiamond': return 121;
    case 'flameWaves': return 122;
    case 'flamePopcorn': return 123;
    case 'flameRings': return 124;
    case 'flameFan': return 125;
    // ADVANCED IFS (126-130)
    case 'ifs3DTree': return 126;
    case 'ifs3DFern': return 127;
    case 'ifs3DSierpinski': return 128;
    case 'ifs3DCantor': return 129;
    case 'ifs3DKoch': return 130;
    
    // MANDELBROT VARIATIONS (131-140)
    case 'mandelbrotVariant1': return 131;
    case 'mandelbrotVariant2': return 132;
    case 'mandelbrotVariant3': return 133;
    case 'mandelbrotVariant4': return 134;
    case 'mandelbrotVariant5': return 135;
    case 'mandelbrotVariant6': return 136;
    case 'mandelbrotVariant7': return 137;
    case 'mandelbrotVariant8': return 138;
    case 'mandelbrotVariant9': return 139;
    case 'mandelbrotVariant10': return 140;
    
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
