/**
 * 2:
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */
 const sentence = window.prompt('Ingresa una oracion');
 let vocales='', consonantes='';
 let i=0;
 console.log(sentence)
 while (i < sentence.length) {
     if(
         sentence[i] != ' ' && 
         sentence[i] != ',' && 
         sentence[i] != '.'
     ){
         if(
             sentence[i] === 'a' || 
             sentence[i] === 'e' || 
             sentence[i] === 'i' || 
             sentence[i] === 'o' || 
             sentence[i] === 'u' ||
             sentence[i] === 'á' ||
             sentence[i] === 'é' ||
             sentence[i] === 'í' ||
             sentence[i] === 'ó' ||
             sentence[i] === 'ú' 
         ){
            vocales += sentence[i];
         }else{
             consonantes += sentence[i];
         }
     }
     i++;   
 }
 console.log(vocales)
 console.log(consonantes)