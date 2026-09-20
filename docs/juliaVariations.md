# juliaVariations.ts

**110 lines | 50 Mandelbulb/Julia fractal variations in GLSL (kkrieger-compressed string data)**

## Purpose
Collection of 50 Julia/Mandelbulb fractal variations, parameterized into ONE base function plus a per-variant lookup (compressed from the original ~1300-line per-variant form). Variants differ by power value, type modifier (Julia/Burning Ship/Tricorn/Rotated), rotation offset, and Julia constant c. In the GLSL dispatch (`webglShaders.ts:3045`) this module serves fractal indices **141-190** (`mapJuliaVariant(..., ftype - 140)`).

## Export
```typescript
export const JULIA_VARIATIONS_GLSL: string
```
Single GLSL string containing `mapJuliaBase()` (parameterized core) and `mapJuliaVariant(p, t, phi, iters, idx)` (50-entry lookup, one line per variant).

## Core Algorithm (Mandelbulb)
All variants run through the same base function; `vtype`: 0=mandelbrot, 1=julia, 2=burningShip, 3=tricorn, 4=rotated:
```glsl
float mapJuliaBase(vec3 p, float t, float phi, int iters, float power, int vtype, float rot, vec3 c) {
  vec3 z = p;
  float dr = 1.0;  // Distance derivative
  float r = 0.0;

  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;  // Escape radius (raised from 2.0 for high powers)

    // Convert to polar (rotation folded into azimuth for vtype 4)
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + (vtype == 4 ? rot : 0.0);
    float zr = pow(r, power);

    // Raise to power + branch:
    //  vtype 3 (tricorn): conjugate (negate phiAngle*power), z += p
    //  vtype 2 (burning ship): z = abs(z) + p
    //  vtype 1 (julia): z += c, dr without +1.0
    //  vtype 0/4 (mandelbrot/rotated): z += p, dr = pow(r, power-1)*power*dr + 1.0
  }

  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);  // Distance estimation
}
```

## Variant Categories

### Standard Mandelbulb (vtype 0 — power variations)
- **Variant 1**: Power 8.0 (classic Mandelbulb)
- **Variant 2**: Power 4.20
- **Variant 3**: Power 12.60
- **Variant 8**: Power 6.80
- **Variant 9**: Power 14.20
- **Variant 14**: Power 8.30
- **Variant 15**: Power 15.80
- **Variant 20**: Power 9.80
- **Variant 21**: Power 17.40
- **Variant 26**: Power 11.30
- **Variant 27**: Power 19.00
- **Variant 32**: Power 12.80
- **Variant 33**: Power 20.60
- **Variant 38**: Power 14.30
- **Variant 39**: Power 22.20
- **Variant 44**: Power 15.80
- **Variant 45**: Power 23.80
- **Variant 49**: Power 10.90
- **Variant 50**: Power 31.00

### Julia Sets (vtype 1 — constant c, derivative without +1.0)
- **Variant 4**: c = (0.340, 0.320, 0.0), Power 8.0
- **Variant 10**: c = (-0.7, 0.27015, 0.0), Power 10.0
- **Variant 16**: c = (0.340, 0.320, 0.0), Power 11.5
- **Variant 22**: c = (-0.7, 0.27015, 0.0), Power 13.0
- **Variant 28**: c = (0.340, 0.320, 0.0), Power 14.5
- **Variant 34**: c = (-0.7, 0.27015, 0.0), Power 16.0
- **Variant 40**: c = (0.340, 0.320, 0.0), Power 17.5
- **Variant 46**: c = (-0.7, 0.27015, 0.0), Power 19.0

### Burning Ship (vtype 2 — `z = abs(z) + p`)
- **Variant 5**: Power 8.75
- **Variant 11**: Power 10.25
- **Variant 17**: Power 11.75
- **Variant 23**: Power 13.25
- **Variant 29**: Power 14.75
- **Variant 35**: Power 16.25
- **Variant 41**: Power 17.75
- **Variant 47**: Power 19.25

### Tricorn (vtype 3 — conjugate: negated imaginary angle)
- **Variant 6**: Power 8.60
- **Variant 12**: Power 10.10
- **Variant 18**: Power 11.60
- **Variant 24**: Power 13.10
- **Variant 30**: Power 14.60
- **Variant 36**: Power 16.10
- **Variant 42**: Power 17.60
- **Variant 48**: Power 19.10

### Rotated Mandelbulb (vtype 4 — rotation added to azimuthal angle)
- **Variant 7**: Power 9.40, rot = 0.240
- **Variant 13**: Power 10.90, rot = 0.290
- **Variant 19**: Power 12.40, rot = 0.340
- **Variant 25**: Power 13.90, rot = 0.390
- **Variant 31**: Power 15.40, rot = 0.440
- **Variant 37**: Power 16.90, rot = 0.490
- **Variant 43**: Power 18.40, rot = 0.540

## Key Mathematical Concepts

### Distance Estimation
```glsl
return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
```
Standard Mandelbulb distance estimation formula (clamp guards prevent log(0)/division-by-zero).

### Polar Conversion
```glsl
float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));  // Polar angle (clamped)
float phiAngle = atan(z.y, z.x) + (vtype == 4 ? rot : 0.0); // Azimuthal angle (+ rotation for vtype 4)
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
1. **50 variants**: All follow same core algorithm (one base function + lookup table)
2. **Power range**: 4.2 to 31.0
3. **Max iterations**: base loop capped at 32, broken early by `iters` (dispatch clamps `u_iterations` to 6-64 globally, webglShaders.ts:3140)
4. **Escape radius**: 4.0 uniformly (raised from 2.0 to handle high powers; no per-variant escape anymore)
5. **Distance estimation**: All use same formula
6. **GLSL only**: No WGSL version in this file
7. **Parameterized structure**: one lookup line per variant (`idx == N → mapJuliaBase(..., power, vtype, rot, c)`), not ~27 lines each
8. **Parameters**: `t` (time) and `phi` are unused in most variants
9. **Julia vs Mandelbrot**: Julia uses constant `c`, Mandelbrot uses point `p`
10. **Transformations**: abs, conjugate, rotation applied before/after power

## Dependencies
- Pure GLSL code
- No imports
- Used by webglShaders.ts
