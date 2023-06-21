// Promise Hell
/* 
- We end up with some kind of computation where one result depends on some previous result 
- We have a async process that relies on the rules of another async process
- .then is the only place to access the value
*/

const rememberName = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input === "string") {
                resolve(input);
            } else {
                reject("That's not a name!");
            }
        }, 2000);
    });
};

rememberName("Martyna")
    .then((name) => console.log(name))
    .catch((error) => console.log(error));

const rememberLocation = (name) => {
    const locations = {
        martyna: "VIC",
        remi: "NSW",
        alex: "SA",
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (locations[name.toLowerCase()]) {
                resolve(locations[name.toLowerCase()]);
            } else {
                reject(new Error("I don't know where you live"));
            }
        }, 1500);
    });
};

// need the value of the previous promise as a parameter - that is why the name .then comes first
// the only place we can access nam,e is inside the name.then, then the only place we can access location, is inside the location. then
rememberName("Cal")
    .then((name) => {
        console.log(`Hi, ${name}, how are you?`);
        rememberLocation(name)
            .then((location) => {
                console.log(`What's the weather in ${location}`);
                // Call it here if the function needs a location
                // someOtherFunction(location).then(()=>{})
            })
            .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
