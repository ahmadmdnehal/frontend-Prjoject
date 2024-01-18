const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatepassword()){
        alert("form submitted successfully");
    }
});

function validateName(){
    let name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is Required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write  full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}


function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = "email is Required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "enter valid email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}


function validatepassword(){
    let password = document.getElementById('password').value;
    if(password.length == 0){
        passError.innerHTML = "password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match(/^[A-Za-z]\w{7,14}$/)){
        passError.innerHTML = "password should contain 1 UpperCase, 1 LowerCase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}

