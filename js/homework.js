/**
 * Teniendo como base este array de objetos
 
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
 * Crear las funciones que :
 * Ordene el array de objetos de acuerdo al titulo
 * Ordene el array de objetos de acuerdo al autor
 * Ordene el array de objetos de acuerdo al "readingStatus"
 * Filtre los libros que estan ocupados
 * 
 */

//* Ordenar el array de objetos de acuerdo al titulo
/* const sortByTitle = (objArray) => {
  return  objArray.sort((a,b)=>{
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1
    } else if(a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1
    } else{
      return 0
    }
  })
} */
const sortByTitle = (objArray) => objArray.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0);

//  * Ordenar el array de objetos de acuerdo al autor
const sortByAuthor = (objArray) => objArray.sort((a, b) => a.author.toUpperCase() < b.author.toUpperCase() ? -1 : a.author.toUpperCase() > b.author.toUpperCase() ? 1 : 0);

//  * Ordenar el array de objetos de acuerdo al "readingStatus"
const sortByStatus = (objArray) => objArray.sort((a, b) => a.readingStatus === b.readingStatus ? 0 : a.readingStatus ? -1 : 1);

// * Filtrar los libros que estan ocupados
const filterTaken = (objsArray) => objsArray.filter((objArray) => !objArray.readingStatus);

let library = [
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: false,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
  {
    author: "David Thomas",
    title: "The pragmatic programmer",
    readingStatus: true,
  },
  {
    author: "JRR Tolkein",
    title: "The unicorn project",
    readingStatus: true,
  },
  {
    author: "Steve Krug",
    title: "Don´t make me think",
    readingStatus: false,
  },
];

/* La funcion SORT altera directamente al array 
  ¿Porque al ejecutar todo de una vez, no se imprime en consola el valor del arreglo conforme va cambiando?
*/
console.log("Ordenar por Titulo");
console.log(sortByTitle(library));
debugger;

console.log("Ordenar por Autor");
console.log(sortByAuthor(library));
debugger;

console.log("Ordenar por Status");
console.log(sortByStatus(library));
debugger;

console.log("Filtrar libros Ocupados");
console.log(filterTaken(library));

/**
 * Dado un string
 * crear una funcion que sustitya cada caracter del string
 * con la letra siguiente del abecedario
 */
const moveCharsForward = (str) => str.split("").map((mychar) => mychar !== " " ? String.fromCharCode(mychar.charCodeAt(0) + 1) : mychar).join("");
console.log(moveCharsForward("abcde fghi"));
// -> 'bcdef'

/**
 * Dado un array con objetos que tienen la propiedad de fecha de nacimiento
 * convertir las fechas de formato yyyy/mm/dd
 * al formato dd/mm/yyyy

 */
/* ¿Cual es la manera mas conveniente u optima para hacerlo? */
/* const convertBirthdates = (arr) =>{
  return arr.map(obj =>{
    obj.birthdate = obj.birthdate.split('/').reverse().join('/')
    return obj
  })
} */
const convertBirthdates = (arr) => arr.map((obj) => ({ name: obj.name, birthdate: (obj.birthdate = obj.birthdate.split("/").reverse().join("/")) }));
let person = [
  {
    name: "Jorge",
    birthdate: "1991/05/12",
  },
  {
    name: "luis",
    birthdate: "1991/02/12",
  },
  {
    name: "mario",
    birthdate: "1991/04/12",
  },
  {
    name: "victor",
    birthdate: "1991/09/12",
  },
];
console.log(convertBirthdates(person));
// -> [{ name:'Jorge', birthdate: '05/12/1991' }, ...]
