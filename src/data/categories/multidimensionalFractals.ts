/**
 * Multidimensional Algebraic Fractals (Category 4)
 * Fractals in 4D and higher-dimensional spaces
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const MULTIDIMENSIONAL_FRACTALS: CanonicalFractal[] = [
  {
    id: 'quaternion-mandelbrot',
    name: 'Кватернионный Мандельброт 4D',
    englishName: '4D Quaternion Mandelbrot',
    category: 'multidimensional',
    formula: 'q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0',
    dimension: 'D_4D = 4.0, D_3D-сечения = 2.0 - 3.0',
    generatorRule: 'Итерации в теле алгебры кватернионов ℍ (1, i, j, k)',
    description: 'Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.',
    phiPiRelation: 'Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.',
    enginePreset: {
      type: 'quaternionMandelbrot',
      compositeOp: 'smoothMorph',
      zoom: 3.0,
      rotX: 0.4,
      rotY: 0.25,
    }
  },
  {
    id: 'quaternion-julia',
    name: 'Кватернионный Жюлиа 4D',
    englishName: '4D Quaternion Julia',
    category: 'multidimensional',
    formula: 'q_{n+1} = q_n² + C, C = const ∈ ℍ',
    dimension: 'D ≈ 2.5 - 3.2 в 3D проекции',
    generatorRule: '4D сечение динамической системы кватернионов при фиксированном векторе C',
    description: 'Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.',
    phiPiRelation: 'Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).',
    enginePreset: {
      type: 'quaternionJulia',
      compositeOp: 'smoothMorph',
      zoom: 2.8,
    }
  },
  {
    id: 'mandelbulb-3d',
    name: 'Mandelbulb 3D',
    englishName: 'Mandelbulb 3D (White & Nylander)',
    category: 'multidimensional',
    formula: 'v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c',
    dimension: 'D ≈ 2.7 - 2.9',
    generatorRule: 'Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)',
    description: 'Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.',
    phiPiRelation: 'Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.',
    enginePreset: {
      type: 'mandelbulb',
      compositeOp: 'smoothMorph',
      iterations: 24,
      zoom: 3.1,
    }
  },
  {
    id: 'mandelbox-3d',
    name: 'Mandelbox 3D',
    englishName: 'Mandelbox 3D (Tom Lowe)',
    category: 'multidimensional',
    formula: 'v ↦ s · sphereFold(boxFold(v)) + c',
    dimension: 'D ≈ 2.3 - 2.8',
    generatorRule: 'Циклическое складывание кубического пространства (box fold) и сферическая инверсия',
    description: '3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.',
    phiPiRelation: 'Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.',
    enginePreset: {
      type: 'mandelbox',
      boxFold: 1.2,
      sphereFold: 0.65,
      compositeOp: 'smoothUnion',
      zoom: 3.2,
    }
  },
  {
    id: 'jerusalem-cube',
    name: 'Иерусалимский куб',
    englishName: 'Jerusalem Cube (Eric Baird)',
    category: 'multidimensional',
    formula: 'Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)',
    dimension: 'D ≈ 2.529',
    generatorRule: 'Вырезание крестообразных отверстий с пропорциями золотого сечения',
    description: 'Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.',
    phiPiRelation: 'Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.',
    enginePreset: {
      type: 'jerusalemCube',
      compositeOp: 'smoothUnion',
      zoom: 3.1,
    }
  },
  {
    id: 'kleinian-groups',
    name: 'Клейниановы группы (Предельные множества)',
    englishName: 'Kleinian Limit Sets / Schottky Groups',
    category: 'multidimensional',
    formula: 'γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)',
    dimension: 'D ≈ 1.3 - 2.7',
    generatorRule: 'Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³',
    description: 'Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.',
    phiPiRelation: 'Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.',
    enginePreset: {
      type: 'kleinianLimit',
      compositeOp: 'smoothMorph',
      zoom: 2.9,
    }
  },
];
