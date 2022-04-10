function validation(){
    const uname=document.getElementById("username");
    const pwd=document.getElementById("pwd");
    if(uname.value.length<8){
        alert("Username should be greater than 8 characters");
        return false;

    }
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(pwd.value.match(passw)) 
    { 
    return true;
    }
    else
    { 
    alert('Enter valid password');
    return false;
    }
}