// Inhertitance is a concept of OOPS, Using inheritance child class can aquire all properties and bahviours of parent class.
// We use extends keyword for implement inheritance
// Main purpose of inheritance is code resusability and avoid duplicacy

import { User } from "./exportClass.js"; // for imherit class from exportClass.js file

// way 1 - Inherit class within the same file --> import statement not required if we want to import class within the same file

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello ${this.name}`;

    }
}

class Student extends Person {
    study() {
        return `${this.name} is studying`;
    }
}

const s1 = new Student('Vinay');
console.log(s1.greet());
console.log(s1.study());

// way 2 - Inherit class from another file --> need import statement here imheriting user class

class empDetails extends User {
    getEmpDetails() {
        return `${this.firstName} ${this.lastNameage} is ${this.age} years old`;

    }
}
const emp1 = new empDetails('Kajal', 'Daware', 30);
const emp2 = new empDetails('Nehal', 'Raut', 30);
console.log(emp1.getEmpDetails); // getEmpDetails() method is defined in child class which is empDetails
console.log(emp1.getDetails()); // getDetails() method is deifined in parent(User) class which is available in child(empDetails) class


