// Arrays and Loops
// Arrays store a number of elements

// option1 - for loop that loops through the array and do something to every element

const students = ["kai", "john", "mike"];
// print each student
for (let i = 0; i < students.length; i++) {
    console.log(`Hello, ${students[i]}`);
    console.log(`the index is ${i}`);
}

// option2 - have an array, create a new array where every element is changed
// Want an array with student name but uppercase
const studentsUpperCase = [];
for (let i = 0; i < students.length; i++) {
    const uppercaseStudent = students[i].toUpperCase();
    studentsUpperCase.push(uppercaseStudent);
}

console.log(studentsUpperCase);

// Can start with an array, and end up with any data type that i want, created based on that array

const letters = ["n", "o", "l", "o", "g", "y"];
let stringFromLetters = "";

for (let i = 0; i < letters.length; i++) {
    stringFromLetters += letters[i];
}

console.log(stringFromLetters);

let numberOfO = 0; // these blank variables need to be a LET (as we won't be able to re-assign a const!)
// count how many letters are "o" are in the array
for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "o") {
        numberOfO += 1;
    }
}

console.log(numberOfO);
