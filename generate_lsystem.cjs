// Script to generate all 50 L-System variants
const fs = require('fs');

let glsl = `/**
 * L-System Variations 1-50 for WebGL2 Shaders
 * DIVERSE BRANCHING ALGORITHMS
 */

export const LSYSTEM_VARIATIONS_GLSL = \`
// ===================================================================
// L-System Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Binary Tree
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    z = z * scale;
  }
  
  return length(z) * pow(scale, -float(iters));
}

`;

// Generate variants 2-50
for (let n = 2; n <= 50; n++) {
  const technique = (n - 2) % 10;
  
  if (technique === 0) {
    // Fractal Plant
    glsl += `
// Variant ${n}: Fractal Plant
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.3 + n * 0.03).toFixed(2)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - ${(0.4 + n * 0.01).toFixed(2)};
    } else {
      z.z = z.z - ${(0.4 + n * 0.015).toFixed(2)};
    }
    
    z = z * ${(1.7 + n * 0.02).toFixed(2)};
    angle += ${(0.05 + n * 0.005).toFixed(3)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 1) {
    // Koch Curve
    glsl += `
// Variant ${n}: Koch Curve
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = ${(0.2 + n * 0.01).toFixed(2)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += ${(0.3 + n * 0.015).toFixed(2)};
    }
    
    z = z * ${(2.5 + n * 0.05).toFixed(2)};
    z = fract(z) - 0.5;
  }
  
  return length(z) * ${(1.0 / (2.5 + n * 0.05)).toFixed(3)};
}
`;
  } else if (technique === 2) {
    // Dragon Curve
    glsl += `
// Variant ${n}: Dragon Curve
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.5 + n * 0.04).toFixed(2)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > ${(n * 0.02).toFixed(2)}) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * ${(1.3 + n * 0.02).toFixed(2)};
    z.x = z.x - ${(0.3 + n * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 3) {
    // Sierpinski
    glsl += `
// Variant ${n}: Sierpinski
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < ${(-0.2 + n * 0.015).toFixed(2)}) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < ${(-0.2 + n * 0.02).toFixed(2)}) {
      z.xz = -z.zx;
    }
    
    z = z * ${(1.9 + n * 0.025).toFixed(2)};
    z = abs(z) - ${(0.8 + n * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.25;
}
`;
  } else if (technique === 4) {
    // Hilbert Curve
    glsl += `
// Variant ${n}: Hilbert Curve
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * ${(0.4 + n * 0.01).toFixed(2)};
    z.y = z.y - sign(z.y) * ${(0.4 + n * 0.015).toFixed(2)};
    z.z = z.z - sign(z.z) * ${(0.4 + n * 0.02).toFixed(2)};
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * ${(1.8 + n * 0.03).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 5) {
    // Barnsley Fern
    glsl += `
// Variant ${n}: Barnsley Fern
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * ${(10.0 + n).toFixed(1)}) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * ${(0.1 + n * 0.005).toFixed(3)};
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + ${(1.4 + n * 0.025).toFixed(2)};
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + ${(1.2 + n * 0.02).toFixed(2)};
    }
    
    z = z * ${(0.4 + n * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 6) {
    // Spiral Phyllotaxis
    glsl += `
// Variant ${n}: Spiral Phyllotaxis
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = ${(2.0 + n * 0.05).toFixed(2)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * ${(0.2 + n * 0.01).toFixed(2)};
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * ${(0.08 + n * 0.005).toFixed(3)};
    
    z = z * ${(1.1 + n * 0.015).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 7) {
    // Cube Subdivision
    glsl += `
// Variant ${n}: Cube Subdivision
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = ${(0.1 + n * 0.005).toFixed(3)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * ${(2.5 + n * 0.05).toFixed(2)};
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * ${(1.0 / (2.5 + n * 0.05)).toFixed(3)};
}
`;
  } else if (technique === 8) {
    // Apical Dominance
    glsl += `
// Variant ${n}: Apical Dominance
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = ${(0.6 + n * 0.015).toFixed(2)};
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < ${(0.2 + n * 0.01).toFixed(2)} && abs(z.z) < ${(0.2 + n * 0.015).toFixed(2)}) {
      z.y = z.y + ${(0.8 + n * 0.025).toFixed(2)} * dominance;
    } else {
      z.y = z.y + ${(0.2 + n * 0.01).toFixed(2)} * (1.0 - dominance);
    }
    
    z.x = z.x * ${(1.3 + n * 0.02).toFixed(2)};
    z.z = z.z * ${(1.3 + n * 0.025).toFixed(2)};
    
    z = z * ${(0.6 + n * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else {
    // Binary Tree with different angle
    glsl += `
// Variant ${n}: Binary Tree
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.3 + n * 0.05).toFixed(2)};
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * ${(1.8 + n * 0.025).toFixed(2)};
  }
  
  return length(z) * pow(${(1.8 + n * 0.025).toFixed(2)}, -float(iters));
}
`;
  }
}

glsl += '`;\n';

fs.writeFileSync('src/shaders/modules/lsystemVariations.ts', glsl);
console.log('Generated 50 L-System variants');
