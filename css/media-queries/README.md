# Media Queries

## What are media queries?

-   Media queries are part of CSS (not a special SCSS thing)
-   Typically used for responsive design (mobiles, tablets, desktops etc.)
-   Can set a media query for printing (e.g. print plain document)
-   Different styling based on the browser's viewpoint
    -   orientation (tablets / mobiles)

But the problem is that they can be confusing to work with and it's hard to see where styles change

```scss
@use "./modules/mixins.scss";

.gallery {
    display: grid;
    @include mixins.phone {
        grid-template-columns: 1fr;
        img {
            width: 90vw;
        }
    }
    @include mixins.tablet {
        grid-template-columns: 1fr 1fr;
        img {
            width: 45vw;
        }
    }

    @include mixins.landscape-tablet {
        grid-template-columns: 1fr 1fr 1fr;
        img {
            width: 30vw;
        }
    }

    @include mixins.laptop {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        img {
            width: 22vw;
        }
    }
}

// * See how everything is contained within the gallery when working within SCSS - makes it alot easier to work with vs traditional CSS

button {
    @include mixins.phone {
        font-size: 18px;
    }

    @include mixins.tablet {
        font-size: 22px;
    }

    @include mixins.landscape-tablet {
        font-size: 30px;
    }

    @include mixins.laptop {
        font-size: 40px;
    }
}
```
