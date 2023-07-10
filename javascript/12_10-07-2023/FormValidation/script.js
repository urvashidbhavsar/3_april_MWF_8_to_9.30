// click event
function clickForm(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let birth = document.getElementById("bdate").value;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("selcity").value;
    let mno = document.getElementById("mobile").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if(fname == "" || fname == null){
        document.getElementById("msg1").innerText = "Enter First name";
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg2").innerText = "Enter Last name";
        return false;
    }else if(male == false && female == false){
        document.getElementById("msg3").innerText = "Select Gender";
        return false;
    } else if (birth == "" || birth == null){
        document.getElementById("msg4").innerText = "Select Date";
        return false;
    }else if(addr == "" || addr == null){
        document.getElementById("msg5").innerText = "Enter Address";
        return false;
    }else if(city == "-1"){
        document.getElementById("msg6").innerText = "Select City";
        return false;
    } else if (mno == "" || mno == null) {
        document.getElementById("msg7").innerText = "Enter Mobile no";
        return false;
    }else if(mail == "" || mail == null){
        document.getElementById("msg8").innerText = "Enter Email";
        return false;
    }else if (pass == "" || pass == null) {
        document.getElementById("msg9").innerText = "Enter Password";
        return false;
    }
    else{
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText = "";
        document.getElementById("msg3").innerText = "";
        document.getElementById("msg4").innerText = "";
        document.getElementById("msg5").innerText = "";
        document.getElementById("msg6").innerText = "";
        document.getElementById("msg7").innerText = "";
        document.getElementById("msg8").innerText = "";
        document.getElementById("msg9").innerText = "";
        return false;

    }
}

// blur event 
function blankCheck(blnk,spanid){
    if(blnk.value == "" || blnk.value == null){
        document.getElementById(spanid).innerText = "Please, fill this field"
        return false
    }else{
        document.getElementById(spanid).innerText = "";
        return false
    }
}
function SelectValCheck(selectVal,spanid){
    if (selectVal.value == "-1") {
        document.getElementById(spanid).innerText = "Select Value";
        return false
    }
}
function radioCheck(selectVal,spanid){
    if (selectVal.checked == false && selectVal.checked == false) {
        document.getElementById(spanid).innerText = "Select Value";
        return false
}
}
// =================== keyboard event ===============
// name validation
function regExName(inputex, spanid){
    let regEx = /^[a-zA-Z]*$/
    if (!(regEx.test(inputex.value)) || (inputex.value.length < 2)){
        document.getElementById(spanid).innerText = "Enter Valid name"
        return false
    }else{
        document.getElementById(spanid).innerText = ""
        return false
    }
}
// address length
function addressLength(){
    let addr = document.getElementById("addr").value;
    if(addr.length < 30){
        document.getElementById("msg5").innerText = "Address must be more than 30 characters";
        return false;
    }else{
        document.getElementById("msg5").innerText = "";
        return false;
    }
}
// mobile no
function mobileEx(mobileex, spanid){
    let regEx = /^[0-9]*$/;
    let start = /^[6-9]/;
    if (!(regEx.test(mobileex.value)) || (!(start.test(mobileex.value)))){
        document.getElementById(spanid).innerText = "Invalid Number"
        return false
    }else{
        document.getElementById(spanid).innerText = ""
        return false
    }
}
// email expression 
function EmailEx(){
    let mail = document.getElementById("email").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if(!(regex.test(mail))){
        document.getElementById("msg8").innerText = "Enter Proper Email id"
        return false;
    }else{
        document.getElementById("msg8").innerText = ""
        return false;
    }
}
// password expression
function passwordEx(){
    let pass = document.getElementById("pass").value;
    let passEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(passEx.test(pass)){
        document.getElementById("msg9").innerText = "";
        return false
    }else{
        document.getElementById("msg9").innerText = "enter password must be in uppercase, lowercase, number and special character";
        return false
    }
}
// compare password
function comparePass(){
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if(cpass != pass){
        document.getElementById("msg10").innerText = "Password and Confirm password Does not match"
        return false
    }else{
        document.getElementById("msg10").innerText = ""
        return false
    }
}

// show password
function Showpass() {
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    if(pass.type == "password" || cpass.type == "password"){
        pass.type = "text";
        cpass.type = "text"
    }else{
        pass.type = "password";
        cpass.type = "password"
    }
}