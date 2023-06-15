// const person = { name: "Allen" };
// console.log(`${("" + person.age).slice(4, 6)}nance`);

const chars = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];
let i = 0;
let output = "";

while (i < chars.length) {
    output += String.fromCharCode(chars[i]);
    i++;
    // console.log(output);
}

const expected = "JavaScript";
console.log("Expected:", expected);
console.log("Actual:", output);
console.log(expected === output);

console.log(8 && 7 == "7");

console.log(+"345");

if ("false") {
    console.log("truthy");
}

console.log(+true);
