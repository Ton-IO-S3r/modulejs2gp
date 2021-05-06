/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */


const frase = window.prompt('Ingresa una oración:');
const fraseLowerCase = frase.toLowerCase();
let fraseSinEspacios='';
let index=0, middle=0;

/* SOLUCION FOR */

/* for (let i = 0; i < fraseLowerCase.length; i++) {
    if (fraseLowerCase[i] !== ' ') {
        fraseSinEspacios += fraseLowerCase[i];
    }
}
middle = parseInt(fraseSinEspacios.length/2);

for (let i = 0; i < middle; i++) {
    if (fraseSinEspacios[i] !== fraseSinEspacios[fraseSinEspacios.length-i-1]) {
        console.log(`la oración: ${frase}, no es un palindromo`);
        break;
    }
    index++;
}
if (index==middle) {
    console.log(`la oración: ${frase}, es un palindromo`); 
} */


/* SOLUCION WHILE */

let i=0;
while (i<fraseLowerCase.length) {
    if (fraseLowerCase[i] !== ' ') {
        fraseSinEspacios += fraseLowerCase[i];
    }
    i++;
}
middle = parseInt(fraseSinEspacios.length/2);
i=0
while (i<middle) {
    if (fraseSinEspacios[i] !== fraseSinEspacios[fraseSinEspacios.length-i-1]) {
        console.log(`la oración: ${frase}, no es un palindromo`);
        break;
    }
    index++;
    i++;
}
if (index==middle) {
    console.log(`la oración: ${frase}, es un palindromo`); 
}