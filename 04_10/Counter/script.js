// Create an EventListener for clicking on the button, 
//   increase the value of the second heading (currently 0)
// (Optional) Create a working decreasing button as well
let counter = 0;
$("#increase").click(() => {
    counter = counter + 1;
    $("h2").text(counter)
})
$("#decrease").click(() => {
    counter = counter - 1;
    $("h2").text(counter)
})