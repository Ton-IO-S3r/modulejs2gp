/**
 * 5:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

function isEven(number) {
  return (numero % 2 == 0) ? "PAR" : "IMPAR"
}

let numero = window.prompt("Ingresa un numero entre 1 y 100.");
console.log(`El número ${numero} es ${isEven(numero)}`);
