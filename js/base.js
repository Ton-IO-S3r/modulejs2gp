console.log('DOM')

//Seleccionar un tag
let element = document.getElementById('title_page_id')
console.log(element.classList)
console.log(element.dataset)
console.log(element.id)
console.log(element.innerText)
console.log(element.innerHTML)
console.log(element.getAttribute('class'))
console.log(element.getAttribute('id'))
console.log(element.getAttribute('data-id'))

//Mostrar las clases que tiene el elemento
//Classlist devuelde las clases en un array
element.classList.forEach(item =>{
    console.log(item)
})

//Mostrar los data-set que tiene el elemento
//Dataset devuelve los data-set en un objeto
for (item in element.dataset){
    console.log(item)
}


let koders1 = ['antonio', 'jorge','rosa','yair'];

let rowsKoders1 = '';
koders1.forEach((koder,index) =>{
    rowsKoders1 += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${koder}</td>
        </tr>
    `
})
let tabla1 = document.querySelector('.table1 tbody');
tabla1.innerHTML=rowsKoders1;

let koders2 = [
    {
        name: 'Jorge',
        lastName: 'Camarillo',
        age: 30,
        github:'@dered-dev'
    },
    {
        name:'Antonio',
        lastName:'Servin',
        age: 35,
        github:'@Ton-IO-S3r'
    },
    {
        name:'Ivan',
        lastName:'Rossano',
        age: 27,
        github:'@IvanRossG'
    }
];

let rowsKoders2 = '';
koders2.forEach((koder,index) =>{
    let {name,lastName,age,github} = koder
    rowsKoders2 += `
        <tr class=" table-secondary">
            <th scope="row">${index+1}</th>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${github}</td>
        </tr>
    `
})
let tabla2 = document.querySelector('.table2 tbody');
tabla2.innerHTML=rowsKoders2;