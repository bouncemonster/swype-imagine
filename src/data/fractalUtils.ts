/**
 * Utility functions for fractal data validation and processing
 */

import { CanonicalFractal } from './fractalCatalogTypes';

/**
 * Validates a canonical fractal object
 */
export function validateCanonicalFractal(fractal: Partial<CanonicalFractal>): fractal is CanonicalFractal {
  return !!(
    fractal.id &&
    fractal.name &&
    fractal.englishName &&
    fractal.category &&
    fractal.formula &&
    fractal.dimension &&
    fractal.generatorRule &&
    fractal.description &&
    fractal.phiPiRelation &&
    fractal.enginePreset
  );
}

/**
 * Filters fractals by category
 */
export function filterByCategory(
  fractals: CanonicalFractal[],
  category: string
): CanonicalFractal[] {
  return fractals.filter(f => f.category === category);
}

/**
 * Sorts fractals by dimension (ascending)
 */
export function sortByDimension(fractals: CanonicalFractal[]): CanonicalFractal[] {
  return [...fractals].sort((a, b) => {
    const dimA = parseFloat(a.dimension.match(/[\d.]+/)?.[0] || '0');
    const dimB = parseFloat(b.dimension.match(/[\d.]+/)?.[0] || '0');
    return dimA - dimB;
  });
}

/**
 * Searches fractals by name or description
 */
export function searchFractals(
  fractals: CanonicalFractal[],
  query: string
): CanonicalFractal[] {
  const lowerQuery = query.toLowerCase();
  return fractals.filter(f =>
    f.name.toLowerCase().includes(lowerQuery) ||
    f.englishName.toLowerCase().includes(lowerQuery) ||
    f.description.toLowerCase().includes(lowerQuery) ||
    f.generatorRule.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Gets unique categories from fractal list
 */
export function getUniqueCategories(fractals: CanonicalFractal[]): string[] {
  return [...new Set(fractals.map(f => f.category))];
}

/**
 * Groups fractals by category
 */
export function groupByCategory(
  fractals: CanonicalFractal[]
): Record<string, CanonicalFractal[]> {
  return fractals.reduce((acc, fractal) => {
    if (!acc[fractal.category]) {
      acc[fractal.category] = [];
    }
    acc[fractal.category].push(fractal);
    return acc;
  }, {} as Record<string, CanonicalFractal[]>);
}

/**
 * Validates engine preset has required fields
 */
export function validateEnginePreset(preset: any): boolean {
  return preset && typeof preset === 'object' && preset.type;
}

/**
 * Creates a safe fractal ID from a name
 */
export function createFractalId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Calculates fractal complexity score based on dimension and iteration count
 */
export function calculateComplexityScore(fractal: CanonicalFractal): number {
  const dim = parseFloat(fractal.dimension.match(/[\d.]+/)?.[0] || '1');
  let complexity = dim * 10; // Base score from dimension
  
  // Bonus for complex operations
  if (fractal.enginePreset.hybridType) complexity += 5;
  if (fractal.enginePreset.compositeOp) complexity += 3;
  
  return Math.round(complexity * 100) / 100;
}
