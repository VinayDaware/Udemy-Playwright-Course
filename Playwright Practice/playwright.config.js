
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 25 * 1000,
  reporter: 'html',

  expect: {
    timeout: 5 * 1000,
  },

  use: {
    browserName: 'chromium',
  },

});

