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
   > const HelloWorld = document.querySelector("h1");
   > HelloWorld.textContent = "Hello World";
   > ```

5. Load the `index.html` file into your browser, where you should hopefully see a big "Hello World!" heading on your screen.

What we have just done is used the _querySelector()_ method, which returns the **first** element within the document (index.html) that matches the specified selector. In this case, we wanted to search for an `h1` object, to which we manipulated it's `textContent` to be set to "Hello World." Here, you are accessing the **Document Object Model** API to manipulate the heading in the HTML file, setting it to whatever content we prefer.

## Inline JavaScript

Similar to how you can write inline CSS in an HTML file under the `<style>` tag, you can write inline JavaScript under the `<script>` tag introduced in the section above. Let's introduce a new, commonly used object — `console.` Much like the browser console we spoke about before, the `console` object provides access to debugger available in our browsers. Various methods can be concatenated to this object to mimick procedures that can be done in the regular web console. Take, for example, displaying a message via the `log()` method.

> [!example] Logging to the Console Through HTML
>
> ```html
> <script>
>   console.log("Hello, world!"); // Outputs "Hello World" in the console
> </script>
> ```

## Comments

Comments in programming provide a sense of maintenance and readability for users. In JavaScript, there are two ways of commenting: single-line commenting and multi-line commenting.

1. Single-Line Comments
   Single-line comments are typically used to comment out short explanations or notes. They are denoted by `//` and extend to the end of the line.

   > [!example2] Single-Line Comments
   >
   > ```javascript
   > // This is a single-line comment
   > let x = 3; // This is also a single-line comment
   > ```

2. Multi-Line Comments
   Multi-line comments are often used for longer explanations that span several lines. They are denoted by `/*...*/`.

   > [!example] Multi-Line Comments
   >
   > ```javascript
   > /* This is a multi-line comment.
   >    It can span multiple lines.
   >    Useful for more detailed explanations. */
   > let y = 10;
   > ```

### Use Cases

Comments can explain what a certain section of code does if it might be difficult to interpret. Comments like these are almost always used in larger settings for seamless communication.

> [!example2] Explanatory Comments
>
> ```javascript
> // Calculate the factorial of a number
> function factorial(n) {
>   if (n === 0) {
>     return 1; // Base case: factorial of 0 is 1
>   }
>   return n * factorial(n - 1); // Recursive case
> }
> ```

Another important use case of comments is disabling code for testing purposes. This is often incredibly useful for short-term and brief test cases that involve low effort.

> [!example] Disabling Code
>
> ```javascript
> // Function to add two numbers
> function add(a, b) {
>   // return a + b + 1; // Original code causing an issue
>   return a + b; // Corrected code
> }
> // Test the function
> console.log(add(2, 3)); // Output should be 5, was previously 6
> ```

### Practices

Despite commenting being an _essential_ skill to your programming skillset, try to abide by the following best practices.

- Remain Concise
  - Comments should be **easy** to understand, refrain from writing comments that are overly verbose
- Keep Comments Up-to-Date
  - Ensure to update comments if the related area of code has been updated or affected. Outdated comments are quite common and result in confusion
- Use Comments Sparingly
  - While comments are great to put in effect, avoid using them overbearingly. Code is often self-explanatory and the aim for comments is to act as a supplement, not to explain every line

## Variables

A basic facet of syntax within programming languages is variable declaration. A variable is a containers that holds specific information we set it to. In JavaScript, there are a few ways to set a variable, contrary to other common languages like Python, where declaration is rather simple.

### Scope

Before understanding why there are different ways to encompass a value into a variable, it is important to understand the _scope_ of a variable. In programming, you often work within functions and blocks, which can limit the scope of their contents to that specific part. This is where different forms of variable definition come into play. Let's explore the different types of scope.

#### Global Scope

Any variable defined outside of a function or block is in the global scope, meaning it can be accessed from any point in the program.

**Note:** You may not understand some of the concepts here, but you should understand the core of what is being taught.

> [!example2] Global Scope Example
>
> ```javascript
> let globalVar = "I'm global!";
>
> function displayGlobalVar() {
>   console.log(globalVar); // Accessible and within a function
> }
>
> displayGlobalVar(); // Output: I'm global!
> console.log(globalVar); // Accessible, Output: I'm global!
> ```

#### Function Scope

Variables set inside of a function are limited to the function scope, meaning they cannot be accessed from the outside.

