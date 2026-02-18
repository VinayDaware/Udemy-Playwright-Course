// Strings and its methods

const { start } = require("node:repl");

// 1. length property --> it returns length of an string. It stores data does not perform any action hence it is known as property.
const firstName = "Vinay";
const len = firstName.length;
console.log(firstName);

// 2. slice() method - it extracts an part of string and returns into substring
const text = "Hello World";
// slice with start and end position
const subText = text.slice(0, 5);
console.log(subText);

// slice with start position only excluded end position
const subText1 = text.slice(6);
console.log(subText1)

// slice with negative position start and end start counts from last character for negative start and end
const subText2 = text.slice(-11, -5);
console.log(subText2);

// slice with negative start position
const subText3 = text.slice(-5);
console.log(subText3);

// 3. charAt() method - This method returns the character at specified index position in a string. 
const fullName = "Vinay Daware";
const charPosition = fullName.charAt(4);
console.log(charPosition);

// 4. split () method - This method is used to divide string into an array of substrings based on specified seperator
// spliting using  ,
const fruits = 'apple,banana,mango';
const splitFruits = fruits.split(',');
console.log(splitFruits);       // [apple,banana,mango]
console.log(splitFruits[1]);    // 0 - apple, 1 - banana, 2-mango 
console.log(splitFruits[1,2])   // banana, mango

// spliting using " "
const sentence = "Orrange city of India - Nagpur";
const splitSentence = sentence.split(" ");
console.log(splitSentence);         // ['Orrange','city', 'of', 'India', '-', 'Nagpur']
console.log(splitSentence[3]);      // India

// Split using characters ""
const name = "Vinay";
const splitName = name.split("");
console.log(splitName);     //[ 'V', 'i', 'n', 'a', 'y' ]
console.log(splitName[4]);  // y

// Split using - '-'
const capital = "New Delhi - is a capital of India";
const splitCapital = capital.split('-');
console.log(splitCapital);  // [ 'New Delhi ', ' is a capital of India' ]
console.log(splitCapital[0]); // New Delhi

// split using character
const day = "Wednesday";
const splitDay = day.split("n")
console.log(splitDay);    // ['Wed','esday']
console.log(splitDay[0]);

// 5.trim() method - This method is used to remove white spaces from bothe side 

// triming both side of white spaces
const cityName = '    Nagpur     ';
const cityTrim = cityName.trim();
console.log(cityName.length);   // 15
console.log(cityTrim);          //Nagpur
console.log(cityTrim.length);   //6

//trimStart() method - this method is used to remove an white spaces from start/leading/left side
const startTrim = cityName.trimStart();
console.log(startTrim);         // Nagpur     

//trimEnd() method - This method is used to remove the whites spaces from end/trailing/right side
const endTrim = cityName.trimEnd();
console.log(endTrim);

