/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */
/**
 * 2:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */
 let nombre = window.prompt("Cual es tu nombre?");
 let peso = parseFloat(window.prompt("Cual es tu peso actual?"));
 
 function pesoLunar(peso) {
     const gravedadLuna = 1.622
     let masa = peso/9.81;
     let pesoLuna = masa * gravedadLuna;
     return pesoLuna
 }
 
 console.log(`${nombre}, tu peso en la luna sería de: ${pesoLunar(peso)} Kg·f`);