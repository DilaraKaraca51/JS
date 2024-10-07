//Arrow Function
//ornek1
const yazdir = (firstName, lastName) => console.log("Merhaba", firstName, lastName)
yazdir("Dilara", "Karaca")
//ornek2
const kupAl = x => x * x * x
console.log("Değer", kupAl(3))


//Destructing Kullanımı
//ornk1
let langs = ["C#", "C++", "JavaScript", "Python"]
let lang1, lang2, lang3, lang4
[lang1, lang2, lang3, lang4] = langs
console.log(lang1, lang2, lang3, lang4)

//ornek2
const hesapla = (a, b) => {
    const toplam = a + b
    const cikar = a - b
    const carp = a * b
    const bol = a / b

    const dizi = [toplam, cikar, carp, bol]
    return dizi;
}
[a, b, c, d] = hesapla(10, 2)
console.log(a, b, c, d)

//ornek3
const person = {
    firstName: "Dilara",
    lastName: "Karaca",
    salary: 0,
    age: 20
}

let { firstName, lastName, salary, age } = person
console.log(firstName, lastName, salary, age)



//Spread Operatörü
//ornek1
let numbers = [10, 20, 30, 40]
function add(a, b, c, d) {
    console.log(a + b + c + d)
}
add(...numbers) /*yeni yöntem 
                eski yöntem = add(numbers[0],numbers[1],numbers[2],numbers[3])
                */



//ornek2
const diller1 = ["Java", "C#"]
const diller2 = ["php", "python", ...diller1]
console.log(diller2);

//ornek3
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [z, y, ...kalanSayilar] = numbers2
console.log(z, y, kalanSayilar)

//ornek4
const array1 = ["Dilara", "Ayşe", "Fatma"]
const array2 = [...array1]
console.log(array2)

//For in - For of Döngüleri
let names = ["Dilara", "Ayşe", "Fatma", "Gül"];
names.forEach(nam3 => console.log(names))

//for in döngüsü = her elemanın index numarasını verir
//değisken tanımlama,in,diziIsmi
for (let name in names) {
    console.log(name, names[name])
}

//for of döngüsü= değeri verir
for (let isim of names) {
    console.log(isim, names.indexOf(isim))
}
