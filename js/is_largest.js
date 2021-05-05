/* is largest */

const a = parseInt(window.prompt("Ingresa el primer número:"));
const b = parseInt(window.prompt("Ingresa el segundo numero"));
const c = parseInt(window.prompt("Ingresa el tercer numero"));

if (a>=b && a>=c){
    console.log(`El mayor de los números es: ${a}`)
} else if(b>=a && b>=c){
    console.log(`El mayor de los números es: ${b}`)
} else if (c>=b && c>=a){
    console.log(`El mayor de los números es: ${c}`)
} 