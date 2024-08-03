---
title: 04 - Strings
---

Strings are a prominent [[03---Data-Types|data type]] in JavaScript that allow for storing text using quotation marks (i.e. `'`, `"`, or `` ` ``). A string can contain zero or more characters written inside these quotations.

> [!example] String
>
> ```javascript
> let exampleString = "Hello! My name is Maheer";
> ```

Strings are also compatible with inner quotes, so long as the quotations are of two different sets.

> [!example2] Quotes in a String
>
> ```javascript
> let quoteString = "His name is 'Shadi'"; // Double quotes for string, single quotes for inner quote
> ```

## Template Literals

Template literals are a powerful feature in JavaScript that provide a more readable way to work with strings. They allow the mixing of variables and expression within strings, making string manipulation more intuitive. Template literals are enclosed by backticks (` ``` `) instead of single or double quotes. The standout feature of using template literals is that they contain placeholders, denoted by `${variable}`, meaning variables and expressions can be embedded directly into the string.

> [!example] Template Literals
>
> ```javascript
> let name = "Maheer";
> let age = 100;
> let template = `Hi, my name is ${name} and I am ${age} years old!`;
> console.log(template); // Hi, my name is Maheer and I am 100 years old!
> ```

It is evident that the use of template literals allows for a dynamic property to be added to strings, as variables can be changed to handle the output of the string.

## Strings as Objects

An alternative to creating a string in JavaScript is to define them as an object using the `new` keyword and the `String()` constructor.

> [!example2] String Object
>
> ```javascript
> let stringObj = new String("Hello World!)
> console.log(stringObj) // String {0: "H", 1: "e", 2: "l", 3: "l", 4: ...}
> console.log(typeof(stringObj)) // object
> ```

Using string objects is uncommon and generally ill-advised due to potential performance issues. Instead of being a `String` type now, creating a string object results in the `Object` type. This is visible in the previous example, as the output for the string object results in a set of key-value pairs that applies to the object data type.
