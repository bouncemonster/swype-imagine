# Architecture Diagrams

## System Overview

```mermaid
graph TB
    subgraph "User Interface"
        A[App.tsx] --> B[ControlsPanel]
        A --> C[FractalCanvas]
        A --> D[HUD Components]
    end
    
    subgraph "Rendering Engine"
        C --> E{Backend?}
        E -->|WebGPU| F[WebGPUEngine]
        E -->|WebGL2| G[WebGLEngine]
        F --> H[webgpuShaders.ts]
        G --> I[webglShaders.ts]
    end
    
    subgraph "Shader Modules"
        I --> J[juliaVariations]
        I --> K[hybridVariations]
        I --> L[flameVariations]
        I --> M[ifsVariations]
        I --> N[lsystemVariations]
    end
    
    subgraph "Data Layer"
        O[fractal-catalog] --> P[110+ fractals]
        Q[palettes] --> R[24 + 640 colors]
        S[types/fractal.ts] --> T[Type definitions]
    end
    
    subgraph "Intelligence"
        U[NeuroAestheticsEngine] --> V[User preferences]
        W[UserPreferenceEngine] --> X[Learning patterns]
    end
    
    A --> O
    A --> Q
    U --> A
    W --> A
```

## Component Hierarchy

```mermaid
graph TD
    App --> FractalCanvas
    App --> ControlsPanel
    App --> FractalScrollFeed
    App --> FractalInfoHUD
    App --> TelemetryHUD
    App --> DebugOverlay
    
    App --> Modals
    Modals --> ExplanationModal
    Modals --> UserProfileModal
    Modals --> ProjectManifestModal
    Modals --> FractalAtlasModal
    
    App --> CosmicLoader
    
    FractalCanvas --> useRenderEngine
    useRenderEngine --> WebGLEngine
    useRenderEngine --> WebGPUEngine
```

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant UI as ControlsPanel
    participant App
    participant Hook as useRenderEngine
    participant Engine as WebGLEngine/WebGPUEngine
    participant GPU as GPU Shaders
    
    User->>UI: Change parameter
    UI->>App: Update state
    App->>Hook: Pass params
    Hook->>Engine: Update uniforms
    Engine->>GPU: Render frame
    GPU-->>Engine: Frame buffer
    Engine-->>Hook: Render complete
    Hook-->>App: Frame ready
    App-->>UI: Display
```

## State Management

```mermaid
graph LR
    A[FractalParams] -->|useState| B[App State]
    B -->|props| C[ControlsPanel]
    B -->|props| D[FractalCanvas]
    B -->|props| E[HUD Components]
    
    C -->|onChange| F[updateParams]
    F -->|setState| B
    
    D -->|useRenderEngine| G[Engine Hook]
    G -->|uniforms| H[GPU]
```

## Shader Pipeline

```mermaid
graph TB
    subgraph "CPU Side"
        A[FractalParams] --> B[Uniform Packing]
        B --> C[48 floats]
    end
    
    subgraph "GPU Side"
        C --> D[Vertex Shader]
        D --> E[Full-screen triangle]
        E --> F[Fragment Shader]
        
        F --> G{Fractal Type?}
        G -->|Mandelbulb| H[mapMandelbulb]
        G -->|Julia| I[mapJuliaSet]
        G -->|Hybrid| J[mapHybrid]
        G -->|IFS| K[mapIFS]
        
        H --> L[Distance Estimation]
        I --> L
        J --> L
        K --> L
        
        L --> M[Ray Marching]
        M --> N[Lighting]
        N --> O{Render Mode?}
        O -->|solid| P[PBR + Shadows]
        O -->|xray| Q[Volume rendering]
        O -->|topo| R[Topography]
        
        P --> S[Post-processing]
        Q --> S
        R --> S
        
        S --> T[Tone mapping]
        T --> U[Output]
    end
```

## Engine Selection

```mermaid
graph TD
    A[useRenderEngine] --> B{WebGPU available?}
    B -->|Yes| C[WebGPUEngine]
    B -->|No| D[WebGLEngine]
    
    C --> E[WGSL Shaders]
    D --> F[GLSL Shaders]
    
    E --> G[Modern API]
    F --> H[Fallback]
    
    G --> I[Better performance]
    H --> J[Broader compatibility]
```

## Fractal Catalog System

```mermaid
graph TB
    A[canonicalFractals.ts] --> B[10 category files]
    B --> C[geometricCurves]
    B --> D[constructive]
    B --> E[algebraic]
    B --> F[multidimensional]
    B --> G[ifs]
    B --> H[stochastic]
    I --> J[physical]
    B --> K[expandedReal]
    B --> L[visuallyDistinct]
    B --> M[mandalas3D]
    
    C --> N[~15 fractals]
    D --> O[~10 fractals]
    E --> P[~10 fractals]
    F --> Q[~10 fractals]
    G --> R[~15 fractals]
    H --> S[~8 fractals]
    I --> T[~8 fractals]
    K --> U[~20 fractals]
    L --> V[~10 fractals]
    M --> W[~5 fractals]
    
    N --> X[Total: ~110 fractals]
    O --> X
    P --> X
    Q --> X
    R --> X
    S --> X
    T --> X
    U --> X
    V --> X
    W --> X
