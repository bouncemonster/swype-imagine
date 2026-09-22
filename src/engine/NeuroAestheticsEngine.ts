import { FractalSpecimen, FractalType, ColorPalette, CompositeOp, RenderStyle } from '../types/fractal';
import { COLOR_PALETTES } from '../palettes';
import { COMPATIBLE_HYBRIDS } from '../data/compatibleHybrids';
import { hslToRgb } from '../utils/colorMath';
export { COMPATIBLE_HYBRIDS };

export const COMPOSITE_OP_NAMES: Record<CompositeOp, string> = {
  smoothMorph: 'Топологический морфинг (Continuous Morph)',
  smoothUnion: 'Гладкое геометрическое объединение (smin)',
  smoothIntersection: 'Гладкое взаимное проникновение (smax)',
  smoothCarve: 'Кавернозное вырезание объемов (ssub)',
  domainWarp: 'Искривление координат (Domain Warp)',
  quantumResonance: 'Спектральная микро-модуляция (Resonance)',
  fractalLattice: 'Клеточная решетка ТПМС (Lattice)',
  goldenSpiralFold: 'Конформное спиральное скручивание (Spiral Fold)',
};

export const COMPOSITE_OP_SYMBOLS: Record<CompositeOp, string> = {
  smoothMorph: '⇌_φ',
  smoothUnion: '⊕_φ',
  smoothIntersection: '∩_φ',
  smoothCarve: '⊖_φ',
  domainWarp: '⮁_φ',
  quantumResonance: '⊗_φ',
  fractalLattice: '⊞_φ',
  goldenSpiralFold: '🌀_φ',
};

export const ALL_COMPOSITE_OPS: CompositeOp[] = [
  'smoothMorph',
  'smoothUnion',
  'smoothIntersection',
  'smoothCarve',
  'domainWarp',
  'quantumResonance',
  'fractalLattice',
  'goldenSpiralFold',
];

const GOLDEN_RATIO = 1.61803398875;
const GOLDEN_ANGLE = 137.507764; // degrees

// Generate procedural golden harmonic palette
export function generateGoldenPalette(baseHue: number, nameSuffix: string): ColorPalette {
  const h1 = baseHue;
  const h2 = (baseHue + GOLDEN_ANGLE) % 360;
  const h3 = (baseHue + GOLDEN_ANGLE * 2) % 360;

  return {
    id: `golden-gen-${Math.floor(baseHue)}`,
    name: `Гармоника φ (${nameSuffix})`,
    primary: hslToRgb(h1, 0.85, 0.45),
    secondary: hslToRgb(h2, 0.8, 0.55),
    accent: hslToRgb(h3, 0.95, 0.65),
    ambient: hslToRgb(h1, 0.6, 0.12),
  };
}

export const ALL_FRACTAL_TYPES: FractalType[] = [
  'phyllotaxis',
  'mandelbulb',
  'quaternionJulia',
  'apollonian',
  'spiralTunnel',
  'mandelbox',
  'icosahedral',
  'menger',
  'gyroid',
  'primeSpiral',
  'quasicrystal',
  'hopfFibration',
  'calabiYau',
  'riemannZeta',
  'sierpinskiOcta',
  'cliffordKlein',
  'poincareSphere',
  'gaussianPrimes',
  'neoviusMinimal',
  'eulerTotientSpiral',
  'cliffordTorus4D',
  'kleinianLimit',
  'fibonacciSnowflake',
  'quaternionMandelbrot',
  'hilbertCurve3D',
  'dragonCurveIFS',
  'pythagorasTree3D',
  'burningShip3D',
  'newtonBasins',
  'jerusalemCube',
  'lorenzAttractor',
  'hofstadterButterfly',
  'antoineNecklace',
  'dlaCluster',
  'rosslerHyperchaos',
  'cliffordAttractor',
  'abrikosovLattice',
  'beltramiPseudosphere',
  'spinFoamNetwork',
  'ramanujanTau',
  'belousovWaves',
  'henonAttractor',
  'aizawaAttractor',
  'thomasAttractor',
  'halvorsenAttractor',
  'juliaSet3D',
  'multibrot3',
  'tetrix',
  'gosperCurve',
  'lSystemPlant',
  'schwarzP',
  'schwarzD',
  'apollonianGasket',
  'barnsleyFern3D',
  'kleinQuartic',
  'spherePacking',
  'novaFractal',
  'goldenKnot',
  'sphericalHarmonics',
  'reactionDiffusion',
  'fractalCross',
  'sierpinskiCarpet',
  'tricorn',
  'chuaCircuit',
  'standardMap',
  'ikedaMap',
  'kochSnowflake3D',
  'cantorDust',
  'phoenixFractal',
  'fatouSet',
  'e8Lattice',
  'chladniFigures',
  'fitzHugh',
  'rosslerAttractor',
  'duffingAttractor',
  'logisticBifurcation',
  'fractalSpire',
  'deJongAttractor',
  'pickoverAttractor',
  'vicsekFractal',
  'mandelbar',
  'weierstrass3D',
  'popcornFunction',
  'bedheadAttractor',
  'fourSpotAttractor',
  'svenssonAttractor',
  // 4D POLYTOPES
  'tesseract',
  '120Cell',
  '600Cell',
  '24Cell',
  '5Cell',
  // HIGHER-DIMENSIONAL MANIFOLDS
  'kleinBottle',
  'projectivePlane',
  'mobiusStrip3D',
  'torusKnot4D',
  // FRACTAL FLAMES
  'flameSinusoidal',
  'flameSpherical',
  'flameSwirl',
  'flameHorseshoe',
  'flameButterfly',
  'flameHeart',
  'flameSpiral',
  'flameHyperbolic',
  'flameDiamond',
  'flameWaves',
  'flamePopcorn',
  'flameRings',
  'flameFan',
  // ADVANCED IFS
  'ifs3DTree',
  'ifs3DFern',
  'ifs3DSierpinski',
  'ifs3DCantor',
  'ifs3DKoch',
];

