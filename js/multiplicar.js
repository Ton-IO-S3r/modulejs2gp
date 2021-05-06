/**
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */
const word = window.prompt('Ingresa una palabra');
const number = window.prompt('Ingresa un numero');
let result=' ';
for (let i = 0; i < number; i++) {
    result += word
    result.concat(" ");
}


console.log(`${result}`)