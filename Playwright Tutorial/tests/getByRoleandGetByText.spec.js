import { test } from '@playwright/test';
test('Performing test using get by role locator', async function ({ page }) {

    const url = 'https://rahulshettyacademy.com/angularpractice/';
    await page.goto(url);
    const nameField = page.locator('[name="name"]');
    await nameField.first().fill('Vinay');

    const emailField = page.locator('[name="email"]');
    await emailField.fill('dawarevinay@gmail.com');

    const passField = page.locator('[type="password"]');
    await passField.fill('Test@1234');

    // getByLabel() is locating methos in playwright testing library selectors it is used to find element usually by the visible label
    const loveIceCreamcheckbox = page.getByLabel('Check me out if you Love IceCreams!'); // here 'Check me out if you Love IceCreams!' is the label name
    await loveIceCreamcheckbox.click();

    const genderDrown = page.getByLabel('Gender');
    await genderDrown.selectOption('Female');

    const employmentStatus = page.getByLabel('Employed');
    await employmentStatus.click();

    const bday = page.locator('[name="bday"]');
    await bday.pressSequentially('26061995');

    //getByRole() method is used to identify the element using its accessibility role
    const submitBtn = page.getByRole("button", { name: 'Submit' });
    await submitBtn.click();


});

test('Performing test using get by text locator', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/angularpractice/';
    await page.goto(url);
    const nameField = page.locator('[name="name"]');
    await nameField.first().fill('Vinay');

    const emailField = page.locator('[name="email"]');
    await emailField.fill('dawarevinay@gmail.com');

    const passField = page.locator('[type="password"]');
    await passField.fill('Test@1234');

    // getByLabel() is locating methos in playwright testing library selectors it is used to find element usually by the visible label
    const loveIceCreamcheckbox = page.getByLabel('Check me out if you Love IceCreams!'); // here 'Check me out if you Love IceCreams!' is the label name
    await loveIceCreamcheckbox.click();

    const genderDrown = page.getByLabel('Gender');
    await genderDrown.selectOption('Female');

    const employmentStatus = page.getByLabel('Employed');
    await employmentStatus.click();

    const bday = page.locator('[name="bday"]');
    await bday.pressSequentially('26061995');

    const submitBtn = page.getByRole("button", { name: 'Submit' });
    await submitBtn.click();

    //getByText() is method used to identify an element based on visible inner text
    const successMsg = page.getByText(' The Form has been submitted successfully!.');
    console.log(await successMsg.textContent());


});

test('Performing test using get by placeholder locator', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/angularpractice/';
    await page.goto(url);

    //getByPlaceholder() method is use to identify an element using placeholder locator
    const passField = page.getByPlaceholder('Password');
    await passField.fill('Test@1234');

});

test.only('Clicking on Shop link using role', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/angularpractice/';
    await page.goto(url);
    await page.getByRole("link", { name: "Shop" }).click();

    // filter() method used in playwright directly on lacator to filter element based on condition like hasText,has etc.
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
    await page.locator("span.sr-only").first().click();


});