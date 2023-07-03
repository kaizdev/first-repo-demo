# Routing

## What is a route?

-   A path to a destination
    -   traditionally would be a way to get to another HTML page (e.g. a href), using the browser
    -   A relationship with what's in the browser url section

## What's different in React?

-   Still only have one .html page (all contained in the 'root' div)
-   "Pages" in React are components
-   They will be rendered based on what's in the URL
-   We need some additional code to make this work
    -   React Router DOM

## Installation

```bash
npm install react-router-dom
```

-   looking at the documentation is not a hughe help

-   add to our app.jsx,
    import { BrowserRouter, Routes, Route } from "react-router-dom";

BrowserRouter

Routes

Route path="/" element={}

Can now navigate to the different pages
http://localhost:5173/projects
http://localhost:5173/contact
http://localhost:5173/

Navigating using URL bar - page refresh is slow

-   We lose our state on page refreshes
-
