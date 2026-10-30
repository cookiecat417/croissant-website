// TODO 1 (Wednesday): make a variable called siteName on the line below.
const siteName = "The Cutest Croissant";

// TODO 2 (Thursday): make a variable called visitCount holding a number.
let visitCount = 1;

// TODO 3 (Thursday): give visitCount a new, bigger number.
visitCount = 3;

// TODO 4 (Thursday): make a variable called showNewLabel holding true or false.
const showNewLabel = true;

// Don't change the lines below. They put your variables on the page.
// You'll learn how they work in Week 2 (Hero section).
document.querySelector(".logo").textContent = siteName;
document.querySelector(".visits").textContent = "Visits: " + visitCount;
document.querySelector(".new-label").hidden = !showNewLabel;

document.querySelector("h1").textContent = "Salutations, user! Welcome in!";
document.querySelector("button").textContent = "Click me!";

const heroTitle = document.querySelector("h1"); 
heroTitle.textContent = `Hey, User! Take a look around ${siteName}!`;
heroTitle.addEventListener = ("mouseover", "h1");

document.querySelector("button").textContent = "Join our fabulous " + visitCount + " visitors today!";

function showMessage() {
     document.querySelector("#hero-message").textContent = `Thank you for visiting ${siteName}!`; 
}

const heroButton = document.querySelector("#hero-button");
heroButton.addEventListener("click", showMessage);


