/**
 * UserPreferenceEngine — Learns user interaction patterns and adapts rendering parameters.
 * 
 * Analyzes:
 * - Zoom preferences (how close user likes to get)
 * - Rotation speed preferences (fast spinner vs careful explorer)
 * - Fractal type preferences (which fractals user spends most time on)
 * - Render style preferences (which visual style user prefers)
 * - Color palette preferences
 * - Camera mode preferences
 * - Interaction patterns (pinch vs scroll, drag speed)
 * 
 * Output: Adapted default parameters that match user's style.
 */

interface InteractionSample {
  timestamp: number;
  type: 'zoom' | 'rotate' | 'fractal_change' | 'style_change' | 'palette_change' | 'camera_change';
  value: number;
  duration: number; // How long user interacted with this setting
}

interface UserPreferences {
  // Zoom behavior
  preferredZoomRange: { min: number; max: number; avg: number };
  zoomSensitivity: number; // How aggressively user zooms
  
  // Rotation behavior
  rotationSpeed: number; // Average rotation velocity
  rotationStyle: 'careful' | 'moderate' | 'fast'; // Based on drag speed
  
  // Content preferences (weighted by time spent)
  fractalWeights: Record<string, number>; // Which fractals user prefers
  renderStyleWeights: Record<string, number>;
  paletteWeights: Record<string, number>;
  cameraModeWeights: Record<string, number>;
  
  // Interaction patterns
  prefersTouch: boolean;
  prefersScroll: boolean;
  
  // Session data
  totalInteractionTime: number;
  sampleCount: number;
}

const STORAGE_KEY = 'golden_ratio_user_prefs';
const MAX_SAMPLES = 500; // Rolling window

export class UserPreferenceEngine {
  private prefs: UserPreferences;
  private samples: InteractionSample[] = [];
  private lastSampleTime = 0;
  private currentFractal = '';
  private currentStyle = '';
  private currentPalette = '';
  private currentCamera = '';
  private sessionStart = 0;

  constructor() {
    this.prefs = this.loadFromStorage();
    this.sessionStart = performance.now();
  }

  private getDefaultPrefs(): UserPreferences {
    return {
      preferredZoomRange: { min: 0.5, max: 8.0, avg: 2.0 },
      zoomSensitivity: 1.0,
      rotationSpeed: 0.005,
      rotationStyle: 'moderate',
      fractalWeights: {},
      renderStyleWeights: {},
      paletteWeights: {},
      cameraModeWeights: {},
      prefersTouch: false,
      prefersScroll: true,
      totalInteractionTime: 0,
      sampleCount: 0,
    };
  }

