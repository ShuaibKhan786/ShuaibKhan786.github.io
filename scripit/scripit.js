//custom font-weight of the navigation bar item on the current page
document.querySelectorAll(".cus-a-link").forEach((link) =>{
    if(link.href === window.location.href){
        link.setAttribute("aria-current" , "page");
    }
})

//custom  sizing of media responsive

const cusFormManag = document.querySelector("#cus-from-manag");
const cusFotter = document.querySelector("#cus-fotter") ;
const mediaQuery = window.matchMedia('(max-width: 760px)');

function myFunction(mediaQuery) {
        if (mediaQuery.matches) { 
            cusFotter.classList.remove("pb-5");
            cusFormManag.classList.remove("mx-5","px-5");
            cusFormManag.classList.add("mx-3","px-3");
            cusFotter.classList.add("pb-4","px-2");
        }else {
            cusFormManag.classList.add("mx-5","px-5");
            cusFotter.classList.add("pb-5");
            cusFotter.classList.remove("px-2");
        }
      }
myFunction(mediaQuery)  
mediaQuery.addEventListener("change",myFunction)

// form valiadtion
const userName = document.getElementById("uname");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");


cusFormManag.addEventListener('submit', (e) =>{
    e.preventDefault()
    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const  userNameValue = userName.value.trim();
    const  emailValue = email.value.trim();
    const  textAreaValue = textArea.value.trim();

    if(userNameValue === '') {
        setError(userName, 'Please provide your Fullname');
    } else {
        setSuccess(userName);
    }

    if(emailValue === '') {
        setError(email,'Please provide your Email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email,'Please provide a valid Email address');
    } else {
        setSuccess(email);
    }
    if(textAreaValue === '') {
        setError(textArea,'Please drop a Message');
    } else {
        setSuccess(textArea);
    }
    

};
