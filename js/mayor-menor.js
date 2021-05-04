/**
 * 7:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
let numero1 = window.prompt("Escribe el primer numero:");
let numero2 = window.prompt("Escribe el segundo numero:");
if (numero1 > numero2) {
    console.log(`El número ${numero1} es el mayor y ${numero2} es el menor`);
} else if (numero1 < numero2) {
    console.log(`El número ${numero2} es el mayor y ${numero1} es el menor`);
} else{
    console.log("Los números son iguales");
}