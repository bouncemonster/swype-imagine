import React, { useState, useEffect, useRef } from 'react';
import { FractalSpecimen, FractalParams } from '../types/fractal';
import { 
  Heart, ChevronRight, ChevronLeft, User, 
  Info, Volume2, VolumeX, Compass, BookOpen, Sparkles, MoreHorizontal, Layers,
  Share2, Check
} from 'lucide-react';

interface FractalInfoHUDProps {
  specimen: FractalSpecimen | null;
  resonanceScore: number;
  isInteracting: boolean;
  interactionType: 'idle' | 'zooming' | 'orbiting';
  onNext: () => void;
  onPrev: () => void;
  onFavorite: () => void;
  onOpenProfile: () => void;
  enableAudio: boolean;
  onToggleAudio: () => void;
  onOpenResearchModal: () => void;
  onOpenAtlas?: () => void;
  isFeedOpen?: boolean;
  onToggleFeed?: () => void;
  isCurrentLiked?: boolean;
  params?: FractalParams;
}

const FRIENDLY_COMPOSITE_NAMES: Record<string, string> = {
  smoothMorph: 'Морфинг',
  smoothUnion: 'Слияние форм',
  smoothIntersection: 'Пересечение',
  smoothCarve: 'Полости',
  domainWarp: 'Искривление',
  quantumResonance: 'Резонанс',
  fractalLattice: 'Решетка',
  goldenSpiralFold: 'Золотая спираль',
};

