# Firestore

## Why do we need databases?

-   Store data and information
-   Persist application state
-   Previously the state was only available as long as the page was not refreshed or stayed open on the live server

## What kind of databases are there?

### Document

-   Basically JSON (in the cloud)
-   No enforced structure
-   Duplicated data (denormalised)
-   Less likely to have relationships to other documents
-   Benefit is very fast lookup

### SQL (structured query language)

-   Data is stored in tables
-   Tables have relationships with each other
-   Benefits are:
    -   enforced structure
    -   less duplication of data
    -   can have complex relationships
-   Downside is that it is slower than document database

## Why Firestore? (Document database)

-   Familiar, document databases have a lot of similarity to JSON/JS
-   Popular choice with React
-   Particularly suited to Live data (easy to subscribe to data and update page in real time)
-   This is good for things like a instant messenger

### Firebase

-   projects -> console -> add a project
-   Turn off analytics is ok
-   Cloud Firestore - > Create Database
-   Test mode is ok for now (quick set up)
-   Select location (Sydney)
-   Start Collection -> test
-   Each document as an entry (key in our JSON)
-   everything else is a nested field

Project overview -> project settings

-   Web -> call it react-frontend -> create
-   npm install firebase
-   add config -> firebase.js
-   for production, add firebase.js to gitignore (to prevent API Key from being exposed)

```js
import { getFirestore } from "firebase/firestore";
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

```js
import { collection, getDocs } from "firebase/firebase-firestore";
```
