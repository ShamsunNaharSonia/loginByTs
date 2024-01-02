function signUp(): void {
    let FullName: string = (document.getElementById("fullName") as HTMLInputElement).value;
    let email: string = (document.getElementById("email") as HTMLInputElement).value;
    let password: string = (document.getElementById("password") as HTMLInputElement).value;

    let userObj: { FullName: string; email: string; password: string } = {
        FullName: FullName,
        email: email,
        password: password
    };

let getUsers: { FullName: string; email: string; password: string }[]  = [];

    const usersData = localStorage.getItem("users");
    if (usersData !== null) {
        getUsers = JSON.parse(usersData)as { FullName: string; email: string; password: string }[];
    } 
   
     // Check kortesi user age theke stored acche ki na  user data
     const userExists = getUsers.some(user => user.email === email); //user check kortesi email diye

     if (!userExists) {
         // user not exist, add the new user
         getUsers.push(userObj);
         localStorage.setItem("users", JSON.stringify(getUsers));
         alert("SignUp Completed");
         window.location.href = "./login.html";
     } else {
         // User already exists thake jodi
         alert("User already exists");
     }

    
}
