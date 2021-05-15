/**
 * 
 * Ejercicio 1
 
Dado el array [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
Calcular el numero de personas que si votaron
Output -> 1
Nota: las personas que si votaron tiene true
*/

const getTotalVoters = arr => arr.reduce((acc, cv)=> acc+cv[1] ,0)

//console.log(totalVoters( [ ["jorge", false] , ["luis", true] , ["Victor", false] ] ) )
// -> 1


/**
* 
* Ejercicio 2

  Dado un array con pedidos de un restaurant
  la estructura por cada pedido es 
  ['entrada','principal','postre','precio'],
  
*/

// Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
const getPaellaTotals = (arr) => arr.reduce((acc,cv) => acc + (cv[1] === 'paella'), 0)

// Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
const getIceCreamBananaTotals = (arr) => arr.reduce((acc,cv) => acc + (cv[2] === 'platano' || cv[2] === 'helado'), 0)
// Funcion que devuelve los pedidos que tengen un precio superior a 90 
const getOver90Totals = (arr) => arr.reduce((acc,cv) => acc + (cv[3] > 90), 0)
// Funcion que devuelve los pedidos que tengen un precio inferior a 90 
const getUnder90Totals = (arr) => arr.reduce((acc,cv) => acc + (cv[3] < 90), 0)

let pedidos = [
  ['ensalada de pepinos','paella','platano', 100],
  ['ensalada de tomates','pescado','helado', 120],
  ['ensalada simple','paella','yogurt', 80],
  ['ensalada simple','enchiladas','yogurt', 80],
  ['ensalada cesar','salmón','platano', 100]
]
console.log(getPaellaTotals(pedidos))
console.log(getIceCreamBananaTotals(pedidos))
console.log(getOver90Totals(pedidos))
console.log(getUnder90Totals(pedidos))


/**
* Ejercicio 3:
* Estudiar el tema de Objetos y métodos de Objetos
*/