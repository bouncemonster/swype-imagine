import React, { useState, useEffect } from 'react';
import { renderDiagnostics, RenderStats } from '../engine/RenderDiagnostics';

interface DebugOverlayProps {
  visible: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const DebugOverlay: React.FC<DebugOverlayProps> = ({ 
  visible, 
  position = 'top-left' 
}) => {
  const [stats, setStats] = useState<RenderStats>(renderDiagnostics.getStats());
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setStats(renderDiagnostics.getStats());
    }, 100); // Update 10 times per second
    
    return () => clearInterval(interval);
  }, [visible]);
  
  if (!visible) return null;
  
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };
  
  const fpsColor = stats.fps > 50 ? 'text-green-400' : stats.fps > 30 ? 'text-yellow-400' : 'text-red-400';
  const healthColor = renderDiagnostics.isHealthy() ? 'text-green-400' : 'text-red-400';
  
  return (
    <div className={`fixed ${positionClasses[position]} z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-xs font-mono text-white min-w-[280px]`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-bold text-sm">🔍 Render Diagnostics</h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {expanded ? '▼' : '▶'}
        </button>
      </div>
      
      {/* Performance Metrics */}
      <div className="space-y-1 mb-2">
        <div className="flex justify-between">
          <span className="text-gray-400">FPS:</span>
          <span className={fpsColor}>{stats.fps.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Frame Time:</span>
          <span className="text-white">{stats.frameTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Ray Steps:</span>
          <span className="text-white">{stats.rayMarchSteps}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Hit Rate:</span>
          <span className="text-white">{(stats.hitRate * 100).toFixed(1)}%</span>
        </div>
      </div>
      
      {expanded && (
        <>
          {/* Math Validation */}
          <div className="border-t border-gray-700 pt-2 mt-2">
            <h4 className="text-yellow-400 font-semibold mb-1">Math Validation</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">SDF NaN:</span>
                <span className={stats.sdfNaN > 0 ? 'text-red-400' : 'text-green-400'}>
                  {stats.sdfNaN}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SDF ∞:</span>
                <span className={stats.sdfInfinity > 0 ? 'text-red-400' : 'text-green-400'}>
                  {stats.sdfInfinity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SDF Range:</span>
                <span className="text-white">
                  [{stats.sdfMin.toFixed(3)}, {stats.sdfMax.toFixed(3)}]
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Distance:</span>
                <span className="text-white">{stats.averageDistance.toFixed(4)}</span>
              </div>
            </div>
          </div>
          
          {/* GPU Health */}
          <div className="border-t border-gray-700 pt-2 mt-2">
            <h4 className="text-purple-400 font-semibold mb-1">GPU Health</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">Context:</span>
                <span className={stats.contextLost ? 'text-red-400' : 'text-green-400'}>
                  {stats.contextLost ? 'LOST' : 'OK'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shader Compile:</span>
                <span className="text-white">{stats.shaderCompileTime.toFixed(0)}ms</span>
              </div>
            </div>
          </div>
          
          {/* Health Status */}
          <div className="border-t border-gray-700 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">System Health:</span>
              <span className={`${healthColor} font-bold`}>
                {renderDiagnostics.isHealthy() ? '✓ HEALTHY' : '✗ ISSUES'}
              </span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="border-t border-gray-700 pt-2 mt-2 flex gap-2">
            <button
              onClick={() => renderDiagnostics.reset()}
              className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded text-xs transition-colors"
            >
              Reset Stats
            </button>
            <button
              onClick={() => {
                const report = renderDiagnostics.exportReport();
                console.log('Diagnostics Report:', report);
                alert('Diagnostics report exported to console');
              }}
              className="flex-1 bg-purple-600 hover:bg-purple-500 text-white px-2 py-1 rounded text-xs transition-colors"
            >
              Export
            </button>
          </div>
        </>
      )}
      
      {/* Quick Status Bar */}
      <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between text-xs">
        <span className="text-gray-500">Errors: {renderDiagnostics.getLogs('error').length}</span>
        <span className="text-gray-500">Warnings: {renderDiagnostics.getLogs('warn').length}</span>
      </div>
    </div>
  );
};
