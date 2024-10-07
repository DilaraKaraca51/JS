// Değer ve Referans Tipleri
// İlkel (Primitive) Veri Türleri;
/*
string - number - boolean - undefined - null - symbol
*/

// İlkel Olmayan (Reference) Veri Türleri
/*
object - array - function
 */


let dizi1 = [1,2,3];
let dizi2 = dizi1;

dizi2.push(12);
console.log(dizi1);
console.log(dizi2);