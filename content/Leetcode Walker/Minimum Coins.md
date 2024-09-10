---
title: Coin Change
---

## Problem

Coin Change is **medium** level problem #332 on Leetcode, for the full description, see [here](https://leetcode.com/problems/coin-change/description/). In Coin Change, you are given an integer array `coins` of _different_ numbers, and an integer `amount` representing a total amount of money.

The objective is to return the **fewest number of coins that you need to make up the amount**. If the amount cannot be made up by the combination, return `-1`.

> [!example] Example
>
> Input: `coins = [1, 2, 5]`, `amount = 11` \
> Output: 3 \
> Explanation: 11 = 5 + 5 + 1

## A Simplified Prelude

The difficulty of this problem stems from the user being able to control the input to their liking. An interview question I had recently was, in fact, a simplified version of this problem that helped me understand the true version.

This lessened variant of Coin Change left the `coins` array fixed to `[1, 3, 5]`, meaning only the `amount` variable is up to the user. Hence, the only parameter that our function will take is just that, `amount`. For clarity, most names will be based on the idea of _minimum coins_ as that is the premise of the problem.

### Dynamic Programming

Following the definition of our function, `coinChange`, we need to think about what our first lines will be, but even before that we should understand how we will approach this. To solve this problem we're going to use **dynamic programming** (DP), an optimization technique used to break down complex problems into simpler subproblems.

In this case, our minimum coins problem lies under the idea of **optimal substructure**, which means the optimal solution to the problem can be constructed from the optimal solutions to its subproblems. To clarify:

- To find the minimum coins needed for a given amount, you can use the minimum coins needed for smaller amounts
- For instance, to determine the number of coins needed for an amount `x`, you consider the minimum coins needed for `x - coin`, for each coin available.
  - This is because, for each coin, if we do use it, we need to find out how many more coins are required to make up the remaining `x - coin` amount

That being said, we now know it is necessary to track the minimum number of coins needed for each amount from 0 to `amount`. This finally leads us toward our solution.

### Solution

The beginning to our solution lies in creating a list of length `amount + 1`, given how lists work in Python. We're going to initialize the list to infinity, `float('inf')`, since we assume it is impossible to make that amount with the given coins. Each index `i` in this list will contain the minimum number of coins required to make that amount `i`.

Our base case would be the value of zero. Given that no coins would be needed to make zero we can simply set our first index to `0`. We can also write down our given array of coins, being `[1, 3, 5]`.

Here is our code so far:

```python
def coinChange(amount):
    # Init. min_coins list to track minimum no. coins needed for each amount from 0 to total
    min_coins = [float('inf')] * (amount + 1)

    # Base case: zero coins needed for zero amount
    min_coins[0] = 0

    # Coin values
    coins = [1, 3, 5]
```

The difficulty of the problem lies in the following algorithm. We're going to utilize dynamic programming to carry out the plan we made in the previous section. Recall that our idea is to build the solution for all amounts from 1 up to the `amount`, step by step, using information we gained about preceding numbers.

Suppose we want to make the amount of `5`. If we know how to make `4`, then using our `1` denomination, we know how to make 5. Similarly, if we want to amount `11`, and we know how to make `10`, we simply add one more to the minimum number of coins needed to make `10`!

Given that this is an **incremental problem**, it should be clear that we should be using a `for` loop. Since we are starting from smaller subproblems and building up, a `for` loop will allow us to start from 1, and work up to `amount`:

```python
for i in range(1, amount + 1)
```

Inside this loop, we ask, can I use one of these coins to make the amount at our index, `i`? Hence, we once again use a `for` loop, instead this time we are looping through our list of coins.

```python
  for coin in coins:
```

We now want to check if the index we are at can be fulfilled by one of our coins. We also want to make sure we don't deal with negatives, so we impose a _greater than or equal to_ operator in the following statement.

```python
    if i - coin >= 0:
```

Here we are checking if the index subtracted by one of the coins from our list is positive, and if it is, we can use the coin. Take a look at this example for further clarification:

> [!example2] Example
> Say we wanted to make an amount of our index when `i = 3`. Our list of coins is `[1, 3, 5]`.
>
> - For the first coin, `i - coin = 3 - 1 = 2`, and since 2 >= 0, we **can** use the `1` coin
> - For the second coin, `i - coin = 3 - 3 = 0`, which we cYan also use
> - For the third coin, `i - coin = 3 - 5 = -2`, which we **cannot** use, since it is too large to make up the number `3`.

Since we are using `i - coin >= 0`, we guarantee, that regardless of the coin value, we have a filter for the coins we can use (which is why we set each array entry to a primitive value of infinity).

Given that we've filtered the coins we can use to make up `i`, we now need to replace the entry of that array with the minimum number of coins needed to make `i`. Before execution, every entry is set to infinity, so if we compare the current

```
writer: maheer
```
