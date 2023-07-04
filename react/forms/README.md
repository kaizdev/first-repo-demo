# Forms

-   One of the biggest ways of interacting with our users
-   A large part of your job as a web developer
-   A search bar is a form under the hood
-   Think about design and functionality of the form
-   Forms seem easy, but can get complicated very quickly
-   When it comes to React, there are 2 major ideas about forms
    -   Controlled Forms / Components
    -   Using DOM refs

---

## Controlled Forms / Components (official way based on React docs)

-   When a controlled component's value is determined by its state
-   Our application keeps track of the form's state and sets the value based on it

### Pros

-   We get finely grained control of the form
-   We can render things conditionally based on the form state
-   e.g. cannot hit the submit button if fields are not filled in, or an additional option appears if a check box appears
-   Good for very complex problems

### Cons

-   Many re-renders _can_ affect performance
-   Complex state management
-   Might need effects

---

## DOM refs (alternative)

-   A ref is when we actually reference the DOM
-   To reference the actual DOM from React, we need the `useRef` hook
-   We need to use the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) web API
    -   One of the only ways to deal with files / images (as state cannot handle these)

### Pros

-   Way less renders (no longer holding the form values in state)
-   Less likely to need effects

### Cons

-   Less control
-   No conditional rendering based on form values

-   Note that we don't need values and onchange for the form values anymore using FormData
-   Also remove useEffect and onInputChange

---

## Use a library (third option)

-   Take the focus away from writing boilerplate code and start solving business problems

### Pros

-   You don't need to reinvent the wheel
-   Common problems are likely to have been solved already
-   Often the solutions are super optimised

### Cons

-   Documentation might be dense (prior assumed knowledge)
-   Less understanding of how the code works
-   Library might stop being maintained (could stop working)
-   Add to our package size

### Form Libraries in 2023

-   Formik - 2017-2019 active, but had a big period of downtime. Looked like it might no longer be maintained for a while
-   Redux Form - requires you to use Redux. Whole application doesn't need to know about form state
-   **React Hook Form**
    -   Excellent documentation
    -   Very regularly updated
    -   Australian (Sydney) based dev
    -   Performance focused
    -   Uses refs mostly
    -   Good typescript support
    -   npmjs.com -> React hook form
        -   Get started video
        -   Read up on the documentation
        -   no state, no ref - instead we use useForm -just a hook that has been written for us
    -   customisable with other libraries (esp validation)
    -   Can use both Ref and State (if required)
