// const source = [1, 2, 3, 4, 5];
// const destination = [];

// for (let i = 0; i < source.length; i++) {
//     const current = source[i] + 3;

//     if (current % 2 === 0) {
//         destination.push(current);
//     }
// }

// console.log(destination);

// // const destinationUsingMap = source.map((num) => num + 1);
// // console.log(destinationUsingMap);

// // const filterArr = source.filter((num) => num % 3 === 0);
// // console.log(filterArr);

// // const newArr = source.reduce((acc, curr) => {
// //     const current = curr + 3;
// //     console.log({ acc, curr });
// //     if (current % 2 === 0) {
// //         acc.push(current);
// //     }
// //     return acc;
// // }, []);

// // console.log(newArr);

const source = "Convert to snakecase".split("");
let str = "";

for (let i = 0; i < source.length; i++) {
    if (source[i] === " ") {
        str += "_";
    } else {
        str += source[i].toLowerCase();
    }
}

console.log(str);

const snakeCase = source.reduce((acc, curr) => {
    if (curr === " ") {
        acc += "_";
    } else {
        acc += curr.toLowerCase();
    }
    return acc;
}, "");

console.log(snakeCase);
