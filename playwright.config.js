const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  fullyParallel: true,
  workers: 2,
  timeout: 90000,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});