import { useEffect, useRef, useState, useCallback, RefObject } from 'react';
import { FractalParams, TelemetryData } from '../types/fractal';
import { WebGPUEngine } from '../engine/WebGPUEngine';
import { WebGLEngine } from '../engine/WebGLEngine';

export interface UseRenderEngineOptions {
  forcedBackend: 'webgpu' | 'webgl2' | 'auto';
  isEmbeddedBrowser: boolean;
  isMobileDevice: boolean;
  paramsRef: RefObject<FractalParams>;
  onTelemetryUpdate: (telemetry: TelemetryData) => void;
  onEngineReady?: () => void;
  onNextSpecimen?: () => void;
  onPrevSpecimen?: () => void;
  onInteraction?: (zoomDelta: number, orbitDelta: number) => void;
  screenshotRequested: boolean;
  onScreenshotCaptured: (dataUrl: string) => void;
}

export interface UseRenderEngineResult {
  activeEngineType: 'webgpu' | 'webgl2';
  isCompiling: boolean;
  isEngineReady: boolean;
  backendLabel: string;
  adapterInfo: string;
  fps: number;
  avgFps: number;
  frameTimeMs: number;
  onePercentLow: number;
  resolution: [number, number];
  canvasRef: RefObject<HTMLCanvasElement | null>;
  keysPressedRef: RefObject<Set<string>>;
  isDraggingRef: RefObject<boolean>;
  velocityRef: RefObject<{ x: number; y: number }>;
  lastMousePosRef: RefObject<{ x: number; y: number }>;
  lastInteractionReportTimeRef: RefObject<number>;
  lastMoveTimeRef: RefObject<number>;
  params: FractalParams | null;
}

