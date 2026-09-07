export type FractalType = 
  | 'phyllotaxis'          // 0: Sacred Fibonacci & Golden Spiral 3D
  | 'mandelbulb'           // 1: Golden Ratio 3D Mandelbulb
  | 'quaternionJulia'      // 2: 4D Golden Quaternion Julia slice
  | 'apollonian'           // 3: Golden Inversion Sphere Packing
  | 'spiralTunnel'         // 4: Infinite Logarithmic Phi Zoom Tunnel
  | 'mandelbox'            // 5: Golden Folding Mandelbox 3D
  | 'icosahedral'          // 6: Sacred Golden Icosahedron / Dodecahedron IFS
  | 'menger'               // 7: Golden Jerusalem / Menger Sponge
  | 'gyroid'               // 8: Golden Gyroid Minimal Surface (TPMS)
  | 'primeSpiral'          // 9: Sachs & Ulam Golden Prime Spiral (Euler Polynomials)
  | 'quasicrystal'         // 10: 3D Penrose & Shechtman Icosahedral Quasicrystal
  | 'hopfFibration'        // 11: Hopf Fibration & Clifford Golden Torus S³→S²
  | 'calabiYau'            // 12: Quintic Calabi-Yau 3-Fold Manifold
  | 'riemannZeta'          // 13: Riemann Zeta Quantum Chaos Resonator
  | 'sierpinskiOcta'       // 14: Golden Sierpinski Octahedral Star
  | 'cliffordKlein'        // 15: 4D Clifford-Klein Golden Helicoid Knot
  | 'poincareSphere'       // 16: Poincaré Homology Dodecahedral 3-Manifold
  | 'gaussianPrimes'       // 17: Gaussian Primes Lattice Z[i] (p = a² + b²)
  | 'neoviusMinimal'       // 18: Neovius-Schoen TPMS Zero-Mean Curvature Minimal Surface
  | 'eulerTotientSpiral'   // 19: Euler Totient φ(n) & Archimedean Prime Spiral
  | 'cliffordTorus4D'      // 20: 4D Flat Clifford Torus in S³ Stereographic Projection
  | 'kleinianLimit'        // 21: Kleinian Group Schottky Limit Set (Möbius Inversions)
  | 'fibonacciSnowflake'   // 22: Golden Fibonacci Snowflake IFS 3D
  | 'quaternionMandelbrot'// 23: 4D Quaternion Mandelbrot Set Golden Slices
  | 'hilbertCurve3D'      // 24: 3D Space-Filling Hilbert-Peano L-System
  | 'dragonCurveIFS'      // 25: Harter-Heighway Golden Dragon Curve L-System
  | 'pythagorasTree3D'    // 26: 3D Branching Pythagorean Tree IFS
  | 'burningShip3D'       // 27: 3D Algebraic Burning Ship Fractal (|Re(z)| + i|Im(z)|)
  | 'newtonBasins'        // 28: 3D Newton-Raphson Complex Roots Basin of Attraction
  | 'jerusalemCube'       // 29: 3D Jerusalem Cube with Golden Ratio Cross Cavities
  | 'lorenzAttractor'     // 30: 3D Lorenz Strange Attractor Chaotic Raymarched Flow
  | 'hofstadterButterfly' // 31: 3D Quantum Hofstadter Butterfly Electron Energy Bands
  | 'antoineNecklace'     // 32: 3D Antoine's Necklace Wild Topological Linked Tori
  | 'dlaCluster'          // 33: 3D Diffusion-Limited Aggregation (DLA) Dendritic Crystal
  | 'rosslerHyperchaos'   // 34: 4D Hyperchaotic Rössler Attractor flow tube
  | 'cliffordAttractor'   // 35: Clifford-Pickover 4D Chaotic Dynamic Manifold
  | 'abrikosovLattice'    // 36: Type-II Superconductor Quantum Magnetic Vortex Flux Lattice
  | 'beltramiPseudosphere'// 37: Constant Negative Gaussian Curvature Lobachevsky Hyperbolic Surface
  | 'spinFoamNetwork'     // 38: Loop Quantum Gravity Penrose Spin-Network & Quantum Foam
  | 'ramanujanTau'        // 39: Ramanujan Modular Discriminant Delta(tau) Resonator
  | 'belousovWaves'       // 40: Belousov-Zhabotinsky Non-Equilibrium Chemical Spiral Waves
  | 'henonAttractor'      // 41: Hénon 3D Strange Attractor (folded band chaos)
  | 'aizawaAttractor'     // 42: Aizawa Toroidal Chaotic Attractor
  | 'thomasAttractor'     // 43: Thomas Cyclically Symmetric C3 Attractor
  | 'halvorsenAttractor'  // 44: Halvorsen 3-Fold Chaotic Attractor
  | 'juliaSet3D'          // 45: Classic Julia Set 3D (c = -0.7 + 0.27i)
  | 'multibrot3'          // 46: Multibrot z³+c Cubic 3D Generalization
  | 'tetrix'              // 47: Tetrix (Sierpinski Tetrahedron 3D IFS)
  | 'gosperCurve'         // 48: Gosper Island (hexagonal space-filling fractal)
  | 'lSystemPlant'        // 49: L-System Plant (3D phyllotactic branching)
  | 'schwarzP'            // 50: Schwarz P Minimal Surface (cubic TPMS)
  | 'schwarzD'            // 51: Schwarz D Diamond Surface (TPMS)
  | 'apollonianGasket'    // 52: Apollonian Gasket (recursive sphere packing)
  | 'barnsleyFern3D'      // 53: Barnsley Fern 3D (IFS affine transforms)
  | 'kleinQuartic'        // 54: Klein Quartic Surface (genus-3 Hurwitz)
  | 'spherePacking'       // 55: Sphere Packing (FCC dense packing fractal)
  | 'novaFractal'         // 56: Nova Fractal (Newton + Mandelbrot hybrid)
  | 'goldenKnot'          // 57: Golden Knot (torus knot with golden winding)
  | 'sphericalHarmonics'  // 58: Spherical Harmonics (quantum orbital shapes)
  | 'reactionDiffusion';  // 59: Reaction-Diffusion (Gray-Scott Turing pattern)

