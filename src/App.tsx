import React, { useState, useEffect, useCallback, useRef, Component as ReactComponent, ErrorInfo, ReactNode } from 'react';
import { FractalCanvas } from './components/FractalCanvas';
import { TelemetryHUD } from './components/TelemetryHUD';
import { ControlsPanel } from './components/ControlsPanel';
import { FractalInfoHUD } from './components/FractalInfoHUD';
import { ExplanationModal } from './components/ExplanationModal';
import { UserProfileModal } from './components/UserProfileModal';
import { CosmicLoader } from './components/CosmicLoader';
import { ProjectManifestModal } from './components/ProjectManifestModal';
import { FractalAtlasModal } from './components/FractalAtlasModal';
import { FractalProbeHUD } from './components/FractalProbeHUD';
import { FractalScrollFeed } from './components/FractalScrollFeed';
import { DebugOverlay } from './components/DebugOverlay';
import { FractalParams, TelemetryData, FractalSpecimen, FractalType, RenderStyle, CompositeOp, CameraMode, SliceAxis, AudioTuning } from './types/fractal';
import { NeuroAestheticsEngine, SOLID_EXPLORATION_TYPES, TUNED_GENOME } from './engine/NeuroAestheticsEngine';
import { goldenAudio } from './audio/goldenAudio';
import { COLOR_PALETTES } from './palettes';
import { PROCEDURAL_PALETTES } from './palettesProcedural';
import { logger } from './utils/logger';
import { FPS_TARGET_DESKTOP, FPS_TARGET_MOBILE, AUTO_ROTATE_SPEED, GOLDEN_RATIO } from './constants';

// Combine hand-crafted and procedural palettes
const ALL_COLOR_PALETTES = [...COLOR_PALETTES, ...PROCEDURAL_PALETTES];

// Constant arrays used by auto-explore — defined outside component to avoid per-render allocation
const ALL_FRACTAL_TYPES: FractalType[] = [
  'phyllotaxis', 'mandelbulb', 'quaternionJulia', 'apollonian', 'spiralTunnel',
  'mandelbox', 'icosahedral', 'menger', 'gyroid', 'primeSpiral',
  'quasicrystal', 'hopfFibration', 'calabiYau', 'riemannZeta', 'sierpinskiOcta',
  'cliffordKlein', 'poincareSphere', 'gaussianPrimes', 'neoviusMinimal', 'eulerTotientSpiral',
  'cliffordTorus4D', 'kleinianLimit', 'fibonacciSnowflake', 'quaternionMandelbrot', 'hilbertCurve3D',
  'dragonCurveIFS', 'pythagorasTree3D', 'burningShip3D', 'newtonBasins', 'jerusalemCube',
  'lorenzAttractor', 'hofstadterButterfly', 'antoineNecklace', 'dlaCluster', 'rosslerHyperchaos',
  'cliffordAttractor', 'abrikosovLattice', 'beltramiPseudosphere', 'spinFoamNetwork', 'ramanujanTau',
  'belousovWaves', 'henonAttractor', 'aizawaAttractor', 'thomasAttractor', 'halvorsenAttractor',
  'juliaSet3D', 'multibrot3', 'tetrix', 'gosperCurve', 'lSystemPlant',
  'schwarzP', 'schwarzD', 'apollonianGasket', 'barnsleyFern3D', 'kleinQuartic',
  'spherePacking', 'novaFractal', 'goldenKnot', 'sphericalHarmonics', 'fractalCross',
  'reactionDiffusion', 'sierpinskiCarpet', 'tricorn', 'chuaCircuit', 'standardMap',
  'ikedaMap', 'kochSnowflake3D', 'cantorDust', 'phoenixFractal', 'fatouSet',
  'e8Lattice', 'chladniFigures', 'fitzHugh', 'rosslerAttractor', 'duffingAttractor',
  'logisticBifurcation', 'fractalSpire', 'deJongAttractor', 'pickoverAttractor', 'vicsekFractal',
  'mandelbar', 'weierstrass3D', 'popcornFunction', 'bedheadAttractor', 'fourSpotAttractor',
  'svenssonAttractor',
  // 4D Polytopes & Higher-Dimensional Manifolds
  'tesseract', '120Cell', '600Cell', '24Cell', '5Cell',
  'kleinBottle', 'projectivePlane', 'mobiusStrip3D', 'torusKnot4D',
  // Fractal Flames
  'flameSinusoidal', 'flameSpherical', 'flameSwirl', 'flameHorseshoe',
  'flameButterfly', 'flameHeart', 'flameSpiral', 'flameHyperbolic',
  'flameDiamond', 'flameWaves', 'flamePopcorn', 'flameRings', 'flameFan',
  // Advanced IFS
  'ifs3DTree', 'ifs3DFern', 'ifs3DSierpinski', 'ifs3DCantor', 'ifs3DKoch',
];
const COMPOSITE_OPS: CompositeOp[] = ['smoothUnion', 'smoothMorph', 'smoothIntersection', 'smoothCarve', 'domainWarp', 'quantumResonance', 'fractalLattice', 'goldenSpiralFold'];
const RENDER_STYLES: RenderStyle[] = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone', 'wireframe', 'heatmap', 'neon'];
const CAMERA_MODES: CameraMode[] = ['orbit', 'flyThrough', 'goldenSpiral', 'kelvinInvert'];

