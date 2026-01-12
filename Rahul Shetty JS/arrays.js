// How to declare array
// first way
let marks = new Array(50, 60, 70, 80);

// second way
let fruits = ["apple", "banana", "mango"];

// How to access elements from array
let students = ["vinay", "kajal", "gaurav", "nehal", "kartik"];
console.log("Student at 1st place is - " + students[0]);
console.log("Student at 1st place is - " + students[1]);
console.log("Student at 1st place is - " + students[3]);
console.log("Student at 1st place is - " + students[4]);

// Finding length of an array --> using length method we can find an length of an array
let num = [1, 2, 3, 4, 5, 6]; //output -> 6
let arrayLength = num.length;
console.log(arrayLength);

// How to add element to the array ---> using push() method we can add element to an array at end/last position
let cities = ["Nagpur", "Pune", "Mumbai", "Gondia"];
console.log("Priting city name without adding anything - " + cities)
cities.push("Katol");
console.log("Priting city name after adding an Katol - " + cities)

// How to remove element from array from the last/end position --> using pop() method we can remove the element from last position of an array
let states = ["Maharashtra", "MP", "Gujrat", "UP"];
console.log("State names before removing - " + states);
states.pop();
console.log("State names after removing - " + states);

// How to add element into the array at the start/beginig od an array --> using unshift() method we can add an element at the start/beginig position
let colours = ["White", "Black", "Green", "Grey"];
console.log("Printing colours name before adding - " + colours);
colours.unshift("Yellow");
console.log("Printing colours name after adding - " + colours);

// How to remove element from the array at the start/beginig od an array --> using shift() method we can remove an element from the start/beginig position
let empid = [11, 12, 14, 16, 18, 19];
console.log("Printing empid before removing - " + empid);
empid.shift();
console.log("Printing empid after removing - " + empid);

// How to find an index position of an element in an array --> using indexOf() method we can find an index position of an element in an array
let names = ["Karan", "Arjun", "Shyam"];
let indexPosition = names.indexOf("Shyam");
console.log("Index position of an element is - " + indexPosition);

// How to find the element is present in the array or not --> using includes method wecan find the element is present in the array or not. It returns true if present else false

let villageNames = ["Bori", "Khairi", "Zilpa", "Wadhona"];
console.log(villageNames.includes("Bori"))
console.log(villageNames.includes("Isapur"));

// slice method -> it use to takes a small part from array or string based on start and end index position. It does not chnage original string or array.

// 1. Creating subarray using originar array
let cakes = ["Strawberry", "Butterscotch", "Blackforest", "Whiteforest"];
let cakeSlice = cakes.slice(1, 3);
console.log(cakeSlice);  // [ 'Butterscotch', 'Blackforest' ]

// here slice starts fron index 1 and end index 3. Start index icludes and end index excludes


// 2. String example with slice
let str = "javaScript";
let result1 = str.slice(4); // when we did not metion an end index it includes upto end index
let result2 = str.slice(0, 4);
console.log(result1);
console.log(result2);

//Explaination
// Index 0 - j
// Index 1 - a
// Index 2 - v
// Index 3 - a
// Index 4 - S
// Index 5 - c
// Index 6 - r
// Index 7 - i
// Index 8 - p
// Index 9 - t

//3. negative sclice

let myName = "Vinay Daware";
let result3 = myName.slice(6);
let result4 = myName.slice(-6);
let result5 = myName.slice(-12, -7);
console.log(result3);
console.log(result4);
console.log(result5);

//Explaination
// Positive Index 0 - v -> Negative Index-> Negative Index - -12
// Positive Index 1 - i-> Negative Index - -11
// Positive Index 2 - n-> Negative Index - -10
// Positive Index 3 - a-> Negative Index - -9
// Positive Index 4 - y-> Negative Index - -8
// Positive Index 5 --> Negative Index - -7
// Positive Index 6 - d-> Negative Index - -6
// Positive Index 7 - a-> Negative Index - -5
// Positive Index 8 - w-> Negative Index - -4
// Positive Index 9 - a -> Negative Index - -3
// Positive Index 10 - r-> Negative Index - -2
// Positive Index 11 - e -> Negative Index - -1
