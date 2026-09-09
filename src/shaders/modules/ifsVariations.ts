/**
 * IFS Variations 1-50 for WebGL2 Shaders
 * DIVERSE MATHEMATICAL APPROACHES - Kaleidoscopic, Sierpinski, Menger, Dragon, etc.
 */

export const IFS_VARIATIONS_GLSL = `
// ===================================================================
// IFS Variations 1-50 - DIVERSE APPROACHES
// Each variant uses DIFFERENT folding and iteration techniques
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

// Variant 2: Sierpinski Tetrahedron IFS
float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.0) z.xy = -z.yx;
    if (z.x + z.z < 0.0) z.xz = -z.zx;
    if (z.y + z.z < 0.0) z.yz = -z.zy;
    
    z = z * 2.0 - vec3(1.0, 1.0, 1.0);
  }
  
  return length(z) * 0.25;
}

// Variant 3: Menger Sponge IFS
float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 3.0 - vec3(2.0, 2.0, 2.0);
  }
  
  return length(z) * 0.33;
}

// Variant 4: Dragon Curve IFS
float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.785398; // pi/4
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    // Rotate
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.414 - vec3(1.0, 1.0, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 5: Vicsek Fractal IFS
float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.0, 1.0, 1.0);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.0;
  }
  
  return length(z) * 0.33;
}

// Variant 6: Apollonian Gasket IFS
float mapIFSVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.5) {
      z = z / r2 - vec3(2.0, 0.0, 0.0);
    } else {
      z = z * 2.0 - vec3(1.0, 1.0, 1.0);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 7: Tetrix (3D Sierpinski) IFS
float mapIFSVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    // Tetrahedron folding
    if (z.x + z.y + z.z < 0.0) {
      z = -z;
    }
    
    z = z * 2.0 - vec3(1.0, 1.0, 1.0);
  }
  
  return length(z) * 0.25;
}

// Variant 8: Cubic IFS
float mapIFSVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.0 - vec3(1.5, 1.5, 1.5);
    
    if (z.x > 1.0) z.x = 2.0 - z.x;
    if (z.y > 1.0) z.y = 2.0 - z.y;
    if (z.z > 1.0) z.z = 2.0 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Spiral IFS
float mapIFSVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.5;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    // Spiral rotation
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.0 - vec3(1.0, 1.0, 1.0);
    angle += 0.1;
  }
  
  return length(z) * 0.5;
}

// Variant 10: Fractal Plasma IFS
float mapIFSVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.5, 0.5, 0.5);
    
    float r = length(z);
    if (r < 1.0) {
      z = z / (r * r);
    }
    
    z = z * 2.0;
  }
  
  return length(z) * 0.5;
}

// Variants 11-50: Use DIFFERENT IFS techniques
${Array.from({length: 40}, (_, i) => {
  const n = i + 11;
  const technique = i % 8;
  
  if (technique === 0) {
    // Kaleidoscopic with different scale
    const scale = 1.8 + (i % 10) * 0.1;
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * ${scale.toFixed(1)} - vec3(${1.2 + i * 0.02}, ${1.2 + i * 0.03}, ${1.2 + i * 0.04});
  }
  
  return length(z) * pow(${scale.toFixed(1)}, -float(iters));
}`;
  } else if (technique === 1) {
    // Sierpinski-style with different conditions
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    if (z.x + z.y < ${-0.5 + i * 0.05}) z.xy = -z.yx;
    if (z.x + z.z < ${-0.5 + i * 0.04}) z.xz = -z.zx;
    if (z.y + z.z < ${-0.5 + i * 0.03}) z.yz = -z.zy;
    
    z = z * ${1.8 + i * 0.05} - vec3(${1.0 + i * 0.02}, ${1.0 + i * 0.03}, ${1.0 + i * 0.04});
  }
  
  return length(z) * 0.25;
}`;
  } else if (technique === 2) {
    // Menger-style with different multipliers
    const mult = 2.5 + (i % 5) * 0.5;
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * ${mult.toFixed(1)} - vec3(${mult - 0.5}, ${mult - 0.5}, ${mult - 0.5});
  }
  
  return length(z) * ${(1.0 / mult).toFixed(2)};
}`;
  } else if (technique === 3) {
    // Dragon-style with rotation
    const angle = 0.5 + (i % 10) * 0.1;
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${angle.toFixed(2)};
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * ${1.3 + i * 0.03} - vec3(${0.8 + i * 0.02}, ${0.8 + i * 0.03}, 0.0);
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 4) {
    // Apollonian-style with inversion
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < ${0.3 + i * 0.02}) {
      z = z / r2 - vec3(${1.5 + i * 0.05}, 0.0, 0.0);
    } else {
      z = z * ${1.8 + i * 0.04} - vec3(${1.0 + i * 0.02}, ${1.0 + i * 0.03}, ${1.0 + i * 0.04});
    }
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 5) {
    // Spiral IFS with different rotation
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.3 + i * 0.08).toFixed(2)};
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * ${1.7 + i * 0.05} - vec3(${0.9 + i * 0.02}, ${0.9 + i * 0.03}, ${0.9 + i * 0.04});
    angle += ${(0.05 + i * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 6) {
    // Cubic IFS with different folding
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    z = abs(z);
    z = z * ${1.6 + i * 0.06} - vec3(${1.3 + i * 0.02}, ${1.3 + i * 0.03}, ${1.3 + i * 0.04});
    
    if (z.x > ${0.8 + i * 0.02}) z.x = ${1.6 + i * 0.04} - z.x;
    if (z.y > ${0.8 + i * 0.03}) z.y = ${1.6 + i * 0.06} - z.y;
    if (z.z > ${0.8 + i * 0.04}) z.z = ${1.6 + i * 0.08} - z.z;
  }
  
  return length(z) * 0.5;
}`;
  } else {
    // Fractal Plasma with different parameters
    return `
float mapIFSVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 32; j++) {
    if (j >= iters) break;
    
    z = abs(z) - vec3(${0.4 + i * 0.02}, ${0.4 + i * 0.03}, ${0.4 + i * 0.04});
    
    float r = length(z);
    if (r < ${0.8 + i * 0.02}) {
      z = z / (r * r);
    }
    
    z = z * ${1.9 + i * 0.03};
  }
  
  return length(z) * 0.5;
}`;
  }
}).join('\n')}
`;
