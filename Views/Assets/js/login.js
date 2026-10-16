const formulario = document.getElementById("loginForm");
formulario.addEventListener("submit", function(event){

event.preventDefault();
const usuario =document.getElementById("usuario").value;
const password =document.getElementById("password").value;

if (usuario === "admin" && password === "1234"){
alert("Inicio de Sesión correcto");
}else {
    alert("El usuario o contraseña son incorrectos")
}
});