function calcularIntereses(cantidadMeses,monto){
//calculo de intereses va a estar dado por la cantidad de meses. Sera un 8 % mensual
 let porcentajeInteres =8*cantidadMeses

    return monto*porcentajeInteres/100
}

function calcularCuotas(cantidadMeses,intereses,monto){
let total=0
total=(monto+intereses)/cantidadMeses
return total.toFixed()
}

function iniciaPrograma(){
    let aceptoHacerOtroPrestamo=true
    do{
    let montoIngresado  = prompt('Ingresar monto que quiere pedir. El monto debera ser mayor a 100')
    if(montoIngresado==null){
        aceptoHacerOtroPrestamo=false
        continue
    }
    let monto=parseInt(montoIngresado);
    if(isNaN(monto) || monto < 100){
        alert('Debera ingresar un numero valido')
        continue;
    }
    let meses=prompt('Ingresar en que cantidad de meses lo quiere devolver. La cantidad de ser mayor a 1')    
    if(meses==null){
        aceptoHacerOtroPrestamo=false
        continue
    }
    let cantidadMeses=parseInt(meses);
    if(isNaN(meses) || meses < 1){
        alert('Debera ingresar un numero valido')
        continue;
    }
    let interes=calcularIntereses(cantidadMeses,monto);
    let montoADevolver=calcularCuotas(cantidadMeses,interes,monto)

    alert('Usted pidio un prestamos de '+monto+' a devolver en '+cantidadMeses+'.\n'
    +'Usted tendra que devovler '+montoADevolver+'por mes.')
    aceptoHacerOtroPrestamo=confirm('Le gustaria realizar otro prestamo?')
    if(!aceptoHacerOtroPrestamo){
        alert('Gracias por usar el simulador')
    }

    }while(aceptoHacerOtroPrestamo)
}
iniciaPrograma()