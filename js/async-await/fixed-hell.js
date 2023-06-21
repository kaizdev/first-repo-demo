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

// the order is a lot more clear - in hierarchical order
async function letTalk(input) {
    console.log("Hello...");
    const name = await rememberName(input); // wait for promise to stop pending. Name will then be some value
    console.log(`Hi ${name}, how are you?`); // will have access to the name
    const location = await rememberLocation(name); // will have access to the name
    console.log(`What's the weather in ${location}`);
}

// letTalk("Martyna");

// What if we want to catch errors?
async function letsTalkWithErrors(input) {
    // I can put try catch block here
    try {
        // a function that could throw an error
        console.log(`Hello...`);
        const name = await rememberName(input);
        console.log(`Hi ${name}, how are you?`);

        const location = await rememberLocation(name);

        // if (location === "NSW") {
        //     throw new Error("I prefer VIC");
        // }

        console.log(`What's the weather in ${location}`);
    } catch (error) {
        console.log(error, "error"); // this catch will catch both of the errors, where previously we needed 2 catches to log the errors.
    }
}

letsTalkWithErrors("Remi");
