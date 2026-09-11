# ExplanationModal.tsx

**207 lines | Scientific explanation and mathematical justification**

## Purpose
Educational modal explaining the mathematical foundations of the project: golden ratio, prime numbers, quasicrystals, SDF algebra, WebGPU rendering, and neuro-aesthetics.

## Props Interface (lines 4-7)
```typescript
interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

## Header (lines 23-45)
```
[BookOpen] Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика
           34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching
                                                              [X]
```

## 6 Sections

### Section 1: Golden Ratio φ, Fibonacci Numbers and Golden Angle (lines 49-68)
**Title**: "1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"

**Content**:
- φ = (1 + √5) / 2 ≈ 1.6180339887...
- Most irrational number (continued fraction: [1; 1, 1, 1, ...])
- Eliminates periodic resonances, creates perfect packing

**Formulas**:
- Fibonacci limit: `lim (F_n+1 / F_n) = φ`
- Golden angle: `θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°`

### Section 2: Prime Numbers: Ulam-Sachs Spirals and Riemann Quantum Chaos (lines 70-93)
**Title**: "2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"

**Content**:
1. **Sachs Spiral & Euler Polynomial**:
   - Polar parameterization: `r = √n, θ = 2π√n`
   - Euler prime generator: `P(n) = n² - n + 41`
   - Prime concentration along spiral rays

2. **Montgomery-Odlyzko Conjecture & Riemann Zeta Zeros**:
   - Zeta function: `ζ(1/2 + iγ_n) = 0`
   - Zero spacing distribution = GUE eigenvalues (quantum chaos)

### Section 3: Shechtman Quasicrystals, Hopf Fibration and Calabi-Yau (lines 95-121)
**Title**: "3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"

**3-column grid**:

1. **Quasicrystals (Nobel 2011)**:
   - Dan Shechtman discovered 5-fold "forbidden" symmetry
   - 3D slices of 6D periodic hypercubic lattice with φ scaling

2. **Hopf Fibration S³ → S²**:
   - Topological decomposition of 3-sphere into Clifford tori
   - Villarceau circles with axis ratio 1:φ

3. **Calabi-Yau Manifolds**:
   - Complex 3D compactifications in superstring theory
   - Fermat quintic reveals hidden 6D Planck-scale geometry

### Section 4: SDF Algebra and Millions of Hybrids (lines 123-154)
**Title**: "4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"

**4 SDF operations**:

1. **Smooth Union (smin)**:
   ```
   smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)
   ```
   C¹-smooth merging of heterogeneous topologies

2. **Domain Warp**:
   ```
   p' = p + WarpVector(p, Type₂) · strength
   ```
   One fractal's vector field deforms another's metric

3. **Wave Interference (Resonance)**:
   ```
   d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend
   ```
   Analog of standing quantum waves and Riemann zeros

4. **Fibonacci Octaves**:
   ```
   H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]
   ```
   Hierarchical micro-relief with 1/φ spectral decay

### Section 5: 144 Hz WebGPU WGSL Raymarching (lines 156-171)
**Title**: "5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"

**Content**:
- Frame budget: `1000 мс / 144 кадров = 6.944 миллисекунды на кадр`
- Direct WebGPU (WGSL) shader rendering
- Adaptive ray step eliminates CPU delays
- Logarithmic nonlinear interpolation for deep zoom

### Section 6: Neuro-Aesthetics: Why Brain Finds Fractals Harmonious (lines 173-190)
**Title**: "6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"

**Content** (Richard Taylor research):
1. **60% stress reduction**:
   - Visual cortex optimized for fractal dimension D ≈ 1.3–1.5
   - φ fractals stimulate coherent alpha waves (8–12 Hz)

2. **Learning preference feed**:
   - Engine tracks fixation time and exploration depth
   - Forms personal visual cortex taste vector
   - No intrusive questionnaires

## Footer (lines 193-202)
```
[Закрыть и продолжить исследование]
```
Amber button to close modal.

## Critical Notes
1. **Russian content**: All scientific text in Russian
2. **Educational**: Explains mathematical foundations
3. **6 sections**: Covers all major concepts
4. **Formulas**: Mathematical notation with code formatting
5. **Responsive**: 1-column mobile, 2-3 column desktop
6. **Backdrop click**: Closes modal
7. **Scrollable**: Max height 88vh
8. **Academic references**: Richard Taylor, Montgomery-Odlyzko, Nobel 2011

## Layout
```
┌─────────────────────────────────────────────────────────────┐
│ [BookOpen] Золотое Сечение...                               │
│           34 Архитектуры · 144 Hz                           │
│                                                    [X]      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол       │
│    φ = (1 + √5) / 2 ≈ 1.6180339887...                       │
│    lim (F_n+1 / F_n) = φ                                    │
│    θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°                    │
│                                                             │
│ 2. Простые Числа: Спирали Улама-Закса...                    │
│    [Sachs Spiral] [Riemann Zeros]                           │
│                                                             │
│ 3. Квазикристаллы Шехтмана...                               │
│    [Quasicrystals] [Hopf] [Calabi-Yau]                      │
│                                                             │
│ 4. Алгебра Наложений (SDF Algebra)...                       │
│    [smin] [warp] [resonance] [octaves]                      │
│                                                             │
│ 5. 144 Герц и WebGPU WGSL Raymarching                       │
│    1000 мс / 144 = 6.944 мс                                 │
│                                                             │
│ 6. Нейро-Эстетика...                                        │
│    [Taylor research: 60% stress reduction]                  │
│                                                             │
│                                    [Закрыть и продолжить]   │
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- `lucide-react` icons (7 icons: X, Sparkles, Activity, Compass, Cpu, Brain, Layers, BookOpen)
- No engine dependencies (pure UI)
