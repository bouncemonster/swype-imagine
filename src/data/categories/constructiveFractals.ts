/**
 * Constructive Fractals (Category 2)
 * Fractals built by iterative geometric construction
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const CONSTRUCTIVE_FRACTALS: CanonicalFractal[] = [
  {
    id: 'sierpinski-triangle',
    name: 'Треугольник Серпинского',
    englishName: 'Sierpiński Triangle',
    category: 'constructive',
    formula: 'N = 3, S = 2',
    dimension: 'D = ln(3)/ln(2) ≈ 1.58496',
    generatorRule: 'Удаление центрального перевернутого треугольника',
    description: 'Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.',
    phiPiRelation: 'Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.',
    enginePreset: {
      type: 'sierpinskiOcta',
      compositeOp: 'smoothMorph',
      zoom: 2.8,
    }
  },
  {
    id: 'sierpinski-carpet',
    name: 'Ковер Серпинского',
    englishName: 'Sierpiński Carpet',
    category: 'constructive',
    formula: 'N = 8, S = 3',
    dimension: 'D = ln(8)/ln(3) ≈ 1.89279',
    generatorRule: 'Деление квадрата на 9 частей, удаление центрального',
    description: 'Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.',
    phiPiRelation: 'Универсальная плоская кривая Менгера; мера Лебега стремится к 0.',
    enginePreset: {
      type: 'menger',
      compositeOp: 'smoothMorph',
      boxFold: 1.0,
      zoom: 2.9,
    }
  },
  {
    id: 'menger-sponge',
    name: 'Губка Менгера',
    englishName: 'Menger Sponge',
    category: 'constructive',
    formula: 'N = 20, S = 3, V_∞ = 0, A_∞ = ∞',
    dimension: 'D = ln(20)/ln(3) ≈ 2.72683',
    generatorRule: 'Куб делится на 27 кубиков, удаляются 7 центральных',
    description: 'Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.',
    phiPiRelation: 'Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.',
    enginePreset: {
      type: 'menger',
      compositeOp: 'smoothUnion',
      boxFold: 1.2,
      zoom: 3.1,
    }
  },
  {
    id: 'pythagoras-tree-classic',
    name: 'Дерево Пифагора классическое',
    englishName: 'Pythagoras Tree (Symmetric)',
    category: 'constructive',
    formula: 'a² + b² = c², a = b = c/√2',
    dimension: 'D = 2.0 (перекрытия в пределе)',
    generatorRule: 'Построение квадратов на сторонах прямоугольного равнобедренного треугольника',
    description: 'Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).',
    phiPiRelation: 'Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.',
    enginePreset: {
      type: 'pythagorasTree3D',
      compositeOp: 'smoothMorph',
      zoom: 2.6,
      rotX: 0.35,
    }
  },
  {
    id: 'pythagoras-tree-windblown',
    name: 'Дерево Пифагора обдуваемое',
    englishName: 'Windblown Pythagoras Tree',
    category: 'constructive',
    formula: 'α = 60° (π/3), β = 30° (π/6)',
    dimension: 'D ≈ 1.85',
    generatorRule: 'Разноугольное ветвление прямоугольного треугольника',
    description: 'Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.',
    phiPiRelation: 'Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.',
    enginePreset: {
      type: 'pythagorasTree3D',
      compositeOp: 'goldenSpiralFold',
      warpStrength: 0.3,
      zoom: 2.7,
    }
  },
  {
    id: 'pythagoras-tree-naked',
    name: 'Обнаженное дерево Пифагора',
    englishName: 'Naked Pythagoras Tree',
    category: 'constructive',
    formula: 'Граф центров квадратов G(V, E)',
    dimension: 'D ≈ 1.73',
    generatorRule: 'Отрезки соединяют только центры смежных квадратов',
    description: 'Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центр квадратов дерева Пифагора.',
    phiPiRelation: 'Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.',
    enginePreset: {
      type: 'pythagorasTree3D',
      compositeOp: 'domainWarp',
      warpStrength: 0.25,
      zoom: 2.8,
    }
  },
  {
    id: 'apollonian-gasket',
    name: 'Сетка Аполлония (Упаковка Аполлония)',
    englishName: 'Apollonian Gasket / Sphere Packing',
    category: 'constructive',
    formula: '(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)',
    dimension: 'D ≈ 1.30568 (в 3D D ≈ 2.4739)',
    generatorRule: 'Теорема Содди о четырех касающихся окружностях',
    description: 'Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.',
    phiPiRelation: 'Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.',
    enginePreset: {
      type: 'apollonian',
      compositeOp: 'smoothUnion',
      sphereFold: 0.75,
      zoom: 3.0,
    }
  },
  {
    id: 'vicsek-fractal',
    name: 'Фрактал Вичека',
    englishName: 'Vicsek Fractal (Box / Cross)',
    category: 'constructive',
    formula: 'N = 5, S = 3',
    dimension: 'D = ln(5)/ln(3) ≈ 1.46497',
    generatorRule: 'Деление квадрата на 9 частей, сохранение центрального креста',
    description: 'Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.',
    phiPiRelation: 'Идеальная симметрия группы D_4 (повороты на π/2).',
    enginePreset: {
      type: 'jerusalemCube',
      compositeOp: 'smoothMorph',
      boxFold: 1.1,
      zoom: 2.9,
    }
  },
  {
    id: 't-square-fractal',
    name: 'Т-квадрат',
    englishName: 'T-Square Fractal',
    category: 'constructive',
    formula: 'A_∞ = 2 A_0',
    dimension: 'D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)',
    generatorRule: 'Итеративное наложение уменьшенных квадратов на углы',
    description: 'Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.',
    phiPiRelation: 'Ограниченная фрактальная граница со степенью масштабирования 1/2.',
    enginePreset: {
      type: 'menger',
      compositeOp: 'domainWarp',
      warpStrength: 0.2,
      zoom: 3.0,
    }
  },
  {
    id: 'sierpinski-cross',
    name: 'Крест Серпинского',
    englishName: 'Sierpiński Cross',
    category: 'constructive',
    formula: 'D = ln(5)/ln(3) ≈ 1.465',
    dimension: 'D ≈ 1.465 (в 3D D ≈ 2.32)',
    generatorRule: 'Пространственное пересечение плоскостей Серпинского',
    description: 'Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.',
    phiPiRelation: 'Инвариантен относительно октаэдрических вращений SO(3).',
    enginePreset: {
      type: 'jerusalemCube',
      compositeOp: 'smoothUnion',
      zoom: 3.1,
    }
  },
  {
    id: 'sierpinski-pentagon',
    name: 'Пятиугольник Серпинского (Пентафрактал)',
    englishName: 'Sierpiński Pentagon (Pentaflake)',
    category: 'constructive',
    formula: 'N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²',
    dimension: 'D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228',
    generatorRule: '5 копий пятиугольника по углам, удаление центра',
    description: 'Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.',
    phiPiRelation: 'АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!',
    enginePreset: {
      type: 'icosahedral',
      compositeOp: 'smoothMorph',
      phiMultiplier: 1.61803398875,
      zoom: 2.7,
    }
  },
  {
    id: 'hexafractal',
    name: 'Гексафрактал (Гексафлейк)',
    englishName: 'Hexaflake',
    category: 'constructive',
    formula: 'N = 7, S = 3',
    dimension: 'D = ln(7)/ln(3) ≈ 1.77124',
    generatorRule: 'Шесть копий шестиугольника вокруг центрального седьмого',
    description: 'Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.',
    phiPiRelation: 'Гексагональные углы 2π/6 = 60° = π/3.',
    enginePreset: {
      type: 'quasicrystal',
      compositeOp: 'smoothUnion',
      zoom: 2.8,
    }
  },
  {
    id: 'ivezic-fractal',
    name: 'Фрактал Ивезича',
    englishName: 'Ivezić n-Simplex Fractal',
    category: 'constructive',
    formula: 'D(n) = ln(n+1)/ln(2)',
    dimension: 'D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32',
    generatorRule: 'Рекурсивное деление n-мерного регулярного симплекса',
    description: 'Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.',
    phiPiRelation: 'Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).',
    enginePreset: {
      type: 'sierpinskiOcta',
      hybridType: 'calabiYau',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.35,
      zoom: 3.0,
    }
  },
  {
    id: 'levy-snowflake',
    name: 'Снежинка Леви',
    englishName: 'Lévy Snowflake',
    category: 'constructive',
    formula: '∂(Lévy C curve ∪ rot)',
    dimension: 'D = 2.0 (граница D ≈ 1.934)',
    generatorRule: 'Замкнутая суперпозиция 8 C-кривых Леви',
    description: 'Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.',
    phiPiRelation: 'Периодичность 2π/8 = π/4.',
    enginePreset: {
      type: 'dragonCurveIFS',
      compositeOp: 'smoothUnion',
      zoom: 2.7,
    }
  },
  {
    id: 'sierpinski-pyramid',
    name: 'Пирамида Серпинского (Тетраэдр Серпинского)',
    englishName: 'Sierpiński Tetrahedron',
    category: 'constructive',
    formula: 'N = 4, S = 2, V_∞ = 0',
    dimension: 'D = ln(4)/ln(2) = 2.000',
    generatorRule: '4 тетраэдра половинного размера в вершинах',
    description: 'Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.',
    phiPiRelation: 'Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.',
    enginePreset: {
      type: 'sierpinskiOcta',
      compositeOp: 'smoothMorph',
      zoom: 2.9,
      rotX: 0.4,
    }
  },
];
