//~ 1. What is JSON?
// JavaScript Object Notation - format of storing our key-value pairs (language independent). Sending data from front-end to back-end
// Easily convert object in another language (e.g. java object)
// Lightweight format for storing and transporting data
// It is language independent, we can easily translate it into another programming language (object / instance of a class in Java)

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isEmployed: true,
    interests: ["cooking", "cycling", "skiing"],
};

console.log(typeof person); // -> object
console.log(person.firstName); // John
console.log(person.interests); // [ 'cooking', 'cycling', 'skiing' ]
console.log(person.interests[0]); // cooking
console.log(person["lastName"]); // smith

//~ 2. What is serialization?
// Converting the object into a special string - formatted in a special way t hat will resemble the structure of an object
// Easy to read and understand what it is and each piece of data
//^ JSON.stringify method -> serialised our object -> ready to be sent to backend to store in database

const personJSON = JSON.stringify(person);
console.log(typeof personJSON); // string
console.log(personJSON); // {"firstName":"John","lastName":"Smith","age":25,"isEmployed":true,"interests":["cooking","cycling","skiing"]}

//~ 3. Why do we use it?
// Now I can send it over HTTP - making an API call -> backend, which can de-serialise it (turn into object for that language) and save into DB
// I might receive some JSON data when I FETCH this

//& Because JSON is a string, we can't do the object manipulation etc. We need to convert it back!
// JSON will return undefined if try to do object manipulation

//^ JSON.parse
const anotherPersonJSON =
    '{"firstName": "Kate", "lastName": "Smith", "age": 35, "isEmployed":false, "interests": ["cooking", "running"]}';

console.log(anotherPersonJSON);

// I want to deserialize the JSON string - turn it into an object, so it is easier to work with
const anotherPerson = JSON.parse(anotherPersonJSON);
console.log(anotherPerson); // returns the object
console.log(typeof anotherPerson); // object
console.log(anotherPerson.firstName); // Kate
