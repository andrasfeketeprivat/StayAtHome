// When clicking on the Add todo button add the content of the input field to the list
// (Optional) Clicking on a list item should make the text line-through
// this.document.querySelector('#addNewToDo').addEventListener('click',() => {
//     let newToDoItem = document.getElementById("newToDo").value
//     $("ul").append(`<li>${newToDoItem}</li>`)
// })
let addNewListItem = () => {
    console.log(document.getElementById("newToDo"));
    // let newToDoItem = document.getElementById("newToDo").value
    // $("ul").append(`<li>${newToDoItem}</li>`)
}

this.document.querySelector('#addNewToDo').addEventListener('click',addNewListItem);
