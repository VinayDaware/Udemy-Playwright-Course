// Functions in JS are reusable block of code designed to perform specific task. We can define function once and we can call whenever we want.

// How to declare function
function sum (x,y){   
    return x+y;
}
let result = sum(6,7);
console.log(result);

// Default Parameter => Default parametrs are used when no arguments pass during the function call,when no argument pass function used default parameter

function greet(name="guest"){
    console.log("Hello "+name);
}
greet();

// Type of functions 
// 1. Named function => function who has own name while declaring.

function greet(){
   return "Hello Good Morning";
}
console.log(greet());

// 2. Anonymous function => The function that does not have an name.
const helloWorld = function(){
    return "Hello World!"
}
console.log(helloWorld());

// 3. function expressions => When we store function inside the variable(named or anonymous function)
const min = function minus(a,b){
    return a-b;
}
console.log(min(10,4));

// 4. Arrow function
const square = n => n*n;
console.log(square(4));