// 8. Timeout bilan Promise
// Promise yarating va agar u belgilangan vaqt ichida bajarilmasa, timeout xatosi qaytarsin.
// function promiseWithTimeout(promise, timeout) {
//   // Sizning kodingiz
// }
async function main(belgilanganVaqt, timeout) {

    if (belgilanganVaqt >= timeout) {
        let prom = new Promise(res => {
            res("OK")
        })
            .then(res => {
                console.log(res);
            })
    } else {
        console.log("timeout error");
    }
}
main(1000, 2000)
