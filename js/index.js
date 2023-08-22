var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var userNameInput = document.getElementById('name')
var loginBtn = document.querySelector('button');
var span = document.querySelector('span');
var forAlert = document.getElementById('alert')

var dataList;
var signUpBtn = document.getElementById('signUp');


// local storage condition
if(localStorage.getItem('dataList')==null){
    dataList = [];
}else{
    dataList = JSON.parse(localStorage.getItem('dataList'))
}

loginBtn.innerHTML="Login";
signUpBtn.innerHTML="Sign Up";

// Event of sign up button
signUpBtn.addEventListener('click',function(){
    if(signUpBtn.innerHTML=='Sign Up'){
        loginBtn.innerHTML='Sign Up';
        signUpBtn.innerHTML="Signin";
        userNameInput.classList.remove('d-none');
        span.innerHTML="You have an account?";
    }
    else if(signUpBtn.innerHTML=='Signin'){
        loginBtn.innerHTML='Login';
        signUpBtn.innerHTML="Sign Up";
        userNameInput.classList.add('d-none')
    }
})

// Event of login button
loginBtn.addEventListener('click',function(){
    if(loginBtn.innerHTML=='Sign Up'){
        if(emptyInputs()==true){
            showAlert('All inputs are required')    
        }
        else if(handleExistEmail()==true){
            showAlert('email already exists')
        }
        else{
            var user = {
                userName:userNameInput.value,
                email:emailInput.value,
                password:passwordInput.value
            }
            dataList.push(user);
            showAlert('success')
            setLocalStorage() ;
            clear();
            console.log(dataList);
        }
    }
    else if(loginBtn.innerHTML=='Login'){
       if(emptyInputs()==true){
        showAlert('All inputs are required')
       }
       else if(checkEmailAndPassword()== true){
        window.location.href='home.html'

       }
       else{
        showAlert('incorrect email or password')
       }
    }
})

// function to set local storage
function setLocalStorage(){
    localStorage.setItem('dataList',JSON.stringify(dataList))
}
// function to clear inputs
function clear(){
    userNameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}

// function to handle empty inputs
function emptyInputs(){
    if(loginBtn.innerHTML=='Sign Up'){
        if(userNameInput.value=="" || emailInput.value=="" || passwordInput.value==""){
            return true
        }else{
            return false
        }
    }
    else if(loginBtn.innerHTML=='Login'){
        if(emailInput.value=="" || passwordInput.value==""){
            return true
        }else{
            return false
        }
    }

    }


function showAlert(text){
    forAlert.innerHTML=text;
            forAlert.classList.replace('opacity-0','opacity-100')
}
// function to handle exist email
function handleExistEmail(){
    for(var i =0;i<dataList.length;i++){
        if(dataList[i].email == emailInput.value){
            return true
        }
    }
}

// function to check email and password
function checkEmailAndPassword(){
    for(var i=0;i<dataList.length;i++){
        if(dataList[i].email == emailInput.value && dataList[i].password == passwordInput.value){
            localStorage.setItem('userName',dataList[i].userName)
            return true
        }else{
            return false
        }
    }
}