const submitBtn = document.querySelector(".firstBtn");
submitBtn.disabled = true;


function valid(){
    const email = document.querySelector("#floatingInputtt").value;
    const password = document.querySelector("#floatingPassword").value;
    const emailError = document.querySelector(".emailError");
    const passwordError = document.querySelector(".passwordError");
    const circulEmail = document.querySelector(".errCirclemail");
    const circulPassword = document.querySelector(".errCirclPass");
    

    


    if ( email.length <= 0 || email.indexOf('@') ==-1){
        emailError.innerHTML = "please enter valid E-mail";
        circulEmail.style.display = 'block';
        submitBtn.disabled = true;
    }else if (email.length > 0 && email.indexOf('@') > -1){
        emailError.innerHTML = "";
        circulEmail.style.display = 'none';
    }

    if(password.length <= 5){
        passwordError.innerHTML ='please enter valid password ';
        circulPassword.style.display = 'block';
    }else if(password.length > 5 ){
        passwordError.innerHTML ='';
        circulPassword.style.display = 'none';
    }

    if(password.length > 5 && email.length > 0 && email.indexOf('@') > -1){
        submitBtn.disabled = false;
    }
}
const passwordInput =document.querySelector("#floatingPassword");
const eyeChange=document.querySelector(".eyeChange");
eyeChange.addEventListener("click", function(){
        if (eyeChange.classList.contains("fa-eye")) {
            eyeChange.classList.remove("fa-eye");
            eyeChange.classList.add("fa-eye-slash");
            passwordInput.type = "text";
        } else {
            eyeChange.classList.remove("fa-eye-slash");
            eyeChange.classList.add("fa-eye");
            passwordInput.type = "password";
        }
        passwordInput.focus();
    })