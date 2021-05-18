console.log('Accessores GET - SET')

//Metodos de objetos
let koder ={
    name: 'Antonio',
    lastName: 'Servin',
    age: 35,
    getFullName: function () {
        return `${this.name} ${this.lastName}`
    }
}
console.log(koder.getFullName())


let koders = [
    {
        name: 'Antonio',
        lastName: 'Servin',
        age: 35
        
    },
    {
        name: 'John',
        lastName: 'Smith',
        age: 45
        
    }
]

koders.forEach(koder =>{
    koder.getFullName = function () {
        return `El koder ${this.name} ${this.lastName} tiene ${this.age} años`
    }
})
koders.forEach(koder=>{
    console.log(koder.getFullName())
})

