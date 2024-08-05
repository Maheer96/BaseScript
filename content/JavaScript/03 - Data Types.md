---
title: 03 - Data Types
---

Data types are an essential facet of programming that builds the groundwork for how data is manipulated and handled. Each data type is unique in its characteristics and use cases, and knowing the distinction between these types will help you produce more robust code. JavaScript is a _dynamically_ typed language, meaning that [[01---Basics#variables|variables]] can hold every type of data!

This lesson will cover the basics of the primary data types in JavaScript: `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol`, and `Object`. In reality, every data type is complex enough such that an entire lesson can be dedicated to each one, which will be the case for a select few. See below for a short summary on these types.

| Data Type | Description                                                  | Example                      |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| String    | Sequence of characters used to represent text                | `"Hello, World!"`            |
| Number    | Represents both integers and floating-point numbers          | `42`, `3.14`                 |
| BigInt    | Represents integers with arbitrary precision                 | `12345678901234567890n`      |
| Boolean   | Represents logical values, `true` or `false`                 | `true`, `false`              |
| Undefined | Indicates a variable that has been declared but not assigned | `let x; // x is undefined`   |
| Null      | Represents the intentional absence of any object value       | `let y = null;`              |
| Symbol    | Represents a unique and immutable identifier                 | `let sym = Symbol('desc');`  |
| Object    | Collection of properties and methods                         | `{ name: "Alice", age: 25 }` |

## Properties

Data types in JavaScript function in a manner that might appear as counterintuitive. They are considered to be _dynamic_, meaning that a data type is not considered to have a predefined type, this means that a variable containing one type can be altered to contain another.

> [!example] Dynamic Data Types
>
> ```javascript
> let x = 5; // x is a Number
> x = "Hello!"; // x is a String
> x = true; // x is a Boolean
> ```

Another component of data types is that you can concatenate them in an interesting manner. Take, for example, the string "Hello" and the number 5. It's strange that these different data types can be added together using the addition [[02---Operators#assignment-operators|arithmetic operator]]. However, this is linked to the idea of [[02---Operators#type-coercion|type coercion]] discussed in a previous lesson. JavaScript will automatically convert one data type to match another in order to perform operations.

> [!example2] Adding a String to a Number
>
> ```javascript
> result = "Hello" + 5;
> console.log(result); // Outputs: "Hello5"
> ```

Seven of the eight types covered in this lesson fall under the term primitive value. A primitive value is immutable, meaning its value cannot be changed once created. This might seem to contradict the dynamic nature of JavaScript data types, but the immutability of primitive types pertains to the actual data stored in the primitive type. Consider the following example where we attempt to alter the **index** of a string (more on indices later).

> [!example] Primitive Values
>
> ```javascript
> let str = "Hello";
> str[0] = "K"; // Trying to assign the first letter of str to "K"
> console.log(str); // Outputs: "Hello"
> ```

Strings are immutable, so converting the "H" into a "K" will fail. When we see an example like two strings being added together, a new value is being created rather than the original data being changed.

#### Checking Data Types

You can check the type of a given variable of expression using the `typeof` operator. This operator returns a string indicated the type of the operand in question. The `typeof` operator can return any of the data types to be discussed in this lesson.

> [!example2] `typeof`
>
> ```javascript
> let x = 5;
> console.log(typeof x); // number
> ```

## Strings

A `String` is a sequence of characters that represents text. Strings are created by enclosing characters in either single quotes (`'`), double quotes, `"`, or backticks (`` ` ``).

> [!example] Strings
>
> ```javascript
> let name1 = "John Doe"; // single quotes
> let name2 = "Jane Doe"; // double quotes
> let name3 = `Alice Doe`; // backticks
> ```

You can also use quotes inside a string if you use a different set of quotes to encompass the quote.

> [!example2] Quotes in Strings
>
> ```javascript
> let quote = "'This is a quotation'";
> console.log(quote); // Outputs: 'This is a quotation'
> ```

> **For more on strings, see [[04---Strings|Strings]]**

## Numbers

The `Number` type in JavaScript encompasses both integers and floating-point numbers. It also includes special values like `NaN` (Not-a-Number, see example), `Infinity`, and `-Infinity`.

> [!example] Numbers
>
> ```javascript
> let number1 = 3.14; // floating-point
> let number2 = 5; // integer
>
> let result = 0 / 0;
> console.log(result); // Outputs: NaN, Type: Number
> ```

Attempting to output values that do not have a mathematical value results in an output of `NaN`, which ironically has the type `Number`. An example of this can be seen above when outputting the value of zero divided by zero.

### Scientific Notation

You can also abbreviate larger numbers in JavaScript using scientific notation via the keyword `e`.

> [!example2] Scientific Notation
>
> ```javascript
> let number = 100e3;
> console.log(number); // Output: 100000, equal to 100 x 10^3!
> ```

## BigInt

`BigInt` is a built-in object in JavaScript that allows for numbers larger than the safe integer limit for the `Number` type. `Number` in JavaScript is capable of safely representing numbers between -(2^53 - 1) and (2^53 - 1), hence, numbers outside this range lose precision. To overcome this limitation, JavaScript recently introduced `BigInt` in ECMAScript 2020.

You can create a `BigInt` by appending `n` to the end of an integer, _or_ you can use the `BigInt()` constructor method.

> [!example] BigInt
>
> ```javascript
> let bigInt1 = let bigInt1 = 1234567890123456789012345678901234567890n; // Using the 'n' suffix
> let bigInt2 = BigInt("1234567890123456789012345678901234567890"); // Using the BigInt constructor
> ```

`BigInt` is compatible with the common arithmetic operators (`+`, `-`, `*`, etc. See [[02---Operators#assignment-operators|arithmetic operators]] for more), however it does not support mixing with the `Number` type; you must convert them to the same type first. `BigInt` is particularly useful for scientific computations where large numbers are involved.

## Boolean

Booleans represent logical values and can be either `true` or `false`. They are commonly used in conditional statements and loops.

> [!example2] Booleans
>
> ```javascript
> let isJavaScriptFun = true;
> let isThisLessonComplete = false;
> console.log(isJavaScriptFun); // true
> console.log(isThisLessonComplete); // false
> ```

## Undefined

`Undefined` is a primitive value that represents an uninitialized variable or an expression without a value.

> [!example] Undefined
>
> ```javascript
> let uninitializedVar;
> console.log(uninitializedVar); // undefined
> ```

## Null

`Null` is another primitive value that represents the _intentional_ absence of any object value. It typically indicates that a variable should not have a value.

> [!example2] Null
>
> ```javascript
> let noValue = null;
> console.log(noValue); // null
> ```

## Symbol

Symbols are a new primitive data type in JavaScript that allows for the creation of unique and immutable identifiers for object properties. They are created using the `Symbol()` function

> ![example] Symbol
>
> ```javascript
> let symbol1 = Symbol("description");
> let symbol2 = Symbol("description");
> console.log(symbol1 === symbol2); // false
> ```

Interestingly, the two seemingly identical values appear false when equated using the **strictly equal** operator. This is because each symbol is guaranteed uniqueness, regardless of if they have the same description. Symbols are often used as unique keys in objects to avoid property name collisions.

## Objects

Objects in JavaScript are used to store collections of data and more complex entities. An object is a collection of properties, where each property is defined as a **key-value pair**. Properties are the values associated with the object. A property can be a primitive value, another object, or function.

> [!example2] Object
>
> ```javascript
> let person = {
>    name: "John",
>    surname: "Doe",
>    age = 25,
>    isEmployed = true
> };
> ```

In the previous example, each **property key** (i.e. name, surname, etc.) is tied to a **property value** ("John", "Doe", etc.). These values can be accessed outside the object for various use.

> **Objects will be explored in greater detail in the upcoming sections.**

You'll likely find that a select few of these data types appear significantly more than the others. This is particularly true for objects!

Objects encompass not only simple key-value pairs but also more complex structures like **arrays** and **functions**, each of which deserve their own sections in following lessons.

They serve as the foundation for nearly all data structures in JavaScript, providing a flexible and powerful means to organize and manage data. In fact, JavaScript is known as a **prototype-based object-oriented programming language**, different from other classical object-oriented languages like Java or C++. The reason for this definition arises from the nature of objects in the language.
