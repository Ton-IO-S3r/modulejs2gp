/** 
 * 1: 
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */
function showTable(multiplicando) {
  let i=1;
  while (i<=10) {
      console.log(`${multiplicando} x ${i} = ${multiplicando*i}`);
      i++;
  }
}
 showTable(parseInt(window.prompt('Ingresa un numero entre 1 y 10')));
 