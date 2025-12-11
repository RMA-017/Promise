// 2. Promise bilan xato qaytarish
// Promise yarating va uni 1 soniya kutgandan keyin "Xato yuz berdi!" xabari bilan reject qiling. Keyin .catch() yordamida xatoni ushlang.

new Promise((resolve, rejected) => {
    setTimeout(() => {
        rejected("xato yuz berdi 1")
    }, 1000);
})
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })


setTimeout(() => {
    async function top22() {
        try {
            await Promise.reject("xato yuz berdi 2")
        } catch (err) {
            console.log(err);
        }
    }
    top22()
}, 2000);