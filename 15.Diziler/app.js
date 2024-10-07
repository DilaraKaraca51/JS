let sayilar = [0,1,2,3,4,5,6,7,8,9];
console.log(sayilar[6]);

sayilar[8]="Dilara";
console.log(sayilar[8]);

//Foreach : dizilerde kullanılır
let isimler=["Dilara","Buse","Merve","Rabia"];
isimler.forEach(function(isim){
    console.log(isim);
});

//Dizinin Metotları
/*
push: dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
unshift: dizinin başına eleman ekler, eleman sayısını geri döner

pop: dizinin sonundan eleman siler, eleman sayısını döner
shift: dizinin başından eleman siler, eleman sayısını döner

splice(index,incdex): eleman eklemek ve silmek için kullanılır

toString: diziyi stringe çevirebiliriz.
join: diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

concat: dizileri birleştirmek için kullanılır.
slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi oluşturma
length: dizinin uzunluğunu verir
reverse: dizinin elemanlarını ters çevirmek
split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek
indexOf: elemanın index numarasını verir
includes: verilen elemanı içeriyor mu ona bakar
*/

let arabalar = ["bmw","toyota","renault"];
let arabalar2 = ["mercedes", "hundai" ]
arabalar.push("opel");
console.log(arabalar);

arabalar.unshift("hundai");
console.log(arabalar);

let silinenEleman = arabalar.pop();
console.log(arabalar);
console.log(silinenEleman);

arabalar.shift();
console.log(arabalar);

console.log(arabalar);
arabalar.splice(0,0,"hundai");
console.log(arabalar);

// console.log(typeof arabalar);
// let stringArabalar=arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);

let stringArabalar=arabalar.join("-");
console.log(stringArabalar);

let birlesmisDizi=arabalar.concat(arabalar2);
console.log(birlesmisDizi);

console.log(arabalar);
let ayriDizi=arabalar.slice(2);
console.log(ayriDizi);

console.log(arabalar.length);

console.log(arabalar);
arabalar.reverse();
console.log(arabalar);

let isim= "Dilara,Ali,Veli";
let isimlerDizi = isim.split(",");
console.log(isimlerDizi);

let index =arabalar.indexOf("hundai");
if(index==0){
    console.log("belirtilen eleman vardır");
}
else{
    "belirtilen eleman yoktur";
}
console.log(index);

let sonuc = arabalar.includes("toyota");
console.log(sonuc);

