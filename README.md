# BaseScript 🪁

BaseScript is a project founded by engineering students at [McMaster University](https://www.eng.mcmaster.ca/)! We believe that the greatest way to learn _is_ to teach, and BaseScript serves as a bridge to fill that gap that many students struggle with — retaining what you know! 

This project focuses on becoming a widespread programming database developed by individuals who yearn to expand their coding knowledge. Feel free to contribute to this project. Whether you happen to be brushing up on an old language or learning a new one, let the world know what you have absorbed!

Check out our website here: https://basescript.org/

## Inspiration 🎈

I was inspired to create BaseScript in the summer when I was itching to learn a new language.

I ended up choosing JavaScript, the world's most used programming language. The issue was that I often studied new topics in general academia by taking notes, but when it came to programming languages, I found no consistent way of doing so, leading to BaseScript. 

<hr>

# Contributions

If you'd like to become a long-term contributor to BaseScript, feel free to reach out and we can speak on collaborative permissions. For starters, fork this repository and clone it onto your local machine. Follow these next instructions:

1) Install dependencies

To successfully get BaseScript running on your machine, you'll need the following packages/dependencies:

* `Node/npm`
* `yargs`

**Windows & Mac:**

Follow the instructions on [the official node website](https://nodejs.org/en).

Install `yargs`:
```
npm install yargs
```

Verify:
```
node -v
npm -v
npm list yargs // Check if anything shows up
```

**Linux:**

Add NodeSource repository:
```
curl -fsSL https://deb.nodesource.com/setup_22.11.0.x | sudo -E bash -
```

Then, install Node.js, npm, and yargs
```
sudo apt-get install -y nodejs
npm install yargs
```

Verify:
```
node -v
npm -v
npm list yargs
```

2) Locally Hosting

To run a localhost, run the following command in your terminal:

```
npx quartz build --serve
```
This will launch a local server where you can see your changes take immediate effect. Note that any core changes that may require several layers of rebuilding will take considerable time. 

If you run into the following error when doing any form of npm/node commands in your VS Code terminal:
```
npm : File C:\<location> cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```
Your Windows Powershell is likely set to Restricted or RemoteSigned, blocking the script. To fix this, run the following command:
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Verify:
```
node -v
npm -v
```

3) Pushing to Repo

If you wish to deploy the changes to your repo, run the following command:
```
npx quartz sync
```
This will update your forked repository, where you can now submit a pull request for us to review. Again, if you'd like easier push access, feel free to reach out to discuss permissions. 

Happy learning!

<hr>

# Project Roadmap 📜

Given that our environments as students are always changing in regard to the technologies we are surrounded by, this roadmap only provides a loose skeletal layout of what we may bring to the table. Nonetheless, BaseScript is currently focused on three major sub-projects, with more to come. 

## Sub-Project 1 — JavaScript

The lessons on JavaScript were founded and are currently led by Maheer Huq. The lessons are being ordered in a format that I find to be the most logical. The following list illustrates the current layout for how I am planning to carry out the rest of the series. The progress for each lesson is indicated by the emoji adjacent to the lesson name.

✅ — **Completed** <br>
🔄 — **In The Works/On Hold** <br>
⭕ — **Incomplete**

```
1. The Basics [Console, 'Hello World', Comments, Variables] ✅
2. Operators ✅
3. Data Types ✅ 
4. Strings ✅ 
5. Objects 🔄
6. Arrays ⭕
7. Classes ⭕
8. Functions ⭕
9. Arrow Functions ⭕
10. DOM ⭕
11. Conditionals ⭕ 
12. Events ⭕ 
13. Troubleshooting ⭕
```

A summary of the information above can be found in the table below.


| Developer(s) | Current Phase | Total Progress |
---------------|---------------|----------------|
Maheer Huq     | Objects Lesson|  ████▒▒▒▒▒▒ 40%|


### Future Add-Ons

In addition to what is already going to be taught in these lessons, I was thinking that I may branch off of what Vanilla JavaScript teaches to more modern technologies. The most prominent examples of these technologies are **React** and **TypeScript**, which I have found myself using often lately. 

## Sub-Project 2 — C

The C directory on BaseScript is currently being led by Akash Ahilan, with developments in it's early stages. The format for the lessons are yet to be explicitly formatted, however, one can expect it to follow a similar format to that of my JavaScript lesson layout, given that a language should only be learned in so many ways. 

| Developer(s) | Current Phase | Total Progress |
---------------|---------------|----------------|
Akash Ahilan   | Lesson Planning|  █▒▒▒▒▒▒▒▒▒ <10%|

## Sub-Project 3 — Leetcode Walker

