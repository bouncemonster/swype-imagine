import React from 'react';
import { Sparkles, Compass, Music, BookOpen, ChevronRight, X, Layers, MousePointer } from 'lucide-react';

interface ProjectManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFirstVisit?: boolean;
  onOpenAtlas?: () => void;
}

export const ProjectManifestModal: React.FC<ProjectManifestModalProps> = ({
  isOpen,
  onClose,
  isFirstVisit = false,
  onOpenAtlas,
}) => {
  if (!isOpen) return null;

  const handleDismiss = () => {
    try {
      localStorage.setItem('phi_manifest_seen', 'true');
    } catch {
      // ignore
    }
    onClose();
  };

  const handleOpenAtlasFromWelcome = () => {
    handleDismiss();
    onOpenAtlas?.();
  };

  return (
    <div
      id="project-manifest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
      onClick={handleDismiss}
    >
      <div
        id="project-manifest-modal-content"
        className="relative w-full max-w-2xl my-6 bg-surface-modal border border-amber-500/30 rounded-3xl text-slate-200 overflow-hidden shadow-glow-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* Subtle Golden Ambient Edge Glow */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200" />

        {/* Close Button */}
        <button
          id="btn-close-manifest-modal"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
          title="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Animated Fractal Emblem & Welcome Title */}
          <div className="flex flex-col items-center text-center space-y-3 pt-2">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse" />
              <svg viewBox="0 0 100 100" className="w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]">
                <polygon
                  points="50,5 95,38 78,92 22,92 5,38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                <polygon
                  points="50,5 78,92 5,38 95,38 22,92"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.95" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-nano font-mono tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>3D Резонатор • Золотое Сечение φ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
                Живая Вселенная Фракталов
              </h2>
              <p className="text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1">
                Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени.
              </p>
            </div>
          </div>

          {/* 3 Intuitive Pillars (Clean & Minimalist) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {/* Card 1: 100+ Fractals */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-medium text-xs">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>100+ Канонических Форм</span>
              </div>
              <p className="text-nano text-slate-400 leading-relaxed">
                Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы.
              </p>
            </div>

            {/* Card 2: Hybrids & Morphing */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-medium text-xs">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Живой Морфинг & Слияние</span>
              </div>
              <p className="text-nano text-slate-400 leading-relaxed">
                Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения.
              </p>
            </div>

            {/* Card 3: Phi Audio Resonance */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5">
              <div className="flex items-center gap-2 text-purple-400 font-medium text-xs">
                <Music className="w-4 h-4 text-purple-400" />
                <span>Гармоники Звука φ</span>
              </div>
              <p className="text-nano text-slate-400 leading-relaxed">
                Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF.
              </p>
            </div>
          </div>

          {/* Intuitive Gesture Guide (Effortless for anyone) */}
          <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span><strong>Вращение</strong>: левая кнопка мыши / свайп</span>
            </div>
            <div className="hidden sm:block text-amber-500/30">•</div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-mono text-xs">🔍</span>
              <span><strong>Масштаб</strong>: колесо мыши / пинч-зум</span>
            </div>
            <div className="hidden sm:block text-amber-500/30">•</div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-mono text-xs">📖</span>
              <span><strong>Атлас</strong>: выбор из 100+ фигур</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            {onOpenAtlas && (
              <button
                id="btn-welcome-open-atlas"
                onClick={handleOpenAtlasFromWelcome}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Каталог 100+ Фракталов</span>
              </button>
            )}

            <button
              id="btn-manifest-start"
              onClick={handleDismiss}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs transition-all flex items-center justify-center gap-1.5 group shadow-glow-cta"
            >
              <span>Начать погружение</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
