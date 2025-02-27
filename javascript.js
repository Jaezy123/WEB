document.getElementById("showSignUp").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
});

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signup-username").value.trim();
    let password = document.getElementById("signup-pass").value.trim();
    let errorMessage = document.getElementById("signup-error");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.username === username)) {
        errorMessage.textContent = "Username already taken. Try another.";
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    errorMessage.style.color = "green";
    errorMessage.textContent = "Sign-up successful! Redirecting to login...";

    setTimeout(() => {
        document.getElementById("signUpForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    }, 2000);
});

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
