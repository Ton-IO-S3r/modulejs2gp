/**
 * 3:
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */
function showEvens(number=100) {
  let i=1;
  while (i<= number) {
      if (i%2 == 0 ) {
          console.log(i)    
      }
      i++
  }
}
 const number = parseInt(window.prompt('Ingresa un numero entre 1 y 100'));
 showEvens(number);