// // Kelime sayısı bulma
// let metin="JavaScript öğreniyorum";
// let harf = prompt("Harfi giriniz");
// let sonuc= bul(harf);
// alert("Harf sayısı: "+ sonuc);

// function bul(harf){
//     let toplam=0;
//     for(let i=0; i<metin.length; i++){
//         if(metin.charAt(i)==harf){
//             toplam+=1;
//         }
//     }
//     return toplam;
// }


// //Mükemmel Sayı Uygulaması
// //6 - 28 - 496
// //6 = 1,2,3,6 =12= 6*2


// isPerfectNumber(6);
// function isPerfectNumber(number){
//     let toplam=0;
//     for(let i =2; i<=number/2; i++){
//         if(number%i==0){
//             toplam+=i;
//         }
//     }
//     toplam+=1+number;
//     if(toplam==number*2){
//         console.log("Mükemmel sayı");
//     }else{
//         console.log("Mükemmel sayı değildir");
//     }
// }


// //Decimal To Binary Converter(10luk sayıdan 2lik sayıya çevirme)
// convertDecimalToBinary(10);
// function convertDecimalToBinary(number){
//     let binary="";
//     while(true){
//         binary+=(number%2).toString();
//         number=Math.floor(number/2);
//         if(number==1){
//             binary+=1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log("Sonuç: " + result);
// }

// function reverse(binary){
//     let reverseBinary="";
//     for(let i = binary.length-1; i>=0; i--){
//         reverseBinary+=binary.charAt(i);
//     }
//     return reverseBinary;
// }



//Binary To Decimal Conversion(2lik sayıdan 10luk sayıya çevirme)

let binary ="1011";
function convertBinaryToDecimal(binary){
    let toplam=0;
    let ust=0;

    for(let i= binary.length-1; i>=0; i--){
       toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    console.log("Sonuc: " + toplam);
}
convertBinaryToDecimal(binary);