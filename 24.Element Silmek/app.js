//Element Silme
const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

todos[0].remove();
console.log(todos);

todos[todos.length-1].remove();