// We cannot use iterators on objects

const car = {
    brand: "Toyota",
    year: 2023,
    colour: "white",
    wheels: 4,
};

// We can get an array of all object keys

console.log(Object.keys(car), "array of all keys");

// We can get an array of all object values
console.log(Object.values(car), "array of all values");

// We can get an array of all key-value pairs
console.log(Object.entries(car)),
    "array where each element is an array of exactly two elements";

//* Complex Data

// An array of objects
const coaches = [
    {
        id: 1,
        firstName: "Alex",
        lastName: "Baulderstone",
        age: 35,
        title: "Senior Coach",
    },
    {
        id: 2,
        firstName: "Remi",
        lastName: "Hoeppe",
        age: 32,
        title: "Senior Coach",
    },
    {
        id: 2,
        firstName: "Sandra",
        lastName: "Myrda",
        age: 26,
        title: "Junior Coach",
    },
    {
        id: 2,
        firstName: "Martyna",
        lastName: "Krol",
        age: 28,
        title: "Junior Coach",
    },
];

// previously for pure arrays, we could do const newArr = numbers.map(x => x +1)

// filter
const seniorCoaches = coaches.filter((coach) => coach.title.includes("Senior"));
console.log(seniorCoaches);

// get all coaches below 30
const below30 = coaches.filter((coach) => coach.age < 30);
console.log(below30);

// .map - I want an array of coaches firstNames
const firstNames = coaches.map((coach) => coach.firstName);
console.log(firstNames);

// .find - find a coach with a certain id

const coachWithID2 = coaches.find((coach) => coach.id === 2);
console.log(coachWithID2);

const findElement = (arr, id) => {
    const foundEl = arr.find((el) => el.id === id);
    if (!foundEl) {
        return `Element with id: ${id} not found`;
    }
    return foundEl;
};

console.log(findElement(coaches, 1));
