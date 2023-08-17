
// waiting for js loaded
$(document).ready(function() {

    // * Select element: get value
    $("h1").css("color");

    // Set value
    $("h1").css("color", "red");
});

// * Manipulate Styles.
// * add multiple classes
$("h1").addClass("big-title margin-50");

//
console.log($("h1").hasClass("margin-50"));

// * Select element: get list
$("button");

// * Manipulate Text:
// * text, innerHTML
$("button").html("<em>Hey</em>")
//$("button").text("<em>Hey</em>")

// * Manipulate Attributes:
$("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png");
$("a").attr("href", "https://www.yahoo.com")

// * Add Event Listener:
$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

// * Add and remove elements:
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");
// $("button").remove(); // delete all buttons
