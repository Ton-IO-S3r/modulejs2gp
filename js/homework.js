/**
 * 1:
 * Estudiar los metodos
 * .map()
 * .reduce()
 */


/**
 * Ejericio 1:
 * Realizar una funcion que dado un array de strings como parametro
 * retorne un nuevo array con todos los strings que tienen como maximo 5 caracteres
 */

/*  const fiveCharactersOnly = arr => arr.filter(element => element.length <= 5)

// test
let responseFiveCharacters = fiveCharactersOnly(["dog", "wolf", "family", "eaten", "camping"]) */
// [ "dog", "wolf", "eaten"]


/**
* Ejericio 2:
* Realizar una funcion que dado un array de nombres de koders como parametro
* Retorne un nuevo array con todos koders que tienen mas de 1 nombre
* 
*/


const twoNamesKoders = arr => arr.filter(koderName => koderName.split(" ").length > 1)

// test
let responseTwoNamesKoders = twoNamesKoders(["Antonio", "Victor Yair", "Luis Carlos", "Victor", "José Omar"])
// ["Victor Yair", "Luis Carlos", "José Omar"]