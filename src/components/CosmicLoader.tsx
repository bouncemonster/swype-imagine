import React, { useEffect, useState } from 'react';
import { logger } from '../utils/logger';

interface CosmicLoaderProps {
  isReady: boolean;
  /** Real loading progress 0-1 from device init + shader compile + first frame. */
  progress?: number;
  onFinished?: () => void;
}

// Phase text is DERIVED from the real progress value (see stageIndex), not a
// fixed 450ms timer — so the wording always reflects what the GPU is genuinely
// doing, and the bar reaches 100% exactly when the first frame is on screen.
const PHASES = [
  'Пробуждение золотой спирали φ...',
  'Пробуждение GPU-контекста...',
  'Компиляция шейдеров фракталов...',
  'Компоновка на видеокарту...',
  'Погружение в бесконечность...',
];

function stageIndex(progress: number, isReady: boolean): number {
  if (isReady || progress >= 1) return 4;
  if (progress >= 0.7) return 3;
  if (progress >= 0.4) return 2;
  if (progress >= 0.12) return 1;
  return 0;
}

export const CosmicLoader: React.FC<CosmicLoaderProps> = ({ isReady, progress = 0, onFinished }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  // CRITICAL: Force-dismiss loader after 60s even if engine never becomes ready.
  // Prevents infinite hang when GPU initialization fails silently. Kept well above
  // worst-case real-hardware cold start (ANGLE driver init + first shader compile
  // measurably exceeds 30s on desktop GPUs, where an early force-dismiss raced the
  // genuine first frame and exposed a black canvas — caught by loader-sync-test).
  useEffect(() => {
    const forceDismissTimer = setTimeout(() => {
      if (!isReady) {
        logger.warn('[CosmicLoader] Force-dismissing after 60s — engine failed to initialize');
        setFadingOut(true);
        const hideTimer = setTimeout(() => {
          setHidden(true);
          onFinished?.();
        }, 700);
        return () => clearTimeout(hideTimer);
      }
    }, 60000);
    return () => clearTimeout(forceDismissTimer);
  }, [isReady, onFinished]);

  useEffect(() => {
    if (isReady) {
      // Delay slightly for smooth visual completion
      const timer = setTimeout(() => {
        setFadingOut(true);
        const hideTimer = setTimeout(() => {
          setHidden(true);
          onFinished?.();
        }, 700);
        return () => clearTimeout(hideTimer);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isReady, onFinished]);

  if (hidden) return null;

  return (
    <div
      id="cosmic-loader-overlay"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Meditative Ambient Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)',
        }}
      />

      {/* Living Fractal Unfolding Bloom (SVG) */}
      <div className="relative w-44 h-44 flex items-center justify-center mb-6">
        {/* Breathing subtle golden ripple rings */}
        <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-3 rounded-full border border-amber-400/25 animate-pulse" style={{ animationDuration: '2.4s' }} />
        <div className="absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]" />
        
        {/* Recursive Golden Spiral Petals */}
        <svg 
          viewBox="0 0 160 160" 
          className="w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]"
        >
          <defs>
            <linearGradient id="spiralGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--brand-amber-soft)' }} stopOpacity="0.95" />
              <stop offset="45%" style={{ stopColor: 'var(--brand-amber)' }} stopOpacity="0.8" />
              <stop offset="100%" style={{ stopColor: 'var(--brand-amber-deep)' }} stopOpacity="0.4" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* 8 Symmetrical Golden Fibonacci Phyllotaxis Spiral Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 80 80)`}>
              {/* Logarithmic Fractal Spiral Arc */}
              <path
                d="M 80,80 Q 95,60 115,68 T 132,45"
                fill="none"
                stroke="url(#spiralGold)"
                strokeWidth={1.2}
                strokeLinecap="round"
                opacity={0.75}
                filter="url(#softGlow)"
              />
              {/* Petal contour */}
              <path
                d="M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* Golden Node */}
              <circle
                cx="118"
                cy="74"
                r="1.8"
                fill="currentColor"
                opacity="0.8"
              />
            </g>
          ))}

          {/* Golden Center Core Node */}
          <circle cx="80" cy="80" r="4.5" fill="currentColor" opacity="0.95" filter="url(#softGlow)" />
        </svg>

        {/* Pulsing Luminous Core Glow */}
        <div
          className="absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] animate-pulse"
          style={{ boxShadow: '0 0 24px var(--brand-amber)' }}
        />
      </div>

      {/* Minimalist Elegant Brand Typography */}
      <div className="text-center px-4 space-y-1.5 mb-6">
        <h1 className="text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
          ФРАКТАЛЬНЫЙ КОНТИНУУМ
        </h1>
        <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono">
          Живая Геометрия • 100+ Канонических Форм • φ = 1.618
        </p>
      </div>

      {/* Minimalist Progress Indicator */}
      <div className="w-64 max-w-[80vw] flex flex-col items-center">
        <div className="w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner">
          <div
            id="cosmic-loader-progress"
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-[width] duration-500 ease-out"
            style={{ width: `${Math.round(Math.min(1, Math.max(0, progress)) * 100)}%` }}
          />
        </div>

        <p className="text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all">
          {PHASES[stageIndex(progress, isReady)]}
        </p>
      </div>

      {/* Quiet Geometric Harmony Watermark */}
      <div className="absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase">
        WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика
      </div>
    </div>
  );
};
