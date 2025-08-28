import { test } from '@playwright/test';
test('Hover on an element tutorial', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(url);
    const mouseHoverBtn = page.locator('#mousehover');
    await mouseHoverBtn.hover();

});