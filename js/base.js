            /* Ciclo FOR
                for(inicio; fin; inc/dec){
                    sentencias
                }
            */


/*Ejercicios CLASE+/
/**1
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

const number = parseInt(window.prompt('Ingresa un numero entre 1 y 10'));
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number*i}`)
}


/**2
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */
 const sentence = window.prompt('Ingresa una oracion');
 let vocales='', consonantes='';

 for (let i = 0; i < sentence.length; i++) {
     if(
         sentence[i] === 'a' || 
         sentence[i] === 'e' || 
         sentence[i] === 'i' || 
         sentence[i] === 'o' || 
         sentence[i] === 'u' ||
         sentence[i] === 'á' ||
         sentence[i] === 'é' ||
         sentence[i] === 'í' ||
         sentence[i] === 'ó' ||
         sentence[i] === 'ú' 
         ){
        vocales += sentence[i];
    } else if (
        sentence[i] != ' ' && 
        sentence[i] != ',' && 
        sentence[i] != '.'
    ){
        consonantes += sentence[i];
     }
 }
 console.log(vocales)
 console.log(consonantes)


/**3
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */
 const number2 = parseInt(window.prompt('Ingresa un numero entre 1 y 100'));
 for (let i = 1; i <= number2; i++) {
     if (i%2 == 0 ) {
        console.log(i)    
     }
 }


            /* While */
            /* 
                    while(condition){
                        sentencias
                    } 
            */
