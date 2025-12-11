// 4. Promise.all() dan foydalanish
// Uchta turli vaqtda bajariluvchi Promise yarating (1s, 2s, 3s) va ularning barchasini Promise.all() bilan kuting.

let prom1 = await new Promise(resolve => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
    .then(res => {
        console.log(res);
        return res
    })

let prom2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 1500);
})
    .then(res => {
        console.log(res);
        return res
    })

let prom3 = new Promise(resolve => {
    setTimeout(() => {
        resolve(3)
    }, 2000);
})
    .then(res => {
        console.log(res);
        return res
    })


Promise.all([prom1, prom2, prom3]).then(item => {
    console.log(item);
})