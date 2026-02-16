// Strings and its methods

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


