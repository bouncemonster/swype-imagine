/**
 * Stochastic (Random) Fractals & Noise (Category 6)
 * Fractals based on random processes and noise functions
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const STOCHASTIC_FRACTALS: CanonicalFractal[] = [
  {
    id: 'perlin-noise',
    name: 'Фрактальный шум Перлина',
    englishName: 'Fractal Perlin Noise (fBm)',
    category: 'stochastic',
    formula: 'f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)',
    dimension: 'D = 3 - H, где H — показатель Херста',
    generatorRule: 'Градиентный шум Кена Перлина, суммируемый по октавам',
    description: 'Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.',
    phiPiRelation: 'Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.',
    enginePreset: {
      type: 'neoviusMinimal',
      compositeOp: 'domainWarp',
      warpStrength: 0.35,
      zoom: 3.0,
    }
  },
  {
    id: 'simplex-noise',
    name: 'Симплексный шум (Simplex Noise)',
    englishName: 'Simplex Noise',
    category: 'stochastic',
    formula: 'Разбиение пространства на симплексы Шлефли A_n',
    dimension: 'D = 3 - H',
    generatorRule: 'Замена гиперкубической сетки на симплексную решетку',
    description: 'Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.',
    phiPiRelation: 'Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.',
    enginePreset: {
      type: 'gyroid',
      compositeOp: 'smoothMorph',
      zoom: 3.1,
    }
  },
  {
    id: 'diamond-square',
    name: 'Алгоритм Diamond-Square (Плазма)',
    englishName: 'Diamond-Square Plasma Fractal',
    category: 'stochastic',
    formula: 'h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}',
    dimension: 'D = 3 - H ∈ (2.0, 3.0)',
    generatorRule: 'Рекурсивное чередование шагов ромба и квадрата по сетке',
    description: 'Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.',
    phiPiRelation: 'Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.',
    enginePreset: {
      type: 'dlaCluster',
      compositeOp: 'smoothMorph',
      zoom: 2.8,
    }
  },
  {
    id: 'fractional-brownian-motion',
    name: 'Дробное броуновское движение (fBm)',
    englishName: 'Fractional Brownian Motion (fBm)',
    category: 'stochastic',
    formula: 'E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})',
    dimension: 'D = n + 1 - H (Мандельброт и Ван Несс, 1968)',
    generatorRule: 'Гауссовский процесс с долговременной корреляцией и параметром Херста H',
    description: 'Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.',
    phiPiRelation: 'Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.',
    enginePreset: {
      type: 'dlaCluster',
      hybridType: 'gyroid',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.35,
      zoom: 2.9,
    }
  },
  {
    id: 'dla-cluster',
    name: 'Диффузионно-ограниченная агрегация (ДОА / DLA)',
    englishName: 'Diffusion-Limited Aggregation (DLA)',
    category: 'stochastic',
    formula: 'N(r) ∝ r^{D_{DLA}}',
    dimension: 'D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)',
    generatorRule: 'Случайное блуждание броуновских частиц и их слипание с растущим кластером',
    description: 'Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.',
    phiPiRelation: 'Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.',
    enginePreset: {
      type: 'dlaCluster',
      compositeOp: 'smoothUnion',
      zoom: 3.2,
      rotX: 0.35,
      rotY: 0.25,
    }
  },
  {
    id: 'percolation-clusters',
    name: 'Кластеры перколяции',
    englishName: 'Percolation Lattice Clusters',
    category: 'stochastic',
    formula: 'P(p) ∝ (p - p_c)^β при p → p_c',
    dimension: 'D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)',
    generatorRule: 'Случайное заполнение узлов решетки с критической вероятностью p_c',
    description: 'Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.',
    phiPiRelation: 'Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.',
    enginePreset: {
      type: 'neoviusMinimal',
      compositeOp: 'fractalLattice',
      zoom: 3.1,
    }
  },
  {
    id: 'dielectric-breakdown',
    name: 'Фрактал лавинного пробоя (Фигуры Лихтенберга)',
    englishName: 'Dielectric Breakdown Model (DBM / Lichtenberg)',
    category: 'stochastic',
    formula: '∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)',
    dimension: 'D ≈ 1.75 при η = 1',
    generatorRule: 'Решение уравнения Лапласа для электростатического потенциала с ростом разряда',
    description: 'Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.',
    phiPiRelation: 'Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.',
    enginePreset: {
      type: 'dlaCluster',
      compositeOp: 'domainWarp',
      warpStrength: 0.4,
      zoom: 3.0,
    }
  },
];
