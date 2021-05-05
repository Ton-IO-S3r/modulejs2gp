/* Convertir de Celsius a Farenheit */

const temperaturaC = parseFloat(window.prompt("Ingresa la temperatura de tu localidad en grados celsius:"));
const temperaturaF = (temperaturaC * 9/5) + 32;
alert(`La temperatura es de ${temperaturaF} F`)