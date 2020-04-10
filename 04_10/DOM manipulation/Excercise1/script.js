// Get your solution of the fourth exercise from the html day
// Create and include a scripts.js file just like before
// Create an array with random names and yours
let names = ["Adrien","Blanka","Ágnes","Géza","András"]

// Using forEach to add each name to the <ul> list
for (let i = 0; i < names.length; i++) {
    $("ul").append(`<li>${names[i]}</li>`);   
}

// (Optional) Your name should be bold
for (let i = 0; i < names.length; i++) {
    if (names[i]==="András") {
        $("ul").append(`<li><strong>${names[i]}</strong></li>`);
    } else {
        $("ul").append(`<li>${names[i]}</li>`);
    } 
}

names.forEach((name) => {
    if (name==="András") {
        $("ul").append("<li><strong>"+name+"</strong></li>");
    } else {
        $("ul").append(`<li>${name}</li>`);
    }
});

// Create this object:
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};
// Add a new block at the end of the page, the title should be in a heading, 
// the text should be in a paragraph block

$("main").append(
    `<h1>${additionalBlock.title}</h1>`+
    `<p>${additionalBlock.text}</p>`);