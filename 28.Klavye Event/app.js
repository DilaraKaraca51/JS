//keypress : harf ve sayılarda tetiklenen event
//keydown : hepsinde çalışır
//keyup : tuştan elini kaldırdığında çalışır


// document.addEventListener("keydown", run);

// function run(e) {
//     console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.which);
//     //e.preventDefault();
// }


const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

console.log(input);
//input.addEventListener("keypress", run);
input.addEventListener("keyup", run);

function run(e) {
    //console.log(e.target.value);
    cardTitle.textContent = e.target.value;
}