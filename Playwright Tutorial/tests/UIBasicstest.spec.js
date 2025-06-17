// importing test annotation from node_modules
import { test } from '@playwright/test';

//with browser context declaration ===> useful if we have inbuild cookies to send
test('First playwright test with browser context', async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage(); // this method creates or open in browser actual page to automate. In this page we hit actual url and start testing
    await page.goto("https://www.linkedin.com/"); // to open url in browser goto method is used


});

//without browser context declaration ===> useful if we do not have inbuild cookies to send
test.only('Page playwright test', async function ({ page }) {

    await page.goto("https://www.linkedin.com/"); // to open url in browser goto method is used

});