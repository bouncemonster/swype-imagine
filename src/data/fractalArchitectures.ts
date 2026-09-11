/**
 * Fractal architecture definitions for the ControlsPanel "Architectures" tab.
 * Extracted from ControlsPanel.tsx to reduce monolith size.
 */
import { FractalType } from '../types/fractal';

export interface FractalArchitecture {
  id: FractalType;
  label: string;
  desc: string;
  formula: string;
  group: 'golden' | 'primes' | 'tpms' | 'manifolds' | 'classic';
}

export const fractalArchitectures: FractalArchitecture[] = [
  // 1. Geometric Symmetry & Golden Ratio φ
  { 
    id: 'phyllotaxis', 
    label: 'Филлотаксис Фибоначчи 3D', 
    desc: 'Решетка подсолнуха, свернутая по золотому углу 137.508°',
    formula: 'θ = n · 137.5°, r = c√n, z = f(φ)',
    group: 'golden'
  },
  { 
    id: 'mandelbulb', 
    label: 'Золотой Мандельбульб 3D', 
    desc: 'Сферическая гармоника Mandelbulb со степенью n = 5 + φ',
    formula: 'v ↦ v^(5+φ) + c',
    group: 'golden'
  },
  { 
    id: 'icosahedral', 
    label: 'Золотой Икосаэдр IFS', 
    desc: 'Симметрия правильного икосаэдра с золотым масштабом φ',
    formula: 'p ↦ abs(p) · φ - (φ - 1.0)',
    group: 'golden'
  },
  { 
    id: 'fibonacciSnowflake', 
    label: 'Снежинка Фибоначчи 3D IFS', 
    desc: 'Кристаллический золотой фрактал Коха с масштабным фактором 1/φ',
    formula: 'p ↦ fold(p) · φ - 0.55(φ - 1.0)',
    group: 'golden'
  },
  { 
    id: 'poincareSphere', 
    label: 'Сфера Пуанкаре Додекаэдра', 
    desc: 'Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями',
    formula: 'x ↦ γ_i(x) ∈ SO(3), face reflection',
    group: 'golden'
  },

  // 2. Number Theory & Prime Numbers
  { 
    id: 'primeSpiral', 
    label: 'Спираль Простых (Улам-Закс)', 
    desc: 'Логарифмическая спираль распределения простых чисел с фазой π',
    formula: 'f(n) = 4n² + bn + c, p ∈ ℙ',
    group: 'primes'
  },
  { 
    id: 'gaussianPrimes', 
    label: 'Решетка Простых Гаусса ℤ[i]', 
    desc: 'Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²',
    formula: 'cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p',
    group: 'primes'
  },
  { 
    id: 'riemannZeta', 
    label: 'Резонатор Дзета-Римана', 
    desc: 'Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it',
    formula: 'ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n',
    group: 'primes'
  },
  { 
    id: 'eulerTotientSpiral', 
    label: 'Спираль Эйлера φ(n) & π', 
    desc: 'Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом',
    formula: 'θ · (φ/π) - 2 ln(r) + 1.5 z = 0',
    group: 'primes'
  },

  // 3. Minimal Surfaces & TPMS
  { 
    id: 'gyroid', 
    label: 'Био-Гироид Поверхность', 
    desc: 'Трипериодическая минимальная поверхность нулевой средней кривизны',
    formula: 'sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0',
    group: 'tpms'
  },
  { 
    id: 'neoviusMinimal', 
    label: 'Поверхность Неовиуса-Шёна', 
    desc: 'TPMS минимальная поверхность нулевой кривизны H = 0',
    formula: '3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0',
    group: 'tpms'
  },
  { 
    id: 'spiralTunnel', 
    label: 'Логарифмический Туннель φ', 
    desc: 'Бесконечный туннель золотого сечения с глубоким зумом',
    formula: 'r(θ) = a · φ^(2θ/π)',
    group: 'tpms'
  },

  // 4. 4D Manifolds & Quantum Topology
  { 
    id: 'quaternionJulia', 
    label: 'Кватернион Юлия 4D', 
    desc: 'Гиперкомплексный 4D срез Жюлиа на орбите золотого тора',
    formula: 'q ↦ q² + c(φ, t) ∈ ℍ',
    group: 'manifolds'
  },
  { 
    id: 'quaternionMandelbrot', 
    label: '4D Мандельброт Золотых Сечений', 
    desc: 'Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ',
    formula: 'Z ↦ Z² + C, C.w = 0.25 sin(t·φ)',
    group: 'manifolds'
  },
  { 
    id: 'hopfFibration', 
    label: 'Расслоение Хопфа S³→S²', 
    desc: 'Топологическое расслоение 3-сферы окружностями Вилларсо',
    formula: 'S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂',
    group: 'manifolds'
  },
  { 
    id: 'calabiYau', 
    label: 'Многообразие Калаби-Яу 5-Fold', 
    desc: 'Компактное комплексное многообразие теории суперструн',
    formula: 'z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0',
    group: 'manifolds'
  },
  { 
    id: 'cliffordTorus4D', 
    label: '4D Тор Клиффорда в S³', 
    desc: 'Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией',
    formula: 'x² + y² = z² + w² = 1/2 in S³',
    group: 'manifolds'
  },
  { 
    id: 'cliffordKlein', 
    label: 'Золотой Узел Клиффорда-Клейна', 
    desc: '4D бутылка Клейна с золотым геликоидным шагом',
    formula: 'u ↦ fig8(u, v) ⊂ ℝ⁴',
    group: 'manifolds'
  },
  { 
    id: 'kleinianLimit', 
    label: 'Фрактал Группы Клейна (Шоттки)', 
    desc: 'Предельное множество Мёбиусовых конформных инверсий сфер',
    formula: 'γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)',
    group: 'manifolds'
  },
  { 
    id: 'quasicrystal', 
    label: 'Квазикристалл Пенроуза-Шехтмана', 
    desc: 'Икосаэдрический квазикристалл с апериодическим золотым порядком',
    formula: 'ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron',
    group: 'manifolds'
  },

  // 5. Classical Fractals
  { 
    id: 'mandelbox', 
    label: 'Куб Мандельбокса 3D', 
    desc: 'Складки пространства box-fold и sphere-fold по Теттли',
    formula: 'p ↦ s · fold(p) + c',
    group: 'classic'
  },
  { 
    id: 'menger', 
    label: 'Губка Менгера-Иерусалима', 
    desc: 'Трехмерное ковровое сито Серпинского-Менгера',
    formula: 'dim_H = ln(20)/ln(3) ≈ 2.7268',
    group: 'classic'
  },
  { 
    id: 'sierpinskiOcta', 
    label: 'Октаэдрическая Звезда Серпинского', 
    desc: 'Рекурсивная звездчатая пирамида IFS',
    formula: 'p ↦ 2p - sign(p) · (φ - 1.0)',
    group: 'classic'
  },
  { 
    id: 'apollonian', 
    label: 'Прокладка Аполлония (Inversion)', 
    desc: 'Конформные инверсии сфер со сжатием k = 1/φ',
    formula: 'p ↦ p/|p|² · (k·φ) - φ',
    group: 'classic'
  },
];
