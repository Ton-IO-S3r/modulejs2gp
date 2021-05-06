/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */

const clima = window.prompt("Como esta tu día? (a) Nublado, b) Soleado, c) Lluvioso, d) Nevado)").toLowerCase();
var actividad='';
switch (clima) {
    case 'nublado':
        console.log(`Nublado -> No te preocupes, ya saldrá el sol.`);
        break;
    case 'soleado':
        console.log(`Soleado -> Que buen clima para estar en la playa.`);
        break;
    case 'lluvioso':
    console.log(`Lluvioso -> Si vas a salir, no olvides tu impermeable.`);
    break;
    case 'Nevado':
    console.log(`Nevado -> Hay que hacer un muñeco de nieve!.`);
    break;
    default:
        actividad = window.prompt("No ingresaste un clima, pero cuentame que te gustaria hacer en el día?")
        console.log(`${actividad} -> Ok, hagámoslo!`)
        break;
}
