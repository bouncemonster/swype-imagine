import React, { useRef, useCallback, useEffect } from 'react';
import { FractalParams, TelemetryData } from '../types/fractal';
import { userPrefEngine } from '../engine/UserPreferenceEngine';
import { useRenderEngine } from '../hooks/useRenderEngine';
import { userProblemLogger } from '../engine/UserProblemLogger';

interface FractalCanvasProps {
  params: FractalParams;
  onParamsChange: (updater: (prev: FractalParams) => FractalParams) => void;
  onTelemetryUpdate: (telemetry: TelemetryData) => void;
  screenshotRequested: boolean;
  onScreenshotCaptured: (dataUrl: string) => void;
  forcedBackend?: 'webgpu' | 'webgl2' | 'auto';
  onInteraction?: (zoomDelta: number, orbitDelta: number) => void;
  onNextSpecimen?: () => void;
  onPrevSpecimen?: () => void;
  onEngineReady?: () => void;
  scrollMode?: 'feed' | 'zoom';
}

export const FractalCanvas: React.FC<FractalCanvasProps> = ({
  params,
  onParamsChange,
  onTelemetryUpdate,
  screenshotRequested,
  onScreenshotCaptured,
  forcedBackend = 'auto' as const,
  onInteraction,
  onNextSpecimen,
  onPrevSpecimen,
  onEngineReady,
  scrollMode = 'feed',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect embedded/sandboxed browser environments where WebGPU may crash the GPU process
  const isEmbeddedBrowser = typeof window !== 'undefined' && (
    window !== window.top ||
    /\bqoder\b/i.test(navigator.userAgent) ||
    /\belectron\b/i.test(navigator.userAgent)
  );
  const isMobileDevice = typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && window.innerWidth < 1024)
  );

  // Params Ref so animation loop never re-subscribes or drops frames
  const paramsRef = useRef<FractalParams>(params);
  // Keep ref in sync with prop
  paramsRef.current = params;

  // Touch pinch zoom state (UI-only, not needed in render loop)
  const touchDistanceRef = useRef<number | null>(null);
  const lastWheelTimeRef = useRef<number>(0);

  // Use the render engine hook
  const engine = useRenderEngine(containerRef, {
    forcedBackend,
    isEmbeddedBrowser,
    isMobileDevice,
    paramsRef,
    onTelemetryUpdate,
    onEngineReady,
    onNextSpecimen,
    onPrevSpecimen,
    onInteraction,
    screenshotRequested,
    onScreenshotCaptured,
  });

  const { canvasRef, isDraggingRef, velocityRef, lastMousePosRef, lastInteractionReportTimeRef, lastMoveTimeRef, activeEngineType, isCompiling, stopRotation, toggleInertia, inertiaEnabledRef } = engine;

  // Native wheel/touch listeners with passive:false + capture:true
  // capture:true ensures our listeners fire BEFORE React's document-level passive listeners
  // This is the only reliable way to preventDefault() wheel/touch in React 19
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      userProblemLogger.log({
        level: 'error',
        category: 'render',
        message: 'FractalCanvas: canvas ref is null on mount'
      });
      return;
    }

    userProblemLogger.log({
      level: 'info',
      category: 'render',
      message: 'FractalCanvas: mounted',
      details: {
        width: canvas.width,
        height: canvas.height,
        activeEngineType
      }
    });

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      // Reduced sensitivity: 0.0012 instead of 0.0018 for smoother zoom
      const zoomFactor = Math.exp(Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY) * 0.0012, 0.18));
      onInteraction?.(Math.abs(e.deltaY) * 0.015, 0);
      onParamsChange(prev => ({
        ...prev,
        zoom: Math.max(0.05, Math.min(32.0, prev.zoom * zoomFactor)),
      }));
      userPrefEngine.recordInteraction('zoom', Math.log(zoomFactor) * 10);
    };
    canvas.addEventListener('wheel', wheelHandler, { passive: false, capture: true });

    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const t1 = e.touches[0], t2 = e.touches[1];
        touchDistanceRef.current = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      }
    };
    canvas.addEventListener('touchstart', touchStartHandler, { passive: false, capture: true });

    const touchMoveHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const t1 = e.touches[0], t2 = e.touches[1];
        const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        if (touchDistanceRef.current !== null && touchDistanceRef.current > 5) {
          const ratio = touchDistanceRef.current / Math.max(dist, 1);
          const touchFactor = Math.pow(ratio, 0.95);
          onInteraction?.(Math.abs(touchDistanceRef.current - dist) * 0.04, 0);
          onParamsChange(prev => ({
            ...prev,
            zoom: Math.max(0.02, Math.min(64.0, prev.zoom * touchFactor)),
          }));
        }
        touchDistanceRef.current = dist;
      }
    };
    canvas.addEventListener('touchmove', touchMoveHandler, { passive: false, capture: true });

    return () => {
      canvas.removeEventListener('wheel', wheelHandler, { capture: true });
      canvas.removeEventListener('touchstart', touchStartHandler, { capture: true });
      canvas.removeEventListener('touchmove', touchMoveHandler, { capture: true });
    };
  }, [canvasRef, onParamsChange, onInteraction]);

  // Pointer Handlers for 3D Orbit with Inertia
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    const now = performance.now();
    const dt = Math.max(1, now - lastMoveTimeRef.current);
    lastMoveTimeRef.current = now;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const orbitMagnitude = Math.hypot(dx, dy);
    if (now - lastInteractionReportTimeRef.current > 300) {
      lastInteractionReportTimeRef.current = now;
      onInteraction?.(0, orbitMagnitude);
    }

    const currentZoom = paramsRef.current.zoom;
    const dynamicSensitivity = 0.0015 * Math.max(0.1, Math.min(0.6, currentZoom / 3.0));

    // Check if moving opposite to current velocity (braking)
    const currentVelX = velocityRef.current.x;
    const currentVelY = velocityRef.current.y;
    const moveDirX = dx / dt;
    const moveDirY = dy / dt;
    
    // If moving opposite to current rotation direction, apply braking
    const isOppositeX = (currentVelX > 0.001 && moveDirX < -0.001) || (currentVelX < -0.001 && moveDirX > 0.001);
    const isOppositeY = (currentVelY > 0.001 && moveDirY < -0.001) || (currentVelY < -0.001 && moveDirY > 0.001);
    
    // If opposite movement detected, reduce velocity (braking effect)
    const brakingFactor = 0.3;
    if (isOppositeX) {
      velocityRef.current.x *= brakingFactor;
    }
    if (isOppositeY) {
      velocityRef.current.y *= brakingFactor;
    }
    
    // If velocity is very low after braking, stop completely
    if (Math.abs(velocityRef.current.x) < 0.001 && Math.abs(velocityRef.current.y) < 0.001) {
      velocityRef.current = { x: 0, y: 0 };
    }

    velocityRef.current = { x: dx / dt, y: dy / dt };

    // Limit maximum rotation per frame
    const maxRotationPerFrame = 0.08;
    const clampedDx = Math.max(-maxRotationPerFrame / dynamicSensitivity, Math.min(maxRotationPerFrame / dynamicSensitivity, dx));
    const clampedDy = Math.max(-maxRotationPerFrame / dynamicSensitivity, Math.min(maxRotationPerFrame / dynamicSensitivity, dy));

    onParamsChange(prev => ({
      ...prev,
      rotX: ((prev.rotX + clampedDx * dynamicSensitivity + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI,
      rotY: Math.max(-1.48, Math.min(1.48, prev.rotY + clampedDy * dynamicSensitivity)),
    }));

    userPrefEngine.recordInteraction('rotate', Math.hypot(dx, dy) / dt);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      id="fractal-canvas-container"
      className="absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing"
    >
      {/* Visual indicator when GPU pipeline is compiling shaders */}
      {isCompiling && (
        <div
          id="gpu-pipeline-loading-overlay"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Initializing GPU ({activeEngineType === 'webgpu' ? 'WebGPU WGSL' : 'WebGL2 GLSL'})...</span>
          </div>
        </div>
      )}

      {/* Keying canvas by activeEngineType guarantees a fresh HTML5 context on backend switch */}
      <canvas
        key={activeEngineType}
        ref={canvasRef}
        id="fractal-canvas"
        className="w-full h-full block touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};