export type RenderStyle = 
  | 'solid'       // 0: PBR Solid with AO, Soft Shadows & Subsurface Scattering (SSS)
  | 'xray'        // 1: Volumetric Tomographic X-Ray & Internal Skeletons
  | 'topo'        // 2: Topographic Curvature & Normal Contour Visualization
  | 'sonar'       // 2 (alias): Topographic Curvature & Normal Contour Visualization
  | 'lidar'       // 2 (alias): Topographic Curvature & Normal Contour Visualization
  | 'hologram'    // 3: True Volumetric Holographic Projection with Chromatic Aberration
  | 'iridescent'  // 4: Thin-Film Interference with Spectral Dispersion
  | 'quantum'     // 5: Quantum Field Energy Visualization with Standing Wave Interference
  | 'gemstone';   // 6: Physical Refraction with Beer-Lambert + Caustics

export type CompositeOp = 
  | 'smoothMorph'        // 0: Topological continuous morphing between shapes
  | 'smoothUnion'        // 1: Inigo Quilez Polynomial Smooth-Min (smin)
  | 'smoothIntersection' // 2: Smooth Intersection (smax)
  | 'smoothCarve'        // 3: Smooth Tunneling/Carving (ssub)
  | 'domainWarp'         // 4: Recursive Space Folding (Domain Warp Injection)
  | 'quantumResonance'   // 5: Harmonic Multi-Scale Interference
  | 'fractalLattice'     // 6: Interlaced TPMS / Gyroid Cellular Lattice
  | 'goldenSpiralFold';  // 7: Golden Logarithmic Spiral Entanglement

export type CameraMode = 
  | 'orbit'          // Outside-In: Spherical orbit
  | 'flyThrough'     // Inside-Out: Free 3D flight inside corridors with anti-clip SDF repulsion
  | 'goldenSpiral'   // Autonomous dive along logarithmic golden spiral into the fractal core
  | 'kelvinInvert';  // Inside-Out Kelvin Inversion (spherical conformal inversion p -> p / |p|^2)

export interface ColorPalette {
  id: string;
  name: string;
  primary: [number, number, number];    // RGB in [0, 1]
  secondary: [number, number, number];
  accent: [number, number, number];
  ambient: [number, number, number];
}

