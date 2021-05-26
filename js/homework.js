/* let objNewKoder = {
  name : 'Antonio',
  lastname : 'Servin',
  age: 35,
  position : 'Koder'
}*/

//obtener la lista de Koders
const requestGet = new XMLHttpRequest()
requestGet.open('GET','https://python2g-default-rtdb.firebaseio.com/koders.json')
requestGet.addEventListener('readystatechange', () => {
  if(requestGet.readyState !== 4) {
      return 
  } else {
      if(requestGet.status >= 200 && requestGet.status <= 299){
          const response  = requestGet
          const objectResponse = JSON.parse(response.responseText)
          console.log(objectResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
requestGet.send() 


/* const requestPOST = new XMLHttpRequest()
requestPOST.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
requestPOST.addEventListener('readystatechange', () => {
  if(requestPOST.readyState !== 4) {
      return 
  } else {
      if(requestPOST.status >= 200 && requestPOST.status <= 299){
          const response  = requestPOST
          const objectResponse = JSON.parse(response.responseText)
          console.log(objectResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
requestPOST.send(
  JSON.stringify(objNewKoder)
) 

const requestDelete = new XMLHttpRequest()
let  idKoder = '-MaWK1spBZz6RipolBCF'
requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
requestDelete.addEventListener('readystatechange', () => {
    if(requestDelete.readyState !== 4) {
        return 
    } else {
        if(requestDelete.status >= 200 && requestDelete.status <= 299){
            const response  = requestDelete
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
requestDelete.send() */

/* let objNewKoder = {
  name : 'Antonio',
  lastname : 'Servin',
  age: 54,
  position : 'Koder'
}*/
/* const requestPut = new XMLHttpRequest()
requestPut.open('PUT','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLA-C3tIqERgLDLcP.json')
requestPut.addEventListener('readystatechange', () => {
  if(requestPut.readyState !== 4) {
      return 
  } else {
      if(requestPut.status >= 200 && requestPut.status <= 299){
          const response  = requestPut
          const objectResponse = JSON.parse(response.responseText)
          console.log(objectResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
requestPut.send(
  JSON.stringify(objNewKoder)
)  */


/* let objNewKoder = {
  age: 35
}
const request = new XMLHttpRequest()
request.open('PATCH','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLA-C3tIqERgLDLcP.json')
request.addEventListener('readystatechange', () => {
  if(request.readyState !== 4) {
      return 
  } else {
      if(request.status >= 200 && request.status <= 299){
          const response  = request
          const objectResponse = JSON.parse(response.responseText)
          console.log(objectResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
request.send(
  JSON.stringify(objNewKoder)
) */ 







// FETCH
// Syntaxis  fetch()