  private loadFromStorage(): UserPreferences {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...this.getDefaultPrefs(), ...JSON.parse(stored) };
      }
    } catch {}
    return this.getDefaultPrefs();
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs));
    } catch {}
  }

  /** Record a user interaction for analysis */
  recordInteraction(type: InteractionSample['type'], value: number): void {
    const now = performance.now();
    const duration = now - this.lastSampleTime;
    this.lastSampleTime = now;

    const sample: InteractionSample = { timestamp: now, type, value, duration };
    this.samples.push(sample);
    if (this.samples.length > MAX_SAMPLES) {
      this.samples.shift();
    }

    this.analyzeSample(sample);
    this.prefs.sampleCount++;
    
    // Save periodically (every 20 samples)
    if (this.prefs.sampleCount % 20 === 0) {
      this.saveToStorage();
    }
  }

  private analyzeSample(sample: InteractionSample): void {
    switch (sample.type) {
      case 'zoom':
        this.analyzeZoom(sample);
        break;
      case 'rotate':
        this.analyzeRotation(sample);
        break;
      case 'fractal_change':
        this.analyzeFractalChange(sample);
        break;
      case 'style_change':
        this.analyzeStyleChange(sample);
        break;
      case 'palette_change':
        this.analyzePaletteChange(sample);
        break;
      case 'camera_change':
        this.analyzeCameraChange(sample);
        break;
    }
  }

  private analyzeZoom(sample: InteractionSample): void {
    const zoom = sample.value;
    this.prefs.preferredZoomRange.avg = 
      this.prefs.preferredZoomRange.avg * 0.9 + zoom * 0.1; // EMA
    this.prefs.preferredZoomRange.min = Math.min(this.prefs.preferredZoomRange.min, zoom);
    this.prefs.preferredZoomRange.max = Math.max(this.prefs.preferredZoomRange.max, zoom);
    this.prefs.zoomSensitivity = 
      this.prefs.zoomSensitivity * 0.95 + Math.abs(sample.value) * 0.05;
  }

  private analyzeRotation(sample: InteractionSample): void {
    const speed = Math.abs(sample.value);
    this.prefs.rotationSpeed = this.prefs.rotationSpeed * 0.9 + speed * 0.1;
    
    // Classify rotation style
    if (speed < 0.003) this.prefs.rotationStyle = 'careful';
    else if (speed < 0.01) this.prefs.rotationStyle = 'moderate';
    else this.prefs.rotationStyle = 'fast';
  }

  private analyzeFractalChange(sample: InteractionSample): void {
    // Use string value directly as FractalType (not numeric index)
    const fractalType = String(sample.value);
    this.prefs.fractalWeights[fractalType] = (this.prefs.fractalWeights[fractalType] || 0) + 1;
    this.currentFractal = fractalType;
  }

  private analyzeStyleChange(sample: InteractionSample): void {
    const styleId = String(sample.value);
    this.prefs.renderStyleWeights[styleId] = (this.prefs.renderStyleWeights[styleId] || 0) + 1;
    this.currentStyle = styleId;
  }

  private analyzePaletteChange(sample: InteractionSample): void {
    const paletteId = String(sample.value);
    this.prefs.paletteWeights[paletteId] = (this.prefs.paletteWeights[paletteId] || 0) + 1;
    this.currentPalette = paletteId;
  }

  private analyzeCameraChange(sample: InteractionSample): void {
    const cameraMode = String(sample.value);
    this.prefs.cameraModeWeights[cameraMode] = (this.prefs.cameraModeWeights[cameraMode] || 0) + 1;
    this.currentCamera = cameraMode;
  }

  /** Get the most preferred item from a weights map */
  getPreferred(weights: Record<string, number>): string | null {
    let maxWeight = 0;
    let maxKey: string | null = null;
    for (const [key, weight] of Object.entries(weights)) {
      if (weight > maxWeight) {
        maxWeight = weight;
        maxKey = key;
      }
    }
    return maxKey;
  }

  /** Get adapted parameters based on learned preferences */
  getAdaptedDefaults(): Partial<{
    zoom: number;
    rotationSensitivity: number;
    preferredFractal: string; // FractalType string, not number
    preferredStyle: string; // RenderStyle string
    preferredPalette: string; // Palette ID string
    preferredCamera: string;
  }> {
    const result: Record<string, number | string> = {};
    
    if (this.prefs.sampleCount > 10) {
      result.zoom = this.prefs.preferredZoomRange.avg;
      result.rotationSensitivity = this.prefs.rotationSpeed;
      
      const prefFractal = this.getPreferred(this.prefs.fractalWeights);
      if (prefFractal !== null) result.preferredFractal = prefFractal; // Keep as string
      
      const prefStyle = this.getPreferred(this.prefs.renderStyleWeights);
      if (prefStyle !== null) result.preferredStyle = prefStyle; // Keep as string
      
      const prefPalette = this.getPreferred(this.prefs.paletteWeights);
      if (prefPalette !== null) result.preferredPalette = prefPalette; // Keep as string
      
      const prefCamera = this.getPreferred(this.prefs.cameraModeWeights);
      if (prefCamera !== null) result.preferredCamera = prefCamera;
    }
    
    return result;
  }

  /** Get full preferences snapshot */
  getPreferences(): Readonly<UserPreferences> {
    return this.prefs;
  }

  /** Reset all learned preferences */
  reset(): void {
    this.prefs = this.getDefaultPrefs();
    this.samples = [];
    this.saveToStorage();
  }

  /** Force save current state */
  flush(): void {
    this.saveToStorage();
  }
}

// Singleton instance
export const userPrefEngine = new UserPreferenceEngine();
