# index.css

**17 lines | Global application styles**

## Purpose
Minimal global CSS establishing the full-screen dark canvas environment for the fractal renderer.

## Code Structure
```css
@import "tailwindcss";

html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #030305;
  color: #f5f5f5;
  user-select: none;
  -webkit-user-select: none;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
```

## Key Styles

### Full-Screen Container
```css
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
```
- **100% dimensions**: No scrollbars, no margins
- **overflow: hidden**: Prevents any scrolling
- **Applies to**: html, body, and React root div

### Dark Background
```css
background-color: #030305;
```
- **Near-black**: RGB(3, 3, 5) - very dark with slight blue tint
- **Purpose**: Matches fractal void background
- **Contrast**: Light text (#f5f5f5) on dark background

### Text Selection Disabled
```css
user-select: none;
-webkit-user-select: none;
```
- **Prevents**: Text selection highlighting
- **Reason**: Interactive canvas app, no text to select
- **Cross-browser**: Vendor prefix for Safari

### Canvas Styling
```css
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
```
- **display: block**: Removes inline element spacing
- **100% dimensions**: Fills entire viewport
- **Applies to**: WebGL/WebGPU canvas elements

## Critical Notes
1. **Tailwind CSS**: Uses `@import "tailwindcss"` (v4 syntax)
2. **Minimal**: Only 20 lines - most styling via Tailwind utilities
3. **Full-screen**: No scrollbars, no margins, no padding
4. **Dark theme**: #030305 background, #f5f5f5 text
5. **No selection**: user-select disabled for app-like feel
6. **Canvas fills**: Canvas elements take 100% of container
7. **No animations**: Pure layout, no transitions
8. **Mobile-ready**: Works on all screen sizes
9. **Performance**: Minimal CSS = fast paint
10. **Void color**: #030305 matches fractal void in shaders

## Color Palette
| Element | Color | Purpose |
|---------|-------|---------|
| Background | `#030305` | Near-black void |
| Text | `#f5f5f5` | Light gray for readability |
| Canvas | Transparent | Inherits background |

## Dependencies
- **Tailwind CSS v4**: Imported via `@import "tailwindcss"`
- **PostCSS**: Processes Tailwind directives
- **Vite**: Bundles CSS with HMR

## Related Files
- `main.tsx`: Imports this CSS
- `index.html`: Contains `<div id="root">`
- `tailwind.config.js`: Tailwind configuration (if exists)
- `vite.config.ts`: CSS processing configuration
