import React, { useState, useEffect } from 'react';
import { TelemetryData } from '../types/fractal';
import { Sparkles } from 'lucide-react';

interface TelemetryHUDProps {
  telemetry: TelemetryData;
  targetFps: number;
  phiMultiplier: number;
}

export const TelemetryHUD: React.FC<TelemetryHUDProps> = ({
  telemetry,
  targetFps,
  phiMultiplier,
}) => {
  const [history, setHistory] = useState<number[]>([]);
  const [minimized, setMinimized] = useState<boolean>(false);

  useEffect(() => {
    if (telemetry.frameTimeMs > 0) {
      setHistory(prev => {
        const next = [...prev, telemetry.frameTimeMs];
        return next.slice(-40);
      });
    }
  }, [telemetry.frameTimeMs]);

  const targetBudgetMs = targetFps > 0 ? 1000 / targetFps : 6.94; // 144Hz default reference is 6.94ms
  const is144HzTarget = targetFps === 144 || (targetFps === 0 && telemetry.fps >= 140);
  const isFrameBudgetMet = telemetry.frameTimeMs <= targetBudgetMs * 1.05;

  return (
    <div 
      id="telemetry-hud"
      className="safe-t safe-l absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain"
    >
      <div className="bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all">
        {/* Header with 144Hz pill */}
        <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                telemetry.fps >= 120 ? 'bg-emerald-400' : 'bg-amber-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                telemetry.fps >= 120 ? 'bg-emerald-500' : 'bg-amber-500'
              }`} />
            </span>
            <div className="flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide">
              <span>{telemetry.backend}</span>
            </div>
          </div>
          <button
            id="toggle-telemetry-btn"
            onClick={() => setMinimized(!minimized)}
            className="text-micro text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition"
          >
            {minimized ? 'Expand' : 'Compact'}
          </button>
        </div>

        {/* Primary Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-2.5">
          {/* FPS Block */}
          <div className="bg-neutral-900/90 rounded-lg p-2 border border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-x-1 text-micro text-neutral-400 mb-0.5">
              <span>RATE</span>
              <span className={`px-1 rounded text-micro-sm font-mono font-medium ${
                telemetry.fps >= 135 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                  : 'bg-neutral-800 text-neutral-400'
              }`}>
                {targetFps > 0 ? `${targetFps}Hz` : 'Uncapped'}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold font-mono tracking-tight text-white">
                {telemetry.fps}
              </span>
              <span className="text-micro text-neutral-400">FPS</span>
            </div>
            <div className="text-micro text-neutral-400 mt-0.5 flex justify-between">
              <span>1% Low:</span>
              <span className="font-mono text-neutral-300">{telemetry.onePercentLow} FPS</span>
            </div>
          </div>

          {/* Frame Time Block */}
          <div className="bg-neutral-900/90 rounded-lg p-2 border border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-x-1 text-micro text-neutral-400 mb-0.5">
              <span>FRAME TIME</span>
              <span className="font-mono text-micro-sm text-neutral-400">
                {targetFps >= 240 ? 'Max 250 FPS' : `${targetFps}Hz = ${(1000/targetFps).toFixed(2)}ms`}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className={`text-xl font-bold font-mono tracking-tight ${
                isFrameBudgetMet ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {telemetry.frameTimeMs}
              </span>
              <span className="text-micro text-neutral-400">ms</span>
            </div>
            <div className="text-micro text-neutral-400 mt-0.5 flex justify-between">
              <span>Avg:</span>
              <span className="font-mono text-neutral-300">
                {(1000 / (telemetry.avgFps || 1)).toFixed(1)} ms
              </span>
            </div>
          </div>
        </div>

        {!minimized && (
          <>
            {/* Live Frame Time Sparkline Graph */}
            <div className="mb-2.5">
              <div className="flex justify-between text-micro text-neutral-400 mb-1">
                <span>{targetFps} FPS Frame Pacing</span>
                <span className="font-mono text-micro-sm text-amber-400/90">
                  Target: {targetBudgetMs.toFixed(2)} ms
                </span>
              </div>
              <div className="h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden">
                {history.map((val, i) => {
                  const barHeight = Math.min(Math.max((val / 20.0) * 100, 8), 100);
                  const isUnderBudget = val <= targetBudgetMs * 1.1;
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-xs transition-all duration-75 ${
                        isUnderBudget ? 'bg-amber-400/80' : 'bg-red-400/80'
                      }`}
                      style={{ height: `${barHeight}%` }}
                      title={`${val} ms`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Sacred Mathematics & Hardware Specs */}
            <div className="bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-nano">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1 text-amber-300/90">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Золотое сечение (φ):
                </span>
                <span className="font-mono font-medium text-amber-200">
                  {phiMultiplier.toFixed(6)}
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Golden Angle (ψ):</span>
                <span className="font-mono text-neutral-300">137.507764° (2.3999 rad)</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60">
                <span className="truncate max-w-[140px]" title={telemetry.adapterName}>
                  {telemetry.adapterName}
                </span>
                <span className="font-mono text-micro text-neutral-400">
                  {telemetry.resolution[0]}×{telemetry.resolution[1]}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
