// 6. Ma'lumot yuklash simulyatsiyasi
// Foydalanuvchi ma'lumotlarini server'dan yuklash imitatsiyasini yarating. Agar user ID juft bo'lsa, muvaffaqiyatli ma'lumot qaytaring, 
// aks holda xato qaytaring.
// function loadUserData(userId) {
//   // Sizning kodingiz
// }
// loadUserData(2); // Success
// loadUserData(3); // Error

function loadUserData(userId) {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId % 2 == 0) {
                resolve("success")
            } else {
                reject("error")
            }
        }, 1000);
    })
    return prom
}
loadUserData(2)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
