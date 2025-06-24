import {expect, test} from '@playwright/test';

test('Validating blinking link is present or not on UI',async function({page}){

    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);

    const blinkingElem = page.locator("[class='blinkingText']");

    // This is a Playwright test assertion used to verify that an element has a specific attribute with a specific value.
    await expect(blinkingElem).toHaveAttribute("class","blinkingText")



});