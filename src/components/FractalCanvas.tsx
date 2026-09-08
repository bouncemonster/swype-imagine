import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FractalParams, TelemetryData } from '../types/fractal';
import { WebGPUEngine } from '../engine/WebGPUEngine';
import { WebGLEngine } from '../engine/WebGLEngine';
import { userPrefEngine } from '../engine/UserPreferenceEngine';

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
  forcedBackend = 'auto',
  onInteraction,
  onNextSpecimen,
  onPrevSpecimen,
  onEngineReady,
  scrollMode = 'feed',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Detect embedded/sandboxed browser environments where WebGPU may crash the GPU process
  const isEmbeddedBrowser = typeof window !== 'undefined' && (
    window !== window.top || // iframe
    /\bqoder\b/i.test(navigator.userAgent) ||
    /\belectron\b/i.test(navigator.userAgent)
  );
  // Detect mobile devices for performance tuning
  const isMobileDevice = typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && window.innerWidth < 1024)
  );

  // Track active engine type — ALWAYS default to WebGL2 in auto mode.
  // WebGPU requestAdapter can crash the GPU process at the driver level in embedded browsers
  // (Qoder preview, Electron, etc.) — no JS try/catch can prevent a native GPU driver crash.
  // WebGPU is only attempted when explicitly selected by the user.
  const [activeEngineType, setActiveEngineType] = useState<'webgpu' | 'webgl2'>(() => {
    if (forcedBackend === 'webgl2') return 'webgl2';
    if (forcedBackend === 'webgpu') {
      // In embedded browsers, even explicit WebGPU is blocked to prevent crashes
      if (isEmbeddedBrowser) return 'webgl2';
      return 'webgpu';
    }
    // auto mode: ALWAYS start with WebGL2 for maximum stability
    return 'webgl2';
  });

  const [isCompiling, setIsCompiling] = useState<boolean>(true);
  
  const webgpuEngineRef = useRef<WebGPUEngine | null>(null);
  const webglEngineRef = useRef<WebGLEngine | null>(null);
  const activeBackendLabelRef = useRef<string>('Initializing...');
  
  // Params Ref so animation loop never re-subscribes or drops frames
  const paramsRef = useRef<FractalParams>(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  // Callback refs to keep the main render loop stable across parent re-renders
  const onTelemetryUpdateRef = useRef(onTelemetryUpdate);
  onTelemetryUpdateRef.current = onTelemetryUpdate;
  const onScreenshotCapturedRef = useRef(onScreenshotCaptured);
  onScreenshotCapturedRef.current = onScreenshotCaptured;
  const onNextSpecimenRef = useRef(onNextSpecimen);
  onNextSpecimenRef.current = onNextSpecimen;
  const onPrevSpecimenRef = useRef(onPrevSpecimen);
  onPrevSpecimenRef.current = onPrevSpecimen;
  const onInteractionRef = useRef(onInteraction);
  onInteractionRef.current = onInteraction;
  const lastInteractionReportTimeRef = useRef<number>(0);

  // Pointer interaction state
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const touchDistanceRef = useRef<number | null>(null);

  // Inertia system — velocity tracking for momentum-based rotation
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(0);
  const inertiaDecay = 0.92; // Momentum decay per frame (0.92 = smooth deceleration)
  const inertiaThreshold = 0.0001; // Stop below this velocity

  // Performance telemetry refs
  const frameTimesRef = useRef<number[]>([]);
  const lastTelemetryDispatchRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const simTimeRef = useRef<number>(0);

  // Track if WebGPU failed to initialize to prevent oscillating loop
  const webgpuFailedRef = useRef(false);
  const keysPressedRef = useRef<Set<string>>(new Set());
  const contextLostRef = useRef(false);
  const isVisibleRef = useRef(true);
  const engineReadyRef = useRef(false);
  const screenshotRequestedRef = useRef(false);

  // Keep screenshot ref in sync with prop (render loop closure captures stale prop values)
  useEffect(() => {
    screenshotRequestedRef.current = screenshotRequested;
  }, [screenshotRequested]);

  // Sync forcedBackend changes directly without dummy device destruction
  useEffect(() => {
    if (forcedBackend === 'webgl2') {
      setActiveEngineType('webgl2');
    } else if (forcedBackend === 'webgpu') {
      // Block WebGPU in embedded browsers to prevent GPU process crash
      if (isEmbeddedBrowser) {
        console.warn('[FractalCanvas] WebGPU blocked in embedded browser — using WebGL2');
        webgpuFailedRef.current = true;
        setActiveEngineType('webgl2');
        return;
      }
      webgpuFailedRef.current = false; // allow retry on explicit user request
      setActiveEngineType('webgpu');
    } else if (forcedBackend === 'auto') {
      // Auto mode always prefers WebGL2 for stability
      setActiveEngineType('webgl2');
    }
  }, [forcedBackend]);

  // Handle Resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Cap DPR — adaptive for mobile/embedded devices
    const maxDpr = isEmbeddedBrowser ? 1.5 : isMobileDevice ? 1.5 : 2.0;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const clientW = container.clientWidth || window.innerWidth || 800;
    const clientH = container.clientHeight || window.innerHeight || 600;

    const width = Math.floor(clientW * dpr);
    const height = Math.floor(clientH * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = Math.max(width, 320);
      canvas.height = Math.max(height, 240);
    }
  }, []);

  // Initialize engine whenever activeEngineType or canvas changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();

    let isDestroyed = false;

    // CRITICAL: Force-hide loading overlay after 12s no matter what — prevents infinite hang
    const forceHideTimeoutId = setTimeout(() => {
      if (!isDestroyed) {
        console.warn('[FractalCanvas] Force-hiding loading overlay after 12s');
        setIsCompiling(false);
      }
    }, 12000);

    // Safety timeout: if engine setup takes >8s, log diagnostic
    const setupTimeoutId = setTimeout(() => {
      if (!engineReadyRef.current && !isDestroyed) {
        console.error('[FractalCanvas] Engine setup timed out after 8s — GPU unavailable');
        console.error('[FractalCanvas] activeEngineType=', activeEngineType,
          'webgpuFailed=', webgpuFailedRef.current,
          'isDestroyed=', isDestroyed);
      }
    }, 8000);

    async function setup() {
      if (!canvas) return;
      console.info('[FractalCanvas] Setup starting, activeEngineType=', activeEngineType);
      setIsCompiling(true);
      // CRITICAL: Reset engine ready flag so error overlay shows if this setup fails
      engineReadyRef.current = false;

      // Clean up previous
      if (webgpuEngineRef.current) {
        webgpuEngineRef.current.destroy();
        webgpuEngineRef.current = null;
      }
      if (webglEngineRef.current) {
        webglEngineRef.current.destroy();
        webglEngineRef.current = null;
      }

      if (activeEngineType === 'webgpu') {
        console.info('[FractalCanvas] Attempting WebGPU init...');
        const gpuEngine = new WebGPUEngine(canvas);
        const success = await gpuEngine.init();
        console.info('[FractalCanvas] WebGPU init result:', success);
        if (success && !isDestroyed) {
          webgpuEngineRef.current = gpuEngine;
          engineReadyRef.current = true;
          activeBackendLabelRef.current = 'WebGPU (WGSL)';
          setIsCompiling(false);
          onEngineReady?.();
          return;
        } else {
          console.warn('[FractalCanvas] WebGPU init failed, falling back to WebGL2');
          webgpuFailedRef.current = true;
          if (!isDestroyed) {
            setActiveEngineType('webgl2');
          } else {
            setIsCompiling(false);
          }
          return;
        }
      }

      // WebGL2
      console.info('[FractalCanvas] Attempting WebGL2 init...');
      const glEngine = new WebGLEngine(canvas);
      const success = glEngine.init();
      console.info('[FractalCanvas] WebGL2 init result:', success, 'isDestroyed:', isDestroyed);
      if (success && !isDestroyed) {
        webglEngineRef.current = glEngine;
        engineReadyRef.current = true;
        activeBackendLabelRef.current = 'WebGL2 (GLSL)';
        setIsCompiling(false);
        onEngineReady?.();
      } else {
        console.error('[FractalCanvas] WebGL2 init failed — no GPU engine available');
        setIsCompiling(false);
        // CRITICAL: Always call onEngineReady to dismiss CosmicLoader, even on failure.
        // Otherwise the loader (z-50) blocks the error overlay (z-10) forever.
        onEngineReady?.();
      }
    }

    setup().catch((err) => {
      console.error('[FractalCanvas] Engine setup crashed:', err);
      setIsCompiling(false);
      // CRITICAL: Always dismiss loader even on crash — otherwise stuck for 15s
      onEngineReady?.();
    });

    // Handle GPU context loss and restore gracefully
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('GPU context lost, pausing rendering...');
      contextLostRef.current = true;
    };
    const handleContextRestored = () => {
      console.log('GPU context restored, re-initializing engine...');
      contextLostRef.current = false;
      setup();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    const container = containerRef.current;
    let resizeObserver: ResizeObserver | null = null;
    if (container) {
      resizeObserver = new ResizeObserver(() => {
        if (!isDestroyed) handleResize();
      });
      resizeObserver.observe(container);
    }

    return () => {
      isDestroyed = true;
      clearTimeout(setupTimeoutId);
      clearTimeout(forceHideTimeoutId);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (resizeObserver) resizeObserver.disconnect();
      webgpuEngineRef.current?.destroy();
      webglEngineRef.current?.destroy();
    };
  }, [activeEngineType, handleResize]);

  // Main Dynamic High-FPS Render Loop with visibility-aware throttling
  useEffect(() => {
    let isRunning = true;
    let lastRenderTimestamp = performance.now();

    // Pause rendering when page/tab is hidden to prevent GPU overheating and crashes
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      if (isVisibleRef.current) {
        // Reset timestamp to avoid huge deltaMs spike after returning from hidden
        lastRenderTimestamp = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const loop = (timestamp: number) => {
      if (!isRunning) return;
      // Skip rendering when context is lost but keep RAF alive for restoration
      if (contextLostRef.current) {
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }
      // Skip rendering when page is not visible — saves GPU power and prevents crashes
      if (!isVisibleRef.current) {
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }
      // CRITICAL: If no GPU engine is ready, throttle to 1 FPS to prevent CPU spin-loop crash
      if (!engineReadyRef.current) {
        setTimeout(() => {
          if (isRunning) rafIdRef.current = requestAnimationFrame(loop);
        }, 1000);
        return;
      }

      const currentParams = paramsRef.current;
      const elapsedSinceLast = timestamp - lastRenderTimestamp;
      // Allow unrestricted max FPS if targetFps >= 240 or 0
      const targetFps = currentParams.targetFps || 60;
      const targetInterval = targetFps >= 240 ? 0 : (1000 / targetFps);

      if (targetInterval <= 0 || elapsedSinceLast >= targetInterval - 0.75) {
        const deltaMs = Math.min(elapsedSinceLast, 100);
        lastRenderTimestamp = timestamp;

        // Advance simulation time
        simTimeRef.current += (deltaMs / 1000.0);
        const simTime = simTimeRef.current;

        // Inside-Out Fly-Through keyboard movement integration
        if (currentParams.cameraMode === 'flyThrough') {
          const yaw = currentParams.rotX;
          const pitch = currentParams.rotY;
          const cy = Math.cos(yaw);
          const sy = Math.sin(yaw);
          const cp = Math.cos(pitch);
          const sp = Math.sin(pitch);
          const forward = [sy * cp, sp, -cy * cp];
          const right = [cy, 0, sy];
          const up = [0, 1, 0];

          let moveSpeed = 1.4 * (deltaMs / 1000.0);
          if (keysPressedRef.current.has('ShiftLeft') || keysPressedRef.current.has('ShiftRight')) {
            moveSpeed *= 2.8;
          }

          let dx = 0;
          let dy = 0;
          let dz = 0;

          if (keysPressedRef.current.has('KeyW') || keysPressedRef.current.has('ArrowUp')) {
            dx += forward[0] * moveSpeed;
            dy += forward[1] * moveSpeed;
            dz += forward[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyS') || keysPressedRef.current.has('ArrowDown')) {
            dx -= forward[0] * moveSpeed;
            dy -= forward[1] * moveSpeed;
            dz -= forward[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyA') || keysPressedRef.current.has('ArrowLeft')) {
            dx -= right[0] * moveSpeed;
            dz -= right[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyD') || keysPressedRef.current.has('ArrowRight')) {
            dx += right[0] * moveSpeed;
            dz += right[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyE') || keysPressedRef.current.has('Space')) {
            dy += up[1] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyQ') || keysPressedRef.current.has('KeyC')) {
            dy -= up[1] * moveSpeed;
          }

          if (dx !== 0 || dy !== 0 || dz !== 0) {
            paramsRef.current = {
              ...currentParams,
              camPosX: (currentParams.camPosX ?? 0) + dx,
              camPosY: (currentParams.camPosY ?? 0) + dy,
              camPosZ: (currentParams.camPosZ ?? 0) + dz,
            };
          }
        }

        // Calculate auto rotation smoothly without React re-renders!
        const autoRotX = currentParams.autoRotate ? (simTime * currentParams.autoRotateSpeed * 0.12) : 0;
        const autoRotY = currentParams.autoRotate ? (Math.sin(simTime * 0.18) * 0.06) : 0;

        // Apply inertia — momentum-based rotation decay when not dragging
        let inertiaRotX = 0;
        let inertiaRotY = 0;
        if (!isDraggingRef.current && (Math.abs(velocityRef.current.x) > inertiaThreshold || Math.abs(velocityRef.current.y) > inertiaThreshold)) {
          const currentZoom = currentParams.zoom;
          const dynamicSensitivity = 0.0045 * Math.max(0.12, Math.min(1.0, currentZoom / 2.8));
          const dt = deltaMs;
          inertiaRotX = velocityRef.current.x * dt * dynamicSensitivity * 0.5;
          inertiaRotY = velocityRef.current.y * dt * dynamicSensitivity * 0.5;
          velocityRef.current.x *= inertiaDecay;
          velocityRef.current.y *= inertiaDecay;
          if (Math.abs(velocityRef.current.x) < inertiaThreshold) velocityRef.current.x = 0;
          if (Math.abs(velocityRef.current.y) < inertiaThreshold) velocityRef.current.y = 0;
        }

        const effectiveParams: FractalParams = {
          ...currentParams,
          rotX: currentParams.rotX + autoRotX + inertiaRotX,
          rotY: Math.max(-1.52, Math.min(1.52, currentParams.rotY + autoRotY + inertiaRotY)),
        };

        // Render with active GPU engine
        const curCanvas = canvasRef.current;
        if (curCanvas && curCanvas.width > 0 && curCanvas.height > 0) {
          if (webgpuEngineRef.current) {
            webgpuEngineRef.current.render(simTime, effectiveParams);
          } else if (webglEngineRef.current) {
            webglEngineRef.current.render(simTime, effectiveParams);
          }
        }

        if (screenshotRequestedRef.current && curCanvas) {
          try {
            const dataUrl = curCanvas.toDataURL('image/png');
            onScreenshotCapturedRef.current?.(dataUrl);
          } catch (e) {
            console.error('Screenshot capture failed', e);
          }
        }

        // Rolling Frame History
        const frameHistory = frameTimesRef.current;
        frameHistory.push(deltaMs);
        if (frameHistory.length > 72) {
          frameHistory.shift();
        }

        // Throttled Telemetry Dispatch (every 250ms) to avoid CPU re-rendering thrash
        if (timestamp - lastTelemetryDispatchRef.current > 250) {
          lastTelemetryDispatchRef.current = timestamp;

          const avgFrameMs = frameHistory.reduce((a, b) => a + b, 0) / frameHistory.length;
          const currentFps = deltaMs > 0 ? Math.round(1000 / deltaMs) : 0;
          const avgFps = avgFrameMs > 0 ? Math.round(1000 / avgFrameMs) : 0;

          const sortedTimes = [...frameHistory].sort((a, b) => b - a);
          const lowIndex = Math.floor(sortedTimes.length * 0.05);
          const slowestTime = sortedTimes[lowIndex] || deltaMs;
          const onePercentLow = slowestTime > 0 ? Math.round(1000 / slowestTime) : 0;

          const adapter = webgpuEngineRef.current 
            ? webgpuEngineRef.current.adapterInfo 
            : (webglEngineRef.current ? webglEngineRef.current.rendererInfo : 'GPU Engine');

          const backendLabel = activeEngineType === 'webgpu' ? 'WebGPU (WGSL)' : 'WebGL2 (GLSL)';

          onTelemetryUpdateRef.current?.({
            fps: currentFps,
            avgFps,
            frameTimeMs: parseFloat(deltaMs.toFixed(2)),
            onePercentLow,
            backend: backendLabel as 'WebGPU (WGSL)' | 'WebGL2 (GLSL)',
            adapterName: adapter,
            resolution: [curCanvas?.width || 0, curCanvas?.height || 0],
            drsScale: 1.0,
            targetFps: params.targetFps,
            interiorDistance: 0.0,
          });
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [activeEngineType]);

  // Keyboard navigation for aesthetic feed and fly-through keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      // Prevent keyboard repeat flooding (e.g. holding Space down)
      if (e.repeat) return;

      keysPressedRef.current.add(e.code);

      if (paramsRef.current.cameraMode !== 'flyThrough') {
        if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          onNextSpecimenRef.current?.();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          onPrevSpecimenRef.current?.();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressedRef.current.delete(e.code);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Pointer Handlers for 3D Orbit with Inertia
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 }; // Reset velocity on new drag
    lastMoveTimeRef.current = performance.now();
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
      onInteractionRef.current?.(0, orbitMagnitude);
    }

    // Zoom-adaptive sensitivity
    const currentZoom = paramsRef.current.zoom;
    const dynamicSensitivity = 0.0045 * Math.max(0.12, Math.min(1.0, currentZoom / 2.8));
    
    // Track velocity for inertia (pixels per ms)
    velocityRef.current = {
      x: dx / dt,
      y: dy / dt,
    };

    onParamsChange(prev => ({
      ...prev,
      rotX: prev.rotX + dx * dynamicSensitivity,
      rotY: Math.max(-1.52, Math.min(1.52, prev.rotY + dy * dynamicSensitivity)),
    }));
    
    // Record rotation interaction for preference learning
    userPrefEngine.recordInteraction('rotate', Math.hypot(dx, dy) / dt);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    // Velocity is preserved in velocityRef for inertia to apply in render loop
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const lastWheelTimeRef = useRef<number>(0);

  // Wheel Zoom — ALWAYS zooms camera, feed navigation is via keyboard/buttons only
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    // Exponential proportional zoom prevents linear overshoot at close range
    const zoomFactor = Math.exp(Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY) * 0.0018, 0.28));
    
    // Register neuro-interaction zoom engagement (use ref to avoid stale closure)
    onInteractionRef.current?.(Math.abs(e.deltaY) * 0.02, 0);

    onParamsChange(prev => ({
      ...prev,
      zoom: Math.max(0.02, Math.min(64.0, prev.zoom * zoomFactor)),
    }));
    
    // Record zoom interaction for preference learning
    userPrefEngine.recordInteraction('zoom', Math.log(zoomFactor) * 10);
  };

  // Pinch Zoom for Touch with proportional scaling
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault(); // Prevent browser scroll/zoom gestures on mobile
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dist = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);

      if (touchDistanceRef.current !== null && touchDistanceRef.current > 5) {
        const ratio = touchDistanceRef.current / Math.max(dist, 1);
        const touchFactor = Math.pow(ratio, 0.95);
        onInteractionRef.current?.(Math.abs(touchDistanceRef.current - dist) * 0.04, 0);

        onParamsChange(prev => ({
          ...prev,
          zoom: Math.max(0.02, Math.min(64.0, prev.zoom * touchFactor)),
        }));
      }
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
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

      {/* Error overlay when no GPU engine could be initialized */}
      {!isCompiling && !engineReadyRef.current && (
        <div 
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-neutral-950/90 pointer-events-auto"
        >
          <div className="px-6 py-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-sm font-mono text-center max-w-md">
            <div className="text-base font-bold mb-2">GPU Unavailable</div>
            <div className="text-xs opacity-80">
              Neither WebGPU nor WebGL2 could initialize.<br/>
              This browser/environment may not support hardware-accelerated rendering.<br/>
              Try opening this page in Chrome/Edge with GPU acceleration enabled.
            </div>
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
        onWheel={handleWheel}
        onTouchStart={(e) => e.preventDefault()}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};
