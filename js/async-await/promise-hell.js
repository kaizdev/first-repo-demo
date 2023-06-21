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
