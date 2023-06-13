//* break
// I want to find something in an array -
// As soon as I find what I'm after, I don't need to keep looping through the rest of the array

const names = ["daniel", "ella", "rachel", "john"];

const toFind = "ella";

let found = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === toFind) {
        found = true;
        break;
    }
}

if (found) {
    console.log(`${toFind} was found in the array`);
} else {
    console.log(`${toFind} was not found in the array`);
}

// if we look at the iterations, only 2 were performed (0 and 1)

//* Continue

let myString = "This is a sentence. This is another sentence.";
const vowels = ["a", "e", "i", "o", "u"];
// let's count all the characters that are not an empty space or vowel

let count = 0;
for (i = 0; i < myString.length; i++) {
    //skip if empty space or vowel
    console.log(i, "this is i in a loop with continue");
    if (vowels.includes(myString[i]) || myString[i] === " ") {
        continue; // the count +=1 will not run with the continue, it will move onto the next loop
    }
    count += 1;

    if (myString[i] === ".") {
        break;
    }
}

console.log(count);
