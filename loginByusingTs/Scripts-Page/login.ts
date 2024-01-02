
function login() {
    let email: string = (document.getElementById("email") as HTMLInputElement).value.trim();
    let password: string = (document.getElementById("password") as HTMLInputElement).value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    let getUserString: string | null = localStorage.getItem("users");

    let getUser: { FullName: string; email: string; password: string }[] = [];

    if (getUserString) {
        getUser = JSON.parse(getUserString);
    }
//user authentication
    let userIndex = getUser.findIndex(function(value) {
        return value.email === email && value.password === password;
    });

    if (userIndex !== -1) {
        alert("Successfully logged in");
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
