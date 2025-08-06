document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.getElementById("welcomeText").textContent = `Welcome, ${user.name}!`;
    } else {
        // If no user in localStorage, redirect to signup
        window.location.href = "index.html";
    }

    const todoForm = document.getElementById("todoForm");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    const renderTodos = () => {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = "bg-gray-200 p-2 rounded flex justify-between items-center";

            const span = document.createElement("span");
            span.textContent = todo;
            li.appendChild(span);

            const btn = document.createElement("button");
            btn.textContent = "Delete";
            btn.className = "bg-red-500 text-white px-2 rounded";
            btn.onclick = () => {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
            };
            li.appendChild(btn);

            todoList.appendChild(li);
        });
    };

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            todoInput.value = "";
            renderTodos();
        }
    });

    renderTodos();

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html";
    });
});
