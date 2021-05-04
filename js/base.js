console.log('Hello world');

/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/
let a  = parseInt(window.prompt("Introduce un numero"));
let b  = parseInt(window.prompt("Introduce un segundo numero"));
let result;
if (a>b) {
    result = a / b;
    console.log("El resultado de dividir " + a + " sobre " + b + " es: " + result);
}else if(a < b){
    result = a + b;
    console.log("El resultado de sumar " + a + " y " + b + " es: " + result);
} else if (a==b){
    result = a * b;
    console.log("El resultado de multiplicar " + a + " por " + b + " es: " + result);
}
/* console.log(result); */

/***
	Pedir por el promt un numero, y comprobar si es par o impar
*/
let c = window.prompt("Escribe un tercer número:");
if( c % 2 === 0){
    console.log(`El numero ${c} es par`);
}else{
    console.log(`El numero ${c} es impar`);
}




