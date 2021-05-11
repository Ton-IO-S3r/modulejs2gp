/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

function convertTemp(temp, typeIn = 'C', typeOut = 'F') {
    let tempConverted=0;
    if (temp != undefined && typeIn === 'C' && typeOut === 'F') {
        tempConverted= ((temp*9)/5)+32
    } else if(temp != undefined && typeIn === 'F' && typeOut === 'C'){
        tempConverted= ((temp-32)*5)/9
    }else{
        tempConverted = null
    }
    return [tempConverted,typeOut]
}

/* const temperature = parseInt(window.prompt('Ingresa el valor de la temperatura:'));
const tipoIn = window.prompt('Ingresa la escala de temperatura inicial (C, F):').toUpperCase();
const tipoOut = window.prompt('Ingresa la escala de temperatura a la que deseas convertir (C, F):').toUpperCase();
let [converted, type] = convertTemp(temperature,tipoIn,tipoOut);
(converted !=null) ? console.log(`${temperature} ${tipoIn} -> ${converted} ${type}`) : console.log('Los datos introducidos son incorrectos') */


/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas acciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar a la cuenta 1234 $500 (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depósitos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */


/* function consultarSaldo() {
    consultas++;
    console.log(`Cuentas con: $${saldo}`)
    console.log(`Consultas del dia: ${consultas}`)
}
function retirarEfectivo(cantidad) {
    saldo -= cantidad;
    retiros++;
    console.log(`Retiraste: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Retiros del dia: ${retiros}`)
}
function depositarEfectivo(cantidad) {
    saldo += cantidad;
    depositos++;
    console.log(`Depositaste a tu cuenta: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Depositos del día: ${depositos}`)
}
function transferirTercero(cuenta, cantidad) {
    saldo -= cantidad;
    console.log(`Se transfirió a la cuenta ***${cuenta} la cantidad de: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Retiros del día: ${retiros}`)
} */

/* let session = true
let saldo=2000, depositos = 0, retiros = 0, consultas = 0;
while (session) {
    let action = parseInt(window.prompt('Que operación deseas realizar: \n1)Consultar Saldo \n 2)Retirar efectivo\n 3)Depositar a tu cuenta\n 4)Transferir a terceros\n 5)Finalizar'))    
    switch (action) {
        case 1:
            consultarSaldo();
            break;
        case 2:
            let cantidadRetiro = parseFloat(window.prompt('Que cantidad deseas retirar?'))
            retirarEfectivo(cantidadRetiro)
            break;
        case 3:
            let cantidadDeposito = parseFloat(window.prompt('Que cantidad deseas depositar?'))
            depositarEfectivo(cantidadDeposito)
            break;
        case 4:
            let cuenta = 1234;
            let cantidadTransfer = parseFloat(window.prompt('Cuanto vas a transferir?'))
            transferirTercero(cuenta, cantidadTransfer)
            break;
        default:
            session = false;
            break;
    }
} */



/* FUNCIONES COMO EXPRESION */
const saludar = function (name) {
    console.log(`Hola ${name}`)
}
saludar('Jorge')

const consultarSaldo = () => {
    consultas++;
    console.log(`Cuentas con: $${saldo}`)
    console.log(`Consultas del dia: ${consultas}`)
}
const retirarEfectivo = (cantidad) => {
    saldo -= cantidad;
    retiros++;
    console.log(`Retiraste: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Retiros del dia: ${retiros}`)
}
const depositarEfectivo= (cantidad) => {
    saldo += cantidad;
    depositos++;
    console.log(`Depositaste a tu cuenta: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Depositos del día: ${depositos}`)
}
const transferirTercero = (cuenta, cantidad) => {
    saldo -= cantidad;
    retiros++; 
    console.log(`Se transfirió a la cuenta ***${cuenta} la cantidad de: $${cantidad}`)
    console.log(`Tienes disponible: $${saldo}`)
    console.log(`Retiros del día: ${retiros}`)
}

let session = true
let saldo=2000, depositos = 0, retiros = 0, consultas = 0;
while (session) {
    let action = parseInt(window.prompt('Que operación deseas realizar: \n1)Consultar Saldo \n 2)Retirar efectivo\n 3)Depositar a tu cuenta\n 4)Transferir a terceros\n 5)Finalizar'))    
    switch (action) {
        case 1:
            consultarSaldo();
            break;
        case 2:
            let cantidadRetiro = parseFloat(window.prompt('Que cantidad deseas retirar?'))
            retirarEfectivo(cantidadRetiro)
            break;
        case 3:
            let cantidadDeposito = parseFloat(window.prompt('Que cantidad deseas depositar?'))
            depositarEfectivo(cantidadDeposito)
            break;
        case 4:
            let cuenta = 1234;
            let cantidadTransfer = parseFloat(window.prompt('Cuanto vas a transferir?'))
            transferirTercero(cuenta, cantidadTransfer)
            break;
        default:
            session = false;
            break;
    }
}