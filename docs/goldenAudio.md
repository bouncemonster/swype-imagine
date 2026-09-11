# goldenAudio.ts

**551 lines | Sacred geometry harmonic acoustic engine**

## Purpose
Generates mathematically-coupled audio drones based on fractal geometry, tuned to 432 Hz sacred frequency.

## Key Concepts

### AudioTuningMode (line 9)
- **phi432** - Golden ratio tuning at 432 Hz
- **fibonacci** - Fibonacci sequence intervals
- **zenChimes** - Pentatonic zen intervals

### FractalHarmonicFamily (lines 11-61)
5 mathematical families map to unique chord voicings:
| Family | Fractals | Character |
|--------|----------|-----------|
| sacred | phyllotaxis, apollonian, fibonacci | Golden pentatonic spiral |
| complex | mandelbulb, julia, menger | Deep fifth-based power drone |
| minimal | gyroid, neovius, calabi-yau | Tibetan singing bowl resonance |
| primes | primeSpiral, riemannZeta | Riemann zeta zero overtones |
| attractors | lorenz, hopf, dla (default) | Microtonal golden angle phases |

### HarmonicVoice (lines 63-70)
```typescript
{
  osc: OscillatorNode;
  gain: GainNode;
  filter: BiquadFilterNode;
  panner?: StereoPannerNode;
  baseFreqRatio: number;
  role: 'sub' | 'root' | 'fifth' | 'golden' | 'shimmer' | 'hybrid';
}
```

## Audio Signal Chain
```
Oscillators (5-6 voices)
    ↓
Per-voice lowpass filter (450-850 Hz)
    ↓
Stereo panner (binaural positioning)
    ↓
Per-voice gain
    ↓
Master lowpass filter (750 Hz, Q=0.85)
    ↓
Cavity resonator (peaking filter, 54-240 Hz)
    ↓
Dynamics compressor (threshold -18dB, ratio 4:1)
    ↓
Master gain (volume * 0.16)
    ↓
Audio destination (speakers)
```

## Key Methods

### `start(volume, tuning)` (lines 88-151)
Initializes AudioContext and creates signal chain:
1. DynamicsCompressor - velvet soft-knee limiting
2. MasterGain - exponential ramp from 0.0001 to volume*0.16 over 2s
3. CavityResonator - peaking filter at 108 Hz, Q=1.8
4. GlobalFilter - lowpass at 750 Hz
5. Calls `rebuildVoicesForGeometry()`

### `rebuildVoicesForGeometry(typeA, typeB)` (lines 232-355)
Creates 5-6 oscillators based on fractal family:
- **5 voices** from primary fractal family
- **1 hybrid voice** if hybridType differs (blend-dependent volume)
- Cross-fades old voices over 350ms to eliminate clicks
- Binaural beat: ±0.618 Hz for brainwave entrainment

### `getChordFrequenciesForFamily(family, tuning, fractalType)` (lines 155-229)
Returns frequency ratios for each family:
- **Base**: 108 Hz (432/4 sacred fundamental)
- **Microtonal offset**: Golden angle (137.5°) per fractal index, ±25 cents
- **sacred**: 0.5, 1.0, φ, 1.5, φ²×0.5
- **complex**: 0.5, 1.0, 1.5, 2.0, 3.0×0.5
- **minimal**: 0.75, 1.0, 1.25, √2, φ×1.2
- **primes**: Riemann zeta zeros (1.1413, 1.2102, 1.2501)
- **attractors**: 0.5, 1.0, 1.382, 1.618, φ×1.5×0.5

### `updateParams(params)` (lines 358-418)
Real-time modulation coupled to fractal parameters:
- **Zoom**: Filter cutoff 260-980 Hz, cavity freq 54-240 Hz
- **Phi**: Microtonal detuning ±80 cents from 1.618034
- **Rotation**: Stereo panning ±0.4 from rotX
- **Hybrid blend**: Hybrid voice volume 0-0.22

### `playSpecimenTransitionChord()` (lines 421-466)
4-note bell chord on specimen change:
- 216 Hz (root), 270 Hz (major 3rd), 324 Hz (5th), 432 Hz (golden)
- Staggered attack (50ms per note)
- 2.8s exponential decay

## Critical Notes
1. **Base frequency**: 108 Hz = 432/4 (sacred tuning)
2. **Binaural beat**: 0.618 Hz (golden brainwave frequency)
3. **Cavity resonance**: Simulates acoustic caves when zooming deep
4. **Microtonal**: Each of 86 fractals gets unique ±25 cent offset
5. **Voice roles**: sub, root, fifth, golden, shimmer, hybrid
6. **Soft crossfade**: 350ms fade to eliminate clicks
7. **Exported singleton**: `goldenAudio` instance

## Dependencies
- `FractalParams, FractalType` - types
- `getFractalIndex` - fractalMappers for microtonal offset
- Web Audio API (AudioContext, OscillatorNode, etc.)
