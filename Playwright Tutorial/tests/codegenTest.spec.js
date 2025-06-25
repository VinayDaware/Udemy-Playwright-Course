import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('dialog').locator('div').filter({ hasText: 'Sign in to GoogleGet the most' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('orange city');
  await page.getByText('orange city of india name').click();
  await page.getByRole('link', { name: 'Orange City of India, Know' }).click();
});


// command for launching codegen is ---> npx playwright codegen https://google.com