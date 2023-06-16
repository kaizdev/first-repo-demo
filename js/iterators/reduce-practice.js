//1 Sum of an array: Use reduce to find the sum of all numbers in an array.
const numArr = [5, 10, 15, 20, 25];
const sumNumArr = numArr.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumArr, "- Sum of an array");

//2 Product of an array: Use reduce to find the product of all numbers in an array.
const prodArr = [1, 2, 3, 4, 5];
const prodArrReduce = prodArr.reduce((acc, curr) => {
    // console.log({ acc, curr });
    return acc * curr;
});

console.log(prodArrReduce);

//3 Largest number: Use reduce to find the largest number in an array.
const largestNums = [44, 16, 78, 4, 66, 31];
const findLargestNum = largestNums.reduce((acc, curr) => {
    // console.log({ acc, curr });
    return curr > acc ? curr : acc;
}, 0);

console.log(findLargestNum);

//4 Counting instances: Use reduce to count the number of times each element appears in an array.
const fruit = ["apple", "banana", "apple", "orange", "banana", "banana"];

//5 Flatten an array: If you have an array of arrays, use reduce to flatten it into a single array.
// Flatten an array: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//6 Grouping objects: Suppose you have an array of objects where each object has a type property. Use reduce to group these objects by the type property.
// Grouping objects: [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'grape'}, {type: 'vegetable', name: 'lettuce'}]

//7 Property sum: Given an array of objects where each object has a price property, use reduce to find the total sum of prices.
// Property sum: [{name: 'item1', price: 10}, {name: 'item2', price: 20}, {name: 'item3', price: 30}, {name: 'item4', price: 40}]

//8 Array to Object: Given an array of strings, use reduce to turn it into an object where each key is the original string and each value is the length of the string.
// Array to Object: ['JavaScript', 'Python', 'Ruby', 'Java', 'C++']

//9 Filter using Reduce: Implement the filter functionality using reduce. Given an array of numbers, filter out the odd ones.
// Filter using Reduce: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//10 Map using Reduce: Implement the map functionality using reduce. Given an array of numbers, return a new array that squares each number.
// Map using Reduce: [1, 2, 3, 4, 5]
