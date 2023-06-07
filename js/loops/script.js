//1.  What are loops?
// Sometimes we want to run the same code multiple times, instead of writing it manually, i create a loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// very tedious and time consuming and error prone

//* 2. Why do we need them?
// Quicker to do something multiple times, easier to implement changes, less prone to errors

console.log("------");

//* For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// let i = 1
// initial value

// i < 6
// condition -> loop will run until condition is no longer true

// i++
// incrementing i so loop doesn't run forever

// first iteration
// i = 0
// console.log(0)
// after the log, i gets updated to i = 1 (because of the i++)

// second iteration
// i = 1
// console.log(1)
// after the log, i gets updated to i = 2 etc...

//* While Loops
// Can use it when I don't know how many iterations I will need
let j = 1;

while (j < 6) {
    console.log(j, "from while loop");
    j++;
}

// generate a random number
// want that number to be 5, but don't know how many iterations.
let num = Math.ceil(Math.random() * 10);
// console.log(num);

while (num !== 5) {
    console.log(`The random number is ${num}`);
    num = Math.ceil(Math.random() * 10);
}

console.log(num);
