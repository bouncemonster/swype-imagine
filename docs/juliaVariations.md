# juliaVariations.ts

**1300 lines | 50 Mandelbulb/Julia fractal variations in GLSL**

## Purpose
Collection of 50 Julia/Mandelbulb fractal variations with different power values, escape radii, and transformations. All use the same core Mandelbulb algorithm with variations in parameters.

## Export
```typescript
export const JULIA_VARIATIONS_GLSL: string
```
Single GLSL string containing all 50 variant functions.

## Core Algorithm (Mandelbulb)
All variants follow the same pattern:
```glsl
float mapJuliaVariantN(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;  // Distance derivative
  float r = 0.0;
  float power = X.XX;  // Variant-specific
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;  // Escape radius
    
    // Convert to polar
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Raise to power
    float zr = pow(r, power);
    
    // Convert back to cartesian
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;  // or z += c for Julia sets
    
    // Update distance estimation
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;  // Distance estimation formula
}
```

## Variant Categories

### Standard Mandelbulb (Power variations)
Variants with different power values:
- **Variant 1**: Power 8.0 (classic Mandelbulb)
- **Variant 2**: Power 4.20
- **Variant 3**: Power 12.60
- **Variant 9**: Power 6.90
- **Variant 10**: Power 19.00
- **Variant 12**: Power 5.20
- **Variant 13**: Power 14.60
- **Variant 19**: Power 7.90
- **Variant 20**: Power 22.00
- **Variant 22**: Power 6.20
- **Variant 23**: Power 16.60
- **Variant 29**: Power 8.90
- **Variant 30**: Power 25.00
- **Variant 32**: Power 7.20
- **Variant 33**: Power 18.60
- **Variant 39**: Power 9.90
- **Variant 40**: Power 28.00
- **Variant 42**: Power 8.20
- **Variant 43**: Power 20.60
- **Variant 49**: Power 10.90
- **Variant 50**: Power 31.00

### Julia Sets (Constant c)
Variants using constant `c` instead of point `p`:
- **Variant 4**: c = (0.340, 0.320, 0.0), Power 8.0
- **Variant 14**: c = (0.440, 0.370, 0.0), Power 8.0
- **Variant 24**: c = (0.540, 0.420, 0.0), Power 8.0
- **Variant 34**: c = (0.640, 0.470, 0.0), Power 8.0
- **Variant 44**: c = (0.740, 0.520, 0.0), Power 8.0

### Burning Ship (abs transformation)
Variants with `z = abs(z) + p`:
- **Variant 5**: Power 8.75
- **Variant 15**: Power 10.25
- **Variant 25**: Power 11.75
- **Variant 35**: Power 13.25
- **Variant 45**: Power 14.75

### Tricorn (Conjugate)
Variants with negated imaginary parts:
- **Variant 6**: Power 8.60
- **Variant 16**: Power 9.60
- **Variant 26**: Power 10.60
- **Variant 36**: Power 11.60
- **Variant 46**: Power 12.60

### Rotated Mandelbulb
Variants with rotation offset:
- **Variant 7**: Power 9.40, rot = 0.240
- **Variant 17**: Power 11.40, rot = 0.440
- **Variant 27**: Power 13.40, rot = 0.640
- **Variant 37**: Power 15.40, rot = 0.840
- **Variant 47**: Power 17.40, rot = 1.040

### Folded Mandelbulb (abs before transform)
Variants with `z = abs(z)` before transformation:
- **Variant 8**: Power 9.20
- **Variant 18**: Power 10.70
- **Variant 28**: Power 12.20
- **Variant 38**: Power 13.70
- **Variant 48**: Power 15.20

### Custom Escape Radius
Variants with non-standard escape radius:
- **Variant 11**: Power 9.10, escapeR = 2.55
- **Variant 21**: Power 10.10, escapeR = 3.05
- **Variant 31**: Power 11.10, escapeR = 3.55
- **Variant 41**: Power 12.10, escapeR = 4.05

## Key Mathematical Concepts

### Distance Estimation
```glsl
return 0.5 * log(r) * r / dr;
```
Standard Mandelbulb distance estimation formula.

### Polar Conversion
```glsl
float theta = acos(z.z / r);      // Polar angle
float phiAngle = atan(z.y, z.x);  // Azimuthal angle
```

### Power Transformation
```glsl
z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
              sin(theta * power) * sin(phiAngle * power), 
              cos(theta * power));
```

### Distance Derivative Update
```glsl
dr = pow(r, power - 1.0) * power * dr + 1.0;  // Mandelbrot
dr = pow(r, power - 1.0) * power * dr;        // Julia (no +1.0)
```

## Critical Notes
1. **50 variants**: All follow same core algorithm
2. **Power range**: 4.2 to 31.0
3. **Max iterations**: 32 (controlled by `iters` parameter)
4. **Escape radius**: 2.0 (default), some variants use 2.55-4.05
5. **Distance estimation**: All use same formula
6. **GLSL only**: No WGSL version in this file
7. **Repetitive structure**: Each variant ~27 lines
8. **Parameters**: `t` (time) and `phi` are unused in most variants
9. **Julia vs Mandelbrot**: Julia uses constant `c`, Mandelbrot uses point `p`
10. **Transformations**: abs, conjugate, rotation applied before/after power

## Dependencies
- Pure GLSL code
- No imports
- Used by webglShaders.ts
