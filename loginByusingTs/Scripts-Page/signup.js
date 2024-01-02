function signUp() {
    var FullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userObj = {
        FullName: FullName,
        email: email,
        password: password
    };
    var getUsers = [];
    var usersData = localStorage.getItem("users");
    if (usersData !== null) {
        getUsers = JSON.parse(usersData);
    }
    // Check kortesi user age theke stored acche ki na  user data
    var userExists = getUsers.some(function (user) { return user.email === email; }); //user check kortesi email diye
    if (!userExists) {
        // user not exist, add the new user
        getUsers.push(userObj);
        localStorage.setItem("users", JSON.stringify(getUsers));
        alert("SignUp Completed");
        window.location.href = "./login.html";
    }
    else {
        // User already exists thake jodi
        alert("User already exists");
    }
}
