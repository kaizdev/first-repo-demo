# SASS / SCSS - Introduction

## WHat is SASS?

-   Syntactically Awesome Style Sheets
-   .scss files
-   CSS compatible
-   Sass is a **superset** of CSS
    -   All CSS is valid SASS/SCSS code
        But there's also more language features

## What is SCSS

-   Sassy Cascading Style Sheets
-   SASS is the framework, .scss is the file extension
-   Sass compiles `.scss` files into `.css` files for us that we can run in the browser
    -   WHatever we write in scss gets converted to css

## Installation

```bash
sudo npm install -g sass
```

might have issues with npm permissions

or (for mac users with homebrew installed)

```bash
brew install sass/sass/sass
```

## Usage

```bash
sass example.scss:style.css
```

This takes the `example.scss` file and compiles in into `style.css`. This will compile when the command runs.

```bash
sass --watch example.scss:style.css
```

This will recompile every time `example.scss` is changed

We can even watch entire folders with a command like

```bash
sass --watch app/sass:public/stylesheets
```

## Usage

```scss
// All paragraphs outside of sections should be orange

// all paragraphs inside sections to be blue

// All text inside sections to be arial

// All spans inside paragraphs inside sections to be bold

section {
    font-family: Arial, Helvetica, sans-serif;
}

section p {
    color: blue;
}

section p span {
    font-weight: bold;
}
```

Versus

```scss
section {
    font-family: Arial, Helvetica, sans-serif;
    p {
        color: blue;
        span {
            font-weight: bold;
        }
    }
}
```

Note that when it compiles, it spits out the actual CSS code (ie decoupled, only the SCSS file shows the combined code)

## What are the benefits of SASS?

Some of the things we can do with SASS / SCSS that we can't do with regular CSS include:

-   Nesting
-   Variables (technically are in css now but scss handles them better)
-   Functions
-   Mixins
-   Modules / Partials
-   Much easier handling of media queries

## Why do we use SASS?

-   There is likely no performance gain. All things being equal the result on the page is exactly the same
-   This is a tool for developer experience
-   We can split our code up which makes it easier to think about
-   We can use variables which give us a single source of truth (example of this is a brand colour variable which can be repeated/reused)
-   We can use functions/mixins to avoid repeating ourselves and also to have a single source of truth

## Resources

[Sass docs](https://sass-lang.com/)
