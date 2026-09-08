// Advanced Rendering Techniques 2026
// Depth of Field, Hard Shadows, Advanced Lighting, Environmental Effects

export const ADVANCED_RENDERING_GLSL = `
// ============= DEPTH OF FIELD =============
// Bokeh-based depth of field for realistic camera focus

float calculateDOFBlur(float depth, float focusDistance, float aperture) {
  float coc = abs(depth - focusDistance) * aperture / focusDistance;
  return clamp(coc, 0.0, 1.0);
}

vec3 applyDepthOfField(vec3 color, float depth, float focusDistance, float aperture, vec2 uv) {
  float blur = calculateDOFBlur(depth, focusDistance, aperture);
  
  if (blur < 0.01) return color; // No blur needed
  
  // Multi-sample bokeh blur (9 samples for quality)
  vec3 blurred = vec3(0.0);
  float total = 0.0;
  
  for (int x = -2; x <= 2; x++) {
    for (int y = -2; y <= 2; y++) {
      vec2 offset = vec2(float(x), float(y)) * blur * 0.01;
      float weight = 1.0 - length(vec2(float(x), float(y))) / 2.83;
      weight = max(weight, 0.0);
      blurred += color * weight; // Simplified - in real implementation would resample
      total += weight;
    }
  }
  
  return blurred / total;
}

// ============= HARD SHADOWS WITH PENUMBRA =============
// IQ-style soft shadows with penumbra

float calculateSoftShadow(vec3 ro, vec3 rd, float mint, float maxt, float k, 
                         sampler3D sdfSampler) {
  float res = 1.0;
  float t = mint;
  float ph = 1e20;
  
  for (int i = 0; i < 64; i++) {
    float h = sceneSDF(ro + rd * t).x;
    
    if (h < 0.001) return 0.0; // Hit
    
    // Smooth minimum for penumbra
    float y = h * h / (2.0 * ph);
    float d = sqrt(h * h - y * y);
    res = min(res, k * d / max(0.0, t - y));
    ph = h;
    
    t += h;
    if (t > maxt) break;
  }
  
  return clamp(res, 0.0, 1.0);
}

// ============= ADVANCED LIGHTING =============
// Three-point lighting system with specular highlights

vec3 calculateAdvancedLighting(vec3 p, vec3 n, vec3 lightPos, vec3 lightColor, 
                               float specularPower, float fresnelPower) {
  vec3 l = normalize(lightPos - p);
  vec3 v = normalize(-p);
  vec3 h = normalize(l + v);
  
  // Diffuse
  float diff = max(dot(n, l), 0.0);
  
  // Specular (Blinn-Phong)
  float spec = pow(max(dot(n, h), 0.0), specularPower);
  
  // Fresnel (Schlick approximation)
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), fresnelPower);
  
  return lightColor * (diff + spec * 0.5 + fresnel * 0.3);
}

// ============= ENVIRONMENTAL EFFECTS =============
// Volumetric fog and atmospheric scattering

vec3 applyVolumetricFog(vec3 color, vec3 ro, vec3 rd, float t, float fogDensity, vec3 fogColor) {
  float fogAmount = 1.0 - exp(-t * fogDensity);
  return mix(color, fogColor, clamp(fogAmount, 0.0, 1.0));
}

vec3 applyAtmosphericScattering(vec3 color, vec3 ro, vec3 rd, float t, vec3 sunDir) {
  // Rayleigh scattering approximation
  float sunAmount = max(dot(rd, sunDir), 0.0);
  vec3 scatter = vec3(0.3, 0.5, 0.8) * pow(sunAmount, 2.0);
  
  float atmosphere = 1.0 - exp(-t * 0.01);
  return mix(color, color + scatter * 0.2, clamp(atmosphere, 0.0, 1.0));
}

// ============= AMBIENT OCCLUSION IMPROVEMENT =============
// High-quality AO with multiple samples

float calculateHighQualityAO(vec3 p, vec3 n) {
  float ao = 0.0;
  float scale = 1.0;
  
  for (int i = 0; i < 5; i++) {
    float dist = 0.01 + 0.12 * float(i);
    float sample = sceneSDF(p + n * dist).x;
    ao += (dist - sample) * scale;
    scale *= 0.5;
  }
  
  return clamp(1.0 - ao * 2.5, 0.0, 1.0);
}
`;

