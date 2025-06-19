import { expect, test } from '@playwright/test';

//here {page} is fixture of playwright when we pass this at function level it handels browser setup like tear down automatically.

test('Open browser and launch website', async function ({ page }) {

    const url = 'https://www.facebook.com/';
    await page.goto(url);
    const currentUrl = await page.url(); // .url() is used to get current url of the page
    console.log(`Current url is ${currentUrl}`);

    //validating url
    const expectedUrl = 'https://www.facebook.com/';
    await expect(page).toHaveURL(expectedUrl);
});

test('Validating title of the page', async function ({ page }) {
    const url = "https://www.facebook.com/";
    await page.goto(url);
    const expectedPageTitle = 'Facebook – log in or sign up';
    const pageTitle = await page.title();
    console.log(`Current page title is ${pageTitle}`);
    await expect(page).toHaveTitle(expectedPageTitle);

});