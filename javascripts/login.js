

function loginValidate(event){
    event.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var alertbox = document.getElementById('alertbox')

    if(email.value == 'admin' && password.value == '12345'){
        console.log("correct");
      toMainPage();
      return true;
    }else{
        console.log("wtf broo");
        alertbox.style.display="initial";
        return false;
    }
}

function toMainPage(){
    window.location.replace('../views/home.html');
    
}