# HTML Fundamentals

## What is HTML?
- markup langugage
- hypertext markup language
- Instructions for the browser to display content
- unopinionated on how the page should look


## Why do we use HTML?
- human readable
- quickly parsed by the browser
- it works well and quickly


## What should a HTML layout look like?

```html
<!-- Doctype informs that browser of the standard we're using, usually HTML5 -->
<!DOCTYPE html>

<!-- Tells the browser where our html starts and finishes, and can set additional attributes like language -->

<html lang="en">

<!-- Additional information or settings about the website. Including metadata 
Metadata -> properties and characteristics of the document e.g. SEO -->
<!-- links to css style sheets -->
<!-- Often links to JS -->

<head>
    <!-- Making sure the browser displays text properly. UTF-8 contains all special characters and a large set of emojis -->
    <meta charset="UTF-8">

    <!-- Can set instructions for the browser around caching, page refresh etc -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Sets information about the actual usuable content of the window on the page. Very important for CSS media queries -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- The thing that appears in the tab in your browser -->
    <title>Document</title>
</head>

<!-- Where all the content actually goes -->
<body>
    
</body>
</html>
```
