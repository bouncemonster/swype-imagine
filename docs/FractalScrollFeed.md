# FractalScrollFeed.tsx

**281 lines | Neuro-feed ribbon for fractal specimens**

## Purpose
Left-side floating ribbon showing history of generated fractal specimens (neuro-feed). Allows navigation through previously generated fractals and quick render style switching.

## Props Interface (lines 20-33)
```typescript
interface FractalScrollFeedProps {
  currentSpecimen: FractalSpecimen | null;
  historyQueue: FractalSpecimen[];
  currentIndex: number;
  onSelectSpecimen: (specimen: FractalSpecimen) => void;
  onNext: () => void;
  onPrev: () => void;
  renderStyle: RenderStyle;
  onSelectRenderStyle: (style: RenderStyle) => void;
  scrollMode: 'feed' | 'zoom';
  onToggleScrollMode: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}
```

## RENDER_STYLES_CONFIG (lines 35-99)
Configuration for all 7 render styles with icons and descriptions:

| ID | Label | Icon | Accent Color |
|----|-------|------|--------------|
| solid | Физическая поверхность (PBR) | Sparkles | amber |
| xray | X-Ray Томография плотности | Eye | cyan |
| topo | Топографическая карта кривизны | Activity | emerald |
| hologram | Голографическая проекция | Grid | blue |
| iridescent | Радужная интерференция | Droplet | purple |
| quantum | Квантовое поле энергии | Atom | rose |
| gemstone | Кристаллическая рефракция | Flame | amber |

Each style has:
- `id`: RenderStyle
- `label`: Full Russian name
- `shortLabel`: Short English name
- `icon`: Lucide icon component
- `desc`: Description in Russian
- `accent`: Tailwind classes for selected state

## UI Structure

### Header (lines 131-166)
- Title: "3D Скролл-Лента"
- Subtitle: "Фракталы & Гибриды"
- **Scroll Mode Toggle**: Switches between 'feed' and 'zoom' modes
  - feed: Mouse wheel advances through specimens
  - zoom: Mouse wheel zooms camera
  - Icons: MousePointer (feed) vs ZoomIn (zoom)

### Render Style Selector (lines 168-197)
- Title: "Механика рендеринга (7)"
- 2-column grid of 7 render styles
- Each button shows icon + shortLabel
- Selected style gets accent color
- Max height: 28 (scrollable)

### Specimen Stream (lines 199-266)
- Title: "Поток фенотипов ({historyQueue.length})"
- Navigation buttons: ChevronUp (prev), ChevronDown (next)
- Scrollable list of specimens (max-h-56)
- Each specimen card shows:
  - Generation number: `#{item.generation || idx + 1}`
  - Name: `item.name`
  - Composite op: `item.compositeOp || 'hybrid'`
  - Types: `item.type + item.hybridType`
  - Current specimen: amber highlight + ping animation

### Scroll Hint (lines 268-274)
- Shows current scroll mode behavior
- "Скролл мыши / жест" → "Переход по ленте" or "Зум вглубь"

## Critical Notes
1. **Left-side positioning**: Fixed left-3, vertically centered
2. **Open/close animation**: translate-x with 300ms ease-out
3. **Russian UI**: All labels in Russian
4. **Scroll mode**: Dual-purpose wheel (feed navigation OR zoom)
5. **History queue**: Shows all generated specimens (FIFO, max 100)
6. **Current specimen**: Highlighted with amber + ping animation
7. **Responsive**: Max height 82vh, scrollable sections
8. **Custom scrollbar**: Uses `custom-scrollbar` class

## Layout
```
┌─────────────────────────────────┐
│ [Radio] 3D Скролл-Лента  [Feed] │
│         Фракталы & Гибриды      │
├─────────────────────────────────┤
│ Механика рендеринга (7)         │
│ ┌──────┬──────┐                 │
│ │Solid │X-Ray │                 │
│ │Topo  │Holo  │                 │
│ │Irid  │Quant │                 │
│ │Gem   │      │                 │
│ └──────┴──────┘                 │
├─────────────────────────────────┤
│ Поток фенотипов (42)    [▲][▼] │
│ ┌─────────────────────────────┐ │
│ │ #1 Mandelbulb + Gyroid      │ │
│ │ #2 Phyllotaxis + Prime      │ │
│ │ #3 Quaternion + Hopf   ●    │ │ ← current
│ │ ...                         │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ Скролл мыши / жест              │
│ → Переход по ленте              │
└─────────────────────────────────┘
```

## Dependencies
- `FractalSpecimen`, `RenderStyle`, `FractalParams` from types
- `lucide-react` icons (13 icons)
- No internal engine dependencies
