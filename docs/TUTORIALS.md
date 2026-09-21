# Tutorials

## Table of Contents
1. [How to Add a New Fractal Type](#how-to-add-a-new-fractal-type)
2. [How to Create a New Render Mode](#how-to-create-a-new-render-mode)
3. [How to Extend Shader Modules](#how-to-extend-shader-modules)
4. [How to Add a New UI Component](#how-to-add-a-new-ui-component)
5. [How to Deploy to Cloudflare](#how-to-deploy-to-cloudflare)
6. [How to Debug GPU Issues](#how-to-debug-gpu-issues)

---

## How to Add a New Fractal Type

### Step 1: Define the Type
Add to `src/types/fractal.ts`:
```typescript
export type FractalType = 
  | 'mandelbulb'
  | 'julia'
  | 'burningShip'
  | 'yourNewType';  // Add here
```

### Step 2: Create SDF Function
Add to `src/shaders/webglShaders.ts`:
```glsl
float mapYourNewType(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Your fractal formula here
    z = yourTransformation(z, phi);
    z += p;
    
    dr = updateDerivative(dr, r);
  }
  
  return 0.5 * log(r) * r / dr;
}
```

### Step 3: Add to Fractal Mapper
Update `src/engine/fractalMappers.ts` — the string→index mapping is a `switch` inside `getFractalIndex()` (there is no `FRACTAL_TYPE_MAP` object), so add a `case`:
```typescript
export function getFractalIndex(type?: string): number {
  switch (type) {
    case 'phyllotaxis': return 0;
    case 'mandelbulb': return 1;
    case 'quaternionJulia': return 2;
    // ...
    case 'yourNewType': return 431;  // Add here (next free index)
    default: return 0;               // unknown types fall back to phyllotaxis
  }
}
```

### Step 4: Add to Shader Switch
In `webglShaders.ts`, find the main map function:
```glsl
float map(vec3 p) {
  float d = 1e10;
  
  if (u.fractal_type < 0.5) {
    d = mapMandelbulb(p, u.time, u.phi_val, int(u.iterations));
  } else if (u.fractal_type < 1.5) {
    d = mapJulia(p, u.time, u.phi_val, int(u.iterations));
  } else if (u.fractal_type < 2.5) {
    d = mapBurningShip(p, u.time, u.phi_val, int(u.iterations));
  } else if (u.fractal_type < 3.5) {
    d = mapYourNewType(p, u.time, u.phi_val, int(u.iterations));
  }
  
  return d;
}
```

### Step 5: Add to Catalog (Optional)
Create `src/data/categories/yourCategory.ts`:
```typescript
import { createFractal } from '../fractalFactory';

export const YOUR_FRACTALS = [
  createFractal({
    id: 'your-fractal',
    name: 'Ваш фрактал',
    englishName: 'Your Fractal',
    category: 'your_category',
    formula: 'z = z² + c',
    dimension: 'D = 2.0',
    description: 'Описание вашего фрактала',
    phiPiRelation: 'φ',
    enginePreset: {
      type: 'yourNewType',
      iterations: 32,
      zoom: 2.5,
    },
  }),
];
```

### Step 6: Register Category
Update `src/data/canonicalFractals.ts`:
```typescript
import { YOUR_FRACTALS } from './categories/yourCategory';

export const CANONICAL_FRACTALS_CATALOG: CanonicalFractal[] = [
  ...GEOMETRIC_CURVES,
  ...CONSTRUCTIVE_FRACTALS,
  // ... other categories
  ...YOUR_FRACTALS,  // Add here
];
```

### Step 7: Test
```bash
npm run dev
```
Open browser, select your new fractal type from ControlsPanel.

---

## How to Create a New Render Mode

### Step 1: Define Render Style
Add to `src/types/fractal.ts`:
```typescript
export type RenderStyle = 
  | 'solid'
  | 'xray'
  | 'topo'
  | 'hologram'
  | 'iridescent'
  | 'quantum'
  | 'gemstone'
  | 'wireframe'   // 7
  | 'heatmap'     // 8
  | 'neon'        // 9
  | 'yourMode';   // 10 — Add here
```

### Step 2: Implement in Shader
Add to `src/shaders/webglShaders.ts`:
```glsl
vec3 renderYourMode(vec3 albedo, vec3 normal, vec3 pos, float depth) {
  // Your rendering logic here
  
  // Example: Custom lighting
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float diff = max(dot(normal, lightDir), 0.0);
  
  vec3 color = albedo * diff;
  
  // Add your effects
  color += yourEffect(pos, depth);
  
  return color;
}
```

### Step 3: Add to Render Switch
The real dispatcher is a bounded if/else chain in the shared shader **footer** (`webglShaders.ts` GLSL + `webgpuShaders.ts` WGSL mirror). Every style tests a `> X.5 && < Y.5` window so an out-of-range value falls through to the solid default — never leave the last branch open-ended. Append your window after the highest existing index (currently neon `> 8.5`):
```glsl
} else if (u_render_style > 8.5 && u_render_style < 9.5) {
  // 10. YourMode — carry the shared `relief` factor + a `baseCol` sliver
  // so the 3D form survives on any palette (see docs/fractal-math-to-render.md §6).
  col = yourStyleCol * relief + baseCol * 0.1;
}
```
Then extend `getRenderStyleIndex` (add `case 'yourMode': return 10;`), `App.RENDER_STYLES`, `ControlsPanel`, `FractalScrollFeed` (`RENDER_STYLES_CONFIG`), `NeuroAestheticsEngine` styles, the keyboard map, and the `fractal-autotest.ts` branch assertions for both shaders.

### Step 4: Add UI Control
Update `src/components/ControlsPanel.tsx`:
```typescript
const RENDER_MODES = [
  { id: 'solid', label: 'Solid', icon: <Cube /> },
  { id: 'xray', label: 'X-Ray', icon: <Eye /> },
  // ... other modes
  { id: 'yourMode', label: 'Your Mode', icon: <YourIcon /> },
];
```

### Step 5: Test
Select your new render mode from ControlsPanel → Camera tab.

---

## How to Extend Shader Modules

### Adding a New Variation

1. **Create module file**: `src/shaders/modules/yourVariations.ts`
```typescript
export const YOUR_VARIATIONS_GLSL = `
float mapYourVariant1(vec3 p, float t, float phi, int iters) {
  // Your implementation
  return distance;
}

float mapYourVariant2(vec3 p, float t, float phi, int iters) {
  // Another implementation
  return distance;
}
`;
```

2. **Export from index**: Update `src/shaders/modules/index.ts`
```typescript
export { YOUR_VARIATIONS_GLSL } from './yourVariations';
```

3. **Import in main shader**: Update `src/shaders/webglShaders.ts`
```typescript
import { YOUR_VARIATIONS_GLSL } from './modules/yourVariations';

const VERTEX_SHADER = `...`;
const FRAGMENT_SHADER = `
  ${YOUR_VARIATIONS_GLSL}
  
  float map(vec3 p) {
    // Use your variations
    if (u.fractal_type < 0.5) {
      return mapYourVariant1(p, u.time, u.phi_val, int(u.iterations));
    }
    // ...
  }
`;
```

---

## How to Add a New UI Component

### Step 1: Create Component
```bash
# In src/components/
touch YourComponent.tsx
```

```typescript
import React from 'react';
import { FractalParams } from '../types/fractal';

interface YourComponentProps {
  params: FractalParams;
  onUpdate: (updates: Partial<FractalParams>) => void;
}

export const YourComponent: React.FC<YourComponentProps> = ({ 
  params, 
  onUpdate 
}) => {
  return (
    <div className="your-styles">
      {/* Your UI */}
      <button onClick={() => onUpdate({ zoom: params.zoom * 2 })}>
        Zoom In
      </button>
    </div>
  );
};
```

### Step 2: Add to App
Update `src/App.tsx`:
```typescript
import { YourComponent } from './components/YourComponent';

function App() {
  return (
    <div>
      {/* Other components */}
      <YourComponent params={params} onUpdate={updateParams} />
    </div>
  );
}
```

### Step 3: Create Documentation
```bash
# In docs/
touch YourComponent.md
```

Follow the standard documentation format (see existing docs).

---

## How to Deploy to Cloudflare

### Prerequisites
- Node.js 18+
- npm or bun
- Cloudflare account

### Step 1: Build
```bash
npm run build
# or
bun run build
```

Output in `dist/` directory.

### Step 2: Test Locally
```bash
npm run preview
# or
bun run preview
```

Open http://localhost:4173

### Step 3: Deploy to Cloudflare Pages

#### Option A: Via Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist
```

#### Option B: Via Cloudflare Dashboard
1. Go to https://dash.cloudflare.com
2. Select "Workers & Pages"
3. Click "Create application"
4. Select "Pages"
5. Connect your Git repository
6. Configure build settings:
   - Build command: `npm run build`
   - Build output: `dist`
7. Click "Save and Deploy"

### Step 4: Verify
Visit your deployment URL:
```
https://your-project.pages.dev
```

### Step 5: Custom Domain (Optional)
1. Go to Pages project → Custom domains
2. Add your domain
3. Follow DNS configuration instructions

---

## How to Debug GPU Issues

### Problem: Black Screen

**Symptoms**: Canvas is black, no fractal visible

**Debug Steps**:
1. Open browser DevTools (F12)
2. Check Console for errors
3. Look for:
   ```
   WebGPU Error: ...
   WebGL Error: ...
   Shader compilation failed
   ```

**Solutions**:
- Update GPU drivers
- Try different browser (Chrome/Edge for WebGPU)
- Check if GPU supports WebGPU/WebGL2
- Look at DebugOverlay for diagnostics

### Problem: Low FPS

**Symptoms**: FPS < 30, laggy interaction

**Debug Steps**:
1. Open the Engineer/debug telemetry panel (`TelemetryHUD` renders in engineer mode)
2. Check frame time
3. Open DebugOverlay (press 'F3')
4. Look for:
   - High iteration count (> 64)
   - Large resolution
   - Complex render mode

**Solutions**:
- Reduce iterations: ControlsPanel → Morphology → Iterations
- Lower resolution: ControlsPanel → GPU → Resolution Scale
- Switch to simpler render mode: ControlsPanel → Camera → Render Style
- Enable DRS (Dynamic Resolution Scaling)
- Switch to WebGL if on WebGPU

### Problem: Shader Compilation Error

**Symptoms**: Console shows shader errors

**Debug Steps**:
1. Check browser console
2. Look for line numbers in error
3. Open `src/shaders/webglShaders.ts`
4. Find the line

**Common Issues**:
- Type mismatch: `vec3` vs `float`
- Missing semicolon
- Undefined variable
- Wrong function signature

**Solution**:
```glsl
// Wrong
vec3 color = 1.0;  // Error: can't assign float to vec3

// Correct
vec3 color = vec3(1.0);
```

### Problem: Memory Leak

**Symptoms**: Memory usage grows over time, eventual crash

**Debug Steps**:
1. Open DevTools → Memory tab
2. Take heap snapshot
3. Perform actions
4. Take another snapshot
5. Compare

**Common Causes**:
- Not disposing GPU resources
- Event listeners not removed
- Textures not released

**Solution**:
Check `useRenderEngine.ts` cleanup:
```typescript
useEffect(() => {
  return () => {
    // Cleanup
    engine.dispose();
  };
}, []);
```

### Problem: Mobile Crashes

**Symptoms**: App crashes on mobile devices

**Debug Steps**:
1. Connect mobile device via USB
2. Open Chrome DevTools → Remote devices
3. Inspect console logs

**Solutions**:
- Reduce max iterations (32 → 16)
- Lower resolution scale (1.0 → 0.5)
- Disable volumetric fog
- Use simpler render mode
- Reduce palette count

---

## Additional Resources

- [ARCHITECTURE_DIAGRAMS.md](ARCHITECTURE_DIAGRAMS.md) - Visual architecture
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common problems
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [FAQ.md](FAQ.md) - Frequently asked questions
