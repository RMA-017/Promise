// 10. API qo'ng'iroqlar seriyasi
// Uchta ketma-ket API qo'ng'iroqlarni amalga oshiring:
// Foydalanuvchi ma'lumotlarini oling
// Foydalanuvchining postlarini oling
// Birinchi postga commentlarni oling
// async function getUserDataFlow(userId) {

let posts = "https://jsonplaceholder.typicode.com/posts"
let users = "https://jsonplaceholder.typicode.com/users"
let comments = "https://jsonplaceholder.typicode.com/comments"

async function getData(id) {
    try {
        ///get info user
        let res1 = await fetch(`${users}/${id}`)
        let data1 = await res1.json()
        console.log("Foydalanuvchi malumotlari", data1);

        ///get post user
        let res2 = await fetch(`${posts}/${id}`)
        let data2 = await res2.json()
        console.log("Foydalanuvchi postlari", data2);

        ///get comment user
        let res3 = await fetch(`${comments}/${id}`)
        let data3 =await res3.json()
        console.log("Foydalanuvchi kommentlari", data3);
    } catch (err) {
        console.log(err);
    }
}
getData(2)