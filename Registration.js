
let output = "";
function captcha() {
    let output = "";
    let store = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ@';
    let len = store.length;

    // console.log(integervalue);
    for (let i = 0; i < 6; i++) {
        let value = Math.random();
        let rendomvalue = value * len;
        // console.log(rendomvalue);
        let integervalue = Math.floor(rendomvalue);
        output = output + store.charAt(integervalue);
    }
    document.getElementById('captch-box').innerHTML = output;
}

function slider1() {
    let x = document.getElementById('fname').value;
    document.querySelector('#fname').style.backgroundColor = "#ffffff";
    document.querySelector('#fname').style.transition = "5s";
    // if(x == ""){
    //     document.querySelector('#fname').style.backgroundColor = "#141313";
    //     document.querySelector('#fname').style.transition = "5s";
    // }
}

function slider2() {
    document.querySelector('#sname').style.backgroundColor = "#ffffff";
    document.querySelector('#sname').style.transition = "5s";
}

function slider3() {
    document.querySelector('#email').style.backgroundColor = "#ffffff";
    document.querySelector('#email').style.transition = "5s";
}

function slider4() {
    document.querySelector('#number').style.backgroundColor = "#ffffff";
    document.querySelector('#number').style.transition = "5s";
}

function slider5() {
    document.querySelector('#pasword').style.backgroundColor = "#ffffff";
    document.querySelector('#pasword').style.transition = "5s";
}

function slider6() {
    document.querySelector('#cpasword').style.backgroundColor = "#ffffff";
    document.querySelector('#cpasword').style.transition = "5s";
}

function slider7() {
    document.querySelector('#encaptch').style.backgroundColor = "#ffffff";
    document.querySelector('#encaptch').style.transition = "5s";
}

function slider8() {
    document.querySelector('#username').style.backgroundColor = "#ffffff";
    document.querySelector('#username').style.transition = "5s";
}
//=================================== signup function ============================================



function signup() {
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#sname').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let pass = document.querySelector('#pasword').value;
    let cpass = document.querySelector('#cpasword').value;
    let capt = document.querySelector('#encaptch').value;

    if (fname === "") {
        document.getElementById('mfname').innerHTML = "Please Enter your first Name*";
        // document.getElementById('mfname').style.display = "block";
        document.getElementById('fname').focus();
        return false;
    }

    else if (lname == "") {
        document.querySelector('#mfname').innerHTML = "";
        document.getElementById('msname').innerHTML = "Please Enter your Last Name*";
        // document.getElementById('msname').style.display = "block";
        document.getElementById('sname').focus();
        return false;
    }

    else if (email == "") {
        document.querySelector('#msname').innerHTML = "";
        document.querySelector('#memail').innerHTML = "Please Enter your Email or UserId*";
        document.querySelector('#email').focus();
        // document.querySelector('#memail').innerHTML = "";
        return false;
    }

    else if (!((email.includes("@gmail.com")) || (email.includes("@yahoo.com")) || (email.includes("@outlook.com")))) {
        document.querySelector('#memail').innerHTML = "";
        document.querySelector('#memail').innerHTML = "Please Enter correct email*";
        document.querySelector('#email').focus();
        document.querySelector('#email').innerHTML = "";
        return false;
    }

    else if (number == "") {
        document.querySelector('#memail').innerHTML = "";
        document.querySelector('#memail').style.backgroundColor = "none";
        document.querySelector('#mtel').innerHTML = "Please Enter your Number*";
        document.getElementById('number').focus();

        return false;
    }

    else if (number.length !== 10) {
        document.querySelector('#mtel').innerHTML = "";
        document.querySelector('#mtel').innerHTML = "Please Enter 10 digit Mobile Number*";
        document.getElementById('number').focus();
        document.getElementById('number').innerHTML = "";
        return false;
    }

    else if ((isNaN(number))) {
        document.querySelector('#mtel').innerHTML = "";
        document.querySelector('#mtel').innerHTML = "Please doesn't enter charector*";
        document.getElementById('number').focus();
        document.getElementById('number').innerHTML = "";
        return false;
    }

    else if (pass == "") {
        document.querySelector('#mtel').innerHTML = "";
        document.querySelector('#mpass').innerHTML = "Please Enter your password*";
        document.getElementById('pasword').focus();
        return false;
    }

    // else if (!((pasword.includes('@')) || (pasword.includes('#')) || (pasword.includes('$')))) {
    //     document.querySelector('#pasword').innerHTML = "";
    //     document.querySelector('#mpass').innerHTML = "Please Enter your password*";
    //     window.alert("Password should be start with capital letter ABC");
    //     window.alert("In Password should be use small letter abc");
    //     window.alert("In Password should be  use number 1234");
    //     window.alert("In Password should be  use spacial charactor @, #, $, &");
    //     document.getElementById('pasword').focus();
    //     return false;
    // }

    else if (cpass === "") {
        document.querySelector('#mpass').innerHTML = "";
        document.querySelector('#mcpass').innerHTML = "Please Conform Your Password*";
        document.getElementById('cpasword').focus();
        return false;

    }

    else if (cpass !== pass) {
        document.querySelector('#mcpass').innerHTML = "";
        document.querySelector('#mcpass').innerHTML = "It doesn't Match*";
        document.getElementById('cpasword').focus();
        document.getElementById('cpasword').innerHTML = "";
        document.getElementById('pasword').innerHTML = "";
        return false;
    }

    else if (capt === "") {
        document.querySelector('#mcpass').innerHTML = "";
        document.querySelector('#mencaptch').innerHTML = "Please Enter your captcha*";
        document.getElementById('encaptch').focus();
        return false;
    }

    else if (capt !== output) {
        document.querySelector('#mencaptch').innerHTML = "";
        document.querySelector('#mencaptch').innerHTML = "Please Enter your correct captcha*";
        document.getElementById('encaptch').focus();
        // window.open('login.html');
        // return false;
    }

    else {
        alert("Registration Done");
    }
}

// ---------------------------------------- login page --------------------------------------------

function login(){
    let email1 = "abc@gmail.com";
    let number1 = "9753550040";
    let pass1 = "12345";
    let username = document.querySelector('#username').value;
    let loginpass = document.querySelector('#pasword').value;
    let captcher = document.querySelector('#encaptch').value;

    if (username === ""){
        document.querySelector('#musername').innerHTML = "Please Enter your username*";
        return false;
    }

    else if (!((username == email1) || (username == number1))){
        document.querySelector('#musername').innerHTML = "";
        window.alert("username does not found");
        document.querySelector('#username').innerHTML = "";
        return false;
    }

    else if(loginpass === ""){
        document.querySelector('#mpass').innerHTML = "Please Enter your Password*";
        document.querySelector('#pasword').focus();
        return false;
    }

    else if(loginpass !== pass1){
        document.querySelector('#mpass').innerHTML = "";
        window.alert("Enter password is wrong, please enter correct password");
        document.querySelector('#username').innerHTML = "";
        return false;
    }

    else if(captcher === ""){
        document.querySelector('#mcpass').innerHTML = "";   
        document.querySelector('#mencaptch').innerHTML = "Please Enter captcha*";
        document.getElementById('encaptch').focus();
        return false;
    }

    else if(chapter === output){
        document.querySelector('#mencaptch').innerHTML = "";
        document.querySelector('#mencaptch').innerHTML = "Please Enter captcha*";
        window.open('index.html');
        return false;
    }

    else{
        alert("username does not exist");
    }
}

function signup(){
    window.open('Registration.html');
}

function log(){
    window.open('login.html');
}