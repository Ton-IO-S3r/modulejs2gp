/* Convertir de Celsius a Farenheit */

const temperaturaC = parseFloat(window.prompt("Ingresa la temperatura de tu localidad en grados celsius:"));
const temperaturaF = (temperaturaC * 9/5) + 32;
alert(`La temperatura es de ${temperaturaF} F`)

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



/* Ejemplo de uso sentencia SWITCH */

let calificacion = parseInt(window.prompt("Ingresa la calificacion"));
switch (calificacion) {
    case 100:
        console.log('Tu calificacion es: A+')
        break;
    case 90:
        console.log('Tu calificacion es: A')
        break;
    case 80:
        console.log('Tu calificacion es: B')
    break;    
    case 70:
        console.log('Tu calificacion es: C')
    break;    
    case 50:
        console.log('Tu calificacion es: E')
    break;
    default:
        console.log('Tu calificacion es: F')
        break;
}





