console.log("2. This is External JS.")

document.getElementsByTagName("li")[0]

document.getElementsByClassName("input")

document.getElementById("title");

document.querySelector("h1"); // query by tag name
document.querySelector("#title"); // query by id
document.querySelector(".btn"); // query by class name
document.querySelector("li a"); // query by combined selector

// add value to "class" attributes
// document.querySelector("h1").classList.add("huge");

/* innerHTML vs textContent
 * Let's say in html file:
 * <h1><strong>Hello</strong></h1>
 * document.querySelector("h1").innerHTML == "<strong>Hello</strong>" ; Return all of things between h1
 * document.querySelector("h1").textContent == "Hello"; Only return text between h1
*/

// get attributes
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
//document.querySelector("a").setAttribute("href", "https://www.bing.com");

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}
var student1 = new Student("Tom", 20)
console.log(student1)
