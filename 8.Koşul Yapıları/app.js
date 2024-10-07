// let not= 35;
// if(not>36){
//     console.log("Geçtiniz, Notunuz : " + not);
// }

// let yas = Number(prompt("Yaşınız: "));
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz : "));

// if(yas>=18 && para>=3000){
//     alert("Ehliyet sınavına katılabilirsiniz");
// }
// else{
//     alert("Ehliyet sınavına katılamazsınız...");
// }


// let vize1 = Number(prompt("Vize1 notunu gir: "));
// let vize2 = Number(prompt("Vize2 notunu gir: "));
// let final = Number(prompt("Final notunu gir: "));

// let ort = (vize1*0.3) + (vize2*0.3) + (final*0.4);

// if(ort>=60){
//     alert("Geçtiniz" + ort);
//     console.log("Dersten geçtiniz");
// }
// else{
//     alert("Kaldınız" + ort);
//     console.log("Dersten kaldınız");
// }


/*
let secilenYol = prompt("Yol Seçiniz: ");

if(secilenYol == 1){
    alert("Seçilen Yol " + secilenYol + ". yoldur.");
}
else if(secilenYol == 2){
    alert("Seçilen Yol " + secilenYol + ". yoldur.");
}
else if(secilenYol == 3){
    alert("Seçilen Yol " + secilenYol + ". yoldur.");
}
else{
    alert("Lütfen geçerli yol seçiniz");
}
*/

let ad= prompt("AD GİR: ");
let tckn = prompt("TCKN GİR: ");

//kontrolEt(ad,tckn);

function kontrolEt(ad,tckn){
    if(ad!=""){
        if(tckn.length==11){
            console.log("Ad ve tckn Girildi");
        }
        else{
            console.log("11 karakter giriniz!");
        }
    }
    else{
        console.log("AD alanını boş bırakmayınız!");
    }
}

kontrolEt2(ad,tckn);

function kontrolEt2(ad,tckn){
    if(ad==""){
        console.log("Lütfen ad alanını boş bırakmayın!")
        return;
    }
    if(tckn.length!=11){
        console.log("Lütfen tckn 11 haneli giriniz!");
    }
    console.log("Ad ve tckn problemsiz Girildi");
}

// if else: 2 seçeneğin olduğu yerlerde kullanılır
// if else if else: 2 den fazla seçeneğin olduğu yerlerde kullanılır.
// if if if:

