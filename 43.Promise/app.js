//? PROMISE

// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Promise başarılı")
//     }
//     else {
//         reject("Promise başarısız");
//     }
// })

// console.log(promise1)

/*let check = true;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise te herhangi bir sıkıntı yok")
        }
        else {
            reject("Sıkıntı var")
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log("Her zaman çalışır"));
*/


//? PROMISE + XMLHTTPREQUEST

// function readStudents(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     try {
//                         const students = JSON.parse(xhr.responseText);
//                     }
//                     catch (error) {
//                         console.log("Json da problem var")
//                     }
//                 }
//             })
//         } catch (error) {
//             console.log("Jsonda problem var");
//             reject(error);
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }

// readStudents("students.json")
//     .then((data) => console.log(data))
//     .catch((error) => console.log("hata", error))


/*function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("get", url)
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typeicode.com/users")
    .then((data) => {
        //console.log(data)
        data.forEach(user => {
            console.log(user.name)
        });
        console.log("Farklı asenkron kodu çalıştırabiliriz")
    })
    .catch((error) => console.log(error))
    .finally(() => {

    })
        */

const p1 = Promise.resolve("1. promise başarılı")
const p2 = Promise.resolve("2. promise başarılı")
const p3 = new Promise((resolve, reject) => {
    resolve("3. promise başarılı")
})
const p4 = Promise.reject("Hata var");

Promise.all([p1, p2, p3, p4])
    .then((res) => {
        console.log(res)
    })
    .catch((error) => console.log(error))
