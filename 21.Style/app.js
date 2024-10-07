//Style özelliği

const todo = document.querySelector(".list-group-item")[0];
console.log(todo);

todo.style.color="red";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "900";
todo.style.paddingTop = "30px";
todo.style.paddingLeft = "70px";


const todoList = document.querySelector(".list-group");

todoList.style.marginTop = "60px";


const clearButton = document.querySelector("#todoClearButton");

clearButton.style.backgroundColor = "yellow";
clearButton.style.paddingTop = "20px";