export const FractalInfoHUD: React.FC<FractalInfoHUDProps> = ({
  specimen,
  resonanceScore,
  isInteracting,
  interactionType,
  onNext,
  onPrev,
  onFavorite,
  onOpenProfile,
  enableAudio,
  onToggleAudio,
  onOpenResearchModal,
  onOpenAtlas,
  isFeedOpen,
  onToggleFeed,
  isCurrentLiked = false,
  params,
}) => {
  const [hasFavorited, setHasFavorited] = useState(false);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [topBarExpanded, setTopBarExpanded] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = useRef(false);
  // True when the current expansion came from pointer hover (not from a tap).
  const hoverOpenedRef = useRef(false);

  useEffect(() => {
    setHasFavorited(isCurrentLiked);
  }, [specimen?.id, isCurrentLiked]);

  // Unified auto-hide: both bars show/hide together after 3s
  const scheduleHide = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setShowTopBar(false);
        setShowBottomBar(false);
        setTopBarExpanded(false);
      }
    }, 3000);
  };

  const showBars = () => {
    setShowTopBar(true);
    setShowBottomBar(true);
    scheduleHide();
  };

  const toggleTopBarMobile = () => {
    // Touch browsers synthesise mouseenter/mousemove *before* click, so onMouseEnter
    // has already expanded the menu by the time this fires. Toggling then would
    // immediately collapse it — the menu could never be opened on an iPhone/iPad.
    // Consume the hover-driven open once; later taps toggle normally.
    if (hoverOpenedRef.current) {
      hoverOpenedRef.current = false;
      setShowTopBar(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return;
    }
    setTopBarExpanded(prev => !prev);
    setShowTopBar(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  // Show initially, then auto-hide
  useEffect(() => {
    showBars();
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, []);

  // Show bars on mouse near top or bottom edge (desktop) OR tap anywhere (mobile)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80 || e.clientY > window.innerHeight - 120) {
        showBars();
      }
    };
    // Mobile: tap anywhere toggles bottom bar only (top bar uses dedicated button)
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('#top-right-bar') || target.closest('#top-right-trigger')) return;
      if (target.closest('#neuro-feed-bar')) return;
      setShowBottomBar(true);
      scheduleHide();
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true, capture: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart, { capture: true });
    };
  }, []);

  const handleHeartClick = () => {
    setHasFavorited(true);
    onFavorite();
  };

  const handleShare = () => {
    if (!specimen) return;
    // Encode ALL fractal params into URL hash for complete state preservation
    const p = params;
    const urlParams = new URLSearchParams({
      // Core fractal genome
      type: specimen.type,
      hybrid: specimen.hybridType ?? '',
      tertiary: specimen.tertiaryType ?? '',
      op: specimen.compositeOp,
      blend: specimen.hybridBlend.toFixed(3),
      tertiaryBlend: specimen.tertiaryBlend.toFixed(3),
      smoothK: specimen.smoothK.toFixed(3),
      warp: specimen.warpStrength.toFixed(3),
      octaves: String(specimen.octaveLayers),
      boxFold: specimen.boxFold.toFixed(3),
      sphereFold: specimen.sphereFold.toFixed(3),
      interiorCut: specimen.interiorCut.toFixed(3),
      iterations: String(specimen.iterations),
      phi: specimen.phiMultiplier.toFixed(9),
      morphSpeed: specimen.morphSpeed.toFixed(3),
      glow: specimen.glowIntensity.toFixed(3),
      zoom: specimen.zoom.toFixed(3),
      name: specimen.name,
      // Palette & coloring
      palette: specimen.palette?.id ?? '',
      paletteSeed: String(p?.paletteSeed ?? 0),
      paletteRotation: p?.paletteRotation ? '1' : '0',
      // Render style & camera
      renderStyle: p?.renderStyle ?? 'solid',
      cameraMode: p?.cameraMode ?? 'orbit',
      camX: (p?.camPosX ?? 0).toFixed(3),
      camY: (p?.camPosY ?? 0).toFixed(3),
      camZ: (p?.camPosZ ?? -3.2).toFixed(3),
      // Lighting & atmosphere
      headlamp: (p?.headlampPower ?? 0).toFixed(3),
      fog: (p?.volumetricFog ?? 0.4).toFixed(3),
      // Slice & cross-section
      slicePlane: (p?.slicePlane ?? 0).toFixed(3),
      sliceAxis: p?.sliceAxis ?? 'golden',
      // Audio state
      audio: p?.enableAudio ? '1' : '0',
      audioVol: (p?.audioVolume ?? 0.65).toFixed(2),
      audioTuning: p?.audioTuning ?? 'phi432',
      // Performance
      drs: p?.drsEnabled ? '1' : '0',
    });
    const shareUrl = `${window.location.origin}${window.location.pathname}#${urlParams.toString()}`;
    
    if (navigator.share) {
      // Native share on mobile
      navigator.share({ title: specimen.name, text: `Фрактал: ${specimen.name}`, url: shareUrl }).catch(() => {});
    } else {
      // Copy to clipboard on desktop
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      }).catch(() => {
        // Fallback: select and copy
        const ta = document.createElement('textarea');
        ta.value = shareUrl;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      });
    }
  };

  const friendlyOpName = specimen?.compositeOp 
    ? (FRIENDLY_COMPOSITE_NAMES[specimen.compositeOp] || specimen.compositeOp) 
    : 'Гибрид';

  return (
    <>
      {/* Top Right — single "⋯" trigger always visible, expands on tap (mobile) or hover (desktop) */}
      {/* Single hover container wraps trigger + dropdown to prevent gap-collapse */}
      <div 
        className="safe-t safe-r absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto"
        onMouseEnter={() => { isHoveringRef.current = true; hoverOpenedRef.current = true; setShowTopBar(true); setTopBarExpanded(true); if (hideTimerRef.current) clearTimeout(hideTimerRef.current); }}
        onMouseLeave={() => { isHoveringRef.current = false; hoverOpenedRef.current = false; setTopBarExpanded(false); scheduleHide(); }}
      >
        {/* Always-visible trigger button */}
        <button
          id="top-right-trigger"
          className={`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${
            topBarExpanded
              ? 'bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100'
              : 'bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300'
          }`}
          onClick={toggleTopBarMobile}
          title="Меню"
          aria-label="Открыть меню"
          aria-expanded={topBarExpanded}
        >
          <MoreHorizontal className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Expanded buttons panel — dropdown on mobile, inline row on desktop */}
        {/* pt-1 transparent bridge fills the gap so mouse never leaves hover area */}
        <div
          id="top-right-bar"
          className={`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${
            (showTopBar && topBarExpanded)
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          <button
            id="toggle-audio-btn-hud"
            onClick={onToggleAudio}
            className={`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${
              enableAudio 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                : 'bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            title={enableAudio ? 'Выключить звук' : 'Включить гармонический звук φ (432 Гц)'}
            aria-label={enableAudio ? 'Выключить звук' : 'Включить гармонический звук φ (432 Гц)'}
            aria-pressed={enableAudio}
          >
            {enableAudio ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" aria-hidden="true" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
          </button>

          {onOpenAtlas && (
            <button
              id="open-atlas-btn-hud"
              onClick={onOpenAtlas}
              className="px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold"
              title="Научный Атлас канонических фракталов"
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span className="hidden sm:inline">Атлас</span>
            </button>
          )}

          {onToggleFeed && (
            <button
              id="toggle-feed-panel-btn"
              onClick={onToggleFeed}
              className={`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${
                isFeedOpen
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200'
              }`}
              title={isFeedOpen ? 'Скрыть ленту фракталов' : 'Показать ленту фракталов'}
              aria-label={isFeedOpen ? 'Скрыть ленту фракталов' : 'Показать ленту фракталов'}
              aria-pressed={isFeedOpen}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            </button>
          )}

          <button
            id="open-user-profile-btn"
            onClick={onOpenProfile}
            className="px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold"
            title="Настройки"
          >
            <User className="w-3.5 h-3.5 text-amber-300" />
            <span className="px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {resonanceScore}%
            </span>
          </button>
        </div>
      </div>

      {/* Subtle interaction feedback chip when user actively zooms or orbits — desktop only */}
      {isInteracting && (
        <div 
          id="interaction-feedback-chip"
          className="safe-t absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex"
        >
          <Compass className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>
            {interactionType === 'zooming' ? 'Исследование микроструктуры' : 'Пространственный ракурс'}
          </span>
        </div>
      )}

      {/* Bottom Feed Bar — auto-hides after 3s */}
      <div 
        id="neuro-feed-bar"
        className={`safe-b absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${
          showBottomBar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex flex-wrap items-center gap-2 sm:gap-3 text-neutral-200 w-full">
          {/* Specimen Info — full row on phones (44px targets would squeeze it to 2 lines of overlap), inline from sm up */}
          <div className="flex items-center gap-2 min-w-0 flex-1 basis-full sm:basis-auto">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <span 
                  className="text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate"
                  title={specimen?.name || 'Золотой Фрактал'}
                >
                  {specimen?.name || 'Золотой Фрактал'}
                </span>
                {specimen?.hybridBlend && specimen.hybridBlend > 0.05 && (
                  <span className="px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0" title={specimen.compositeOp}>
                    {friendlyOpName}
                  </span>
                )}
              </div>
              <span className="text-[9px] sm:text-[10px] text-neutral-400 font-mono">
                φ {specimen?.phiMultiplier.toFixed(4) || '1.6180'}
              </span>
            </div>
          </div>

          <div className="h-5 sm:h-6 w-px bg-neutral-800 shrink-0" />

          {/* Heart / Favorite Button */}
          <button
            id="boost-affinity-btn"
            onClick={handleHeartClick}
            className={`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${
              hasFavorited
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30'
            }`}
            title="Отметить как понравившийся"
            aria-label={hasFavorited ? 'Убрать из понравившихся' : 'Отметить как понравившийся'}
            aria-pressed={hasFavorited}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${hasFavorited ? 'fill-rose-400 text-rose-400 scale-110' : ''}`} aria-hidden="true" />
          </button>

          {/* Share Button */}
          <button
            id="share-fractal-btn"
            onClick={handleShare}
            className={`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${
              shareCopied
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30'
            }`}
            title={shareCopied ? 'Ссылка скопирована!' : 'Поделиться этим фракталом'}
            aria-label={shareCopied ? 'Ссылка скопирована' : 'Поделиться этим фракталом'}
          >
            {shareCopied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
          </button>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <button
              id="feed-prev-btn"
              onClick={(e) => { e.currentTarget.blur(); onPrev(); }}
              className="p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              title="Предыдущий [Стрелка влево]"
              aria-label="Предыдущий фрактал (клавиша: стрелка влево)"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            </button>

            <button
              id="feed-next-btn"
              onClick={(e) => { e.currentTarget.blur(); onNext(); }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20"
              title="Следующий случайный фрактал [Пробел]"
            >
              <span>Далее</span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