// AUTO-SHOWCASE CURATION (evidence-based).
// A headless pixel sweep of all 113 exploration types at the app's default framing
// (zoom 3.2) measured two signals — coverage (lit fraction) and surface detail (mean
// |gradient|) — cross-checked against rendered screenshots. Three classes never read as
// a recognizable characteristic 3D form, so they are dropped from the AUTOMATIC showcase
// rotation (they remain fully available in the Atlas and the manual picker):
//   (a) non-volumetric entries — strange attractors, plane/space curves, discrete maps,
//       L-systems — render as sparse dust or blank inside a volumetric SDF raymarcher;
//   (b) DEs that return a length-folded magnitude with no running-min surface distance
//       (poincareSphere, spiralTunnel, reactionDiffusion, fractalCross, the high-fill
//       flames, ifs3D tree/fern/sierpinski) fill the frame with camera-inside fog;
//   (c) the 4D polytope family computes a base primitive distance then discards it,
//       collapsing to a flat blob (see docs/CHANGELOG.md — known DE defect).
// Thin-but-genuine forms (goldenKnot, juliaSet3D, cliffordKlein, …) are KEPT: low
// coverage there reflects small/thin real geometry, not dust.
const SHOWCASE_EXCLUDED: ReadonlySet<FractalType> = new Set<FractalType>([
  // (a) non-volumetric: dust / blank / wrong-shape
  'lorenzAttractor', 'antoineNecklace', 'dlaCluster', 'henonAttractor', 'aizawaAttractor',
  'thomasAttractor', 'halvorsenAttractor', 'gosperCurve', 'lSystemPlant', 'barnsleyFern3D',
  'chuaCircuit', 'standardMap', 'ikedaMap', 'chladniFigures', 'fitzHugh', 'rosslerAttractor',
  'duffingAttractor', 'deJongAttractor', 'pickoverAttractor', 'vicsekFractal', 'popcornFunction',
  'bedheadAttractor', 'fourSpotAttractor', 'svenssonAttractor', 'flameButterfly', 'flameHyperbolic',
  'fibonacciSnowflake', 'pythagorasTree3D', 'fatouSet', 'sierpinskiOcta', 'mandelbar',
  'ifs3DKoch', 'hopfFibration', 'phoenixFractal',
  // (b) camera-inside fog / blob
  'spiralTunnel', 'poincareSphere', 'reactionDiffusion', 'fractalCross', 'flameHeart',
  'flameWaves', 'flameRings', 'flameFan', 'ifs3DTree', 'ifs3DFern', 'ifs3DSierpinski',
  'rosslerHyperchaos', 'apollonianGasket',
  // (c) polytope DE bug
  'tesseract', '120Cell', '600Cell', '24Cell', '5Cell',
]);

// The curated set the auto-explore feed and exploration showcase rotate through.
export const SOLID_EXPLORATION_TYPES: FractalType[] = ALL_FRACTAL_TYPES.filter(t => !SHOWCASE_EXCLUDED.has(t));

export const FRACTAL_NAMES: Partial<Record<FractalType, string>> = {
  phyllotaxis: 'Филлотаксис Фибоначчи',
  mandelbulb: 'Золотой Мандельбульб 3D',
  quaternionJulia: 'Кватернион 4D Жюлиа',
  apollonian: 'Инверсии Аполлония φ',
  spiralTunnel: 'Логарифмический Туннель',
  mandelbox: 'Куб Мандельбокса 3D',
  icosahedral: 'Золотой Икосаэдр IFS',
  menger: 'Губка Менгера-Иерусалима',
  gyroid: 'Био-Гироид Поверхность',
  primeSpiral: 'Спираль Простых Чисел (Улам-Закс)',
  quasicrystal: 'Квазикристалл Пенроуза-Шехтмана',
  hopfFibration: 'Расслоение Хопфа S³→S²',
  calabiYau: 'Многообразие Калаби-Яу 5-Fold',
  riemannZeta: 'Квантовый Резонатор Дзета-Римана',
  sierpinskiOcta: 'Октаэдрическая Звезда Серпинского',
  cliffordKlein: 'Золотой 4D Узел Клиффорда-Клейна',
  poincareSphere: 'Сфера Пуанкаре Додекаэдра (3-Manifold)',
  gaussianPrimes: 'Решетка Простых Гаусса Z[i]',
  neoviusMinimal: 'Поверхность Неовиуса-Шёна (TPMS)',
  eulerTotientSpiral: 'Спираль Функция Эйлера φ(n) & π',
  cliffordTorus4D: '4D Тор Клиффорда в S³',
  kleinianLimit: 'Фрактал Группы Клейна (Мёбиус)',
  fibonacciSnowflake: 'Снежинка Фибоначчи 3D IFS',
  quaternionMandelbrot: '4D Мандельброт Золотых Сечений',
  hilbertCurve3D: '3D Пространственная Кривая Гильберта (L-System)',
  dragonCurveIFS: 'Золотой Дракон Хартера-Хейтуэя IFS',
  pythagorasTree3D: '3D Дерево Пифагора с Золотым Ветвлением',
  burningShip3D: '3D Пылающий Корабль (Burning Ship)',
  newtonBasins: '3D Бассейны Корней Ньютона-Рафсона',
  jerusalemCube: '3D Иерусалимский Куб Золотого Сечения',
  lorenzAttractor: '3D Странный Аттрактор Лоренца (Хаос)',
  hofstadterButterfly: '3D Квантовая Бабочка Хофштадтера',
  antoineNecklace: '3D Ожерелье Антуана (Зацепленные Торы)',
  dlaCluster: '3D Дендритный DLA-Кластер (Диффузия)',
  rosslerHyperchaos: '4D Гиперхаотический Аттрактор Рёсслера',
  cliffordAttractor: '4D Аттрактор Клиффорда-Пиковера',
  abrikosovLattice: 'Квантовая Вихревая Решетка Абрикосова',
  beltramiPseudosphere: 'Псевдосфера Бельтрами (Лобачевский)',
  spinFoamNetwork: 'Спиновая Пена & Сеть Пенроуза (LQG)',
  ramanujanTau: 'Модулярный Резонатор Рамануджана Δ(τ)',
  belousovWaves: 'Спиральные Волны Белоусова-Жаботинского',
  henonAttractor: 'Аттрактор Энона 3D',
  aizawaAttractor: 'Тороидальный Аттрактор Аизавы',
  thomasAttractor: 'Циклический Аттрактор Томаса (C₃)',
  halvorsenAttractor: 'Аттрактор Хальворсена (3-кратный)',
  juliaSet3D: 'Множество Жюлиа 3D (c = −0.7 + 0.27i)',
  multibrot3: 'Мультиброт z³+c (кубический)',
  tetrix: 'Тетрикс (Тетраэдр Серпинского)',
  gosperCurve: 'Кривая Госпера (Остров)',
  lSystemPlant: 'L-Система: Фрактальное Растение',
  schwarzP: 'Поверхность Шварца P (TPMS)',
  schwarzD: 'Поверхность Шварца D (Diamond)',
  apollonianGasket: 'Прокладка Аполлония (Упаковка)',
  barnsleyFern3D: 'Папоротник Барнсли 3D (IFS)',
  kleinQuartic: 'Квартика Клейна (Род 3, PSL(2,7))',
  spherePacking: 'Фрактальная Упаковка Сфер (FCC)',
  novaFractal: 'Нова-Фрактал (Ньютон + Мандельброт)',
  goldenKnot: 'Золотой Узел (φ-Торический)',
  sphericalHarmonics: 'Сферические Гармоники (Квантовые Орбитали)',
  reactionDiffusion: 'Реакция-Диффузия (Тьюринг, Gray-Scott)',
  fractalCross: 'Фрактальный Крест (3D IFS)',
  sierpinskiCarpet: 'Ковёр Серпинского (dim ≈ 1.893)',
  tricorn: 'Трикотн (сопряжённый Мандельброт)',
  chuaCircuit: 'Схема Чуа (двойной скролл)',
  standardMap: 'Стандартное отображение Чирикова-Тейлора',
  ikedaMap: 'Отображение Икеды',
  kochSnowflake3D: 'Снежинка Коха 3D',
  cantorDust: 'Пыль Кантора 3D',
  phoenixFractal: 'Фрактал Феникс (память z_{n-1})',
  fatouSet: 'Множество Фату (граница бассейна z²+c)',
  e8Lattice: 'Решётка E8 (проекция исключ. группы Ли)',
  chladniFigures: 'Фигуры Хладни (моды колебаний)',
  fitzHugh: 'ФицХью-Нагумо (нейродинамика)',
  rosslerAttractor: 'Аттрактор Рёсслера',
  duffingAttractor: 'Аттрактор Даффинга',
  logisticBifurcation: 'Бифуркация логистического отображения (Фейгенбаум)',
  fractalSpire: 'Фрактальный шпиль (экспоненциальная спиральная башня)',
  deJongAttractor: 'Странный аттрактор де Йонга',
  pickoverAttractor: 'Странный аттрактор Пиковера',
  vicsekFractal: 'Фрактал Вицека (3D крест IFS)',
  mandelbar: 'Мандельбар (сопряжённое множество Мандельброта)',
  weierstrass3D: 'Функция Вейерштрасса 3D (нигде не дифференцируема)',
  popcornFunction: 'Функция попкорна (Celldoor)',
  bedheadAttractor: '3D хаотический аттрактор Bedhead',
  fourSpotAttractor: '4-крылый хаотический аттрактор FourSpot',
  svenssonAttractor: 'Странный аттрактор Свенссона',
  // 4D POLYTOPES
  tesseract: 'Тессеракт (4D гиперкуб)',
  '120Cell': '120-ячейка (4D додекаэдр)',
  '600Cell': '600-ячейка (4D икосаэдр)',
  '24Cell': '24-ячейка (самодвойственный)',
  '5Cell': '5-ячейка (4D тетраэдр)',
  // HIGHER-DIMENSIONAL MANIFOLDS
  kleinBottle: 'Бутылка Клейна (неориентируемая)',
  projectivePlane: 'Проективная плоскость RP²',
  mobiusStrip3D: 'Лента Мёбиуса 3D',
  torusKnot4D: 'Торический узел 4D',
  // FRACTAL FLAMES
  flameSinusoidal: 'Пламя: Синусоидальное',
  flameSpherical: 'Пламя: Сферическое',
  flameSwirl: 'Пламя: Вихрь',
  flameHorseshoe: 'Пламя: Подкова',
  flameButterfly: 'Пламя: Бабочка',
  flameHeart: 'Пламя: Сердце',
  flameSpiral: 'Пламя: Спираль',
  flameHyperbolic: 'Пламя: Гиперболическое',
  flameDiamond: 'Пламя: Алмаз',
  flameWaves: 'Пламя: Волны',
  flamePopcorn: 'Пламя: Попкорн',
  flameRings: 'Пламя: Кольца',
  flameFan: 'Пламя: Веер',
  // ADVANCED IFS
  ifs3DTree: 'IFS 3D Дерево',
  ifs3DFern: 'IFS 3D Папоротник Барнсли',
  ifs3DSierpinski: 'IFS 3D Серпинского',
  ifs3DCantor: 'IFS 3D Пыль Кантора',
  ifs3DKoch: 'IFS 3D Кривая Коха',
};

