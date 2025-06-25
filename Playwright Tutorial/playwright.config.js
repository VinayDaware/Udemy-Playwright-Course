// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout : 30*1000,
  reporter : 'html',
  expect :{
    timeout : 5*1000,
  },

  use: {
    browserName : 'chromium',
    screenshot : 'on',
    trace : 'on'

  },
});

