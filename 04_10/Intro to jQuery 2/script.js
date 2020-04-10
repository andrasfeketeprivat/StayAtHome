// Let’s create some variables with the following names and values:
// color: purple
// number: 10
// word: cool
let color = "purple";
let number = 10;
let word = "cool";
// Change the background color of the first box to purple, if the color is purple
if (color==="purple") {
    $(".north").css("background-color","purple")
}

// Change the text of the second
//   if the number is bigger than 100 to "whoah, that's a big number."
//   otherwise "just a regular number, please."
if (number>100) {
    $(".east").text("whoah, that's a big number")
} else {
    $(".east").text("just a regular number, please")
}

// Change the text to "Power of DOM" of the third if the word is "cool", otherwise change the fourth one
if (word==="cool") {
    $(".south").text("Power of DOM")
} else {
    $(".west").text("Power of DOM")
}