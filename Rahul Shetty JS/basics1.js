// printing directly
console.log("Hello World!");

// Storing an value into variable and then printing using variable
let a = 456;
console.log(a);

// identifying the data type of values stored in variables
let b = "Vinay";
let c = true;
let d = 120;
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));

let e = null;
console.log(e);


// Difference between var,let and const

// 1. var => if its declared globally it has global scope,if its is declared it inside function then it is functional scope. It is not blocked scope.

// global declared accessible globally
var message = "Hello, Good Morning Vinay";
function showMessage (){
    console.log(message);
}
showMessage();

// function scope
function message(){
    var greet  = "Hello Good Morning "
    return greet;
}
// console.log(greet);  //error ===> greet is not defined

// var is not blocked scope that means it is accessible outside the block

if(true){
    var msg = "var is not blocked scope";
}
console.log(msg);

// 2. let => It is global scope. let is blocked scope that means the variable declared with the let is only accessible inside the block where it is created

//block scope example

if (true) {
  let a = 10;
  console.log(a); // works
}
// console.log(a); // ❌ Error: a is not defined

// global scope example
let globalScope = "let keyword is global scope";
if(true) {
    console.log(globalScope);
}
