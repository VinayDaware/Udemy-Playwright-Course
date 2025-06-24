import {test} from '@playwright/test';

test('Handling child windows & tabs with playwright using browser context', async function({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);

    const blinkingElem = page.locator("[class='blinkingText']");
    const emailField = page.locator("#username");

    // switching to new page context for performing operation on new page

    //Promise.all() used when you want to run multiple promises in parallel and wait for all of them to finish before continuing.
    const [newPage] = await Promise.all(
    [ 
    context.waitForEvent('page'), //context.waitForEvent('page') liestens for any new page.It returns promise newPage Object
    blinkingElem.click(), // new page is opened
      
    ]);

    // until above promise fullfilled it is not going to execute further outside the promise array. Once all promises fullfilled it will returns their successfull promises.In this case page

    // performing operation on child windows
    const emailText = await newPage.locator("p.red").textContent();
    console.log(emailText);


    // extracting email =  mentor@rahulshettyacademy.com from above text and enter back to email field locator available on login page
    // extracting email from text using split by '@'.split method devides email in 2 parts and save into an array.
    // so at the 0th index of an array is mentor which is at LH side and 1st index of an array will be rahulshettyacademy.com

   const arrayText =  emailText.split("@");
   const domain = arrayText[1].split(" ")[0] // arrayText[1] it extracts the rahulshettyacademy.com which is at 1st index.After that splited using white space because I just wanted rahulshettyacademy.com and use [0] because when I split using white space at 0th index rahulshettyacademy.com is present

  // console.log(domain);
   
   // enter email in email field on login page
   await emailField.fill("vinay@"+domain);  // enters the vinay@rahulshettyacademy.com in email field
   console.log("Email field filled with:", await emailField.inputValue());
   // here we use page because we have to perform operation on parrent window rather than child window which is newPage
   
   await page.pause();


    


});