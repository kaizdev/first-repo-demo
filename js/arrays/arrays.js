//* 1.  What are arrays?
// set of data, group of variables, JS way of creating lists

// We have some data that's related. Instead of storing that data in individual variables, we can create an array

const coach1 = "Martyna";
const coach2 = "Alex";
const coach3 = "Cal";
const coach4 = "Sandra";

console.log(coach1);
console.log(coach2);
console.log(coach3);
console.log(coach4);

// instead, let's create one variable to store all coaches
// access certain values in the array using an index
const coaches = ["Martyna", "Alex", "Cal", "Sandra"];
console.log(coaches);
console.log(coaches[0]);

// find the number of elements
console.log(coaches.length);

// if i wanted to access the last element? array.length - 1
console.log(coaches[coaches.length - 1]);
console.log(coaches[3]); // same as the above

//* Array constructor
const arr = new Array(1, 2, 3);
console.log(arr);

const arr2 = new Array(5);
console.log(arr2); //outputs 5 empty items (not an array of 1 with a value of 5)

// I want an array with 30x of 5
const arr3 = new Array(30).fill(5);
console.log(arr3);

const cities = ["Melbourne", "Sydney", "Brisbane"];
cities[3] = "Adelaide"; //add items to an array using index. If the index doesnt exist yet, then there might be a gap (empty spot)in the array
console.log(cities);

// overwrite the value of an array using the index as well
cities[0] = "Perth";
console.log(cities);

//^ If i declare an array with const, can still update the values of the array, but not replace the array with a new one

//* 4 different array methods

// Add things to the end of an array - PUSH
cities.push("Darwin");
console.log(cities);

// add things to the beginning of an array - UNSHIFT
cities.unshift("Gold Coast");
console.log(cities);

// remove things from end of an array - POP
cities.pop();
// another thing that happened is that it returns
const lastItem = cities.pop();
console.log(lastItem, "last item returned by .pop method");
console.log(cities);

// remove things from start of an array - SHIFT
// just like with pop, shift also returns the removed item

const firstCity = cities.shift();
console.log(firstCity, "first city returned from shift");
console.log(cities);

// What is the index of a given item in the array?
const sydneyIndexNumber = cities.indexOf("Sydney");
console.log(sydneyIndexNumber); // returns 1

//& can use indexOf to see if a given item is in the array
const melbourneIndex = cities.indexOf("Melbourne");
console.log(melbourneIndex); // returns -1 . So if the return is < 0, then we know it isn't in the array

//& can also use includes to check if a value is in the array
console.log(cities.includes("Melbourne"), "is Melbourne one of the cities?");
console.log(cities.includes("Sydney"), "is Sydney one of the cities?");

//& turning an array into a string using JOIN

const string = cities.join(" ");
console.log(`Some Australian cities are: ${string}`);

//& turning a string into an array using SPLIT
const stringToArray = string.split(" ");
console.log(stringToArray);
