/**
 * Physical & Topological Concepts (Category 7)
 * Fractals based on physical phenomena and topological structures
 */

import { CanonicalFractal } from '../fractalCatalogTypes';

export const PHYSICAL_FRACTALS: CanonicalFractal[] = [
  {
    id: 'hofstadter-butterfly',
    name: 'Бабочка Хофштадтера',
    englishName: 'Hofstadter Butterfly',
    category: 'topological_physical',
    formula: 'ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)',
    dimension: 'D(E) фрактальное канторово множество разрешенных энергий',
    generatorRule: 'Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0',
    description: 'Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.',
    phiPiRelation: 'АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!',
    enginePreset: {
      type: 'hofstadterButterfly',
      compositeOp: 'smoothMorph',
      zoom: 3.0,
      rotX: 0.4,
      rotY: 0.3,
    }
  },
  {
    id: 'richardson-fractal',
    name: 'Фрактал Ричардсона (Эффект береговой линии)',
    englishName: 'Richardson Coastline Fractal Effect',
    category: 'topological_physical',
    formula: 'L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)',
    dimension: 'D_Британия ≈ 1.25, D_Норвегия ≈ 1.52',
    generatorRule: 'Зависимость длины границы от масштаба измерительного инструмента ε',
    description: 'Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.',
    phiPiRelation: 'Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.',
    enginePreset: {
      type: 'fibonacciSnowflake',
      hybridType: 'dlaCluster',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.4,
      zoom: 2.8,
    }
  },
  {
    id: 'cantor-set',
    name: 'Канторово множество (Канторова лестница)',
    englishName: 'Cantor Ternary Set',
    category: 'topological_physical',
    formula: 'C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}',
    dimension: 'D = ln(2)/ln(3) ≈ 0.63093',
    generatorRule: 'Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]',
    description: 'Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.',
    phiPiRelation: 'Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.',
    enginePreset: {
      type: 'menger',
      compositeOp: 'smoothCarve',
      boxFold: 1.4,
      zoom: 3.0,
    }
  },
  {
    id: 'cantor-dust',
    name: 'Пыль Кантора',
    englishName: 'Cantor Dust',
    category: 'topological_physical',
    formula: 'C_d = C × C × ... × C (d-кратное прямое произведение)',
    dimension: 'D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)',
    generatorRule: 'Многомерное декартово произведение одномерных множеств Кантора',
    description: 'Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.',
    phiPiRelation: 'Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.',
    enginePreset: {
      type: 'apollonian',
      compositeOp: 'smoothCarve',
      sphereFold: 0.8,
      zoom: 2.9,
    }
  },
  {
    id: 'antoine-necklace',
    name: 'Ожерелье Антуана',
    englishName: 'Antoine\'s Necklace',
    category: 'topological_physical',
    formula: 'X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов',
    dimension: 'D_топологическая = 0, D_Хаусдорфа > 0',
    generatorRule: 'Тор заменяется цепью зацепленных уменьшенных торов',
    description: 'Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).',
    phiPiRelation: 'Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.',
    enginePreset: {
      type: 'antoineNecklace',
      compositeOp: 'smoothUnion',
      zoom: 3.2,
      rotX: 0.35,
      rotY: 0.2,
    }
  },
  {
    id: 'hopf-fibration-manifold',
    name: 'Расслоение Хопфа S³ → S²',
    englishName: 'Hopf Fibration Topological Bundle',
    category: 'topological_physical',
    formula: 'h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²',
    dimension: 'D_топологическая = 3, расслаивается окружностями S¹',
    generatorRule: 'Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо',
    description: 'Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.',
    phiPiRelation: 'Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.',
    enginePreset: {
      type: 'hopfFibration',
      compositeOp: 'smoothUnion',
      zoom: 3.2,
      rotX: 0.3,
      rotY: 0.25,
    }
  },
  {
    id: 'calabi-yau-manifold',
    name: 'Многообразие Калаби — Яу',
    englishName: 'Calabi-Yau 3-Fold Compactification',
    category: 'topological_physical',
    formula: 'z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0',
    dimension: '6 действительных измерений (3 комплексных) в CP⁴',
    generatorRule: 'Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства',
    description: 'Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.',
    phiPiRelation: 'Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.',
    enginePreset: {
      type: 'calabiYau',
      compositeOp: 'smoothMorph',
      zoom: 3.1,
      rotX: 0.4,
      rotY: 0.3,
    }
  },
  {
    id: 'costa-minimal-surface',
    name: 'Минимальная поверхность Коста',
    englishName: 'Costa Minimal Surface',
    category: 'topological_physical',
    formula: 'X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0',
    dimension: 'D_топологическая = 2, род g = 1 с тремя концами',
    generatorRule: 'Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)',
    description: 'Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.',
    phiPiRelation: 'Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.',
    enginePreset: {
      type: 'neoviusMinimal',
      hybridType: 'gyroid',
      compositeOp: 'smoothUnion',
      hybridBlend: 0.3,
      zoom: 3.2,
    }
  },
  {
    id: 'abrikosov-vortex-lattice',
    name: 'Квантовая вихревая решётка Абрикосова',
    englishName: 'Abrikosov Superconducting Vortex Lattice',
    category: 'topological_physical',
    formula: '∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m',
    dimension: 'D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)',
    generatorRule: 'Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e',
    description: 'В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.',
    phiPiRelation: 'Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.',
    enginePreset: {
      type: 'abrikosovLattice',
      compositeOp: 'smoothUnion',
      zoom: 3.2,
      rotX: 0.2,
      rotY: 0.15,
    }
  },
  {
    id: 'beltrami-pseudosphere',
    name: 'Псевдосфера Бельтрами (Геометрия Лобачевского)',
    englishName: 'Beltrami Pseudosphere Hyperbolic Surface',
    category: 'topological_physical',
    formula: 'x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²',
    dimension: 'D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром',
    generatorRule: 'Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского',
    description: 'Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.',
    phiPiRelation: 'Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.',
    enginePreset: {
      type: 'beltramiPseudosphere',
      compositeOp: 'smoothUnion',
      zoom: 2.9,
      rotX: 0.35,
      rotY: 0.2,
    }
  },
  {
    id: 'spin-foam-network',
    name: 'Спиновая пена и сеть Пенроуза (LQG)',
    englishName: 'Penrose Spin Network & Quantum Foam',
    category: 'topological_physical',
    formula: 'A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance',
    dimension: 'D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)',
    generatorRule: 'Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади',
    description: 'Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.',
    phiPiRelation: 'Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.',
    enginePreset: {
      type: 'spinFoamNetwork',
      compositeOp: 'smoothUnion',
      zoom: 3.1,
      rotX: 0.5,
      rotY: 0.4,
    }
  },
];
