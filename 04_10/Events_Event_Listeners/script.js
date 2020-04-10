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

// Exercise 1
//   Read the desired color from the input
//   Change the buttons’ background-color to the given color
//   Try it with different colors
//Exercise 2
//   Now your previous application changes the buttons’ color whenever the input vale has changed and you clicked on the last button
//   Change the behavior by ignoring all the clicks after the first one. So even if the input has changed, keep the previous color if it has already changed once.
let counter = 0;                                              //Exercise 2  
$("#btnColor").change(() => {                                 //Exercise 1
    // console.log("szín változott");                         //Debug
    counter = counter + 1;                                    //Exercise 2
    if (counter<=1) {                                         //Exercise 2
        let btnColor = document.querySelector("#btnColor");   //Exercise 1
        // btnColorValue=btnColor.value;                      //Debug
        // console.log(btnColorValue);                        //Debug
        $("button").css("background-color",btnColor.value)    //Exercise 1
    }   else {                                                //Exercise 2
        $("#btnColorLabel").text("A gomb színét csak 1-szer lehet megváltoztatni");  //Exercise 2
    }                                                         //Exercise 2
})                                                            //Exercise 1

