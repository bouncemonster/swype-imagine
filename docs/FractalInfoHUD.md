# FractalInfoHUD.tsx

**389 lines | HUD overlay with specimen info and controls**

## Purpose
Heads-up display showing current fractal specimen info, navigation controls, and quick action buttons. Auto-hides after 3 seconds of inactivity.

## Props Interface (lines 9-26)
```typescript
interface FractalInfoHUDProps {
  specimen: FractalSpecimen | null;
  resonanceScore: number;
  isInteracting: boolean;
  interactionType: 'idle' | 'zooming' | 'orbiting';
  onNext: () => void;
  onPrev: () => void;
  onFavorite: () => void;
  onOpenProfile: () => void;
  enableAudio: boolean;
  onToggleAudio: () => void;
  onOpenResearchModal: () => void;
  onOpenAtlas?: () => void;
  isFeedOpen?: boolean;
  onToggleFeed?: () => void;
  isCurrentLiked?: boolean;
  params?: FractalParams;
}
```

## FRIENDLY_COMPOSITE_NAMES (lines 28-37)
Russian display names for composite operations:
- smoothMorph → "Морфинг"
- smoothUnion → "Слияние форм"
- smoothIntersection → "Пересечение"
- smoothCarve → "Полости"
- domainWarp → "Искривление"
- quantumResonance → "Резонанс"
- fractalLattice → "Решетка"
- goldenSpiralFold → "Золотая спираль"

## UI Components

### Top Right Menu (lines 204-287)
**Always-visible trigger**: "⋯" button (MoreHorizontal icon)
- Click/tap to expand dropdown
- Hover on desktop expands automatically
- Auto-hides after 3s

**Expanded buttons** (dropdown on mobile, inline on desktop):
1. **Audio Toggle** (lines 235-246)
   - Volume2/VolumeX icon
   - Amber highlight when enabled
   - Title: "Включить гармонический звук φ (432 Гц)"

2. **Atlas Button** (lines 248-258) - optional
   - BookOpen icon
   - Opens scientific atlas modal
   - Title: "Научный Атлас канонических фракталов"

3. **Feed Toggle** (lines 260-273) - optional
   - Layers icon
   - Toggles FractalScrollFeed visibility
   - Amber highlight when open

4. **User Profile** (lines 275-285)
   - User icon + resonance score badge
   - Score shown as "{resonanceScore}%"
   - Opens settings/profile modal

### Interaction Feedback Chip (lines 289-300)
Shows when user is actively interacting (desktop only):
- **Zooming**: "Исследование микроструктуры"
- **Orbiting**: "Пространственный ракурс"
- Compass icon with slow spin (4s duration)
- Auto-hides when not interacting

### Bottom Feed Bar (lines 302-385)
**Auto-hides after 3s** of inactivity. Shows/hides together with top bar.

**Structure**:
```
┌─────────────────────────────────────────────────────────┐
│ ● {Specimen Name} [Морфинг]    │ ♥  ⇄  [◀] [Далее ▶] │
│   φ 1.6180                       │                     │
└─────────────────────────────────────────────────────────┘
```

**Left section** (lines 311-331):
- Amber pulse dot
- Specimen name (truncated with tooltip)
- Composite op badge (if hybridBlend > 0.05)
- φ multiplier: "φ {phiMultiplier.toFixed(4)}"

**Center divider** (line 333):
- Vertical separator line

**Right section** (lines 335-383):
1. **Heart/Favorite** (lines 336-347)
   - Heart icon, fills rose when favorited
   - Calls `onFavorite()`
   - Title: "Отметить как понравившийся"

2. **Share** (lines 349-361)
   - Share2 icon → Check icon when copied
   - Calls `handleShare()`
   - Title: "Поделиться этим фракталом"

3. **Navigation** (lines 363-383)
   - ChevronLeft: Previous specimen
   - "Далее ▶" button: Next random fractal (amber gradient)
   - Titles: "[Стрелка влево]" / "[Пробел]"

## handleShare() Function (lines 127-196)
Encodes ALL fractal parameters into URL hash for complete state preservation:

**Encoded parameters** (lines 131-173):
- Core genome: type, hybrid, tertiary, op, blend, smoothK, warp, octaves, boxFold, sphereFold, interiorCut, iterations, phi, morphSpeed, glow, zoom, name
- Palette: palette, paletteSeed, paletteRotation
- Render: renderStyle, cameraMode, camX, camY, camZ
- Lighting: headlamp, fog
- Slice: slicePlane, sliceAxis
- Audio: audio, audioVol, audioTuning
- Performance: drs

**Share methods**:
1. **Mobile**: `navigator.share()` - native share dialog
2. **Desktop**: `navigator.clipboard.writeText()` - copy to clipboard
3. **Fallback**: Create textarea, select, execCommand('copy')

Shows "Ссылка скопирована!" for 2 seconds after copy.

## Auto-Hide Logic (lines 69-120)
**Unified timing**: Both top and bottom bars show/hide together

**Triggers to show**:
- Mouse near top edge (clientY < 80)
- Mouse near bottom edge (clientY > innerHeight - 120)
- Touch anywhere (mobile)
- Hover over top-right menu
- Initial mount (showBars() in useEffect)

**Auto-hide**: 3000ms timeout, cancelled if hovering

**State management**:
- `showTopBar`: Controls top menu visibility
- `showBottomBar`: Controls bottom bar visibility
- `topBarExpanded`: Controls dropdown expansion
- `isHoveringRef`: Prevents hide while hovering

## Critical Notes
1. **Auto-hide**: 3 seconds of inactivity
2. **Edge detection**: Mouse near top/bottom edges triggers show
3. **Mobile vs Desktop**: Different layouts (dropdown vs inline)
4. **URL encoding**: Complete fractal state in hash for sharing
5. **Native share**: Uses Web Share API on mobile
6. **Resonance score**: Shown as badge on profile button
7. **Favorite state**: Synced with `isCurrentLiked` prop
8. **Interaction feedback**: Desktop-only chip showing zoom/orbit status
9. **Russian UI**: All labels in Russian
10. **Responsive**: Different layouts for mobile/desktop

## Dependencies
- `FractalSpecimen`, `FractalParams` from types
- `lucide-react` icons (12 icons)
- No direct engine dependencies
