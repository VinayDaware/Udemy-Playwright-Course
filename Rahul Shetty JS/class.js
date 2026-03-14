// creating class --> class keywrd is use to create an class

class Person {
    age = 25;
}
// accessing properties of class
const person = new Person();
const age = person.age;
console.log(age);

// adding property to class using getter method --> when we use get keyword before method name is act as a property not an method of class

class College {
    get name() {
        return 'VMIT';
    }
    get location() {
        return 'Nagpur';
    }
    get collegeDetails() {
        return this.name + ', ' + this.location;
    }
}
const college = new College();
const collegeDetails = college.collegeDetails;
console.log(collegeDetails);

// Defining constructor inside a class
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// accessing constructor from class
const student1 = new Student('Ram', 'Sharma');
console.log(student1);
const student1Name = student1.firstName;
console.log(student1Name);

// defining method inside a class
class Department {
    constructor(deptName, HOD) {
        this.deptName = deptName;
        this.HOD = HOD;
    }
    //method
    deptInfo() {
        return this.deptName + ', ' + this.HOD;

    }
}
const department1 = new Department('Mechanical Engineering', 'Mr. Balsaraf');
console.log(department1.deptInfo());
