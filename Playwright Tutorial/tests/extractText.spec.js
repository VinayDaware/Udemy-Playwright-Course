import {expect, test} from '@playwright/test';

test ('Extracting text from browser',async function({page}){
     const url = 'https://rahulshettyacademy.com/loginpagePractise/';

     await page.goto(url);
     await page.locator("#username").fill("rahulshetty");
     await page.locator("[type='password']").fill('learning');
     await page.locator("#signInBtn").click();

    //textContent() method is used to extract test from element like getText() in selenium
    const errorLocator = await page.locator("[style *= 'block']");
    const errorMessage =  await errorLocator.textContent();  
    console.log(errorMessage);
    await expect(errorLocator).toContainText("Incorrect");



});