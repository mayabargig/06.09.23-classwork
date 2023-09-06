// ---1---
function equalNumbers (){
    if(pass1.value == pass2.value){
        return true;
    } else {
        pass2.style = "border: 2px solid red"
        secoundPass.innerText += "passwords are not equal";
        return false;
    }
}

// ---2---
function valuePasswordes (){
    if(pass1.value > pass2.value){
        return true;
    } else {
        pass22.style = "border: 2px solid red"
        secoundPass1.innerText += "pass2 is bigger that pass1";
        return false;
    }
}

// ---3---
function equalTexts(){
    if(text1.value == text2.value){
        return true;
    } else {
        text2.style = "border: 2px solid red"
        secoundText.innerText += "texts are not the same";
        return false; 
    }
}

// ---4---
function equalLengthTexts(){
    if(text11.value.length == text22.value.length){
        return true;
    } else {
        text22.style = "border: 2px solid red"
        secoundText1.innerText += "length texts are not equal";
        return false;
    }
}

// ----5---
function checkEqualFirstChar (){
    if(text11.value.charAt(0) === text22.value.charAt(0)){
        return true;
    } else {
        text22.style = "border: 2px solid red"
        secoundText1.innerText += "first chara ia not the same";
        return false;
    }
}

// ---7---
function validateForm() {
if (username.value.length < 10) {
    username.style = "border: 2px solid red";
    errorMessages.innerHTML += "Username must be at least 10 characters long.<br>";
}

if (!email.value.endsWith(".com")) {
    email.style = "border: 2px solid red";
    errorMessages.innerHTML += "Email must end with 'com'.<br>";
}

var dobDate = new Date(dob.value);
var currentDate = new Date();
var age = Math.floor((currentDate-dobDate) / (365.25 * 24 * 60 * 60 * 1000));

if(age <= 18){
    date.style = "border: 2px solid red";
    errorMessages.innerHTML += "Age must be over 18.<br>";
}

if (password.value !== confirmPassword.value) {
    confirmPassword.style = "border: 2px solid red";
    errorMessages.innerHTML += "Passwords do not match.<br>";
}

if (errorMessages.innerHTML === "") {
    alert("Registration successful!");
    return true;
} else {
    return false;
}
}

// ---7---
function validate(){
    // var currentDate = new Date().getFullYear();
    // var userDate = +age.value.substr(0,4)
    // currentDate- userDate >= 18
    var isUserAge18 = new Date().getFullYear() - +age.value.substr(0,4) >= 18
    var isPassMatch = password.value == confirmPassword.value;

    if(username.value.length < 10 && email.value.lastIndexOf(".com")==email.value.length-4 && isUserAge18 && isPassMatch)
    return true;
} else{
    return false;
}