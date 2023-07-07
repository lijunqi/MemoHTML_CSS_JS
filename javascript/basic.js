typeof(123);
var myName = "Jacky";
console.log(myName.length);

// * IF Conditionals
var num = 123;
if (num === 123) {
    console.log("Equal.");
} else if (num < 123) {
    console.log("Less than 123.")
}
else {
    console.log("Not equal.");
}

if (num !== 456) {
    console.log("Not equal sign.");
}

// * Comparators and Equality
var a = 1;
var b = "1";
if (a == b) {
    // two equal signs: ==  Not checks data type
    console.log("a equals b."); // print this one
}
else {
    console.log("a NOT equals b.");
}

/* Combining Comparators
 * AND  &&
 * OR   ||
 * NOT  !
*/

// * Array
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]
console.log("Total guestList: " + guestList.length)
console.log("Does James is included in guest list? " + guestList.includes("James"))
guestList.push("Jacky"); // Add element into array
guestList.pop(); // drop last element in array

// * Control Statements: While Loops, For Loops
var i = 1;
while (i < 2) { // Checking State
    console.log("i = " + i);
    i++;
}

for (i = 0; i < 2; i++) { // Iterate
    console.log("i = " + i);
}
