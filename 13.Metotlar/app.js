//Parametresiz ve geriye değer döndürmeyen metot tanımlaması
//Parametreli metot tanımlama
//Geriye değer döndüren
/**
 * function yazdir(){
 * kodlar yazılır
 * }
 * 
 */

function yazdir(){
    console.log("Dilara");
}
yazdir();

function topla(sayi1,sayi2){
    console.log(8+7);
    return(sayi1,sayi2);
}
topla();

function yaz(isim,soyisim){
    console.log(isim + " " + soyisim);
}
yaz("Dilara","Karaca");


cube(3);
function cube(sayi){
    let sonuc= sayi*sayi*sayi;
    console.log(sonuc);
}