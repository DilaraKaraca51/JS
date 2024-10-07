//Çarpım tablosu yapımı

// for(let i =1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
//     console.log("----------------------");
// }



//Asal sayı bulma

// let sayi = Number(prompt("Sayı gir: "));
// let sonuc= true;
// for(let i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         sonuc=false;
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi+ "asaldır");
// }
// else{
//     alert(sayi+ "asal değildir!");
// }



//Faktöriyel Hesaplama

// let sayi = Number(prompt("Bir sayı giriniz"));
// let carpim=1;
// for(let i=1; i<=sayi; i++){
//     carpim=carpim*i;
// }
// alert("Sonuç: " + carpim);


//Armstrong 153- 370- 407
//1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27=153

let sayi = prompt("Bir sayı giriniz");
let toplam=0;
for(let i=0; i<sayi.length; i++){
   let rakam = sayi.charAt(i);
   toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("Armstrong sayı");
}
else{
    alert("Armstrong değil!");
}