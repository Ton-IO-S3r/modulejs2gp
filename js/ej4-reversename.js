/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */
const nombre = window.prompt('Ingresa tu nombre');
let reversed = nombre.split("").reverse().join("");
console.log(reversed.toUpperCase());