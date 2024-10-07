/*
Javascript senkron çalışan bir programlama dilidir

Asenkron olduğu anlar (birisinin bittiğini beklemez hepsi aynı anda çalışır)
1-Timing
2-Event
3-Http isteklerinde
*/

// console.log("Dilara");
// //Asenkron çalışır
// setTimeout(() => {
//     console.log("Süre doldu ve çalıştı")
// }, 1000);

// console.log("Karaca");


//ASENKRON PROBLEMİ

//HTTTP istekleri

const users = [
    {
        userId: 1,
        post: "dilara post 1"
    },
    {
        userId: 1,
        post: "dilara post 2"
    },
    {
        userId: 2,
        post: "ela post 1"
    },
    {
        userId: 3,
        post: "ayşe post 1"
    },

]
//senkrona çevireceğiz -callback - promise - asyn await
function getUserId(callback) {
    setTimeout(() => {
        // return 1;
        let userId = 3;
        callback(userId);
    }, 2000);
}

function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostByUserId);
// let userId = getUserId();
// getPostByUserId(userId);