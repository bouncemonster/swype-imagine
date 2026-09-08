/**
 * Algebraic Fractals - Complex Dynamics (Category 3)
 * Fractals based on complex number iteration
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const ALGEBRAIC_FRACTALS: CanonicalFractal[] = [
  {
    id: 'mandelbrot-classic',
    name: 'Множество Мандельброта',
    englishName: 'Mandelbrot Set',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n² + c, z_0 = 0',
    dimension: 'D_граница = 2.000 (Теорема Сишая Шишикуры)',
    generatorRule: 'Множество c ∈ ℂ, для которых траектория z_n ограничена',
    description: 'Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.',
    phiPiRelation: 'Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!',
    enginePreset: {
      type: 'mandelbulb',
      compositeOp: 'smoothMorph',
      iterations: 24,
      zoom: 2.8,
    }
  },
  {
    id: 'multibrot-set',
    name: 'Множество Мандельброта высших степеней (Multibrot)',
    englishName: 'Multibrot Set (z^d + c)',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n^d + c, d > 2',
    dimension: 'D = 2.0',
    generatorRule: 'Степень d порождает (d - 1)-лучевую поворотную симметрию',
    description: 'Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).',
    phiPiRelation: 'При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.',
    enginePreset: {
      type: 'mandelbulb',
      phiMultiplier: 1.61803398875,
      compositeOp: 'smoothUnion',
      zoom: 2.9,
    }
  },
  {
    id: 'julia-set',
    name: 'Множество Жюлиа',
    englishName: 'Julia Set',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n² + c, c = const ∈ ℂ',
    dimension: 'D ∈ (1.0, 2.0] зависит от c',
    generatorRule: 'Множество начальных точек z_0 с ограниченной траекторией',
    description: 'Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.',
    phiPiRelation: 'При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.',
    enginePreset: {
      type: 'quaternionJulia',
      compositeOp: 'smoothMorph',
      zoom: 2.7,
    }
  },
  {
    id: 'filled-julia-set',
    name: 'Заполненное множество Жюлиа',
    englishName: 'Filled Julia Set',
    category: 'algebraic_complex',
    formula: 'K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}',
    dimension: 'D_тело = 2.0',
    generatorRule: 'Множество Жюлиа вместе с его внутренней областью притяжения',
    description: 'Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.',
    phiPiRelation: 'Конформный радиус области притяжения инвариантен относительно масштабирования.',
    enginePreset: {
      type: 'quaternionJulia',
      compositeOp: 'smoothUnion',
      zoom: 2.6,
    }
  },
  {
    id: 'newton-fractal',
    name: 'Фрактал Ньютона',
    englishName: 'Newton-Raphson Fractal',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n - f(z_n)/f\'(z_n) для z^k - 1 = 0',
    dimension: 'D_граница = 2.0',
    generatorRule: 'Бассейны притяжения комплексных корней полинома',
    description: 'Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.',
    phiPiRelation: 'Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.',
    enginePreset: {
      type: 'newtonBasins',
      compositeOp: 'smoothMorph',
      zoom: 2.9,
    }
  },
  {
    id: 'serafimsky-fractal',
    name: 'Фрактал Серафимского',
    englishName: 'Serafimsky Shifted Newton',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n - e^{iθ} f(z_n)/f\'(z_n)',
    dimension: 'D ≈ 2.0',
    generatorRule: 'Метод Ньютона с комплексным вращением фазового угла θ',
    description: 'Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.',
    phiPiRelation: 'Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.',
    enginePreset: {
      type: 'newtonBasins',
      compositeOp: 'goldenSpiralFold',
      warpStrength: 0.35,
      zoom: 2.8,
    }
  },
  {
    id: 'burning-ship',
    name: 'Фрактал «Пылающий корабль» (Burning Ship)',
    englishName: 'Burning Ship Fractal',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c',
    dimension: 'D = 2.0',
    generatorRule: 'Абсолютная величина от Re и Im перед возведением в квадрат',
    description: 'Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.',
    phiPiRelation: 'Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.',
    enginePreset: {
      type: 'burningShip3D',
      compositeOp: 'smoothUnion',
      zoom: 3.1,
      rotX: 0.4,
    }
  },
  {
    id: 'perpendicular-burning-ship',
    name: 'Перпендикулярный Пылающий Корабль',
    englishName: 'Perpendicular Burning Ship',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c',
    dimension: 'D = 2.0',
    generatorRule: 'Модуль берется только от одной компоненты (вещественной)',
    description: 'Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.',
    phiPiRelation: 'Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.',
    enginePreset: {
      type: 'burningShip3D',
      compositeOp: 'domainWarp',
      warpStrength: 0.3,
      zoom: 3.0,
    }
  },
  {
    id: 'pickover-biomorphs',
    name: 'Биоморфы Пиковера',
    englishName: 'Pickover Biomorphs',
    category: 'algebraic_complex',
    formula: '|Re(z_n)| < R ∨ |Im(z_n)| < R',
    dimension: 'D ≈ 1.6 - 1.9',
    generatorRule: 'Условие останова итераций имитирует форму одноклеточных',
    description: 'Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.',
    phiPiRelation: 'Формы радиолярий и спикул подчиняются золотому закону роста Д\'Арси Томпсона.',
    enginePreset: {
      type: 'quaternionJulia',
      hybridType: 'hopfFibration',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.4,
      zoom: 2.7,
    }
  },
  {
    id: 'trigonometric-fractal',
    name: 'Тригонометрические фракталы (Фрактал Иисуса)',
    englishName: 'Trigonometric Fractal (sin z + c)',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c',
    dimension: 'D = 2.0',
    generatorRule: 'Трансцендентные целые функции комплексного переменного',
    description: 'Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.',
    phiPiRelation: 'Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.',
    enginePreset: {
      type: 'spiralTunnel',
      compositeOp: 'quantumResonance',
      zoom: 3.2,
    }
  },
  {
    id: 'lyapunov-fractal',
    name: 'Карты Ляпунова / Фракталы Ляпунова',
    englishName: 'Lyapunov Fractals / Zircon City',
    category: 'algebraic_complex',
    formula: 'λ = lim (1/N) ∑ ln |f\'(x_n)| для последовательности AB',
    dimension: 'D ≈ 2.0 (фрактальные границы стабильности)',
    generatorRule: 'Чередование параметров r_A и r_B логистического отображения',
    description: 'Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.',
    phiPiRelation: 'Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.',
    enginePreset: {
      type: 'primeSpiral',
      compositeOp: 'quantumResonance',
      zoom: 2.8,
    }
  },
  {
    id: 'novak-fractal',
    name: 'Множество Новака',
    englishName: 'Novak Fractal',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)',
    dimension: 'D ≈ 2.0',
    generatorRule: 'Использование иррациональных дробных степеней комплексного числа',
    description: 'Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.',
    phiPiRelation: 'При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.',
    enginePreset: {
      type: 'mandelbulb',
      phiMultiplier: 1.61803398875,
      compositeOp: 'goldenSpiralFold',
      zoom: 2.8,
    }
  },
  {
    id: 'spider-fractal',
    name: 'Фрактал «Паук»',
    englishName: 'Spider Fractal',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}',
    dimension: 'D = 2.0',
    generatorRule: 'Связанная динамика точки z и параметра c на каждом шаге',
    description: 'Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.',
    phiPiRelation: 'Отношение затухания c_n/2 согласуется с золотой дихотомией.',
    enginePreset: {
      type: 'quaternionJulia',
      compositeOp: 'domainWarp',
      warpStrength: 0.45,
      zoom: 2.9,
    }
  },
  {
    id: 'sherwood-carpet',
    name: 'Ковер Шервуда',
    englishName: 'Sherwood Carpet',
    category: 'algebraic_complex',
    formula: 'z_{n+1} = 1 / (z_n^k + c)',
    dimension: 'D ≈ 1.85',
    generatorRule: 'Инверсия комплексных полиномов высших порядков',
    description: 'Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.',
    phiPiRelation: 'Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.',
    enginePreset: {
      type: 'apollonian',
      hybridType: 'mandelbox',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.35,
      zoom: 2.9,
    }
  },
];
