---
title: 02 - Operators
---

Operators are special symbols in programming that perform operations on operands (values and variables). They are essential for manipulating data and making logical decisions in your code. There are a few categories that operators can be divided into:

- Arithmetic
- Assignment
- Comparison
- Logical

In JavaScript, understanding operations is **fundamental** for writing effective code.

## Arithmetic Operators

The purpose behind arithmetic operations is straightforward — to perform basic mathemetical calculations. Below is a table summarizing all of the types of arithmetic operators available in JavaScript.

| Operator | Name           | Description                                         | Example        |
| -------- | -------------- | --------------------------------------------------- | -------------- |
| `+`      | Addition       | Adds two operands                                   | `a + b`        |
| `-`      | Subtraction    | Subtracts the second operand from the first         | `a - b`        |
| `*`      | Multiplication | Multiplies two operands                             | `a * b`        |
| `/`      | Division       | Divides the first operand by the second             | `a / b`        |
| `%`      | Modulus        | Returns the remainder of a division                 | `a % b`        |
| `**`     | Exponentiation | Raises the first operand to the power of the second | `a ** b`       |
| `++`     | Increment      | Increases an integer value by one                   | `a++` or `++a` |
| `--`     | Decrement      | Decreases an integer value by one                   | `a--` or `--a` |

For further clarification, see the following example.

> [!example] Arithmetic Operations
>
> ```javascript
> let a = 10;
> let b = 5;
> console.log(a + b); // 15
> console.log(a - b); // 5
> console.log(a * b); // 50
> console.log(a / b); // 2
> console.log(a % b); // 0
> console.log(a ** b); // 100000
> a++;
> console.log(a); // 11
> b--;
> console.log(b); // 4
> ```

## Assignment Operators

Assignment operators are used to assign values to variables. In addition to the basic assignment operator (`=`), there are compound assignment operators that combine a basic operation with assignment. There are several forms of assignment operators as seen in the table below.

<table>
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Description</th>
        <th>Example</th>
        <th>Equivalent</th>
    </tr>
    <tr>
        <td><code>=</code></td>
        <td>Assignment</td>
        <td>Assigns the value on the right to the variable on the left</td>
        <td><code>x = y</code></td>
        <td><code>x = y</code></td>
    </tr>
    <tr>
        <td><code>+=</code></td>
        <td>Addition assignment</td>
        <td>Adds the right operand to the left operand and assigns the result to the left operand</td>
        <td><code>x += y</code></td>
        <td><code>x = x + y</code></td>
    </tr>
    <tr>
        <td><code>-=</code></td>
        <td>Subtraction assignment</td>
        <td>Subtracts the right operand from the left operand and assigns the result to the left operand</td>
        <td><code>x -= y</code></td>
        <td><code>x = x - y</code></td>
    </tr>
    <tr>
        <td><code>*=</code></td>
        <td>Multiplication assignment</td>
        <td>Multiplies the right operand with the left operand and assigns the result to the left operand</td>
        <td><code>x *= y</code></td>
        <td><code>x = x * y</code></td>
    </tr>
    <tr>
        <td><code>/=</code></td>
        <td>Division assignment</td>
        <td>Divides the left operand by the right operand and assigns the result to the left operand</td>
        <td><code>x /= y</code></td>
        <td><code>x = x / y</code></td>
    </tr>
    <tr>
        <td><code>%=</code></td>
        <td>Modulus assignment</td>
        <td>Takes the modulus using the left operand and the right operand and assigns the result to the left operand</td>
        <td><code>x %= y</code></td>
        <td><code>x = x % y</code></td>
    </tr>
    <tr>
        <td><code>**=</code></td>
        <td>Exponentiation assignment</td>
        <td>Raises the left operand to the power of the right operand and assigns the result to the left operand</td>
        <td><code>x **= y</code></td>
        <td><code>x = x ** y</code></td>
    </tr>
    <tr>
        <td><code><<=</code></td>
        <td>Left shift assignment</td>
        <td>Shifts the bits of the left operand left by the number of positions specified by the right operand</td>
        <td><code>x <<= y</code></td>
        <td><code>x = x << y</code></td>
    </tr>
    <tr>
        <td><code>>>=</code></td>
        <td>Right shift assignment</td>
        <td>Shifts the bits of the left operand right by the number of positions specified by the right operand</td>
        <td><code>x >>= y</code></td>
        <td><code>x = x >> y</code></td>
    </tr>
    <tr>
        <td><code>&=</code></td>
        <td>Bitwise AND assignment</td>
        <td>Performs a bitwise AND operation on the operands and assigns the result to the left operand</td>
        <td><code>x &= y</code></td>
        <td><code>x = x & y</code></td>
    </tr>
    <tr>
        <td><code>|=</code></td>
        <td>Bitwise OR assignment</td>
        <td>Performs a bitwise OR operation on the operands and assigns the result to the left operand</td>
        <td><code>x |= y</code></td>
        <td><code>x = x | y</code></td>
    </tr>
    <tr>
        <td><code>^=</code></td>
        <td>Bitwise XOR assignment</td>
        <td>Performs a bitwise XOR operation on the operands and assigns the result to the left operand</td>
        <td><code>x ^= y</code></td>
        <td><code>x = x ^ y</code></td>
    </tr>