// Mobile device detection (shared with FractalCanvas)
const IS_MOBILE = typeof window !== 'undefined' && (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
  (navigator.maxTouchPoints > 1 && window.innerWidth < 1024)
);

const INITIAL_PARAMS: FractalParams = {
  type: 'phyllotaxis',
  hybridType: 'mandelbulb',
  tertiaryType: 'riemannZeta',
  compositeOp: 'smoothUnion',
  cameraMode: 'orbit',
  camPosX: 0.0,
  camPosY: 0.0,
  camPosZ: -3.2,
  slicePlane: 0.0,
  sliceAxis: 'golden',
  renderStyle: 'solid',
  headlampPower: 0.0,
  volumetricFog: 0.4,
  macroMode: false,
  probeActive: false,
  hybridBlend: 0.35,
  tertiaryBlend: 0.2,
  smoothK: 0.35,
  warpStrength: 0.25,
  octaveLayers: 2,
  boxFold: 1.2,
  sphereFold: 0.65,
  interiorCut: 0.0,
  paletteId: 'lapis-lazuli',
  // Mobile: fewer iterations to prevent GPU overload
  iterations: IS_MOBILE ? 12 : 16,
  phiMultiplier: GOLDEN_RATIO,
  morphSpeed: 0.45,
  glowIntensity: 1.1,
  detailLevel: 1.0,
  zoom: 3.2,
  rotX: 0.4,
  rotY: 0.25,
  autoRotate: true,
  autoRotateSpeed: AUTO_ROTATE_SPEED,
  // Mobile: cap at 30 FPS to prevent overheating and browser crashes
  targetFps: IS_MOBILE ? FPS_TARGET_MOBILE : FPS_TARGET_DESKTOP,
  enableAudio: false,
  audioVolume: 0.65,
  audioTuning: 'phi432',
  drsEnabled: true,
  paletteRotation: false,
};

