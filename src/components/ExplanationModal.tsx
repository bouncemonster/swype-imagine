import React from 'react';
import { X, Sparkles, Activity, Compass, Brain, Layers, BookOpen } from 'lucide-react';

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="explanation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        id="explanation-modal-content"
        className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <BookOpen className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">
                Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика
              </h3>
              <p className="text-xs text-amber-400/90 font-mono">
                34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching
              </p>
            </div>
          </div>
          <button
            id="close-explanation-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-4 text-xs leading-relaxed text-neutral-300">
          {/* Section 1: Golden Ratio & Fibonacci */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-amber-400" />
              1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол
            </h4>
            <p className="mb-2">
              Число <strong className="text-white font-mono">φ = (1 + √5) / 2 ≈ 1.6180339887...</strong> является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: <code className="text-amber-300 font-mono">[1; 1, 1, 1, ...]</code>). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]">
              <div>
                <span className="text-neutral-400 block text-[10px]">Предел отношений Фибоначчи:</span>
                <span className="text-amber-300 font-bold">lim (F_n+1 / F_n) = φ</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">Золотой угол (Golden Angle):</span>
                <span className="text-amber-300 font-bold">θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°</span>
              </div>
            </div>
          </div>

          {/* Section 2: Prime Numbers & Euler Polynomials */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана
            </h4>
            <p className="mb-2">
              Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:
            </p>
            <div className="space-y-2 text-neutral-300">
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60">
                <span className="text-amber-300 font-medium block mb-0.5">Спираль Закса и Полином Эйлера:</span>
                <p className="text-[11px] text-neutral-400">
                  Полярная параметризация <code className="text-white font-mono">r = √n, θ = 2π√n</code> (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера <code className="text-amber-300 font-mono">P(n) = n² - n + 41</code>. Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор.
                </p>
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60">
                <span className="text-amber-300 font-medium block mb-0.5">Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:</span>
                <p className="text-[11px] text-neutral-400">
                  Распределение расстояний между нетривиальными нулями дзета-функции Римана <code className="text-white font-mono">ζ(1/2 + iγ_n) = 0</code> математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Quasicrystals & Calabi-Yau */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-amber-400" />
              3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]">
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60">
                <span className="text-amber-300 font-semibold block mb-1">Квазикристаллы (Нобель 2011)</span>
                <p className="text-neutral-400 leading-snug">
                  Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ.
                </p>
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60">
                <span className="text-amber-300 font-semibold block mb-1">Расслоение Хопфа S³ → S²</span>
                <p className="text-neutral-400 leading-snug">
                  Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ.
                </p>
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60">
                <span className="text-amber-300 font-semibold block mb-1">Многообразия Калаби-Яу</span>
                <p className="text-neutral-400 leading-snug">
                  Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Multi-Layer Composition & SDF Algebra */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-amber-400" />
              4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов
            </h4>
            <p className="mb-2 text-neutral-300">
              Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 bg-neutral-950/70 rounded-lg border border-neutral-800">
                <span className="text-amber-300 font-bold block">⊕_φ Гладкое объединение (smin):</span>
                <code className="text-[10px] text-neutral-400 block mt-0.5">smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)</code>
                <p className="text-neutral-400 text-[10px] mt-1">Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями.</p>
              </div>
              <div className="p-2 bg-neutral-950/70 rounded-lg border border-neutral-800">
                <span className="text-amber-300 font-bold block">⮁_φ Искривление пространства (Warp):</span>
                <code className="text-[10px] text-neutral-400 block mt-0.5">p' = p + WarpVector(p, Type₂) · strength</code>
                <p className="text-neutral-400 text-[10px] mt-1">Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния.</p>
              </div>
              <div className="p-2 bg-neutral-950/70 rounded-lg border border-neutral-800">
                <span className="text-amber-300 font-bold block">⊗_φ Волновая интерференция (Resonance):</span>
                <code className="text-[10px] text-neutral-400 block mt-0.5">d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend</code>
                <p className="text-neutral-400 text-[10px] mt-1">Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана.</p>
              </div>
              <div className="p-2 bg-neutral-950/70 rounded-lg border border-neutral-800">
                <span className="text-amber-300 font-bold block">∑ Октавы Фибоначчи:</span>
                <code className="text-[10px] text-neutral-400 block mt-0.5">{'H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]'}</code>
                <p className="text-neutral-400 text-[10px] mt-1">Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ.</p>
              </div>
            </div>
          </div>

          {/* Section 5: 144 Hz WebGPU Engine */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-amber-400" />
              5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching
            </h4>
            <p className="mb-2">
              При частоте развертки <strong className="text-white font-mono">144 Гц</strong> время вычисления кадра ограничено квантом:
            </p>
            <div className="bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold">
              1000 мс / 144 кадров = 6.944 миллисекунды на кадр
            </div>
            <p className="mt-2 text-neutral-400 text-[11px]">
              Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета.
            </p>
          </div>

          {/* Section 6: Neuro-Aesthetics & Stress Reduction */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-amber-400" />
              6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными
            </h4>
            <p className="mb-2 text-neutral-300">
              В исследованиях профессора Ричарда Тейлора (<em>«Perceptual and Physiological Responses to Fractals»</em>, University of Oregon) зафиксировано:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]">
              <li>
                <strong className="text-neutral-200">Снижение физиологического стресса до 60%:</strong> Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях.
              </li>
              <li>
                <strong className="text-neutral-200">Обучающаяся лента предпочтений:</strong> Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-neutral-800/80 flex justify-end">
          <button
            id="modal-close-confirm-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20"
          >
            Закрыть и продолжить исследование
          </button>
        </div>
      </div>
    </div>
  );
};
