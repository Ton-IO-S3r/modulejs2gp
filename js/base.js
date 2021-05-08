/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
 */
/* let sumatoria = 0;
for (let i = 3; i <= 100; i++) {
    if (i%3 == 0 || i%5==0 || i%7==0) {
        sumatoria +=i
        console.log(i, sumatoria)
    }
}
console.log(`La suma de los multiplos de 3, 5 o 7 entre 1 y 100 es : ${sumatoria}`); */


 /**
  * While
  * Escribir un programa que le pida al usuario un numero
  * que imprima en consola el numero dado si es positivo
  * si el numero es negativo, salir del ciclo
  * 
  */
 /* let numero=0;
 while (numero>=0) {
    numero = parseInt(window.prompt('Escribe un numero:'))
    if (numero >=0) {
        console.log(numero)
    }
 } */
 
 /**
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */
/* const consonants = 'smtp';
const vowels = 'aeiou';

for (let i = 0; i < consonants.length; i++) {
    let combinations='';
    for (let j = 0; j < vowels.length; j++) {
        combinations += consonants[i].concat(vowels[j]).concat(', '); 
        
    }
    console.log(combinations.slice(0,combinations.length-2))
} */
