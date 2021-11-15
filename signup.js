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

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let numbers = document.getElementById("number");
let lenghs = document.getElementById("length");

let paslab = document.getElementById("paslab");

fname.onkeyup = function(){
    fnames(fname);
}
sname.onkeyup = function(){
    snames(sname);
}
email.onkeyup = function(){
    emails(email);
}
mobile.onkeyup = function(){
    mobiles(mobile);
}
password.onfocus =function(){
    perror.style.display = "block";
}
password.onkeyup = function(){
    passwords(password);
    passwordlab();
}
password.onblur =function(){
    perror.style.display = "none";
}

function validate(){

    var f = fnames(fname);
    var s = snames(sname);
    var e = emails(email);
    var m = mobiles(mobile);
    var p = passwords(password);
    var p1 = passwords1(password, password1);

    password1.onkeyup = function(){
        passwords1(password, password1);  
    }

    var nbol = false;
    var ebol = false;
    var mbol = false;
    var pbol = false;
    var p1bol = false;

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
        merror.innerHTML = "Provide valid phone number";
        mbol = false;
    }else{
        merror.innerHTML = "";
        mbol = true
    }
    if(p == false){
        pbol = false;
    }else{
        pbol = true;
    }
    if(p1 == false){
        cerror.innerText = "Please type same password";
        p1bol = false;
    }else{
        cerror.innerText = "";
        p1bol = true;
    }

    
    if(nbol && ebol && mbol && pbol && p1bol){
        return true;
    }else{
        return false;
    }
}

function fnames(fname){
    const reg = /^([a-zA-Z]{3,25})$/;
    if(reg.test(this.fname.value)){
        this.fname.style.borderColor = "green";
        return true;
    }
    else{
        this.fname.style.borderColor = "red";
        return false;
    }
}

function snames(sname){
    const reg = /^([a-zA-Z])+$/;
    if(reg.test(this.sname.value)){
        this.sname.style.borderColor = "green";
        return true;
    }
    else{
        this.sname.style.borderColor = "red";
        return false;
    }
}

function emails(email){
    const reg = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9\-])+\.([a-z]{2,3})([a-z]{2,3})?$/;
    if(reg.test(this.email.value)){
        this.email.style.borderColor = "green";
        eerror.innerText = "";
        return true;
    }
    else{
        this.email.style.borderColor = "red";
        return false;
    }
    
}

function mobiles(mobile){
    const reg = /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(reg.test(this.mobile.value)){
        this.mobile.style.borderColor = "green";
        merror.innerText = "";
        return true;
    }
    else{
        this.mobile.style.borderColor = "red";
        return false;
    }
}

function passwords(password){
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const number = /[0-9]/g;
    if(uppercase.test(this.password.value) && lowercase.test(this.password.value) && number.test(this.password.value))
    {
        if(this.password.value.length >=8 && this.password.value.length <=10){
            this.password.style.borderColor = "orange";
            paslab.style.backgroundColor = "orange";
            paslab.innerText = "weak";
        }
        if(this.password.value.length >10){
            this.password.style.borderColor = "green";
            paslab.style.backgroundColor = "green";
            paslab.innerText = "strong";
        }
        return true;
    }else{
        this.password.style.borderColor = "red";
        return false;
    }
}
function passwordlab(){
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const number = /[0-9]/g;
    // 
    if(uppercase.test(this.password.value)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // 
    if(lowercase.test(this.password.value)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // 
    if(number.test(this.password.value)){
        numbers.classList.remove("invalid");
        numbers.classList.add("valid");
    }else{
        numbers.classList.remove("valid");
        numbers.classList.add("invalid");
    }
    // 
    if(this.password.value.length >=8){
        lenghs.classList.remove("invalid");
        lenghs.classList.add("valid");
    }else{
        lenghs.classList.remove("valid");
        lenghs.classList.add("invalid");
    }
}

function passwords1(password, password1){
    if(this.password.value == this.password1.value && this.password1.value != ""){
        this.password1.style.borderColor = "green";
        return true;
    }
    else{
        this.password1.style.borderColor = "red";
        return false;
    }
}