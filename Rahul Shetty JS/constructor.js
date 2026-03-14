// When we create an object with new keyword some piece of code executes automatically to initialize an object and this piece of code is known as constructor.
// I mean to say that constructor is an special type of function used to create and initialize multiple object with the same structure and behaviour

// Defining constructor

function Student(roll_no, firstName, lastName, age, gender, city) {
    this.roll_no = roll_no;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.city = city;

}

// creating object 
const student1 = new Student(1, 'Vinay', 'Daware', 26, 'Male', 'Nagpur');
const student2 = new Student(2, 'Kajal', 'Nandurkar', 28, 'Female', 'Nagpur');

// Accessing object
console.log(student1);
//Accessing object properties
console.log(student2.firstName);