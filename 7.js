// 7. Retry mexanizmi
// Agar Promise xato bilan tugasa, uni 3 marta qayta urinish mexanizmini yarating.
// function retryPromise(promiseFn, retries = 3) {
//   // Sizning kodingiz
// }


async function Retry(retries) {

    function prom() {
        return new Promise((res, rej) => {
            rej("xatolik")
        })
    }

    for (let i = 1; i <= retries; i++) {
        try {
            await prom()
        } catch (err) {
            console.log(`urinish ${i} ${err}`);
        }
    }
}
Retry(3)