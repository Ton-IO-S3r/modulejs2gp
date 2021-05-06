/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

const myname = window.prompt("Cual es tu nombre?").toLowerCase();
let lastChar = myname.charAt(myname.length-1);
if (
    lastChar === 'a' || 
    lastChar === 'e' || 
    lastChar === 'i' || 
    lastChar === 'o' || 
    lastChar === 'u' ||
    lastChar === 'á' ||
    lastChar === 'é' ||
    lastChar === 'í' ||
    lastChar === 'ó' ||
    lastChar === 'ú'
){
    console.log(`Tu nombre termina con la vocal ${lastChar}`);
}else{
    console.log(`Tu nombre termina con la consonante ${lastChar}`);
}
