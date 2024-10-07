//  STRING METOTLAR
/*
charAt()
concat()
indexof()
lastindexof()
toUpperCase()
toLowerCase()
trim()
slice()
substring()
replace()
split()
valueOf()
startsWith()
endsWith();
*/

let kurs="Modern Web Geliştirme Kursu";

let karakter = kurs.charAt(1);
console.log(karakter);


let tarih = "2024";

let sonuc = kurs.concat(" ",tarih);
console.log(sonuc);

let index = kurs.indexOf("e");
console.log(index);

let index1 = kurs.lastIndexOf("K");
console.log(index1);

let sonuc1 = kurs.toUpperCase();
console.log(kurs);
console.log(sonuc1);

let sonuc2 = kurs.toLowerCase();
console.log(sonuc2);

console.log(kurs.trim());

console.log(kurs.slice(7,10));

console.log(kurs.substring(0,6));

console.log(kurs.replace("Modern","Güncel"));

console.log(kurs);
let dizi = kurs.split(" ");
console.log(dizi);

console.log(kurs.valueOf());

console.log(kurs.startsWith("M"));
if(kurs.startsWith("M")){
    console.log("M harfi ile başlamaktadır");
}

console.log(kurs.endsWith("Geliştirme Kursu"));
