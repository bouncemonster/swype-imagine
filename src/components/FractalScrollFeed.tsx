import React, { useRef } from 'react';
import { 
  Layers, 
  Sparkles, 
  Eye, 
  ChevronUp, 
  ChevronDown, 
  Radio, 
  Zap, 
  ZoomIn, 
  MousePointer, 
  Flame, 
  Activity,
  Atom,
  Droplet,
  Grid,
  Grid3x3,
  Thermometer
} from 'lucide-react';
import { FractalSpecimen, RenderStyle, FractalParams } from '../types/fractal';

interface FractalScrollFeedProps {
  currentSpecimen: FractalSpecimen | null;
  historyQueue: FractalSpecimen[];
  currentIndex: number;
  onSelectSpecimen: (specimen: FractalSpecimen) => void;
  onNext: () => void;
  onPrev: () => void;
  renderStyle: RenderStyle;
  onSelectRenderStyle: (style: RenderStyle) => void;
  scrollMode: 'feed' | 'zoom';
  onToggleScrollMode: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const RENDER_STYLES_CONFIG: {
  id: RenderStyle;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  accent: string;
}[] = [
  {
    id: 'solid',
    label: 'Физическая поверхность (PBR)',
    shortLabel: 'Solid PBR',
    icon: Sparkles,
    desc: 'Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ',
    accent: 'border-amber-500/50 text-amber-300 bg-amber-500/10',
  },
  {
    id: 'xray',
    label: 'X-Ray Томография плотности',
    shortLabel: 'X-Ray',
    icon: Eye,
    desc: 'Градиентная томография, внутренний скелет и кривизна поверхности',
    accent: 'border-cyan-500/50 text-cyan-300 bg-cyan-500/10',
  },
  {
    id: 'topo',
    label: 'Топографическая карта кривизны',
    shortLabel: 'Топография',
    icon: Activity,
    desc: 'Контуры рельефа, нормаль-зависимое освещение, хребты и впадины',
    accent: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10',
  },
  {
    id: 'hologram',
    label: 'Голографическая проекция',
    shortLabel: 'Голограмма',
    icon: Grid,
    desc: 'Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет',
    accent: 'border-blue-500/50 text-blue-300 bg-blue-500/10',
  },
  {
    id: 'iridescent',
    label: 'Радужная интерференция',
    shortLabel: 'Перламутр',
    icon: Droplet,
    desc: 'Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет',
    accent: 'border-purple-500/50 text-purple-300 bg-purple-500/10',
  },
  {
    id: 'quantum',
    label: 'Квантовое поле энергии',
    shortLabel: 'Плазма',
    icon: Atom,
    desc: 'Стоячие волны интерференции, энергетическая плотность, кривизна-ядро',
    accent: 'border-rose-500/50 text-rose-300 bg-rose-500/10',
  },
  {
    id: 'gemstone',
    label: 'Кристаллическая рефракция',
    shortLabel: 'Кристалл',
    icon: Flame,
    desc: 'Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр',
    accent: 'border-amber-400/50 text-amber-200 bg-amber-600/10',
  },
  {
    id: 'wireframe',
    label: 'Каркас координатной решётки',
    shortLabel: 'Каркас',
    icon: Grid3x3,
    desc: 'Структурная решётка пространства DE-складок, силовые рёбра кривизны',
    accent: 'border-teal-500/50 text-teal-300 bg-teal-500/10',
  },
  {
    id: 'heatmap',
    label: 'Термограмма времени выхода',
    shortLabel: 'Термограмма',
    icon: Thermometer,
    desc: 'Чернотельная карта плотности итераций — прямое чтение математики выхода',
    accent: 'border-orange-500/50 text-orange-300 bg-orange-500/10',
  },
  {
    id: 'neon',
    label: 'Неоновый контур Френеля',
    shortLabel: 'Неон',
    icon: Zap,
    desc: 'Светящийся краевой контур на почти чёрном — только рёбра поверхности эмиссивны',
    accent: 'border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10',
  },
];

export const FractalScrollFeed: React.FC<FractalScrollFeedProps> = ({
  currentSpecimen,
  historyQueue,
  currentIndex,
  onSelectSpecimen,
  onNext,
  onPrev,
  renderStyle,
  onSelectRenderStyle,
  scrollMode,
  onToggleScrollMode,
  isOpen,
  onToggleOpen,
}) => {
  const feedListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Floating Left-Side Ribbon: Scroll Feed of 3D Fractals & Hybrids */}
      <aside
        id="fractal-scroll-feed-panel"
        className={`safe-l fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[110%] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-stretch">
          {/* Main Feed Card Panel */}
          <div 
            className="w-72 max-w-[calc(100vw-1.5rem)] max-h-[82dvh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200"
          >
            {/* Header: Title & Feed Mode Toggle */}
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Radio className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white tracking-wide">3D Скролл-Лента</h2>
                  <p className="text-micro text-neutral-400">Фракталы & Гибриды</p>
                </div>
              </div>

              {/* Toggle: Wheel advances Feed vs Zoom */}
              <button
                id="toggle-scroll-feed-mode-btn"
                onClick={onToggleScrollMode}
                className={`px-2 py-1 rounded-lg border text-micro font-medium flex items-center gap-1 transition ${
                  scrollMode === 'feed'
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
                title={scrollMode === 'feed' ? 'Колесо мыши переключает ленту' : 'Колесо мыши зумирует камеру'}
              >
                {scrollMode === 'feed' ? (
                  <>
                    <MousePointer className="w-3 h-3 text-amber-300" />
                    <span>Лента</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3 h-3" />
                    <span>Зум</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Render Style Selector (All 7 GPU Modalities) */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-micro uppercase tracking-wider text-neutral-400 font-semibold">
                  Механика рендеринга ({RENDER_STYLES_CONFIG.length})
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1">
                {RENDER_STYLES_CONFIG.map((cfg) => {
                  const Icon = cfg.icon;
                  const isSel = renderStyle === cfg.id;
                  return (
                    <button
                      key={cfg.id}
                      id={`select-render-style-${cfg.id}-btn`}
                      onClick={() => onSelectRenderStyle(cfg.id)}
                      className={`px-2 py-1.5 rounded-lg border text-left text-micro transition flex items-center gap-1.5 truncate ${
                        isSel
                          ? cfg.accent + ' font-semibold'
                          : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                      title={cfg.desc}
                    >
                      <Icon className="w-3 h-3 shrink-0" />
                      <span className="truncate">{cfg.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specimen Stream Carousel / Vertical Ribbon */}
            <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80">
              <span className="text-micro uppercase tracking-wider text-neutral-400 font-semibold">
                Поток фенотипов ({historyQueue.length})
              </span>
              <div className="flex items-center gap-1">
                <button
                  id="feed-ribbon-prev-btn"
                  onClick={(e) => { e.currentTarget.blur(); onPrev(); }}
                  className="p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                  title="Предыдущий образец"
                  aria-label="Предыдущий образец"
                >
                  <ChevronUp className="w-3 h-3" aria-hidden="true" />
                </button>
                <button
                  id="feed-ribbon-next-btn"
                  onClick={(e) => { e.currentTarget.blur(); onNext(); }}
                  className="p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                  title="Следующий образец"
                  aria-label="Следующий образец"
                >
                  <ChevronDown className="w-3 h-3" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div 
              ref={feedListRef}
              className="flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar"
            >
              {historyQueue.map((item, idx) => {
                const isCurrent = item.id === currentSpecimen?.id || idx === currentIndex;
                return (
                  <button
                    key={item.id || idx}
                    id={`feed-item-${idx}-btn`}
                    onClick={() => onSelectSpecimen(item)}
                    className={`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${
                      isCurrent
                        ? 'bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10'
                        : 'bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-micro-sm font-mono font-bold text-amber-400/90">
                          #{item.generation || idx + 1}
                        </span>
                        <span className="text-xs font-semibold truncate text-neutral-200">
                          {item.name}
                        </span>
                      </div>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-micro-sm text-neutral-400 font-mono">
                      <span className="px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60">
                        {item.compositeOp || 'hybrid'}
                      </span>
                      <span className="truncate text-neutral-400">
                        {item.type} + {item.hybridType || item.type}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Scroll Hint */}
            <div className="pt-1 border-t border-neutral-800/60 flex items-center justify-between text-micro text-neutral-400 font-mono">
              <span>Скролл мыши / жест</span>
              <span className="text-amber-300/90 font-semibold">
                {scrollMode === 'feed' ? 'Переход по ленте' : 'Зум вглубь'}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
