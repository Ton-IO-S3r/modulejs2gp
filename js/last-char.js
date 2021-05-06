/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

const myname = window.prompt("Cual es tu nombre?")
let lastChar = myname.charAt(myname.length-1);
console.log(`Tu nombre termina con ${lastChar}`);