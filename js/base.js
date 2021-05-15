console.log('OBJETOS');

// let koder={
//     name: 'Antonio',
//     lastName: 'Servin',
//     gender: 'F',
//     age: 35,
//     scores: [9,10,10,8],
//     getFullName: function(){return `${this.name} ${this.lastName}`}
// }

// console.log(koder)
// let nameKoder = koder.name
// let ageKoder = koder.age
// let fullNameKoder = koder.getFullName()
// let lastScore = koder.scores[koder.scores.length-1]
// console.log(fullNameKoder,lastScore)

/* Pedidos de un restaurant
  la estructura por cada pedido es 
  ['entrada','principal','postre','precio'], 
let pedidos = [
    ['ensalada de pepinos','paella','platano', 100],
    ['ensalada de tomates','pescado','helado', 120],
    ['ensalada simple','paella','yogurt', 80],
    ['ensalada simple','enchiladas','yogurt', 80],
    ['ensalada cesar','salmón','platano', 100]
  ]*/

let pedidos = [
    {
        entrada: 'ensalada de pepinos',
        principal: 'paella',
        postre: 'platano',
        precio: '100'
    },
    {
        entrada: 'ensalada de tomates',
        principal: 'pescado',
        postre: 'helado',
        precio: '120'
    },
    {
        entrada: 'ensalada simple',
        principal: 'paella',
        postre: 'yogurt',
        precio: '80'
    },
    {
        entrada: 'ensalada simple',
        principal: 'enchiladas',
        postre: 'yogurt',
        precio: '80'
    },
    {
        entrada: 'ensalada cesar',
        principal: 'salmon',
        postre: 'helado',
        precio: '100'
    }
]

pedidos.forEach(pedido=>{
    console.log(pedido)
})


// Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
const getPaellaTotals = (arr) => arr.reduce((acc,cv) => acc + (cv.principal === 'paella'), 0)

// Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
const getIceCreamBananaTotals = (arr) => arr.filter(pedido => pedido.postre === 'platano' || pedido.postre === 'helado')

// Funcion que devuelve los pedidos que tengan un precio superior a 90 
const getOver90Totals = (arr) => arr.filter(pedido => pedido.precio > 90)
// Funcion que devuelve los pedidos que tengan un precio inferior a 90 
const getUnder90Totals = (arr) => arr.filter(pedido => pedido.precio < 90)

console.log('Total de pedidos con PAELLA como plato principal')
console.log(getPaellaTotals(pedidos))

console.log('Pedidos con HELADO o PLATANO como postre')
console.log(getIceCreamBananaTotals(pedidos))

console.log('Pedidos mayores a $90')
console.log(getOver90Totals(pedidos))

console.log('Pedidos menores a $90')
console.log(getUnder90Totals(pedidos))

let objPedido={
    entrada: 'ensalada de pepinos',
    principal: 'paella',
    postre: 'platano',
    precio: '100',
    coords: [1234423.122, 21233412.235],
}

/* FOR IN */
/* for (item in objPedido){
    if(item ==='coords'){
        console.log(`Lat: ${objPedido[item][0]}, Long: ${objPedido[item][1]}`)
    } else{
        console.log(objPedido[item])
    }
} */

/* METODO KEYS */

/* let objectKeys = Object.keys(objPedido)
console.log(objectKeys)

objectKeys.forEach(item=>{
    if(item ==='coords'){
        console.log(`Lat: ${objPedido[item][0]}, Long: ${objPedido[item][1]}`)
    } else{
        console.log(objPedido[item])
    }
}) */

/* METODO ENTRIES */
let entries = Object.entries(objPedido)
console.log(entries)

/* METODO VALUES */
let values = Object.values(objPedido)
console.log(values)