/**
 * fractalMappers.ts - Маппинг строковых типов в числовые индексы для шейдера
 * 
 * КРИТИЧЕСКИЙ ФАЙЛ: Все строковые типы фракталов, операций композиции,
 * режимов камеры и стилей рендеринга преобразуются здесь в числовые индексы
 * которые передаются в шейдер через uniform buffer.
 * 
 * Диапазоны индексов:
 * - 0-85: Classic Fractals (86 типов)
 * - 104-108: 4D Polytopes (5 типов)
 * - 109-112: Higher-Dimensional Manifolds (4 типа)
 * - 113-125: Fractal Flames (13 типов)
 * - 126-130: Advanced IFS (5 типов)
 * - 131-140: Mandelbrot Variations (10 типов)
 * - 141-190: Julia Variations (50 типов)
 * - 191-240: IFS Variations (50 типов)
 * - 241-290: L-System Variations (50 типов)
 * - 291-340: Flame Variations (50 типов)
 * - 341-430: Hybrid Variations (90 типов)
 * 
 * ВСЕГО: 431 тип (но реально используется 86 в types/fractal.ts)
 */

/**
 * Преобразует строковый тип фрактала в числовой индекс для шейдера
 * @param type - Строковый тип фрактала (например, 'mandelbulb')
 * @returns Числовой индекс (0-430) или 0 для неизвестных типов
 */
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
    
    // JULIA VARIATIONS (141-190)
    case 'juliaVariant1': return 141;
    case 'juliaVariant2': return 142;
    case 'juliaVariant3': return 143;
    case 'juliaVariant4': return 144;
    case 'juliaVariant5': return 145;
    case 'juliaVariant6': return 146;
    case 'juliaVariant7': return 147;
    case 'juliaVariant8': return 148;
    case 'juliaVariant9': return 149;
    case 'juliaVariant10': return 150;
    case 'juliaVariant11': return 151;
    case 'juliaVariant12': return 152;
    case 'juliaVariant13': return 153;
    case 'juliaVariant14': return 154;
    case 'juliaVariant15': return 155;
    case 'juliaVariant16': return 156;
    case 'juliaVariant17': return 157;
    case 'juliaVariant18': return 158;
    case 'juliaVariant19': return 159;
    case 'juliaVariant20': return 160;
    case 'juliaVariant21': return 161;
    case 'juliaVariant22': return 162;
    case 'juliaVariant23': return 163;
    case 'juliaVariant24': return 164;
    case 'juliaVariant25': return 165;
    case 'juliaVariant26': return 166;
    case 'juliaVariant27': return 167;
    case 'juliaVariant28': return 168;
    case 'juliaVariant29': return 169;
    case 'juliaVariant30': return 170;
    case 'juliaVariant31': return 171;
    case 'juliaVariant32': return 172;
    case 'juliaVariant33': return 173;
    case 'juliaVariant34': return 174;
    case 'juliaVariant35': return 175;
    case 'juliaVariant36': return 176;
    case 'juliaVariant37': return 177;
    case 'juliaVariant38': return 178;
    case 'juliaVariant39': return 179;
    case 'juliaVariant40': return 180;
    case 'juliaVariant41': return 181;
    case 'juliaVariant42': return 182;
    case 'juliaVariant43': return 183;
    case 'juliaVariant44': return 184;
    case 'juliaVariant45': return 185;
    case 'juliaVariant46': return 186;
    case 'juliaVariant47': return 187;
    case 'juliaVariant48': return 188;
    case 'juliaVariant49': return 189;
    case 'juliaVariant50': return 190;
    
    // IFS VARIATIONS (191-240)
    case 'ifsVariant1': return 191;
    case 'ifsVariant2': return 192;
    case 'ifsVariant3': return 193;
    case 'ifsVariant4': return 194;
    case 'ifsVariant5': return 195;
    case 'ifsVariant6': return 196;
    case 'ifsVariant7': return 197;
    case 'ifsVariant8': return 198;
    case 'ifsVariant9': return 199;
    case 'ifsVariant10': return 200;
    case 'ifsVariant11': return 201;
    case 'ifsVariant12': return 202;
    case 'ifsVariant13': return 203;
    case 'ifsVariant14': return 204;
    case 'ifsVariant15': return 205;
    case 'ifsVariant16': return 206;
    case 'ifsVariant17': return 207;
    case 'ifsVariant18': return 208;
    case 'ifsVariant19': return 209;
    case 'ifsVariant20': return 210;
    case 'ifsVariant21': return 211;
    case 'ifsVariant22': return 212;
    case 'ifsVariant23': return 213;
    case 'ifsVariant24': return 214;
    case 'ifsVariant25': return 215;
    case 'ifsVariant26': return 216;
    case 'ifsVariant27': return 217;
    case 'ifsVariant28': return 218;
    case 'ifsVariant29': return 219;
    case 'ifsVariant30': return 220;
    case 'ifsVariant31': return 221;
    case 'ifsVariant32': return 222;
    case 'ifsVariant33': return 223;
    case 'ifsVariant34': return 224;
    case 'ifsVariant35': return 225;
    case 'ifsVariant36': return 226;
    case 'ifsVariant37': return 227;
    case 'ifsVariant38': return 228;
    case 'ifsVariant39': return 229;
    case 'ifsVariant40': return 230;
    case 'ifsVariant41': return 231;
    case 'ifsVariant42': return 232;
    case 'ifsVariant43': return 233;
    case 'ifsVariant44': return 234;
    case 'ifsVariant45': return 235;
    case 'ifsVariant46': return 236;
    case 'ifsVariant47': return 237;
    case 'ifsVariant48': return 238;
    case 'ifsVariant49': return 239;
    case 'ifsVariant50': return 240;
    
    // L-SYSTEM VARIATIONS (241-290)
    case 'lsystemVariant1': return 241;
    case 'lsystemVariant2': return 242;
    case 'lsystemVariant3': return 243;
    case 'lsystemVariant4': return 244;
    case 'lsystemVariant5': return 245;
    case 'lsystemVariant6': return 246;
    case 'lsystemVariant7': return 247;
    case 'lsystemVariant8': return 248;
    case 'lsystemVariant9': return 249;
    case 'lsystemVariant10': return 250;
    case 'lsystemVariant11': return 251;
    case 'lsystemVariant12': return 252;
    case 'lsystemVariant13': return 253;
    case 'lsystemVariant14': return 254;
    case 'lsystemVariant15': return 255;
    case 'lsystemVariant16': return 256;
    case 'lsystemVariant17': return 257;
    case 'lsystemVariant18': return 258;
    case 'lsystemVariant19': return 259;
    case 'lsystemVariant20': return 260;
    case 'lsystemVariant21': return 261;
    case 'lsystemVariant22': return 262;
    case 'lsystemVariant23': return 263;
    case 'lsystemVariant24': return 264;
    case 'lsystemVariant25': return 265;
    case 'lsystemVariant26': return 266;
    case 'lsystemVariant27': return 267;
    case 'lsystemVariant28': return 268;
    case 'lsystemVariant29': return 269;
    case 'lsystemVariant30': return 270;
    case 'lsystemVariant31': return 271;
    case 'lsystemVariant32': return 272;
    case 'lsystemVariant33': return 273;
    case 'lsystemVariant34': return 274;
    case 'lsystemVariant35': return 275;
    case 'lsystemVariant36': return 276;
    case 'lsystemVariant37': return 277;
    case 'lsystemVariant38': return 278;
    case 'lsystemVariant39': return 279;
    case 'lsystemVariant40': return 280;
    case 'lsystemVariant41': return 281;
    case 'lsystemVariant42': return 282;
    case 'lsystemVariant43': return 283;
    case 'lsystemVariant44': return 284;
    case 'lsystemVariant45': return 285;
    case 'lsystemVariant46': return 286;
    case 'lsystemVariant47': return 287;
    case 'lsystemVariant48': return 288;
    case 'lsystemVariant49': return 289;
    case 'lsystemVariant50': return 290;
    
    // FLAME VARIATIONS (291-340)
    case 'flameVariant1': return 291;
    case 'flameVariant2': return 292;
    case 'flameVariant3': return 293;
    case 'flameVariant4': return 294;
    case 'flameVariant5': return 295;
    case 'flameVariant6': return 296;
    case 'flameVariant7': return 297;
    case 'flameVariant8': return 298;
    case 'flameVariant9': return 299;
    case 'flameVariant10': return 300;
    case 'flameVariant11': return 301;
    case 'flameVariant12': return 302;
    case 'flameVariant13': return 303;
    case 'flameVariant14': return 304;
    case 'flameVariant15': return 305;
    case 'flameVariant16': return 306;
    case 'flameVariant17': return 307;
    case 'flameVariant18': return 308;
    case 'flameVariant19': return 309;
    case 'flameVariant20': return 310;
    case 'flameVariant21': return 311;
    case 'flameVariant22': return 312;
    case 'flameVariant23': return 313;
    case 'flameVariant24': return 314;
    case 'flameVariant25': return 315;
    case 'flameVariant26': return 316;
    case 'flameVariant27': return 317;
    case 'flameVariant28': return 318;
    case 'flameVariant29': return 319;
    case 'flameVariant30': return 320;
    case 'flameVariant31': return 321;
    case 'flameVariant32': return 322;
    case 'flameVariant33': return 323;
    case 'flameVariant34': return 324;
    case 'flameVariant35': return 325;
    case 'flameVariant36': return 326;
    case 'flameVariant37': return 327;
    case 'flameVariant38': return 328;
    case 'flameVariant39': return 329;
    case 'flameVariant40': return 330;
    case 'flameVariant41': return 331;
    case 'flameVariant42': return 332;
    case 'flameVariant43': return 333;
    case 'flameVariant44': return 334;
    case 'flameVariant45': return 335;
    case 'flameVariant46': return 336;
    case 'flameVariant47': return 337;
    case 'flameVariant48': return 338;
    case 'flameVariant49': return 339;
    case 'flameVariant50': return 340;
    
    // HYBRID VARIATIONS (341-430)
    case 'hybridVariant1': return 341;
    case 'hybridVariant2': return 342;
    case 'hybridVariant3': return 343;
    case 'hybridVariant4': return 344;
    case 'hybridVariant5': return 345;
    case 'hybridVariant6': return 346;
    case 'hybridVariant7': return 347;
    case 'hybridVariant8': return 348;
    case 'hybridVariant9': return 349;
    case 'hybridVariant10': return 350;
    case 'hybridVariant11': return 351;
    case 'hybridVariant12': return 352;
    case 'hybridVariant13': return 353;
    case 'hybridVariant14': return 354;
    case 'hybridVariant15': return 355;
    case 'hybridVariant16': return 356;
    case 'hybridVariant17': return 357;
    case 'hybridVariant18': return 358;
    case 'hybridVariant19': return 359;
    case 'hybridVariant20': return 360;
    case 'hybridVariant21': return 361;
    case 'hybridVariant22': return 362;
    case 'hybridVariant23': return 363;
    case 'hybridVariant24': return 364;
    case 'hybridVariant25': return 365;
    case 'hybridVariant26': return 366;
    case 'hybridVariant27': return 367;
    case 'hybridVariant28': return 368;
    case 'hybridVariant29': return 369;
    case 'hybridVariant30': return 370;
    case 'hybridVariant31': return 371;
    case 'hybridVariant32': return 372;
    case 'hybridVariant33': return 373;
    case 'hybridVariant34': return 374;
    case 'hybridVariant35': return 375;
    case 'hybridVariant36': return 376;
    case 'hybridVariant37': return 377;
    case 'hybridVariant38': return 378;
    case 'hybridVariant39': return 379;
    case 'hybridVariant40': return 380;
    case 'hybridVariant41': return 381;
    case 'hybridVariant42': return 382;
    case 'hybridVariant43': return 383;
    case 'hybridVariant44': return 384;
    case 'hybridVariant45': return 385;
    case 'hybridVariant46': return 386;
    case 'hybridVariant47': return 387;
    case 'hybridVariant48': return 388;
    case 'hybridVariant49': return 389;
    case 'hybridVariant50': return 390;
    case 'hybridVariant51': return 391;
    case 'hybridVariant52': return 392;
    case 'hybridVariant53': return 393;
    case 'hybridVariant54': return 394;
    case 'hybridVariant55': return 395;
    case 'hybridVariant56': return 396;
    case 'hybridVariant57': return 397;
    case 'hybridVariant58': return 398;
    case 'hybridVariant59': return 399;
    case 'hybridVariant60': return 400;
    case 'hybridVariant61': return 401;
    case 'hybridVariant62': return 402;
    case 'hybridVariant63': return 403;
    case 'hybridVariant64': return 404;
    case 'hybridVariant65': return 405;
    case 'hybridVariant66': return 406;
    case 'hybridVariant67': return 407;
    case 'hybridVariant68': return 408;
    case 'hybridVariant69': return 409;
    case 'hybridVariant70': return 410;
    case 'hybridVariant71': return 411;
    case 'hybridVariant72': return 412;
    case 'hybridVariant73': return 413;
    case 'hybridVariant74': return 414;
    case 'hybridVariant75': return 415;
    case 'hybridVariant76': return 416;
    case 'hybridVariant77': return 417;
    case 'hybridVariant78': return 418;
    case 'hybridVariant79': return 419;
    case 'hybridVariant80': return 420;
    case 'hybridVariant81': return 421;
    case 'hybridVariant82': return 422;
    case 'hybridVariant83': return 423;
    case 'hybridVariant84': return 424;
    case 'hybridVariant85': return 425;
    case 'hybridVariant86': return 426;
    case 'hybridVariant87': return 427;
    case 'hybridVariant88': return 428;
    case 'hybridVariant89': return 429;
    case 'hybridVariant90': return 430;
    
    default: return 0; // Unknown types default to phyllotaxis (index 0)
  }
}

