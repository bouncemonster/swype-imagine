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
  | 'fractalCross'        // 59: Fractal Cross (3D plus-shaped recursive IFS)
  | 'reactionDiffusion'   // 60: Reaction-Diffusion (Gray-Scott Turing pattern)
  | 'sierpinskiCarpet'    // 61: Sierpinski Carpet (IFS, dim ≈ 1.893)
  | 'tricorn'             // 62: Tricorn / Mandelbar (conjugate Mandelbrot)
  | 'chuaCircuit'         // 63: Chua's Circuit Double Scroll Attractor
  | 'standardMap'         // 64: Standard Map (Chirikov-Taylor Hamiltonian chaos)
  | 'ikedaMap'            // 65: Ikeda Map (delay differential system)
  | 'kochSnowflake3D'     // 66: Koch Snowflake 3D (recursive triangular IFS)
  | 'cantorDust'          // 67: Cantor Dust 3D (recursive corner cubes)
  | 'phoenixFractal'      // 68: Phoenix Fractal (memory fractal with z_{n-1} term)
  | 'fatouSet'            // 69: Fatou Set (basin boundary of z²+c)
  | 'e8Lattice'           // 70: E8 Lattice Projection (exceptional Lie group)
  | 'chladniFigures'      // 71: Chladni Figures (vibrational eigenmodes)
  | 'fitzHugh'            // 72: FitzHugh-Nagumo Neural Dynamics
  | 'rosslerAttractor'    // 73: Rössler Attractor (a=0.2, b=0.2, c=5.7)
  | 'duffingAttractor'    // 74: Duffing Attractor (nonlinear oscillator)
  | 'logisticBifurcation'  // 75: Logistic Map Bifurcation (Feigenbaum cascade)
  | 'fractalSpire'         // 76: Fractal Spire (exponential spiral tower e^z+c)
  | 'deJongAttractor'      // 77: DeJong Strange Attractor
  | 'pickoverAttractor'    // 78: Pickover Strange Attractor
  | 'vicsekFractal'        // 79: Vicsek Fractal (3D cross IFS, dim ~1.465)
  | 'mandelbar'            // 80: Mandelbar (Conjugate Mandelbrot)
  | 'weierstrass3D'        // 81: Weierstrass 3D (nowhere-differentiable surface)
  | 'popcornFunction'      // 82: Popcorn Function (Celldoor)
  | 'bedheadAttractor'     // 83: Bedhead 3D Chaotic Attractor
  | 'fourSpotAttractor'    // 84: FourSpot 4-Wing Chaotic Attractor
  | 'svenssonAttractor'    // 85: Svensson Strange Attractor
  // === EXPANSION PACK: Types 86-430 (345 additional fractals) ===
  // Beautiful Fractals (86-95)
  | 'kaleidoscopicIFS'     // 86: Kaleidoscopic IFS Mirror Symmetry
  | 'flowerOfLife'         // 87: Sacred Flower of Life Geometry
  | 'cosmicSpiral'         // 88: Cosmic Golden Spiral Galaxy
  | 'crystalGrowth'        // 89: Crystal Growth Dendritic Formation
  | 'quantumFoam'          // 90: Quantum Spacetime Foam Wheeler
  | 'fractalCoral'         // 91: Fractal Coral Reef Structure
  | 'nebulaCloud'          // 92: Nebula Cloud Interstellar Gas
  | 'hyperbolicTiling'     // 93: Hyperbolic Poincaré Tiling
  | 'organicCell'          // 94: Organic Cell Biological Membrane
  | 'goldenHelix'          // 95: Golden Helix DNA Double Spiral
  // Modern Fractals (96-103)
  | 'mandelbulbPower4'     // 96: Mandelbulb Power 4
  | 'mandelbulbPower12'    // 97: Mandelbulb Power 12
  | 'hybridMandelboxKIFS'  // 98: Hybrid Mandelbox-KIFS
  | 'multibrot3Advanced'   // 99: Advanced Multibrot z³
  | 'fractalFlameIFS'      // 100: Fractal Flame IFS
  | 'amazingBox'           // 101: Amazing Box Folding
  | 'mandelbulbMandelboxHybrid' // 102: Mandelbulb-Mandelbox Hybrid
  | 'mengerMandelboxHybrid' // 103: Menger-Mandelbox Hybrid
  // 4D Polytopes (104-112)
  | 'tesseract'            // 104: 4D Hypercube (Tesseract)
  | '120Cell'              // 105: 4D Dodecahedron (120-Cell)
  | '600Cell'              // 106: 4D Icosahedron (600-Cell)
  | '24Cell'               // 107: 4D Self-Dual Polytope (24-Cell)
  | '5Cell'                // 108: 4D Tetrahedron (5-Cell)
  | 'kleinBottle'          // 109: Non-Orientable Klein Bottle
  | 'projectivePlane'      // 110: Real Projective Plane RP²
  | 'mobiusStrip3D'        // 111: 3D Möbius Strip
  | 'torusKnot4D'          // 112: 4D Torus Knot
  // Fractal Flames (113-125)
  | 'flameSinusoidal'      // 113: Flame Sinusoidal Variation
  | 'flameSpherical'       // 114: Flame Spherical Variation
  | 'flameSwirl'           // 115: Flame Swirl Variation
  | 'flameHorseshoe'       // 116: Flame Horseshoe Variation
  | 'flameButterfly'       // 117: Flame Butterfly Variation
  | 'flameHeart'           // 118: Flame Heart Variation
  | 'flameSpiral'          // 119: Flame Spiral Variation
  | 'flameHyperbolic'      // 120: Flame Hyperbolic Variation
  | 'flameDiamond'         // 121: Flame Diamond Variation
  | 'flameWaves'           // 122: Flame Waves Variation
  | 'flamePopcorn'         // 123: Flame Popcorn Variation
  | 'flameRings'           // 124: Flame Rings Variation
  | 'flameFan'             // 125: Flame Fan Variation
  // Advanced IFS (126-130)
  | 'ifs3DTree'            // 126: 3D Tree IFS
  | 'ifs3DFern'            // 127: 3D Fern IFS
  | 'ifs3DSierpinski'      // 128: 3D Sierpinski IFS
  | 'ifs3DCantor'          // 129: 3D Cantor IFS
  | 'ifs3DKoch'            // 130: 3D Koch IFS
  // Mandelbrot Variants (131-140)
  | 'mandelbrotVariant1'   // 131: Mandelbrot Variant 1
  | 'mandelbrotVariant2'   // 132: Mandelbrot Variant 2
  | 'mandelbrotVariant3'   // 133: Mandelbrot Variant 3
  | 'mandelbrotVariant4'   // 134: Mandelbrot Variant 4
  | 'mandelbrotVariant5'   // 135: Mandelbrot Variant 5
  | 'mandelbrotVariant6'   // 136: Mandelbrot Variant 6
  | 'mandelbrotVariant7'   // 137: Mandelbrot Variant 7
  | 'mandelbrotVariant8'   // 138: Mandelbrot Variant 8
  | 'mandelbrotVariant9'   // 139: Mandelbrot Variant 9
  | 'mandelbrotVariant10'  // 140: Mandelbrot Variant 10
  // Julia Variants (141-190)
  | 'juliaVariant1'        // 141: Julia Variant 1
  | 'juliaVariant2'        // 142: Julia Variant 2
  | 'juliaVariant3'        // 143: Julia Variant 3
  | 'juliaVariant4'        // 144: Julia Variant 4
  | 'juliaVariant5'        // 145: Julia Variant 5
  | 'juliaVariant6'        // 146: Julia Variant 6
  | 'juliaVariant7'        // 147: Julia Variant 7
  | 'juliaVariant8'        // 148: Julia Variant 8
  | 'juliaVariant9'        // 149: Julia Variant 9
  | 'juliaVariant10'       // 150: Julia Variant 10
  | 'juliaVariant11'       // 151: Julia Variant 11
  | 'juliaVariant12'       // 152: Julia Variant 12
  | 'juliaVariant13'       // 153: Julia Variant 13
  | 'juliaVariant14'       // 154: Julia Variant 14
  | 'juliaVariant15'       // 155: Julia Variant 15
  | 'juliaVariant16'       // 156: Julia Variant 16
  | 'juliaVariant17'       // 157: Julia Variant 17
  | 'juliaVariant18'       // 158: Julia Variant 18
  | 'juliaVariant19'       // 159: Julia Variant 19
  | 'juliaVariant20'       // 160: Julia Variant 20
  | 'juliaVariant21'       // 161: Julia Variant 21
  | 'juliaVariant22'       // 162: Julia Variant 22
  | 'juliaVariant23'       // 163: Julia Variant 23
  | 'juliaVariant24'       // 164: Julia Variant 24
  | 'juliaVariant25'       // 165: Julia Variant 25
  | 'juliaVariant26'       // 166: Julia Variant 26
  | 'juliaVariant27'       // 167: Julia Variant 27
  | 'juliaVariant28'       // 168: Julia Variant 28
  | 'juliaVariant29'       // 169: Julia Variant 29
  | 'juliaVariant30'       // 170: Julia Variant 30
  | 'juliaVariant31'       // 171: Julia Variant 31
  | 'juliaVariant32'       // 172: Julia Variant 32
  | 'juliaVariant33'       // 173: Julia Variant 33
  | 'juliaVariant34'       // 174: Julia Variant 34
  | 'juliaVariant35'       // 175: Julia Variant 35
  | 'juliaVariant36'       // 176: Julia Variant 36
  | 'juliaVariant37'       // 177: Julia Variant 37
  | 'juliaVariant38'       // 178: Julia Variant 38
  | 'juliaVariant39'       // 179: Julia Variant 39
  | 'juliaVariant40'       // 180: Julia Variant 40
  | 'juliaVariant41'       // 181: Julia Variant 41
  | 'juliaVariant42'       // 182: Julia Variant 42
  | 'juliaVariant43'       // 183: Julia Variant 43
  | 'juliaVariant44'       // 184: Julia Variant 44
  | 'juliaVariant45'       // 185: Julia Variant 45
  | 'juliaVariant46'       // 186: Julia Variant 46
  | 'juliaVariant47'       // 187: Julia Variant 47
  | 'juliaVariant48'       // 188: Julia Variant 48
  | 'juliaVariant49'       // 189: Julia Variant 49
  | 'juliaVariant50'       // 190: Julia Variant 50
  // IFS Variants (191-240)
  | 'ifsVariant1'          // 191: IFS Variant 1
  | 'ifsVariant2'          // 192: IFS Variant 2
  | 'ifsVariant3'          // 193: IFS Variant 3
  | 'ifsVariant4'          // 194: IFS Variant 4
  | 'ifsVariant5'          // 195: IFS Variant 5
  | 'ifsVariant6'          // 196: IFS Variant 6
  | 'ifsVariant7'          // 197: IFS Variant 7
  | 'ifsVariant8'          // 198: IFS Variant 8
  | 'ifsVariant9'          // 199: IFS Variant 9
  | 'ifsVariant10'         // 200: IFS Variant 10
  | 'ifsVariant11'         // 201: IFS Variant 11
  | 'ifsVariant12'         // 202: IFS Variant 12
  | 'ifsVariant13'         // 203: IFS Variant 13
  | 'ifsVariant14'         // 204: IFS Variant 14
  | 'ifsVariant15'         // 205: IFS Variant 15
  | 'ifsVariant16'         // 206: IFS Variant 16
  | 'ifsVariant17'         // 207: IFS Variant 17
  | 'ifsVariant18'         // 208: IFS Variant 18
  | 'ifsVariant19'         // 209: IFS Variant 19
  | 'ifsVariant20'         // 210: IFS Variant 20
  | 'ifsVariant21'         // 211: IFS Variant 21
  | 'ifsVariant22'         // 212: IFS Variant 22
  | 'ifsVariant23'         // 213: IFS Variant 23
  | 'ifsVariant24'         // 214: IFS Variant 24
  | 'ifsVariant25'         // 215: IFS Variant 25
  | 'ifsVariant26'         // 216: IFS Variant 26
  | 'ifsVariant27'         // 217: IFS Variant 27
  | 'ifsVariant28'         // 218: IFS Variant 28
  | 'ifsVariant29'         // 219: IFS Variant 29
  | 'ifsVariant30'         // 220: IFS Variant 30
  | 'ifsVariant31'         // 221: IFS Variant 31
  | 'ifsVariant32'         // 222: IFS Variant 32
  | 'ifsVariant33'         // 223: IFS Variant 33
  | 'ifsVariant34'         // 224: IFS Variant 34
  | 'ifsVariant35'         // 225: IFS Variant 35
  | 'ifsVariant36'         // 226: IFS Variant 36
  | 'ifsVariant37'         // 227: IFS Variant 37
  | 'ifsVariant38'         // 228: IFS Variant 38
  | 'ifsVariant39'         // 229: IFS Variant 39
  | 'ifsVariant40'         // 230: IFS Variant 40
  | 'ifsVariant41'         // 231: IFS Variant 41
  | 'ifsVariant42'         // 232: IFS Variant 42
  | 'ifsVariant43'         // 233: IFS Variant 43
  | 'ifsVariant44'         // 234: IFS Variant 44
  | 'ifsVariant45'         // 235: IFS Variant 45
  | 'ifsVariant46'         // 236: IFS Variant 46
  | 'ifsVariant47'         // 237: IFS Variant 47
  | 'ifsVariant48'         // 238: IFS Variant 48
  | 'ifsVariant49'         // 239: IFS Variant 49
  | 'ifsVariant50'         // 240: IFS Variant 50
  // LSystem Variants (241-290)
  | 'lsystemVariant1'      // 241: LSystem Variant 1
  | 'lsystemVariant2'      // 242: LSystem Variant 2
  | 'lsystemVariant3'      // 243: LSystem Variant 3
  | 'lsystemVariant4'      // 244: LSystem Variant 4
  | 'lsystemVariant5'      // 245: LSystem Variant 5
  | 'lsystemVariant6'      // 246: LSystem Variant 6
  | 'lsystemVariant7'      // 247: LSystem Variant 7
  | 'lsystemVariant8'      // 248: LSystem Variant 8
  | 'lsystemVariant9'      // 249: LSystem Variant 9
  | 'lsystemVariant10'     // 250: LSystem Variant 10
  | 'lsystemVariant11'     // 251: LSystem Variant 11
  | 'lsystemVariant12'     // 252: LSystem Variant 12
  | 'lsystemVariant13'     // 253: LSystem Variant 13
  | 'lsystemVariant14'     // 254: LSystem Variant 14
  | 'lsystemVariant15'     // 255: LSystem Variant 15
  | 'lsystemVariant16'     // 256: LSystem Variant 16
  | 'lsystemVariant17'     // 257: LSystem Variant 17
  | 'lsystemVariant18'     // 258: LSystem Variant 18
  | 'lsystemVariant19'     // 259: LSystem Variant 19
  | 'lsystemVariant20'     // 260: LSystem Variant 20
  | 'lsystemVariant21'     // 261: LSystem Variant 21
  | 'lsystemVariant22'     // 262: LSystem Variant 22
  | 'lsystemVariant23'     // 263: LSystem Variant 23
  | 'lsystemVariant24'     // 264: LSystem Variant 24
  | 'lsystemVariant25'     // 265: LSystem Variant 25
  | 'lsystemVariant26'     // 266: LSystem Variant 26
  | 'lsystemVariant27'     // 267: LSystem Variant 27
  | 'lsystemVariant28'     // 268: LSystem Variant 28
  | 'lsystemVariant29'     // 269: LSystem Variant 29
  | 'lsystemVariant30'     // 270: LSystem Variant 30
  | 'lsystemVariant31'     // 271: LSystem Variant 31
  | 'lsystemVariant32'     // 272: LSystem Variant 32
  | 'lsystemVariant33'     // 273: LSystem Variant 33
  | 'lsystemVariant34'     // 274: LSystem Variant 34
  | 'lsystemVariant35'     // 275: LSystem Variant 35
  | 'lsystemVariant36'     // 276: LSystem Variant 36
  | 'lsystemVariant37'     // 277: LSystem Variant 37
  | 'lsystemVariant38'     // 278: LSystem Variant 38
  | 'lsystemVariant39'     // 279: LSystem Variant 39
  | 'lsystemVariant40'     // 280: LSystem Variant 40
  | 'lsystemVariant41'     // 281: LSystem Variant 41
  | 'lsystemVariant42'     // 282: LSystem Variant 42
  | 'lsystemVariant43'     // 283: LSystem Variant 43
  | 'lsystemVariant44'     // 284: LSystem Variant 44
  | 'lsystemVariant45'     // 285: LSystem Variant 45
  | 'lsystemVariant46'     // 286: LSystem Variant 46
  | 'lsystemVariant47'     // 287: LSystem Variant 47
  | 'lsystemVariant48'     // 288: LSystem Variant 48
  | 'lsystemVariant49'     // 289: LSystem Variant 49
  | 'lsystemVariant50'     // 290: LSystem Variant 50
  // Flame Variants (291-340)
  | 'flameVariant1'        // 291: Flame Variant 1
  | 'flameVariant2'        // 292: Flame Variant 2
  | 'flameVariant3'        // 293: Flame Variant 3
  | 'flameVariant4'        // 294: Flame Variant 4
  | 'flameVariant5'        // 295: Flame Variant 5
  | 'flameVariant6'        // 296: Flame Variant 6
  | 'flameVariant7'        // 297: Flame Variant 7
  | 'flameVariant8'        // 298: Flame Variant 8
  | 'flameVariant9'        // 299: Flame Variant 9
  | 'flameVariant10'       // 300: Flame Variant 10
  | 'flameVariant11'       // 301: Flame Variant 11
  | 'flameVariant12'       // 302: Flame Variant 12
  | 'flameVariant13'       // 303: Flame Variant 13
  | 'flameVariant14'       // 304: Flame Variant 14
  | 'flameVariant15'       // 305: Flame Variant 15
  | 'flameVariant16'       // 306: Flame Variant 16
  | 'flameVariant17'       // 307: Flame Variant 17
  | 'flameVariant18'       // 308: Flame Variant 18
  | 'flameVariant19'       // 309: Flame Variant 19
  | 'flameVariant20'       // 310: Flame Variant 20
  | 'flameVariant21'       // 311: Flame Variant 21
  | 'flameVariant22'       // 312: Flame Variant 22
  | 'flameVariant23'       // 313: Flame Variant 23
  | 'flameVariant24'       // 314: Flame Variant 24
  | 'flameVariant25'       // 315: Flame Variant 25
  | 'flameVariant26'       // 316: Flame Variant 26
  | 'flameVariant27'       // 317: Flame Variant 27
  | 'flameVariant28'       // 318: Flame Variant 28
  | 'flameVariant29'       // 319: Flame Variant 29
  | 'flameVariant30'       // 320: Flame Variant 30
  | 'flameVariant31'       // 321: Flame Variant 31
  | 'flameVariant32'       // 322: Flame Variant 32
  | 'flameVariant33'       // 323: Flame Variant 33
  | 'flameVariant34'       // 324: Flame Variant 34
  | 'flameVariant35'       // 325: Flame Variant 35
  | 'flameVariant36'       // 326: Flame Variant 36
  | 'flameVariant37'       // 327: Flame Variant 37
  | 'flameVariant38'       // 328: Flame Variant 38
  | 'flameVariant39'       // 329: Flame Variant 39
  | 'flameVariant40'       // 330: Flame Variant 40
  | 'flameVariant41'       // 331: Flame Variant 41
  | 'flameVariant42'       // 332: Flame Variant 42
  | 'flameVariant43'       // 333: Flame Variant 43
  | 'flameVariant44'       // 334: Flame Variant 44
  | 'flameVariant45'       // 335: Flame Variant 45
  | 'flameVariant46'       // 336: Flame Variant 46
  | 'flameVariant47'       // 337: Flame Variant 47
  | 'flameVariant48'       // 338: Flame Variant 48
  | 'flameVariant49'       // 339: Flame Variant 49
  | 'flameVariant50'       // 340: Flame Variant 50
  // Hybrid Variants (341-430)
  | 'hybridVariant1'       // 341: Hybrid Variant 1
  | 'hybridVariant2'       // 342: Hybrid Variant 2
  | 'hybridVariant3'       // 343: Hybrid Variant 3
  | 'hybridVariant4'       // 344: Hybrid Variant 4
  | 'hybridVariant5'       // 345: Hybrid Variant 5
  | 'hybridVariant6'       // 346: Hybrid Variant 6
  | 'hybridVariant7'       // 347: Hybrid Variant 7
  | 'hybridVariant8'       // 348: Hybrid Variant 8
  | 'hybridVariant9'       // 349: Hybrid Variant 9
  | 'hybridVariant10'      // 350: Hybrid Variant 10
  | 'hybridVariant11'      // 351: Hybrid Variant 11
  | 'hybridVariant12'      // 352: Hybrid Variant 12
  | 'hybridVariant13'      // 353: Hybrid Variant 13
  | 'hybridVariant14'      // 354: Hybrid Variant 14
  | 'hybridVariant15'      // 355: Hybrid Variant 15
  | 'hybridVariant16'      // 356: Hybrid Variant 16
  | 'hybridVariant17'      // 357: Hybrid Variant 17
  | 'hybridVariant18'      // 358: Hybrid Variant 18
  | 'hybridVariant19'      // 359: Hybrid Variant 19
  | 'hybridVariant20'      // 360: Hybrid Variant 20
  | 'hybridVariant21'      // 361: Hybrid Variant 21
  | 'hybridVariant22'      // 362: Hybrid Variant 22
  | 'hybridVariant23'      // 363: Hybrid Variant 23
  | 'hybridVariant24'      // 364: Hybrid Variant 24
  | 'hybridVariant25'      // 365: Hybrid Variant 25
  | 'hybridVariant26'      // 366: Hybrid Variant 26
  | 'hybridVariant27'      // 367: Hybrid Variant 27
  | 'hybridVariant28'      // 368: Hybrid Variant 28
  | 'hybridVariant29'      // 369: Hybrid Variant 29
  | 'hybridVariant30'      // 370: Hybrid Variant 30
  | 'hybridVariant31'      // 371: Hybrid Variant 31
  | 'hybridVariant32'      // 372: Hybrid Variant 32
  | 'hybridVariant33'      // 373: Hybrid Variant 33
  | 'hybridVariant34'      // 374: Hybrid Variant 34
  | 'hybridVariant35'      // 375: Hybrid Variant 35
  | 'hybridVariant36'      // 376: Hybrid Variant 36
  | 'hybridVariant37'      // 377: Hybrid Variant 37
  | 'hybridVariant38'      // 378: Hybrid Variant 38
  | 'hybridVariant39'      // 379: Hybrid Variant 39
  | 'hybridVariant40'      // 380: Hybrid Variant 40
  | 'hybridVariant41'      // 381: Hybrid Variant 41
  | 'hybridVariant42'      // 382: Hybrid Variant 42
  | 'hybridVariant43'      // 383: Hybrid Variant 43
  | 'hybridVariant44'      // 384: Hybrid Variant 44
  | 'hybridVariant45'      // 385: Hybrid Variant 45
  | 'hybridVariant46'      // 386: Hybrid Variant 46
  | 'hybridVariant47'      // 387: Hybrid Variant 47
  | 'hybridVariant48'      // 388: Hybrid Variant 48
  | 'hybridVariant49'      // 389: Hybrid Variant 49
  | 'hybridVariant50'      // 390: Hybrid Variant 50
  | 'hybridVariant51'      // 391: Hybrid Variant 51
  | 'hybridVariant52'      // 392: Hybrid Variant 52
  | 'hybridVariant53'      // 393: Hybrid Variant 53
  | 'hybridVariant54'      // 394: Hybrid Variant 54
  | 'hybridVariant55'      // 395: Hybrid Variant 55
  | 'hybridVariant56'      // 396: Hybrid Variant 56
  | 'hybridVariant57'      // 397: Hybrid Variant 57
  | 'hybridVariant58'      // 398: Hybrid Variant 58
  | 'hybridVariant59'      // 399: Hybrid Variant 59
  | 'hybridVariant60'      // 400: Hybrid Variant 60
  | 'hybridVariant61'      // 401: Hybrid Variant 61
  | 'hybridVariant62'      // 402: Hybrid Variant 62
  | 'hybridVariant63'      // 403: Hybrid Variant 63
  | 'hybridVariant64'      // 404: Hybrid Variant 64
  | 'hybridVariant65'      // 405: Hybrid Variant 65
  | 'hybridVariant66'      // 406: Hybrid Variant 66
  | 'hybridVariant67'      // 407: Hybrid Variant 67
  | 'hybridVariant68'      // 408: Hybrid Variant 68
  | 'hybridVariant69'      // 409: Hybrid Variant 69
  | 'hybridVariant70'      // 410: Hybrid Variant 70
  | 'hybridVariant71'      // 411: Hybrid Variant 71
  | 'hybridVariant72'      // 412: Hybrid Variant 72
  | 'hybridVariant73'      // 413: Hybrid Variant 73
  | 'hybridVariant74'      // 414: Hybrid Variant 74
  | 'hybridVariant75'      // 415: Hybrid Variant 75
  | 'hybridVariant76'      // 416: Hybrid Variant 76
  | 'hybridVariant77'      // 417: Hybrid Variant 77
  | 'hybridVariant78'      // 418: Hybrid Variant 78
  | 'hybridVariant79'      // 419: Hybrid Variant 79
  | 'hybridVariant80'      // 420: Hybrid Variant 80
  | 'hybridVariant81'      // 421: Hybrid Variant 81
  | 'hybridVariant82'      // 422: Hybrid Variant 82
  | 'hybridVariant83'      // 423: Hybrid Variant 83
  | 'hybridVariant84'      // 424: Hybrid Variant 84
  | 'hybridVariant85'      // 425: Hybrid Variant 85
  | 'hybridVariant86'      // 426: Hybrid Variant 86
  | 'hybridVariant87'      // 427: Hybrid Variant 87
  | 'hybridVariant88'      // 428: Hybrid Variant 88
  | 'hybridVariant89'      // 429: Hybrid Variant 89
  | 'hybridVariant90';     // 430: Hybrid Variant 90

// NOTE: The following types are used in data files (src/data/categories/) as semantic aliases.
// They are NOT separate shader implementations — fractalMappers.ts redirects them to existing types.
// E.g., 'mandala' → phyllotaxis (0), 'platonicSolids' → icosahedron (6), etc.
export type FractalDataAlias =
  | 'mandala' | 'platonicSolids' | 'torusKnot' | 'penroseTiling' | 'goldenSpiral'
  | 'randomTerrain' | 'perlinNoise' | 'worleyNoise'
  | 'percolationCluster' | 'dlAggregate';

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

export type SliceAxis = 'golden' | 'x' | 'y' | 'z';

export type AudioTuning = 'phi432' | 'fibonacci' | 'zenChimes';

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
  paletteSeed?: number;        // 0-100 per-fractal color signature offset
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
