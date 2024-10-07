//SET

const set = new Set();

set.add(true)
set.add(3.14)
set.add("Dilara")
set.add("Dilara")//Aynı değeri 1 kez sayar

// console.log(set.size)

// set.delete("Dilara")

// console.log(set.has("3.14"))

// for (let value of set) {
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value) => {
//     console.log(value)
// })

const values = Array.from(set);

let array = [1, "dilara", false, "karaca", 8, [1, 2, 3]]

const newSet = new Set(array);
console.log(newSet)