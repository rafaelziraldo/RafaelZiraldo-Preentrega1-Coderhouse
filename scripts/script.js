class TipoPrestamo{
    nombre;
    porcentaje;
    nombreCorto;
    constructor(nombre,nombreCorto,porcentaje){
        this.nombre=nombre;
        this.nombreCorto=nombreCorto
        this.porcentaje=porcentaje
    }
}

function calcularIntereses(cantidadMeses,monto,tipoPrestamo){
 let porcentajeInteres =tipoPrestamo.porcentaje*cantidadMeses

    return monto*porcentajeInteres/100
}

function calcularCuotas(cantidadMeses,intereses,monto){
let total=0
total=(monto+intereses)/cantidadMeses
return total.toFixed(2)
}
const TIPOSPRESTAMOS=[new TipoPrestamo('Oro','O',8),new TipoPrestamo('Plata','P',10),new TipoPrestamo('Platinum','PL',6)]

let optionsSelect='<option value="0">Seleccione tipo prestamo</option>';
for(let i=0;i<TIPOSPRESTAMOS.length;i++){       
   
    optionsSelect+=`<option value=${TIPOSPRESTAMOS[i].nombreCorto}>${TIPOSPRESTAMOS[i].nombre}</option>`
}
document.getElementById('tipoPrestamo').innerHTML=optionsSelect
let aceptoHacerOtroPrestamo=true

let montoIngresado = document.getElementById('monto').value
if(montoIngresado==null){
    aceptoHacerOtroPrestamo=false
}
let monto=parseInt(montoIngresado);
function calcular(){
    let montoIngresado = parseInt(document.getElementById('monto').value)
    let meses=parseInt(document.getElementById('cuotas').value)
    let tipoPrestamoIngresa=document.getElementById('tipoPrestamo').value
    let tipoPrestamo=TIPOSPRESTAMOS.find(tp=>tp.nombreCorto===tipoPrestamoIngresa.toUpperCase())
    let intereses=calcularIntereses(meses,montoIngresado,tipoPrestamo)
    let totalDevolverXmes=calcularCuotas(meses,intereses,montoIngresado)
    
    mostrarDetallePrestamo(meses,tipoPrestamo,totalDevolverXmes)
}
function mostrarDetallePrestamo(meses,tipoPrestamo,totalDevolver){
    let diasSum=1
    let bodyTable=''
    for(let i=0;i<meses;i++){
        diasSum=i*30
        bodyTable+=`<tr><th>${i+1}</th><td>${totalDevolver}</td><td>${tipoPrestamo.nombre}</td><td>${sumarDias(diasSum).toLocaleDateString('es-ES')}</td></tr>`
        diasSum=1
    }
    bodyTable+='<button type="button" class="btn btn-primary" onclick="calcularNuevoPrestamo()">Calcular Nuevo Prestamo</button>'
    document.getElementById('cuerpoTabla').innerHTML=bodyTable
    document.getElementById('tabledetail').style.display='block'
}
function sumarDias(dias){
    let fecha=new Date();
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
  function calcularNuevoPrestamo(){
    window.location.reload()
  }
    

// let tipoPrestamoIngresado
// if(tipoPrestamoIngresado && !(TIPOSPRESTAMOS.some(tp=>tp.nombreCorto==tipoPrestamoIngresado.toUpperCase())) ){
   
// }
// let meses   
// if(meses==null){
//     aceptoHacerOtroPrestamo=false
// }
// let cantidadMeses=parseInt(meses);
// if(isNaN(meses) || meses < 1){
 
// }
// let tipoPrestamo = TIPOSPRESTAMOS.find(tp=>tp.nombreCorto===tipoPrestamoIngresado.toUpperCase())

function desloguearse(){
    localStorage.clear()
    window.location.href = "pages/login.html";
}
function verificarSiEstaLogueado(){
        
    let isLoguedo= localStorage.getItem('logueado');

    if(!isLoguedo){
        window.location.href = "pages/login.html";
    }else{
        return
    }
}
verificarSiEstaLogueado()
