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
//calculo de intereses va a estar dado por el plan que escogio el usuario
 let porcentajeInteres =tipoPrestamo.porcentaje*cantidadMeses

    return monto*porcentajeInteres/100
}

function calcularCuotas(cantidadMeses,intereses,monto){
let total=0
total=(monto+intereses)/cantidadMeses
return total.toFixed()
}


function iniciaPrograma(){
    
    const TIPOSPRESTAMOS=[new TipoPrestamo('Oro','O',8),new TipoPrestamo('Plata','P',10),new TipoPrestamo('Platinum','PL',6)]
    let aceptoHacerOtroPrestamo=true
    do{
    let montoIngresado = prompt('Ingresar monto que quiere pedir. El monto debera ser mayor a 100')
    if(montoIngresado==null){
        aceptoHacerOtroPrestamo=false
        continue
    }
    
    let monto=parseInt(montoIngresado);
    if(isNaN(monto) || monto < 100){
        alert('Debera ingresar un numero valido')
        continue;
    }
    let stringTiposCreditos='';
    for(let i=0;i<TIPOSPRESTAMOS.length;i++){
        debugger
      
        if(i===TIPOSPRESTAMOS.length-2){
            stringTiposCreditos+= `${TIPOSPRESTAMOS[i].nombreCorto} para ${TIPOSPRESTAMOS[i].nombre} o `
        }else
        if(i===TIPOSPRESTAMOS.length-1){
            stringTiposCreditos+= `${TIPOSPRESTAMOS[i].nombreCorto} para ${TIPOSPRESTAMOS[i].nombre}. `
        }else{
            stringTiposCreditos+= `${TIPOSPRESTAMOS[i].nombreCorto} para ${TIPOSPRESTAMOS[i].nombre}, `
        }
    }
        
    
    let tipoPrestamoIngresado= prompt(`Ingresar el Tipo de Credito que quiere elegir. Ingrese ${stringTiposCreditos}`)
    if(tipoPrestamoIngresado && !(TIPOSPRESTAMOS.some(tp=>tp.nombreCorto==tipoPrestamoIngresado.toUpperCase())) ){
        alert('Debera ingresar un tipo de credito valido')
        continue
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
    let tipoPrestamo = TIPOSPRESTAMOS.find(tp=>tp.nombreCorto===tipoPrestamoIngresado.toUpperCase())
    let interes=calcularIntereses(cantidadMeses,monto,tipoPrestamo);
    let montoADevolver=calcularCuotas(cantidadMeses,interes,monto)

    alert(`Usted pidio un prestamos de ${monto} a devolver en ${cantidadMeses} meses.\n
    Usted tendra que devovler ${montoADevolver}por mes.`)
    aceptoHacerOtroPrestamo=confirm('Le gustaria realizar otro prestamo?')
    if(!aceptoHacerOtroPrestamo){
        alert('Gracias por usar el simulador')
    }

    }while(aceptoHacerOtroPrestamo)
}
iniciaPrograma()