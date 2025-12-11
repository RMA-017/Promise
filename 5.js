// 5. Promise.race() dan foydalanish
// Uchta Promise yarating va Promise.race() yordamida eng tez bajariliganini toping.
// // Sizning kodingiz

let prom1 = await Promise.resolve(1)
let prom2 = await Promise.resolve(2)
let prom3 = await Promise.resolve(3)

Promise.race([prom1, prom2, prom3]).then(res => {
    console.log(res);
})