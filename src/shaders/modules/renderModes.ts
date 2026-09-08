/**
 * Render Modes - Modular rendering techniques
 * Extracted from monolithic shader files for better maintainability
 */

export const RENDER_MODES_GLSL = `
// ===================================================================
// Render Modes Library (GLSL)
// Advanced visualization techniques from glChAoS.P + custom
// ===================================================================

// 1. Solid PBR with environment reflections
vec3 renderSolidPBR(vec3 col, vec3 p, vec3 n, vec3 rd, vec3 ro, float t,
                    vec3 light1, vec3 light2, float ao, float fresnel,
                    float spec1, float sssCol, vec3 mat_col,
                    float curvNorm, float trapDetail, float min_trap,
                    float cam_dist) {
  // Environment reflections
  vec3 reflectDir = reflect(rd, n);
  float envReflDist = sceneSDF(p + reflectDir * 0.3).x;
  float envRefl = clamp(1.0 - envReflDist * 4.0, 0.0, 1.0);
  vec3 reflCol = mix(u_secondary_color, u_accent_color, envRefl) * envRefl * 0.25;
  reflCol *= (0.3 + 0.7 * fresnel);
  
  // Full PBR lighting
  col = ambient * 0.5 + reflCol + diffuse * 1.4 + bounceCol * 1.8 + specular * 1.3 + rim * 1.5 + sssCol * 1.8;
  col = col * (0.3 + 0.7 * ao);
  return col;
}

// 2. X-Ray Tomography with volumetric scattering
vec3 renderXRay(vec3 col, float steps, float t, float curvNorm, float ao,
                float trapDetail, vec3 light1) {
  float dens = clamp(float(steps) / 65.0, 0.0, 1.0);
  float pathLen = clamp(t / 12.0, 0.0, 1.0);
  float beamHardening = mix(1.0, 0.6, pathLen * curvNorm);
  float boneDensity = mix(0.15, 1.0, curvNorm * 0.55 + ao * 0.35 + trapDetail * 0.1);
  
  vec3 xrayCore = u_accent_color * boneDensity * (0.3 + trapDetail * 0.7) * beamHardening;
  vec3 xrayVessel = u_primary_color * trapDetail * (0.25 + dens * 0.75);
  float edgeGlow = pow(1.0 - ao, 2.0) * (0.4 + curvNorm * 0.6);
  vec3 xrayShell = u_secondary_color * edgeGlow;
  vec3 scatterCol = vec3(0.6, 0.7, 0.9) * pathLen * 0.15 * (1.0 - boneDensity);
  
  vec3 xrayCol = mix(xrayVessel, xrayCore, boneDensity * 0.85) + xrayShell * 0.5 + scatterCol;
  xrayCol += u_accent_color * curvNorm * 0.35;
  return mix(col * 0.12, xrayCol * 1.6, 0.78 + 0.22 * ao);
}

// 3. Topography with height-based terrain
vec3 renderTopography(vec3 col, vec3 p, vec3 n, float curvNorm, float ao, float trapDetail) {
  float height = p.y * 0.5 + 0.5;
  
  // Multi-scale contours
  float contourFine = abs(fract(height * 20.0) - 0.5) * 2.0;
  float contourMed = abs(fract(height * 8.0) - 0.5) * 2.0;
  float contourCoarse = abs(fract(height * 3.0 + curvNorm * 0.3) - 0.5) * 2.0;
  float contourF = smoothstep(0.0, 0.035, contourFine);
  float contourM = smoothstep(0.0, 0.07, contourMed);
  float contourC = smoothstep(0.0, 0.12, contourCoarse);
  float contour = min(contourF, min(contourM, contourC));
  
  // Ridge/valley detection
  float ridgeLine = smoothstep(0.25, 0.75, curvNorm);
  float valleyLine = smoothstep(0.35, 0.0, curvNorm) * smoothstep(0.6, 0.2, height);
  float slope = 1.0 - abs(dot(n, vec3(0.0, 1.0, 0.0)));
  float slopeShade = pow(slope, 0.6);
  
  // Elevation color zones
  vec3 waterZone = u_secondary_color * 0.35;
  vec3 lowlandZone = mix(u_secondary_color, u_primary_color, 0.3) * (0.5 + height * 0.4);
  vec3 highlandZone = u_primary_color * (0.6 + height * 0.8);
  vec3 peakZone = u_accent_color * (0.8 + curvNorm * 1.2);
  
  vec3 topoCol = mix(waterZone, lowlandZone, smoothstep(0.15, 0.35, height));
  topoCol = mix(topoCol, highlandZone, smoothstep(0.40, 0.65, height));
  topoCol = mix(topoCol, peakZone, smoothstep(0.70, 0.90, height) * ridgeLine);
  topoCol = mix(topoCol, peakZone * 1.5, ridgeLine * 0.45);
  topoCol *= (0.7 + 0.3 * (1.0 - valleyLine));
  topoCol = mix(topoCol, topoCol * 0.35, (1.0 - contour) * 0.5);
  topoCol *= (0.55 + 0.45 * slopeShade);
  
  return topoCol * (0.45 + 0.55 * ao);
}

// 4. Hologram with chromatic aberration + hex grid
vec3 renderHologram(vec3 col, vec3 p, vec3 n, vec3 rd, float t,
                    float curvNorm, float trapDetail, float depthNorm) {
  float rOff = sin(depthNorm * 25.0 + u_time * 3.5) * 0.03;
  float gOff = sin(depthNorm * 25.0 + u_time * 3.5 + 2.094) * 0.03;
  float bOff = sin(depthNorm * 25.0 + u_time * 3.5 + 4.189) * 0.03;
  vec3 holoBase = u_primary_color * vec3(1.0 + rOff, 1.0 + gOff, 1.0 + bOff);
  
  float holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
  float scanFreq = 200.0 + depthNorm * 150.0;
  float scanline = 0.80 + 0.20 * sin(v_uv.y * scanFreq + u_time * 10.0);
  float wireframe = smoothstep(0.25, 0.75, curvNorm);
  float glitch = step(0.965, fract(sin(dot(p, vec3(12.9898, 78.233, 45.164)) + u_time * 2.5) * 43758.5));
  
  // Hexagonal grid
  float hexScale = 25.0;
  vec3 hexP = p * hexScale;
  float hx = abs(fract(hexP.x * 0.5) - 0.5) * 2.0;
  float hy = abs(fract(hexP.y * 0.866) - 0.5) * 2.0;
  float hexGrid = min(hx, hy);
  float hexLine = smoothstep(0.0, 0.08, hexGrid);
  
  float shimmer = 0.85 + 0.15 * sin(u_time * 6.0 + length(p) * 12.0);
  vec3 holoCol = holoBase * (0.30 + holoFres * 1.5 + wireframe * 0.6) * scanline * shimmer;
  holoCol += u_accent_color * wireframe * 1.4;
  holoCol += vec3(0.12, 0.35, 0.75) * holoFres * 1.8;
  holoCol += u_accent_color * glitch * 3.5;
  holoCol += u_primary_color * trapDetail * 0.35;
  holoCol += u_secondary_color * (1.0 - hexLine) * 0.15 * (0.5 + depthNorm * 0.5);
  
  return mix(col * 0.06, holoCol, 0.94);
}

// 5. Pearl/Iridescent with 5-order thin-film interference
vec3 renderPearl(vec3 col, vec3 n, vec3 rd, float curvNorm, float ao,
                 float trapDetail, float min_trap, float fresnel, vec3 light1) {
  float nv = max(dot(n, -rd), 0.0);
  float filmThickness = 0.5 + curvNorm * 0.8 + trapDetail * 0.3;
  
  float order1 = nv * 3.0 * filmThickness + min_trap * 0.5;
  float order2 = nv * 5.0 * filmThickness + min_trap * 0.3 + u_time * 0.08;
  float order3 = nv * 7.0 * filmThickness + min_trap * 0.2;
  float order4 = nv * 9.0 * filmThickness + min_trap * 0.15 - u_time * 0.05;
  float order5 = nv * 11.0 * filmThickness + min_trap * 0.1;
  
  float iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33 + order4 * 0.1));
  float iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33 + order5 * 0.08));
  float iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
  vec3 iridCol = vec3(iridR, iridG, iridB);
  
  vec3 hIrid = normalize(light1 - rd);
  float specAngle = max(dot(n, hIrid), 0.0);
  vec3 specIrid = vec3(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * 2.5;
  
  float iridDiff = max(dot(n, light1), 0.0) * 0.3;
  iridCol *= (0.6 + trapDetail * 0.3 + iridDiff);
  iridCol += u_accent_color * pow(fresnel, 1.5) * 0.4;
  
  return iridCol * (0.45 + 0.55 * ao) + specIrid;
}

// 6. Plasma/Quantum with magnetic flux lines
vec3 renderPlasma(vec3 col, vec3 p, vec3 n, vec3 rd, float curvNorm,
                  float ao, float trapDetail, float fresnel, float sssCol,
                  vec3 light1, vec3 light2) {
  float wave1 = sin(length(p) * 12.0 - u_time * 3.5);
  float wave2 = cos(dot(p, normalize(vec3(1.618, 1.0, 0.618))) * 7.0 + u_time * 2.2);
  float wave3 = sin(dot(p, normalize(vec3(-0.618, 1.618, 1.0))) * 9.0 - u_time * 1.8);
  float interference = (wave1 + wave2 + wave3) / 3.0;
  
  // Magnetic flux lines
  float flux1 = sin(p.x * 8.0 + u_time * 1.5) * cos(p.z * 6.0 - u_time * 1.2);
  float flux2 = cos(p.y * 7.0 - u_time * 1.8) * sin(p.x * 5.0 + u_time * 0.9);
  float flux = (flux1 + flux2) * 0.5;
  
  float probability = trapDetail * 0.5 + (0.5 + 0.5 * interference) * 0.35 + flux * 0.15;
  float energy = pow(abs(interference), 0.7) * (0.5 + curvNorm * 0.5);
  
  vec3 plasmaCold = u_secondary_color * (0.20 + probability * 0.5);
  vec3 plasmaHot = u_accent_color * (0.6 + energy * 1.8);
  vec3 qCol = mix(plasmaCold, plasmaHot, energy);
  
  float plasmaDiff = max(dot(n, light1), 0.0) * 0.4 + max(dot(n, light2), 0.0) * 0.15;
  qCol *= (0.7 + plasmaDiff * 0.3);
  
  vec3 hPlasma = normalize(light1 - rd);
  float plasmaSpec = pow(max(dot(n, hPlasma), 0.0), 32.0);
  qCol += vec3(0.8, 0.9, 1.0) * plasmaSpec * 0.5;
  qCol += u_secondary_color * abs(flux) * 0.2 * (0.5 + curvNorm * 0.5);
  qCol += u_accent_color * pow(fresnel, 2.0) * 1.2;
  qCol += u_primary_color * curvNorm * 0.35;
  qCol *= (0.6 + trapDetail * 0.4);
  
  return qCol * (0.35 + 0.65 * ao) + sssCol * 1.2;
}

// 7. Crystal with dual internal reflections + caustics
vec3 renderCrystal(vec3 col, vec3 p, vec3 n, vec3 rd, float t,
                   float curvNorm, float ao, float trapDetail, float fresnel,
                   float spec1, vec3 light1) {
  float beerDist = min(max(t - 0.5, 0.0), 20.0);
  vec3 beer = exp(-beerDist * vec3(0.05, 0.15, 0.6));
  
  float caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
  float caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
  float caustic = caustic1 + caustic2;
  
  float facetStrength = 0.3 + curvNorm * 0.7;
  vec3 refractCol = mix(u_primary_color, u_accent_color, fresnel * facetStrength);
  vec3 gemCol = refractCol * beer;
  
  // First internal reflection
  vec3 internalReflDir = reflect(rd, n);
  float internalRefl = clamp(1.0 - sceneSDF(p + internalReflDir * 0.15).x * 6.0, 0.0, 1.0);
  gemCol += u_accent_color * internalRefl * beer * 0.2;
  
  // Second internal bounce
  vec3 bounce2Dir = reflect(internalReflDir, n);
  float bounce2Refl = clamp(1.0 - sceneSDF(p + bounce2Dir * 0.1).x * 8.0, 0.0, 1.0);
  gemCol += u_primary_color * bounce2Refl * beer * 0.1;
  
  vec3 gemSpec = vec3(1.0, 0.96, 0.82) * spec1 * 2.2;
  float dispersion = fresnel * (0.1 + curvNorm * 0.15);
  gemCol.r *= (1.0 + dispersion);
  gemCol.b *= (1.0 - dispersion * 0.5);
  gemCol += u_secondary_color * trapDetail * 0.25 * beer;
  gemCol *= facetStrength;
  
  return gemCol * (0.6 + 0.4 * ao) + gemSpec + u_accent_color * caustic * 0.6;
}
`;

export const RENDER_MODES_WGSL = `
// ===================================================================
// Render Modes Library (WGSL)
// Advanced visualization techniques from glChAoS.P + custom
// ===================================================================

// Note: WGSL versions use 'let' instead of 'float', 'u.field' instead of 'u_field'
// Full implementations in webgpuShaders.ts
`;
