// console.log
// Check if my code works correct, execute some code snippets, check values of variables, etc.

console.log("It's linked correctly");

// Output an error-like content
// console.error("Something went wrong...");

// Output warning
console.warn("Be careful");

console.warn("why doesnt this work?");

// * DATA TYPES

// Primitive data types - what are they?
// Fundamental building block of a language - can't be broken down any further
// Most basic type you have - number, string (sequence of characters)
// doesn't have any properties

// * What primitive types do we have in JS?
// 1. number - includes floats, big ints etc

// ? Operations
console.log(10 + 2);
console.log(32 - 5);
console.log(2 * 8);
console.log(10 / 3);

console.log("hello" + "nology");
console.log("helloo" - "o"); // won't work - will get NaN
console.log(typeof NaN);
console.log("1" + 1); // prints out '11' string
console.log("1" + "3");
console.log(parseInt("1") + 1);
console.log("hamburgers" - "s");
console.log(typeof ("hamburgers" - "s"));
console.log(typeof (99 * "luftbaloons"));
console.log(99 * "hello");

// 2. BigInt - when we need precise or very large values
// 3. String - wrapped in quotation (single or double or backticks)
// 4. Boolean - true/false
//

// Check data type using typeof
console.log(typeof "hi");
console.log(typeof 234);
console.log(typeof true);

// Comparison operators - they result in booleans
console.log(10 > 5);
console.log(5 < 6);
console.log(10 >= 10);
console.log(9 <= 8);

// 5. undefined - creating a variable but don't assign a value to it. It says lack of value, accidental
let i;
console.log(i);
console.log(typeof undefined); // * returns undefined

// 6. null - we want something to not have a value,  on purpose
// typeof here is an object (not a primitive)
console.log(typeof null); // * returns object

// 7. symbol
