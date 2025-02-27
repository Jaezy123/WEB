let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    window.location.href = "index.html";
} else {
    document.getElementById("userWelcome").textContent = loggedInUser.username;
}

document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});
