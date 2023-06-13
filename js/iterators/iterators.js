//* 1. What are array iterators
// built in methods / functions we can call on arrays that operate on each individual element of that array

//* 2. Why should we use them?
// Easier syntax to write
// easier to read, easier to debug, less chance of making errors / creating bugs
// indexes will be dealt with for us

// note: for loops are just as performant as iterators

//^ MAP

//* What are callback functions?
// in js, a function is a value, which means we can pass it as a parameter to a different function

function add(num1, num2) {
    console.log(`add function, num1 is ${num1}, and num2 is ${num2}`);
    return num1 + num2;
}

const subtract = (a, b) => {
    console.log(`subtract, a is ${a} and b is ${b}`);
    return a - b;
};

function doMath(x, y, callback) {
    return callback(x, y);
}

console.log(doMath(2, 5, add));
console.log(doMath(10, 3, subtract));

//* Map takes a call back function as a parameter

// I have an array, I want a new array with every element incremented by 1

const numbers = [1, 2, 3, 4, 5, 6];

//& Using for loop, manually create new array to store the incremented array
const incrementedNums = [];

for (let i = 0; i < numbers.length; i++) {
    incrementedNums.push(numbers[i] + 1);
}

console.log(incrementedNums);

//& Using a map function, which returns a NEW array - no need to create an empty one, or push to it
//& MAP is an iterator - run on every element of the array, no need to write the logic myself

// map takes in a callback function

function addOne(num) {
    return num + 1;
}

const incrementedWithMap = numbers.map(addOne); // using a callback function using map to iterate through the array
console.log(incrementedWithMap, "numbers incremented with map");

// I want a new array with numbers to the power of 2
function squareNum(num) {
    return num ** 2;
}

const numsSquare = [];
for (let i = 0; i < numbers.length; i++) {
    numsSquare.push(squareNum(numbers[i]));
}

console.log(numsSquare);

//& Using map

const squareNumwithMap = numbers.map(squareNum);
console.log(squareNumwithMap, "square nums array with map");

// I want a new array with double numbers
function doubleNum(num) {
    return num * 2;
}

const doubleArr = numbers.map(doubleNum);
console.log(doubleArr);

//^ Using Maps and functions together
// go through the array, one element (number) at a time
const anotherDoubleNums = numbers.map((number) => {
    // write what I want to do with each element
    // I need to return it
    // console.log(number, "this is the first parameter if the callback, it is each element of the array, starting at the first one")
    return number * 2; // if we forget the return keyword, we will get undefined!
});

console.log(anotherDoubleNums, "double numbers with map");

// we know that with arrow functions, we can skip {} and return if it is a one line function
const oneLineDoubleNums = numbers.map((number) => number * 2);
console.log(oneLineDoubleNums);
