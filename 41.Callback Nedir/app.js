//Callback : bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.

function getName(callback) {
    setTimeout(() => {
        // console.log("dilara");
        let name = "dilara";
        callback("dilara");
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "karaca";
        //  console.log("karaca");
        callback(surname)
    }, 500);
}

const a = () => {

}

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 20;
        callback(age);
    }, 300);
}

// getName(getSurname)
getName((name) => (
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
))




// getName();
// getSurname();

