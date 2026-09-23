import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // Pinned to match tests/visual-snapshot-sweep.ts default BASE_URL (127.0.0.1:4178).
  // strictPort makes a port clash fail loudly instead of silently drifting and
  // breaking the sweep's fixed BASE_URL assumption.
  preview: {
    host: '127.0.0.1',
    port: 4178,
    strictPort: true,
    // Allow sharing the built app through Cloudflare tunnels: ephemeral quick
    // tunnels (*.trycloudflare.com) and the permanent named tunnel on our own
    // zone (*.simundis.com). Vite 6 blocks non-localhost Host headers with 403;
    // this scoped allowlist keeps the host-check against arbitrary spoofing.
    allowedHosts: ['.trycloudflare.com', '.simundis.com'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'shaders': [
            './src/shaders/webglShaders.ts',
            './src/shaders/webgpuShaders.ts',
          ],
          'engine': [
            './src/engine/NeuroAestheticsEngine.ts',
            './src/engine/fractalMappers.ts',
            './src/engine/ShaderManager.ts',
            './src/engine/WebGLEngine.ts',
            './src/engine/WebGPUEngine.ts',
          ],
          'data': [
            './src/data/compatibleHybrids.ts',
            './src/data/fractalArchitectures.ts',
          ],
        },
      },
    },
  },
});
