// Document Object Module

let value;
console.log(document.location);
// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;
// value = document.all;
// value = document.characterSet;
// value = document.title;
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];
// value = document.forms.item(1).children;
// value = document.domain;
value= document.contentType;
console.log(value);

// window > document


// Selectors (Seçiciler) - Style Özellikleri
//classname, id, tag name 

//getElementById: idye göre elementi yakalar
//getElementByClassName: Class ismine göre yakalar
//getElementByTagName: etiket ismine göre yakalar



// const button = document.getElementById("todoAddButton");
// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));
// console.log(button.className);

// console.log(button.getAttribute("class"));
// // const classListesi = button.classList[3];
// // const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);


let buttonText = button.textContent;
let buttonText2 = button.innerHTML;

console.log(buttonText);
console.log(buttonText2);

button.innerHTML="<b>Todo Ekleyin</b>";


const todoList = Array.from(document.getElementsByClassName("list-group-item"));
todoList.forEach(function(todo){
    console.log(todo.textContent);
})

console.log(todoList);


const forms = document.getElementsByTagName("form");
forms.forEach(function(form){
    console.log(form);
})
console.log(forms[1]);


const todoList1 = document.getElementsByClassName("li");
console.log(todoList1);

//querySelector - querySelectorAll

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);


const todoList3 = document.querySelectorAll(".list-group-item");
console.log(todoList3);



