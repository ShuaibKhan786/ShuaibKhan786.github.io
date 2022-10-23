const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn  = document.getElementById("btn");
// Dom Manipulation

const usernameDom = document.querySelector(".username-Wrapper");
const emailDom = document.querySelector(".email-Wrapper");
const passwordDom = document.querySelector(".password-Wrapper");

// regular expression
const usernameReg = /(^[A-Z]{1})([a-z]*)([0-9]{2,})$/g;
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

const erroValidation = (element,message,redBorder) =>{
    element.textContent = message;
    element.classList.add('custom-Validation');
    redBorder.style.boxShadow =" 0 0 5px rgb(255, 0, 0)"
}
const successValidation = (element,greenBorder) =>{
    greenBorder.style.boxShadow =" 0 0 5px rgb(0, 128, 0)";
    element.textContent = "";
}


const overkillValidation = () =>{
    const passVal = password.value.trim();
    const emailVal =  email.value.trim();
    const usernameVal = username.value.trim();
    // username validation
    if(!usernameVal.match(usernameReg)){
        erroValidation(usernameDom,'Invalid Username',username)
    }else{
        successValidation(usernameDom,username)
    }
    // email validation
    if(!emailVal.match(emailReg)){
        erroValidation(emailDom,'Invalid email address',email)
    }else{
        successValidation(emailDom,email)
    }
    // password validation
    if(!passVal.match(passwordReg)){
        erroValidation(passwordDom,'Invalid Password',password)
    }else{
        successValidation(passwordDom,password);
    }
}


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    overkillValidation()
})