/* PESO EN LA LUNA */

function pesoLunar(peso) {
    const gravedadLuna = 1.622
    let masa = peso/9.81;
    let pesoLuna = masa * gravedadLuna;
    return pesoLuna
}
/* let nombre = window.prompt("Cual es tu nombre?");
let peso = parseFloat(window.prompt("Cual es tu peso actual?"));
console.log(`${nombre}, tu peso en la luna sería de: ${pesoLunar(peso)} Kg·f`); */

/* PALINDROMOS */
function deleteSpaces(sentence) {
    let fraseSinEspacios='';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            fraseSinEspacios += sentence[i];
        }
    }
    return fraseSinEspacios
}
function isPalindrome(sentence){
    const fraseLowerCase = sentence.toLowerCase();
    let index=0, middle=0;
    let fraseSinEspacios = deleteSpaces(fraseLowerCase);
    middle = parseInt(fraseSinEspacios.length/2);
    for (let i = 0; i < middle; i++) {
        if (fraseSinEspacios[i] !== fraseSinEspacios[fraseSinEspacios.length-i-1]) {
            return false
        }
        index++;
    }
    if (index==middle) {
        return true
    } 
}

/* const frase = window.prompt("Ingresa una frase:");
if (isPalindrome(frase)) {
    console.log(`La oración: ${frase}, ES un palindromo`)
}else{
    console.log(`La oración: ${frase}, NO ES un palindromo`)
} */

/* NOMBRE INVERTIDO */
function revertName(name) {
    return name.split("").reverse().join("").toUpperCase();
}
/* const nombre = window.prompt('Ingresa tu nombre');
console.log(revertName(nombre)); */

/* OBTENER DIAS DEL MES */

function getDaysOfMonth(monthNumber) {
    const meses = [ 'enero', 
                    'febrero', 
                    'marzo', 
                    'abril', 
                    'mayo', 
                    'junio', 
                    'julio', 
                    'agosto', 
                    'septiembre', 
                    'octubre', 
                    'noviembre', 
                    'diciembre'
                ];
    let days;
        switch (monthNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 28
            break;
    }
    return [days, meses[monthNumber-1]]
}

/* const numero = parseInt(window.prompt("Ingresa un número entre 1 y 12."));
let diasMes=getDaysOfMonth(numero);
if (diasMes[0] == 28) {
    console.log(`El mes ${numero} (${diasMes[1]}) tiene ${diasMes[0]} días (29 cuando es año bisiesto)`)
}else{
    console.log(`El mes ${numero} (${diasMes[1]}) tiene ${diasMes[0]} días`)
} */


/* WEATHER */

function lastChar(myname) {
    let last = myname.charAt(myname.length-1);
    if (
        last === 'a' || 
        last === 'e' || 
        last === 'i' || 
        last === 'o' || 
        last === 'u' ||
        last === 'á' ||
        last === 'é' ||
        last === 'í' ||
        last === 'ó' ||
        last === 'ú'
    ){
        return 'vocal'
    }else{
        return 'consonante'
    }
}

const myName = window.prompt("Cual es tu nombre?").toLowerCase();
console.log(`Tu nombre termina con la ${lastChar(myName)} ${myName[myName.length-1]}`)