> [!example] Function Scope Example
>
> ```javascript
> function greet() {
>   let message = "Hello from function scope!"; // Function-defined variable
>   console.log(message); // Accessible
> }
> greet(); // Output: Hello from function scope!
> console.log(message); // Uncaught ReferenceError: message is not defined
> ```

#### Block Scope

Variables set using `let` and `const` inside of a block (inside '{}') are in the block scope without the ability to be accessed from outside.

> [!example2] Block Scope Example
>
> ```javascript
> {
>   let blockVar = "I'm block scoped!"; // Block-defined variable
>   console.log(blockVar); // Accessible, Output: I'm block scoped!
> }
>
> console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
> ```

### Var, Let, & Const

There are three common ways to declare a variable in JavaScript, these are the `var`, `let`, and `const` keywords, the former of which has become the outdated and error-prone of the bunch.

#### Var

`var` in JavaScript was the only way to declare variables until ECMAScript 2015, as such, it's newer counterparts serve a stronger purpose, rendering `var` less useful. Here is a basic example on how it might be used.

> [!example] Using `var`
>
> ```javascript
> var x = 5;
> console.log(x); // Output: 5
> ```

The drawback to using `var` has to do with it's scoping issues. `var` is strange in that it is function-scoped, yet not block-scoped, leading to unexpected behaviours that create errors that are difficult to track. Since it does not respect block boundaries (including conditional statements and loops), there are often unintended side-effects to its use. Another issue associated with `var` is **hoisting**. Hoisting is a unique quirk of JavaScript where variable and function declarations are moved to the top of their containing scope during compilation. Take the following for an example.

> [!example2] Hoisting
>
> ```javascript
> console.log(dummyVar); // Output: undefined
> dummyVar = 15;
> ```

It might feel strange that this program outputs `undefined` rather than an error (specifically a `ReferenceError`), despite the variable being declared later in the code. As mentioned, JavaScript takes any declaration of variables and functions and hoists them within the code, so, the compiler interprets the _declaration_ first. In other words, you can imagine that before the first line of code JavaScript sees: `var dummyVar`, an empty declaration with no value.

Variables declared using `var` also have the ability to be **re-declared**.

> [!example] Re-Declaration
>
> ```javascript
> var count = 10;
> var count = 20; // Allowed
> count = 30; // Allowed
> ```

#### Let

One of the more modern ways to work with variables is to use `let`, a block-scoped declaration method introduced in recent updates. Unlike `var`, `let` is _only_ accessible within the block the variable is declared in.

> [!example2] Block-Scoped Nature
>
> ```javascript
> if (true) {
>   let x = 20;
> }
> console.log(x); // Output: ReferenceError: x is not defined
> ```

##### Temporal Dead Zone

In terms of hoisting, `let` (and `const`) differs from `var` in that variables _are_ hoisted, but not _initialized_. These variables remain in a "temporal dead zone" (TDZ) from the beginning of the block until the declaration. Attempting to access the variable before it's declaration causes a `ReferenceError`.

> [!example] Temporal Dead Zone
>
> ```javascript
> {
>   console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
>   let x = 10;
>   console.log(x); // Output: 10
> }
> ```

The term "temporal" is in relation to time. In the context of TDZ, this refers to the order of operations while the code executes. The whole reason it exists is _because_ JavaScript processes code in a time-related sequence.

#### Const

As you might expect, the `const` keyword in JavaScript declares variables that remain **constant**. However, this does not mean the value itself is immutable (unchangeable), but rather that the _reference_ to the value cannot be reassigned.

> [!example2]
>
> ```javascript
> const pi = 3.1415;
> console.log(pi); // Output: 3.1415
>
> // Attempting to reassign a const variable will result in an error
> pi = 3.14; // TypeError: invalid assignment to const `pi`
> ```

Like `let`, `const` is block-scoped and cannot be redeclared, however, it cannot be updated like the former. It also shares similarity in that it can be hoisted but not initialized, resulting in [[01---Basics#temporal-dead-zone|TDZ]].

With all of that information, here is a table summarizing the differences and similarities between these three variable-declaring keywords.

| Feature       | `var`             | `let`     | `const`   |
| ------------- | ----------------- | --------- | --------- |
| Scope         | Function          | Block     | Block     |
| Hoisting      | Yes (initialized) | Yes (TDZ) | Yes (TDZ) |
| Reassignment  | Yes               | Yes       | No        |
| Redeclaration | Yes               | No        | No        |
