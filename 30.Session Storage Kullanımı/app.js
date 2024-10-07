//Session Storage

//Değer Ekleme
sessionStorage.setItem("216", "Dilara");

//Değer Silme
// sessionStorage.removeItem("216");

//Değer Alma
let value = sessionStorage.getItem("216");
if (value == null) {
    console.log("Değer bulunamadı");
}
else {
    console.log("Değer bulundu", value);
}

//Hepsini Silme 
sessionStorage.clear();

//Local Storage aynı kullanımı da
//veriler silinmiyor açılıp kapandığında