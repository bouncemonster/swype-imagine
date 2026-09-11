# vite.config.ts

**14 lines | Vite build configuration**

## Purpose
Vite bundler configuration for React + Tailwind CSS application.

## Code Structure
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
```

## Configuration

### Plugins
1. **react()**: React Fast Refresh, JSX transformation
2. **tailwindcss()**: Tailwind CSS v4 integration (PostCSS alternative)

### Dev Server
```typescript
server: {
  host: '0.0.0.0',  // Listen on all interfaces
  port: 3000,        // Default port
}
```
- **host: '0.0.0.0'**: Accessible from network (mobile testing, LAN)
- **port: 3000**: Development server port

## Critical Notes
1. **Tailwind v4**: Uses `@tailwindcss/vite` plugin (not PostCSS)
2. **Network access**: 0.0.0.0 allows mobile device testing
3. **Minimal config**: No custom build options, no chunk splitting
4. **React plugin**: Automatic Fast Refresh in development
5. **No base path**: Assumes root deployment (/)

## Build Process
```
vite build → dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
```

## Dependencies
- `vite`: Build tool
- `@vitejs/plugin-react`: React support
- `@tailwindcss/vite`: Tailwind CSS v4 integration

## Related Files
- `package.json`: Scripts (dev, build, preview)
- `wrangler.toml`: Cloudflare Pages deployment
- `tsconfig.json`: TypeScript configuration
- `dist/`: Build output directory
