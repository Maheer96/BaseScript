---
title: 03 - Data Types
---

Data types are an essential facet of programming that builds the groundwork for how data is manipulated and handled. Each data type is unique in its characteristics and use cases, and knowing the distinction between these types will help you produce more robust code. JavaScript is a _dynamically_ typed language, meaning that [[01---Basics#variables|variables]] can hold every type of data!

This lesson will cover the primary data types in JavaScript: `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol`, and `Object`. See below for a short summary on these types.

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
