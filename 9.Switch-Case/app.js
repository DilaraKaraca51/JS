let gun = prompt("Gün Giriniz: ");

switch(gun){
    case "1" :
        console.log("Girilen gün Pazartesi");
    break;

    case "2" :
        console.log("Girilen gün Salı");
    break;

    case "3" :
        console.log("Girilen gün Çarşamba");
    break;

    case "4" :
        console.log("Girilen gün Perşembe");
    break;

    case "5" :
        console.log("Girilen gün Cuma");
    break;

    case "6" :
        console.log("Girilen gün Cumartesi");
    break;

    case "7" :
        console.log("Girilen gün Pazar");
    break;

    default:
        console.log("Böyle bir gün yok!");
    break;
}