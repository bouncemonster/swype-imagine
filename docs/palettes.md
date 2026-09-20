# Color Palettes

## palettes.ts (212 lines)

**26 hand-crafted color palettes**

### Palette Structure
```typescript
{
  id: string;                    // 'gold-obsidian'
  name: string;                  // '24K Pure Gold & Obsidian'
  primary: [number, number, number];    // RGB [0, 1]
  secondary: [number, number, number];
  accent: [number, number, number];
  ambient: [number, number, number];
}
```

### Palette List (26 total)
| ID | Name | Primary Color |
|----|------|---------------|
| gold-obsidian | 24K Pure Gold & Obsidian | Gold [1.0, 0.82, 0.28] |
| lapis-lazuli | Lapis Lazuli & Pharaoh Gold | Ultramarine [0.08, 0.32, 0.82] |
| bioluminescent-abyss | Bioluminescent Deep Abyss | Cyan [0.05, 0.88, 0.82] |
| celestial-aurora | Celestial Aurora & Emerald | Emerald [0.15, 0.85, 0.65] |
| solar-plasma | Solar Corona & Plasma | Orange [1.0, 0.52, 0.1] |
| cosmic-amethyst | Cosmic Amethyst & Violet | Purple [0.72, 0.35, 0.95] |
| cyber-lotus | Cybernetic Sakura & Lotus | Pink [0.98, 0.32, 0.68] |
| pure-platinum | Pure Platinum & Pearl | Platinum [0.88, 0.92, 0.98] |
| antique-patina | Antique Bronze & Verdigris | Malachite [0.22, 0.75, 0.62] |
| hyperborean-ice | Hyperborean Crystal Ice | Glacial cyan [0.55, 0.82, 0.98] |
| ruby-singularity | Ruby Singularity & Rose Gold | Ruby [0.92, 0.18, 0.32] |
| crystalline-emerald | Crystalline Emerald Matrix | Emerald [0.12, 0.82, 0.42] |
| nebula-spectrum | Deep Space Nebula Spectrum | Magenta [0.85, 0.25, 0.75] |
| monochrome-divine | Cinematic Silver & Charcoal | Silver [0.82, 0.84, 0.86] |
| volcanic-obsidian | Volcanic Obsidian & Magma | Black glass [0.12, 0.06, 0.04] |
| bioluminescent-jellyfish | Deep-Sea Jellyfish Bioluminescence | Electric blue [0.15, 0.42, 0.95] |
| saharan-dusk | Saharan Dune & Desert Sunset | Sand gold [0.92, 0.62, 0.28] |
| aurora-borealis | Aurora Borealis & Arctic Night | Green [0.18, 0.92, 0.55] |
| coral-reef | Coral Reef & Tropical Abyss | Coral pink [0.95, 0.42, 0.52] |
| steampunk-brass | Steampunk Brass & Copper Patina | Brass [0.78, 0.58, 0.22] |
| quantum-foam | Quantum Foam & Vacuum Fluctuation | Violet [0.62, 0.35, 0.95] |
| blood-moon | Blood Moon & Eclipse Shadow | Crimson [0.72, 0.12, 0.15] |
| arctic-fox | Arctic Winter & Polar Ice | Snow white [0.88, 0.92, 0.98] |
| neon-tokyo | Neon Tokyo & Rain-Slicked Streets | Magenta [0.95, 0.12, 0.52] |
| ancient-egypt | Ancient Egypt & Temple Gold | Gold leaf [0.92, 0.78, 0.32] |
| deep-forest | Primeval Forest & Moss Cathedral | Moss emerald [0.12, 0.52, 0.22] |

### Critical Notes
1. All colors are RGB in [0, 1] range
2. Ambient colors are dark (0.01-0.09) for background
3. Accent colors provide contrast highlights
4. Used by NeuroAestheticsEngine for specimen palettes

---

## palettesProcedural.ts (89 lines)

**640 procedurally generated palettes**

### Generation Strategy
- **80 themes** (Cosmic, Nebula, Stellar, etc.)
- **8 variations per theme** = 640 palettes
- **Golden angle** (137.508°) for harmonic hue distribution

### Theme Categories (80 themes)
- **Space**: Cosmic, Nebula, Stellar, Galactic, Astral, Quantum, Plasma, Photon, Neutron, Proton
- **Crystal**: Crystal, Prism, Spectrum, Rainbow, Iridescent
- **Ocean**: Ocean, Abyss, Coral, Reef, Tidal
- **Forest**: Forest, Emerald, Jade, Moss, Canopy
- **Desert**: Desert, Sand, Dune, Oasis, Mirage
- **Volcanic**: Volcanic, Magma, Lava, Ember, Ash
- **Arctic**: Arctic, Glacier, Frost, Ice, Snow
- **Celestial**: Solar, Lunar, Eclipse, Zenith, Horizon
- **Mystic**: Mystic, Ethereal, Divine, Sacred, Celestial
- **Metal**: Golden, Silver, Bronze, Copper, Platinum
- **Gem**: Ruby, Sapphire, Emerald, Amethyst, Topaz
- **Mythical**: Phoenix, Dragon, Griffin, Unicorn, Pegasus
- **Floral**: Lotus, Orchid, Rose, Lily, Iris
- **Weather**: Thunder, Lightning, Storm, Cyclone, Tornado
- **Polar**: Aurora, Borealis, Australis, Polar, Equatorial

### Color Theory
```typescript
// Primary: base hue + saturation/brightness from variation
// Secondary: golden angle rotation (137.508° * (1 + variation % 3))
// Accent: complementary (180°), triadic (120°/240°), or golden angle
// Ambient: dark version of primary (saturation * 0.5, lightness * 0.15)
```

### HSL to RGB Conversion
- Hue: 0-360°
- Saturation: 0.6-1.0 (5 levels)
- Lightness: 0.5-0.9 (5 levels)

### Usage
```typescript
// In App.tsx:
const ALL_COLOR_PALETTES = [...COLOR_PALETTES, ...PROCEDURAL_PALETTES];
// Total: 26 + 640 = 666 palettes
```

### Critical Notes
1. Procedural palettes use golden angle for harmonic distribution
2. Each theme has 8 variations with different hue/saturation/brightness
3. Accent colors cycle through: complementary → triadic → golden
4. Combined with hand-crafted palettes in App.tsx
