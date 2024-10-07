//? FETCH API --------------
// function getStudents(url) {
//     fetch(url)
//         .then((responce) => {
//             return responce.json();
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }

// getStudents("students.json");

function getData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

getData("https://jsonplaceholder.typicode.com/albums")