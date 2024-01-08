const hiddenDiv = document.getElementsByClassName("hidden-div");
const loginButton = document.getElementById("submit");
const signupButton = document.getElementById("signup-button");
const password = document.getElementById("password")
const repeatPassword = document.getElementById("repeat-password");
const email = document.getElementById("email");
const loginText = document.getElementById("login-text");
const backArrow = document.getElementById("back-arrow");

const express= require("express");
const app = express();
const path = require("path");

app.listen(27017,() => {
    console.log("port connected");
})























function mostrarUsuarioContrasena(){

    for(let item of hiddenDiv){
        item.style.display = "block";
    }
    loginButton.value = "Sign up"
    signupButton.style.display = "none";
    repeatPassword.required = !repeatPassword.required;
    email.required = !email.required;
    loginText.innerHTML = "Sign Up";

    backArrow.style.display = "flex";
}

function ocultarUsuarioContrasena(){
    for(let item of hiddenDiv){
        item.style.display = "none";
    }
    loginButton.value = "Log In"
    signupButton.style.display = "block";
    repeatPassword.required = !repeatPassword.required;
    email.required = !email.required;
    loginText.innerHTML = "Log In";

    backArrow.style.display = "none";
}