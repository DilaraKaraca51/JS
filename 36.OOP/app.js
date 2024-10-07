let a;
class Insan {

    constructor(isim, soyisim, yas, maas) {
        // console.log("yapıcı metot çalıştı")
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }


    bilgileriGoster() {
        console.log(`Ìsim : ${this.isim} 
            Soyisim : ${this.soyisim}
            Yaş : ${this.yas}
            Maaş : ${this.maas}
            `)
    }
}
const insan1 = new Insan("dilara", "karaca", 20, 0);
const insan2 = new Insan("ayşe", "koç", 20, 0);

insan1.bilgileriGoster()
insan2.bilgileriGoster()