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
