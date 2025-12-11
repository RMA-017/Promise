// 3. Promise zanjiri (chaining)
// Uchta Promise yarating:
// Birinchisi 1 soniyadan keyin raqam 5 ni qaytarsin
// Ikkinchisi bu raqamni 2 ga ko'paytirsin
// Uchinchisi natijani ekranga chiqarsin

let birinchi = await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 1000);
})
let ikkinchi = await Promise.resolve(birinchi * 2)
let uchinchi = await Promise.resolve(ikkinchi)
console.log(uchinchi);


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
    .then(res1 => {
        return res1
    })
    .then(res2 => {
        return res2 * 2
    })
    .then(res3 => {
        console.log(res3);
    })
    .catch(err => {
        console.log(err);
    })
