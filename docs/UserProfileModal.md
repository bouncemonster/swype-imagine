# UserProfileModal.tsx

**362 lines | User taste profile, liked fractals, and settings**

## Purpose
Modal displaying user's neuro-aesthetic taste profile, liked fractals playlist, audio tuning settings, and engineer mode toggle.

## Props Interface (lines 15-32)
```typescript
interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasteProfile?: TasteProfile;
  archetypeBreakdown: { archetype: AestheticArchetype; label: string; percentage: number; score: number }[];
  currentSpecimen: FractalSpecimen | null;
  resonanceScore: number;
  isEngineerMode: boolean;
  onToggleEngineerMode: () => void;
  audioTuning: AudioTuning;
  onSelectAudioTuning: (mode: AudioTuning) => void;
  onResetTasteProfile?: () => void;
  onOpenManifest?: () => void;
  likedSpecimens?: FractalSpecimen[];
  onPlayLiked?: (specimen: FractalSpecimen) => void;
  onRemoveLike?: (id: string) => void;
  isCurrentLiked?: boolean;
}
```

## Header (lines 63-94)
```
[User φ] Профиль Исследователя  [Нейро-Эстетика]
         Математический профиль вкуса & селекция фенотипов
                                                    [X]
```

## 6 Sections

### Section 1: Key Metrics Cards (lines 99-141)
**3-column grid**:

1. **Текущий Резонанс** (Current Resonance):
   - Value: `{resonanceScore}%`
   - Progress bar (amber gradient)
   - Label: "гармония"

2. **Исследовано** (Explored):
   - Value: `{tasteProfile?.totalSpecimensExplored || 1}`
   - Label: "форм"
   - Subtitle: "Ген #{generation} в фокусе"

3. **Пиковый Резонанс** (Peak Resonance):
   - Value: `{tasteProfile?.highestResonanceScore || 95}%`
   - Label: "Авто-обучение активно"

### Section 2: Liked Fractals Playlist (lines 143-201)
**Title**: "Избранные Фракталы" with heart icon and count badge

**Empty state** (lines 163-166):
```
Нажмите ♥ на понравившемся фрактале, чтобы добавить его в плейлист
```

**Playlist** (lines 167-200):
- Max height: 200px, scrollable
- Each item shows:
  - Index number
  - Specimen name (truncated)
  - φ multiplier + generation
  - Play button (on hover)
  - Remove button (on hover)

**Current liked indicator** (lines 155-160):
```
♥ Текущий в избранном
```

### Section 3: Aesthetic Archetype Resonance Vector (lines 203-237)
**Title**: "Математический Вектор Резонанса (Архетипы)"
**Subtitle**: "5D Пространство Вкуса"

**Description** (lines 217-219):
```
Алгоритм рекомендаций анализирует время созерцания, микро-зумирование 
полостей и пространственные вращения, адаптируя вероятность селекции 
следующих гибридов
```

**Archetype bars** (lines 221-236):
- 5 archetypes with progress bars
- Each shows: label, percentage, amber gradient bar
- Width: `{item.percentage}%`

### Section 4: Sacred Audio Tuning (lines 239-271)
**Title**: "Акустический Гармонический Строй"
**Subtitle**: "432 Гц Золотой Резонатор"

**3 tuning modes** (lines 251-270):
1. **phi432**: "Золотое Сечение φ (432 Гц)"
   - Desc: "Интервалы золотого ряда φ"
2. **fibonacci**: "Чистый Пифагоров Ряд"
   - Desc: "Квинты и кварты ряда Фибоначчи"
3. **zenChimes**: "Тибетские Чаши"
   - Desc: "Теплые колокольные гармоники"

Selected mode: amber highlight

### Section 5: Project Manifest Link (lines 273-298)
**Gradient card** with amber accent:
```
[Sparkles] О проекте & Описание Архитектуры
           34 топологии, фундаментальные константы φ, π, e...
                                    [Читать]
```
Opens ProjectManifestModal

### Section 6: Engineer Mode Toggle (lines 300-342)
**Title**: "Режим Инженера (Продвинутый)"
**Subtitle**: "Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"

**Toggle button** (lines 317-328):
- Active: "Инженер Включен" (amber, ping animation)
- Inactive: "Включить Инж" (neutral)

**Active state message** (lines 331-341):
```
Панель управления инженера и телеметрия FPS активированы на холсте.
                                              [Перейти на холст]
```

## Footer (lines 346-359)
```
Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°
                                                    [Закрыть]
```

## Critical Notes
1. **Russian UI**: All labels in Russian
2. **Scrollable content**: Max height 90vh
3. **Liked playlist**: Interactive with play/remove on hover
4. **Archetype bars**: Visual representation of 5D taste space
5. **Audio tuning**: 3 modes (phi432, fibonacci, zenChimes)
6. **Engineer mode**: Toggle with ping animation
7. **Manifest link**: Opens separate modal
8. **Resonance score**: Progress bar visualization
9. **Custom scrollbar**: Uses `custom-scrollbar` class
10. **Responsive**: Grid layouts adapt to screen size

## Layout
```
┌─────────────────────────────────────────────────────────────┐
│ [User φ] Профиль Исследователя  [Нейро-Эстетика]     [X]   │
│         Математический профиль вкуса                        │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────┬──────────┬──────────┐                         │
│ │Резонанс  │Исследо-  │Пиковый   │                         │
│ │  87%     │вано      │Резонанс  │                         │
│ │  ████    │  42 форм │  95%     │                         │
│ └──────────┴──────────┴──────────┘                         │
│                                                             │
│ ♥ Избранные Фракталы (12)                                   │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ 1  Mandelbulb Hybrid    φ 1.6180 • Gen #5    [▶] [🗑] ││
│ │ 2  Golden Phyllotaxis   φ 1.6180 • Gen #12   [▶] [🗑] ││
│ │ ...                                                     ││
│ └─────────────────────────────────────────────────────────┘│
│                                                             │
│ [BarChart3] Математический Вектор Резонанса (Архетипы)     │
│             5D Пространство Вкуса                           │
│ geometry    ████████████████████  45%                       │
│ complex     ████████████          28%                       │
│ minimal     ██████                14%                       │
│ primes      ████                   9%                       │
│ attractors  ██                     4%                       │
│                                                             │
│ [Volume2] Акустический Гармонический Строй                  │
│ ┌──────────┬──────────┬──────────┐                         │
│ │phi432    │fibonacci │zenChimes │                         │
│ │Золотое   │Чистый    │Тибетские │                         │
│ │Сечение φ │Пифагоров │Чаши      │                         │
│ └──────────┴──────────┴──────────┘                         │
│                                                             │
│ [Sparkles] О проекте & Описание Архитектуры    [Читать]    │
│                                                             │
│ [Wrench] Режим Инженера (Продвинутый)      [Инженер Включен]│
│          Прямой доступ к 34 топологиям...                   │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ Панель управления инженера активированы.  [Перейти]     ││
│ └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│ Алгоритм Резонанса: Косинусная близость 5D • Золотой угол  │
│                                                    [Закрыть]│
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- `TasteProfile`, `AestheticArchetype`, `ARCHETYPE_LABELS` from NeuroAestheticsEngine
- `FractalSpecimen` from types
- `AudioTuning` from types/fractal.ts
- `lucide-react` icons (9 icons: User, Sparkles, Wrench, Volume2, X, Heart, Play, Trash2, BarChart3)
