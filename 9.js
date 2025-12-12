// 9. Sequential Promise execution
// Promise'larni ketma-ket (sequential) bajarish funksiyasini yarating.
// function executeSequentially(promises) {
//   // Sizning kodingiz
// }

let tasks = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]

async function sequential(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        let result =await tasks[i]
        console.log(result);
    }
}
sequential(tasks)