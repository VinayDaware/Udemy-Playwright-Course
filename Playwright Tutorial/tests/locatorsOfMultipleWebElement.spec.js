import {test} from '@playwright/test';

test('working with multiple webelement locator', async function({page}){
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);
    const userNameField = await page.locator('#username');
    const passwordField = await page.locator('[type="password"]');
    const signInBtn = await page.locator('#signInBtn');
    const cardTiles = await page.locator('.card-body a');

    // transversing / location element from parent to child for this we have nth method where we can set the positon of the element that means nth index the value is in indexing e.g for first element nth(0) for second nth(1);

    const iphoneX = await cardTiles.nth(0);
    

    //check the check box
    await checkBox.check();


    await userNameField.fill("rahul");

    // to clear text field we need to pass "" in fill method
    await userNameField.fill("");     // This will clear the text field
    await userNameField.fill("rahulshettyacademy");
    await passwordField.fill("learning");
    await signInBtn.click();

    const firstElement = await iphoneX.textContent();
    console.log(`First element on the page is ${firstElement}`);

});

test('Check and uncheck terms check box', async function({page}){

        const url = 'https://rahulshettyacademy.com/loginpagePractise/';
        await page.goto(url);
        const checkBox = await page.locator('#terms');
        await checkBox.check();
        console.log("Terms accepted");
        await checkBox.uncheck();
        console.log("Terms are not accepted");
});

test.only('Extracting all product list after signing in', async function({page}){
        const url = 'https://rahulshettyacademy.com/loginpagePractise/';
        await page.goto(url);
        const userNameField = await page.locator('#username');
        const passwordField = await page.locator('[type="password"]');
        const signInBtn = await page.locator('#signInBtn');
        await userNameField.fill("rahulshettyacademy");
        await passwordField.fill("learning");
        await signInBtn.click();
        const cardTiles = await page.locator('.card-body a');

        // for getting all visible text we have allTextContents() method. This method will return all the visible text as array string
        const allTitleTitles = await cardTiles.allTextContents();
        console.log(allTitleTitles);




});
