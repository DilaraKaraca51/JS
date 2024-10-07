class Matematik {
    static topla(a, b) {
        console.log(a + b)
    }
    cikar(a, b) {
        console.log(a - b)
    }
    carp(a, b) {
        console.log(a * b)
    }
    bol(a, b) {
        console.log(a / b)
    }
}

// const matematik = new Matematik();
// matematik.topla(10, 5);

//!Static olarak tanımlanmamışsa NESNE üzerinden erişilir
//!Static ise CLASS ismi üzerinden erişilir

//! Bir function veya özellik static ise CLASS'a özgüdür değilse NESNEYE özgüdür

Matematik.topla(10, 7);