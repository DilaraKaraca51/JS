//Mouse Eventları

//DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave

// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     console.log("Sayfa Yüklendi");
// }

// window.addEventListener("load",run);
// function run(){
//     console.log("Sayfa Yüklendi");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("click",run);
// function run(e){
//     console.log(e.type);
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];
// cardTitle.addEventListener("mouseover",run);
// function run(e){
//     console.log(e.type);
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];
// cardTitle.addEventListener("mouseout",run);
// cardTitle.addEventListener("mouseover",run);
cardTitle.addEventListener("mouseenter",run);
cardTitle.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}