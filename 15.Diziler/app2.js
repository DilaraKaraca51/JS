//Ürün arama uygulaması
let urun1 = {
    isim : "Lenovo",
    kategori :"Teknoloji",
    fiyat: 25.000
}

let urun2 = {
    isim : "Acer",
    kategori :"Teknoloji",
    fiyat: 27.000
}

let urun3 = {
    isim : "Asus",
    kategori :"Teknoloji",
    fiyat: 28.000
}

let urun4 = {
    isim : "Excalibur",
    kategori :"Teknoloji",
    fiyat: 29.000
}

let urun5 = {
    isim : "Apple",
    kategori :"Teknoloji",
    fiyat: 30.000
}

let urun6 = {
    isim : "Casper",
    kategori :"Teknoloji",
    fiyat: 20.000
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let filtreliUrunler =[];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);
function filtreliUrunleriDoldur(urunler){
urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
        filtreliUrunler.push(urun);
    }
});
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("------------------");
        console.log("|"+ urun.isim+"|"+urun.fiyat+"|"+urun.kategori);
        console.log("----------------");
    })
}