export const DEFAULT_ZOOMS: Partial<Record<FractalType, number>> = {
  phyllotaxis: 3.2,
  mandelbulb: 2.8,
  quaternionJulia: 2.6,
  apollonian: 3.2,
  spiralTunnel: 2.2,
  mandelbox: 3.0,
  icosahedral: 3.4,
  menger: 2.7,
  gyroid: 2.4,
  primeSpiral: 3.0,
  quasicrystal: 3.2,
  hopfFibration: 2.8,
  calabiYau: 2.6,
  riemannZeta: 2.9,
  sierpinskiOcta: 3.1,
  cliffordKlein: 2.8,
  poincareSphere: 3.0,
  gaussianPrimes: 2.9,
  neoviusMinimal: 2.5,
  eulerTotientSpiral: 3.0,
  cliffordTorus4D: 2.8,
  kleinianLimit: 3.2,
  fibonacciSnowflake: 3.1,
  quaternionMandelbrot: 2.7,
  hilbertCurve3D: 3.0,
  dragonCurveIFS: 3.2,
  pythagorasTree3D: 3.4,
  burningShip3D: 2.8,
  newtonBasins: 2.6,
  jerusalemCube: 2.9,
  lorenzAttractor: 3.0,
  hofstadterButterfly: 2.8,
  antoineNecklace: 3.0,
  dlaCluster: 3.0,
  rosslerHyperchaos: 2.8,
  cliffordAttractor: 3.0,
  abrikosovLattice: 3.2,
  beltramiPseudosphere: 2.9,
  spinFoamNetwork: 3.1,
  ramanujanTau: 2.9,
  belousovWaves: 3.0,
  henonAttractor: 2.5,
  aizawaAttractor: 2.8,
  thomasAttractor: 2.2,
  halvorsenAttractor: 2.5,
  juliaSet3D: 2.8,
  multibrot3: 2.5,
  tetrix: 2.0,
  gosperCurve: 2.2,
  lSystemPlant: 2.5,
  schwarzP: 2.0,
  schwarzD: 2.0,
  apollonianGasket: 2.5,
  barnsleyFern3D: 2.8,
  kleinQuartic: 2.5,
  spherePacking: 2.2,
  novaFractal: 2.5,
  goldenKnot: 2.5,
  sphericalHarmonics: 2.5,
  reactionDiffusion: 2.2,
  fractalCross: 2.0,
  sierpinskiCarpet: 2.0,
  tricorn: 2.3,
  chuaCircuit: 2.5,
  standardMap: 2.5,
  ikedaMap: 2.3,
  kochSnowflake3D: 2.2,
  cantorDust: 2.0,
  phoenixFractal: 2.3,
  fatouSet: 2.5,
  e8Lattice: 2.2,
  chladniFigures: 1.8,
  fitzHugh: 2.3,
  rosslerAttractor: 2.5,
  duffingAttractor: 2.3,
  logisticBifurcation: 2.3,
  fractalSpire: 1.8,
  deJongAttractor: 2.5,
  pickoverAttractor: 2.5,
  vicsekFractal: 1.6,
  mandelbar: 1.8,
  weierstrass3D: 1.5,
  popcornFunction: 2.0,
  bedheadAttractor: 2.5,
  fourSpotAttractor: 2.5,
  svenssonAttractor: 2.5,
  // 4D POLYTOPES
  tesseract: 3.0,
  '120Cell': 3.5,
  '600Cell': 3.0,
  '24Cell': 2.5,
  '5Cell': 2.0,
  // HIGHER-DIMENSIONAL MANIFOLDS
  kleinBottle: 2.5,
  projectivePlane: 2.0,
  mobiusStrip3D: 1.5,
  torusKnot4D: 3.0,
  // FRACTAL FLAMES
  flameSinusoidal: 2.5,
  flameSpherical: 2.6,
  flameSwirl: 2.4,
  flameHorseshoe: 2.5,
  flameButterfly: 2.45,
  flameHeart: 2.5,
  flameSpiral: 2.4,
  flameHyperbolic: 2.6,
  flameDiamond: 2.5,
  flameWaves: 2.45,
  flamePopcorn: 2.4,
  flameRings: 2.5,
  flameFan: 2.45,
  // ADVANCED IFS
  ifs3DTree: 2.0,
  ifs3DFern: 2.2,
  ifs3DSierpinski: 2.0,
  ifs3DCantor: 2.0,
  ifs3DKoch: 2.0,
};

export interface TasteProfile {
  typeAffinities: Record<FractalType, number>;
  preferredHue: number;
  hueAffinityRange: number;
  preferredIterations: number;
  preferredMorphSpeed: number;
  preferredGlow: number;
  totalSpecimensExplored: number;
  highestResonanceScore: number;
}

const STORAGE_KEY = 'golden_ratio_taste_profile_v2';

export type AestheticArchetype = 'geometry' | 'complex' | 'minimal' | 'primes' | 'attractors';

export const ARCHETYPE_LABELS: Record<AestheticArchetype, string> = {
  geometry: 'Топологическая Геометрия & Спирали φ',
  complex: 'Множества Мандельброта & Жюлиа 4D',
  minimal: 'TPMS Поверхности Нулевой Кривизны',
  primes: 'Теория Чисел & Квантовый Хаос',
  attractors: 'Динамические Системы & Аттракторы',
};

export function getFractalArchetype(type: FractalType): AestheticArchetype {
  switch (type) {
    case 'phyllotaxis':
    case 'apollonian':
    case 'spiralTunnel':
    case 'icosahedral':
    case 'fibonacciSnowflake':
    case 'poincareSphere':
    case 'pythagorasTree3D':
    case 'dragonCurveIFS':
    case 'spinFoamNetwork':
    case 'beltramiPseudosphere':
    case 'vicsekFractal':
    // 4D polytopes
    case 'tesseract':
    case '120Cell':
    case '600Cell':
    case '24Cell':
    case '5Cell':
    // Manifolds
    case 'kleinBottle':
    case 'projectivePlane':
    case 'mobiusStrip3D':
    case 'torusKnot4D':
    // Advanced IFS
    case 'ifs3DTree':
    case 'ifs3DFern':
    case 'ifs3DSierpinski':
    case 'ifs3DCantor':
    case 'ifs3DKoch':
      return 'geometry';

    case 'mandelbulb':
    case 'quaternionJulia':
    case 'mandelbox':
    case 'quaternionMandelbrot':
    case 'burningShip3D':
    case 'newtonBasins':
    case 'menger':
    case 'jerusalemCube':
    case 'fractalSpire':
    case 'mandelbar':
    case 'popcornFunction':
    // Flame fractals
    case 'flameSinusoidal':
    case 'flameSpherical':
    case 'flameSwirl':
    case 'flameHorseshoe':
    case 'flameButterfly':
    case 'flameHeart':
    case 'flameSpiral':
    case 'flameHyperbolic':
    case 'flameDiamond':
    case 'flameWaves':
    case 'flamePopcorn':
    case 'flameRings':
    case 'flameFan':
      return 'complex';

    case 'gyroid':
    case 'neoviusMinimal':
    case 'calabiYau':
    case 'cliffordKlein':
    case 'cliffordTorus4D':
    case 'antoineNecklace':
    case 'abrikosovLattice':
    case 'weierstrass3D':
      return 'minimal';

    case 'primeSpiral':
    case 'riemannZeta':
    case 'gaussianPrimes':
    case 'eulerTotientSpiral':
    case 'kleinianLimit':
    case 'ramanujanTau':
      return 'primes';

    case 'lorenzAttractor':
    case 'hofstadterButterfly':
    case 'quasicrystal':
    case 'hopfFibration':
    case 'dlaCluster':
    case 'sierpinskiOcta':
    case 'hilbertCurve3D':
    case 'rosslerHyperchaos':
    case 'cliffordAttractor':
    case 'belousovWaves':
    default:
      return 'attractors';
  }
}

export class NeuroAestheticsEngine {
  private taste: TasteProfile;
  private history: FractalSpecimen[] = [];
  private currentSpecimenIndex = 0;
  private currentGeneration = 1;
  private saveDebounceTimer: ReturnType<typeof setTimeout> | null = null;
  // Track recently shown types to maximize variety (anti-repetition)
  private recentTypes: FractalType[] = [];
  private readonly RECENT_WINDOW = 20; // Increased from 8 to 20 for more variety
  // EXPLORATION MODE: Ensure all fractal types are shown
  private explorationIndex = 0;
  private readonly EXPLORATION_MODE = true; // Show all types sequentially first
  // RANDOM HYBRID MODE: Allow any combination for thousands of hybrids
  private readonly RANDOM_HYBRID_MODE = true; // Allow any fractal combination

  constructor() {
    this.taste = this.loadTasteProfile();
  }

