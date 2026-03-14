// Objects are used to store key value pairs to store and organize data & these key value pairs known as properties. i.e., objects are collection of properties

// 1. Creation of object
const person = {
    firstName: 'Vinay',
    lastName: 'Daware',
    age: 28
}

// 2. Accessing object --> we can access object using dot notationa nd backet notations
// A. Dot notation (.)

const firstName = person.firstName;
console.log(firstName);

// B. Bracket [] notation
const lastName = person['lastName'];
console.log(lastName);

// 3. Adding new peoperty to object
person.job = 'QA Engineer';
console.log(person);

// 4. Changing properties of an object
person.job = 'Automation QA Engineer';
console.log(person);

// 5. Deleting property from object --> delete keyword is used to delete an property from object
delete person.job;
console.log(person);

// 6. Checking property is peresent in object --> we use 'in' opertaor to check property present inside the object
const jobCheck = ('job' in person);
const ageCheck = ('age' in person);
console.log(jobCheck);
console.log(ageCheck);

// 7. Nested object --> Object that contains anothe object known as nested object
const myObj = {
    firstName: 'John',
    lastName: 'Carter',
    age: 48,
    myCars: {
        car1: 'Ford',
        car2: 'BMW'
    }
}
const car2 = myObj.myCars.car2;
console.log(car2);
const car1 = myObj.myCars['car1'];
console.log(car1);

// OBJECT METHODS --> Object methods are actions that can perform on object.Its an functions stores into the object as object property

const org = {
    orgName: 'Mahindra',
    ownerName: 'Mr. Aanand Mahindra',
    location: 'Mumbai',
    fullDetails: function () {
        return this.orgName + ', ' + this.ownerName + ', ' + this.location;  // this keyword is refer to an current object
    }
}
// for accessing object method we have to use parenthesis()
const orgDetails = org.fullDetails();
console.log(orgDetails);

// in above e.g this keywprd is reffered to an current object(org)

// Adding method to object
const emp = {
    firstName: 'Ram',
    lastName: 'Meghe',
    id: 12356
}
emp.getID = function () {
    return this.id;
}

const empID = emp.getID();
console.log(`Employee ID of employee is - ${empID}`);

// Adding JS method to an object
const familyHead = {
    firstName: 'Radheshyam',
    lastName: 'Tiwari',
    age: 55,
    details: function () {
        return (this.firstName + ' ' + this.lastName + ' ' + this.age).toUpperCase();
    }
}
const familyHeadDetails = familyHead.details();
console.log(familyHeadDetails);

// printing an object

//1. printing complete object
const stateDetails = {
    stateName: 'Maharashtra',
    capital: 'Mumbai'
}
console.log(stateDetails);

// 2. printing object property from object
const state = stateDetails.stateName + ',' + stateDetails.capital;
console.log(state);

// 3. printing object properties using for loop

// Type A
for (let key in stateDetails) {
    console.log(stateDetails[key]);
}

// Type B
let text = '';
for (const key in stateDetails) {
    text = text + stateDetails[key] + ' ';
}
console.log(text);

// printing object properties using Object.values()--> stores object values as an array
const stateArray = Object.values(stateDetails);
console.log(stateArray);

