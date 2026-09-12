import { ColorPalette } from './types/fractal';
import { hslToRgb } from './utils/colorMath';

/**
 * Procedural Palette Generator
 * Generates hundreds of unique palettes using golden ratio and color theory
 */

// Golden angle for maximum hue distribution
const GOLDEN_ANGLE = 137.508;

// Base hue rotations for variety
const HUE_ROTATIONS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const SATURATION_LEVELS = [0.6, 0.7, 0.8, 0.9, 1.0];
const BRIGHTNESS_LEVELS = [0.5, 0.6, 0.7, 0.8, 0.9];

// Named palette themes
const PALETTE_THEMES = [
  'Cosmic', 'Nebula', 'Stellar', 'Galactic', 'Astral',
  'Quantum', 'Plasma', 'Photon', 'Neutron', 'Proton',
  'Crystal', 'Prism', 'Spectrum', 'Rainbow', 'Iridescent',
  'Ocean', 'Abyss', 'Coral', 'Reef', 'Tidal',
  'Forest', 'Emerald', 'Jade', 'Moss', 'Canopy',
  'Desert', 'Sand', 'Dune', 'Oasis', 'Mirage',
  'Volcanic', 'Magma', 'Lava', 'Ember', 'Ash',
  'Arctic', 'Glacier', 'Frost', 'Ice', 'Snow',
  'Solar', 'Lunar', 'Eclipse', 'Zenith', 'Horizon',
  'Mystic', 'Ethereal', 'Divine', 'Sacred', 'Celestial',
  'Golden', 'Silver', 'Bronze', 'Copper', 'Platinum',
  'Ruby', 'Sapphire', 'Emerald', 'Amethyst', 'Topaz',
  'Phoenix', 'Dragon', 'Griffin', 'Unicorn', 'Pegasus',
  'Lotus', 'Orchid', 'Rose', 'Lily', 'Iris',
  'Thunder', 'Lightning', 'Storm', 'Cyclone', 'Tornado',
  'Aurora', 'Borealis', 'Australis', 'Polar', 'Equatorial',
];

function generatePalette(
  theme: string,
  baseHue: number,
  variation: number
): ColorPalette {
  // Primary color
  const primaryHue = baseHue;
  const primarySat = SATURATION_LEVELS[Math.floor(variation / 5) % SATURATION_LEVELS.length];
  const primaryLight = BRIGHTNESS_LEVELS[Math.floor(variation / 25) % BRIGHTNESS_LEVELS.length];
  const primary = hslToRgb(primaryHue, primarySat, primaryLight);
  
  // Secondary color (golden angle rotation)
  const secondaryHue = (baseHue + GOLDEN_ANGLE * (1 + variation % 3)) % 360;
  const secondarySat = primarySat * 0.9;
  const secondaryLight = primaryLight * 0.8;
  const secondary = hslToRgb(secondaryHue, secondarySat, secondaryLight);
  
  // Accent color (complementary or triadic)
  const accentMode = variation % 4;
  let accentHue: number;
  if (accentMode === 0) accentHue = (baseHue + 180) % 360; // Complementary
  else if (accentMode === 1) accentHue = (baseHue + 120) % 360; // Triadic
  else if (accentMode === 2) accentHue = (baseHue + 240) % 360; // Triadic
  else accentHue = (baseHue + GOLDEN_ANGLE) % 360; // Golden
  
  const accent = hslToRgb(accentHue, primarySat, Math.min(1.0, primaryLight + 0.2));
  
  // Ambient (dark version of primary)
  const ambient = hslToRgb(primaryHue, primarySat * 0.5, primaryLight * 0.15);
  
  return {
    id: `${theme.toLowerCase().replace(/\s+/g, '-')}-${baseHue}-${variation}`,
    name: `${theme} ${variation + 1}`,
    primary,
    secondary,
    accent,
    ambient,
  };
}

export const PROCEDURAL_PALETTES: ColorPalette[] = [];

// Generate 200+ palettes
PALETTE_THEMES.forEach((theme, themeIdx) => {
  const baseHue = (themeIdx * GOLDEN_ANGLE * 7) % 360;
  
  // Generate 8 variations per theme
  for (let v = 0; v < 8; v++) {
    const hue = (baseHue + v * 30) % 360;
    PROCEDURAL_PALETTES.push(generatePalette(theme, hue, v));
  }
});

// Export combined palettes
export const ALL_PALETTES = [
  // Will be combined with COLOR_PALETTES in App.tsx
  ...PROCEDURAL_PALETTES,
];
