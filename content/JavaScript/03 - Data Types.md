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

#### Data Type Properties

Data types in JavaScript function in a manner that might appear as counterintuitive. They are considered to be _dynamic_, meaning that a data type is not considered to have a predefined type, this means that a variable containing one type can be altered to contain another.

> [!example] Dynamic Data Types
>
> ```javascript
> let x = 5; // x is a Number
> x = "Hello!"; // x is a String
> x = true; // x is a Boolean
> ```

Another component of data types is that you are able to concatenate data types in an interesting manner. Take, for example, the string `"Hello"` and the number `5`. It's strange that these different data types are able to be _added together_ using the addition [[02---Operators#assignment-operators|arithmetic operator]]. However, this is linked to the idea of [[02---Operators#type-coercion|type coercion]] discussed in a previous lesson. JavaScript will automatically convert one data type to match another in order to perform operations.

> [!example2] Adding a String to a Number
>
> ```javascript
> result = "Hello" + 5;
> console.log(result); // Outputs: "Hello5"
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
> console.log(number); // Output: 100000, equal to  100 x 10^3!
> ```
