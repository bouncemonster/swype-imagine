# ProjectManifestModal.tsx

**176 lines | Project introduction and welcome modal**

## Purpose
Welcome modal introducing the project to new users. Shows on first visit and explains core features, gesture controls, and provides entry points to the atlas.

## Props Interface (lines 4-9)
```typescript
interface ProjectManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFirstVisit?: boolean;
  onOpenAtlas?: () => void;
}
```

## LocalStorage Persistence (lines 19-26)
```typescript
const handleDismiss = () => {
  try {
    localStorage.setItem('phi_manifest_seen', 'true');
  } catch {
    // ignore
  }
  onClose();
};
```
Stores `phi_manifest_seen` flag to prevent showing on subsequent visits.

## Header (lines 58-93)
```
        [Animated Pentagon Emblem]
        
        [Sparkles] 3D Резонатор • Золотое Сечение φ
        
           Живая Вселенная Фракталов
        
  Гармония математических констант, бесконечная глубина 
  и аппаратный 3D-реймаршинг в реальном времени.
```

**Animated emblem** (lines 60-78):
- SVG pentagon with slow spin (40s duration)
- Pulsing amber glow behind
- Center dot (golden)

## 3 Pillars Cards (lines 95-129)
**3-column grid** (responsive: 1-col mobile, 3-col desktop):

### Card 1: 100+ Canonical Forms (lines 97-106)
```
[Compass] 100+ Канонических Форм

Снежинки Коха, кривые дракона, 3D Мандельбульбы, 
квантовая бабочка Хофштадтера и странные аттракторы.
```
**Color**: amber accent

### Card 2: Live Morphing & Fusion (lines 108-117)
```
[Layers] Живой Морфинг & Слияние

Бесшовное перетекание геометрий и синтез невиданных 
гибридных форм по законам золотого сечения.
```
**Color**: cyan accent

### Card 3: Phi Audio Harmonics (lines 119-128)
```
[Music] Гармоники Звука φ

Генеративный медитативный дрон на частотах 432 Гц, 
модулируемый глубиной реймаршинга SDF.
```
**Color**: purple accent

## Gesture Guide (lines 131-147)
```
[MousePointer] Вращение: левая кнопка мыши / свайп
      •
[🔍] Масштаб: колесо мыши / пинч-зум
      •
[📖] Атлас: выбор из 100+ фигур
```
**Purpose**: Teaches basic interaction gestures

**Layout**: Horizontal on desktop, stacked on mobile

## Action Buttons (lines 149-170)
```
[BookOpen Каталог 100+ Фракталов]  [Начать погружение ▶]
```

**Buttons**:
1. **Atlas Button** (optional): Opens FractalAtlasModal
   - Neutral background with amber border
   - "Каталог 100+ Фракталов"

2. **Start Button**: Closes modal
   - Amber gradient background
   - "Начать погружение" with animated chevron
   - Glow effect: `shadow-[0_0_20px_rgba(245,158,11,0.25)]`

## Visual Design

### Background (line 41)
```typescript
bg-[#090812] // Deep dark blue-black
```

### Golden Edge Glow (line 45)
```typescript
h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200
```
Top border with golden gradient

### Ambient Shadow (line 41)
```typescript
shadow-[0_0_60px_rgba(245,158,11,0.15)]
```
60px amber glow around modal

## Critical Notes
1. **First visit**: Shows automatically on first visit
2. **LocalStorage**: `phi_manifest_seen` flag prevents re-showing
3. **Russian UI**: All text in Russian
4. **Animated emblem**: SVG pentagon with 40s spin
5. **3 pillars**: Core features explained
6. **Gesture guide**: Teaches mouse/touch controls
7. **Atlas entry**: Optional button to open catalog
8. **Responsive**: 1-col mobile, 3-col desktop
9. **Golden theme**: Amber accents throughout
10. **Backdrop click**: Closes modal

## Layout
```
┌─────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← golden edge
│                                                             │
│                    [Animated Pentagon]                      │
│                                                             │
│            [Sparkles] 3D Резонатор • Золотое Сечение φ      │
│                                                             │
│               Живая Вселенная Фракталов                     │
│                                                             │
│         Гармония математических констант...                 │
│                                                             │
│ ┌──────────────┬──────────────┬──────────────┐             │
│ │ [Compass]    │ [Layers]     │ [Music]      │             │
│ │ 100+ Форм    │ Морфинг      │ Звук φ       │             │
│ │ Снежинки...  │ Перетекание  │ 432 Гц...    │             │
│ └──────────────┴──────────────┴──────────────┘             │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ [Mouse] Вращение  •  [🔍] Масштаб  •  [📖] Атлас       ││
│ └─────────────────────────────────────────────────────────┘│
│                                                             │
│                    [Каталог] [Начать ▶]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- `lucide-react` icons (7 icons: Sparkles, Compass, Music, BookOpen, ChevronRight, X, Layers, MousePointer)
- No engine dependencies (pure UI)
- Uses localStorage for persistence
