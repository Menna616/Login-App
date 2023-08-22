
var layout = document.getElementById('layout');
var welcome = document.getElementById('welcome');

var userName= localStorage.getItem('userName');
welcome.innerHTML = `welcome ${userName}`;

layout.addEventListener('click',function(){
    localStorage.removeItem('userName');
    window.location.href='index.html'
})