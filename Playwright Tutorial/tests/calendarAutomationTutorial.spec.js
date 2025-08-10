import { test } from '@playwright/test';
test('Calendar validations', async function ({ page }) {
    const monthNumber = '9';
    const date = '29';
    const year = '2027';
    const url = 'https://rahulshettyacademy.com/seleniumPractise/#/offers';
    await page.goto(url);
    const expectedList = [monthNumber, date, year];

    // open calendar
    const calendar = page.locator('.react-date-picker__inputGroup');
    await calendar.click();

    // clicking on year and month from the top of calendar
    const yearLabel = page.locator('.react-calendar__navigation__label__labelText');
    await yearLabel.click();  // First click → Switches to year selection mode.
    await yearLabel.click(); // Second click → Switches to multi - year selection mode.

    // select year
    //Finds the element containing the text "2027" and clicks it. This selects the desired year.
    await page.getByText(year).click();

    // select 9th month = 'September'

    //allMonths → Locator for all month elements in year view..nth(Number(monthNumber - 1)) → Selects the correct month using zero-based index(September is index 8).

    const allMonths = page.locator('.react-calendar__year-view__months__month');
    await allMonths.nth(Number(monthNumber - 1)).click();

    // select date
    await page.locator("//abbr[text()='" + date + "']").click();

    // assertions for date selection is correct
    const inputs = await page.locator('.react-date-picker__inputGroup input');
    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i].getAttribute("value");

        // assertion
        expect(value).toEqual(expectedList[i]);




    }


});