# React?

## What is React?

-   Created by Facebook / Meta

    -   Open sourced
    -   Facebook still has a large stake

-   JS library for creating user interactions (UI)

    -   It's just JavaScript

-   Based around the idea of a Single Page Application (core idea). It can work for multi page apps, but not core
    -   One HTML file
    -   JS takes care of everything else (routing, pages, etc)
    -   App like experience in the web
    -   e.g. facebook website -> does not cause the page to reload despite many elements interacted with
    -   Rise of mobile web -> gmail, google maps, etc.

Cons of SPAs: - sucks for SEO - load speeds (JS on client side) (as it moves from server)

Get better at React, easier to transition to other JS frameworks
A lot happening in this space

## How to use React

-   At its basic, 2 scripts - react and react dom
-   Uses JS to create the HTML elements
-   React uses JSX (JavaScript XML)

    -   HTML like syntax (not HTML, but looks like HTML)
    -   It is turned into JS

-   React uses a virtual DOM
    -   An in memory representation of the DOM
    -   Instead of directly updating the DOM, when we change things the virtual DOM is changed
    -   React periodically runs a 'diffing' algorithm to check which parts have changed
    -   React can **batch** DOM updates -> can provide much faster repaint performance
    -   Be careful in saying that REACT is faster -> technically can be much faster using plain JS -> lots of overhead, memory usage
    -   common interview Q: explain virtual DOM -> faster performance, at the cost of higher load time and more memory usage

## Why use React?

-   JSX -> use JS to add HTML elements
-   It is turned into JavaScript, through a build step
-   Build step ->
-   It used to be mostly be babel and webpack
-   Newer tools like vite and esbuild gaining popularity
-   Allows us to use components - re-usable pieces of code
    -   function App () -> loads in main

## Tooling

-   Babel translates the code on the left, to be the React JS code on the right
-   How JSX is being converted to JS code - don’t need to worry too much about how it is done as there is tooling
-   **Create React App**
    -   Maintained by Meta
    -   Most people's starting point with React
    -   Comes with lots of config out of the box
-   **Vite** (french for fast)
    -   Faster build and load times
    -   Uses modules
    -   Downside is more config
