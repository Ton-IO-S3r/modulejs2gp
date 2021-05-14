// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings

const convert2String = (anArray) => anArray.map(element => element.toString())
    
let array2 = [1,2,3,4]
console.log(convert2String(array2))

//Funcion que dado un array de nombres, nos retorna cada nombre con la primer letra 
//Mayúscula y las demas minusculas
const capitalizeNames = (anArray) => anArray.map(element => element[0].toUpperCase().concat(element.slice(1,element.length).toLowerCase()))

console.log(capitalizeNames(["jorge", "antOnio", "jUan", "victor"]))
// ["Jorge", "Antonio", "Juan", "Victor"]


/* Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays, 
// y retorne un array con los nombres completos
function joinNames(arrNames, arrSurnames) {
    // sentences
}

// ["jorge camarillo ", "luis cristobal"]*/

const joinNames = (arrNames, arrayLastNames) => arrNames.map( (name, index) => name.concat(' ', arrayLastNames[index]))

console.log( joinNames( ["jorge", "luis"], ['camarillo', 'cristobal'] ) )

/* function stringConcat(arr) {
    // your code here ç
}
//console.log(stringConcat([1, 2, 3])); // "123" */
/* function stringConcat(arr) {
    return arr.reduce((acc,cv)=>{
        return acc+cv
    },'')
    
} */

const stringConcat = arr => arr.reduce((acc,cv)=> acc+cv,'')
console.log(stringConcat([1,2,3, 10, 20,3,6]))

/* EJ 2 - REDUCE 
function totalShoppingCart(arr) {
    // your code here 
}
let arr = 
    [ 
        ["Reloj", 500] , 
        ["Reloj", 300] , 
        ["Reloj", 1200] 
    ] 
const totalAPagar = totalShoppingCart(arr)
// 2000


*/

const totalShoppingCart = arr => arr.reduce((acc,cv) => acc + cv[1], 0)
let array1 = 
    [ 
        ["Reloj", 500] , 
        ["Reloj", 300] , 
        ["Reloj", 1200] 
    ] 
const totalAPagar = totalShoppingCart(array1)