/**
 * Преобразует строковую операцию композиции в числовой индекс
 * Операции композиции определяют как комбинируются primary/hybrid/tertiary SDF
 * @param op - Строковая операция (например, 'smoothUnion')
 * @returns Числовой индекс (0-7) или 1 (smoothUnion) по умолчанию
 */
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
    default: return 0; // Default to orbit mode (safest for most fractals)
  }
}

/**
 * Преобразует строковую ось среза в числовой индекс
 * Ось среза определяет плоскость для slice plane визуализации
 * @param axis - Строковая ось ('golden', 'x', 'y', 'z')
 * @returns Числовой индекс (0-3) или 0 (golden) по умолчанию
 */
export function getSliceAxisIndex(axis?: string): number {
  switch (axis) {
    case 'golden': return 0;
    case 'x': return 1;
    case 'y': return 2;
    case 'z': return 3;
    default: return 0;
  }
}

    default: return 0; // Default to golden axis (most visually interesting)
  }
}

/**
 * Преобразует строковый стиль рендеринга в числовой индекс
 * КРИТИЧЕСКАЯ ФУНКЦИЯ: Индекс 39 в uniform buffer содержит этот индекс
 * и переключает между 7 режимами рендеринга в шейдере
 * 
 * @param style - Строковый стиль (например, 'solid', 'xray', 'hologram')
 * @returns Числовой индекс (0-6) или 0 (solid) по умолчанию
 */
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
