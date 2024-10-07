//Map >>>>> key(anahtar) value(değer)

const map1 = new Map();

// map1.set(1, "Dilara")
// map1.set(true, 5)
// map1.set([1, 2, 3], { firstNmae: "dilara", lastname: "karaca" })


map1.set(51, "Niğde")
map1.set(38, "Kayseri")
map1.set(34, "İstanbul")

// console.log(map1.get(51))

//value = map1.size;
// value = map1.delete(34);
// console.log(value);

//HAS
// console.log(map1.has(55))

//FOR OF MAP  ÜZERİNDE DÖNEBİLİRİZ
// for (let [key, value] of map1) {
//     console.log(key, value)
// }

// let array = [51, 'Niğde'];
// let [a, b] = array;
// console.log(a, b)



// const keys = Array.from(map1.keys())
// keys.forEach((key) => {
//     console.log(key, map1.get(key))
// })


// for (let key of map1.keys()) {
//     console.log(key)
// }


// for (let value of map1.values()) {
//     console.log(value)
// }

//MAP'TEN ARRAY'E ÇEVİRME

const array2 = [
    [51, "Niğde"],
    [38, "Kayseri"],
    [34, "İstanbul"]
]
const array = Array.from(map1);
console.log(array)