Leetcode Walker is a comprehensive leetcode explanation series created by Shadi El-Fares on his [youtube channel](https://www.youtube.com/@shadielfares). Inspired, I decided to adapt this series into text format onto BaseScript where I plan to cover various leetcode problems in accordance to what interests me. Given that Leetcode is essentially becoming an industry standard for developers to understand, we expect this to become one of our main focuses going forward, given the mutual benefit.

The current focus on my end of the Leetcode Walker series is to document my learning journey through the well-known [Blind 75](https://www.techinterviewhandbook.org/best-practice-questions/). This is a curated set of Leetcode questions that are frequently used in interviews and provide a base structure to your understanding of Data Structures & Algorithms. Given that I've only been able to post one lesson as of now, there is a long way to go for this series, and it likely will not end at the Blind 75 series itself. 

For this sub-roadmap, refer to the list below with the same indications as before.

✅ — **Completed** <br>
🔄 — **In The Works/On Hold** <br>
⭕ — **Incomplete**

Note: The Blind 75 tends to vary from person-to-person, hence I will be following this specific set of problems found on neetcode.io. 
```
Arrays & Hashing
- Contains Duplicate ✅
- Valid Anagram 🔄
- Two Sum ⭕
- Group Anagrams ⭕
- Top K Frequent Elements ⭕
- Encode and Decode Strings ⭕
- Product of Array Except Self ⭕
- Longest Consecutive Sequence ⭕

Two Pointers
- Valid Palindrome ⭕
- 3Sum ⭕
- Container With Most Water ⭕

Sliding Window
- Best Time to Buy and Sell Stock ⭕
- Longest Substring Without Repeating Characters ⭕
- Longest Repeating Character Replacement ⭕
- Minimum Window Substring ⭕

Stack
- Valid Parentheses ⭕

Binary Search
- Find Minimum In Rotated Sorted Array ⭕
- Search In Rotated Sorted Array ⭕

Linked List
- Reverse Linked List ⭕
- Merge Two Sorted Lists ⭕
- Reorder List ⭕
- Remove Nth Node From End of List ⭕
- Linked List Cycle ⭕
- Merge K Sorted Lists ⭕

Trees
- Invert Binary Tree ⭕
- Maximum Depth of Binary Tree ⭕
- Same Tree ⭕
- Subtree of Another Tree ⭕
- Lowest Common Ancestor of a Binary Search Tree ⭕
- Binary Tree Level Order Traversal ⭕
- Validate Binary Search Tree ⭕
- Kth Smallest Element In a BST ⭕
- Construct Binary Tree From Preorder And Inorder Traversal ⭕
- Binary Tree Maximum Path Sum ⭕
- Serialize And Deserialize Binary Tree ⭕

Heap / Priority Queue
- Find Medium From Data Stream  ⭕

Backtracking
- Combination Sum ⭕
- Word Search ⭕

Tries
- Implement Trie Prefix Tree ⭕
- Design Add And Search Words Data Structure ⭕
- Word Search II ⭕

Graphs
- Number of Islands ⭕
- Clone Graph ⭕
- Pacific Atlantic Water Flow ⭕
- Course Schedule ⭕
- Graph Valid Tree ⭕
- Number of Connected Components In An Undirected Graph ⭕

Advanced Graphs  
- Alien Dictionary ⭕  

1-D Dynamic Programming  
- Climbing Stairs ⭕  
- House Robber ⭕  
- House Robber II ⭕  
- Longest Palindromic Substring ⭕  
- Palindromic Substrings ⭕  
- Decode Ways ⭕  
- Coin Change 🔄  
- Maximum Product Subarray ⭕  
- Word Break ⭕  
- Longest Increasing Subsequence ⭕  

2-D Dynamic Programming  
- Unique Paths ⭕  
- Longest Common Subsequence ⭕

Greedy  
- Maximum Subarray ⭕  
- Jump Game ⭕  

Intervals  
- Insert Interval ⭕  
- Merge Intervals ⭕  
- Non Overlapping Intervals ⭕  
- Meeting Rooms ⭕  
- Meeting Rooms II ⭕  

Math & Geometry  
- Rotate Image ⭕  
- Spiral Matrix ⭕  
- Set Matrix Zeroes ⭕  

Bit Manipulation  
- Number of 1 Bits ⭕  
- Counting Bits ⭕  
- Reverse Bits ⭕  
- Missing Number ⭕  
- Sum of Two Integers ⭕  
```
In summary,

| Developer(s) | Current Phase | Total Progress |
---------------|---------------|----------------|
Maheer Huq   | Valid Anagram|  ▒▒▒▒▒▒▒▒▒▒ ~2%|

### Future Add-Ons

As discussed this likely will not conclude the Leetcode Walker series (if ever finished :p), since you can always continue learning. This also does not mean we will be strictly following these 75 problems. If we ever encounter a problem outside of this list, we may simply create a lesson on it and place it outside of the Blind 75 folder (uncreated).

Currently, I am looking to:
* Create a general Data Structures file directly under the LW directory. A lot of the lessons will require knowledge on simpler concepts of programming that I won't be explaining in each lesson, hence, a curated lesson dedicated would work well with backlinks
* Organize the LW series into proper folders

## Future Sub-Projects

Our developers are all over the place in their degrees and learning careers, and there's no telling what we will be providing BaseScript with next. A few things that we may expect to see given our trajectories are: 

* **Python**
* **C++**
* **Java**
* **Cloud Technologies**
