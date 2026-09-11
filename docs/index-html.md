# index.html

**21 lines | HTML entry point**

## Purpose
HTML template for the Single Page Application (SPA). Contains meta tags for SEO, social sharing, and mobile web app capabilities.

## Code Structure
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#0a0a0a" />
    <title>Golden Ratio WebGPU Fractal Engine</title>
    <meta name="description" content="High-performance WebGPU and WebGL2 real-time 3D fractal raymarching engine based on golden ratio φ, prime distributions, TPMS surfaces, and mathematical hybrids." />
    <meta property="og:title" content="Golden Ratio WebGPU Fractal Engine" />
    <meta property="og:description" content="High-performance WebGPU and WebGL2 real-time 3D fractal raymarching engine based on golden ratio φ, prime distributions, TPMS surfaces, and mathematical hybrids." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Meta Tags

### Viewport (Mobile)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
```
- **width=device-width**: Responsive to device width
- **initial-scale=1.0**: No initial zoom
- **maximum-scale=1.0**: Prevents pinch-to-zoom
- **user-scalable=no**: Disables user zoom
- **viewport-fit=cover**: Uses full screen on iPhone X+ (notch-safe)

### Web App Capabilities
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="mobile-web-app-capable" content="yes" />
```
- **iOS**: Can be added to home screen as standalone app
- **Android**: Same capability for Chrome

### Status Bar Style
```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```
- **iOS**: Status bar overlays content (no black bar)
- **Transparent**: Blends with app background

### Theme Color
```html
<meta name="theme-color" content="#0a0a0a" />
```
- **Browser chrome color**: #0a0a0a (near-black)
- **Android**: Task switcher background
- **Matches**: App dark theme

### SEO & Social
```html
<title>Golden Ratio WebGPU Fractal Engine</title>
<meta name="description" content="High-performance WebGPU and WebGL2 real-time 3D fractal raymarching engine based on golden ratio φ, prime distributions, TPMS surfaces, and mathematical hybrids." />
<meta property="og:title" content="Golden Ratio WebGPU Fractal Engine" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```
- **og:** tags: Open Graph protocol for Facebook/LinkedIn
- **twitter:card**: Large image preview on Twitter
- **description**: Contains keywords: WebGPU, WebGL2, fractal, golden ratio

## Body Structure
```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```
- **#root**: React mount point
- **type="module"**: ES6 module loading
- **/src/main.tsx**: Vite entry point (transformed during build)

## Critical Notes
1. **No favicon**: Missing `<link rel="icon">` (should add)
2. **No manifest**: Missing PWA manifest (should add)
3. **No analytics**: No tracking scripts
4. **No external CSS**: All CSS loaded via JS
5. **SPA**: Single HTML file, all routes handled by React
6. **Mobile-first**: Optimized for mobile web app experience
7. **Zoom disabled**: Prevents accidental zoom on mobile
8. **Dark theme**: #0a0a0a matches app background
9. **SEO optimized**: Description with key technical terms
10. **Social ready**: Open Graph tags for sharing

## Missing Elements (Potential Improvements)
```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- PWA Manifest -->
<link rel="manifest" href="/manifest.json" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

## Related Files
- `main.tsx`: JavaScript entry point
- `vite.config.ts`: Build configuration
- `public/`: Static assets directory
- `dist/`: Build output
