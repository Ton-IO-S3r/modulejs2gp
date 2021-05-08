/**
 * 7:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
function whosMinMax(num1, num2) {
  if (num1 > num2) {
    console.log(`El número ${num1} es el mayor y ${num2} es el menor`);
  } else if (num1 < num2) {
    console.log(`El número ${num2} es el mayor y ${num1} es el menor`);
  } else{
    console.log("Los números son iguales");
  }
}
 let numero1 = window.prompt("Escribe el primer numero:");
 let numero2 = window.prompt("Escribe el segundo numero:");
whosMinMax(numero1,numero2)
 