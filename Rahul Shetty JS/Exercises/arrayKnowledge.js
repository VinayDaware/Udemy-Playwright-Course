// Question 1 - Create expenses array,calculate total expenses, find lowest and highest number from array

// Creating an array
const expenses = [200, 2369.33, 1456, 698, 4785, 5000, 478];

// calculate total expenses
let sum = 0;
const length = expenses.length;
for (let i = 0; i < length; i++) {
    sum = sum + expenses[i];
}

const totalExpenses = sum;
console.log(`Total expenses are ${totalExpenses}`);

// finding highest expense
const highestExpense = Math.max(...expenses);
console.log(`Highest expense is ${highestExpense}`);

// finding lowes expense
const lowestExpense = Math.min(...expenses);
console.log(`Lowest expense is ${lowestExpense}`);

//Question 2 - Manipulate an array of strings (add, remove, sort)
// 1. Create an array named studentNames with the names of your students.
// 2. Add a new student name to the beginning of the array.
// 3. Remove the last student name from the array.
// 4. Alphabetize the student names within the array.


// 1. Creating studen array
const students = ['Vinay', 'Radha', 'Kajal', 'Gaurav', 'Nehal', 'Ashvin', 'Krishna'];
console.log(students);

// 2. Adding a new student name to the beginning of the array
students.unshift('Rakesh');
console.log(students);

// 3. Removing the last student name from the array.
students.pop();
console.log(students);

// 4. Alphabetize the student names within the array.
students.sort();
console.log(students);

// Question 3 - Apply transformations and calculations to array elements, and filter elements based on a condition
// 1. You have an array called productPrices with various product prices.
// 2. Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
// 3. Use the filter method to create a new array called affordableProducts containing only products priced below $50
// 4. Calculate the total cost of all items in the affordableProducts array using the reduce method.


// 1. Creating an array called productPrices with various product prices.

const productPrices = [400, 450.36, 896, 1000, , 49.4, 9563];

// 2. Applying a 10% discount to all prices using the map method and stores the results in a new array called discountedPrices.
const discountedPrices = productPrices.map(productPrices => productPrices * 0.1);
console.log(`The discounted prices on products are - ${discountedPrices}`);

// 3. Using the filter method to create a new array called affordableProducts containing only products priced below $50

const affordableProducts = discountedPrices.filter(discountedPrices => discountedPrices < 50);
console.log(affordableProducts);

// 4. Calculating the total cost of all items in the affordableProducts array using the reduce method.
const totalCost = affordableProducts.reduce((sum, elem) => sum + elem, 0);
console.log(`Total cost of the affordable products is - ${totalCost}`);