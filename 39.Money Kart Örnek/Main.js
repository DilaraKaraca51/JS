let mesaj = `Money kartınız var mı? 
1- Evet
2- Hayır`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 30
    },
    {
        urunIsmi: "Peynir",
        fiyat: 100
    },
    {
        urunIsmi: "Ekmek",
        fiyat: 5
    }
]


let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
    let isim = prompt("Adınızı giriniz: ");
    let soyisim = prompt("Soyisminizi giriniz: ");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}`
    );

}
else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}