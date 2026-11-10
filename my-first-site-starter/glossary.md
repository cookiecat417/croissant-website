# My Glossary

Add each day's new words here, in your own words.

## Kickoff
- **HTML**: HTML provides the structure or foundation of a website (the walls of a house).
- **CSS**: CSS changes the looks or appearance of a website such as the colors, sizes, or spacing (the paint and furniture).
- **JavaScript**: JavaScript effects the behavior of a website and allows certain functions to change or react (The electricty: light switches, doorbells).

## Week 1, Monday (HTML)
- **Element**: Anything contained inside of a link, list, or heading is an example of an element. 
- **Tag**: The opening and closing markers of an element (e.g <a> and </a> are simple examples of tags).
- **Attribute**: An attribute works only in the opening tag. It can be used to show an image, change the size of an image, or connect to a link.

## Week 1, Tuesday (CSS)
- **Selector**: The element selected to be changed or styled (e.g header, ul, a, .logo).
- **Property**: What you want to change or style in your selector (color, background-color, padding, font-size).
- **Value**: The new setting you give to your selector. Works hand-in-hand with your property (white, #f2c480, 24px).

## Week 1, Wednesday (JS)
- **Variable**: A name that holds a value or, in other words, a jar that holds a value (siteName).
- **Value (JS)**: A piece of infomration like text (Strings), a number (Number/Integers/Floats), and true or false statements (Booleans).
- **String**: Any text inside of quotation marks ("The Littlest Loafy").

## Week 1, Thursday (JS)
- **Let**: A variable's value that can be adjusted later on. Its place is always before a variable (let visitCount = 1)
- **Number**: Numeric value. Can also be written without quotes (let visitCount = 1, visitCount = 3)
- **Boolean**: True or False statement. Can also be written without quotes (showNewLabel = true;)

## Week 2, Monday (HTML)
- **Section**: An element that groups things inside of it and into one part (e.g <section> and </section>).
- **Heading**: The title of a page. There are six in total, scaling from the most important headings to the least important (e.g h1, h2, h3, h4, h5, and h6).
- **Button**: An element that makes a clickable button (e.g <button>Click Me!</button>)

## Week 2, Tuesday (CSS)
- **Padding**: The space inside, or the packing peanuts, of a box (Exists between the content inside of a box and the border).
- **Border**: The edge, or the walls, of a box (The line of the box).
- **Margin**: The space outside of a box (The space that exists outside of the border).

## Week 2, Wednesday (JS)
- **DOM**: The copy of a browser's page. This can be effected or changed through Javascript (**document**.querySelector("h1").textContent = "Salutations, user! Welcome in!").
- **querySelector**: Finds an HTML element that matches a CSS selector (document.**querySelector("h1")**.textContent = "Salutations, user! Welcome in!").
- **textContent**: Refers to the text inside of an element. This can be effected through Dom manipulation (document.querySelector("h1").**textContent = "Salutations, user! Welcome in!"**).

## Week 2, Thursday (JS) 
- **Template Literals**: Another version of a string that contains backticks and variables (**`Hey, User! Take a look around ${siteName}!`**).
- **Backtick**: The beginning and ending of a template literal. Acts similarly to quotations (**`**Hey, User! Take a look around ${siteName}!**`**).
- **Placeholder**: Found inside of a template literal and contains a variable name inside (`Hey, User! Take a look around **${siteName}**!`).

## Week 3, Monday (HTML)
- **ID**: An attribute that gives one element its own name. While **classes** can contain multiple items inside of it, **ids** only contain one element (**<p id="hero-message">**).
- **ID Selector**: A pound or '#' and the name of the element in that ID (**#hero-message**).

## Week 3, Tuesday (CSS)
- **Pseudo-Class**: A word that comes after a colon. Styles an element in a specific state (**':hover'**).
- **Hover**: When the mouse is resting over an element.
- **Cursor**: THe mouse pointer shows a pointing hand (**'cursor: pointer'**).

## Week 3, Wednesday (JS)
- **Function**: A function contains a set of instructions that can be named. These set of instructions can be called (**function openShop()**).
- **Call**: This is how you get your function to run. To call your function, write the function name followed by parathesis (**openShop()**).
- **Function Body**: The instructions inside of a function. Contained inside of the curly brakcets, **{ ... }** 
(function openShop() **{
    document.querySelector("#shop-sign").textContent = "We're open!"; 
}**).

## Week 3, Thursday (JS)
- **Event**: Something that occurs or changes an element on a page (heroButton.addEventListener(**"click"**, showMessage);).
- **Event Listener**: Waits for a specific event to happen and calls the function linked to it when it happens ().
- **addEventListener**: This is what is being attached to an element in order for the event ot be carried out (**heroButton.addEventListener("click", showMessage);**).

## Week 4, Monday (HTML) 
**Today I: added a new button with an ID of "reset-button".**

<!-- NOTE - I probably won't write any of the "Today I:" lines unless there are no words for that day. -->

## Week 4, Tuesday (CSS) 
- **Transition**: This makes a style happen slowly instead of immediately (**transition: all 0.5s;**).
- **Duration**: How long something takes. In this case, the **0.5s** inside of a transition.

## Week 4, Wednesday (JS)
- **Console**: A hidden panel in the browser (**e.g Google Chrome**) where messages for the builder show up.
- **Console.log**: Writes a message (Or a variable's value) in the console (**console.log(visitCount);**).

## Week 4, Thursday (JS)
**Today, I transformed my hero button into a counter and my reset button to wipe and start back at 0**. 
- **Counter**: A variable that goes up by 1 each time something happpens.

## Week 5, Monday (HTML + JS)
**Today, I added a new id titled #menu-button and had a troubling experience with troubleshooting both the menu and hero buttons. I did briefly use ChatGPT to try and regroup my thoughts and now have a better understanding of my button id experience.**
- **Toggle**: One control that switches something between two states, like open and closed.
- **Hamburger Icon**: =, three lines that mean "menu" (**"= Menu"**).

## Week 5, Tuesday (CSS + HTML)
- **Display**: Decides if and how an element shows; `none` hides it entirely (**Display: none;**).
- **Combined Selector**: An id and a class combined together with no space (**`#main-nav.open`;**); it matches only an element that has both.