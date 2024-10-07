/*
Veri Tipleri

1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function
*/

let isim = "Dilara";
console.log(typeof isim); //typeof ismin tipini belirtir.

let sayi= 8;
console.log(typeof sayi);

let stringdegisken = "Yaşınız: ";
let yas = 20;
console.log(stringdegisken + yas);

console.log(8>7);

let a=null;
console.log(a);

// UNDEFINED (tanımlanmamış) 
let b;
console.log(b);

// primitive ILKEL VERİ TİPLERİDİR
// referans Gelişmiş veri tipi

//OBJECT (gelişmiş verii tipi)
let insan={
    isim:"Dilara",
    soyisim:"Karaca",
    yas:20
}
console.log(typeof insan);

let rakamlar =[1,2,3,4,5];
console.log(typeof rakamlar);

//FUNCTION
let func = function(){
    console.log("merhaba");
}
func();
console.log(typeof func);
