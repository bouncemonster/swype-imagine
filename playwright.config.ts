import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Golden Ratio Fractal Engine
 * Optimized for WebGL2 headless testing with Chromium
 */
export default defineConfig({
  testDir: './tests',
  testMatch: /browser-.*\.ts$/,
  timeout: 60000,
  retries: 1,
  workers: 1, // Sequential — GPU is shared resource
  
  reporter: [
    ['list'],
    ['json', { outputFile: 'tests/results/playwright-report.json' }],
  ],
  
  use: {
    baseURL: 'http://127.0.0.1:9876',
    screenshot: 'on',
    video: 'off',
    trace: 'on-first-retry',
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },
  
  projects: [
    {
      name: 'chromium-webgl2',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--enable-webgl',
            '--enable-webgl2-compute-context',
            '--use-gl=angle',
            '--use-angle=d3d11',
            '--enable-unsafe-webgpu',
            '--no-sandbox',
            '--disable-gpu-sandbox',
          ],
        },
      },
    },
  ],
  
  webServer: {
    command: 'npx serve dist -l 9876',
    port: 9876,
    reuseExistingServer: true,
    timeout: 10000,
  },
});
