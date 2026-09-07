import React, { useState } from 'react';
import { 
  User, Sparkles, Wrench, Volume2, ShieldCheck, 
  X, Check, Activity, BarChart3, Sliders, Dna, Brain, Eye,
  Heart, Play, Trash2, Music
} from 'lucide-react';
import { 
  TasteProfile, 
  AestheticArchetype, 
  ARCHETYPE_LABELS 
} from '../engine/NeuroAestheticsEngine';
import { FractalSpecimen } from '../types/fractal';
import { AudioTuningMode } from '../audio/goldenAudio';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasteProfile?: TasteProfile;
  archetypeBreakdown: { archetype: AestheticArchetype; label: string; percentage: number; score: number }[];
  currentSpecimen: FractalSpecimen | null;
  resonanceScore: number;
  isEngineerMode: boolean;
  onToggleEngineerMode: () => void;
  audioTuning: AudioTuningMode;
  onSelectAudioTuning: (mode: AudioTuningMode) => void;
  onResetTasteProfile?: () => void;
  onOpenManifest?: () => void;
  likedSpecimens?: FractalSpecimen[];
  onPlayLiked?: (specimen: FractalSpecimen) => void;
  onRemoveLike?: (id: string) => void;
  isCurrentLiked?: boolean;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  tasteProfile,
  archetypeBreakdown,
  currentSpecimen,
  resonanceScore,
  isEngineerMode,
  onToggleEngineerMode,
  audioTuning,
  onSelectAudioTuning,
  onResetTasteProfile,
  onOpenManifest,
  likedSpecimens = [],
  onPlayLiked,
  onRemoveLike,
  isCurrentLiked = false,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="user-profile-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        id="user-profile-modal-card"
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header with User Info */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40">
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner">
              <User className="w-6 h-6 text-amber-300" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold">
                φ
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-white tracking-wide">
                  Профиль Исследователя
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Нейро-Эстетика
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Математический профиль вкуса & селекция фенотипов
              </p>
            </div>
          </div>

          <button
            id="close-user-profile-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar">
          
          {/* 1. Key Metrics Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col">
              <span className="text-[11px] text-neutral-400 font-medium">Текущий Резонанс</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-bold text-amber-300 font-mono">
                  {resonanceScore}%
                </span>
                <span className="text-[10px] text-neutral-500">гармония</span>
              </div>
              <div className="w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500" 
                  style={{ width: `${resonanceScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col">
              <span className="text-[11px] text-neutral-400 font-medium">Исследовано</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-bold text-white font-mono">
                  {tasteProfile?.totalSpecimensExplored || 1}
                </span>
                <span className="text-[10px] text-neutral-500">форм</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-2">
                Ген #{currentSpecimen?.generation || 1} в фокусе
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col">
              <span className="text-[11px] text-neutral-400 font-medium">Пиковый Резонанс</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-bold text-emerald-400 font-mono">
                  {tasteProfile?.highestResonanceScore || 95}%
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-2">
                Авто-обучение активно
              </span>
            </div>
          </div>

          {/* 2. Liked Fractals Playlist */}
          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className={`w-4 h-4 ${likedSpecimens.length > 0 ? 'text-rose-400 fill-rose-400' : 'text-neutral-500'}`} />
                <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Избранные Фракталы
                </h3>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {likedSpecimens.length}
                </span>
              </div>
              {isCurrentLiked && currentSpecimen && (
                <span className="text-[10px] text-rose-400 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-rose-400" />
                  Текущий в избранном
                </span>
              )}
            </div>

            {likedSpecimens.length === 0 ? (
              <div className="text-xs text-neutral-500 py-3 text-center">
                Нажмите <Heart className="w-3 h-3 inline text-neutral-400" /> на понравившемся фрактале, чтобы добавить его в плейлист
              </div>
            ) : (
              <div className="space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar">
                {likedSpecimens.map((specimen, idx) => (
                  <div
                    key={specimen.id}
                    className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group"
                  >
                    <span className="text-[10px] text-neutral-500 font-mono w-5 text-right">{idx + 1}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-neutral-200 font-medium truncate">{specimen.name}</div>
                      <div className="text-[9px] text-neutral-500 font-mono">φ {specimen.phiMultiplier.toFixed(4)} • Gen #{specimen.generation}</div>
                    </div>
                    {onPlayLiked && (
                      <button
                        onClick={() => onPlayLiked(specimen)}
                        className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100"
                        title="Воспроизвести"
                      >
                        <Play className="w-3 h-3" />
                      </button>
                    )}
                    {onRemoveLike && (
                      <button
                        onClick={() => onRemoveLike(specimen.id)}
                        className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100"
                        title="Удалить из избранного"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Aesthetic Archetype Mathematical Resonance Vector */}
          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Математический Вектор Резонанса (Архетипы)
                </h3>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">
                5D Пространство Вкуса
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed">
              Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:
            </p>

            <div className="space-y-2.5 pt-1">
              {archetypeBreakdown.map(item => (
                <div key={item.archetype} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium">{item.label}</span>
                    <span className="font-mono text-neutral-400 font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Sacred Audio Tuning */}
          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Акустический Гармонический Строй
                </h3>
              </div>
              <span className="text-[11px] text-neutral-500">432 Гц Золотой Резонатор</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'phi432', label: 'Золотое Сечение φ (432 Гц)', desc: 'Интервалы золотого ряда φ' },
                { id: 'fibonacci', label: 'Чистый Пифагоров Ряд', desc: 'Квинты и кварты ряда Фибоначчи' },
                { id: 'zenChimes', label: 'Тибетские Чаши', desc: 'Теплые колокольные гармоники' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => onSelectAudioTuning(opt.id as AudioTuningMode)}
                  className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    audioTuning === opt.id
                      ? 'bg-amber-500/20 border-amber-500/60 text-white'
                      : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="text-xs font-semibold">{opt.label}</span>
                  <span className="text-[10px] text-neutral-500 mt-1">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 5. PROJECT MANIFEST & MARKETING OVERVIEW (Спрятанный манифест) */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <span>О проекте & Описание Архитектуры</span>
                </h3>
                <p className="text-[11px] text-neutral-400">
                  34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU
                </p>
              </div>
            </div>

            <button
              id="open-manifest-from-profile-btn"
              onClick={() => {
                onOpenManifest?.();
              }}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0"
            >
              <span>Читать</span>
            </button>
          </div>

          {/* 6. ENGINEER MODE DRAWER SECTION (Спрятанный раздел) */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-wide">
                    Режим Инженера (Продвинутый)
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS
                  </p>
                </div>
              </div>

              <button
                id="toggle-engineer-mode-in-profile"
                onClick={onToggleEngineerMode}
                className={`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${
                  isEngineerMode
                    ? 'bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20'
                    : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isEngineerMode ? 'bg-amber-400 animate-ping' : 'bg-neutral-500'}`} />
                <span>{isEngineerMode ? 'Инженер Включен' : 'Включить Инж'}</span>
              </button>
            </div>

            {isEngineerMode && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150">
                <span>Панель управления инженера и телеметрия FPS активированы на холсте.</span>
                <button
                  onClick={onClose}
                  className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition"
                >
                  Перейти на холст
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs">
          <span className="text-neutral-500 font-mono text-[11px]">
            Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°
          </span>

          <button
            id="close-profile-btn"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