// Error Boundary: catches React tree crashes (e.g. shader/GPU failures) and shows fallback UI.
// Applied at the root in main.tsx (wrapping <App/>) so it also catches throws from App's own
// render body (e.g. engine/palette initialization), not just its subtree.
export class FractalErrorBoundary extends ReactComponent<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('[FractalErrorBoundary] App crashed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 p-8">
          <h1 className="text-2xl font-bold mb-4">GPU Render Error</h1>
          <p className="text-neutral-400 text-center max-w-md mb-6">
            The fractal engine encountered an error. This usually happens due to GPU driver issues or unsupported hardware.
          </p>
          <p className="text-neutral-500 text-sm mb-6 font-mono">{this.state.error?.message}</p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload(); }}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors"
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [neuroEngine] = useState(() => new NeuroAestheticsEngine());

  const [params, setParams] = useState<FractalParams>(INITIAL_PARAMS);
  const [currentSpecimen, setCurrentSpecimen] = useState<FractalSpecimen | null>(null);
  const [resonanceScore, setResonanceScore] = useState<number>(65);
  const [isEngineerMode, setIsEngineerMode] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [interactionType, setInteractionType] = useState<'idle' | 'zooming' | 'orbiting'>('idle');
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastNavTimeRef = useRef<number>(0);
  // Timestamp of the last real user gesture (wheel/drag/pinch) — auto-explore must
  // never yank the scene away while someone is actively manipulating the fractal.
  const lastActivityAtRef = useRef<number>(Date.now());

  const [forcedBackend, setForcedBackend] = useState<'webgpu' | 'webgl2' | 'auto'>('auto');
  const [screenshotRequested, setScreenshotRequested] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showAtlasModal, setShowAtlasModal] = useState(false);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showManifestModal, setShowManifestModal] = useState(false);
  const [isFirstManifestVisit, setIsFirstManifestVisit] = useState(false);
  // Wheel-over-canvas defaults to ZOOM (the historical behaviour). The «Лента/Зум»
  // toggle in the feed still lets a user switch the wheel to specimen navigation.
  const [scrollMode, setScrollMode] = useState<'feed' | 'zoom'>('zoom');
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [likedSpecimens, setLikedSpecimens] = useState<FractalSpecimen[]>([]);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [autoExplore, setAutoExplore] = useState(true);
  const [showDebugOverlay, setShowDebugOverlay] = useState(false);

  // Debug overlay toggle with F3 key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F3') {
        e.preventDefault();
        setShowDebugOverlay(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup interaction timeout on unmount to prevent state updates on unmounted component
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  // AUTO-EXPLORE: Golden ratio based cycling through ALL fractal types
  // Prevents getting stuck on the same models — explores the full fractal space
  const exploreIndexRef = useRef(0);
  const PHI_INV = 0.61803398875; // Golden ratio inverse for maximum spread

  // Golden-ratio step that is guaranteed coprime with `len` so the march visits every
  // index exactly once per cycle (round(PHI_INV*len) alone can share a factor with len,
  // e.g. 42 and 68 → gcd 2 → only half the curated list would ever appear).
  const goldenStep = (len: number): number => {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    let s = Math.max(1, Math.round(PHI_INV * len));
    while (s < len && gcd(s, len) !== 1) s++;
    return s;
  };

  useEffect(() => {
    if (!autoExplore) return;
    // Mobile: longer interval (30s) to reduce GPU pressure from shader recompilation
    const intervalMs = IS_MOBILE ? 30000 : 18000;
    const interval = setInterval(() => {
      // Idle gate: any gesture in the last 10s skips this tick (re-checked next
      // interval) — fixes "the fractal changed although I didn't press Далее".
      if (performance.now() - lastActivityAtRef.current < 10000) return;
      // Golden ratio step through the CURATED solid showcase — ensures maximum coverage
      // of recognizable characteristic forms (dust/fog/blob types are curated out; see
      // NeuroAestheticsEngine.SOLID_EXPLORATION_TYPES).
      const solidLen = SOLID_EXPLORATION_TYPES.length;
      exploreIndexRef.current = (exploreIndexRef.current + goldenStep(solidLen)) % solidLen;
      const idx = exploreIndexRef.current;
      const newType = SOLID_EXPLORATION_TYPES[idx];
      // Hybrid/tertiary accents still draw from the full catalog for variety (they are
      // skipped on the pure `solid` ticks via hybridBlend=0, and only tint the primary).
      const hybridIdx = (idx + Math.round(PHI_INV * 37)) % ALL_FRACTAL_TYPES.length;
      const tertiaryIdx = (idx + Math.round(PHI_INV * 73)) % ALL_FRACTAL_TYPES.length;
      const newHybrid = ALL_FRACTAL_TYPES[hybridIdx];
      const newTertiary = ALL_FRACTAL_TYPES[tertiaryIdx];
      // Cycle composite ops and render styles with different golden ratio phases
      const opIdx = Math.floor(idx * PHI_INV) % COMPOSITE_OPS.length;
      // Legibility bias: the auto-explore feed is the default showcase, and the six
      // stylized modes recolor/reprocess the surface, which hides the fractal's actual
      // mathematical structure. Show the true PBR form ('solid') on ~half the ticks and
      // cycle the 6 stylized modes over the rest, so the math stays visible while
      // variety survives.
      const styleIdx = idx % 2 === 0
        ? 0
        : 1 + (Math.floor(idx * PHI_INV * 1.3) % (RENDER_STYLES.length - 1));
      const camIdx = Math.floor(idx * PHI_INV * 0.7) % CAMERA_MODES.length;
      // Vary zoom for visual diversity (close, medium, far)
      const zoomOptions = [1.8, 2.5, 3.5, 5.0, 7.0];
      const zoomIdx = Math.floor(idx * PHI_INV * 1.7) % zoomOptions.length;
      // Vary iterations for complexity diversity
      const iterOptions = [12, 18, 24, 30, 36];
      const iterIdx = Math.floor(idx * PHI_INV * 2.1) % iterOptions.length;
      // Per-type tuned genome (see NeuroAestheticsEngine.TUNED_GENOME): some DEs only
      // express their signature structure in a narrow parameter regime, so override the
      // random sampler for them on this path too (mirrors breedNextSpecimen).
      const tuned = TUNED_GENOME[newType];

      setParams(prev => ({
        ...prev,
        type: newType,
        hybridType: newHybrid,
        tertiaryType: newTertiary,
        compositeOp: COMPOSITE_OPS[opIdx],
        renderStyle: RENDER_STYLES[styleIdx],
        cameraMode: CAMERA_MODES[camIdx],
        // Characteristic-form legibility: the timer ALWAYS hybridised before (blend 0.2–0.68),
        // so no specimen ever showed a fractal's true signature shape — the user's "не вижу
        // характерных форм" complaint. On the same ticks that already render `solid` (even idx)
        // drop the blend to 0 so the canonical single-fractal form reads clearly; hybridise the
        // rest for variety. (hybridBlend 0 makes the shader skip the secondary layer entirely.)
        hybridBlend: styleIdx === 0 ? 0 : 0.2 + (idx % 5) * 0.10,
        tertiaryBlend: styleIdx === 0 ? 0 : 0.1 + (idx % 4) * 0.08,
        zoom: tuned?.zoom ?? zoomOptions[zoomIdx],
        iterations: tuned?.iterations ?? iterOptions[iterIdx],
        boxFold: tuned?.boxFold ?? prev.boxFold,
        sphereFold: tuned?.sphereFold ?? prev.sphereFold,
        phiMultiplier: tuned?.phi ?? prev.phiMultiplier,
        // The showcase default (0.45) advances the evolution clock so slowly that a full
        // structural cycle outlasts the 18s dwell → the figure looks static and its math
        // never appears to develop. Bias exploration to a faster morph clock; because the
        // shader's rigid breath/precession saturate at clamp(morph,0,1), this speeds ONLY
        // the genuine mathematical development, not the wobble. Varied for diversity.
        morphSpeed: [0.9, 1.15, 1.4][idx % 3],
        paletteRotation: true,
        autoRotate: true,
      }));
    }, intervalMs); // Change every 18s (desktop) or 30s (mobile)
    return () => clearInterval(interval);
  }, [autoExplore]);

  // Predicted next specimen types (1st and 2nd ahead) — drive the engine's parallel
  // background shader prefetch so upcoming figures are already compiled while the user
  // still views the current one.
  const [nextSpecimenTypes, setNextSpecimenTypes] = useState<FractalType[]>([]);
  useEffect(() => {
    if (!neuroEngine) return;
    if (autoExplore) {
      // The auto-explore march is deterministic — compute the next two ticks' types from
      // the same curated list + coprime step the timer uses.
      const step = goldenStep(SOLID_EXPLORATION_TYPES.length);
      const len = SOLID_EXPLORATION_TYPES.length;
      const nextIdx = (exploreIndexRef.current + step) % len;
      setNextSpecimenTypes([SOLID_EXPLORATION_TYPES[nextIdx], SOLID_EXPLORATION_TYPES[(nextIdx + step) % len]]);
    } else {
      // Feed navigation: exact for history replay and exploration mode, empty when
      // the next breeds are stochastic (no blind prefetch).
      setNextSpecimenTypes(neuroEngine.peekNextSpecimenTypes(2));
    }
  }, [neuroEngine, autoExplore, currentSpecimen, params.type]);

  const handleLoaderFinished = useCallback(() => {
    // Keep clean entrance directly into the 3D scroll feed without annoying popups
  }, []);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    fps: 0,
    avgFps: 0,
    frameTimeMs: 0,
    onePercentLow: 0,
    backend: 'Initializing...',
    adapterName: 'GPU Pipeline',
    resolution: [0, 0],
    drsScale: 1.0,
    targetFps: 60,
    interiorDistance: 0.0,
  });

  // Apply a specimen's genome to rendering parameters
  const applySpecimen = useCallback((specimen: FractalSpecimen) => {
    setAutoExplore(false); // User interaction disables auto-explore
    setCurrentSpecimen(specimen);
    setResonanceScore(specimen.affinityScore ?? 65);

    // Suggest a varied render style based on fractal archetype — EXCEPT during the pure
    // exploration showcase: there the whole point is to read each type's characteristic
    // geometry, and the archetype-preferred stylized modes (hologram/quantum/iridescent/
    // heatmap for the "complex"/"primes" archetypes — which is most fractals) recolor the
    // surface so heavily that distinct forms blur into "the same couple of figures". Force
    // the true PBR `solid` for the showcase pass; stylized variety resumes afterwards.
    const suggestedStyle = specimen.pureShowcase
      ? 'solid'
      : (neuroEngine?.suggestRenderStyle(specimen.type) || 'solid');

    setParams(prev => ({
      ...prev,
      type: specimen.type,
      hybridType: specimen.hybridType,
      tertiaryType: specimen.tertiaryType,
      compositeOp: specimen.compositeOp,
      hybridBlend: specimen.hybridBlend,
      tertiaryBlend: specimen.tertiaryBlend,
      smoothK: specimen.smoothK,
      warpStrength: specimen.warpStrength,
      octaveLayers: specimen.octaveLayers,
      boxFold: specimen.boxFold,
      sphereFold: specimen.sphereFold,
      interiorCut: specimen.interiorCut,
      paletteId: specimen.palette?.id ?? 'lapis-lazuli',
      customPalette: specimen.palette,
      iterations: specimen.iterations,
      phiMultiplier: specimen.phiMultiplier,
      morphSpeed: specimen.morphSpeed,
      glowIntensity: specimen.glowIntensity,
      zoom: specimen.zoom,
      renderStyle: suggestedStyle,
    }));

    // Harmonious chord chime on specimen transition
    if (goldenAudio.getActive()) {
      goldenAudio.playSpecimenTransitionChord();
    }
  }, []);

  // Initial breeding on mount — or load from shared URL hash
  useEffect(() => {
    if (!neuroEngine) return;
    
    const hash = window.location.hash.slice(1);
    if (hash) {
      try {
        // Parse shared fractal URL
        const params = new URLSearchParams(hash);
        const type = params.get('type') as FractalType;
        const hybridType = params.get('hybrid') as FractalType;
        const tertiaryType = params.get('tertiary') as FractalType;
        const compositeOp = params.get('op');
        
        if (type) {
          const palette = ALL_COLOR_PALETTES.find(p => p.id === params.get('palette')) || ALL_COLOR_PALETTES[0];
          const sharedSpecimen: FractalSpecimen = {
            id: `shared-${Date.now().toString(36)}`,
            seed: Math.floor(Math.random() * 1000000),
            generation: 1,
            name: params.get('name') || `Фрактал ${type}`,
            type,
            hybridType: hybridType || type,
            tertiaryType: tertiaryType || 'riemannZeta',
            compositeOp: (compositeOp as CompositeOp) || 'smoothUnion',
            hybridBlend: parseFloat(params.get('blend') || '0.35'),
            tertiaryBlend: parseFloat(params.get('tertiaryBlend') || '0.2'),
            smoothK: parseFloat(params.get('smoothK') || '0.35'),
            warpStrength: parseFloat(params.get('warp') || '0.25'),
            octaveLayers: parseInt(params.get('octaves') || '2'),
            boxFold: parseFloat(params.get('boxFold') || '1.2'),
            sphereFold: parseFloat(params.get('sphereFold') || '0.65'),
            interiorCut: parseFloat(params.get('interiorCut') || '0.0'),
            palette,
            iterations: parseInt(params.get('iterations') || '20'),
            phiMultiplier: parseFloat(params.get('phi') || '1.61803398875'),
            morphSpeed: parseFloat(params.get('morphSpeed') || '0.45'),
            glowIntensity: parseFloat(params.get('glow') || '1.1'),
            zoom: parseFloat(params.get('zoom') || '3.2'),
            affinityScore: 95,
            dwellTimeSeconds: 0,
            zoomInteractions: 0,
            orbitInteractions: 0,
          };
          applySpecimen(sharedSpecimen);
          // Apply ALL render params that were shared (not just specimen genome)
          setParams(prev => ({
            ...prev,
            paletteSeed: parseInt(params.get('paletteSeed') || '0'),
            paletteRotation: params.get('paletteRotation') === '1',
            renderStyle: (params.get('renderStyle') as RenderStyle) || prev.renderStyle,
            cameraMode: (params.get('cameraMode') as CameraMode) || prev.cameraMode,
            camPosX: parseFloat(params.get('camX') || '0'),
            camPosY: parseFloat(params.get('camY') || '0'),
            camPosZ: parseFloat(params.get('camZ') || '-3.2'),
            headlampPower: parseFloat(params.get('headlamp') || '0'),
            volumetricFog: parseFloat(params.get('fog') || '0.4'),
            slicePlane: parseFloat(params.get('slicePlane') || '0'),
            sliceAxis: (params.get('sliceAxis') as SliceAxis) || 'golden',
            enableAudio: params.get('audio') === '1',
            audioVolume: parseFloat(params.get('audioVol') || '0.65'),
            audioTuning: (params.get('audioTuning') as AudioTuning) || 'phi432',
            drsEnabled: params.get('drs') !== '0',
          }));
          // Deep-link the rendering backend (useful for demos and cross-engine verification)
          const engineParam = params.get('engine');
          if (engineParam === 'webgpu' || engineParam === 'webgl2') setForcedBackend(engineParam);
          // Clear hash after loading
          window.history.replaceState(null, '', window.location.pathname);
          return;
        }
      } catch (e) {
        logger.warn('[App] Failed to parse share link, using default specimen:', e);
        // Fall through to default breeding
      }
    }
    
    const initial = neuroEngine.breedNextSpecimen();
    applySpecimen(initial);
  }, [neuroEngine, applySpecimen]);

  // Synchronize audio engine with param state
  // Only restarts when enableAudio toggles — volume/tuning are updated in real-time by the next effect
  useEffect(() => {
    if (params.enableAudio) {
      goldenAudio.start(params.audioVolume ?? 0.65, params.audioTuning ?? 'phi432');
    } else {
      goldenAudio.stop();
    }
    return () => {
      goldenAudio.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.enableAudio]);

  // Update dynamic acoustic parameters in real-time (without restarting audio engine)
  useEffect(() => {
    if (params.enableAudio) {
      if (params.audioTuning) {
        goldenAudio.setTuning(params.audioTuning);
      }
      if (params.audioVolume !== undefined) {
        goldenAudio.setVolume(params.audioVolume);
      }
      goldenAudio.updateParams(params);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.enableAudio, params.audioTuning, params.audioVolume]);

  // Periodic dwell engagement tracking (learning from observation time)
  useEffect(() => {
    const interval = setInterval(() => {
      if (neuroEngine && currentSpecimen) {
        const updatedScore = neuroEngine.registerEngagement(
          1.0,
          0,
          0,
          currentSpecimen
        );
        setResonanceScore(prev => prev === updatedScore ? prev : updatedScore);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [neuroEngine, currentSpecimen]);

  // Handle active user interaction (deep zooming or orbiting)
  const handleInteraction = useCallback((zoomDelta: number, orbitDelta: number) => {
    lastActivityAtRef.current = performance.now(); // gates auto-explore + prefetch timing
    if (!neuroEngine || !currentSpecimen) return;

    const targetType = zoomDelta > 0 ? 'zooming' : (orbitDelta > 0 ? 'orbiting' : 'idle');
    setInteractionType(prev => (prev !== targetType ? targetType : prev));

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setInteractionType(prev => prev !== 'idle' ? 'idle' : prev);
    }, 1200);

    const updatedScore = neuroEngine.registerEngagement(
      0.1,
      zoomDelta,
      orbitDelta,
      currentSpecimen
    );
    setResonanceScore(prev => prev === updatedScore ? prev : updatedScore);
  }, [neuroEngine, currentSpecimen]);

  // Feed Navigation: Next Specimen (Evolves forward)
  const handleNextSpecimen = useCallback(() => {
    if (!neuroEngine) return;
    const now = performance.now();
    if (now - lastNavTimeRef.current < 180) return;
    lastNavTimeRef.current = now;
    const next = neuroEngine.stepHistory(1);
    applySpecimen(next);
  }, [neuroEngine, applySpecimen]);

  // Feed Navigation: Prev Specimen (Steps backward in history)
  const handlePrevSpecimen = useCallback(() => {
    if (!neuroEngine) return;
    const now = performance.now();
    if (now - lastNavTimeRef.current < 180) return;
    lastNavTimeRef.current = now;
    const prev = neuroEngine.stepHistory(-1);
    applySpecimen(prev);
  }, [neuroEngine, applySpecimen]);

  // Boost Affinity: User explicitly marks this visual aesthetic as a favorite (toggle like)
  const handleFavorite = useCallback(() => {
    if (!neuroEngine || !currentSpecimen) return;
    neuroEngine.boostAffinity(currentSpecimen);
    setResonanceScore(100);
    // Toggle like
    const id = currentSpecimen.id;
    setLikedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setLikedSpecimens(prev => prev.filter(s => s.id !== id));
      } else {
        next.add(id);
        setLikedSpecimens(prev => [...prev, currentSpecimen]);
      }
      return next;
    });
  }, [neuroEngine, currentSpecimen]);

  // Play liked specimen from playlist
  const handlePlayLiked = useCallback((specimen: FractalSpecimen) => {
    applySpecimen(specimen);
  }, [applySpecimen]);

  // Remove from likes
  const handleRemoveLike = useCallback((id: string) => {
    setLikedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setLikedSpecimens(prev => prev.filter(s => s.id !== id));
  }, []);

  // Direct topology selection from Engineer mode breeds specimen of that type into feed
  const handleSelectFractalType = useCallback((type: FractalType) => {
    if (!neuroEngine) return;
    const bred = neuroEngine.breedNextSpecimen(type);
    applySpecimen(bred);
  }, [neuroEngine, applySpecimen]);

  // Save custom engineered specimen directly into neuro-feed history
  const handleSaveToFeed = useCallback(() => {
    if (!neuroEngine) return;
    const newSpecimen: FractalSpecimen = {
      id: `engineered-${Date.now().toString(36)}`,
      seed: Math.floor(Math.random() * 1000000),
      generation: (currentSpecimen?.generation || 1) + 1,
      name: `Фенотип Инженера #${(currentSpecimen?.generation || 1) + 1}`,
      type: params.type,
      hybridType: params.hybridType || params.type,
      tertiaryType: params.tertiaryType || 'riemannZeta',
      compositeOp: params.compositeOp,
      hybridBlend: params.hybridBlend ?? 0.35,
      tertiaryBlend: params.tertiaryBlend ?? 0.2,
      smoothK: params.smoothK,
      warpStrength: params.warpStrength,
      octaveLayers: params.octaveLayers,
      boxFold: params.boxFold,
      sphereFold: params.sphereFold,
      interiorCut: params.interiorCut,
      palette: params.customPalette || ALL_COLOR_PALETTES.find(p => p.id === params.paletteId) || ALL_COLOR_PALETTES[0],
      iterations: params.iterations,
      phiMultiplier: params.phiMultiplier,
      morphSpeed: params.morphSpeed,
      glowIntensity: params.glowIntensity,
      zoom: params.zoom,
      affinityScore: 95,
      dwellTimeSeconds: 0,
      zoomInteractions: 0,
      orbitInteractions: 0,
    };
    setCurrentSpecimen(newSpecimen);
    neuroEngine.boostAffinity(newSpecimen);
    if (goldenAudio.getActive()) {
      goldenAudio.playSpecimenTransitionChord();
    }
  }, [neuroEngine, params, currentSpecimen]);

  // Toggle audio
  const handleToggleAudio = useCallback(() => {
    setParams(prev => ({ ...prev, enableAudio: !prev.enableAudio }));
  }, []);

  // Handle Screenshot download
  const handleScreenshotCaptured = useCallback((dataUrl: string) => {
    setScreenshotRequested(false);
    const link = document.createElement('a');
    link.download = `golden-ratio-fractal-${params.type}-${currentSpecimen?.generation || 1}.png`;
    link.href = dataUrl;
    link.click();
  }, [params.type, currentSpecimen?.generation]);

  // Fullscreen toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none">
      {/* Screen-reader landmark: provides an accessible page title (visually hidden).
          axe-core flagged the missing h1 in the a11y sweep (release v6.0.0 post-cut). */}
      <h1 className="sr-only">Golden Ratio WebGPU Fractal Engine — интерактивный 3D-фрактал-исследователь</h1>
      {/* Fractal Canvas with WebGPU (WGSL) and WebGL2 (GLSL) */}
      <FractalCanvas
        params={params}
        onParamsChange={setParams}
        onTelemetryUpdate={setTelemetry}
        screenshotRequested={screenshotRequested}
        onScreenshotCaptured={handleScreenshotCaptured}
        forcedBackend={forcedBackend}
        onInteraction={handleInteraction}
        onNextSpecimen={handleNextSpecimen}
        onPrevSpecimen={handlePrevSpecimen}
        onEngineReady={() => setIsEngineReady(true)}
        onLoadProgress={setLoadProgress}
        nextSpecimenTypes={nextSpecimenTypes}
        scrollMode={scrollMode}
      />

      {/* 3D Fractal & Hybrid Scroll Feed Stream Ribbon */}
      <FractalScrollFeed
        currentSpecimen={currentSpecimen}
        historyQueue={neuroEngine.getHistory()}
        currentIndex={neuroEngine.getCurrentIndex()}
        onSelectSpecimen={applySpecimen}
        onNext={handleNextSpecimen}
        onPrev={handlePrevSpecimen}
        renderStyle={params.renderStyle}
        onSelectRenderStyle={(style) => setParams(prev => ({ ...prev, renderStyle: style }))}
        scrollMode={scrollMode}
        onToggleScrollMode={() => setScrollMode(prev => prev === 'feed' ? 'zoom' : 'feed')}
        isOpen={isFeedOpen}
        onToggleOpen={() => setIsFeedOpen(prev => !prev)}
      />

      {/* Clean, Minimalist Fractal Info HUD */}
      <FractalInfoHUD
        specimen={currentSpecimen}
        resonanceScore={resonanceScore}
        isInteracting={interactionType !== 'idle'}
        interactionType={interactionType}
        onNext={handleNextSpecimen}
        onPrev={handlePrevSpecimen}
        onFavorite={handleFavorite}
        onOpenProfile={() => setShowProfileModal(true)}
        enableAudio={params.enableAudio}
        onToggleAudio={handleToggleAudio}
        onOpenResearchModal={() => setShowInfoModal(true)}
        onOpenAtlas={() => setShowAtlasModal(true)}
        isFeedOpen={isFeedOpen}
        onToggleFeed={() => setIsFeedOpen(prev => !prev)}
        isCurrentLiked={currentSpecimen ? likedIds.has(currentSpecimen.id) : false}
        params={params}
      />

      {/* Spatial Probe Reticle & Dimension Inspector */}
      <FractalProbeHUD
        params={params}
        onToggleProbe={() => setParams(prev => ({ ...prev, probeActive: !prev.probeActive }))}
        onToggleMacro={() => setParams(prev => ({ ...prev, macroMode: !prev.macroMode }))}
      />

      {/* User Profile & Recommendation Taste Space Modal */}
      <UserProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        tasteProfile={neuroEngine.getTasteProfile()}
        archetypeBreakdown={neuroEngine.getArchetypeBreakdown()}
        currentSpecimen={currentSpecimen}
        resonanceScore={resonanceScore}
        isEngineerMode={isEngineerMode}
        onToggleEngineerMode={() => setIsEngineerMode(prev => !prev)}
        audioTuning={params.audioTuning || 'phi432'}
        onSelectAudioTuning={mode => setParams(prev => ({ ...prev, audioTuning: mode }))}
        onOpenManifest={() => {
          setShowProfileModal(false);
          setShowManifestModal(true);
        }}
        likedSpecimens={likedSpecimens}
        onPlayLiked={handlePlayLiked}
        onRemoveLike={handleRemoveLike}
        isCurrentLiked={currentSpecimen ? likedIds.has(currentSpecimen.id) : false}
      />

      {/* Engineer Mode ("Инж") Overlay: In-depth Math, GPU Shaders & Telemetry */}
      {isEngineerMode && (
        <>
          <TelemetryHUD
            telemetry={telemetry}
            targetFps={params.targetFps}
            phiMultiplier={params.phiMultiplier}
          />
          <ControlsPanel
            params={params}
            onParamsChange={setParams}
            onSelectFractalType={handleSelectFractalType}
            onCaptureScreenshot={() => setScreenshotRequested(true)}
            onToggleFullscreen={handleToggleFullscreen}
            onToggleInfoModal={() => setShowInfoModal(true)}
            onOpenAtlasModal={() => setShowAtlasModal(true)}
            activeBackend={telemetry.backend}
            forcedBackend={forcedBackend}
            onSelectBackend={setForcedBackend}
            onClose={() => setIsEngineerMode(false)}
            tasteProfile={neuroEngine.getTasteProfile()}
            onSaveToFeed={handleSaveToFeed}
          />
        </>
      )}

      {/* Sacred Geometry & Neuro-Aesthetics Research Modal */}
      <ExplanationModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
      />

      {/* Encyclopedia Atlas of 33 Canonical Fractals & Scientific Manifest Modal */}
      <FractalAtlasModal
        isOpen={showAtlasModal}
        onClose={() => setShowAtlasModal(false)}
        onApplyPreset={(preset) => {
          setParams(prev => ({
            ...prev,
            ...preset,
          }));
        }}
      />

      {/* Official Project Manifest & Marketing Overview Modal */}
      <ProjectManifestModal
        isOpen={showManifestModal}
        onClose={() => setShowManifestModal(false)}
        isFirstVisit={isFirstManifestVisit}
        onOpenAtlas={() => setShowAtlasModal(true)}
      />

      {/* Sacred Geometry Cosmic Loader */}
      <CosmicLoader
        isReady={isEngineReady}
        progress={loadProgress}
        onFinished={handleLoaderFinished}
      />

      {/* Debug Overlay - Toggle with F3 */}
      {showDebugOverlay && <DebugOverlay visible={showDebugOverlay} />}
    </main>
  );
}
