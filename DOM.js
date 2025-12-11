
let todos = "https://jsonplaceholder.typicode.com/todos";
let posts = "https://jsonplaceholder.typicode.com/posts";
let box = document.querySelector(".box");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    async function getData() {
        try {
            const fetchTodos = fetch(todos).then(res => res.json());
            const fetchPosts = fetch(posts).then(res => res.json());
            const firstData = await Promise.race([fetchTodos, fetchPosts]);
            if (Array.isArray(firstData)) {
                box.innerHTML = firstData.slice(0, 10)
                    .map(item => `<div><h3>${item.title}</h3></div>`)
                    .join("");
            } else {
                box.innerHTML = "<p>xato</p>";
            }
        } catch (err) {
            console.log(err);
        }
    }
    getData();
});
