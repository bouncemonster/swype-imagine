/**
 * Math Validation Utilities
 * Validate mathematical operations in fractal rendering pipeline
 */

import { renderDiagnostics } from '../engine/RenderDiagnostics';

/**
 * Validate a scalar result from shader calculations
 */
export function validateScalar(
  value: number,
  context: string,
  position?: [number, number, number],
  expectedRange?: [number, number]
): boolean {
  if (isNaN(value)) {
    renderDiagnostics.log('error', 'math', `NaN in scalar: ${context}`, { value, position });
    return false;
  }
  
  if (!isFinite(value)) {
    renderDiagnostics.log('error', 'math', `Infinity in scalar: ${context}`, { value, position });
    return false;
  }
  
  if (expectedRange) {
    const [min, max] = expectedRange;
    if (value < min || value > max) {
      renderDiagnostics.log('warn', 'math', `Scalar out of range: ${context}`, { 
        value, 
        position, 
        expectedRange 
      });
      return false;
    }
  }
  
  return true;
}

/**
 * Performance monitoring wrapper
 */
export function measurePerformance<T>(
  fn: () => T,
  operationName: string
): { result: T; duration: number } {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  
  if (duration > 16) { // More than one frame
    renderDiagnostics.log('warn', 'performance', `Slow operation: ${operationName}`, { duration });
  }
  
  return { result, duration };
}
