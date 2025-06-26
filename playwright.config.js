import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env automaticamente
dotenv.config();

const baseURL = process.env.BASE_URL || 'https://gleyslla.github.io/teste-de-formulario-de-contato/';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
    ['json', { outputFile: 'playwright-report/report.json' }],
  ],
  use: {
    baseURL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});
