document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("login-username").value.trim();
    let password = document.getElementById("login-pass").value.trim();
    let errorMessage = document.getElementById("login-error");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        localStorage.setItem("loggedInUser", JSON.stringify(userFound));
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful! Redirecting...";
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
