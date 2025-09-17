import { expect, test } from '@playwright/test';

// beforeAll() runs single time before all tests in file
test.beforeAll(async function () {
    console.log('🚀 Starting the test file');
});

// afterAll() runs single time after all tests in the file
test.afterAll(async function () {
    console.log('🏁 Finished all tests')

});

// beforeEach() runs before each test
test.beforeEach(async function ({ page }) {
    await page.goto('https://rahulshettyacademy.com/client/');
    console.log('📌 page opened');
})

// afterEach() runs after each test
test.afterEach(async function ({ page }) {
    console.log('Test finished');
});

// Test 1
test('check page title', async function ({ page }) {
    await expect(page).toHaveTitle("Let's Shop");

});

// Test 2
test('check if element is visble on page', async function ({ page }) {
    await expect(page.locator('#login')).toBeVisible();
});

