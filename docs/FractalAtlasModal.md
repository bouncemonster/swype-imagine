# FractalAtlasModal.tsx

**574 lines | Scientific atlas of canonical fractals with search and categories**

## Purpose
Comprehensive atlas showing all 145 canonical fractals with scientific descriptions, formulas, and the ability to apply presets. Includes search, category filtering, and detailed information panels.

## Props Interface (lines 30-34)
```typescript
interface FractalAtlasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPreset: (preset: Partial<FractalParams>, title: string) => void;
}
```

## State Management (lines 41-47)
```typescript
const [activeTab, setActiveTab] = useState<'catalog' | 'manifest' | 'technologies'>('catalog');
const [selectedCategory, setSelectedCategory] = useState<FractalCategoryKey | 'all'>('all');
const [searchQuery, setSearchQuery] = useState('');
const [selectedFractal, setSelectedFractal] = useState<CanonicalFractal | null>(CANONICAL_FRACTALS_CATALOG[0]);
const [appliedId, setAppliedId] = useState<string | null>(null);
```

## 3 Tabs
1. **catalog**: Main fractal catalog with search and filtering
2. **manifest**: Project manifest and architecture overview
3. **technologies**: Technical stack and rendering pipeline

## Filtering Logic (lines 49-62)
```typescript
const filteredFractals = useMemo(() => {
  return CANONICAL_FRACTALS_CATALOG.filter((f) => {
    const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesSearch = 
      f.name.toLowerCase().includes(q) ||
      f.englishName.toLowerCase().includes(q) ||
      f.formula.toLowerCase().includes(q) ||
      f.dimension.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });
}, [selectedCategory, searchQuery]);
```
Searches across: name, englishName, formula, dimension, description.

## Apply Preset (lines 66-73)
```typescript
const handleApply = (fractal: CanonicalFractal) => {
  onApplyPreset(fractal.enginePreset, fractal.name);
  setAppliedId(fractal.id);
  setTimeout(() => {
    setAppliedId(null);
    onClose();
  }, 450);
};
```
Applies fractal preset, shows checkmark for 450ms (atlas apply-delay, unrelated to the CosmicLoader progress pipeline), then closes modal.

## Category Icons (lines 75-85)
```typescript
const getCategoryIcon = (catKey: FractalCategoryKey) => {
  switch (catKey) {
    case 'geometric_curves': return <Compass />;
    case 'constructive': return <Layers />;
    case 'algebraic_complex': return <InfinityIcon />;
    case 'multidimensional': return <Box />;
    case 'ifs_attractors': return <Activity />;
    case 'stochastic': return <Sparkles />;
    case 'topological_physical': return <Atom />;
  }
};
```

## Critical Notes
1. **3 tabs**: catalog, manifest, technologies
2. **Search**: Full-text search across all fractal fields
3. **Category filter**: 10 FRACTAL_CATEGORIES keys (fractalCatalogTypes.ts:3-13) + "all"; note: the 19 temporal_manifolds catalog items carry existing category keys and are only grouped/reachable as a distinct set under "all"
4. **Apply preset**: Loads fractal parameters into engine
5. **Visual feedback**: Checkmark shown for 450ms after apply
6. **Responsive**: Mobile-first design
7. **Russian UI**: All labels in Russian
8. **Large modal**: 90vh height, max-w-6xl width
9. **Memoized filtering**: useMemo for performance
10. **Scientific focus**: Formulas, dimensions, descriptions

## Dependencies
- `CANONICAL_FRACTALS_CATALOG`, `FRACTAL_CATEGORIES`, `CanonicalFractal`, `FractalCategoryKey` from data/canonicalFractals
- `FractalParams` from types
- `lucide-react` icons (17 icons)
