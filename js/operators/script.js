//^    +, -, *, /
//& Working with numbers
let value;
value = 10 + 10;
console.log(value);

value = 10 * 10;
console.log(value);

value = 10 - 2;
console.log(value);

value = 10 / 2;
console.log(value);

console.log(2 ** 3); // power of
console.log(Math.pow(2, 3));
//* Can also use Math via, console.log(Math.)

// % - modulus (remainder)
// We can use it to check if a number is even or odd
console.log(9 % 2); // outputs 1

// If modulus gives us 0 when dividing by 2 -> our number is even
console.log(4 % 2); // outputs 0
console.log(5 % 2); // returns 1, so odd

// Get the last digit from a long number use modulo 10
console.log(18 % 10); // outputs 8

//* Assignment operators
// same as doing value = value + 2
value += 2;
console.log(value);

// same as doing value = value - 3;
value -= 3;
console.log(value);

// same as value = value * 10
value *= 10;
console.log(value);

// same as value = value / 5
value /= 5;
console.log(value);

//* Incrementor and decrementor
// changes the value and returns the alerted value
console.log(++value);
console.log(value);

// changes the value but returns the PREVIOUS value
console.log(value++);

console.log(--value);
console.log(value--);

//& Working with strings
let myName = "Kai";
const fullSentence = `Hello my name is ${myName}`;
console.log(fullSentence);

let num = 1.5;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let num2 = 1.2345678;
console.log(num2.toFixed(2));

console.log(-2 % 5);