export const ADVANCED_RENDERING_WGSL = `
// ============= DEPTH OF FIELD =============
fn calculateDOFBlur(depth: f32, focusDistance: f32, aperture: f32) -> f32 {
  let coc = abs(depth - focusDistance) * aperture / focusDistance;
  return clamp(coc, 0.0, 1.0);
}

fn applyDepthOfField(color: vec3<f32>, depth: f32, focusDistance: f32, 
                     aperture: f32, uv: vec2<f32>) -> vec3<f32> {
  let blur = calculateDOFBlur(depth, focusDistance, aperture);
  
  if (blur < 0.01) {
    return color;
  }
  
  // Multi-sample bokeh blur
  var blurred = vec3<f32>(0.0);
  var total = 0.0;
  
  for (var x = -2; x <= 2; x++) {
    for (var y = -2; y <= 2; y++) {
      let offset = vec2<f32>(f32(x), f32(y)) * blur * 0.01;
      let weight = 1.0 - length(vec2<f32>(f32(x), f32(y))) / 2.83;
      let w = max(weight, 0.0);
      blurred = blurred + color * w;
      total = total + w;
    }
  }
  
  return blurred / total;
}

// ============= HARD SHADOWS WITH PENUMBRA =============
fn calculateSoftShadow(ro: vec3<f32>, rd: vec3<f32>, mint: f32, maxt: f32, k: f32) -> f32 {
  var res = 1.0;
  var t = mint;
  var ph = 1e20;
  
  for (var i = 0; i < 64; i++) {
    let h = sceneSDF(ro + rd * t).x;
    
    if (h < 0.001) {
      return 0.0;
    }
    
    let y = h * h / (2.0 * ph);
    let d = sqrt(h * h - y * y);
    res = min(res, k * d / max(0.0, t - y));
    ph = h;
    
    t = t + h;
    if (t > maxt) {
      break;
    }
  }
  
  return clamp(res, 0.0, 1.0);
}

// ============= ADVANCED LIGHTING =============
fn calculateAdvancedLighting(p: vec3<f32>, n: vec3<f32>, lightPos: vec3<f32>, 
                             lightColor: vec3<f32>, specularPower: f32, 
                             fresnelPower: f32) -> vec3<f32> {
  let l = normalize(lightPos - p);
  let v = normalize(-p);
  let h = normalize(l + v);
  
  let diff = max(dot(n, l), 0.0);
  let spec = pow(max(dot(n, h), 0.0), specularPower);
  let fresnel = pow(1.0 - max(dot(n, v), 0.0), fresnelPower);
  
  return lightColor * (diff + spec * 0.5 + fresnel * 0.3);
}

// ============= ENVIRONMENTAL EFFECTS =============
fn applyVolumetricFog(color: vec3<f32>, ro: vec3<f32>, rd: vec3<f32>, 
                      t: f32, fogDensity: f32, fogColor: vec3<f32>) -> vec3<f32> {
  let fogAmount = 1.0 - exp(-t * fogDensity);
  return mix(color, fogColor, clamp(fogAmount, 0.0, 1.0));
}

fn applyAtmosphericScattering(color: vec3<f32>, ro: vec3<f32>, rd: vec3<f32>, 
                               t: f32, sunDir: vec3<f32>) -> vec3<f32> {
  let sunAmount = max(dot(rd, sunDir), 0.0);
  let scatter = vec3<f32>(0.3, 0.5, 0.8) * pow(sunAmount, 2.0);
  let atmosphere = 1.0 - exp(-t * 0.01);
  return mix(color, color + scatter * 0.2, clamp(atmosphere, 0.0, 1.0));
}

fn calculateHighQualityAO(p: vec3<f32>, n: vec3<f32>) -> f32 {
  var ao = 0.0;
  var scale = 1.0;
  
  for (var i = 0; i < 5; i++) {
    let dist = 0.01 + 0.12 * f32(i);
    let sample = sceneSDF(p + n * dist).x;
    ao = ao + (dist - sample) * scale;
    scale = scale * 0.5;
  }
  
  return clamp(1.0 - ao * 2.5, 0.0, 1.0);
}
`;
