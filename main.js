let form =document.querySelector("#form");
let fullName = document.getElementById("fullname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confPassword = document.getElementById("conf-password");
let regex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

function validateInput(){

    //fullname
    if(fullName.value.trim()==="")
    {
       onFail(fullName,"Vui lòng nhập đầy đủ tên.")
    }
    else
    {
        onSuccess(fullName);
    }
    //email
    if(email.value.trim()==="")
    {
        onFail(email,"Vui lòng nhập email");
    }
    else
    {
        if(!isValidEmail(email.value.trim()))
            onFail(email,"Trường này phải là email")
        else
            onSuccess(email);
    }
    //password
    if(password.value.trim().length <7)
        onFail(password,"Độ dài mật khẩu lớn hơn 6 kí tự")
    else
    {
        if(!isPassword(password.value.trim()))
            onFail(password,"Mật khẩu phải có chữ hoa và chữ thường");
        else    
            onSuccess(password);
    }
    //confirmPassword
    if(confPassword.value.trim()==="")
        onFail(confPassword,"VUi lòng nhập trường này")
    else
    {
    if(confPassword.value.trim() != password.value.trim() )
        onFail(confPassword,"Mật khẩu phải trùng nhau")
    else    
        onSuccess(confPassword)
    }
}


document.querySelector("#submit")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});


function onSuccess(input){
    let parent = input.parentElement;
    let errMess = parent.querySelector("small");
    console.log(errMess);
    errMess.style.visibility = "hidden";
    errMess.innerHTML = "";
    parent.classList.remove("error")
};
function onFail(input, message){
    let parent = input.parentElement;
    let errMess = parent.querySelector("small");
    console.log(errMess);
    errMess.style.visibility = "visible";
    errMess.innerHTML = message;
    parent.classList.add("error")
};
function isValidEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
};
function isPassword(password){
    if(/[A-Z]/.test(password) && /[a-z]/.test(password))
        return true;
    else
       return false;
    
}

