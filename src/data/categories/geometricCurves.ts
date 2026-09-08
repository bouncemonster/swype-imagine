/**
 * Geometric Curves & L-Systems (Category 1)
 * Fractals based on L-systems and space-filling curves
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const GEOMETRIC_CURVES: CanonicalFractal[] = [
  {
    id: 'koch-curve',
    name: 'Кривая Коха',
    englishName: 'Koch Curve',
    category: 'geometric_curves',
    formula: 'L_{n+1} = (4/3) L_n',
    dimension: 'D = ln(4)/ln(3) ≈ 1.26186',
    generatorRule: 'F → F+F--F+F (угол 60°)',
    description: 'Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.',
    phiPiRelation: 'Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.',
    enginePreset: {
      type: 'fibonacciSnowflake',
      compositeOp: 'smoothMorph',
      zoom: 3.0,
      rotX: 0.5,
      rotY: 0.3,
    }
  },
  {
    id: 'koch-snowflake',
    name: 'Снежинка Коха',
    englishName: 'Koch Snowflake',
    category: 'geometric_curves',
    formula: 'A_∞ = (8/5) A_0, P_∞ = ∞',
    dimension: 'D = ln(4)/ln(3) ≈ 1.26186',
    generatorRule: 'Аксиома: F--F--F, F → F+F--F+F',
    description: 'Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.',
    phiPiRelation: 'Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.',
    enginePreset: {
      type: 'fibonacciSnowflake',
      hybridType: 'sierpinskiOcta',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.3,
      zoom: 2.8,
    }
  },
  {
    id: 'koch-antisnowflake',
    name: 'Антиснежинка Коха',
    englishName: 'Koch Anti-Snowflake',
    category: 'geometric_curves',
    formula: 'A_∞ = (2/5) A_0, P_∞ = ∞',
    dimension: 'D = ln(4)/ln(3) ≈ 1.26186',
    generatorRule: 'Аксиома: F--F--F, F → F-F++F-F',
    description: 'Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.',
    phiPiRelation: 'Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).',
    enginePreset: {
      type: 'fibonacciSnowflake',
      compositeOp: 'smoothCarve',
      zoom: 2.9,
    }
  },
  {
    id: 'levy-c-curve',
    name: 'Кривая Леви (C-кривая)',
    englishName: 'Lévy C curve',
    category: 'geometric_curves',
    formula: 's = 1/√2, θ = 45° = π/4',
    dimension: 'D = 2 (по границе D ≈ 1.9340)',
    generatorRule: 'F → +F--F+',
    description: 'Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.',
    phiPiRelation: 'Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.',
    enginePreset: {
      type: 'dragonCurveIFS',
      compositeOp: 'smoothMorph',
      zoom: 2.6,
      rotX: 0.3,
    }
  },
  {
    id: 'harter-heighway-dragon',
    name: 'Дракон Хартера — Хейтуэя',
    englishName: 'Harter-Heighway Dragon',
    category: 'geometric_curves',
    formula: 'f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2',
    dimension: 'D = 2 (граница D ≈ 1.5236)',
    generatorRule: 'X → X+YF+, Y → -FX-Y (угол 90° = π/2)',
    description: 'Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.',
    phiPiRelation: 'Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.',
    enginePreset: {
      type: 'dragonCurveIFS',
      compositeOp: 'domainWarp',
      warpStrength: 0.4,
      zoom: 2.7,
    }
  },
  {
    id: 'twenmey-dragon',
    name: 'Дракон Твенми',
    englishName: 'Twenmey Dragon',
    category: 'geometric_curves',
    formula: 'θ_n = (-1)^n · π/2',
    dimension: 'D = 2.0 (граница D ≈ 1.58)',
    generatorRule: 'Чередование знака угла поворота на каждом шаге итерации',
    description: 'Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.',
    phiPiRelation: 'Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.',
    enginePreset: {
      type: 'dragonCurveIFS',
      hybridType: 'spiralTunnel',
      compositeOp: 'goldenSpiralFold',
      hybridBlend: 0.35,
      zoom: 2.5,
    }
  },
  {
    id: 'golden-dragon',
    name: 'Золотой дракон',
    englishName: 'Golden Dragon Curve',
    category: 'geometric_curves',
    formula: 'r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1',
    dimension: 'D = 2.0 (самоподобие φ)',
    generatorRule: 'Деление отрезка в отношении золотого сечения 1:φ',
    description: 'Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.',
    phiPiRelation: 'Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).',
    enginePreset: {
      type: 'dragonCurveIFS',
      hybridType: 'phyllotaxis',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.4,
      zoom: 2.6,
    }
  },
  {
    id: 'minkowski-curve',
    name: 'Кривая Минковского (Сосиска Минковского)',
    englishName: 'Minkowski Sausage',
    category: 'geometric_curves',
    formula: 'N = 8, S = 4',
    dimension: 'D = ln(8)/ln(4) = 1.500',
    generatorRule: 'F → F+F-F-FF+F+F-F (угол 90°)',
    description: 'Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.',
    phiPiRelation: 'Ортогональная дискретность π/2; целое полуцелое значение размерности.',
    enginePreset: {
      type: 'hilbertCurve3D',
      compositeOp: 'smoothMorph',
      boxFold: 1.5,
      zoom: 3.1,
    }
  },
  {
    id: 'peano-curve',
    name: 'Кривая Пеано',
    englishName: 'Peano Curve',
    category: 'geometric_curves',
    formula: 'f: [0, 1] ↠ [0, 1]², N = 9, S = 3',
    dimension: 'D = ln(9)/ln(3) = 2.000',
    generatorRule: 'F → F+F-F-F-F+F+F+F-F (угол 90°)',
    description: 'Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.',
    phiPiRelation: 'Сюръективное непрерывное отображение; шаг дискретизации π/2.',
    enginePreset: {
      type: 'hilbertCurve3D',
      compositeOp: 'smoothUnion',
      zoom: 2.9,
    }
  },
  {
    id: 'hilbert-curve',
    name: 'Кривая Гильберта 2D/3D',
    englishName: 'Hilbert Space-Filling Curve',
    category: 'geometric_curves',
    formula: 'f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}',
    dimension: 'D = 2.0 (в 3D D = 3.0)',
    generatorRule: 'L-система обхода ячеек 2^n x 2^n',
    description: 'Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.',
    phiPiRelation: 'Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.',
    enginePreset: {
      type: 'hilbertCurve3D',
      compositeOp: 'smoothUnion',
      zoom: 3.2,
      rotX: 0.45,
      rotY: 0.35,
    }
  },
  {
    id: 'sierpinski-curve',
    name: 'Кривая Серпинского',
    englishName: 'Sierpiński Curve',
    category: 'geometric_curves',
    formula: 'D = ln(4)/ln(2) = 2.0',
    dimension: 'D = 2.000',
    generatorRule: 'Замкнутый маршрут вокруг треугольников сетки',
    description: 'Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.',
    phiPiRelation: 'Углы поворота 45° (π/4) и 90° (π/2).',
    enginePreset: {
      type: 'sierpinskiOcta',
      compositeOp: 'smoothMorph',
      zoom: 2.8,
    }
  },
  {
    id: 'moore-curve',
    name: 'Кривая Мура',
    englishName: 'Moore Curve',
    category: 'geometric_curves',
    formula: 'N = 4^n, S = 2^n',
    dimension: 'D = ln(4)/ln(2) = 2.000',
    generatorRule: 'Замкнутый вариант кривой Гильберта',
    description: 'Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.',
    phiPiRelation: 'Симметричный квадрантный обход, кратный π/2.',
    enginePreset: {
      type: 'hilbertCurve3D',
      hybridType: 'spiralTunnel',
      compositeOp: 'smoothMorph',
      hybridBlend: 0.25,
      zoom: 3.0,
    }
  },
  {
    id: 'gosper-curve',
    name: 'Кривая Госпера (Flowsnake)',
    englishName: 'Gosper Curve (Flowsnake)',
    category: 'geometric_curves',
    formula: 'N = 7, S = √7',
    dimension: 'D = ln(7)/ln(√7) = 2.000',
    generatorRule: 'L-система на гексагональной сетке (угол 60° = π/3)',
    description: 'Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.',
    phiPiRelation: 'Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.',
    enginePreset: {
      type: 'quasicrystal',
      hybridType: 'phyllotaxis',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.35,
      zoom: 2.8,
    }
  },
  {
    id: 'cesaro-curve',
    name: 'Кривая Чезаро',
    englishName: 'Cesàro Curve',
    category: 'geometric_curves',
    formula: 'D = ln(4)/ln(2(1 + cos α))',
    dimension: 'D ∈ (1.0, 2.0] при α ∈ (0, π/2)',
    generatorRule: 'Кривая Коха с переменным углом при вершине',
    description: 'Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.',
    phiPiRelation: 'При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.',
    enginePreset: {
      type: 'fibonacciSnowflake',
      compositeOp: 'domainWarp',
      warpStrength: 0.3,
      zoom: 2.7,
    }
  },
  {
    id: 'drummond-curve',
    name: 'Кривая Драммонда',
    englishName: 'Drummond Fractal Curve',
    category: 'geometric_curves',
    formula: 'θ = π / k, k ∈ ℝ',
    dimension: 'D ≈ 1.45 - 1.85',
    generatorRule: 'Циклические L-системы с дробными иррациональными углами',
    description: 'Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.',
    phiPiRelation: 'Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.',
    enginePreset: {
      type: 'phyllotaxis',
      compositeOp: 'goldenSpiralFold',
      zoom: 2.6,
    }
  },
  {
    id: 'mcwhorter-pentigree',
    name: 'Снежинка Коха — МакВортера',
    englishName: 'McWhorter Pentigree',
    category: 'geometric_curves',
    formula: 'N = 5, S = (3 - √5)/2',
    dimension: 'D = ln(5)/ln(1 + φ) ≈ 1.672',
    generatorRule: 'Асимметричный пентагональный генератор',
    description: 'Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.',
    phiPiRelation: 'Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.',
    enginePreset: {
      type: 'icosahedral',
      compositeOp: 'smoothMorph',
      zoom: 2.5,
    }
  },
  {
    id: 'rice-curve',
    name: 'Кривая Райса',
    englishName: 'Rice Curve',
    category: 'geometric_curves',
    formula: 'θ_1 = π/3, θ_2 = 2π/5',
    dimension: 'D ≈ 1.78',
    generatorRule: 'Неортогональные развороты в пространственно-заполняющих кривых',
    description: 'Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.',
    phiPiRelation: 'Сочетание углов π/3 и пентагональных пропорций золотого угла.',
    enginePreset: {
      type: 'dragonCurveIFS',
      hybridType: 'quasicrystal',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.3,
      zoom: 2.8,
    }
  },
  {
    id: 'polya-curve',
    name: 'Кривая Пойи',
    englishName: 'Pólya Sweep Curve',
    category: 'geometric_curves',
    formula: 'T → T_1 ∪ T_2',
    dimension: 'D = 2.000',
    generatorRule: 'Рекурсивный обход прямоугольного треугольника с высотой',
    description: 'Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.',
    phiPiRelation: 'Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.',
    enginePreset: {
      type: 'pythagorasTree3D',
      compositeOp: 'smoothMorph',
      zoom: 2.7,
    }
  },
  {
    id: 'sierpinski-arrowhead',
    name: 'Стреловидная кривая Серпинского',
    englishName: 'Sierpiński Arrowhead Curve',
    category: 'geometric_curves',
    formula: 'X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)',
    dimension: 'D = ln(3)/ln(2) ≈ 1.58496',
    generatorRule: 'Двухсимвольная L-система сходящаяся к треугольнику',
    description: 'Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.',
    phiPiRelation: 'Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.',
    enginePreset: {
      type: 'sierpinskiOcta',
      compositeOp: 'smoothUnion',
      zoom: 2.9,
    }
  },
];
