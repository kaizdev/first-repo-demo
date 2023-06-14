//* FIND
// returns a single value that matches our condition (only the first match)

const fruit = ["apple", "pear", "banana", "grape"];

const fourLetterFruit = fruit.find((f) => f.length === 4);

console.log(fourLetterFruit, "- four letter fruit");

const fiveLetterFruit = fruit.find((f) => f.length === 5);

console.log(fiveLetterFruit, "- five letter fruit"); // ! only returns the first match! You can use filter() to find all five letter fruits
//& grape is also a five letter fruit

const all5LetterFruit = fruit.filter((f) => f.length === 5);
console.log(all5LetterFruit);
// [apple, grapes]

//* EVERY
// Check if all elements in an array meet a certain condition - returns boolean
const veg = ["leek", "corn", "kale"];

const areAll4Letters = veg.every((item) => item.length === 4);
console.log(areAll4Letters); //true

//* SOME
// Checks if at least one element meets a certain condition - returns boolean

const atLeastOne4LettersLong = veg.some((el) => el.length === 4);
console.log(atLeastOne4LettersLong); //true, because at least one is at least 4 length

//* forEach
// iterates through every element of an array
//& it doesn't return anything. It will return undefined if trying to return an item

const veggies = veg.forEach((el) => {
    console.log(el);
});

//* REDUCE
// We can use Reduce if we want to reduce an array to a single value

//~ Using a for loop for adding (instead of reduce)
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

//~ Using reduce to combine the elements

// here we will only pass one param to reduce -> our callback function
const reduceSum = numbers.reduce((total, current) => {
    // console.log(total, "total");
    // console.log(current, "current");
    console.log({ total, current });
    return total + current;
});
// total == sum at the start

// we will pass another optional param to reduce

let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}

const reduceSUmWithInitialVal = numbers.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
}, 0); //~ Adding an initial value to reduce (the acc value). If we don't pass an initial value to reduce, it defaults to the first element in the array

console.log(reduceSUmWithInitialVal);

//& Strings

const letters = ["h", "e", "l", "l", "o"];
const word = letters.reduce((acc, curr) => {
    console.log({ acc, curr });
    return (acc += curr);
}, "");

console.log(word);
//^ because no initial value was set, the first value is set as index 0 of the array

//? What is going on inside the reduce?
//? This reduce has an initial value passed to it
//? 1st iteration, accumulator has the value of initial value
// current is the first element of the array
// acc = "", curr = "h"

// I add acc and curr -> "h"

//? 2nd iteration
// accumulator is now "h"
// current is the next element in the array - "e"
// I add accumulator and current -> "he"

//? 3rd iteration
// acc = "he", curr = "l"
// acc + curr -> "hel"

//? 4th iteration
// acc = "hel", curr = "l"
// I add acc and current -> "hel" + "l" -> "hell"

//? 5th iteration
// acc = "hell", curr ="o"
// i add acc and current -> "hell" + "o" -> "hello"

// "12345"
const stringFromNumbers = numbers.reduce((acc, curr) => {
    return acc + curr;
}, "");

console.log(stringFromNumbers); //with initial value set to string, this will give me a string back. If no initial value set, it will return a number by default because otherwise it takes index 0

//~ I want a string with all letters to uppercase without anything in between
const lowerCaseLetters = ["n", "o", "l", "o", "g", "y"];

const upperCaseStr = lowerCaseLetters.reduce((acc, curr) => {
    return acc + curr.toUpperCase();
}, "");

console.log(upperCaseStr);

//? We can use reduce like we would use map -> to get a new array of the same length back. Set the data type we want in the initial value

// ------------------ //

const numbersToDouble = [4, 5, 8];

const doubledWithReduce = numbersToDouble.reduce((acc, curr) => {
    console.log({ acc, curr });
    const doubledItem = curr * 2;
    acc.push(doubledItem);
    return acc;
}, []);

console.log(doubledWithReduce);

// --------------------------------
//? we can use reduce like we would use filter -> to get an array of elements that fulfil a certain condition

const numbersToFilter = [12, 45, 62, 57];

const evenNums = numbersToFilter.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(evenNums, "- even numbers");
