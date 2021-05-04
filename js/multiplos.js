/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */
let numero = window.prompt("Ingresa un número entre 1 y 100: ");
let divisibles = [];
let index=0;
const array = [2,3,11];

for (let i = 0; i < array.length; i++) {
    if (numero % array[i] == 0) {
        divisibles[index]=array[i];
        index++;
    }
}
if (divisibles.length < 1){
    console.log(`El número ${numero} no es múltiplo de 2, 3 u 11`);
} else if(divisibles.length === 1){
    console.log(`El número ${numero} es múltiplo de ${divisibles[0]}`);
} else if(divisibles.length === 2){
    console.log(`El número ${numero} es múltiplo de ${divisibles[0]} y de ${divisibles[1]}`);
} else if(divisibles.length === 3){
    console.log(`El número ${numero} es múltiplo de ${divisibles[0]}, ${divisibles[1]} y ${divisibles[2]}`);
}