import { test } from '@playwright/test';

test('Browsers back and forward button click tutorial', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(url);

    // opens the google.com url on same tab
    await page.goto("https://www.google.com/");

    // clicking on browsers back button
    await page.goBack();

    // clicking on browsers forward button using .goForward() method
    await page.goForward();


});

test.only("popup validations", async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(url);
    const alerBtn = page.locator('#alertbtn');
    const confirmBtn = page.locator('#confirmbtn');
    await page.pause();

    await alerBtn.click();
    await confirmBtn.click();

    //page.on('dialog')==> page.on is listener when the dialog event is triggered then the following actions will performed.Here 'dialog' is an event which is listen by an listener

    page.on('dialog', dialog => accept()); // here it clicks on the Ok button i.e., accepts an alert
    page.on('dialog', dialog => dismiss()); // clicks on cancel button of the browser pop up or alert




})