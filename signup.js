
function validate(){
    let fname = document.getElementById("fname");
    let sname = document.getElementById("sname");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");

    let nerror = document.getElementById("nerror");
    let eerror = document.getElementById("eerror");
    let merror = document.getElementById("merror");
    let perror = document.getElementById("perror");
    let cerror = document.getElementById("cerror");

    var f = fnames(fname,);
    var s = snames(sname);
    var e = emails(email);
    var m = mobiles(mobile);

    var nbol = false;
    var ebol = false;
    var mbol = false;

    if(f == false || s == false){
        nerror.innerText = "Please provide valid name";
        nbol = false;
    }else{
        nerror.innerText = "";
        nbol = true;
    }
    if(e == false){
        eerror.innerText = "Please provide valid email";
        ebol = false;
    }else{
        eerror.innerText = "";
        ebol = true;
    }
    if(m == false){
        merror.innerHTML = "Provide valid phone number format <li>XXX-XXX-XXXX</li><li>XXX.XXX.XXXX</li><li>XXX XXX XXXX</li>";
        mbol = false;
    }else{
        merror.innerHTML = "";
        mbol = true
    }
    
    if(nbol && ebol && mbol){
        return true;
    }else{
        return false;
    }
}

function fnames(fname){
    const reg = /^([a-zA-Z]{3,25})$/;
    if(reg.test(fname.value)){
        fname.style.borderColor = "green";
        return true;
    }
    else{
        fname.style.borderColor = "red";
        return false;
    }
}

function snames(sname){
    const reg = /^([a-zA-Z])+$/;
    if(reg.test(sname.value)){
        sname.style.borderColor = "green";
        return true;
    }
    else{
        sname.style.borderColor = "red";
        return false;
    }
}

function emails(email){
    const reg = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9\-])+\.([a-z]{2,3})([a-z]{2,3})?$/;
    if(reg.test(email.value)){
        email.style.borderColor = "green";
        return true;
    }
    else{
        email.style.borderColor = "red";
        return false;
    }
    
}

function mobiles(mobile){
    const reg = /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(reg.test(mobile.value)){
        mobile.style.borderColor = "green";
        return true;
    }
    else{
        mobile.style.borderColor = "red";
        return false;
    }
}