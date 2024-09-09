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

That being said, we now know it is necessary to track the minimum number of coins needed for each amount from 0 to `amount`. This finally leads us toward our solution

### Solution

The beginning to our solution lies in creating a list of length `amount + 1`, given how lists work in Python. We're going to initialize the list to infinity, `float('inf')`, since we assume it is impossible to make that amount with the given coins. Each index `i` in this list will contain the minimum number of coins required to make that amount `i`.

Our base case would be the value of zero, given that no coins would be needed to make zero, we can simply set our first index to zero. We can write down our given array of coins, being `[1, 3, 5]`.

Here is our code so far:

```python
def coinChange(amount):
    # Init. min_coins list to track minimum no. coins needed for each amount from 0 to total
    min_coins = [float('inf)] * (amount + 1)

    # Base case: zero coins needed for zero amount
    min_coins[0] = 0

    # Coin values
    coins = [1, 3, 5]
```

```
writer: maheer :0
```