</table>

Here are a couple of examples to ensure you get the gist of it.

> [!example2] Addition
>
> ```javascript
> let x = 10;
> x += 5; // Equivalent: x = x + 5
> console.log(x); // 15
> ```

> [!example] Exponentiation
>
> ```javascript
> let x = 2;
> x **= 3; // Equivalent: x = x ** 3
> console.log(x); // 8
> ```

While the first set of assignment operations are relatively straightforward, you might find difficulty in understanding the latter half of the table. In the next two sections, we'll clarify the significance behind **shift** and **bitwise** operators, however, for most of you, these sections will not effect your learning, so feel free to move forward!

### Shift Operators

Shift operators are a nicher section of assignment operators in JavaScript. These operators require an understanding of the [base two number system](https://www.youtube.com/watch?v=sXxwr66Y79Y&ab_channel=KhanAcademyComputing)(binary numbers), and consequently, are not as commonly used as other operators. The two types of shift operators are the left shift operator (`<<`) and the right shift operator (`>>`).

The left shift operator shifts the bits of the first operand by the number of positions specified by the second operand. It is also important to note that bits shifted to the left are _discarded_. Zero bits are shifted in from the right.

> [!example2] Left Shift
>
> ```javascript
> let x = 5; // Binary: 101
>
> let first_result = x << 1; // Result: 1010 (10 in decimal)
> console.log(result); // 10
>
> let second_result = x << 2;
> console.log(second_result); // Result: 10100 (20 in decimal)
> ```

The right shift operator shifts the bits of the first operand right by the number of positions specified by the second operand. Bits shifted off to the right are discarded. The sign bit (leftmost bit) is used to fill the new bits on the left. This is essentially the opposite of the left shift.

> [!example] Right Shift
>
> ```javascript
> let x = 10; // Binary: 1010
>
> let first_result = x >> 1; // Result: 0101 (5 in decimal)
> console.log(result); // 5
>
> let second_result = x >> 2; // Result: 0010 (2 in decimal)
> console.log(second_result); // 2
> ```

It is important to remember that these are shorthand notations of binary numbers, as every number can be expressed in a 32-bit format (i.e. 5 in binary is expressed as `00000000 00000000 00000000 00000101`). The uses for these shift operators can vary, however, one use case, as you might have noticed, is that the shifts can change a number by a factor of two.

### Bitwise Operators

It's important to include that shift operators _are_ a form of bitwise operators, but for the sake of clarity, there is a distinction that can be made between the two. Bitwise operators treat their operands as a set of 32 bits (base two) rather than any other number system. These operations work at a binary level and perform actions bit by bit. Take, for example, the bitwise AND operator. This operator compares each bit of the first operand to the second. If the set of bits are both 0, **or** mismatch, the resulting bit is set to 0. If the set of bits are both 1,
then the resulting bit is 1.

> [!example2] Bitwise AND
>
> ```javascript
> let x = 5; // Binary: 101
> let y = 3; // Binary: 011
> let result = x & y; // Result: 001 (1 in decimal)
> console.log(result); // 1
> ```

The bitwise OR operator checks if either bit contains a 1, if so, the resulting value is a 1. If both bits are 0, the resulting bit is a 0.

> [!example] Bitwise OR
>
> ```javascript
> let x = 5; // Binary: 101
> let y = 3; // Binary: 011
> let result = x & y; // Result: 111 (7 in decimal)
> console.log(result); // 7
> ```

The bitwise XOR operator is an [exclusive disjunction](https://simple.wikipedia.org/wiki/Exclusive_disjunction) logical operator, where the resulting bit is set to 1 _only_ if the two bits are a mismatch.

> [!example2] Bitwise XOR
>
> ```javascript
> let x = 5; // Binary: 101
> let y = 3; // Binary: 011
> let result = x & y; // Result: 110 (6 in decimal)
> console.log(result); // 6
> ```

A brief reminder that these are just the _operators_ apart from the assignment operators themselves. An assignment operator simply shortens the length of code using the `=` symbol.

## Comparison Operators

Comparison operators compare two values and return a boolean value (`true` or `false`). These are particularly useful in making logical decisions in your code, especially when used inside of conditional statements (`if`,`else`). Comparisons can check for both equality and inequality, as well as relative magnitudes (greater than, less than). Below is a table of all the comparison operators in JavaScript.

| Operator | Name                  | Description                                                           | Example     | Result  |
| -------- | --------------------- | --------------------------------------------------------------------- | ----------- | ------- |
| `==`     | Equal                 | Compares two values for equality, with type coercion.                 | `5 == '5'`  | `true`  |
| `!=`     | Not Equal             | Compares two values for inequality, with type coercion.               | `5 != '5'`  | `false` |
| `===`    | Strict Equal          | Compares two values for equality, without type coercion.              | `5 === 5`   | `true`  |
| `!==`    | Strict Not Equal      | Compares two values for inequality, without type coercion.            | `5 !== '5'` | `true`  |
| `>`      | Greater Than          | Checks if the left value is greater than the right value.             | `5 > 3`     | `true`  |
| `>=`     | Greater Than or Equal | Checks if the left value is greater than or equal to the right value. | `5 >= 5`    | `true`  |
| `<`      | Less Than             | Checks if the left value is less than the right value.                | `5 < 6`     | `true`  |
| `<=`     | Less Than or Equal    | Checks if the left value is less than or equal to the right value.    | `5 <= 5`    | `true`  |

### Type Coercion

You may notice that the first four entries in the table mention "type coercion." Type coercion is a key facet to JavaScript, and it is a process by which the language automatically converts one data type into another when performing operations. This is generally split into two forms, **implicit** (automatically) and **explicit** (manually) type coercion.

#### Implicit Type Coercion

JavaScript often automatically converts types to match the requirements of an operation. This is common in expressions and comparisons. For example, you likely will notice a strange result when attempting to add an integer to a 'stringed' integer in JavaScript. In this case, JavaScript will conert the integer into a string, then concatenate the two.

> [!example] Adding a Number to a String
>
> ```javascript
> let result = 5 + "5";
> console.log(result); // "55", Type: String
> ```

Even when performing a comparison operation, JavaScript will recognize that, for the equation to make sense, it must convert one of the data types into the other.

> [!example2] Comparison Check of a Number and String
>
> ```javascript
> let result = "10" == 10;
> console.log(result); // true
> ```

As the table describes, both `==` and `!=` operators facilitate type coercion, thus, the string of the number 10, and the number 10 will result in `true` when using the Equal To operation.

#### Explicit Type Coercion

Explicit type coercion is a manual process where you explicitly convert one data type into another. This is often called _type casting_ and is a practice used strategically whenever needed. For example, you can convert an integer into a string.

> [!example] Convert Number into String
>
> ```javascript
> let num = 5;
> let str = String(num);
> console.log(str); // "5"
> ```

## Logical Operators

Similar to comparison operators, logical operators are used to perform logical actions on values to return a boolean value. There are several logical operators available for use in JavaScript, all of which can be seen below.

<table>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Name</th>
      <th>Description</th>
      <th>Example</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&&</td>
      <td>Logical AND</td>
      <td>Returns `true` if both operands are true</td>
      <td>true && false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>||</td>
      <td>Logical OR</td>
      <td>Returns `true` if at least one operand is true</td>
      <td>true || false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>!</td>
      <td>Logical NOT</td>
      <td>Inverts the value of the operand</td>
      <td>!true</td>
      <td>false</td>
    </tr>
    <tr>
      <td>?:</td>
      <td>Ternary Operator</td>
      <td>Shorthand for `if-else` statement</td>
      <td>(5 > 4) ? "Yes" : "No"</td>
      <td>"Yes"</td>
    </tr>
    <tr>
      <td>??</td>
      <td>Logical Nullish Coalescing</td>
      <td>Returns right operand if left is `null` or `undefined`</td>
      <td>null ?? 'default'</td>
      <td>'default'</td>
    </tr>
  </tbody>
</table>

> [!note] Truth Tables
> Understanding the truth table is critical toward making sense of expressions containing boolean values.
>
> When working with the logical AND operator, the value `true` is only returned if both values are `true`.
>
> | A     | B     | A && B |
> | ----- | ----- | ------ |
> | true  | true  | true   |
> | true  | false | false  |
> | false | true  | false  |
> | false | false | false  |
>
> Whereas, when working with the logical OR operator, the value `true` is returned if _either_ value is `true`.
>
> <table>
>   <thead>
>     <tr>
>       <th>A</th>
>       <th>B</th>
>       <th>A || B</th>
>     </tr>
>   </thead>
>   <tbody>
>     <tr>
>       <td>true</td>
>       <td>true</td>
>       <td>true</td>
>     </tr>
>     <tr>
>       <td>true</td>
>       <td>false</td>
>       <td>true</td>
>     </tr>
>     <tr>
>       <td>false</td>
>       <td>true</td>
>       <td>true</td>
>     </tr>
>     <tr>
>       <td>false</td>
>       <td>false</td>
>       <td>false</td>
>     </tr>
>   </tbody>
> </table>

When you begin using these operators in your code, you may notice the prominence of the first **four**, this is because these are the most powerful and commonly used. For further examples, see below.

> [!example2] Common Logical Operators
>
> ```javascript
> let x = true;
> let y = false;
>
> console.log(x && y); // false
> console.log(x || y); // true
> console.log(!x); // false
> ```

> [!example] Ternary Operator
>
> ```javascript
> let x = 10;
> let y = 5;
>
> result = x > y ? "Yes" : "No";
> console.log(result); // Yes
> ```

The strangest operator of the bunch is certainly the **nullish coalescing operator**. This operation has a strict definition and returns a value based on whether the first argument is **nullish** (i.e. `null` or `undefined`). This operator compares two values, the first value is returned if it is **not** nullish, otherwise, the second value is returned. For clarification, see the following example.

> [!example2] Nullish Coalescing Operator
>
> ```javascript
> let age = null; // The 'first' value
> let text = "second option"; // The 'second' value
> let result = age ?? text; // first value is nullish, therefore will not be returned
> console.log(result); // second option
> ```

#### Conclusion

In this lesson, we explored four fundamental types of operators in JavaScript: arithmetic, assignment, comparison, and logical operators. These operators are essential tools for manipulating data and controlling the flow of your programs.

By mastering these operators, you will be equipped with the foundational tools needed to write more efficient, readable, and maintainable JavaScript code. As you continue to practice and apply these concepts, you'll find that they are integral to solving a wide range of programming challenges.
