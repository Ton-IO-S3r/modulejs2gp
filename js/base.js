console.log('Metodos de Array - ForEach, MAp, Filter, REduce');

/* FOR EACH */
let arrFor=[1,2,3,4]
arrFor.forEach((currentValue, index, arr)=> {
    console.log(index, currentValue,arr)
    arr.push(9)
    console.log(arr)
});
console.log(arrFor)