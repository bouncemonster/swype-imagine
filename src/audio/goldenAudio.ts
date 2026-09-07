// Sacred Geometry & Fractal Harmonic Acoustic Engine
// Tuned to 432 Hz Sacred Frequency & Mathematically Coupled to Fractal SDF Topologies
// Features: Zero-Dissonance Golden Tuning, Acoustic Cavity Resonance, Riemann Zero Overtones,
// Hybrid Cross-Blending, Spatial Binaural Entrainment, and Velvet Soft-Knee Limiting.

import { FractalParams, FractalType } from '../types/fractal';

export type AudioTuningMode = 'phi432' | 'fibonacci' | 'zenChimes';

// 5 Mathematical Fractal Families
export type FractalHarmonicFamily = 'sacred' | 'complex' | 'minimal' | 'primes' | 'attractors';

export function getFractalHarmonicFamily(type: FractalType): FractalHarmonicFamily {
  switch (type) {
    case 'phyllotaxis':
    case 'apollonian':
    case 'spiralTunnel':
    case 'icosahedral':
    case 'fibonacciSnowflake':
    case 'poincareSphere':
    case 'pythagorasTree3D':
    case 'dragonCurveIFS':
      return 'sacred';

    case 'mandelbulb':
    case 'quaternionJulia':
    case 'mandelbox':
    case 'quaternionMandelbrot':
    case 'burningShip3D':
    case 'newtonBasins':
    case 'menger':
    case 'jerusalemCube':
      return 'complex';

    case 'gyroid':
    case 'neoviusMinimal':
    case 'calabiYau':
    case 'cliffordKlein':
    case 'cliffordTorus4D':
    case 'antoineNecklace':
      return 'minimal';

    case 'primeSpiral':
    case 'riemannZeta':
    case 'gaussianPrimes':
    case 'eulerTotientSpiral':
    case 'kleinianLimit':
      return 'primes';

    case 'lorenzAttractor':
    case 'hofstadterButterfly':
    case 'quasicrystal':
    case 'hopfFibration':
    case 'dlaCluster':
    case 'sierpinskiOcta':
    case 'hilbertCurve3D':
    default:
      return 'attractors';
  }
}

interface HarmonicVoice {
  osc: OscillatorNode;
  gain: GainNode;
  filter: BiquadFilterNode;
  panner?: StereoPannerNode;
  baseFreqRatio: number;
  role: 'sub' | 'root' | 'fifth' | 'golden' | 'shimmer' | 'hybrid';
}

class GoldenAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private masterGain: GainNode | null = null;
  private globalFilter: BiquadFilterNode | null = null;
  private cavityResonator: BiquadFilterNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private voices: HarmonicVoice[] = [];
  private currentVolume: number = 0.65;
  private tuningMode: AudioTuningMode = 'phi432';
  private currentFractalType: FractalType = 'phyllotaxis';
  private currentHybridType: FractalType = 'mandelbulb';
  private currentHybridBlend: number = 0.35;

  private stopTimeout: ReturnType<typeof setTimeout> | null = null;

  public start(initialVolume = 0.65, tuning: AudioTuningMode = 'phi432') {
    if (this.isRunning) {
      this.setVolume(initialVolume);
      this.setTuning(tuning);
      return;
    }
    // Cancel any pending deferred cleanup from a previous stop()
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.currentVolume = initialVolume;
      this.tuningMode = tuning;

      // 1. Velvet Soft-Knee Analog Dynamics Compressor to eliminate all harsh peaks
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(14, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(4.0, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.04, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.28, this.ctx.currentTime);

      // 2. Master output bus with smooth exponential curve
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(
        Math.max(0.01, initialVolume * 0.16),
        this.ctx.currentTime + 2.0
      );

      // 3. Acoustic Cavity Resonator (peaking filter modulated by zoom into fractal caves)
      this.cavityResonator = this.ctx.createBiquadFilter();
      this.cavityResonator.type = 'peaking';
      this.cavityResonator.frequency.setValueAtTime(108, this.ctx.currentTime);
      this.cavityResonator.Q.setValueAtTime(1.8, this.ctx.currentTime);
      this.cavityResonator.gain.setValueAtTime(2.0, this.ctx.currentTime);

      // 4. Warm Master Low-pass filter to remove digital harshness (>1100 Hz rolled off)
      this.globalFilter = this.ctx.createBiquadFilter();
      this.globalFilter.type = 'lowpass';
      this.globalFilter.frequency.setValueAtTime(750, this.ctx.currentTime);
      this.globalFilter.Q.setValueAtTime(0.85, this.ctx.currentTime);

      // Connect master chain
      this.globalFilter.connect(this.cavityResonator);
      this.cavityResonator.connect(this.compressor);
      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.rebuildVoicesForGeometry(this.currentFractalType, this.currentHybridType);
      this.isRunning = true;
    } catch (e) {
      console.warn('AudioContext initialization deferred or unavailable', e);
    }
  }

  // Calculate mathematical frequency intervals directly derived from the fractal family
  private getChordFrequenciesForFamily(
    family: FractalHarmonicFamily,
    tuning: AudioTuningMode
  ): { ratio: number; wave: OscillatorType; vol: number; pan: number; role: HarmonicVoice['role'] }[] {
    const phi = 1.61803398875;

    if (family === 'sacred') {
      // Golden Pentatonic Spiral (Phyllotaxis, Icosahedron, Fibonacci)
      // Pure crystalline golden intervals
      return [
        { ratio: 0.5, wave: 'sine', vol: 0.38, pan: 0.0, role: 'sub' },                   // 54.0 Hz (Warm velvet sub-root)
        { ratio: 1.0, wave: 'sine', vol: 0.32, pan: -0.15, role: 'root' },                // 108.0 Hz (432 / 4 fundamental)
        { ratio: phi, wave: 'sine', vol: 0.22, pan: 0.35, role: 'golden' },               // 174.7 Hz (Golden ratio resonant interval)
        { ratio: 1.5, wave: 'sine', vol: 0.18, pan: -0.35, role: 'fifth' },               // 162.0 Hz (Pure 5th)
        { ratio: phi * phi * 0.5, wave: 'triangle', vol: 0.08, pan: 0.2, role: 'shimmer' },// 130.9 Hz (Fibonacci golden major)
      ];
    }

    if (family === 'complex') {
      // Algebraic Mandelbrot & Quaternion Power Spectrum
      // Deep fifth-based power drone reflecting multi-scale self-similarity
      return [
        { ratio: 0.5, wave: 'sine', vol: 0.42, pan: 0.0, role: 'sub' },                   // 54.0 Hz (Deep ground)
        { ratio: 1.0, wave: 'sine', vol: 0.34, pan: -0.2, role: 'root' },                 // 108.0 Hz
        { ratio: 1.5, wave: 'sine', vol: 0.26, pan: 0.2, role: 'fifth' },                 // 162.0 Hz (Pure Pythagorean fifth)
        { ratio: 2.0, wave: 'triangle', vol: 0.12, pan: -0.4, role: 'shimmer' },          // 216.0 Hz (Octave)
        { ratio: 3.0 * 0.5, wave: 'sine', vol: 0.14, pan: 0.4, role: 'golden' },          // 162.0 Hz harmonic
      ];
    }

    if (family === 'minimal') {
      // TPMS Minimal Surfaces (Gyroid, Neovius, Calabi-Yau)
      // Floating Tibetan Singing-Bowl resonance based on transcendental proportions
      return [
        { ratio: 0.75, wave: 'sine', vol: 0.36, pan: 0.0, role: 'sub' },                  // 81.0 Hz (Sub-fourth)
        { ratio: 1.0, wave: 'sine', vol: 0.30, pan: -0.25, role: 'root' },                // 108.0 Hz
        { ratio: 1.25, wave: 'sine', vol: 0.20, pan: 0.25, role: 'fifth' },               // 135.0 Hz (Just Major Third)
        { ratio: Math.sqrt(2), wave: 'sine', vol: 0.14, pan: -0.4, role: 'golden' },      // 152.7 Hz (Zero-mean curvature mode)
        { ratio: phi * 1.2, wave: 'triangle', vol: 0.06, pan: 0.35, role: 'shimmer' },    // 209.7 Hz (Glass overtone)
      ];
    }

    if (family === 'primes') {
      // Number Theoretic & Riemann Zeta Resonator
      // Tuned to the exact non-trivial zeros of the Riemann Zeta Function γ_n scaled acoustically!
      // First 3 zeros on critical line: γ₁ ≈ 14.1347, γ₂ ≈ 21.0220, γ₃ ≈ 25.0108
      const zeta1 = 1.0 + 14.1347 / 100.0; // 1.1413
      const zeta2 = 1.0 + 21.0220 / 100.0; // 1.2102
      const zeta3 = 1.0 + 25.0108 / 100.0; // 1.2501

      return [
        { ratio: 0.5, wave: 'sine', vol: 0.36, pan: 0.0, role: 'sub' },
        { ratio: 1.0, wave: 'sine', vol: 0.32, pan: -0.2, role: 'root' },
        { ratio: zeta1, wave: 'sine', vol: 0.18, pan: 0.3, role: 'golden' },              // Riemann zero 1
        { ratio: zeta2, wave: 'sine', vol: 0.14, pan: -0.3, role: 'fifth' },              // Riemann zero 2
        { ratio: zeta3, wave: 'triangle', vol: 0.08, pan: 0.4, role: 'shimmer' },         // Riemann zero 3
      ];
    }

    // Default: 'attractors' & Chaos Dynamics (Lorenz, Hopf, Hofstadter)
    // Undulating microtonal intervals driven by 137.5° golden angle phases
    return [
      { ratio: 0.5, wave: 'sine', vol: 0.38, pan: 0.0, role: 'sub' },
      { ratio: 1.0, wave: 'sine', vol: 0.30, pan: -0.3, role: 'root' },
      { ratio: 1.382, wave: 'sine', vol: 0.20, pan: 0.3, role: 'golden' },               // 2 - 1/phi
      { ratio: 1.618, wave: 'sine', vol: 0.16, pan: -0.2, role: 'fifth' },
      { ratio: 1.618 * 1.5 * 0.5, wave: 'triangle', vol: 0.07, pan: 0.4, role: 'shimmer' },
    ];
  }

  // Smoothly reconstruct or re-tune voices based on current geometry
  private rebuildVoicesForGeometry(typeA: FractalType, typeB?: FractalType) {
    if (!this.ctx || !this.globalFilter) return;

    const familyA = getFractalHarmonicFamily(typeA);
    const familyB = typeB ? getFractalHarmonicFamily(typeB) : familyA;
    const base432 = 108.0; // 432 / 4 (Sacred Fundamental Root)

    // Soft cross-fade out existing voices over 400ms to eliminate clicks
    const now = this.ctx.currentTime;
    const oldVoices = [...this.voices];
    this.voices = [];

    oldVoices.forEach(v => {
      try {
        v.gain.gain.cancelScheduledValues(now);
        v.gain.gain.setValueAtTime(v.gain.gain.value, now);
        v.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        setTimeout(() => {
          try {
            v.osc.stop();
            v.osc.disconnect();
            v.filter.disconnect();
            v.panner?.disconnect();
            v.gain.disconnect();
          } catch {}
        }, 380);
      } catch {}
    });

    const specsA = this.getChordFrequenciesForFamily(familyA, this.tuningMode);
    
    // Create base voices from primary geometry
    const newVoices: HarmonicVoice[] = specsA.map((spec, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      // Gentle binaural beat (0.618 Hz golden brainwave frequency)
      const binaural = (idx % 2 === 0 ? 0.618 : -0.618) * 0.5;
      const targetFreq = base432 * spec.ratio + binaural;

      osc.type = spec.wave;
      osc.frequency.setValueAtTime(targetFreq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(spec.vol, now + 1.2);

      // Warm per-voice analog filter
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450.0 + idx * 80.0, now);
      filter.Q.setValueAtTime(1.2, now);

      osc.connect(filter);
      let lastNode: AudioNode = filter;

      let panner: StereoPannerNode | undefined;
      if (this.ctx!.createStereoPanner) {
        panner = this.ctx!.createStereoPanner();
        panner.pan.setValueAtTime(spec.pan, now);
        filter.connect(panner);
        lastNode = panner;
      }

      lastNode.connect(gain);
      gain.connect(this.globalFilter!);
      osc.start(now);

      return {
        osc,
        gain,
        filter,
        panner,
        baseFreqRatio: spec.ratio,
        role: spec.role,
      };
    });

    // If there is a secondary hybrid geometry with notable blend, add a dedicated hybrid voice!
    if (typeB && typeB !== typeA) {
      const specsB = this.getChordFrequenciesForFamily(familyB, this.tuningMode);
      const hybridSpec = specsB[2] || specsB[1]; // Pick harmonic interval from second shape

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(base432 * hybridSpec.ratio, now);

      const hybridVol = Math.max(0.0001, this.currentHybridBlend * 0.22);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(hybridVol, now + 1.5);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(base432 * hybridSpec.ratio * 1.5, now);
      filter.Q.setValueAtTime(2.0, now);

      osc.connect(filter);
      let lastNode: AudioNode = filter;

      let panner: StereoPannerNode | undefined;
      if (this.ctx.createStereoPanner) {
        panner = this.ctx.createStereoPanner();
        panner.pan.setValueAtTime(0.45, now);
        filter.connect(panner);
        lastNode = panner;
      }

      lastNode.connect(gain);
      gain.connect(this.globalFilter!);
      osc.start(now);

      newVoices.push({
        osc,
        gain,
        filter,
        panner,
        baseFreqRatio: hybridSpec.ratio,
        role: 'hybrid',
      });
    }

    this.voices = newVoices;
  }

  // Real-time synchronization mathematically coupled to the active fractal parameters
  public updateParams(params: FractalParams) {
    if (!this.isRunning || !this.ctx || !this.globalFilter || !this.cavityResonator) return;

    const now = this.ctx.currentTime;
    const phi = params.phiMultiplier || 1.618034;
    const zoom = Math.max(0.08, Math.min(16.0, params.zoom || 3.0));
    const speed = Math.max(0.1, Math.min(2.0, params.morphSpeed || 0.45));
    const hybridBlend = Math.max(0.0, Math.min(1.0, params.hybridBlend || 0.0));

    // 1. Rebuild / adapt chord if fractal type changed
    if (params.type !== this.currentFractalType || (params.hybridType && params.hybridType !== this.currentHybridType)) {
      this.currentFractalType = params.type;
      this.currentHybridType = params.hybridType || params.type;
      this.currentHybridBlend = hybridBlend;
      this.rebuildVoicesForGeometry(this.currentFractalType, this.currentHybridType);
      return;
    }

    // 2. Zoom Depth & Interior Cavity Acoustic Modulation:
    // Diving deep inside cavities (zoom < 1.5) filters high frequencies and boosts sub-harmonic reverberation.
    // Flying out (zoom > 4.0) opens soft crystal shimmering overtones.
    const baseFilterCutoff = Math.max(260, Math.min(980, 380 + (4.0 - Math.min(zoom, 4.0)) * 80 + speed * 120));
    this.globalFilter.frequency.setTargetAtTime(baseFilterCutoff, now, 0.15);

    // Modulate cavity resonator frequency based on interior proximity
    const cavityFreq = Math.max(54, Math.min(240, 108.0 / Math.max(0.5, zoom * 0.6)));
    this.cavityResonator.frequency.setTargetAtTime(cavityFreq, now, 0.2);

    // 3. Mathematical Micro-tuning with Phi Multiplier:
    // When phi deviates from 1.618034, subtle microtonal beating is heard; as phi reaches 1.618034, it falls into pure consonance!
    const base432 = 108.0;
    const phiDetuneCents = (phi - 1.618034) * 80.0;

    // 4. Stereo Panning from Camera Rotation
    const panMod = Math.sin(params.rotX || 0) * 0.4;

    this.voices.forEach((voice, idx) => {
      // Dynamic frequency target
      const targetBase = base432 * voice.baseFreqRatio;
      const phiTuning = (voice.role === 'golden' || voice.role === 'shimmer') ? phiDetuneCents : (phiDetuneCents * 0.3);
      voice.osc.frequency.setTargetAtTime(targetBase + phiTuning, now, 0.15);

      // Stereo positioning
      if (voice.panner) {
        const defaultPan = (idx % 2 === 0 ? 0.25 : -0.25);
        const dynamicPan = Math.max(-0.85, Math.min(0.85, defaultPan + panMod));
        voice.panner.pan.setTargetAtTime(dynamicPan, now, 0.12);
      }

      // Hybrid voice level modulation
      if (voice.role === 'hybrid') {
        const targetGain = Math.max(0.0001, hybridBlend * 0.20);
        voice.gain.gain.setTargetAtTime(targetGain, now, 0.1);
      }
    });

    // 5. Master volume update
    if (params.audioVolume !== undefined && params.audioVolume !== this.currentVolume) {
      this.setVolume(params.audioVolume);
    }
  }

  // Gentle, soothing chime chord when a new specimen is bred or loaded
  public playSpecimenTransitionChord() {
    if (!this.isRunning || !this.ctx || !this.globalFilter) return;

    try {
      const now = this.ctx.currentTime;
      const baseFreq = 216.0; // 432 / 2
      const chordNotes = [
        baseFreq * 1.0,               // Root
        baseFreq * 1.25,              // Pure Major 3rd
        baseFreq * 1.5,               // Pure 5th
        baseFreq * (1.618034 * 1.25), // Golden Harmonic Shimmer
      ];

      chordNotes.forEach((freq, i) => {
        if (!this.ctx) return;
        const bellOsc = this.ctx.createOscillator();
        const bellGain = this.ctx.createGain();
        const bellFilter = this.ctx.createBiquadFilter();

        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq, now + i * 0.05);

        bellFilter.type = 'lowpass';
        bellFilter.frequency.setValueAtTime(950, now);

        bellGain.gain.setValueAtTime(0.0001, now + i * 0.05);
        bellGain.gain.exponentialRampToValueAtTime(0.05 / (i + 1), now + i * 0.05 + 0.08);
        bellGain.gain.exponentialRampToValueAtTime(0.00001, now + i * 0.05 + 2.8);

        bellOsc.onended = () => {
          try {
            bellOsc.disconnect();
            bellFilter.disconnect();
            bellGain.disconnect();
          } catch {}
        };

        bellOsc.connect(bellFilter);
        bellFilter.connect(bellGain);
        bellGain.connect(this.globalFilter!);

        bellOsc.start(now + i * 0.05);
        bellOsc.stop(now + i * 0.05 + 3.0);
      });
    } catch {}
  }

  public setVolume(volume: number) {
    this.currentVolume = Math.max(0, Math.min(1, volume));
    if (!this.masterGain || !this.ctx) return;
    const effGain = Math.max(0.0001, this.currentVolume * 0.16);
    this.masterGain.gain.setTargetAtTime(effGain, this.ctx.currentTime, 0.08);
  }

  public getVolume(): number {
    return this.currentVolume;
  }

  public setTuning(mode: AudioTuningMode) {
    if (this.tuningMode === mode) return;
    this.tuningMode = mode;
    if (this.isRunning) {
      this.rebuildVoicesForGeometry(this.currentFractalType, this.currentHybridType);
    }
  }

  public getTuning(): AudioTuningMode {
    return this.tuningMode;
  }

  public stop() {
    if (!this.isRunning || !this.ctx || !this.masterGain) {
      this.isRunning = false;
      return;
    }
    this.isRunning = false;
    try {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

      const oldVoices = [...this.voices];
      this.voices = [];

      this.stopTimeout = setTimeout(() => {
        this.stopTimeout = null;
        oldVoices.forEach(v => {
          try {
            v.osc.stop();
            v.osc.disconnect();
            v.filter.disconnect();
            v.panner?.disconnect();
            v.gain.disconnect();
          } catch {}
        });
        try {
          this.globalFilter?.disconnect();
          this.cavityResonator?.disconnect();
          this.compressor?.disconnect();
          this.masterGain?.disconnect();
          this.ctx?.close();
        } catch {}
        this.ctx = null;
        this.masterGain = null;
        this.globalFilter = null;
        this.cavityResonator = null;
        this.compressor = null;
      }, 350);
    } catch (e) {
      console.warn('Error stopping audio', e);
    }
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start(this.currentVolume, this.tuningMode);
      return true;
    }
  }

  public getActive(): boolean {
    return this.isRunning;
  }
}

export const goldenAudio = new GoldenAudioEngine();
