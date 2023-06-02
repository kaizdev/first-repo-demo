# Mixins

## What is a mixin?

-   Allows for powerful code-reuse
-   We can define a set of rules and give it a name
-   Some rule-sets are repeated often

## Use Case for Mixin

Traditional way

```css
.my-class {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.some-other-class {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

Instead of the above, we can create a mixin

```scss
@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.my-class {
    @include flex-column;
    justify-content: space-evenly;
}

.my-other-class {
    @include flex-column;
    justify-content: space-between;
}
```
