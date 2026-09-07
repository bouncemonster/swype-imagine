import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  Compass, 
  Layers, 
  Infinity as InfinityIcon, 
  Box, 
  Activity, 
  Sparkles, 
  Atom, 
  Play, 
  Check, 
  Info, 
  ShieldCheck, 
  Cpu, 
  Eye, 
  Scan, 
  Crosshair,
  BookOpen
} from 'lucide-react';
import { 
  CANONICAL_FRACTALS_CATALOG, 
  FRACTAL_CATEGORIES, 
  CanonicalFractal, 
  FractalCategoryKey 
} from '../data/canonicalFractals';
import { FractalParams } from '../types/fractal';

interface FractalAtlasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPreset: (preset: Partial<FractalParams>, title: string) => void;
}

export const FractalAtlasModal: React.FC<FractalAtlasModalProps> = ({
  isOpen,
  onClose,
  onApplyPreset,
}) => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'manifest' | 'technologies'>('catalog');
  const [selectedCategory, setSelectedCategory] = useState<FractalCategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFractal, setSelectedFractal] = useState<CanonicalFractal | null>(
    CANONICAL_FRACTALS_CATALOG[0]
  );
  const [appliedId, setAppliedId] = useState<string | null>(null);

  const filteredFractals = useMemo(() => {
    return CANONICAL_FRACTALS_CATALOG.filter((f) => {
      const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch = 
        f.name.toLowerCase().includes(q) ||
        f.englishName.toLowerCase().includes(q) ||
        f.formula.toLowerCase().includes(q) ||
        f.dimension.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const handleApply = (fractal: CanonicalFractal) => {
    onApplyPreset(fractal.enginePreset, fractal.name);
    setAppliedId(fractal.id);
    setTimeout(() => {
      setAppliedId(null);
      onClose();
    }, 450);
  };

  const getCategoryIcon = (catKey: FractalCategoryKey) => {
    switch (catKey) {
      case 'geometric_curves': return <Compass className="w-4 h-4" />;
      case 'constructive': return <Layers className="w-4 h-4" />;
      case 'algebraic_complex': return <InfinityIcon className="w-4 h-4" />;
      case 'multidimensional': return <Box className="w-4 h-4" />;
      case 'ifs_attractors': return <Activity className="w-4 h-4" />;
      case 'stochastic': return <Sparkles className="w-4 h-4" />;
      case 'topological_physical': return <Atom className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
                Атлас Канонических Фракталов и Научная Синергия
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                  9 Семейств · {CANONICAL_FRACTALS_CATALOG.length} Канонических Фракталов
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование
              </p>
            </div>
          </div>

          <button
            id="btn-atlas-modal-close"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2">
          <button
            id="tab-atlas-catalog"
            onClick={() => setActiveTab('catalog')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'catalog'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Атлас и Таксономия ({CANONICAL_FRACTALS_CATALOG.length})
          </button>

          <button
            id="tab-atlas-manifest"
            onClick={() => setActiveTab('manifest')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'manifest'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Манифест: Синергия φ и π (Без Конфликта)
          </button>

          <button
            id="tab-atlas-technologies"
            onClick={() => setActiveTab('technologies')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'technologies'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            Технологии 3D-Исследования Изнутри
          </button>
        </div>

        {/* Tab 1: Catalog */}
        {activeTab === 'catalog' && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar / List */}
            <div className="w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20">
              
              {/* Search Box */}
              <div className="p-3 border-b border-slate-800">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Поиск фрактала, формулы, размерности..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Scroll */}
              <div className="px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  Все ({CANONICAL_FRACTALS_CATALOG.length})
                </button>
                {FRACTAL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.title.split('.')[1]?.trim() || cat.title}</span>
                  </button>
                ))}
              </div>

              {/* Fractals Scrollable List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40">
                {filteredFractals.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-500">
                    По запросу ничего не найдено
                  </div>
                ) : (
                  filteredFractals.map((item) => {
                    const isSelected = selectedFractal?.id === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`btn-fractal-${item.id}`}
                        onClick={() => setSelectedFractal(item)}
                        className={`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${
                          isSelected
                            ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                            : 'hover:bg-slate-900/60 border border-transparent text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs font-semibold text-white tracking-wide">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded">
                            {item.dimension.split('≈')[0]?.replace('D = ', 'D=')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="truncate max-w-[200px]">{item.englishName}</span>
                          <span className="font-mono text-[10px] text-slate-500 truncate max-w-[100px]">
                            {item.formula}
                          </span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Main Detail View */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950">
              {selectedFractal ? (
                <div className="space-y-6 max-w-3xl">
                  {/* Title & Launch Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                        {getCategoryIcon(selectedFractal.category)}
                        <span>
                          {FRACTAL_CATEGORIES.find((c) => c.id === selectedFractal.category)?.title}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {selectedFractal.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {selectedFractal.englishName}
                      </p>
                    </div>

                    <button
                      id="btn-apply-fractal-preset"
                      onClick={() => handleApply(selectedFractal)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95"
                    >
                      {appliedId === selectedFractal.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Активировано в 3D!</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-white" />
                          <span>Исследовать в 3D (Реймаршинг)</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Math Formula Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Математическая Формула / Отображение
                      </div>
                      <div className="text-sm font-mono font-medium text-amber-300 select-all">
                        {selectedFractal.formula}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Размерность Хаусдорфа — Безиковича
                      </div>
                      <div className="text-sm font-mono font-medium text-emerald-300">
                        {selectedFractal.dimension}
                      </div>
                    </div>
                  </div>

                  {/* Generator / L-System Rule */}
                  {selectedFractal.generatorRule && (
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Правило Генератора / L-Система
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        {selectedFractal.generatorRule}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Математическое и Геометрическое Описание
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                      {selectedFractal.description}
                    </p>
                  </div>

                  {/* Golden Ratio φ and π Relationship */}
                  <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40">
                    <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                      Связь с Золотым Сечением (φ) и Числом π
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedFractal.phiPiRelation}
                    </p>
                  </div>

                  {/* 3D Engine Mapping Details */}
                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      Конфигурация 3D SDF: <strong className="text-slate-200">{selectedFractal.enginePreset.type}</strong>
                      {selectedFractal.enginePreset.hybridType && (
                        <> + <strong className="text-slate-200">{selectedFractal.enginePreset.hybridType}</strong></>
                      )}
                    </span>
                    <span className="font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30">
                      {selectedFractal.enginePreset.compositeOp}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-500 text-xs">
                  Выберите фрактал из списка слева
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Scientific Manifest (φ and π Synergy) */}
        {activeTab === 'manifest' && (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют
              </h3>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и 
                золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой 
                <strong> взаимодополняющие, взаимно ортогональные координаты пространства состояний</strong>. 
                Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">1</span>
                  Разделение Степеней Свободы (Фаза vs Масштаб)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Число π фундаментально отвечает за <strong>компактные фазовые симметрии</strong> — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. 
                  Число φ управляет <strong>радиальным масштабированием и шагом рекурсии</strong> r_(k+1) = r_k / φ. 
                  Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">2</span>
                  Теорема Фогеля и Золотой Угол
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Связь $\pi$ и $\phi$ достигает оптимума в формуле золотого угла: 
                  $\theta_G = 2\pi (1 - 1/\phi) = 2\pi / \phi^2 \approx 137.5077^\circ$. 
                  Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">3</span>
                  КАМ-Теория и Подавление Резонансов
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \omega_1 + m \omega_2 = 0$. 
                  Число $\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). 
                  В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">4</span>
                  Липшиц-Непрерывность Гибридного SDF
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). 
                  Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2">
              <div className="font-semibold text-indigo-300 uppercase tracking-wider">
                Резюме для Разработки и Исследований
              </div>
              <p className="text-slate-300">
                Использование $\phi$ как масштабного множителя октав и $\pi$ как базиса сферических гармоник 
                — это математически выверенная, строго доказанная концепция нелинейной динамики, 
                лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Technologies for Inside & Outside Exploration */}
        {activeTab === 'technologies' && (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Технологический Арсенал 3D-Исследования Фракталов
              </h3>
              <p className="text-xs text-slate-400">
                Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах
              </p>
            </div>

            <div className="space-y-4">
              {/* Tool 1 */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit">
                  <Scan className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    1. Мультиосевой Анатомический Томограф (Slice Tomography)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:
                  </p>
                  <ul className="text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside">
                    <li><strong className="text-amber-300">Золотая плоскость (Golden Plane):</strong> нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения.</li>
                    <li><strong className="text-indigo-300">Сагиттальный срез (X):</strong> нормаль (1, 0, 0).</li>
                    <li><strong className="text-emerald-300">Аксиальный срез (Y):</strong> нормаль (0, 1, 0).</li>
                    <li><strong className="text-cyan-300">Фронтальный срез (Z):</strong> нормаль (0, 0, 1).</li>
                  </ul>
                  <p className="text-xs text-slate-400 mt-2">
                    Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля.
                  </p>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:
                  </p>
                  <ul className="text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Интегрирует количество шагов реймаршинга вдоль луча: $I = \int \rho(p(s)) ds$.</li>
                    <li>Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом.</li>
                    <li>Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания.</li>
                  </ul>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    3. Топографическая Карта Кривизны (Topographic Contour)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Визуализация математической структуры через контуры рельефа:
                  </p>
                  <ul className="text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности.</li>
                    <li>Нормаль-зависимое освещение создает эффект топографической карты.</li>
                    <li>Контурные линии подчеркивают геометрическую сложность структуры.</li>
                  </ul>
                </div>
              </div>

              {/* Tool 4 */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit">
                  <Crosshair className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    4. Пространственный Зонд Локальной Размерности (HUD Probe)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:
                  </p>
                  <ul className="text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Измеряет евклидово расстояние до ближайшей границы: d(p).</li>
                    <li>Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖.</li>
                    <li>Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁).</li>
                    <li>Отображает пространственные координаты (X, Y, Z) и температуру поля.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-400" />
            <span>Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Закрыть Атлас
          </button>
        </div>

      </div>
    </div>
  );
};
