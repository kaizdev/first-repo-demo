// Thurs 22/06/23
// What is fetch?

// How to use it?

// API
// Request
// fetch is not a part of JS - it is a WEB API , we have access to it through the browser

//* .fetch method
// returns a promise
// we use it to request some resources

//* HTML protocol
// sending a request
// GET, POST, PUT, PATCH, DELETE
// receiving a response
// status code:
// 404 - not found
// 200 - OK
// body - the data we are after from the database

// documentation -> end point -> different URL to get different data

// pasting an API in the browser sends a GET request
// eg https://randomuser.me/api/

// const myFetch = fetch("some string"); // a url from an API

const myFetch = fetch("https://randomuser.me/api/");
// gives back a promise response object

// console.log(myFetch); // can only view the promise object
// myFetch.then((response) => console.log(response));
// ReadableStream in the body
// headers -> used for authentication for certain secure APIs

//~ Getting the body from the API GET request
// .json returns an object that resolves to a promise

// myFetch is a promise. I need .then to access the Response object.

//^ Example of fetch using .then (notice we need 2 .thens (one for response, one for json))
// myFetch.then((response) => {
//     console.log(response); //& Note that the response itself only has a ReadableStream -> need to convert to .json() first
//      the Response object has a .json() method that also returns a promise. This method takes the body out of the response and converts it into a javascript object
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

async function fetchUser() {
    const response = await fetch("https://randomuser.me/api/"); // this returns a promise. Need await because the value of the promise feeds into the .json() i.e. we don't want a pending promise - only a resolved promise
    // console.log(response);
    const data = await response.json(); // the json returns a promise, so let's await the result
    console.log(data.results[0]); // first element from the array. Results only has 1 user in this API
    const nameObj = data.results[0].name;
    console.log(nameObj);
    const { first, last } = nameObj; // destructuring the object to get the first and last names
    console.log(first);
    console.log(last);

    //& I want the name property - I want first and last to add it to my H2.
    document.querySelector("h2").innerText = `${first} ${last}`;
}

// fetchUser();

// I want to call the fetchUser when the button gets clicked.
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    fetchUser();
});
// we could also add the async function inside the event listener, instead of having it outside..
