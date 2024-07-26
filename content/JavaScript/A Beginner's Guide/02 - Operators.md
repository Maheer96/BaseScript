---
title: 02 - Operators
---

Operators are special symbols in programming that perform operations on operands (values and variables). They are essential for manipulating data and making logical decisions in your code. There are a few categories that operators can be divided into:

- [[02---Operators#arithmetic-operators|Arithmetic]]
- [[02---Operators#assignment-operators|Assignment]]
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
        <td><code>>>=</code></td>
        <td>Unsigned right shift assignment</td>
        <td>Shifts the bits of the left operand right by the number of positions specified by the right operand (unsigned)</td>
        <td><code>x >>>= y</code></td>
        <td><code>x = x >>> y</code></td>
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
