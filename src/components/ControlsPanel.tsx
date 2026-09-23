import React, { useState } from 'react';
import { FractalParams, FractalType, CameraMode, RenderStyle, SliceAxis, AudioTuning } from '../types/fractal';
import { 
  TasteProfile, 
  ALL_FRACTAL_TYPES, 
  FRACTAL_NAMES,
  COMPOSITE_OP_NAMES,
  COMPOSITE_OP_SYMBOLS,
  ALL_COMPOSITE_OPS
} from '../engine/NeuroAestheticsEngine';
import { COLOR_PALETTES } from '../palettes';
import { fractalArchitectures } from '../data/fractalArchitectures';
import { 
  Camera, Maximize, BookOpen, X, Volume2, VolumeX, BookmarkPlus, RotateCw, Pause
} from 'lucide-react';

interface ControlsPanelProps {
  params: FractalParams;
  onParamsChange: (updater: (prev: FractalParams) => FractalParams) => void;
  onSelectFractalType?: (type: FractalType) => void;
  onCaptureScreenshot: () => void;
  onToggleFullscreen: () => void;
  onToggleInfoModal: () => void;
  onOpenAtlasModal?: () => void;
  activeBackend: string;
  forcedBackend: 'webgpu' | 'webgl2' | 'auto';
  onSelectBackend: (backend: 'webgpu' | 'webgl2' | 'auto') => void;
  onClose: () => void;
  tasteProfile?: TasteProfile;
  onSaveToFeed?: () => void;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  params,
  onParamsChange,
  onSelectFractalType,
  onCaptureScreenshot,
  onToggleFullscreen,
  onToggleInfoModal,
  onOpenAtlasModal,
  activeBackend,
  forcedBackend,
  onSelectBackend,
  onClose,
  tasteProfile,
  onSaveToFeed,
}) => {
  const [activeTab, setActiveTab] = useState<'architectures' | 'composition' | 'camera' | 'palettes' | 'morphology' | 'gpu' | 'audio' | 'neuro'>('architectures');
  const [selectedGroup, setSelectedGroup] = useState<'all' | 'golden' | 'primes' | 'tpms' | 'manifolds' | 'classic'>('all');

  const filteredArchitectures = selectedGroup === 'all' 
    ? fractalArchitectures 
    : fractalArchitectures.filter(a => a.group === selectedGroup);

  return (
    <div className="safe-t safe-r safe-fit fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 pb-3 border-b border-neutral-800/80 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5">
              <span>Режим Инженера</span>
              <span className="text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">24 Топологии</span>
            </h2>
            <p className="text-[10px] text-neutral-400 font-mono">WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-end gap-1">
          {onOpenAtlasModal && (
            <button
              id="open-atlas-modal-btn"
              onClick={onOpenAtlasModal}
              className="px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm"
              title="Атлас базовых фракталов (42 типа) и научная синергия"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Атлас</span>
            </button>
          )}

          {onSaveToFeed && (
            <button
              id="save-to-feed-btn"
              onClick={onSaveToFeed}
              className="px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1"
              title="Сохранить текущую геометрию в ленту"
            >
              <BookmarkPlus className="w-3 h-3" />
              <span className="hidden sm:inline">В ленту</span>
            </button>
          )}

          <button
            id="capture-screenshot-btn"
            onClick={onCaptureScreenshot}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition"
            title="Снимок экрана в полном разрешении"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>

          <button
            id="toggle-fullscreen-btn"
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition"
            title="Полноэкранный режим"
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>

          <button
            id="show-math-info-btn"
            onClick={onToggleInfoModal}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition"
            title="Научное обоснование & Математика"
          >
            <BookOpen className="w-3.5 h-3.5" />
          </button>

          <button
            id="close-engineer-panel-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1"
            title="Закрыть режим инженера"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs (Scrollable on mobile, 4-col on desktop) */}
      <div className="grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center">
        <button
          id="tab-architectures-btn"
          onClick={() => setActiveTab('architectures')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'architectures' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Топологии
        </button>
        <button
          id="tab-composition-btn"
          onClick={() => setActiveTab('composition')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'composition' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Гибриды
        </button>
        <button
          id="tab-camera-btn"
          onClick={() => setActiveTab('camera')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'camera' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Камера/Внутри
        </button>
        <button
          id="tab-palettes-btn"
          onClick={() => setActiveTab('palettes')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'palettes' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Палитры
        </button>
        <button
          id="tab-morphology-btn"
          onClick={() => setActiveTab('morphology')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'morphology' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Морфология φ
        </button>
        <button
          id="tab-gpu-btn"
          onClick={() => setActiveTab('gpu')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'gpu' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          60-250 FPS
        </button>
        <button
          id="tab-audio-btn"
          onClick={() => setActiveTab('audio')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'audio' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Звук φ
        </button>
        <button
          id="tab-neuro-btn"
          onClick={() => setActiveTab('neuro')}
          className={`py-1.5 rounded-lg text-[10px] font-medium transition ${
            activeTab === 'neuro' ? 'bg-neutral-800 text-amber-300 shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Нейро-Вкус
        </button>
      </div>

      {/* TAB 1: 24 MATHEMATICAL ARCHITECTURES */}
      {activeTab === 'architectures' && (
        <div className="space-y-3">
          {/* Sub-Filter Bar */}
          <div className="flex flex-wrap gap-1 pb-1">
            {[
              { id: 'all', label: 'Все (24)' },
              { id: 'golden', label: 'φ Золотое Сечение' },
              { id: 'primes', label: 'Простые числа' },
              { id: 'tpms', label: 'Минимальные ТПМС' },
              { id: 'manifolds', label: '4D Топология' },
              { id: 'classic', label: 'Классические' },
            ].map(grp => (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id as 'all' | 'golden' | 'primes' | 'tpms' | 'manifolds' | 'classic')}
                className={`px-2 py-1 rounded-md text-[9px] transition ${
                  selectedGroup === grp.id 
                    ? 'bg-amber-400 text-neutral-950 font-bold' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>

          <div className="space-y-1.5 max-h-[50vh] overflow-y-auto pr-1">
            {filteredArchitectures.map((arch) => {
              const isSelected = params.type === arch.id;
              return (
                <button
                  key={arch.id}
                  id={`arch-btn-${arch.id}`}
                  onClick={() => {
                    if (onSelectFractalType) {
                      onSelectFractalType(arch.id);
                    } else {
                      onParamsChange(prev => ({ ...prev, type: arch.id }));
                    }
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]'
                      : 'bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${isSelected ? 'text-amber-300' : 'text-neutral-200'}`}>
                      {arch.label}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
                    )}
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-0.5 line-clamp-1">{arch.desc}</p>
                  <code className="text-[9px] text-amber-400/90 font-mono mt-1 block">{arch.formula}</code>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: DISTANCE FIELD ALGEBRA & HYBRIDS */}
      {activeTab === 'composition' && (
        <div className="space-y-3.5">
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Оператор Наложения (Algebra SDF)</span>
            <div className="grid grid-cols-2 gap-1.5">
              {ALL_COMPOSITE_OPS.map((op) => (
                <button
                  key={op}
                  onClick={() => onParamsChange(prev => ({ ...prev, compositeOp: op }))}
                  className={`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${
                    params.compositeOp === op
                      ? 'bg-amber-950/50 border-amber-500/70 text-amber-200'
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="font-medium">{COMPOSITE_OP_NAMES[op]}</span>
                  <code className="text-[9px] text-amber-400/80 font-mono ml-1">{COMPOSITE_OP_SYMBOLS[op]}</code>
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Hybrid Topology */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-neutral-200">Вторичная Геометрия (Слой 2)</span>
              <span className="text-[10px] text-amber-400 font-mono">{Math.round((params.hybridBlend ?? 0.35) * 100)}%</span>
            </div>
            <select
              value={params.hybridType || params.type}
              onChange={(e) => onParamsChange(prev => ({ ...prev, hybridType: e.target.value as FractalType }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
            >
              {ALL_FRACTAL_TYPES.map(type => (
                <option key={type} value={type}>{FRACTAL_NAMES[type]}</option>
              ))}
            </select>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={params.hybridBlend ?? 0.35}
              onChange={(e) => onParamsChange(prev => ({ ...prev, hybridBlend: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          {/* Tertiary Architecture */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-neutral-200">Третичная Геометрия (Слой 3)</span>
              <span className="text-[10px] text-amber-400 font-mono">{Math.round((params.tertiaryBlend ?? 0.2) * 100)}%</span>
            </div>
            <select
              value={params.tertiaryType || 'riemannZeta'}
              onChange={(e) => onParamsChange(prev => ({ ...prev, tertiaryType: e.target.value as FractalType }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
            >
              {ALL_FRACTAL_TYPES.map(type => (
                <option key={type} value={type}>{FRACTAL_NAMES[type]}</option>
              ))}
            </select>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={params.tertiaryBlend ?? 0.2}
              onChange={(e) => onParamsChange(prev => ({ ...prev, tertiaryBlend: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          {/* Smooth Radius k & Warp */}
          <div className="space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Радиус Сглаживания (k-factor)</span>
              <span className="font-mono text-amber-400">{params.smoothK.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="1.2"
              step="0.01"
              value={params.smoothK}
              onChange={(e) => onParamsChange(prev => ({ ...prev, smoothK: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />

            <div className="flex justify-between text-[11px] pt-2">
              <span className="text-neutral-300">Искривление Пространства (Domain Warp)</span>
              <span className="font-mono text-amber-400">{params.warpStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.01"
              value={params.warpStrength}
              onChange={(e) => onParamsChange(prev => ({ ...prev, warpStrength: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>
        </div>
      )}

      {/* TAB 3: CAMERA & INSIDE-OUT IMMERSION */}
      {activeTab === 'camera' && (
        <div className="space-y-3.5">
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Топологический Режим Камеры</span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'orbit', label: 'Орбита (Снаружи)', desc: 'Сферический охват' },
                { id: 'flyThrough', label: 'Полет Сквозь Залы', desc: 'Внутри коридоров' },
                { id: 'goldenSpiral', label: 'Золотая Спираль φ', desc: 'Погружение в ядро' },
                { id: 'kelvinInvert', label: 'Инверсия Кельвина', desc: 'Выворот наружу' },
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => onParamsChange(prev => ({ ...prev, cameraMode: mode.id as CameraMode }))}
                  className={`p-2 rounded-lg border text-left transition ${
                    params.cameraMode === mode.id
                      ? 'bg-amber-950/50 border-amber-500/70 text-amber-200'
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="font-medium text-[10px]">{mode.label}</div>
                  <div className="text-[8px] text-neutral-500">{mode.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Auto-rotation start/stop — mirrors the S-key binding and the interact→hold→resume
              behavior in the render loop. Bound to params.autoRotate (App state) so it persists. */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-neutral-200 block">Автовращение</span>
              <span className="text-[8px] text-neutral-500">Пауза при взаимодействии, возобновление через ~3с</span>
            </div>
            <button
              id="toggle-auto-rotate-btn"
              onClick={() => onParamsChange(prev => ({ ...prev, autoRotate: !prev.autoRotate }))}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-medium transition ${
                params.autoRotate
                  ? 'bg-amber-950/50 border-amber-500/70 text-amber-200'
                  : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
              }`}
              title="Клавиша S — пуск/стоп вращения"
            >
              {params.autoRotate ? <Pause className="w-3 h-3" /> : <RotateCw className="w-3 h-3" />}
              <span>{params.autoRotate ? 'Вращается' : 'Остановлено'}</span>
            </button>
          </div>

          {/* Rendering Modality: 7 Math-Driven Visualization Techniques */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-semibold text-neutral-200">Механика Рендеринга</span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase">
                {params.renderStyle || 'solid'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'solid', label: 'Solid PBR', desc: 'PBR + Тень + AO' },
                { id: 'xray', label: 'X-Ray', desc: 'Томография' },
                { id: 'topo', label: 'Топография', desc: 'Кривизна' },
                { id: 'hologram', label: 'Голограмма', desc: 'Проекция' },
                { id: 'iridescent', label: 'Перламутр', desc: 'Интерференция' },
                { id: 'quantum', label: 'Плазма', desc: 'Поле энергии' },
                { id: 'gemstone', label: 'Кристалл', desc: 'Рефракция' },
                { id: 'wireframe', label: 'Каркас', desc: 'Решётка DE' },
                { id: 'heatmap', label: 'Термограмма', desc: 'Плотность итераций' },
                { id: 'neon', label: 'Неон', desc: 'Краевой свет' },
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => onParamsChange(prev => ({ ...prev, renderStyle: style.id as RenderStyle }))}
                  className={`p-2 rounded-lg border text-left transition ${
                    (params.renderStyle || 'solid') === style.id
                      ? 'bg-cyan-950/50 border-cyan-500/70 text-cyan-200'
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="font-medium text-[10px]">{style.label}</div>
                  <div className="text-[8px] text-neutral-500">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Slicing Cross Section Plane & Multi-Axis Selection */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-neutral-200">Мультиосевая Томография (Slice)</span>
              <span className="text-[10px] font-mono text-amber-400">
                {params.slicePlane > 0.01 ? `${(params.slicePlane * 100).toFixed(0)}%` : 'Выкл'}
              </span>
            </div>

            {/* Slice Axis Selector */}
            <div className="grid grid-cols-4 gap-1">
              {[
                { id: 'golden', label: 'φ Золотая' },
                { id: 'x', label: 'X Сагитт.' },
                { id: 'y', label: 'Y Аксиал.' },
                { id: 'z', label: 'Z Фронт.' },
              ].map((axis) => (
                <button
                  key={axis.id}
                  onClick={() => onParamsChange(prev => ({ ...prev, sliceAxis: axis.id as SliceAxis }))}
                  className={`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${
                    (params.sliceAxis || 'golden') === axis.id
                      ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {axis.label}
                </button>
              ))}
            </div>

            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.01"
              value={params.slicePlane}
              onChange={(e) => onParamsChange(prev => ({ ...prev, slicePlane: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
            <p className="text-[9px] text-neutral-400">Вскрывает внутренние камеры со светящейся каймой выбранной нормали.</p>
          </div>

          {/* Spatial Instruments: Probe HUD & Macro Focus */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Инструменты Исследователя</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onParamsChange(prev => ({ ...prev, probeActive: !prev.probeActive }))}
                className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                  params.probeActive
                    ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-200'
                    : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div>
                  <div className="font-medium text-[10px]">Топологический Зонд</div>
                  <div className="text-[8px] text-neutral-500">Прицел и телеметрия d(p)</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${params.probeActive ? 'bg-emerald-400 animate-ping' : 'bg-neutral-700'}`} />
              </button>

              <button
                onClick={() => onParamsChange(prev => ({ ...prev, macroMode: !prev.macroMode }))}
                className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                  params.macroMode
                    ? 'bg-amber-950/60 border-amber-500/70 text-amber-200'
                    : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div>
                  <div className="font-medium text-[10px]">Ультра-Макро 10⁻⁴</div>
                  <div className="text-[8px] text-neutral-500">Микрошаг реймарша</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${params.macroMode ? 'bg-amber-400' : 'bg-neutral-700'}`} />
              </button>
            </div>
          </div>

          {/* Headlamp & Volumetric Fog */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-neutral-200">Фонарь Исследователя (Headlamp)</span>
              <span className="text-[10px] font-mono text-amber-400">{(params.headlampPower || 1.0).toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="2.0"
              step="0.1"
              value={params.headlampPower ?? 1.0}
              onChange={(e) => onParamsChange(prev => ({ ...prev, headlampPower: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />

            <div className="flex justify-between items-center text-[11px] pt-2">
              <span className="text-neutral-200">Эфирный Туман (Volumetric Fog)</span>
              <span className="text-[10px] font-mono text-amber-400">{(params.volumetricFog || 0.4).toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="2.0"
              step="0.1"
              value={params.volumetricFog ?? 0.4}
              onChange={(e) => onParamsChange(prev => ({ ...prev, volumetricFog: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          {/* Internal Chamber Carving */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-neutral-200">Выдалбливание Соборов (Interior Cut)</span>
              <span className="text-[10px] font-mono text-amber-400">{Math.round((params.interiorCut ?? 0.4) * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.02"
              value={params.interiorCut ?? 0.4}
              onChange={(e) => onParamsChange(prev => ({ ...prev, interiorCut: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>
        </div>
      )}

      {/* TAB 4: PALETTES (14 SPECTRUMS) */}
      {activeTab === 'palettes' && (
        <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {COLOR_PALETTES.map((pal) => {
            const isSelected = params.paletteId === pal.id;
            return (
              <button
                key={pal.id}
                onClick={() => onParamsChange(prev => ({ ...prev, paletteId: pal.id, customPalette: pal }))}
                className={`w-full p-2 rounded-xl border flex items-center justify-between transition ${
                  isSelected 
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]' 
                    : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70'
                }`}
              >
                <div className="text-left">
                  <span className={`text-[11px] font-semibold block ${isSelected ? 'text-amber-300' : 'text-neutral-200'}`}>
                    {pal.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div 
                    className="w-4 h-4 rounded-full border border-neutral-700" 
                    style={{ backgroundColor: `rgb(${pal.primary.map(v => Math.round(v * 255)).join(',')})` }} 
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-neutral-700" 
                    style={{ backgroundColor: `rgb(${pal.secondary.map(v => Math.round(v * 255)).join(',')})` }} 
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-neutral-700" 
                    style={{ backgroundColor: `rgb(${pal.accent.map(v => Math.round(v * 255)).join(',')})` }} 
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* TAB 5: MORPHOLOGY & GOLDEN RATIO φ */}
      {activeTab === 'morphology' && (
        <div className="space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Золотое Число (φ multiplier)</span>
              <span className="font-mono text-amber-400">{params.phiMultiplier.toFixed(5)}</span>
            </div>
            <input
              type="range"
              min="1.4"
              max="1.8"
              step="0.001"
              value={params.phiMultiplier}
              onChange={(e) => onParamsChange(prev => ({ ...prev, phiMultiplier: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Итерации (Глубина фрактала)</span>
              <span className="font-mono text-amber-400">{params.iterations}</span>
            </div>
            <input
              type="range"
              min="8"
              max="36"
              step="1"
              value={params.iterations}
              onChange={(e) => onParamsChange(prev => ({ ...prev, iterations: parseInt(e.target.value, 10) }))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Скорость Морфинга</span>
              <span className="font-mono text-amber-400">{params.morphSpeed.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="2.0"
              step="0.05"
              value={params.morphSpeed}
              onChange={(e) => onParamsChange(prev => ({ ...prev, morphSpeed: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Кубическая Складка (Box Fold)</span>
              <span className="font-mono text-amber-400">{params.boxFold.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.05"
              value={params.boxFold}
              onChange={(e) => onParamsChange(prev => ({ ...prev, boxFold: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Сферическая Складка (Sphere Fold)</span>
              <span className="font-mono text-amber-400">{params.sphereFold.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="1.5"
              step="0.05"
              value={params.sphereFold}
              onChange={(e) => onParamsChange(prev => ({ ...prev, sphereFold: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>
        </div>
      )}

      {/* TAB 6: 60-250 FPS & GPU ENGINE */}
      {activeTab === 'gpu' && (
        <div className="space-y-3">
          {/* Target FPS Selector (60 to 250 FPS) */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Целевая Частота Кадров (Target FPS)</span>
            <div className="grid grid-cols-4 gap-1.5">
              {[250, 165, 144, 120, 60, 0].map(fps => (
                <button
                  key={fps}
                  onClick={() => onParamsChange(prev => ({ ...prev, targetFps: fps }))}
                  className={`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${
                    params.targetFps === fps
                      ? 'bg-amber-400 text-neutral-950 font-bold border-amber-300'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  {fps === 0 ? 'Uncapped' : `${fps} FPS`}
                </button>
              ))}
            </div>
            <p className="text-[9px] text-neutral-400">Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах.</p>
          </div>

          {/* Dynamic Resolution Scaling (DRS) */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-neutral-200 block">Dynamic Resolution Scaling (DRS)</span>
              <p className="text-[9px] text-neutral-400">Автоматически балансирует масштаб рендера для стабильного фреймрейта.</p>
            </div>
            <button
              onClick={() => onParamsChange(prev => ({ ...prev, drsEnabled: !prev.drsEnabled }))}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${
                params.drsEnabled
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
              }`}
            >
              {params.drsEnabled ? 'АКТИВЕН' : 'ОТКЛЮЧЕН'}
            </button>
          </div>

          {/* Backend Selector */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Вычислительный Конвейер</span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'auto', label: 'Auto (Detect)' },
                { id: 'webgpu', label: 'WebGPU (WGSL)' },
                { id: 'webgl2', label: 'WebGL2 (GLSL)' },
              ].map(b => (
                <button
                  key={b.id}
                  onClick={() => onSelectBackend(b.id as 'webgpu' | 'webgl2' | 'auto')}
                  className={`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${
                    forcedBackend === b.id
                      ? 'bg-amber-400 text-neutral-950 font-bold border-amber-300'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <div className="text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono">
              <span>Текущий: {activeBackend}</span>
              <span className="text-emerald-400">Anti-Banding: Dither + Secant</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: HARMONIC AUDIO φ & SYNCHRONIZATION */}
      {activeTab === 'audio' && (
        <div className="space-y-3">
          {/* Audio Master Toggle */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {params.enableAudio ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
              <div>
                <span className="text-[11px] font-semibold text-neutral-200 block">Акустический Резонатор φ</span>
                <p className="text-[9px] text-neutral-400">Теплый гармонический дрон на частоте 432 Гц</p>
              </div>
            </div>
            <button
              onClick={() => onParamsChange(prev => ({ ...prev, enableAudio: !prev.enableAudio }))}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${
                params.enableAudio
                  ? 'bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
              }`}
            >
              {params.enableAudio ? 'ВКЛЮЧЕН' : 'ВЫКЛЮЧЕН'}
            </button>
          </div>

          {/* Volume Slider */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-neutral-300">Громкость Резонатора</span>
              <span className="font-mono text-amber-400">{Math.round((params.audioVolume ?? 0.65) * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.01"
              value={params.audioVolume ?? 0.65}
              onChange={(e) => onParamsChange(prev => ({ ...prev, audioVolume: parseFloat(e.target.value) }))}
              className="w-full accent-amber-400"
            />
          </div>

          {/* Tuning Mode Picker */}
          <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-semibold text-neutral-200 block">Акустический Строй (Harmonic Mode)</span>
            <div className="space-y-1.5">
              {[
                { id: 'phi432', label: '432 Hz Золотое Сечение φ', desc: 'Мягкий бархатный дрон, частоты f0 · φ^n' },
                { id: 'fibonacci', label: 'Пифагорейский Строй Фибоначчи', desc: 'Чистая квинта 3:2 и терция 5:4' },
                { id: 'zenChimes', label: 'Резонансные Обертоны & Колокола', desc: 'Микротональные колокольные гармоники' },
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => onParamsChange(prev => ({ ...prev, audioTuning: mode.id as AudioTuning }))}
                  className={`w-full p-2 rounded-lg border text-left transition ${
                    (params.audioTuning || 'phi432') === mode.id
                      ? 'bg-amber-950/50 border-amber-500/70 text-amber-200'
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="font-medium text-[10px]">{mode.label}</div>
                  <div className="text-[8px] text-neutral-500">{mode.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed">
            ✨ <strong>Синхронизация с геометрией:</strong> Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом.
          </div>
        </div>
      )}

      {/* TAB 8: NEURO-AESTHETICS TASTE PROFILE */}
      {activeTab === 'neuro' && (
        <div className="space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-200">Профиль Зрительной Коры</span>
            <span className="text-[10px] font-mono text-amber-400">
              {tasteProfile?.totalSpecimensExplored || 0} исследовано
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-neutral-400">Максимальный Резонанс:</span>
              <span className="font-mono text-amber-300">{tasteProfile?.highestResonanceScore.toFixed(1) || 0}%</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-neutral-400">Оптимальная глубина итераций:</span>
              <span className="font-mono text-neutral-200">{Math.round(tasteProfile?.preferredIterations || 20)}</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-neutral-400">Любимая цветовая гамма:</span>
              <span className="font-mono text-neutral-200">{Math.round((tasteProfile?.preferredHue || 0) * 360)}° Hue</span>
            </div>
          </div>

          <p className="text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed">
            Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия.
          </p>
        </div>
      )}
    </div>
  );
};
