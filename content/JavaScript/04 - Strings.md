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

Template literals are a powerful feature in JavaScript that provide a more readable way to work with strings. They allow the mixing of [[01---Basics#variables|variables]] and expression within strings, making string manipulation more intuitive. Template literals are enclosed by backticks (` ``` `) instead of single or double quotes. The standout feature of using template literals is that they contain placeholders, denoted by `${variable}`, meaning variables and expressions can be embedded directly into the string.

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

## String Methods

### What are Methods?

Methods are functions that are associated with objects. They are essentially properties of objects that hold function definitions (more on functions in future lessons). The gist is that methods allow you to perform actions on objects.

This might seem confusing, since we previously defined strings to be strictly different from objects. However, JavaScript handles this dilemma behind the scenes in a process called **autoboxing**. Autoboxing is a process by which JavaScript will temporarily convert primitive values (strings, numbers, booleans, etc.) into an object so that it can access the methods defined for that object type.

We saw in the [[04---Strings#strings-as-objects|strings as objects]] section that you can indeed convert a primitive data type using the `new` keyword in tandem with a constructor.

> [!example] Method Notation
>
> ```javascript
> object.methodName();
> ```

Methods are called using a dot and bracket notation.

JavaScript provides a rich set of built-in methods to perform various operations on strings. With just over **thirty** different methods available for use on strings, this lesson will focus on the most commonly used operations, given that many are now deprecated.

### `charAt()`

The `charAt` method returns the character at a specified **index**. An index is a numerical position that represents the location of a character in the string. In JavaScript, string indexing starts at 0, which means the first character in a string has an index value of 0, the second character has value 1, and so on.

> [!example2] Example
>
> ```javascript
> let str = "Hello World!";
> console.log(str.charAt(0)); // Output: "H"
> console.log(str.charAt(1)); // Output: "e"
> ```

### `endsWith()`

The `endsWith` method determines whether a string ends with the characters of a specified string. This method is case-sensitive and returns `true` if the string ends with the specified characters.

> [!example] Example
>
> ```javascript
> let str = "Hello, world!";
> console.log(str.endsWith("world!")); // Output: true
> console.log(str.endsWith("Hello")); // Output: false
> ```

### `includes()`

The `includes` method determines whether a string contains the characters of a specified string. It also returns a boolean value based on the result.

> [!example2] Example
>
> ```javascript
> let str = "Hello, world!";
> console.log(str.includes("world")); // Output: true
> console.log(str.includes("JavaScript")); // Output: false
> ```

### `indexOf()`

The `indexOf `method returns the index of the **first** occurrence of a specified value.

> [!example] Example
>
> ```javascript
> let str = "Hello, world!";
> console.log(str.indexOf("world")); // Output: 7
> ```
>
> If the value is not found, it returns `-1`
>
> ```javascript
> console.log(str.indexOf("JavaScript")); // Output: -1
> ```

### `length()`

The `length` property returns the number of characters within the string.

> [!example2] Example
>
> ```javascript
> let str = "Hello!";
> console.log(str.length); // Output: 6
> ```

### `replace()`

The `replace` method searches a string for a specified value or a regular expression and returns a new string with the specified values replaced.

> [!example] Example
>
> ```javascript
> let str = "Hello, world!";
> let newStr = str.replace("world", "JavaScript");
> console.log(newStr); // Output: "Hello, JavaScript!"
> ```

### `slice()`

The `slice` method extracts a section of a string specified by given indices and returns it as a new string.

> [!example2] Example
>
> ```javascript
> let str = "Hello, world!";
> let slicedStr = str.slice(7, 12); // Accessing the characters including and between the 7th and 12th indices
> console.log(slicedStr); // Output: "world"
> ```

### `split()`

The `split` method splits a string into an **array** of substrings based on a specified delimiter.

> [!example] Example
>
> ```javascript
> let str = "Hello, world!";
> let arr = str.split(", ");
> console.log(arr); // Output: ["Hello", "world!"]
> ```

### `startsWith()`

The `startsWith` method determines whether a string begins with the characters of a specified string.

> [!example2] Example
>
> ```javascript
> let str = "Hello, world!";
> console.log(str.startsWith("Hello")); // Output: true
> console.log(str.startsWith("world")); // Output: false
> ```

### `toLowerCase()`

The `toLowerCase` method converts a string to lowercase letters.

> [!example] Example
>
> ```javascript
> let str = "Hello, World!";
> console.log(str.toLowerCase()); // Output: "hello, world!"
> ```

### `toUpperCase()`

The `toUpperCase` method converts a string to uppercase letters.

> [!example2] Example
>
> ```javascript
> let str = "Hello, World!";
> console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
> ```

### `trim()`

The trim() method removes whitespace from both ends of a string.

> [!example] Example
>
> ```javascript
> let str = "   Hello, World!   ";
> console.log(str.trim()); // Output: "Hello, World!"
> ```

## String Concatenation

String concatenation is the process of combining two or more strings into one. There are two ways to do this in JavaScript.

> [!example2] Using `+`
>
> ```javascript
> let greeting = "Hello";
> let name = "Alice";
> let message = greeting + " " + name + "!";
> console.log(message); // Output: "Hello Alice!"
> ```

The addition [[02---Operators|operator]], while mainly used for mathematical operations can also be used to "add" strings together. Another way to concatenate strings together is using the `concat` method, which essentially does the same thing.

> [!example] Using `concat()`
>
> ```javascript
> let greeting = "Hello";
> let name = "Alice";
> let message = greeting.concat(" ", name, "!");
> console.log(message); // Output: "Hello Alice!"
> ```

#### Conclusion

In this lesson, we've explored the versatile world of strings in JavaScript. From basic string creation and concatenation to the powerful features of template literals and an array of string methods, we've covered essential techniques for working with text. Understanding these string operations is fundamental for effective coding and data manipulation. As you continue to practice and apply these concepts, you'll find that strings become a powerful tool in your JavaScript toolkit, enabling you to handle and transform text with ease and precision. Happy coding!