export function useRenderEngine(
  containerRef: RefObject<HTMLDivElement | null>,
  options: UseRenderEngineOptions,
): UseRenderEngineResult {
  const {
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
  } = options;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Engine type state — always default to WebGL2 in auto mode
  const [activeEngineType, setActiveEngineType] = useState<'webgpu' | 'webgl2'>(() => {
    if (forcedBackend === 'webgl2') return 'webgl2';
    if (forcedBackend === 'webgpu') {
      if (isEmbeddedBrowser) return 'webgl2';
      return 'webgpu';
    }
    return 'webgl2';
  });

  const [isCompiling, setIsCompiling] = useState<boolean>(true);
  const [isEngineReady, setIsEngineReady] = useState<boolean>(false);
  const [backendLabel, setBackendLabel] = useState<string>('Initializing...');
  const [adapterInfoState, setAdapterInfoState] = useState<string>('');
  const [fpsState, setFpsState] = useState(0);
  const [avgFpsState, setAvgFpsState] = useState(0);
  const [frameTimeState, setFrameTimeState] = useState(0);
  const [onePercentLowState, setOnePercentLowState] = useState(0);
  const [resolutionState, setResolutionState] = useState<[number, number]>([0, 0]);

  const webgpuEngineRef = useRef<WebGPUEngine | null>(null);
  const webglEngineRef = useRef<WebGLEngine | null>(null);
  const activeBackendLabelRef = useRef<string>('Initializing...');

  // Callback refs for stable render loop
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

  // Performance telemetry refs
  const frameTimesRef = useRef<number[]>([]);
  const lastTelemetryDispatchRef = useRef<number>(0);
  const lastHealthLogRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const simTimeRef = useRef<number>(0);

  // Engine lifecycle refs
  const webgpuFailedRef = useRef(false);
  const keysPressedRef = useRef<Set<string>>(new Set());
  const contextLostRef = useRef(false);
  const isVisibleRef = useRef(true);
  const engineReadyRef = useRef(false);
  const screenshotRequestedRef = useRef(false);

  // Pointer interaction refs (shared with component for event handlers)
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(0);
  const lastInteractionReportTimeRef = useRef<number>(0);
  const inertiaDecay = 0.92;
  const inertiaThreshold = 0.0001;

  // Keep screenshot ref in sync
  useEffect(() => {
    screenshotRequestedRef.current = screenshotRequested;
  }, [screenshotRequested]);

  // Sync forcedBackend changes
  useEffect(() => {
    if (forcedBackend === 'webgl2') {
      setActiveEngineType('webgl2');
    } else if (forcedBackend === 'webgpu') {
      if (isEmbeddedBrowser) {
        console.warn('[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2');
        webgpuFailedRef.current = true;
        setActiveEngineType('webgl2');
        return;
      }
      webgpuFailedRef.current = false;
      setActiveEngineType('webgpu');
    } else if (forcedBackend === 'auto') {
      setActiveEngineType('webgl2');
    }
  }, [forcedBackend]);

  // Resize handler — always syncs canvas buffer to container CSS size × DPR
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const maxDpr = isEmbeddedBrowser ? 1.5 : isMobileDevice ? 1.5 : 2.0;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const clientW = container.clientWidth || window.innerWidth || 800;
    const clientH = container.clientHeight || window.innerHeight || 600;

    const width = Math.max(Math.floor(clientW * dpr), 320);
    const height = Math.max(Math.floor(clientH * dpr), 240);

    if (canvas.width !== width || canvas.height !== height) {
      const oldW = canvas.width, oldH = canvas.height;
      canvas.width = width;
      canvas.height = height;
      console.info(`[Resize] Canvas buffer: ${oldW}x${oldH} → ${width}x${height} (container: ${clientW}x${clientH}, DPR: ${dpr.toFixed(2)})`);
    }
  }, [isEmbeddedBrowser, isMobileDevice]);

  // Engine initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    let isDestroyed = false;

    const forceHideTimeoutId = setTimeout(() => {
      if (!isDestroyed) {
        console.warn('[useRenderEngine] Force-hiding loading overlay after 12s');
        setIsCompiling(false);
      }
    }, 12000);

    const setupTimeoutId = setTimeout(() => {
      if (!engineReadyRef.current && !isDestroyed) {
        console.error('[useRenderEngine] Engine setup timed out after 8s — GPU unavailable');
      }
    }, 8000);

    async function setup() {
      if (!canvas) return;
      console.info('[useRenderEngine] Setup starting, activeEngineType=', activeEngineType);
      setIsCompiling(true);
      engineReadyRef.current = false;
      setIsEngineReady(false);

      if (webgpuEngineRef.current) {
        webgpuEngineRef.current.destroy();
        webgpuEngineRef.current = null;
      }
      if (webglEngineRef.current) {
        webglEngineRef.current.destroy();
        webglEngineRef.current = null;
      }

      if (activeEngineType === 'webgpu') {
        console.info('[useRenderEngine] Attempting WebGPU init...');
        const gpuEngine = new WebGPUEngine(canvas);
        const success = await gpuEngine.init();
        if (success && !isDestroyed) {
          webgpuEngineRef.current = gpuEngine;
          engineReadyRef.current = true;
          setIsEngineReady(true);
          activeBackendLabelRef.current = 'WebGPU (WGSL)';
          setBackendLabel('WebGPU (WGSL)');
          setAdapterInfoState(gpuEngine.adapterInfo);
          setIsCompiling(false);
          console.info(`[DIAG] Engine ready: WebGPU | ${gpuEngine.adapterInfo} | ${canvas.width}x${canvas.height} | fractal=${paramsRef.current.type} | palette=${paramsRef.current.paletteId} | renderStyle=${paramsRef.current.renderStyle} | paletteSeed=${paramsRef.current.paletteSeed ?? 0}`);
          onEngineReady?.();
          return;
        } else {
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
      console.info('[useRenderEngine] Attempting WebGL2 init...');
      const glEngine = new WebGLEngine(canvas);
      const success = glEngine.init();
      if (success && !isDestroyed) {
        webglEngineRef.current = glEngine;
        engineReadyRef.current = true;
        setIsEngineReady(true);
        activeBackendLabelRef.current = 'WebGL2 (GLSL)';
        setBackendLabel('WebGL2 (GLSL)');
        setAdapterInfoState(glEngine.rendererInfo);
        setIsCompiling(false);
        console.info(`[DIAG] Engine ready: WebGL2 | ${glEngine.rendererInfo} | ${canvas.width}x${canvas.height} | fractal=${paramsRef.current.type} | palette=${paramsRef.current.paletteId} | renderStyle=${paramsRef.current.renderStyle} | paletteSeed=${paramsRef.current.paletteSeed ?? 0}`);
        onEngineReady?.();
      } else {
        setIsCompiling(false);
        onEngineReady?.();
      }
    }

    setup().catch((err) => {
      console.error('[useRenderEngine] Engine setup crashed:', err);
      setIsCompiling(false);
      onEngineReady?.();
    });

    // Delayed resize re-check: ensures canvas buffer matches container after layout settles
    // This fixes horizontal split artifacts caused by initial size mismatch
    const delayedResizeId = setTimeout(() => {
      if (!isDestroyed) {
        handleResize();
        // Also force a second check after a frame to catch any late layout shifts
        requestAnimationFrame(() => {
          if (!isDestroyed) handleResize();
        });
      }
    }, 100);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLostRef.current = true;
    };
    const handleContextRestored = () => {
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
      clearTimeout(delayedResizeId);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (resizeObserver) resizeObserver.disconnect();
      webgpuEngineRef.current?.destroy();
      webglEngineRef.current?.destroy();
    };
  }, [activeEngineType, handleResize]);

  // Main render loop
  useEffect(() => {
    let isRunning = true;
    let lastRenderTimestamp = performance.now();

    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      if (isVisibleRef.current) {
        lastRenderTimestamp = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const loop = (timestamp: number) => {
      if (!isRunning) return;
      if (contextLostRef.current) {
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }
      if (!isVisibleRef.current) {
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }
      if (!engineReadyRef.current) {
        setTimeout(() => {
          if (isRunning) rafIdRef.current = requestAnimationFrame(loop);
        }, 1000);
        return;
      }

      const currentParams = paramsRef.current;
      const elapsedSinceLast = timestamp - lastRenderTimestamp;
      const targetFps = currentParams.targetFps || 60;
      const targetInterval = targetFps >= 240 ? 0 : (1000 / targetFps);

      if (targetInterval <= 0 || elapsedSinceLast >= targetInterval - 0.75) {
        const deltaMs = Math.min(elapsedSinceLast, 100);
        lastRenderTimestamp = timestamp;

        simTimeRef.current += (deltaMs / 1000.0);
        const simTime = simTimeRef.current;

        // Fly-through keyboard movement
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

          let dx = 0, dy = 0, dz = 0;
          if (keysPressedRef.current.has('KeyW') || keysPressedRef.current.has('ArrowUp')) {
            dx += forward[0] * moveSpeed; dy += forward[1] * moveSpeed; dz += forward[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyS') || keysPressedRef.current.has('ArrowDown')) {
            dx -= forward[0] * moveSpeed; dy -= forward[1] * moveSpeed; dz -= forward[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyA') || keysPressedRef.current.has('ArrowLeft')) {
            dx -= right[0] * moveSpeed; dz -= right[2] * moveSpeed;
          }
          if (keysPressedRef.current.has('KeyD') || keysPressedRef.current.has('ArrowRight')) {
            dx += right[0] * moveSpeed; dz += right[2] * moveSpeed;
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

        // Auto rotation
        const autoRotX = currentParams.autoRotate ? (simTime * currentParams.autoRotateSpeed * 0.12) : 0;
        const autoRotY = currentParams.autoRotate ? (Math.sin(simTime * 0.18) * 0.06) : 0;

        // Inertia
        let inertiaRotX = 0, inertiaRotY = 0;
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

        // Render
        const curCanvas = canvasRef.current;
        if (curCanvas && curCanvas.width > 0 && curCanvas.height > 0) {
          if (webgpuEngineRef.current) {
            webgpuEngineRef.current.render(simTime, effectiveParams);
          } else if (webglEngineRef.current) {
            webglEngineRef.current.render(simTime, effectiveParams);
          }
        }

        // Screenshot
        if (screenshotRequestedRef.current && curCanvas) {
          try {
            const dataUrl = curCanvas.toDataURL('image/png');
            onScreenshotCapturedRef.current?.(dataUrl);
          } catch (e) {
            console.error('Screenshot capture failed', e);
          }
        }

        // Telemetry
        const frameHistory = frameTimesRef.current;
        frameHistory.push(deltaMs);
        if (frameHistory.length > 72) frameHistory.shift();

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

          const label = activeEngineType === 'webgpu' ? 'WebGPU (WGSL)' : 'WebGL2 (GLSL)';

          const telemetry: TelemetryData = {
            fps: currentFps,
            avgFps,
            frameTimeMs: parseFloat(deltaMs.toFixed(2)),
            onePercentLow,
            backend: label as 'WebGPU (WGSL)' | 'WebGL2 (GLSL)',
            adapterName: adapter,
            resolution: [curCanvas?.width || 0, curCanvas?.height || 0],
            drsScale: 1.0,
            targetFps: currentParams.targetFps,
            interiorDistance: 0.0,
          };

          onTelemetryUpdateRef.current?.(telemetry);
          setFpsState(currentFps);
          setAvgFpsState(avgFps);
          setFrameTimeState(parseFloat(deltaMs.toFixed(2)));
          setOnePercentLowState(onePercentLow);
          setResolutionState([curCanvas?.width || 0, curCanvas?.height || 0]);

          // Periodic health diagnostic every 30s
          if (!lastHealthLogRef.current) lastHealthLogRef.current = timestamp;
          if (timestamp - lastHealthLogRef.current > 30000) {
            lastHealthLogRef.current = timestamp;
            const p = paramsRef.current;
            console.info(`[DIAG] Health: fps=${currentFps} avg=${avgFps} 1%=${onePercentLow} | fractal=${p.type} hybrid=${p.hybridType} | style=${p.renderStyle} cam=${p.cameraMode} | palette=${p.paletteId} seed=${p.paletteSeed ?? 0} rot=${p.paletteRotation} | audio=${p.enableAudio} tuning=${p.audioTuning} | res=${curCanvas?.width}x${curCanvas?.height}`);
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [activeEngineType]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
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

  return {
    activeEngineType,
    isCompiling,
    isEngineReady,
    backendLabel,
    adapterInfo: adapterInfoState,
    fps: fpsState,
    avgFps: avgFpsState,
    frameTimeMs: frameTimeState,
    onePercentLow: onePercentLowState,
    resolution: resolutionState,
    canvasRef,
    keysPressedRef,
    isDraggingRef,
    velocityRef,
    lastMousePosRef,
    lastInteractionReportTimeRef,
    lastMoveTimeRef,
    params: paramsRef.current,
  };
}
