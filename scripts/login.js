class Usuario{
    id;
    nombre;
    apellido;
    email;
    password;
    constructor(id,nombre,apellido,email, password){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
        this.password=password
    }
}


function loguear(){

    let validation=document.getElementById('formIncorrect')
    validation.style.display='none'
    let email=document.getElementById('email').value;
    let contraseña=document.getElementById('contraseña').value
    let isOk=false;

    fetch('usuario.json').then((response)=>response.json()).then((data)=>{
       
        let usuarios=data.map(data=>{            
          return  new Usuario(data.id,data.nombre,data.apellido,data.email,data.password)
        })
       if(usuarios.find(usu=>usu.email===email)){
        let usuarioEncontrado=usuarios.find(usu=>usu.email===email)
        if(usuarioEncontrado.password===contraseña){
            localStorage.setItem('logueado', 'true');
            window.location.href = '../index.html';
        }else{
            Swal.fire({
                icon: "error",
                title: "Error al ingresar credenciales",
                text: "la contraseña es invalida"           
              }); 
        }
       }else{
        Swal.fire({
            icon: "error",
            title: "Error al ingresar credenciales",
            text: "No se encuentra el usuario"           
          });
       }
      
    })

    
}
function verificarSiEstaLogueado(){
        
    let isLoguedo= localStorage.getItem('logueado');

    if(isLoguedo){
        window.location.href = '../index.html';
    }
}
verificarSiEstaLogueado()

