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
const number = parseInt(window.prompt('Ingresa un número del 1 al 10:'));
let patron = '';
/* SOLUCION FOR */
for (let i = 0; i < number; i++) {
    patron +='*';
    console.log(`${patron}`)
}
for (let i = number; i > 0; i--) {
    patron = patron.slice(0,patron.length-1);
    console.log(`${patron}`)
}

/* SOLUCION WHILE */
let i=0,j=number;
while (i<number) {
    patron +='*';
    console.log(`${patron}`)
    i++;
}
while (j>0) {
    patron = patron.slice(0,patron.length-1);
    console.log(`${patron}`)
    j--
}