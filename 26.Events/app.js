//Event (Olay)
//addEventListener()

const clearButton = document.querySelector("#todoClearButton");
clearButton.addEventListener("click",changeTitle);

function changeTitle(e){
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
    console.log(e.type);
}

