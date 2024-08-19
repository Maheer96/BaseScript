Objects are a fundamental data structure in JavaScript that allow you to store collections of key-value pairs. Unlike primitive data types (strings, numbers, booleans, etc. See [[03---Data-Types|data types]] for more), objects can hold multiple values and comparatively more complex data. Each key in an object is a [[04---Strings|string]] that represents a property name, and each corresponding value can be of any type, _including_ other objects, **functions**, and **arrays**.

#### Use Case

Objects are so vital to JavaScript because they provide a way to group data and functionality together. For example, you can create a real-world object or entity as an object with its own properties and behaviours.

## Creating an Object

The most common way to create objects is to use object literals, or much like strings, you can use the `new` keyword.

### Object Literals

Object literals are the simplest and most readable way to create objects. The object is defined using curly braces `{}`, with key-value pairs separated by commas.

> [!example] Creating an Object I
>
> ```javascript
> const person = {
>   name: "John Doe",
>   age: 30,
>   occupation: "Software Developer",
> };
> ```

This example contains an object `person` with properties: `name`, `age`, and `occupation`.

> [!note]
> Objects are typically defined using the `const` keyword, rather than `let` or `var`. This is to retain immutability of the variable binding, while maintaining mutability of the object's properties.
>
> ```javascript
> const person = {
>   name: "John Doe", // Individual properties can still be changed
>   age: 30,
> };
>
> // This will cause an error
> person = {
>   name: "Bob",
>   age: 25,
> };
> ```
>
> For more on the difference between the variable-defining keywords, see [[01---Basics#var-let--const|Var, Let, & Const]]

Object literals are easy and efficient to write, and are best to use when making single objects.

### `new` and Constructor Functions

Constructor functions are used to create multiple instances of objects with similar structures using the `new` keyword.
