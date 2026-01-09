// How to declare array
// first way
let marks = new Array(50,60,70,80);

// second way
let fruits = ["apple","banana","mango"];

// How to access elements from array
let students = ["vinay","kajal","gaurav","nehal","kartik"];
console.log("Student at 1st place is - "+students[0]);
console.log("Student at 1st place is - "+students[1]);
console.log("Student at 1st place is - "+students[3]);
console.log("Student at 1st place is - "+students[4]);

// Finding length of an array --> using length method we can find an length of an array
let num = [1,2,3,4,5,6]; //output -> 6
let arrayLength = num.length;
console.log(arrayLength);

// How to add element to the array ---> using push() method we can add element to an array at end/last position
let cities = ["Nagpur","Pune","Mumbai","Gondia"];
console.log("Priting city name without adding anything - " +cities) 
cities.push("Katol");
console.log("Priting city name after adding an Katol - " +cities) 

// How to remove element from array from the last/end position --> using pop() method we can remove the element from last position of an array
 let states = ["Maharashtra","MP","Gujrat","UP"];
 console.log("State names before removing - "+states); 
states.pop();
console.log("State names after removing - "+states); 

// How to add element into the array at the start/beginig od an array --> using unshift() method we can add an element at the start/beginig position
let colours = ["White","Black","Green","Grey"];
console.log("Printing colours name before adding - "+colours);
colours.unshift("Yellow");
console.log("Printing colours name after adding - "+colours);

// How to remove element from the array at the start/beginig od an array --> using shift() method we can remove an element from the start/beginig position
let empid = [11,12,14,16,18,19];
console.log("Printing empid before removing - "+empid);
empid.shift();
console.log("Printing empid after removing - "+empid);

// How to find an index position of an element in an array --> using indexOf() method we can find an index position of an element in an array
let names = ["Karan","Arjun","Shyam"];
let indexPosition = names.indexOf("Shyam");
console.log("Index position of an element is - "+indexPosition);

// How to find the element is present in the array or not