function login() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }
    var getUserString = localStorage.getItem("users");
    var getUser = [];
    if (getUserString) {
        getUser = JSON.parse(getUserString);
    }
    //user authentication
    var userIndex = getUser.findIndex(function (value) {
        return value.email === email && value.password === password;
    });
    if (userIndex !== -1) {
        alert("Successfully logged in");
        window.location.href = "./index.html";
    }
    else {
        alert("Invalid email or password. Please try again.");
    }
}
