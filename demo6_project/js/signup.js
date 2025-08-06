document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({ name, email }));
        alert("Signup successful!");
        window.location.href = "app.html";
    } else {
        alert("Please fill in all fields.");
    }
});
