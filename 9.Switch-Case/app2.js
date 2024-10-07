// ATM Uygulaması

let yenisatir = "\r\n";
let bakiye = 1000;

let metin = "1- Bakiye Görüntüleme" + yenisatir +
"2- Para Çekme" + yenisatir +
"3- Para Yatırma" + yenisatir +
"4- Para Çekme" + yenisatir +
"Lütfen bir değer seçiniz";

let sec = prompt(metin);

switch(secim){
    case "1" :
        alert("Bakiyeniz: " + bakiye);
    break;

    case "2" :
        let cekilecekTutar = number(prompt("Çekmek istediğiniz tutarı giriniz: "));
        if(cekilecekTutar<bakiye){
            bakiye= bakiye-cekilecekTutar;
            alert("Kalan Bakiye: " + bakiye)
        }
        else{
            alert("Bakiyenizden fazla para çekemezsiniz!" + yenisatir +
                "Bakiyeniz: " + bakiye + "Çekilen Tutar: " + cekilecekTutar);
        }
    break;

    case "3" :
        let yatırılacakTutar = number(prompt("Yatırmak istediğiniz tutarı giriniz: "));
        bakiye = bakiye+ yatırılacakTutar;
        alert("Güncel Bakiyeniz: " + bakiye);
    break;

    case "4" :
        alert("Sistemden çıkış yapılmıştır");
    break;

    default:
        alert("Lütfen 1 - 4 arasıda farklı değer giriniz")
    break;
}