  private loadTasteProfile(): TasteProfile {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Guard: ensure typeAffinities exists (corrupted localStorage may omit it)
        if (!parsed.typeAffinities || typeof parsed.typeAffinities !== 'object') {
          parsed.typeAffinities = {};
        }
        // Ensure all types exist
        ALL_FRACTAL_TYPES.forEach(t => {
          if (parsed.typeAffinities[t] === undefined) {
            parsed.typeAffinities[t] = 1.0;
          }
        });
        // Guard: ensure all scalar fields exist (older versions may omit them)
        if (typeof parsed.preferredHue !== 'number') parsed.preferredHue = 42;
        if (typeof parsed.hueAffinityRange !== 'number') parsed.hueAffinityRange = 60;
        if (typeof parsed.preferredIterations !== 'number') parsed.preferredIterations = 20;
        if (typeof parsed.preferredMorphSpeed !== 'number') parsed.preferredMorphSpeed = 0.45;
        if (typeof parsed.preferredGlow !== 'number') parsed.preferredGlow = 1.0;
        if (typeof parsed.totalSpecimensExplored !== 'number') parsed.totalSpecimensExplored = 0;
        if (typeof parsed.highestResonanceScore !== 'number') parsed.highestResonanceScore = 45;
        return parsed;
      }
    } catch {
      // ignore — malformed JSON, will use defaults below
    }

    const defaultAffinities = {} as Record<FractalType, number>;
    ALL_FRACTAL_TYPES.forEach(t => {
      defaultAffinities[t] = 1.0;
    });

    return {
      typeAffinities: defaultAffinities,
      preferredHue: 42, // Warm Golden Amber default
      hueAffinityRange: 60,
      preferredIterations: 20,
      preferredMorphSpeed: 0.45,
      preferredGlow: 1.0,
      totalSpecimensExplored: 0,
      highestResonanceScore: 45,
    };
  }

  public saveTasteProfile(immediate: boolean = false) {
    if (immediate) {
      if (this.saveDebounceTimer) {
        clearTimeout(this.saveDebounceTimer);
        this.saveDebounceTimer = null;
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.taste));
      } catch {
        // ignore
      }
      return;
    }

    if (!this.saveDebounceTimer) {
      this.saveDebounceTimer = setTimeout(() => {
        this.saveDebounceTimer = null;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.taste));
        } catch {
          // ignore
        }
      }, 2500);
    }
  }

  public getTasteProfile(): TasteProfile {
    return { ...this.taste };
  }

  // Get operator synergy multiplier for two archetypes
  // Some composite operators work better with certain archetype combinations
  private getOpSynergy(arch1: AestheticArchetype, arch2: AestheticArchetype): number {
    // Same archetype: smooth morphing works best
    if (arch1 === arch2) return 1.2;
    // Geometry + Complex: domain warp creates interesting hybrids
    if ((arch1 === 'geometry' && arch2 === 'complex') || (arch1 === 'complex' && arch2 === 'geometry')) return 1.1;
    // Primes + Attractors: quantum resonance creates spectral patterns
    if ((arch1 === 'primes' && arch2 === 'attractors') || (arch1 === 'attractors' && arch2 === 'primes')) return 1.15;
    // Minimal + Geometry: lattice operations work well
    if ((arch1 === 'minimal' && arch2 === 'geometry') || (arch1 === 'geometry' && arch2 === 'minimal')) return 1.1;
    // Default: smooth union is always safe
    return 1.0;
  }

  // Get preferred composite operators for two archetype combination
  private getPreferredOps(arch1: AestheticArchetype, arch2: AestheticArchetype, availableOps: CompositeOp[]): CompositeOp[] {
    // Same archetype: morphing and smooth union preserve structure
    if (arch1 === arch2) {
      const preferred = availableOps.filter(op => op === 'smoothMorph' || op === 'smoothUnion');
      return preferred.length > 0 ? preferred : availableOps;
    }
    // Geometry + Complex: domain warp creates interesting spatial distortion
    if ((arch1 === 'geometry' && arch2 === 'complex') || (arch1 === 'complex' && arch2 === 'geometry')) {
      const preferred = availableOps.filter(op => op === 'domainWarp' || op === 'smoothUnion');
      return preferred.length > 0 ? preferred : availableOps;
    }
    // Primes + Attractors: quantum resonance for spectral patterns
    if ((arch1 === 'primes' && arch2 === 'attractors') || (arch1 === 'attractors' && arch2 === 'primes')) {
      const preferred = availableOps.filter(op => op === 'quantumResonance' || op === 'smoothMorph');
      return preferred.length > 0 ? preferred : availableOps;
    }
    // Minimal + anything: lattice or smooth union for clean combinations
    if (arch1 === 'minimal' || arch2 === 'minimal') {
      const preferred = availableOps.filter(op => op === 'fractalLattice' || op === 'smoothUnion');
      return preferred.length > 0 ? preferred : availableOps;
    }
    // Default: return all available
    return availableOps;
  }

  // Get personalized hybrid recommendations based on user taste profile
  // Returns top-N hybrid combinations the user is most likely to enjoy
  public getHybridRecommendations(count: number = 5): { type: FractalType; partner: FractalType; op: CompositeOp; score: number; reason: string }[] {
    const recommendations: { type: FractalType; partner: FractalType; op: CompositeOp; score: number; reason: string }[] = [];
    
    // Get user's top preferred types
    const typeScores = ALL_FRACTAL_TYPES.map(t => ({
      type: t,
      affinity: this.taste.typeAffinities[t] || 1.0,
      arch: getFractalArchetype(t),
    })).sort((a, b) => b.affinity - a.affinity);
    
    // For each top type, find best hybrid partners
    for (const { type, affinity, arch } of typeScores.slice(0, 8)) {
      const compat = COMPATIBLE_HYBRIDS[type];
      if (!compat) continue;
      
      for (const partner of compat.partners) {
        const partnerAffinity = this.taste.typeAffinities[partner] || 1.0;
        const partnerArch = getFractalArchetype(partner);
        
        // Score: user affinity for both types * archetype synergy * novelty
        const alreadySeen = this.history.some(s => 
          (s.type === type && s.hybridType === partner) || 
          (s.type === partner && s.hybridType === type)
        );
        const noveltyBonus = alreadySeen ? 0.6 : 1.4;
        const archSynergy = this.getOpSynergy(arch, partnerArch);
        const score = affinity * partnerAffinity * noveltyBonus * archSynergy;
        
        // Pick best operator for this combination
        const preferredOps = this.getPreferredOps(arch, partnerArch, compat.ops);
        const op = preferredOps[0];
        
        // Generate reason string
        let reason = '';
        if (arch === partnerArch) reason = `Same archetype (${arch}) — natural visual harmony`;
        else if (affinity > 2.0 && partnerAffinity > 2.0) reason = `Both types in your taste profile`;
        else if (affinity > 2.0) reason = `Matches your love of ${arch} fractals`;
        else if (partnerAffinity > 2.0) reason = `Pairs with your interest in ${partnerArch} patterns`;
        else reason = `Unexplored ${arch}+${partnerArch} combination`;
        
        recommendations.push({ type, partner, op, score, reason });
      }
    }
    
    // Sort by score and return top N
    recommendations.sort((a, b) => b.score - a.score);
    return recommendations.slice(0, count);
  }

  // Generate a new evolved specimen based on taste profile & genetic breeding
  public breedNextSpecimen(forceType?: FractalType): FractalSpecimen {
    this.currentGeneration++;
    this.taste.totalSpecimensExplored++;

    // 1. Select Fractal Type with EXPLORATION MODE
    let selectedType = forceType;
    // During the first sequential pass through every canonical type we render it PURE
    // (no hybrid morph), so each fractal's characteristic form is legible. Blending two
    // random fractals at 0.15-0.70 strength turns a recognisable Mandelbulb/Menger into
    // an amorphous blob — the user's "не вижу характерных форм" complaint. Hybrids resume
    // for the taste-driven phase after the showcase pass.
    let isExplorationShowcase = false;
    if (!selectedType) {
      const types = ALL_FRACTAL_TYPES;
      // The first sequential pass is the legibility showcase — it walks the curated
      // solid list so every tick is a recognizable characteristic form; dust/fog/blob
      // entries are skipped here but still reachable via the taste phase and the Atlas.
      const showcaseTypes = SOLID_EXPLORATION_TYPES;
      
      // EXPLORATION MODE: Show all types sequentially first
      if (this.EXPLORATION_MODE && this.explorationIndex < showcaseTypes.length) {
        selectedType = showcaseTypes[this.explorationIndex];
        this.explorationIndex++;
        isExplorationShowcase = true;
        console.info(`[NeuroAesthetics] Exploration mode: showing type ${this.explorationIndex}/${showcaseTypes.length}: ${selectedType}`);
      } else {
        // After exploration, use Thompson sampling with reduced penalty
        const weights = types.map(t => {
          const baseAffinity = Math.max(0.2, this.taste.typeAffinities[t] || 1.0);
          // REDUCED penalty for recently shown types (was 0.05, now 0.3)
          const recentPenalty = this.recentTypes.includes(t) ? 0.3 : 1.0;
          // Exploration bonus: types explored less get a small boost
          const explorationBonus = this.currentGeneration < 20 ? 1.5 : 1.0;
          return baseAffinity * recentPenalty * explorationBonus;
        });
        
        const totalWeight = weights.reduce((acc, w) => acc + w, 0);
        let rand = Math.random() * totalWeight;
        for (let i = 0; i < types.length; i++) {
          if (rand <= weights[i]) {
            selectedType = types[i];
            break;
          }
          rand -= weights[i];
        }
        if (!selectedType) selectedType = types[Math.floor(Math.random() * types.length)];
      }
      
      // Track this type as recently shown
      this.recentTypes.push(selectedType);
      if (this.recentTypes.length > this.RECENT_WINDOW) {
        this.recentTypes.shift();
      }
    }

    // 2. Evolve harmonic palette along golden angle — more aggressive variety
    const shouldMutateHue = Math.random() < 0.5; // Increased from 0.35
    let hue = this.taste.preferredHue;
    if (shouldMutateHue) {
      const steps = Math.random() < 0.5 ? 1 : 2;
      hue = (hue + GOLDEN_ANGLE * steps + (Math.random() * 30 - 15)) % 360; // Wider variation
    } else {
      // Big jump to a completely different hue region
      hue = (Math.random() * 360) % 360;
    }

    // Pick from curated or procedural golden palette — more curated variety
    let palette: ColorPalette;
    const curatedChance = 0.65; // Increased from 0.4 — more curated palette diversity
    if (Math.random() < curatedChance) {
      // Avoid repeating the last palette
      const lastPaletteId = this.history.length > 0 ? this.history[this.history.length - 1].palette?.id : '';
      let availablePalettes = COLOR_PALETTES.filter(p => p.id !== lastPaletteId);
      if (availablePalettes.length === 0) availablePalettes = COLOR_PALETTES;
      palette = availablePalettes[Math.floor(Math.random() * availablePalettes.length)];
    } else {
      palette = generateGoldenPalette(hue, `Ген #${this.currentGeneration}`);
    }

    // 3. Evolve Golden Ratio multiplier around phi
    const phiVariation = (Math.random() - 0.5) * 0.08;
    const phiMultiplier = parseFloat((GOLDEN_RATIO + phiVariation).toFixed(5));

    // 4. Evolve iterations and speed
    const baseIter = Math.round(this.taste.preferredIterations + (Math.random() * 6 - 3));
    const iterations = Math.max(12, Math.min(32, baseIter));

    const baseSpeed = Math.max(0.15, Math.min(1.2, this.taste.preferredMorphSpeed + (Math.random() * 0.2 - 0.1)));
    const morphSpeed = parseFloat(baseSpeed.toFixed(2));

    const baseGlow = Math.max(0.4, Math.min(2.2, this.taste.preferredGlow + (Math.random() * 0.4 - 0.2)));
    const glowIntensity = parseFloat(baseGlow.toFixed(2));

    const zoom = DEFAULT_ZOOMS[selectedType] * (0.95 + Math.random() * 0.1);

    // High-performance mathematically compatible hybrid breeding
    // FIX: Increased hybrid chance and wider blend ranges for more dramatic combinations
    const isHybrid = !isExplorationShowcase && Math.random() < 0.80;
    let hybridType = selectedType;
    let tertiaryType = selectedType;
    let hybridBlend = 0.0;
    let tertiaryBlend = 0.0;
    let compositeOp: CompositeOp = 'smoothUnion';
    let octaveLayers = 1;
    let smoothK = 0.32;
    let warpStrength = 0.22;

    let specimenName = `${FRACTAL_NAMES[selectedType]} • φ-${this.currentGeneration}`;

    if (isHybrid) {
      // Compute archetype and compatibility once — used by both random and curated paths
      const selectedArch = getFractalArchetype(selectedType);
      const compat = COMPATIBLE_HYBRIDS[selectedType] || {
        partners: ALL_FRACTAL_TYPES.filter(t => t !== selectedType),
        ops: ['smoothUnion', 'smoothMorph', 'domainWarp']
      };

      // RANDOM HYBRID MODE: Allow ANY combination for thousands of hybrids
      if (this.RANDOM_HYBRID_MODE && Math.random() < 0.6) {
        // 60% chance: completely random partner from ALL types
        const allPartners = ALL_FRACTAL_TYPES.filter(t => t !== selectedType);
        hybridType = allPartners[Math.floor(Math.random() * allPartners.length)];
        console.info(`[NeuroAesthetics] Random hybrid: ${selectedType} + ${hybridType}`);
      } else {
        // 40% chance: use compatibility matrix for curated hybrids

        // IMPROVED HYBRID SELECTION: Score each partner by archetype match + user affinity + exploration
        let bestPartner = compat.partners[0];
        let bestScore = -1;
        for (const partner of compat.partners) {
          const partnerArch = getFractalArchetype(partner);
          const archMatch = selectedArch === partnerArch ? 1.5 : 0.8;
          const userAffinity = Math.max(0.2, this.taste.typeAffinities[partner] || 1.0);
          const explored = this.history.some(s => s.hybridType === partner && s.type === selectedType);
          const explorationBonus = explored ? 0.5 : 1.3;
          const opSynergy = this.getOpSynergy(selectedArch, partnerArch);
          const score = archMatch * userAffinity * explorationBonus * opSynergy;
          if (score > bestScore) {
            bestScore = score;
            bestPartner = partner;
          }
        }
        hybridType = bestPartner;
      }

      // Select composite operator based on archetype synergy
      const partnerArch = getFractalArchetype(hybridType);
      const preferredOps = this.getPreferredOps(selectedArch, partnerArch, compat.ops);
      compositeOp = preferredOps[Math.floor(Math.random() * preferredOps.length)];

      // Wider blend range for more dramatic hybrid expressions
      hybridBlend = parseFloat((0.15 + Math.random() * 0.55).toFixed(3));
      smoothK = parseFloat((0.20 + Math.random() * 0.35).toFixed(3));
      warpStrength = parseFloat((0.15 + Math.random() * 0.40).toFixed(3));
      // Enable multi-scale octaves more often for real hierarchical detail
      octaveLayers = Math.random() < 0.4 ? 2 : 1;

      const sym = COMPOSITE_OP_SYMBOLS[compositeOp];
      const name1 = FRACTAL_NAMES[selectedType].split(' ')[0];
      const name2 = FRACTAL_NAMES[hybridType].split(' ')[0];
      specimenName = `${name1} ${sym} ${name2} • φ-${this.currentGeneration}`;

      // Tertiary layer: 50% chance to add a 3rd fractal for richer topology
      if (Math.random() < 0.50) {
        const compatC = COMPATIBLE_HYBRIDS[hybridType] || {
          partners: ALL_FRACTAL_TYPES.filter(t => t !== selectedType && t !== hybridType),
          ops: ['smoothUnion']
        };
        const tertiaryCandidates = compatC.partners.filter(t => t !== selectedType && t !== hybridType);
        if (tertiaryCandidates.length > 0) {
          // Score tertiary candidates too
          let bestTertiary = tertiaryCandidates[0];
          let bestTertiaryScore = -1;
          for (const tc of tertiaryCandidates) {
            const tcArch = getFractalArchetype(tc);
            const tcAffinity = Math.max(0.2, this.taste.typeAffinities[tc] || 1.0);
            const tcExplored = this.history.some(s => s.tertiaryType === tc);
            const tcExplorationBonus = tcExplored ? 0.5 : 1.2;
            const tcScore = tcAffinity * tcExplorationBonus * (selectedArch === tcArch ? 1.3 : 0.9);
            if (tcScore > bestTertiaryScore) {
              bestTertiaryScore = tcScore;
              bestTertiary = tc;
            }
          }
          tertiaryType = bestTertiary;
          tertiaryBlend = parseFloat((0.10 + Math.random() * 0.30).toFixed(3));
          const name3 = FRACTAL_NAMES[tertiaryType].split(' ')[0];
          specimenName = `${name1} ${sym} ${name2} ⊕ ${name3} • φ-${this.currentGeneration}`;
        }
      }
    }

    // Continuous genetic morphological parameters (keep interior solid by default)
    const boxFold = parseFloat((0.7 + Math.random() * 1.5).toFixed(3));
    const sphereFold = parseFloat((0.35 + Math.random() * 1.05).toFixed(3));
    const interiorCut = 0.0;

    const specimen: FractalSpecimen = {
      id: `specimen-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      seed: Math.floor(Math.random() * 1000000),
      generation: this.currentGeneration,
      name: specimenName,
      type: selectedType,
      hybridType,
      tertiaryType,
      compositeOp,
      hybridBlend,
      tertiaryBlend,
      smoothK,
      warpStrength,
      octaveLayers,
      boxFold,
      sphereFold,
      interiorCut,
      palette,
      iterations,
      phiMultiplier,
      morphSpeed,
      glowIntensity,
      zoom,
      affinityScore: Math.round(25 + Math.random() * 15),
      dwellTimeSeconds: 0,
      zoomInteractions: 0,
      orbitInteractions: 0,
    };

    this.history.push(specimen);
    if (this.history.length > 100) {
      this.history.shift();
    }
    this.currentSpecimenIndex = this.history.length - 1;
    return specimen;
  }

  // Update engagement metrics while the user observes and explores the fractal
  // Scaled naturally so resonance rises gradually like real recommendations
  public registerEngagement(
    dwellDeltaSec: number,
    zoomDelta: number,
    orbitDelta: number,
    specimen: FractalSpecimen
  ): number {
    specimen.dwellTimeSeconds += dwellDeltaSec;
    if (Math.abs(zoomDelta) > 0.05) specimen.zoomInteractions++;
    if (orbitDelta > 0.05) specimen.orbitInteractions++;

    // Realistic, subtle neuro-aesthetic affinity curve (0 to 100%)
    // - Base score starts modest (25%)
    // - Dwell time smoothly scales over 90+ seconds (max +35%)
    // - Active exploration (zooming inside and orbiting) scales gently (max +30%)
    const dwellFactor = Math.min(35, (specimen.dwellTimeSeconds / 90.0) * 35.0);
    const zoomFactor = Math.min(18, Math.log1p(specimen.zoomInteractions) * 3.2);
    const orbitFactor = Math.min(18, Math.log1p(specimen.orbitInteractions) * 2.8);
    const baseAffinity = 25;

    const rawAffinity = Math.round(Math.min(96, baseAffinity + dwellFactor + zoomFactor + orbitFactor));
    specimen.affinityScore = Math.max(specimen.affinityScore, rawAffinity);

    // Absorb positive traits into user taste profile gently over meaningful time
    if (specimen.dwellTimeSeconds > 10.0 && specimen.affinityScore > 50) {
      const currentAffinity = this.taste.typeAffinities[specimen.type] || 1.0;
      this.taste.typeAffinities[specimen.type] = Math.min(4.0, currentAffinity + 0.005);

      if (specimen.hybridType && specimen.hybridBlend > 0.1) {
        const hybridAff = this.taste.typeAffinities[specimen.hybridType] || 1.0;
        this.taste.typeAffinities[specimen.hybridType] = Math.min(4.0, hybridAff + 0.003);
      }

      this.taste.preferredMorphSpeed = this.taste.preferredMorphSpeed * 0.99 + specimen.morphSpeed * 0.01;
      this.taste.preferredGlow = this.taste.preferredGlow * 0.99 + specimen.glowIntensity * 0.01;
      this.taste.preferredIterations = Math.round(this.taste.preferredIterations * 0.99 + specimen.iterations * 0.01);

      // Learn preferred hue from specimen palette primary color (RGB → hue)
      const [pr, pg, pb] = specimen.palette.primary;
      const pMax = Math.max(pr, pg, pb), pMin = Math.min(pr, pg, pb);
      const pDelta = pMax - pMin;
      if (pDelta > 0.05) {
        let specimenHue = 0;
        if (pMax === pr) specimenHue = 60 * (((pg - pb) / pDelta) % 6);
        else if (pMax === pg) specimenHue = 60 * (((pb - pr) / pDelta) + 2);
        else specimenHue = 60 * (((pr - pg) / pDelta) + 4);
        if (specimenHue < 0) specimenHue += 360;
        this.taste.preferredHue = (this.taste.preferredHue * 0.97 + specimenHue * 0.03) % 360;
      }

      if (specimen.affinityScore > this.taste.highestResonanceScore) {
        this.taste.highestResonanceScore = specimen.affinityScore;
      }

      this.saveTasteProfile();
    }

    return specimen.affinityScore;
  }

  // User manually clicked "Super-Resonant / Favorite"
  public boostAffinity(specimen: FractalSpecimen) {
    specimen.affinityScore = 95;
    this.taste.typeAffinities[specimen.type] = Math.min(4.5, (this.taste.typeAffinities[specimen.type] || 1.0) + 0.35);
    if (specimen.hybridType) {
      this.taste.typeAffinities[specimen.hybridType] = Math.min(4.5, (this.taste.typeAffinities[specimen.hybridType] || 1.0) + 0.2);
    }
    this.taste.highestResonanceScore = Math.max(this.taste.highestResonanceScore, 95);
    this.saveTasteProfile();
  }

  public stepHistory(direction: -1 | 1): FractalSpecimen {
    if (direction === -1) {
      if (this.currentSpecimenIndex > 0) {
        this.currentSpecimenIndex--;
        return this.history[this.currentSpecimenIndex];
      }
      return this.history[0];
    } else {
      if (this.currentSpecimenIndex < this.history.length - 1) {
        this.currentSpecimenIndex++;
        return this.history[this.currentSpecimenIndex];
      }
      // Breed new evolved specimen
      return this.breedNextSpecimen();
    }
  }

  /**
   * Predict the fractal type the NEXT forward navigation will show, WITHOUT any
   * state mutation — lets the renderer pre-compile its shader in the background
   * while the user still views the current specimen. Returns an empty array when the
   * next picks are stochastic (post-exploration Thompson sampling) so no blind
   * prefetch wastes LRU slots.
   */
  public peekNextSpecimenTypes(count = 2): FractalType[] {
    const out: FractalType[] = [];
    // Next "Далее" clicks replay existing history items — their types are known exactly.
    for (let i = this.currentSpecimenIndex + 1; i < this.history.length && out.length < count; i++) {
      out.push(this.history[i].type);
    }
    // At/past the tail: exploration mode breeds the next sequential types — also exact.
    // Mirrors breedNextSpecimen's showcase pass, which walks SOLID_EXPLORATION_TYPES (the
    // curated forms), so the prefetch warms the shaders that will actually be shown.
    if (this.EXPLORATION_MODE) {
      for (let k = this.explorationIndex; out.length < count && k < SOLID_EXPLORATION_TYPES.length; k++) {
        out.push(SOLID_EXPLORATION_TYPES[k]);
      }
    }
    return out;
  }

  public getHistory(): FractalSpecimen[] {
    return this.history;
  }

  public getCurrentIndex(): number {
    return this.currentSpecimenIndex;
  }

  // Get normalized aesthetic archetype preference vector (0 to 100%)
  public getArchetypeBreakdown(): { archetype: AestheticArchetype; label: string; percentage: number; score: number }[] {
    const rawScores: Record<AestheticArchetype, number> = {
      geometry: 0,
      complex: 0,
      minimal: 0,
      primes: 0,
      attractors: 0,
    };
    const counts: Record<AestheticArchetype, number> = {
      geometry: 0,
      complex: 0,
      minimal: 0,
      primes: 0,
      attractors: 0,
    };

    ALL_FRACTAL_TYPES.forEach(t => {
      const arch = getFractalArchetype(t);
      const aff = this.taste.typeAffinities[t] || 1.0;
      rawScores[arch] += aff;
      counts[arch]++;
    });

    const archetypes: AestheticArchetype[] = ['geometry', 'complex', 'minimal', 'primes', 'attractors'];
    const avgScores = archetypes.map(a => ({
      archetype: a,
      label: ARCHETYPE_LABELS[a],
      avg: counts[a] > 0 ? rawScores[a] / counts[a] : 1.0,
    }));

    const totalAvg = avgScores.reduce((acc, cur) => acc + cur.avg, 0);

    return avgScores.map(item => ({
      archetype: item.archetype,
      label: item.label,
      percentage: Math.round((item.avg / Math.max(0.0001, totalAvg)) * 100),
      score: Math.min(100, Math.round(item.avg * 25)),
    }));
  }

  // Suggest a render style based on fractal archetype and user preferences
  // Each archetype has natural render style affinities for maximum visual impact
  suggestRenderStyle(specimenType?: FractalType): RenderStyle {
    const styles: RenderStyle[] = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone', 'wireframe', 'heatmap', 'neon'];
    
    // If we have a specimen type, use archetype-based suggestion
    if (specimenType) {
      const arch = getFractalArchetype(specimenType);
      // Each archetype has natural render style affinities
      const archetypeStyles: Record<AestheticArchetype, RenderStyle[]> = {
        geometry: ['solid', 'gemstone', 'topo', 'wireframe'], // Geometric fractals: PBR, crystal, or the raw lattice
        complex: ['hologram', 'quantum', 'iridescent', 'heatmap'], // Complex fractals: holographic + escape-time density
        minimal: ['topo', 'solid', 'gemstone', 'wireframe'], // Minimal fractals: topographic clarity or clean wireframe
        primes: ['quantum', 'hologram', 'iridescent', 'heatmap'], // Prime fractals: spectral + iteration-density heat
        attractors: ['xray', 'quantum', 'hologram', 'neon'], // Attractors: medical-scan or glowing neon tubes
      };
      const preferred = archetypeStyles[arch] || styles;
      // 60% chance to pick from archetype-preferred styles, 40% random for variety
      if (Math.random() < 0.6 && preferred.length > 0) {
        return preferred[Math.floor(Math.random() * preferred.length)];
      }
    }
    
    // Fallback: weighted random with 'solid' as most visually rich
    const r = Math.random();
    if (r < 0.35) return 'solid';
    const idx = Math.floor((r - 0.35) / 0.65 * (styles.length - 1));
    return styles[Math.min(idx + 1, styles.length - 1)];
  }
}
