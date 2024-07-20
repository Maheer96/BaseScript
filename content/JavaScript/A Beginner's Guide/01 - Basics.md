---
title: The Basics
---

## A Gesture to the World

Let's get started with the timeless exemplar for introductory programming — a ["Hello World"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) example!

> [!warning] Code Editors
> Among other [[An-Introduction#course-prerequisites|prerequisites]] to this course, we recommend that the user has an initial understanding to code editors before diving into further content. We recommend you watch this [video](https://www.youtube.com/watch?v=B-s71n0dHUk&ab_channel=VisualStudioCode) for a start.

1. In your workspace, create a new `scripts` folder. This is where all future JavaScript files will be contained, and it is a common practice among developers to keep your environment organized. Create a file named `script.js`.
2. Separated from that folder, create an HTML file named `index.html`
3. In `index.html`, incorporate the following line just before concluding the `body` component:

   > **HTML**
   >
   > ```html
   > <script src="scripts/script.js"></script>
   > ```

   If you read [[An-Introduction#how-are-they-interconnected|this]] portion of our introduction, you might recognize this step being similar to linking the CSS file to your `index.html`

4. In your `script.js` file enter the following code
   > **JS**
   >
   > ```javascript
   > const HelloWorld = document.querySelector("h1")
   > HelloWorld.textContent = "Hello World"
   > ```
