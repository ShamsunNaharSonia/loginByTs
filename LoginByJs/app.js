function signUp(){
let FullName=document.getElementById("fullName").value
let email =document.getElementById("email").value
let password=document.getElementById("password").value

// console.log(
//     FullName.value,
//     Email.value,
//     Pass.value
// )
let userObj={
    FullName:FullName,
    email:email,
    password:password

}
let getUsers=JSON.parse(localStorage.getItem("users"))
//first user signup
if(getUsers===null){
    let arr=[]
    arr.push(userObj)
    localStorage.setItem("users",JSON.stringify(arr))
    alert("user signup")
    window.location.href="./login.html"
}
else{
    //console.log("getUser",getUsers)
    let findUser = getUsers.find(function(value){
       // console.log(value.Email,"value")
       if(value.email ===email){
        return true
       }
    })

if(findUser === undefined){
    getUsers.push(userObj)
    localStorage.setItem("users",JSON.stringify(getUsers))
    alert("user signup")
    window.location.href="./login.html"

}
else{
    alert("email address already exist")
}

}
}




//login
function login(){
let email =document.getElementById("email").value
let password=document.getElementById("password").value

let getUser=JSON.parse(localStorage.getItem("users"))

let userIndex= getUser.findIndex(function(value){
    if(value.email === email && value.password === password )return true

    // if(value.email === email){
    //     if(value.password === password){
    //         return true
    //     }else{
    //         alert("password invalid")
    //     }
    // }else{
    //     alert("email invalid")
    // }
})

if(userIndex !== -1){
    //console.log("successfully login")
    alert("successfully login")
    window.location.href="./index.html"
}
else{
    //console.log("login failed")
    alert("login failed")
}
}
