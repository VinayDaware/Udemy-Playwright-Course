import { test } from '@playwright/test';
import { log } from 'console';

test('Frames handling and automation tutorial', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(url);

    // switching to frame
    //frameLocator() method is use to switch between current frame to iframe. This allow us to work inside the frame 
    // page.frameLocator('#courses-iframe') means you are telling Playwright: “Work inside this iframe(with id courses - iframe) instead of the main page.”

    const pageFrame = page.frameLocator('#courses-iframe');
    await pageFrame.locator("li a[href *='lifetime-access']:visible").click();
    const textCheck = await pageFrame.locator('.text h2').textContent();
    console.log(textCheck);

    // extracting number of happy subscriber from the above text
    const subscriberNumber = textCheck.split(" ")[1];
    console.log("Total number of happy subscribers are - " + subscriberNumber + " 😎");

});