/**
 * 6:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

let dia = window.prompt("Ingresa un día de la semana (lunes, martes, etc.)").toLowerCase();
let diaNum;
if (dia === "domingo") {
    diaNum = 1
} else if(dia === "lunes") {
    diaNum = 2
} else if(dia === "martes") {
    diaNum = 3
} else if(dia === "miercoles") {
    diaNum = 4
} else if(dia === "jueves") {
    diaNum = 5
} else if(dia === "viernes") {
    diaNum = 6
} else if(dia === "sabado") {
    diaNum = 7
} else {
    diaNum = 0
}

console.log((diaNum != 0) ? `El ${dia} es el dia No ${diaNum} de la semana`: "El dia indicado no existe");
 