```

## Neuro-Aesthetics Engine

```mermaid
graph LR
    A[User Interactions] --> B[Interaction Logger]
    B --> C[Feature Extraction]
    C --> D[5D Archetype Space]
    
    D --> E[Archetype 1: Golden]
    D --> F[Archetype 2: Prime]
    D --> G[Archetype 3: TPMS]
    D --> H[Archetype 4: Hybrid]
    D --> I[Archetype 5: Classic]
    
    E --> J[Taste Profile]
    F --> J
    G --> J
    H --> J
    I --> J
    
    J --> K[Recommendation Engine]
    K --> L[Next Specimen]
    L --> M[Auto-Explore]
```

## Render Mode Pipeline

```mermaid
graph TB
    A[SDF Data] --> B{Render Mode}
    
    B -->|0: solid| C[PBR Lighting]
    C --> D[Shadows]
    D --> E[Ambient Occlusion]
    
    B -->|1: xray| F[Volume Rendering]
    F --> G[Density Integration]
    
    B -->|2: topo| H[Curvature Analysis]
    H --> I[Topographic Lines]
    
    B -->|3: hologram| J[Scan Lines]
    J --> K[Chromatic Aberration]
    
    B -->|4: iridescent| L[Thin-film Interference]
    L --> M[Multi-order Colors]
    
    B -->|5: quantum| N[Energy Field]
    N --> O[Wave Function]
    
    B -->|6: gemstone| P[Refraction]
    P --> Q[Caustics]
    Q --> R[Dispersion]
    
    E --> S[Post-processing]
    G --> S
    I --> S
    K --> S
    M --> S
    O --> S
    R --> S
    
    S --> T[Final Output]
```

## Uniform Buffer Layout

```
┌─────────────────────────────────────────┐
│  [0-1]   resolution: vec2<f32>          │
│  [2]     time: f32                      │
│  [3]     phi_val: f32                   │
├─────────────────────────────────────────┤
│  [4-5]   cam_rot: vec2<f32>             │
│  [6]     zoom: f32                      │
│  [7]     fractal_type: f32              │
├─────────────────────────────────────────┤
│  [8]     iterations: f32                │
│  [9]     glow_intensity: f32            │
│  [10]    morph_speed: f32               │
│  [11]    hybrid_type: f32               │
├─────────────────────────────────────────┤
│  [12]    hybrid_blend: f32              │
│  [13]    box_fold: f32                  │
│  [14]    sphere_fold: f32               │
│  [15]    interior_cut: f32              │
├─────────────────────────────────────────┤
│  [16-18] primary_color: vec3<f32>       │
│  [19]    tertiary_type: f32             │
├─────────────────────────────────────────┤
│  [20-22] secondary_color: vec3<f32>     │
│  [23]    tertiary_blend: f32            │
├─────────────────────────────────────────┤
│  [24-26] accent_color: vec3<f32>        │
│  [27]    compose_op: f32                │
├─────────────────────────────────────────┤
│  [28]    smooth_k: f32                  │
│  [29]    warp_strength: f32             │
│  [30]    octave_layers: f32             │
│  [31]    cam_mode: f32                  │
├─────────────────────────────────────────┤
│  [32-34] cam_pos: vec3<f32>             │
│  [35]    slice_plane: f32               │
├─────────────────────────────────────────┤
│  [36]    headlamp_power: f32            │
│  [37]    volumetric_fog: f32            │
│  [38]    slice_axis: f32                │
│  [39]    render_style: f32              │
├─────────────────────────────────────────┤
│  [40-42] ambient_color: vec3<f32>       │
│  [43]    palette_seed: f32              │
├─────────────────────────────────────────┤
│  [44]    palette_rotation: f32          │
│  [45-47] pad5: vec3<f32>                │
└─────────────────────────────────────────┘
Total: 48 floats (192 bytes)
```

## File Dependencies

```mermaid
graph TD
    subgraph "Entry"
        A[index.html] --> B[main.tsx]
        B --> C[App.tsx]
    end
    
    subgraph "Components"
        C --> D[FractalCanvas]
        C --> E[ControlsPanel]
        C --> F[HUDs]
        C --> G[Modals]
    end
    
    subgraph "Engine"
        D --> H[useRenderEngine]
        H --> I[WebGLEngine]
        H --> J[WebGPUEngine]
    end
    
    subgraph "Shaders"
        I --> K[webglShaders]
        J --> L[webgpuShaders]
        K --> M[modules/*]
    end
    
    subgraph "Data"
        C --> N[fractal-catalog]
        C --> O[palettes]
        C --> P[types]
    end
    
    subgraph "Intelligence"
        C --> Q[NeuroAesthetics]
        C --> R[UserPreference]
    end
```
