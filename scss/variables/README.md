# SCSS Variables

## What is a variable?

-   Giving a name to a value, which may change
-   You can reference the name instead of the value

## Why do we use variables in SCSS?

-   Single source of truth. Define here, then use many times elsewhere
-   Readability
-   Also allows us to create pallettes / themes

## Usage

Variables can be defined in a global scope and accessed by multiple classes

```scss
$primary: red;
$danger: red;

.btn {
    color: $primary &--danger {
        color: $danger;
    }
}

.heading {
    color: $primary &--danger {
        color: $danger;
    }
}
```

### Scope

-   Scoping rules are very similar to JavaScript
-   A class will look locally for a variable, if it cannot find one in it's own scope it will look to the parent class, if there is not one there it will keep looking upwards until a variable is found

```scss
$primary: #febb3f;
$secondary: #ce17ce;

.btn {
    $primary: #00a6ff;
    $secondary: #1626d9;
    $success: #0dd80d;
    $danger: #f60a0a;
    display: inline-block;
    cursor: pointer;
    padding: $padding-small;
    color: #fff;
    background-color: $primary;
    &--secondary {
        background-color: $secondary;
    }
    &--danger {
        padding: $padding-large;
        background-color: $danger;
    }
}

.heading {
    // $primary: green;
    &--primary {
        // $primary: red;
        color: $primary;
    }
    &--secondary {
        color: $secondary;
    }
}
```

Here `$primary` is defined locally within the `.btn` class so the class uses that variable. It is not defined within `.heading` so the class looks up to the global value
