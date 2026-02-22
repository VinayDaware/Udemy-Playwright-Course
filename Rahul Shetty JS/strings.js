// Strings and its methods

// 1. length property --> it returns length of an string. It stores data does not perform any action hence it is known as property.
const firstName = "Vinay";
const len = firstName.length;
console.log(firstName);

// 2. slice() method  --> it extracts an part of string and returns into substring
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

// 3. charAt() method  --> This method is used to find an character at specified index position.
const fullName = 'Vinay Daware';
const charPosition = fullName.charAt(6);
console.log(charPosition);

// 4. split() method  --> This method is used to devide an string into an array of substring based on specified seperator

// spliting using ,(comma)
const fruits = 'apple,banana,pineapple,mango';
const splitFruits = fruits.split(',');
console.log(splitFruits);
console.log(splitFruits[2]);
console.log(splitFruits[1], splitFruits[2]);

// spliting using space ' '
const sentence = 'Orrange city of India - Nagpur';
const splitSentence = sentence.split(' ');
console.log(splitSentence);
console.log(splitSentence[3]);

// spliting using charatcters ''
const myName = 'Vinay';
const myNameSplit = myName.split('');
console.log(myNameSplit);
console.log(myName[2]);

// spliting using '-'
const capital = 'Delhi - is a capital of India';
const splitCapital = capital.split('-');
console.log(splitCapital[0]);

// spliting using character here 'd';
const day = 'Monday';
const daySplit = day.split('d');
console.log(daySplit);
console.log(daySplit[0]);

// 5. trim() method  --> this method is used to remove white spaces from both side

// removing white spaces from both side
const cityName = '    Nagpur  ';
console.log(cityName);
const originalLength = cityName.length;
console.log(originalLength);
const trimCityName = cityName.trim();
console.log(trimCityName);
const lengthAfterTrim = trimCityName.length;
console.log(lengthAfterTrim);

// trimStart() method  --> this method removes an white spaces from start/left/leading
const startTrim = cityName.trimStart();
console.log(startTrim);
console.log(startTrim.length);

// trimEnd() method  --> this method removes an white spaces from right/end/trailing
const trimEnd = cityName.trimEnd();
console.log(trimEnd);
console.log(trimEnd.length);

// 6. parseInt() method  --> this method converts string into numbers/integers
const date = '28';
const nextDate = '30';
const diff = parseInt(nextDate) - parseInt(date);
console.log(diff);

// 7. parseFloat() method  --> this mthos is used to convert string into floating numbers
const floatDate = parseFloat(date);
console.log(typeof floatDate);  // it shown numbers because in JS floats = numbers


// 8. toString() method  --> this method is used to convert numbers into string
const diffString = diff.toString();
console.log(typeof diffString);

// 9. concat() method  --> this method is used to join two strings. Two ways are there to perform concatination

// way 1. Using +
const candidateName = "Vinay";
const candidateLastName = "Daware";
const candidateFullName = candidateName + " " + candidateLastName;
console.log(candidateFullName);

// way 2. using concat() method
const myCity = 'Nagpur';
const myState = 'Maharashtra';
const cityAndState = myCity.concat(" ", myState);
console.log(cityAndState);

// 10. indexOf() method  --> this method is used to find an index postion of character or substring in string. This method is case sensitive
const script = 'JavaScript';
const indexPosition = script.indexOf('S');
console.log(indexPosition);

// 11. toUpperCase() method  --> this method is used to convert lower case string to upper case
const lowerCase = 'namdeo daware';
const upperConverted = lowerCase.toUpperCase();
console.log(upperConverted);

// 12. toLowerCase() method  --> this method is used to convert uppercase string to lower case
const upperCase = 'KESHAORAO DAWARE';
const lowerConverted = upperCase.toLowerCase();
console.log(lowerConverted);