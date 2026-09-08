import { ColorPalette } from './types/fractal';

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'gold-obsidian',
    name: '24K Pure Gold & Obsidian',
    primary: [1.0, 0.82, 0.28],      // Pure 24K Gold
    secondary: [0.72, 0.48, 0.12],    // Deep bronze/amber
    accent: [1.0, 0.95, 0.65],       // Brilliant golden highlight
    ambient: [0.08, 0.05, 0.02],
  },
  {
    id: 'lapis-lazuli',
    name: 'Lapis Lazuli & Pharaoh Gold',
    primary: [0.08, 0.32, 0.82],     // Royal Egyptian ultramarine
    secondary: [0.95, 0.76, 0.22],    // Radiant electrum gold
    accent: [0.25, 0.85, 0.92],      // Turquoise inlay highlight
    ambient: [0.02, 0.04, 0.09],
  },
  {
    id: 'bioluminescent-abyss',
    name: 'Bioluminescent Deep Abyss',
    primary: [0.05, 0.88, 0.82],     // Electric cyan bioluminescence
    secondary: [0.08, 0.22, 0.65],    // Deep oceanic midnight
    accent: [0.45, 1.0, 0.65],       // Phosphorescent emerald
    ambient: [0.01, 0.03, 0.06],
  },
  {
    id: 'celestial-aurora',
    name: 'Celestial Aurora & Emerald',
    primary: [0.15, 0.85, 0.65],     // Radiant emerald
    secondary: [0.12, 0.45, 0.9],     // Deep azure
    accent: [0.95, 0.88, 0.35],      // Golden starlight
    ambient: [0.02, 0.04, 0.08],
  },
  {
    id: 'solar-plasma',
    name: 'Solar Corona & Plasma',
    primary: [1.0, 0.52, 0.1],       // Solar orange
    secondary: [0.85, 0.15, 0.12],    // Crimson magma
    accent: [1.0, 0.92, 0.45],       // Solar flare white-gold
    ambient: [0.06, 0.02, 0.01],
  },
  {
    id: 'cosmic-amethyst',
    name: 'Cosmic Amethyst & Violet',
    primary: [0.72, 0.35, 0.95],     // Royal purple
    secondary: [0.35, 0.15, 0.75],    // Deep violet
    accent: [1.0, 0.82, 0.35],       // Contrasting golden crown
    ambient: [0.04, 0.02, 0.06],
  },
  {
    id: 'cyber-lotus',
    name: 'Cybernetic Sakura & Lotus',
    primary: [0.98, 0.32, 0.68],     // Neon pink/magenta
    secondary: [0.45, 0.18, 0.78],    // Electric violet
    accent: [0.85, 0.35, 0.75],       // Neon sakura bloom (was white-silver, caused washout)
    ambient: [0.05, 0.02, 0.05],
  },
  {
    id: 'pure-platinum',
    name: 'Pure Platinum & Pearl',
    primary: [0.88, 0.92, 0.98],     // Platinum sheen
    secondary: [0.45, 0.55, 0.68],    // Slate titanium
    accent: [1.0, 0.88, 0.55],       // Warm golden filament
    ambient: [0.03, 0.04, 0.05],
  },
  {
    id: 'antique-patina',
    name: 'Antique Bronze & Verdigris',
    primary: [0.22, 0.75, 0.62],     // Oxidized malachite patina
    secondary: [0.65, 0.42, 0.22],    // Weathered bronze
    accent: [0.95, 0.82, 0.45],       // Gilded brass edge
    ambient: [0.03, 0.04, 0.03],
  },
  {
    id: 'hyperborean-ice',
    name: 'Hyperborean Crystal Ice',
    primary: [0.55, 0.82, 0.98],     // Arctic glacial cyan
    secondary: [0.18, 0.35, 0.72],    // Deep sapphire ice
    accent: [0.55, 0.82, 0.95],      // Aurora borealis shimmer (was diamond glare, caused washout)
    ambient: [0.02, 0.04, 0.07],
  },
  {
    id: 'ruby-singularity',
    name: 'Ruby Singularity & Rose Gold',
    primary: [0.92, 0.18, 0.32],     // Deep Pigeon-Blood Ruby
    secondary: [0.58, 0.12, 0.22],    // Garnet wine
    accent: [1.0, 0.78, 0.62],       // Rose gold filament
    ambient: [0.05, 0.01, 0.02],
  },
  {
    id: 'crystalline-emerald',
    name: 'Crystalline Emerald Matrix',
    primary: [0.12, 0.82, 0.42],     // Pure emerald ray
    secondary: [0.05, 0.45, 0.28],    // Deep imperial jade
    accent: [0.98, 0.85, 0.32],       // Precision gold inscription
    ambient: [0.01, 0.04, 0.02],
  },
  {
    id: 'nebula-spectrum',
    name: 'Deep Space Nebula Spectrum',
    primary: [0.85, 0.25, 0.75],     // Ionized hydrogen magenta
    secondary: [0.22, 0.32, 0.95],    // Cosmic oxygen blue
    accent: [0.98, 0.92, 0.45],       // Protostellar ignition gold
    ambient: [0.03, 0.02, 0.05],
  },
  {
    id: 'monochrome-divine',
    name: 'Cinematic Silver & Charcoal',
    primary: [0.82, 0.84, 0.86],     // Liquid silver mirror
    secondary: [0.28, 0.30, 0.33],    // Dense graphite
    accent: [0.95, 0.95, 0.98],      // Bright silver photon (was pure white, caused washout)
    ambient: [0.03, 0.03, 0.03],
  },
  {
    id: 'volcanic-obsidian',
    name: 'Volcanic Obsidian & Magma',
    primary: [0.12, 0.06, 0.04],     // Black volcanic glass
    secondary: [0.95, 0.35, 0.08],    // Molten lava flow
    accent: [1.0, 0.72, 0.22],       // Incandescent ember core
    ambient: [0.04, 0.01, 0.01],
  },
  {
    id: 'bioluminescent-jellyfish',
    name: 'Deep-Sea Jellyfish Bioluminescence',
    primary: [0.15, 0.42, 0.95],     // Electric blue photophore
    secondary: [0.85, 0.18, 0.62],    // Magenta counterillumination
    accent: [0.45, 1.0, 0.92],       // Cyan glow trail
    ambient: [0.01, 0.02, 0.05],
  },
  {
    id: 'saharan-dusk',
    name: 'Saharan Dune & Desert Sunset',
    primary: [0.92, 0.62, 0.28],     // Wind-sculpted sand gold
    secondary: [0.78, 0.22, 0.15],    // Burning horizon crimson
    accent: [1.0, 0.88, 0.55],       // Heat shimmer highlight
    ambient: [0.06, 0.03, 0.02],
  },
  {
    id: 'aurora-borealis',
    name: 'Aurora Borealis & Arctic Night',
    primary: [0.18, 0.92, 0.55],     // Ethereal green curtain
    secondary: [0.35, 0.22, 0.85],    // Deep violet ionosphere
    accent: [0.55, 1.0, 0.82],       // Pale auroral whisper
    ambient: [0.02, 0.03, 0.06],
  },
  {
    id: 'coral-reef',
    name: 'Coral Reef & Tropical Abyss',
    primary: [0.95, 0.42, 0.52],     // Staghorn coral pink
    secondary: [0.08, 0.55, 0.72],    // Turquoise lagoon
    accent: [1.0, 0.82, 0.35],       // Anemone gold polyps
    ambient: [0.02, 0.04, 0.06],
  },
  {
    id: 'steampunk-brass',
    name: 'Steampunk Brass & Copper Patina',
    primary: [0.78, 0.58, 0.22],     // Aged brass gear
    secondary: [0.52, 0.28, 0.12],    // Oxidized copper
    accent: [1.0, 0.88, 0.42],       // Polished gold rivet
    ambient: [0.04, 0.03, 0.02],
  },
  {
    id: 'quantum-foam',
    name: 'Quantum Foam & Vacuum Fluctuation',
    primary: [0.62, 0.35, 0.95],     // Virtual particle violet
    secondary: [0.15, 0.72, 0.88],    // Hawking radiation cyan
    accent: [1.0, 0.95, 0.72],       // Zero-point energy white
    ambient: [0.03, 0.02, 0.05],
  },
  {
    id: 'blood-moon',
    name: 'Blood Moon & Eclipse Shadow',
    primary: [0.72, 0.12, 0.15],     // Rayleigh-scattered crimson
    secondary: [0.18, 0.08, 0.12],    // Umbra deep shadow
    accent: [0.95, 0.42, 0.28],      // Penumbra copper rim
    ambient: [0.04, 0.01, 0.02],
  },
  {
    id: 'arctic-fox',
    name: 'Arctic Winter & Polar Ice',
    primary: [0.88, 0.92, 0.98],     // Fresh snowfall white
    secondary: [0.42, 0.58, 0.78],    // Glacial ice blue
    accent: [0.72, 0.85, 0.95],      // Frost crystal blue (was diamond dust, caused washout)
    ambient: [0.04, 0.05, 0.07],
  },
  {
    id: 'neon-tokyo',
    name: 'Neon Tokyo & Rain-Slicked Streets',
    primary: [0.95, 0.12, 0.52],     // Shibuya crossing magenta
    secondary: [0.08, 0.42, 0.95],    // Akihabara electric blue
    accent: [0.22, 1.0, 0.62],       // Harajuku neon green
    ambient: [0.03, 0.02, 0.04],
  },
  {
    id: 'ancient-egypt',
    name: 'Ancient Egypt & Temple Gold',
    primary: [0.92, 0.78, 0.32],     // Karnak temple gold leaf
    secondary: [0.12, 0.35, 0.62],    // Lapis lazuli inlay
    accent: [0.82, 0.42, 0.18],      // Sandstone column warm
    ambient: [0.04, 0.03, 0.02],
  },
  {
    id: 'deep-forest',
    name: 'Primeval Forest & Moss Cathedral',
    primary: [0.12, 0.52, 0.22],     // Ancient moss emerald
    secondary: [0.28, 0.18, 0.08],    // Bark and loam brown
    accent: [0.72, 0.88, 0.32],      // Sunbeam through canopy
    ambient: [0.02, 0.04, 0.02],
  },
];
