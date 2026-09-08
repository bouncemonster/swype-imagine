/**
 * Iterated Function Systems (IFS) & Chaotic Attractors (Category 5)
 * Fractals from iterated affine transformations and chaotic dynamics
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const IFS_FRACTALS: CanonicalFractal[] = [
  {
    id: 'barnsley-fern',
    name: 'Папоротник Барнсли',
    englishName: 'Barnsley Fern IFS',
    category: 'ifs_attractors',
    formula: 'W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}',
    dimension: 'D ≈ 1.85',
    generatorRule: '4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}',
    description: 'Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.',
    phiPiRelation: 'Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.',
    enginePreset: {
      type: 'phyllotaxis',
      hybridType: 'pythagorasTree3D',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.35,
      zoom: 2.8,
    }
  },
  {
    id: 'fractal-flames',
    name: 'Фрактальное пламя (Fractal Flames)',
    englishName: 'Fractal Flames (Scott Draves)',
    category: 'ifs_attractors',
    formula: 'F(x) = ∑ w_i V_j(A_i x + b_i)',
    dimension: 'D зависит от нелинейных вариаций',
    generatorRule: 'Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг',
    description: 'Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.',
    phiPiRelation: 'Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.',
    enginePreset: {
      type: 'hopfFibration',
      hybridType: 'spiralTunnel',
      compositeOp: 'quantumResonance',
      hybridBlend: 0.45,
      zoom: 3.0,
    }
  },
  {
    id: 'lorenz-attractor',
    name: 'Странный аттрактор Лоренца',
    englishName: 'Lorenz Strange Attractor',
    category: 'ifs_attractors',
    formula: 'dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz',
    dimension: 'D_каплана-йорке ≈ 2.06 ± 0.01',
    generatorRule: 'Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)',
    description: 'Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.',
    phiPiRelation: 'Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.',
    enginePreset: {
      type: 'lorenzAttractor',
      compositeOp: 'smoothMorph',
      zoom: 3.2,
      rotX: 0.3,
      rotY: 0.4,
    }
  },
  {
    id: 'rossler-attractor',
    name: 'Аттрактор Рёсслера',
    englishName: 'Rössler Attractor',
    category: 'ifs_attractors',
    formula: 'dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)',
    dimension: 'D ≈ 2.01',
    generatorRule: 'Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты',
    description: 'Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.',
    phiPiRelation: 'Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.',
    enginePreset: {
      type: 'cliffordKlein',
      compositeOp: 'smoothUnion',
      zoom: 2.9,
    }
  },
  {
    id: 'ikeda-attractor',
    name: 'Аттрактор Икеды',
    englishName: 'Ikeda Map Attractor',
    category: 'ifs_attractors',
    formula: 'z_{n+1} = A + B z_n e^{i(|z_n|² + C)}',
    dimension: 'D ≈ 1.7',
    generatorRule: 'Двумерное отображение света в кольцевом оптическом резонаторе',
    description: 'Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.',
    phiPiRelation: 'Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.',
    enginePreset: {
      type: 'spiralTunnel',
      compositeOp: 'domainWarp',
      warpStrength: 0.4,
      zoom: 2.8,
    }
  },
  {
    id: 'clifford-attractor',
    name: 'Аттрактор Клиффорда',
    englishName: 'Clifford Attractor',
    category: 'ifs_attractors',
    formula: 'x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)',
    dimension: 'D ≈ 1.6 - 1.9',
    generatorRule: 'Синусно-косинусное полиномиальное отображение с 4 параметрами',
    description: 'Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.',
    phiPiRelation: 'Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.',
    enginePreset: {
      type: 'cliffordTorus4D',
      compositeOp: 'smoothMorph',
      zoom: 2.9,
    }
  },
  {
    id: 'dejong-attractor',
    name: 'Аттрактор Де Йонга',
    englishName: 'Peter de Jong Attractor',
    category: 'ifs_attractors',
    formula: 'x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)',
    dimension: 'D ≈ 1.8',
    generatorRule: 'Симметричное тригонометрическое отображение Петера де Йонга',
    description: 'Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.',
    phiPiRelation: 'При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.',
    enginePreset: {
      type: 'cliffordTorus4D',
      hybridType: 'gyroid',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.3,
      zoom: 3.0,
    }
  },
  {
    id: 'henon-attractor',
    name: 'Аттрактор Хенона',
    englishName: 'Hénon Attractor',
    category: 'ifs_attractors',
    formula: 'x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)',
    dimension: 'D ≈ 1.261 ± 0.003',
    generatorRule: 'Дискретная диссипативная система Мишеля Эно (1976)',
    description: 'Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.',
    phiPiRelation: 'Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.',
    enginePreset: {
      type: 'primeSpiral',
      compositeOp: 'smoothMorph',
      zoom: 2.7,
    }
  },
  {
    id: 'humboldt-attractor',
    name: 'Аттрактор Гумбольдта',
    englishName: 'Humboldt Flow Attractor',
    category: 'ifs_attractors',
    formula: 'dxdt = v_oceanic(x, φ, t)',
    dimension: 'D ≈ 2.15',
    generatorRule: 'IFS-система, имитирующая турбулентные океанические вихри',
    description: 'Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.',
    phiPiRelation: 'Логарифмические спирали вихрей имеют золотой угол раскрутки.',
    enginePreset: {
      type: 'gyroid',
      compositeOp: 'goldenSpiralFold',
      zoom: 3.1,
    }
  },
];
