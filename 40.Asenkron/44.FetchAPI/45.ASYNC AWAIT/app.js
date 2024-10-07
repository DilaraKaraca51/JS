//? ASYNC AWAIT -----------

//PROMISE THEN YAPISI

// async function hello() {
//     return "Hello World";
// }

// console.log(hello())




// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((post) => {
//             console.log(post)
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then((comments) => console.log(comments))
//         })
// })



//Async Await ile yapılışı
document.querySelector("#button").addEventListener("click", async () => {
    const responcePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responcePost.json();
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json();
    console.log(post, comments)
})
