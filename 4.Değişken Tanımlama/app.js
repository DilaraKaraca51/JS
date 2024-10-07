// Var - Let - Const

/*
let sayi=10;
*/


//var : function scop -- ram bellekte çok fazla yer kaplar

/*function selamVer(){
    var selam = "Herkese selam"; // function scop
    if(true){
        var b=10;
    }
    console.log(b);
    console.log(selam);
}
selamVer();*/

// let/const : block scop
//const (değişmez/sabit)

const user = {
    username:"dilara",
    password:"123"
}

console.log(user);