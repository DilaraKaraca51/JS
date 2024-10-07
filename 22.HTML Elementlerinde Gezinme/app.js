// HTML Elementleri Üzerinde Gezinmek
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todolastChild = document.querySelector(".list-group-item:nth-child(4");
const card = document.querySelector(".card");
console.log(todo);

//Anneden çocuğa erişmek
let value;
value = todoList;
value = todoList.children[0];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";


//Çocuktan anneye erişmek
value = todo;
value = todo.parentElement.parentElement;
let ul = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;

//Kardeşler arasında gezinmek
value = todo;
value = todolastChild;
value = todo.nextElementSibling.nextElementSibling;
value = todolastChild.previousElementSibling;

console.log(value);
