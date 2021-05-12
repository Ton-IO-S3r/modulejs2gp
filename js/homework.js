// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/
const reverseArray = (array) => console.log(array.reverse());

/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/
const sumArrays = (array1,array2) => {
  var result=0;
  var arraySum = array1.concat(array2)
  arraySum.forEach(element => result+=element);
  return result
}
/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/
const filterRepeated = (array1,array2) => {
  var resultArray=[];
  array2.forEach(element =>{
    if (array1.includes(element)) resultArray.push(element)
  })
  return resultArray
}