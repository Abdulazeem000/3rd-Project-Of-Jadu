//alert("Hellow");
const userNameInput = document.getElementById("userName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const addRegisterBtn = document.getElementById("registerBtn")
const signInBtn = document.getElementById("signIn");

const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];
console.log(users);

class User{
    userName;
    email;
    password;

    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

 function Signup(){
    for(i=0; i<users.length; i++){
        if(emailInput.value == users[i].email){
            userNameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            alert("Email already registered");
            return;
        }
    }
    const user = new User(userNameInput.value, emailInput.value, passwordInput.value);
    users.push(user);
    const usersJson = JSON.stringify(users);
    localStorage.setItem("users", usersJson);
    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

 function Signin(){
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    for( i= 0; i < users.length; i++){
        if(emailInput == users[i].email && passwordInput == users[i].password){
            window.location.href="../counter.html";
            emailInput.value = "";
            passwordInput.value = "";
            return;
        }else if(emailInput == "" || passwordInput ==""){
            alert("Enter Email or Password");
            return;
        }else if(emailInput != users[i].email && passwordInput != users[i].password){
            alert("Incorrect Email or Password");
            return;
        }
    }
    
}