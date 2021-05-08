/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/
function printPattern(number) {
  let patron = '';
  for (let i = 0; i < number; i++) {
      patron +='*';
      console.log(`${patron}`)
  }
  for (let i = number; i > 1; i--) {
      patron = patron.slice(0,patron.length-1);
      console.log(`${patron}`)
  }
}

const number = parseInt(window.prompt('Ingresa un número del 1 al 10:'));
printPattern(number);
