
function validate(){
    let email = document.getElementById("email");
    let elabel = document.getElementById("eerror");
    let password = document.getElementById("password");
    let plabel = document.getElementById("perror");
    
    var e = emails(email, elabel);
    var p = passwords(password, plabel);
    if(e == false){
        return false;
    }
    else if(p == false){
        return false;
    }
    else{
        return true;
    }
}

function emails(email, elabel){
    const reg = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9\-])+\.([a-z]{2,3})([a-z]{2,3})?$/;
    if(reg.test(email.value)){
        email.style.borderColor = "green";
        elabel.innerText = "";
        return true;
    }
    else{
        email.style.borderColor = "red";
        elabel.innerText = "Please provide valid email";
        return false;
    }
    
}
function passwords(password, plabel){
    if(password.value == ""){
        plabel.innerText = "Password cannot be empty";
        password.style.borderColor = "red";
        return false;
    }
    else{
        password.style.borderColor = "green";
        plabel.innerText = "";
        return true;
    }
}