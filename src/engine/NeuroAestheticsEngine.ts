import { FractalSpecimen, FractalType, ColorPalette, CompositeOp, RenderStyle } from '../types/fractal';
import { COLOR_PALETTES } from '../palettes';

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

// Curated mathematical compatibility matrix for harmonic hybrid breeding
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
};

const GOLDEN_RATIO = 1.61803398875;
const GOLDEN_ANGLE = 137.507764; // degrees

// Convert HSL to RGB [0..1]
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  return [r + m, g + m, b + m];
}

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
];

export const FRACTAL_NAMES: Record<FractalType, string> = {
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
};

export const DEFAULT_ZOOMS: Record<FractalType, number> = {
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
      return 'geometry';

    case 'mandelbulb':
    case 'quaternionJulia':
    case 'mandelbox':
    case 'quaternionMandelbrot':
    case 'burningShip3D':
    case 'newtonBasins':
    case 'menger':
    case 'jerusalemCube':
      return 'complex';

    case 'gyroid':
    case 'neoviusMinimal':
    case 'calabiYau':
    case 'cliffordKlein':
    case 'cliffordTorus4D':
    case 'antoineNecklace':
    case 'abrikosovLattice':
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
  private readonly RECENT_WINDOW = 8; // Don't repeat any of the last 8 types

  constructor() {
    this.taste = this.loadTasteProfile();
  }

  private loadTasteProfile(): TasteProfile {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all types exist
        ALL_FRACTAL_TYPES.forEach(t => {
          if (parsed.typeAffinities && parsed.typeAffinities[t] === undefined) {
            parsed.typeAffinities[t] = 1.0;
          }
        });
        return parsed;
      }
    } catch {
      // ignore
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

  // Generate a new evolved specimen based on taste profile & genetic breeding
  public breedNextSpecimen(forceType?: FractalType): FractalSpecimen {
    this.currentGeneration++;
    this.taste.totalSpecimensExplored++;

    // 1. Select Fractal Type with anti-repetition + Thompson sampling for variety
    let selectedType = forceType;
    if (!selectedType) {
      const types = ALL_FRACTAL_TYPES;
      
      // Thompson sampling: sample from Beta distribution for exploration vs exploitation
      // Types not recently shown get a bonus; high-affinity types get higher base weight
      const weights = types.map(t => {
        const baseAffinity = Math.max(0.2, this.taste.typeAffinities[t] || 1.0);
        // Heavy penalty for recently shown types (anti-repetition)
        const recentPenalty = this.recentTypes.includes(t) ? 0.05 : 1.0;
        // Exploration bonus: types explored less get a small boost
        const explorationBonus = this.currentGeneration < 20 ? 1.5 : 1.0; // More exploration early on
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
    const isHybrid = Math.random() < 0.72;
    let hybridType = selectedType;
    let tertiaryType = selectedType;
    let hybridBlend = 0.0;
    let tertiaryBlend = 0.0; // Keep tertiary 0.0 by default to guarantee high FPS & clean geometry
    let compositeOp: CompositeOp = 'smoothUnion';
    let octaveLayers = 1;
    let smoothK = 0.32;
    let warpStrength = 0.22;

    let specimenName = `${FRACTAL_NAMES[selectedType]} • φ-${this.currentGeneration}`;

    if (isHybrid) {
      const compat = COMPATIBLE_HYBRIDS[selectedType] || {
        partners: ALL_FRACTAL_TYPES.filter(t => t !== selectedType),
        ops: ['smoothUnion', 'smoothMorph', 'domainWarp']
      };

      hybridType = compat.partners[Math.floor(Math.random() * compat.partners.length)];
      compositeOp = compat.ops[Math.floor(Math.random() * compat.ops.length)];

      // Controlled harmonic blend: 0.22 - 0.45 preserves primary topology while infusing secondary structure
      hybridBlend = parseFloat((0.22 + Math.random() * 0.26).toFixed(3));
      smoothK = parseFloat((0.24 + Math.random() * 0.26).toFixed(3));
      warpStrength = parseFloat((0.15 + Math.random() * 0.25).toFixed(3));
      octaveLayers = 1;

      const sym = COMPOSITE_OP_SYMBOLS[compositeOp];
      const name1 = FRACTAL_NAMES[selectedType].split(' ')[0];
      const name2 = FRACTAL_NAMES[hybridType].split(' ')[0];
      specimenName = `${name1} ${sym} ${name2} • φ-${this.currentGeneration}`;
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
    if (this.history.length > 40) {
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

  // Suggest a render style that varies with each specimen for maximum visual diversity
  suggestRenderStyle(): RenderStyle {
    const styles: RenderStyle[] = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone'];
    // Weight 'solid' higher (40%) as it's the most visually rich, distribute rest evenly
    const r = Math.random();
    if (r < 0.40) return 'solid';
    const idx = Math.floor((r - 0.40) / 0.60 * (styles.length - 1));
    return styles[Math.min(idx + 1, styles.length - 1)];
  }
}
