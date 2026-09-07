import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FractalCanvas } from './components/FractalCanvas';
import { TelemetryHUD } from './components/TelemetryHUD';
import { ControlsPanel } from './components/ControlsPanel';
import { NeuroFeedHUD } from './components/NeuroFeedHUD';
import { ExplanationModal } from './components/ExplanationModal';
import { UserProfileModal } from './components/UserProfileModal';
import { CosmicLoader } from './components/CosmicLoader';
import { ProjectManifestModal } from './components/ProjectManifestModal';
import { FractalAtlasModal } from './components/FractalAtlasModal';
import { FractalProbeHUD } from './components/FractalProbeHUD';
import { FractalScrollFeed } from './components/FractalScrollFeed';
import { FractalParams, TelemetryData, FractalSpecimen, FractalType } from './types/fractal';
import { NeuroAestheticsEngine } from './engine/NeuroAestheticsEngine';
import { goldenAudio } from './audio/goldenAudio';
import { COLOR_PALETTES } from './palettes';

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
  paletteId: 'gold-obsidian',
  iterations: 20,
  phiMultiplier: 1.61803398875,
  morphSpeed: 0.45,
  glowIntensity: 1.1,
  detailLevel: 1.0,
  zoom: 3.2,
  rotX: 0.4,
  rotY: 0.25,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  targetFps: 60, // Safe default — prevents GPU overheating and browser crashes
  enableAudio: false,
  audioVolume: 0.65,
  audioTuning: 'phi432',
  drsEnabled: true,
  paletteRotation: false,
};

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

  const [forcedBackend, setForcedBackend] = useState<'webgpu' | 'webgl2' | 'auto'>('auto');
  const [screenshotRequested, setScreenshotRequested] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showAtlasModal, setShowAtlasModal] = useState(false);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [showManifestModal, setShowManifestModal] = useState(false);
  const [isFirstManifestVisit, setIsFirstManifestVisit] = useState(false);
  const [scrollMode, setScrollMode] = useState<'feed' | 'zoom'>('feed');
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [likedSpecimens, setLikedSpecimens] = useState<FractalSpecimen[]>([]);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

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
    setCurrentSpecimen(specimen);
    setResonanceScore(specimen.affinityScore);

    // Suggest a varied render style for visual diversity
    const suggestedStyle = neuroEngine?.suggestRenderStyle() || 'solid';

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
      paletteId: specimen.palette.id,
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
      // Parse shared fractal URL
      const params = new URLSearchParams(hash);
      const type = params.get('type') as FractalType;
      const hybridType = params.get('hybrid') as FractalType;
      const tertiaryType = params.get('tertiary') as FractalType;
      const compositeOp = params.get('op');
      
      if (type) {
        const palette = COLOR_PALETTES.find(p => p.id === params.get('palette')) || COLOR_PALETTES[0];
        const sharedSpecimen: FractalSpecimen = {
          id: `shared-${Date.now().toString(36)}`,
          seed: Math.floor(Math.random() * 1000000),
          generation: 1,
          name: params.get('name') || `Фрактал ${type}`,
          type,
          hybridType: hybridType || type,
          tertiaryType: tertiaryType || 'riemannZeta',
          compositeOp: (compositeOp as any) || 'smoothUnion',
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
        // Clear hash after loading
        window.history.replaceState(null, '', window.location.pathname);
        return;
      }
    }
    
    const initial = neuroEngine.breedNextSpecimen();
    applySpecimen(initial);
  }, [neuroEngine, applySpecimen]);

  // Synchronize audio engine with param state
  useEffect(() => {
    if (params.enableAudio) {
      goldenAudio.start(params.audioVolume ?? 0.65, params.audioTuning ?? 'phi432');
    } else {
      goldenAudio.stop();
    }
    return () => {
      goldenAudio.stop();
    };
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
      palette: params.customPalette || COLOR_PALETTES.find(p => p.id === params.paletteId) || COLOR_PALETTES[0],
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

      {/* Clean, Minimalist Neuro-Aesthetic Feed HUD */}
      <NeuroFeedHUD
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
        onFinished={handleLoaderFinished}
      />
    </main>
  );
}
