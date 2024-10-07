// Vücut Kitle İndeksi Hesaplama
/*
let kilo = Number(prompt("Kilonuzu Giriniz: "));
let boy = Number(prompt("Boy giriniz: "));
let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("İdeal kilonun altında");
}
else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kiloda");
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal kilonun üstünde");
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun üstünde(obez)");
}
else if(sonuc>=40){
    console.log("İdeal kilonun çok üstünde(morbid obez)");
}
*/

// BENZİN İSTASYONU

let dizel = 24.53;
let benzin = 22.25;
let LPG = 11.1;

const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"  + yeniSatir
                 + "2-Benzin" + yeniSatir
                 + "3-LPG"    + yeniSatir 
                 + "Yakıt Tipini Giriniz: ";

let yakitTipi = prompt(yakitMetni);

if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3"){
    let yuklenecekYakitLitresi = Number(prompt("Ne Kadar Yüklenecek: "));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));

            if(yakitTipi == "1"){
                let odenecekTutar = dizel*yuklenecekYakitLitresi;
                if(odenecekTutar<bakiye){
                    bakiye = bakiye * odenecekTutar;
                    alert("Yakıt alma işlemi başarılı" + yeniSatir 
                        + "Kalan Bakiye: " + bakiye);
                } 
                    else{
                        alert("Bakiyeniz yeterli değildir" + yeniSatir
                            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                            + "Bakiye: " + bakiye + yeniSatir
                            + "Eksik Tutar: " + (odenecekTutar-bakiye));
                    }
                }
            else if(yakitTipi == "2"){
                let odenecekTutar = benzin*yuklenecekYakitLitresi;
                if(odenecekTutar<bakiye){
                    bakiye = bakiye * odenecekTutar;
                    alert("Yakıt alma işlemi başarılı" + yeniSatir 
                        + "Kalan Bakiye: " + bakiye);
                } 
                    else{
                        alert("Bakiyeniz yeterli değildir" + yeniSatir
                            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                            + "Bakiye: " + bakiye + yeniSatir
                            + "Eksik Tutar: " + (odenecekTutar-bakiye));
                    }
                }

            else if(yakitTipi == "3"){
                let odenecekTutar = LPG*yuklenecekYakitLitresi;
                if(odenecekTutar<bakiye){
                    bakiye = bakiye * odenecekTutar;
                    alert("Yakıt alma işlemi başarılı" + yeniSatir 
                        + "Kalan Bakiye: " + bakiye);
                } 
                    else{
                        alert("Bakiyeniz yeterli değildir" + yeniSatir
                            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                            + "Bakiye: " + bakiye + yeniSatir
                            + "Eksik Tutar: " + (odenecekTutar-bakiye));
                    }
                }
            }

            else{
                alert("Lütfen geçerli bir yakıt türünü seçiniz!");
            }