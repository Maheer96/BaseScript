---
title: The Basics
---

## Browser Console

The console is an integrated tool in most web browsers that allows you to manipulate and run JavaScript code _directly_ within the browser itself. Here, you can test out certain snippets of code and immediately perceive their results. Begin by opening your browser and accessing developer tools (these vary by operating system and browser; i.e. Windows/Linux on Google Chrome: `Ctrl+Shift+I`). In the console, you can perform anything in JavaScript, ranging from variable declaration to calculations.

We recommend you enter the `document` keyword and explore the page you called the developer tools to. Click the dropdown menu, where you can see how the HTML of the page was formatted. With every line you hover, you can discover each component as highlighted on the screen. These are all **objects** that JavaScript can dynamically manipulate!
<img src=document.png></img>

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
   > <script src="scripts/script.js" defer></script>
   > ```

   If you read [[An-Introduction#how-are-they-interconnected|this]] portion of our introduction, you might recognize this step being similar to linking the CSS file to your `index.html`. Next, ensure to include an `<h1>` component within your body so we can manipulate it in the next step.

4. In your `script.js` file enter the following code

   > **JavaScript**
   >
   > ```javascript
   > const HelloWorld = document.querySelector("h1")
   > HelloWorld.textContent = "Hello World"
   > ```

5. Load the `index.html` file into your browser, where you should hopefully see a big "Hello World!" heading on your screen.

What we have just done is used the _querySelector()_ method, which returns the **first** element within the document (index.html) that matches the specified selector. In this case, we wanted to search for an `h1` object, to which we manipulated it's `textContent` to be set to "Hello World." Here, you are accessing the **Document Object Model** API to manipulate the heading in the HTML file, setting it to whatever content we prefer.

## Inline JavaScript

Similar to how you can write inline CSS in an HTML file under the `<style>` tag, you can write inline JavaScript under the `<script>` tag introduced in the section above. Let's introduce a new, commonly used object — `console.` Much like the browser console we spoke about before, the `console` object provides access to debugger available in our browsers. Various methods can be concatenated to this object to mimick procedures that can be done in the regular web console. Take, for example, displaying a message via the `log()` method.

> [!example] Logging to the Console Through HTML
>
> ```html
> <script>
>   console.log("Hello, world!") // Outputs "Hello World" in the console
> </script>
> ```

## Variables

A basic facet of syntax within programming languages is variable declaration. A variable is a containers that holds specific information we set it to. In JavaScript, there are a few ways to set a variable, contrary to other common languages like Python, where declaration is rather simple.

### Scope

Before understanding why there are different ways to encompass a value into a variable, it is important to understand the _scope_ of a variable. In programming, you often work within functions and blocks, which can limit the scope of their contents to that specific part. This is where different forms of variable definition come into play. Let's explore the different types of scope.

#### Global Scope

Any variable defined outside of a function or block is in a global scope, meaning it can be accessed from any point in the program.

> [!example2] Global Scope Example
>
> ```javascript
> let globalVar = "I'm global!"
>
> function displayGlobalVar() {
>   console.log(globalVar) // Accessible
> }
>
> displayGlobalVar() // Output: I'm global!
> console.log(globalVar) // Accessible, Output: I'm global!
> ```
