/**
 * Math Validation Utilities
 * Validate mathematical operations in fractal rendering pipeline
 */

import { renderDiagnostics } from '../engine/RenderDiagnostics';

/**
 * Validate a vec3 result from shader calculations
 */
export function validateVec3(
  vec: [number, number, number], 
  context: string,
  position?: [number, number, number]
): boolean {
  const [x, y, z] = vec;
  
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    renderDiagnostics.log('error', 'math', `NaN in vec3: ${context}`, { vec, position });
    return false;
  }
  
  if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
    renderDiagnostics.log('error', 'math', `Infinity in vec3: ${context}`, { vec, position });
    return false;
  }
  
  // Check for unusually large values
  const maxVal = Math.max(Math.abs(x), Math.abs(y), Math.abs(z));
  if (maxVal > 1e6) {
    renderDiagnostics.log('warn', 'math', `Large vec3 values: ${context}`, { vec, position, maxVal });
  }
  
  return true;
}

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
 * Validate matrix operations
 */
export function validateMatrix(
  matrix: number[],
  context: string,
  expectedSize: number = 16
): boolean {
  if (matrix.length !== expectedSize) {
    renderDiagnostics.log('error', 'math', `Matrix size mismatch: ${context}`, { 
      actual: matrix.length, 
      expected: expectedSize 
    });
    return false;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    if (isNaN(matrix[i]) || !isFinite(matrix[i])) {
      renderDiagnostics.log('error', 'math', `Invalid matrix element: ${context}`, { 
        index: i, 
        value: matrix[i] 
      });
      return false;
    }
  }
  
  return true;
}

/**
 * Validate fractal iteration results
 */
export function validateFractalIteration(
  iteration: number,
  maxIterations: number,
  orbitValue: number,
  position: [number, number, number]
): boolean {
  if (iteration < 0 || iteration > maxIterations) {
    renderDiagnostics.log('error', 'math', 'Invalid iteration count', { 
      iteration, 
      maxIterations, 
      position 
    });
    return false;
  }
  
  if (isNaN(orbitValue) || !isFinite(orbitValue)) {
    renderDiagnostics.log('error', 'math', 'Invalid orbit value', { 
      iteration, 
      orbitValue, 
      position 
    });
    return false;
  }
  
  if (orbitValue > 1e10) {
    renderDiagnostics.log('warn', 'math', 'Orbit value diverging rapidly', { 
      iteration, 
      orbitValue, 
      position 
    });
  }
  
  return true;
}

/**
 * Validate SDF distance field
 */
export function validateSDFDistance(
  distance: number,
  position: [number, number, number],
  fractalType: string
): boolean {
  if (isNaN(distance)) {
    renderDiagnostics.log('error', 'math', 'SDF returned NaN', { position, fractalType });
    return false;
  }
  
  if (!isFinite(distance)) {
    renderDiagnostics.log('error', 'math', 'SDF returned Infinity', { position, fractalType });
    return false;
  }
  
  // SDF should typically be within reasonable bounds
  if (Math.abs(distance) > 100) {
    renderDiagnostics.log('warn', 'math', 'SDF distance unusually large', { 
      distance, 
      position, 
      fractalType 
    });
  }
  
  return true;
}

/**
 * Validate normal vector
 */
export function validateNormal(
  normal: [number, number, number],
  position: [number, number, number]
): boolean {
  if (!validateVec3(normal, 'normal', position)) {
    return false;
  }
  
  const length = Math.sqrt(normal[0] ** 2 + normal[1] ** 2 + normal[2] ** 2);
  
  if (Math.abs(length - 1.0) > 0.01) {
    renderDiagnostics.log('warn', 'math', 'Normal not normalized', { 
      normal, 
      position, 
      length 
    });
    return false;
  }
  
  return true;
}

/**
 * Validate color values
 */
export function validateColor(
  color: [number, number, number],
  context: string
): boolean {
  const [r, g, b] = color;
  
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    renderDiagnostics.log('error', 'math', `NaN in color: ${context}`, { color });
    return false;
  }
  
  if (!isFinite(r) || !isFinite(g) || !isFinite(b)) {
    renderDiagnostics.log('error', 'math', `Infinity in color: ${context}`, { color });
    return false;
  }
  
  // Colors can be outside [0,1] for HDR, but warn if extremely large
  const maxVal = Math.max(r, g, b);
  if (maxVal > 100) {
    renderDiagnostics.log('warn', 'math', `Color values extremely large: ${context}`, { 
      color, 
      maxVal 
    });
  }
  
  return true;
}

/**
 * Validate transformation matrix
 */
export function validateTransform(
  matrix: number[],
  context: string
): boolean {
  if (!validateMatrix(matrix, context)) {
    return false;
  }
  
  // Check determinant for invertibility (for 4x4 matrix)
  if (matrix.length === 16) {
    // Simplified determinant check using diagonal product as heuristic
    // Note: Full 4x4 determinant requires 24-term cofactor expansion
    const diagProduct = matrix[0] * matrix[5] * matrix[10] * matrix[15];
    // Also check if any diagonal element is near-zero (singular indicator)
    const anyZeroDiag = Math.abs(matrix[0]) < 1e-10 || 
                        Math.abs(matrix[5]) < 1e-10 || 
                        Math.abs(matrix[10]) < 1e-10 || 
                        Math.abs(matrix[15]) < 1e-10;
    if (Math.abs(diagProduct) < 1e-10 || anyZeroDiag) {
      renderDiagnostics.log('warn', 'math', `Transform may be singular: ${context}`, { matrix });
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
