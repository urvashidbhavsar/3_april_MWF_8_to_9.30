// click event
function clickForm(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if(fname == "" || fname == null){
        document.getElementById("msg1").innerText = "Enter First name";
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg2").innerText = "Enter Last name";
        return false;
    }else{
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText = "";
        return false;

    }
}

// blur event 
function blankCheck(blnk,spanid){
    if(blnk.value == "" || blnk.value == null){
        document.getElementById(spanid).innerText = "Please, fill this field"
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
// others