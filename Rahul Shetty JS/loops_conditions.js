// in if loop if block executes or runs only condition is satisfied/true
// else block is executes or runs when condition is not satisfied/false in for loop
let age = 17;
if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("You are not eligible for vote try next time")
}

// Checking given number is odd or even number
let num = 7;
if(num%2===0){
    console.log(num+ " Is even number")
}else{
    console.log(num+" is an odd number")
}


//while loop runs or executes until and unless condition becomes false. Once the condition becomes false it will break
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


// we use for loop when we want  to execute loop again and again for fix number of times
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log('hello world');
}

// printing even numbers from 1 to 20
console.log("Printing even numbers")
for(let k = 0;k<=20;k++ ){
    if(k%2==0){
        console.log(k)
    }
}


// printing odd and even numbers from 1 to 20
let range = 20;
console.log("Printing even numbers");
for(let i = 1;i<=range;i++){
    if(i%2===0){
        console.log(i);
    }
}
console.log("Printing odd numbers");

for(let i = 1;i<=range;i++){
    if(i%2!=0){
        console.log(i);
    }
}


console.log("****Printing multiple of 2 & 5 in between 1 to 20****");

for(let k = 1;k<=20;k++){
    if(k%2==0 && k%5==0){
        console.log(k);
    }
}


console.log("****Printing multiple of 2 or 5 in between 1 to 50****");

for(let k = 1;k<=50;k++){
    if(k%2==0 || k%5==0){
        console.log(k);
    }
}


