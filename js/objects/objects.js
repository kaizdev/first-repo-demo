//~ 1. What are objects?
// Another data type in JS
// Something that represents a "thing", a real life entity
// Objects have properties that describe them and they have methods(functions) that describe what they can do

//~ 2. Why do we use them?

// data types - number, string, boolean, array,
// limitations with primitive data types - only describe one thing. Arrays list one thing
// firstName, lastName, address, date, email, dob -> how do we store this in a data type? Object is perfect for this kind of information

// Objects allow us to store data in key-value pairs. Key-value can be any data type. Gives context to the information

//~ 3. How to create objects in JS?
// objects are initialised with curly braces

const customer = {
    firstName: "Martyna",
    lastName: "Krol",
    address: "1 Sydney Road, Sydney",
    dob: "20-07-1997", // there is a date datatype, but for simplicity stored as a string here
    isRegularCustomer: false,
    numOfOrders: 3,
    // create a method
    printFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

// I can easily access each property of an object
console.log(customer);
console.log("hello");

// one way to access properties - dot notation
console.log(customer.firstName);
console.log(customer.isRegularCustomer);

console.log(customer.printFullName());

// Updating a property
// we re-assigned a new value to the numOfOrders property
customer.numOfOrders = 10;
console.log(customer);

// Add a property to the object
// I want to add an email
console.log(customer.email); // if it doesn't exist, get undefined back
customer.email = "martyna.krol@nology.io";

console.log(customer.email);

// assigning all the values for the customer object by creating a function
// this is called constructor. By convention constructor starts with Capital
function Customer(firstName, lastName, address, isRegularCustomer, dob, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.isRegularCustomer = isRegularCustomer;
    this.dob = dob;
    this.numOfOrders = 0; // we can also assign a value directly in the function (and leave it out during the customer2 creation). Then we need to remove the parameter from the function (e.g. remove numOfOrders)
    this.email = email;
}

// can set a default value by setting the value in the params (if left blank during the new Customer, the default value will be added)

const customer2 = new Customer(
    "Sandra",
    "Myrda",
    "1 Sydney Road, Sydney",
    false,
    "12-06-1998",
    "sandra@gmail.com"
);

console.log(customer2);

//* Classes

// Another way of accessing properties of an object - square bracket notation
console.log(customer2["firstName"]);
// I don't know what the name of my key is

const printOneValue = (object, key) => {
    console.log(object[key]);
};
// we don't know the key value in the printOneValue function - so we use square bracket!.

printOneValue(customer2, "dob");

const coach = {
    firstName: "Alex",
    lastName: "Baulderstone",
    title: "Senior Coach",
};

printOneValue(coach, "title");

// username: full name
const student = {
    "john-smith": "John Smith",
};
console.log(student["john-smith"]);

// not common to have a key that has dashes or spaces - but we can work with this object using the square bracket notation

//~ Renaming a key name
const coach2 = {
    firstName: "Cal",
    lastName: "Hill",
    title: "Head of Education",
};

// create a new object with different key names but values from the other objects
const coach3 = {
    name: coach2.firstName,
    surname: coach2.lastName,
    title: coach2.title,
};
// here we have a new object with new key names

console.log(coach, "coach");
console.log(coach2, "coach2");
console.log(coach3, "coach3");

//* Object destructuring
// const {/* properties go here */} = coach2
const { firstName, lastName, title } = coach2; // get the key value pair from here
console.log(firstName);
console.log(lastName);
console.log(title);

// create a new object
const updatedCoach = { name: firstName, surname: lastName, title };
console.log(updatedCoach);

/*------------------------------------*\
#
\*------------------------------------*/

const coach4 = {
    firstName: "Martyna",
    lastName: "Krol",
    title: "Junior Coach",
    dateStarted: "02-02-2021",
    city: "Melbourne",
};

// I want to rename location to city
// with object destructuring, I can extract just one property and leave the rest grouped together

const { city, title: coach4Title, ...remainingProperties } = coach4; // these are creating new variables called city, etc..
console.log(city);
console.log(remainingProperties); //object with all the other values grouped together
const updatedCoach4 = { address: city, ...remainingProperties };
console.log(updatedCoach4);

// Deleting a key (rare). More common, destructuring and create new object using destructuring with one less key
const student2 = {
    id: 123456,
    firstName: "John",
    cohort: "Iceland",
};

// i would use object destructuring for it
const { id, ...remaining } = student2;
const cleanedUpStudent = { ...remaining }; // if we didnt use the spread operator, this would create a object with a nested object called remaining (unnecessary complexity)
console.log(student2);
console.log(cleanedUpStudent);

//* How to check if an object has a certain property (key) - using method called hasOwnProperty // returns boolean (true/false)
console.log(student2.hasOwnProperty("firstName"));
