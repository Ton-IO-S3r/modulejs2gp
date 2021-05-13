// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> 5
let numbersArray = [1,4,45,3,7,67,4,2,23];
let maxNum=0;
numbersArray.forEach(number =>{
    if (number > maxNum) maxNum=number;
})
console.log(maxNum)


// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

const convert2String = (anArray) => {
    var result = [];
    anArray.forEach(element => {
        result.push(element.toString())
    })
    return result
}
let array2 = [1,2,3,4]
let stringArray= convert2String(array2)
console.log(stringArray)



// funcion que dados 2 parametros .forEach() o .map() o for()
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]
const getLeapYears = (periodStart, periodEnd) => {
    let leapYears =[];
    for (let i = periodStart; i <= periodEnd; i++) {
        (i % 4 === 0 && i % 100 !== 0) || 
        (i % 100 === 0 && i % 400 === 0) ? leapYears.push(i):''
    }
    return leapYears
}









