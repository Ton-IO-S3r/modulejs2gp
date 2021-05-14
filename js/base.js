console.log('Metodos de Array - Map, Reduce');

/* REDUCE */
let a = [1,2,3,4,5].reduce((acc,cv)=>{
    return acc/cv
},'100')
console.log(a)