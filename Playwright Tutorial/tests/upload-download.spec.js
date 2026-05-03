import ExcelJS from 'exceljs';
import { test, expect } from '@playwright/test';

async function writeExcel(searchText, replaceText, filePath) {
    const workBook = new ExcelJS.Workbook();
    await workBook.xlsx.readFile(filePath);
    const workSheet = workBook.getWorksheet('Sheet1');
    const output = await readExcel(workSheet, searchText);

    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            //printing value from excel
            console.log(cell.value);
        });
    });

    // replacing element inside excel
    const cell = workSheet.getCell(output.row, output.column); // 6->column number, 2->row number
    cell.value = replaceText;

    // save changes --> updating file
    await workBook.xlsx.writeFile(filePath);

}

async function readExcel(workSheet, searchText) {
    let output = { row: -1, column: -1 };
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
                console.log(`Value is present in the row - ${rowNumber}`);
                console.log(`Value is present in the column - ${colNumber}`);

            }

        });
    });
    return output;
}

test('Upload download excel validation', async function ({ page }) {
    const textSearch = 'Papaya';
    const updatedValue = 'Republic';
    const url = 'https://rahulshettyacademy.com/upload-download-test/';

    await page.goto(url);
    const downloadButton = page.locator('#downloadButton');
    const [download] = await Promise.all([
        page.waitForEvent('download'), downloadButton.click()
    ]);

    // Force correct file name
    const filePath = 'C:/Users/ADMIN/Downloads/download.xlsx';
    await download.saveAs(filePath);
    await writeExcel(textSearch, updatedValue, filePath);
    const chooseFileButton = page.locator('#fileinput');

    // select file from local machine --> if attribute in DOM type=file is not available then it is not working
    await chooseFileButton.setInputFiles(filePath);
    const textLocator = page.getByText(updatedValue);
    const desiredRow = await page.getByRole('row').filter({ has: textLocator });
    await expect(desiredRow.locator('#cell-2-undefined')).toContainText(updatedValue);

})
