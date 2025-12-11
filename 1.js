// 1. Oddiy Promise yaratish
// Oddiy Promise yarating va uni 2 soniya kutgandan keyin "Salom, dunyo!" xabari bilan resolve qiling.

let top1 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("salom dunyo1")
    }, 1000);
})
    .then(resp => {
        console.log(resp);
    })



let top11 = await Promise.resolve("salom dunyo2")
setTimeout(() => {
    console.log(top11);
}, 2000);

