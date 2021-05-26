/* let objNewKoder = {
  name : 'Antonio',
  lastname : 'Servin',
  age: 35,
  position : 'Koder'
}
const request = new XMLHttpRequest()
request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
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

/* const requestDelete = new XMLHttpRequest()
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
}
const request = new XMLHttpRequest()
request.open('PUT','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLA-C3tIqERgLDLcP.json')
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


let objNewKoder = {
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
) 