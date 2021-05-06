// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días
const numero = parseInt(window.prompt("Ingresa un número entre 1 y 12."));

switch (numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${numero} tiene 31 días`)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${numero} tiene 30 días`)
        break;
    default:
        console.log(`El mes ${numero} tiene 28 días (29 cuando es año bisiesto)`)
        break;
}
