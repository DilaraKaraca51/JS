// Date Kullanımı
let tarih = new Date();
console.log(tarih);

// console.log(tarih.getFullYear());
// console.log(tarih.getDate());
// console.log(tarih.getDay());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMinutes());
// console.log(tarih.getMonth()+1),
// console.log(tarih.getSeconds());
// console.log(tarih.toLocaleDateString());
// console.log(tarih.toLocaleTimeString());
// console.log(tarih.toLocaleString());

tarih.setDate(5); //Tarihi 5 olarak değiştirdi
console.log(tarih);

tarih.setHours(15); //saat 15 oldu

tarih.setMonth(11); //december olur aylar 0 ile 11 arasındadır

tarih.setDate(24); // tarih 24 oldu

tarih.setMinutes(41); // dakika 41 oldu

tarih.setHours(tarih.getHours()+2); //15 di 17 oldu

console.log(typeof tarih.toString());
console.log(tarih);