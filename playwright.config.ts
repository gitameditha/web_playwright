import { PlaywrightTestConfig, defineConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Timeout
  timeout: 10000,

  use: {
    // Browser options
    headless: true,

    // Context options
    viewport: { width: 1280, height: 720 },
  },
  reporter: [['html', { outputFolder: 'test_report' }]],
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    }
  ],
};

export default config;
