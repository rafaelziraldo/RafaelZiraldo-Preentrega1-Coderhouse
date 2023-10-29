const usuario={
    email:"test@gmail.com",
    contraseña:'Test123'
}

function loguear(){
    let validation=document.getElementById('formIncorrect')
    validation.style.display='none'
    let email=document.getElementById('email').value;
    let contraseña=document.getElementById('contraseña').value
    let isOk=false;
    if(email===usuario.email && contraseña===usuario.contraseña){
        localStorage.setItem('logueado', 'true');
        window.location.href = "../index.html";
    }else{
       
        validation.style.display='block'
    }
}
function verificarSiEstaLogueado(){
        
    let isLoguedo= localStorage.getItem('logueado');

    if(isLoguedo){
        window.location.href = "../index.html";
    }
}
verificarSiEstaLogueado()

