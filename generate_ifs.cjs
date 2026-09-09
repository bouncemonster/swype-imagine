// Script to generate all 50 IFS variants
const fs = require('fs');

let glsl = `/**
 * IFS Variations 1-50 for WebGL2 Shaders
 * DIVERSE FOLDING TECHNIQUES
 */

export const IFS_VARIATIONS_GLSL = \`
// ===================================================================
// IFS Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Kaleidoscopic IFS
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.5, 1.5, 1.5);
  }
  
  return length(z) * pow(scale, -float(iters));
}

`;

// Generate variants 2-50
for (let n = 2; n <= 50; n++) {
  const technique = (n - 2) % 10;
  
  if (technique === 0) {
    // Sierpinski-style
    glsl += `
// Variant ${n}: Sierpinski IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < ${(0.5 + n * 0.02).toFixed(2)}) z.xy = -z.yx;
    if (z.x + z.z < ${(0.5 + n * 0.03).toFixed(2)}) z.xz = -z.zx;
    if (z.y + z.z < ${(0.5 + n * 0.04).toFixed(2)}) z.yz = -z.zy;
    
    z = z * ${(1.8 + n * 0.03).toFixed(2)} - vec3(${(1.0 + n * 0.02).toFixed(2)}, ${(1.0 + n * 0.03).toFixed(2)}, ${(1.0 + n * 0.04).toFixed(2)});
  }
  
  return length(z) * 0.25;
}
`;
  } else if (technique === 1) {
    // Menger-style
    glsl += `
// Variant ${n}: Menger IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * ${(2.5 + n * 0.05).toFixed(2)} - vec3(${(2.0 + n * 0.03).toFixed(2)}, ${(2.0 + n * 0.04).toFixed(2)}, ${(2.0 + n * 0.05).toFixed(2)});
  }
  
  return length(z) * ${(1.0 / (2.5 + n * 0.05)).toFixed(3)};
}
`;
  } else if (technique === 2) {
    // Dragon-style
    glsl += `
// Variant ${n}: Dragon IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.5 + n * 0.05).toFixed(2)};
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * ${(1.3 + n * 0.02).toFixed(2)} - vec3(${(0.8 + n * 0.015).toFixed(2)}, ${(0.8 + n * 0.02).toFixed(2)}, 0.0);
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 3) {
    // Vicsek-style
    glsl += `
// Variant ${n}: Vicsek IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(${(0.8 + n * 0.02).toFixed(2)}, ${(0.8 + n * 0.03).toFixed(2)}, ${(0.8 + n * 0.04).toFixed(2)});
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * ${(2.8 + n * 0.04).toFixed(2)};
  }
  
  return length(z) * ${(1.0 / (2.8 + n * 0.04)).toFixed(3)};
}
`;
  } else if (technique === 4) {
    // Apollonian-style
    glsl += `
// Variant ${n}: Apollonian IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < ${(0.3 + n * 0.01).toFixed(2)}) {
      z = z / r2 - vec3(${(1.5 + n * 0.03).toFixed(2)}, 0.0, 0.0);
    } else {
      z = z * ${(1.8 + n * 0.025).toFixed(2)} - vec3(${(1.0 + n * 0.02).toFixed(2)}, ${(1.0 + n * 0.03).toFixed(2)}, ${(1.0 + n * 0.04).toFixed(2)});
    }
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 5) {
    // Tetrix-style
    glsl += `
// Variant ${n}: Tetrix IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < ${(n * 0.05).toFixed(2)}) {
      z = -z;
    }
    
    z = z * ${(1.9 + n * 0.02).toFixed(2)} - vec3(${(1.0 + n * 0.015).toFixed(2)}, ${(1.0 + n * 0.02).toFixed(2)}, ${(1.0 + n * 0.025).toFixed(2)});
  }
  
  return length(z) * 0.25;
}
`;
  } else if (technique === 6) {
    // Cubic-style
    glsl += `
// Variant ${n}: Cubic IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * ${(1.6 + n * 0.03).toFixed(2)} - vec3(${(1.3 + n * 0.02).toFixed(2)}, ${(1.3 + n * 0.025).toFixed(2)}, ${(1.3 + n * 0.03).toFixed(2)});
    
    if (z.x > ${(0.8 + n * 0.015).toFixed(2)}) z.x = ${(1.6 + n * 0.03).toFixed(2)} - z.x;
    if (z.y > ${(0.8 + n * 0.02).toFixed(2)}) z.y = ${(1.6 + n * 0.04).toFixed(2)} - z.y;
    if (z.z > ${(0.8 + n * 0.025).toFixed(2)}) z.z = ${(1.6 + n * 0.05).toFixed(2)} - z.z;
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 7) {
    // Spiral-style
    glsl += `
// Variant ${n}: Spiral IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.3 + n * 0.04).toFixed(2)};
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * ${(1.7 + n * 0.025).toFixed(2)} - vec3(${(0.9 + n * 0.015).toFixed(2)}, ${(0.9 + n * 0.02).toFixed(2)}, ${(0.9 + n * 0.025).toFixed(2)});
    angle += ${(0.05 + n * 0.005).toFixed(3)};
  }
  
  return length(z) * 0.5;
}
`;
  } else if (technique === 8) {
    // Plasma-style
    glsl += `
// Variant ${n}: Plasma IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(${(0.4 + n * 0.015).toFixed(2)}, ${(0.4 + n * 0.02).toFixed(2)}, ${(0.4 + n * 0.025).toFixed(2)});
    
    float r = length(z);
    if (r < ${(0.8 + n * 0.01).toFixed(2)}) {
      z = z / (r * r);
    }
    
    z = z * ${(1.9 + n * 0.02).toFixed(2)};
  }
  
  return length(z) * 0.5;
}
`;
  } else {
    // Kaleidoscopic with different parameters
    glsl += `
// Variant ${n}: Kaleidoscopic IFS
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = ${(1.8 + n * 0.03).toFixed(2)};
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(${(1.2 + n * 0.015).toFixed(2)}, ${(1.2 + n * 0.02).toFixed(2)}, ${(1.2 + n * 0.025).toFixed(2)});
  }
  
  return length(z) * pow(scale, -float(iters));
}
`;
  }
}

glsl += '`;\n';

fs.writeFileSync('src/shaders/modules/ifsVariations.ts', glsl);
console.log('Generated 50 IFS variants');
