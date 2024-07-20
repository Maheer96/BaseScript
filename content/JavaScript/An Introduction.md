> [!Question] An Introduction?
> We think it's important to understand the context and functionality of a language before delving into it. This way, you're familiar with the reason the entire language was built, its use cases and practicality, as well as its historical and linguistic evolution! <br><br> In the case of JavaScript, there are quite a few concepts you should familiarize yourself with prior to taking a dive into it. Understanding the web-related theory underpinning JavaScript is useful when considering general front-end development. More on this will be discussed later.

## What is JavaScript?

[**JavaScript**](https://www.javascript.com/) is a [high-level](https://en.wikipedia.org/wiki/High-level_programming_language#:~:text=Examples%20of%20high%2Dlevel%20programming,low%2Dlevel%20are%20inherently%20relative.) scripting/programming language used to integrate complex features on websites. Among a few other languages you may recognize — Python, SQL, C#, and JavaScript are some of the most utilized programming languages in the world. In fact, JavaScript _<u>is</u>_ the most utilized language globally! Now, why is that the case? What makes JavaScript so special?

Created for the first [browser war](https://en.wikipedia.org/wiki/Browser_wars) in the mid-1990s, JavaScript was a programming language dedicated to driving the now-discontinued [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) web browser ahead in the race against its rival, Microsoft's Internet Explorer.

> [!abstract] Did you know?  
> JavaScript was originally called LiveScript, but was renamed to JavaScript to capitalize on the popularity of Java. The initial prototype of JavaScript, _Mocha_, was developed by Brendan Eich in just ten days!

## Front-End Development

You might be familiar with HTML and CSS, two languages that provide the structure and style for web pages, respectively. HTML lays out the foundation and content of a webpage, while CSS enhances its appearance with colors, layouts, and fonts.

Where does JavaScript tie into all of this? Well, JavaScript adds interactivity and dynamic behavior to your web pages. It allows you to create engaging user experiences by enabling features like form validations, interactive maps, dynamic content updates, animations, and much more. While HTML and CSS make your webpage look good and structure it well, JavaScript brings it to life, making it responsive and interactive.

Perhaps this analogy I made to this random game I found online that might make sense to you.

> <img src="./frontend.png"></img>

### How Are They Interconnected?

Within the main HTML file you create (commonly called index.html), the CSS styling sheet and the JS script that you want to be interconnected must be specified within this file. An example of this can be seen below.

> [!example] Example — Linking CSS and JS to HTML
>
> ```html
> <!doctype html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>HTML with Linked CSS and JavaScript Files</title>
>     <link rel="stylesheet" href="styles.css" />
>     # Connecting HTML to the CSS file named 'styles'
>   </head>
>   <body>
>     <div class="container">
>       <h1>Welcome to My Web Page</h1>
>       <p>This page demonstrates linking external CSS and JavaScript files.</p>
>       <button id="colorButton">Change Background Color</button>
>     </div>
>
>     <script src="script.js"></script>
>     # Connecting HTML to the JS file named 'script'
>   </body>
> </html>
> ```

### The Document Object Model

The Document Object Model (DOM) is an **object** and **application programming interface** (more on these later!) that embodies the page you see on a webpage. Through this model, anything that was built inside of an HTML file can be modified, deleted, or added to. Whenever the web browser loads an HTML document, the DOM is created. All elements that were employed in the HTML document are formatted into a grove-like orientation (formally called a _structure model_). JavaScript is able to access the DOM and add dynamic modifications the the webpage.

That was a lot of words. Let's look at an example (inspiration taken from [here](https://www.w3.org/TR/WD-DOM/introduction.html)).

> [!example] DOM Example
>
> ```html
> <!doctype html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Table Example</title>
>   </head>
>   <body>
>     <table>
>       <tbody>
>         <tr>
>           <td>Oak</td>
>           <td>Sycamore</td>
>         </tr>
>         <tr>
>           <td>Elm</td>
>           <td>Willow</td>
>         </tr>
>       </tbody>
>     </table>
>   </body>
> </html>
> ```

If you aren't familiar with HTML, this is a basic 2x2 table, where each row is represented by `<tr>` and each entry by `<td>`. When we look at the DOM structure model, we see how these objects are laid out.

> <img src="./DOM.png"></img>

Every component in that image is treated like an "object" in JavaScript, which can then be manipulated to the user's liking.

## Static and Dynamic Code Analysis

The distinction in the form of programming that we are doing when we incorporate JavaScript into a simple HTML and CSS code is a transition from what we call _static content_ to _dynamic content_.

- Static Content: When we use only HTML and CSS, the content of the web page is static. This means that the content and style are fixed and do not change in response to user actions or other inputs. The page looks the same every time it is loaded.

- Dynamic Content: When we add JavaScript, we enable dynamic content. JavaScript allows the web page to interact with the user, respond to events, and update the content dynamically without needing to reload the entire page. This transition makes the web experience more interactive and engaging.

## Frameworks and Supersets

Chances are that if you've heard of JavaScript, then you've heard of several other terms associated with it. You might be familiar with _React_, _Node_, or maybe even _TypeScript_ if you're really out there. The list seems to go on, but what's the distinction? If you haven't fried your brain looking for an answer already, look no further.

A framework is a structure that provides a foundation and pre-written code to help you build applications more efficiently. It offers a set of tools, libraries, and best practices, allowing developers to focus on writing the unique aspects of their application rather than reinventing the wheel. For instance, _React_ is a JavaScript library for building user interfaces, particularly single-page applications.

A superset, on the other hand, is an expansion of a base language, incorporating all of its components while adding additional features. For example, [Kotlin](https://kotlinlang.org/) is a superset of the popular language Java, and C++ is essentially a superset of the language C. In our case, we call TypeScript a superset of JavaScript because it adds syntax, specifically typing.

For the most part, this course will be focused on _vanilla_ JavaScript, that is, the base language. Before taking a look into all of the modern frameworks and developer tools, it is critical to learn the fundamentals first.

## Course Prerequisites

With a wide variety of topics to cover within this course, having familiarity with a few of the following technologies will provide as a strong helping hand to fully becoming a JavaScript developer!

For starters, we recommend you have played around with:

1. A code editor (i.e. VSCode)
2. Basic HTML and CSS
3. Command lines & navigating the file system
4. Git and GitHub (if you hope to move further and publish your works)

## Conclusion

I'm happy you made it here! That was a lot to cover for just an introduction to a programming language, but we think it's key to know the groundwork before diving into the learning, especially for a language like JavaScript. With that being said, now is a good time to start learning. Choose any of the lessons of your choice available in the dropdown menu under 'JavaScript.'

```
# enjoy!
```