export interface FractalParams {
  type: FractalType;
  hybridType?: FractalType;    // Secondary fractal architecture
  tertiaryType?: FractalType;  // Tertiary fractal architecture
  compositeOp: CompositeOp;    // Mathematical overlay algebra
  hybridBlend: number;         // Secondary layer influence (0.0 to 1.0)
  tertiaryBlend: number;       // Tertiary layer influence (0.0 to 1.0)
  smoothK: number;             // Smooth blend radius factor
  warpStrength: number;        // Spatial folding intensity
  octaveLayers: number;        // 1, 2, 3, or 4 Fibonacci hierarchical scales
  boxFold: number;             // 0.5 to 2.5 Mandelbox folding factor
  sphereFold: number;          // 0.2 to 1.6 Apollonian/spherical fold ratio
  interiorCut: number;         // 0.0 to 1.0 Hollow internal chamber carving
  paletteId: string;
  customPalette?: ColorPalette;
  iterations: number;          // e.g. 14 - 36
  phiMultiplier: number;       // Fine tune around 1.618034
  morphSpeed: number;          // Animation speed
  glowIntensity: number;       // Volumetric glow
  detailLevel: number;         // Raymarching step threshold
  zoom: number;                // Camera zoom distance
  rotX: number;                // Manual orbit angle X
  rotY: number;                // Manual orbit angle Y
  autoRotate: boolean;         // Auto spin
  autoRotateSpeed: number;     // Auto spin rate
  targetFps: number;           // Target FPS: 250, 240, 165, 144, 120, 60, or 0 (uncapped)
  enableAudio: boolean;        // Phi-harmonic drone & interior cavity resonance
  audioVolume: number;         // Master harmonic volume 0.0 - 1.0
  audioTuning: 'phi432' | 'fibonacci' | 'zenChimes'; // Harmonic sacred scale

  // Inside-Out & Immersion Technologies
  cameraMode: CameraMode;      // 'orbit' | 'flyThrough' | 'goldenSpiral' | 'kelvinInvert'
  camPosX: number;             // Free camera X in 3D interior
  camPosY: number;             // Free camera Y in 3D interior
  camPosZ: number;             // Free camera Z in 3D interior
  slicePlane: number;          // 0.0 = off, 0.01 - 1.0 = cross-section slice exposing inner chambers
  sliceAxis: 'golden' | 'x' | 'y' | 'z'; // Multi-axis tomography plane
  renderStyle: RenderStyle;    // Visual rendering modality: 7 high-tech styles
  feedScrollMode?: boolean;    // Whether wheel/swipe scrolls the 3D feed or zooms optical lens
  headlampPower: number;       // 0.0 - 2.0 camera flashlight for inner dark halls
  volumetricFog: number;       // 0.0 - 2.0 inner ether atmosphere
  macroMode: boolean;          // Ultra-macro nanoscale focus
  probeActive: boolean;        // Interactive 3D spatial probe & dimension inspector
  drsEnabled: boolean;         // Dynamic resolution scaling to guarantee 60-250 FPS
  paletteRotation: boolean;    // Dynamic smooth palette cycle
}

export interface TelemetryData {
  fps: number;
  avgFps: number;
  frameTimeMs: number;
  onePercentLow: number;
  backend: 'WebGPU (WGSL)' | 'WebGL2 (GLSL)' | 'Initializing...';
  adapterName: string;
  resolution: [number, number];
  drsScale: number;            // 0.75 - 1.0x
  targetFps: number;
  interiorDistance: number;    // Distance to nearest surface in world units
}

// Genetic Genome for Neuro-Aesthetic Feed (Supports millions of procedural hybrids)
export interface FractalSpecimen {
  id: string;
  seed: number;
  generation: number;
  name: string;
  type: FractalType;
  hybridType: FractalType;     // Secondary layer
  tertiaryType: FractalType;   // Tertiary layer
  compositeOp: CompositeOp;    // Multi-layer overlay algebra
  hybridBlend: number;         // Continuous blend factor
  tertiaryBlend: number;       // Continuous blend factor
  smoothK: number;             // Blend radius
  warpStrength: number;        // Space fold warping
  octaveLayers: number;        // 1 to 4 Fibonacci octaves
  boxFold: number;             // Continuous folding gene
  sphereFold: number;          // Continuous inversion gene
  interiorCut: number;         // Continuous interior carving gene
  palette: ColorPalette;
  iterations: number;
  phiMultiplier: number;
  morphSpeed: number;
  glowIntensity: number;
  zoom: number;
  affinityScore: number;       // 0 to 100 estimated affinity
  dwellTimeSeconds: number;    // How long user enjoyed it
  zoomInteractions: number;    // Deep dives into fractal
  orbitInteractions: number;   // Rotations / angles explored
}
