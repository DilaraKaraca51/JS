// // Döngüler
// // 1-For
// // 2-while
// // 3-Do-while
// // 4-Foreach

// //For
// //1 den 10 a kadar yazdırma
// for (let i=1; i<=10; i++){
//     console.log(i);
// }

// //1 den 10 a kadar çiftleri yazdırma
// for (let j=0; j<=10; j=j+2){
//     console.log(j);
// }

// //1 den 10 a kadar tekleri yazdırma
// for(let k=1; k<=10; k=k+2){
//     console.log(k);
// }

// /**
//  * Dilara
//  * Karaca
//  * Dilara
//  * Karaca
//  */

// for (let a= 1; a<=10; a++){
//     if(a%2==1){
//         console.log("Dilara");
//     }
//     else{
//         console.log("Karaca");
//     }
// }

// //50 den 1 e kadar git ve topla
// let toplam = 0;
// for (let t = 50; t>=1; t--){
//         toplam=toplam+t;
//         console.log(t);
// }

// console.log("Toplam: ", toplam);




// //While
// // 1 den 10 a kadar yazdırma

// let sayac=1;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
// }

// 1 den 10 a kadar çiftleri tekleri yazdırma

let sayac1 = 0;
while(sayac1<=10){
    if(sayac1%2==1){
        console.log(sayac1);
    }
}

let sayac2 = 1;
while(true){
    console.log(sayac2);
    if(sayac2==7){
        break;
    }
    sayac2++;
}

//Do While Koşul sağlamasa da 1 kere en az çalışır
// 1 den 10  kadar yazma

let sayac3=1;
do{
    console.log(sayac3);
    sayac3++;
}while(sayac3<=10);

// 1 den 20 ye kadar sayıların toplamı

let sayac4 =1;
let toplam=0;
do{
    if(sayac4%2==1){
        toplam=sayac4;
    }
    sayac4++;
}while(sayac4<=20);
console.log("Toplam: ", toplam);


//break - continue
// 1 den 10 a kadar sayıları ekrana yazdır 8 e geldiğinde döngüden çık

let sayac5=1;
while(sayac5 = 10){
    console.log(sayac5);
    if(sayac5==8){
        break;
    }
    sayac5++;
}

let sayac6 =0;
while(sayac6<=10){
    sayac++;
    if(sayac>10){
        break;
    }
    if(sayac6==8){
        continue;
    }
    console.log(sayac);
}