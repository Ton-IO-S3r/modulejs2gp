/**
 * 3:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */

const calificacion = window.prompt("Ingresa tu calificacion de examen (0 a 100): ");
let res="";
if (calificacion >= 90) {
    res="A";
} else if (calificacion >= 80 && calificacion<90) {
    res="B";
} else if (calificacion >= 70 && calificacion<80) {
    res="C";
} else if (calificacion >= 60 && calificacion<70) {
    res="D";
} else if (calificacion >= 50 && calificacion<60) {
    res="E";
} else if (calificacion < 50){
    res="F";
} 

console.log(`Obtuviste una ${res}`);