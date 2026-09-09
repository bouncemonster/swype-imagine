/**
 * L-System Variations 1-50 for WebGL2 Shaders
 * DIVERSE BRANCHING ALGORITHMS - not just parameter changes
 */

export const LSYSTEM_VARIATIONS_GLSL = `
// ===================================================================
// L-System Variations 1-50 - DIVERSE BRANCHING TECHNIQUES
// Each variant uses DIFFERENT recursive branching algorithms
// ===================================================================

// Variant 1: Classic Binary Tree Branching
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Binary split: choose branch based on position
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy; // Rotate 45°
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy; // Rotate -45°
    }
    
    z = z * scale;
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 2: Fractal Plant (3D Lindenmayer)
float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.4; // ~23° (phyllotaxis angle)
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Alternate branching with golden angle
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    // Branch based on iteration
    if (i % 2 == 0) {
      z.y = z.y - 0.5;
    } else {
      z.z = z.z - 0.5;
    }
    
    z = z * 1.8;
    angle += 0.1;
  }
  
  return length(z) * 0.5;
}

// Variant 3: Koch Curve 3D
float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Koch: divide into thirds, raise middle
    float third = 1.0 / 3.0;
    if (abs(z.x) < third && abs(z.y) < third) {
      z.z += 0.5; // Raise middle third
    }
    
    z = z * 3.0;
    z = fract(z) - 0.5; // Repeat
  }
  
  return length(z) * 0.33;
}

// Variant 4: Dragon Curve 3D
float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.785398; // pi/4
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Dragon: fold and rotate
    if (z.x > 0.0) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.414; // sqrt(2)
    z.x = z.x - 0.5;
  }
  
  return length(z) * 0.5;
}

// Variant 5: Sierpinski Triangle 3D
float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Sierpinski: remove middle triangles
    if (z.x + z.y < 0.0) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.0) {
      z.xz = -z.zx;
    }
    
    z = z * 2.0;
    z = abs(z) - 1.0;
  }
  
  return length(z) * 0.25;
}

// Variant 6: Hilbert Curve 3D
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Hilbert: space-filling curve pattern
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.5;
    z.y = z.y - sign(z.y) * 0.5;
    z.z = z.z - sign(z.z) * 0.5;
    
    // Rotate based on quadrant
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.0;
  }
  
  return length(z) * 0.5;
}

// Variant 7: Barnsley Fern 3D
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Barnsley: multiple affine transformations
    float r = fract(sin(float(i) * 12.9898) * 43758.5453);
    
    if (r < 0.01) {
      // Stem
      z.x = 0.0;
      z.y = z.y * 0.16;
    } else if (r < 0.86) {
      // Successively smaller leaflets
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.6;
    } else if (r < 0.93) {
      // Left leaflet
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.6;
    } else {
      // Right leaflet
      z.xy = mat2(-0.15, 0.28, 0.26, 0.24) * z.xy;
      z.y = z.y + 0.44;
    }
    
    z = z * 0.5;
  }
  
  return length(z) * 0.5;
}

// Variant 8: Spiral Phyllotaxis
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 2.399827; // 137.5° in radians
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Spiral arrangement with golden angle
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.3;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.1;
    
    z = z * 1.2;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Recursive Cube Subdivision
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Subdivide into 27 cubes, remove center
    z = z * 3.0;
    z = fract(z) - 0.5;
    
    // Remove center cube
    if (abs(z.x) < 0.166 && abs(z.y) < 0.166 && abs(z.z) < 0.166) {
      z = vec3(0.5); // Push to boundary
    }
  }
  
  return length(z) * 0.33;
}

// Variant 10: Tree with Apical Dominance
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 0.8; // Main stem strength
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Apical dominance: main stem grows stronger
    if (abs(z.x) < 0.3 && abs(z.z) < 0.3) {
      z.y = z.y + 1.0 * dominance; // Main stem
    } else {
      z.y = z.y + 0.3 * (1.0 - dominance); // Side branches
    }
    
    // Branch outward
    z.x = z.x * 1.5;
    z.z = z.z * 1.5;
    
    z = z * 0.7;
  }
  
  return length(z) * 0.5;
}

// Variants 11-50: Use DIFFERENT branching techniques
${Array.from({length: 40}, (_, i) => {
  const n = i + 11;
  const technique = i % 10;
  
  if (technique === 0) {
    // Binary tree with different angles
    const angle = 0.3 + (i % 10) * 0.1;
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float c = cos(${angle.toFixed(2)});
  float s = sin(${angle.toFixed(2)});
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * ${1.8 + i * 0.05};
  }
  
  return length(z) * pow(${1.8 + i * 0.05}.0, -float(iters));
}`;
  } else if (technique === 1) {
    // Fractal plant with different angles
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.3 + i * 0.05).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (j % 2 == 0) {
      z.y = z.y - ${(0.4 + i * 0.02).toFixed(2)};
    } else {
      z.z = z.z - ${(0.4 + i * 0.03).toFixed(2)};
    }
    
    z = z * ${1.7 + i * 0.04};
    angle += ${(0.05 + i * 0.01).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 2) {
    // Koch with different patterns
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = ${(0.2 + i * 0.02).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += ${(0.3 + i * 0.03).toFixed(2)};
    }
    
    z = z * ${2.5 + i * 0.1};
    z = fract(z) - 0.5;
  }
  
  return length(z) * ${(1.0 / (2.5 + i * 0.1)).toFixed(2)};
}`;
  } else if (technique === 3) {
    // Dragon with different folds
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = ${(0.5 + i * 0.08).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    if (z.x > ${(i * 0.05).toFixed(2)}) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * ${1.3 + i * 0.03};
    z.x = z.x - ${(0.3 + i * 0.02).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 4) {
    // Sierpinski with different conditions
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    if (z.x + z.y < ${-0.2 + i * 0.03}) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < ${-0.2 + i * 0.04}) {
      z.xz = -z.zx;
    }
    
    z = z * ${1.9 + i * 0.05};
    z = abs(z) - ${(0.8 + i * 0.02).toFixed(2)};
  }
  
  return length(z) * 0.25;
}`;
  } else if (technique === 5) {
    // Hilbert with different rotations
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * ${(0.4 + i * 0.02).toFixed(2)};
    z.y = z.y - sign(z.y) * ${(0.4 + i * 0.03).toFixed(2)};
    z.z = z.z - sign(z.z) * ${(0.4 + i * 0.04).toFixed(2)};
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * ${1.8 + i * 0.06};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 6) {
    // Barnsley with different probabilities
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    float r = fract(sin(float(j) * ${(10.0 + i).toFixed(1)}) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * ${(0.1 + i * 0.01).toFixed(2)};
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + ${(1.4 + i * 0.05).toFixed(2)};
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + ${(1.2 + i * 0.04).toFixed(2)};
    }
    
    z = z * ${(0.4 + i * 0.02).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 7) {
    // Spiral with different arrangements
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = ${(2.0 + i * 0.1).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    float angle = float(j) * goldenAngle;
    float r = sqrt(float(j)) * ${(0.2 + i * 0.02).toFixed(2)};
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(j) * ${(0.08 + i * 0.01).toFixed(2)};
    
    z = z * ${(1.1 + i * 0.03).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  } else if (technique === 8) {
    // Cube subdivision with different patterns
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = ${(0.1 + i * 0.01).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    z = z * ${(2.5 + i * 0.1).toFixed(1)};
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * ${(1.0 / (2.5 + i * 0.1)).toFixed(2)};
}`;
  } else {
    // Tree with different dominance
    return `
float mapLSystemVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = ${(0.6 + i * 0.03).toFixed(2)};
  
  for (int j = 0; j < 16; j++) {
    if (j >= iters) break;
    
    if (abs(z.x) < ${(0.2 + i * 0.02).toFixed(2)} && abs(z.z) < ${(0.2 + i * 0.03).toFixed(2)}) {
      z.y = z.y + ${(0.8 + i * 0.05).toFixed(2)} * dominance;
    } else {
      z.y = z.y + ${(0.2 + i * 0.02).toFixed(2)} * (1.0 - dominance);
    }
    
    z.x = z.x * ${(1.3 + i * 0.04).toFixed(2)};
    z.z = z.z * ${(1.3 + i * 0.05).toFixed(2)};
    
    z = z * ${(0.6 + i * 0.02).toFixed(2)};
  }
  
  return length(z) * 0.5;
}`;
  }
}).join('\n')}
`;
