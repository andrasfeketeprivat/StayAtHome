// Exercise 1
// Add an event listener to the button
// Log ‘Yeah, you clicked me’ to the console when the user clicks on the button
$(".first").on("click",() => {
    console.log("Yeah, you clicked me!")
})

// Exercise 2
// Add another button to the webpage
// When the user clicks on the second button change the first button’s text
$(".seccond").click(()=>{
    $(".first").text("A másodikra kattintottál")
})
// Exercise 3
// Add a third button to the webpage
// When the user clicks on the last button, change the background-color of each button
$(".third").click(() =>{
    $("button").css("background-color","purple")
    $("button").css("color","white")
})