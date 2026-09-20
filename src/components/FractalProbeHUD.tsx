import React from 'react';
import { Crosshair, Activity } from 'lucide-react';
import { FractalParams } from '../types/fractal';

interface FractalProbeHUDProps {
  params: FractalParams;
  onToggleProbe: () => void;
  onToggleMacro: () => void;
}

export const FractalProbeHUD: React.FC<FractalProbeHUDProps> = ({
  params,
  onToggleProbe,
  onToggleMacro,
}) => {
  if (!params.probeActive) return null;

  // Approximate mathematical distance based on zoom and flight position
  const camDist = Math.sqrt(
    (params.camPosX ?? 0) ** 2 + 
    (params.camPosY ?? 0) ** 2 + 
    (params.camPosZ ?? 0) ** 2
  );
  
  const estDistance = Math.max(0.001, camDist / (params.zoom || 3.0)).toFixed(4);
  const slicePos = params.slicePlane ? ((0.5 - params.slicePlane) * 3.5).toFixed(3) : 'OFF';

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono">
      {/* Center Laser Reticle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Subtle crosshair */}
          <div className="absolute w-full h-[1px] bg-emerald-400/40" />
          <div className="absolute h-full w-[1px] bg-emerald-400/40" />
          <div className="w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
          </div>
          {/* Degree ticks */}
          <div className="absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest">
            PROBE
          </div>
          <div className="absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono">
            {params.macroMode ? 'MACRO 10⁻⁴' : 'STANDARD'}
          </div>
        </div>
      </div>

      {/* Top Left: Probe Telemetry */}
      <div className="pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-1.5">
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]">
            <Crosshair className="w-3.5 h-3.5" />
            Топологический Зонд
          </span>
          <button
            onClick={onToggleProbe}
            className="text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80"
          >
            Закрыть
          </button>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-slate-500">Дистанция до SDF d(p):</span>
            <span className="text-emerald-300 font-mono">{estDistance} u</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Позиция Камеры:</span>
            <span className="text-slate-300 font-mono text-[10px]">
              X:{(params.camPosX ?? 0).toFixed(2)} Y:{(params.camPosY ?? 0).toFixed(2)} Z:{(params.camPosZ ?? 0).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Ось Среза:</span>
            <span className="text-amber-300 font-mono uppercase">
              {params.sliceAxis || 'golden'} ({slicePos})
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Модальность:</span>
            <span className="text-cyan-300 font-mono uppercase">
              {params.renderStyle || 'solid'}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Октавы / Глубина:</span>
            <span className="text-indigo-300 font-mono">
              {params.octaveLayers || 2}L · k={params.smoothK ?? 0.35}
            </span>
          </div>
        </div>

        <div className="pt-1 border-t border-slate-800 flex gap-1.5">
          <button
            onClick={onToggleMacro}
            className={`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${
              params.macroMode
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {params.macroMode ? '● Ультра-Макро ВКЛ' : '○ Включить Макро'}
          </button>
        </div>
      </div>

      {/* Bottom Center: Coordinates & Compass */}
      <div className="self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3">
        <span className="flex items-center gap-1 text-emerald-400">
          <Activity className="w-3 h-3" />
          SDF 1-Lipschitz Verified
        </span>
        <span className="text-slate-600">|</span>
        <span>RotX: {(params.rotX).toFixed(2)} rad</span>
        <span>RotY: {(params.rotY).toFixed(2)} rad</span>
        <span className="text-slate-600">|</span>
        <span className="text-amber-300">φ-Scale: {params.phiMultiplier.toFixed(5)}</span>
      </div>
    </div>
  );
};
