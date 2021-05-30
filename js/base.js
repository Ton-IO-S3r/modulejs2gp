// Funcion para imprimir la lista de koders
const printList = (obKoders) => {
  let acc = ''
  for(key in  obKoders){
    let {name, lastname, } = obKoders[key]
    acc += `
    <li class="list-group-item d-flex justify-content-between">
        <p class="pr-4 text-left">${name} ${lastname}</p>
        <div class="options__koder">
            <a href="/pages/koder.html?idkoder=${key}" class="pr-4 btn btn-primary">Ver koder</a>
            <a href="#" class="pr-4 btn btn-danger deletekoder" data-id="${key}">Eliminar</a>
        </div>
    </li>
    `
  }
  
  let list__koders = $('.kodersList')[0]
  list__koders.innerHTML = acc
}

// Funcion para imprimir un koder
const printKoder = (obKoder) => {
  $('.fullname .name')[0].innerText = obKoder.name
  $('.fullname .lastname')[0].innerText = obKoder.lastname
  $('.age-num')[0].innerText = obKoder.age
  $('.rol')[0].innerText = obKoder.position
  
}

/*  GET */

//Funcion para obtener la lista de koders con el uso del objeto XMLHttpRequest
const getKodersListXHR = () => {
  const requestGet = new XMLHttpRequest()
  requestGet.open('GET','https://python-2g-asm-default-rtdb.firebaseio.com/koders/.json')
  requestGet.addEventListener('readystatechange', () => {
    if(requestGet.readyState !== 4) {
        return 
    } else {
        if(requestGet.status >= 200 && requestGet.status <= 299){
            const response  = requestGet
            const objectResponse = JSON.parse(response.responseText)
            printList(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
  })
  requestGet.send() 
}

//Funcion para obtener la lista de koders con el uso de FETCH
const getKodersListFetch = () => {
  fetch('https://python-2g-asm-default-rtdb.firebaseio.com/koders/.json')
  .then(result =>{
    return result.json()
  })
  .then(response =>{
    console.log(response)
    printList(response)
  })
}

//Funcion para obtener  el koder seleccionado con el uso del objeto XMLHttpRequest
const getKoderXHR = (koderid) => {
  const requestGet = new XMLHttpRequest()
  requestGet.open('GET',`https://python-2g-asm-default-rtdb.firebaseio.com/koders/${koderid}.json`)
  requestGet.addEventListener('readystatechange', () => {
    if(requestGet.readyState !== 4) {
        return 
    } else {
        if(requestGet.status >= 200 && requestGet.status <= 299){
            const response  = requestGet
            const objectResponse = JSON.parse(response.responseText)
            printKoder(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
  })
  requestGet.send() 
}

//Funcion para obtener el koder seleccionado con el uso de FETCH
const getKoderFetch = (koderid) => {
  fetch(`https://python-2g-asm-default-rtdb.firebaseio.com/koders/${koderid}.json`)
  .then(result =>{
    return result.json()
  })
  .then(response =>{
    console.log(response)
    printKoder(response)
  })
}


/* POST */
//Funcion para hacer POST de koder con el uso de XMLHttpRequest
const postKoderXHR = (objkoder) => {
  const request = new XMLHttpRequest()
  request.open('POST','https://python-2g-asm-default-rtdb.firebaseio.com/koders/.json')
  request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
            window.location.pathname = '/pages/clase.html'
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
  })
  request.send(
    JSON.stringify(objkoder)
  )
}

//Funcion para hacer POST de koder con el uso de FETCH
const postKoderFETCH = (objkoder) => {
  fetch('', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objkoder)
  })
  .then(res => {
    return res.json()
  })
  .then(response => {
    console.log(response)
    window.location.pathname='/pages/clase.html'
  })

}


//Funcion para hacer DELETE de koder con el uso de XMLHttpRequest
const deleteKoderXHR = (koderid) => {
  const requestDelete = new XMLHttpRequest()
  
  requestDelete.open('DELETE',`https://python-2g-asm-default-rtdb.firebaseio.com/koders/${koderid}.json`)
  requestDelete.addEventListener('readystatechange', () => {
      if(requestDelete.readyState !== 4) {
          return 
      } else {
          if(requestDelete.status >= 200 && requestDelete.status <= 299){
              const response  = requestDelete
              const objectResponse = JSON.parse(response.responseText)
              getKodersListFetch()
          } else {
              console.log('No se pudo ejecutar')
          }
      } 
  })
  requestDelete.send()
}

//Funcion para hacer DELETE de koder con el uso de FETCH
const deleteKoderFetch = (koderid) => {
  fetch(`https://python-2g-asm-default-rtdb.firebaseio.com/koders/${koderid}.json`,{
    method: 'DELETE'
  })
  .then(res => {
    return res.json()
  })
  .then(response => {
    getKodersListFetch()
  })
}

//Funcion para hacer PUT de koder con el uso de XHR
const updateKoderXHR = (objKoder, idKoder) => {
  const request = new XMLHttpRequest()
  request.open('PUT', `https://python-2g-asm-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
  request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
            window.location.pathname = '/pages/clase.html'
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
  })
  request.send(
    JSON.stringify(objKoder)
  ) 
}

//Funcion para hacer PUT de koder con el uso de XHR
const updateKoderFETCH = (objKoder, idKoder) => {
  fetch(`https://python-2g-asm-default-rtdb.firebaseio.com/koders/${idKoder}.json`,{
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objKoder)
  })
  .then(res => {
    return res.json()
  })
  .then(response => {
    console.log(response)
    window.location.pathname='/pages/clase.html'
  })
}


if (window.location.pathname === '/pages/clase.html') {
  //obtener la lista de Koders
  getKodersListFetch()
  //getKodersListXHR()
  const kodersList_element = $('.kodersList')[0]
  kodersList_element.addEventListener('click', (event) => {
    const elementClicked = event.target
    
    if (elementClicked.classList.contains('deletekoder') && confirm(`Estas seguro de eliminar al koder?`)) {
      //deleteKoderXHR(elementClicked.dataset.id)
      deleteKoderFetch(elementClicked.dataset.id)
    }
  })  
}

if (window.location.pathname === '/pages/addkoder.html') {
  const createBtn = $('#create-btn')[0]
  createBtn.addEventListener('click', ()=>{
    let newName = $('#name')[0].value
    let newLastName = $('#lastname')[0].value
    let newAge = $('#age')[0].value
    let newJob = $('#job-position')[0].value

    if (newName == '' || newLastName == '' || newAge == '' || newJob == '') {
      return
    }

    let objNewKoder = {
      name : newName,
      lastname : newLastName,
      age: parseInt(newAge),
      position : newJob
    }
    postKoderXHR(objNewKoder)
    //postKoderFETCH(objNewKoder)
  })
}

if (window.location.pathname === '/pages/koder.html') {
  let searchParameter = window.location.search;
  const id = searchParameter.slice(searchParameter.indexOf('=')+1)
  const edit_Btn = $('button.edit')[0]
  const save_Btn = $('#save-btn')[0]
  const cancel_Btn = $('#cancel-btn')[0]

  //getKoderXHR(id)
  getKoderFetch(id)

  save_Btn.addEventListener('click', () => {
    let newName = $('#name')[0].value
    let newLastName = $('#lastname')[0].value
    let newAge = $('#age')[0].value
    let newJob = $('#job-position')[0].value

    if (newName == '' || newLastName == '' || newAge == '' || newJob == '') {
      return
    }

    let objNewKoder = {
      name : newName,
      lastname : newLastName,
      age: parseInt(newAge),
      position : newJob
    }
    //updateKoderXHR(objNewKoder, id)
    updateKoderFETCH(objNewKoder, id)
    
  })

  cancel_Btn.addEventListener('click', () => {
    $('.card-body')[0].classList.toggle('visible')
    $('.edit-form')[0].classList.toggle('visible')
    edit_Btn.classList.toggle('visible')
  })

  edit_Btn.addEventListener('click', (e) => {
    $('input#name')[0].value = $('.card-body .name')[0].innerText
    $('input#lastname')[0].value = $('.card-body .lastname')[0].innerText
    $('input#age')[0].value = $('.card-body .age .age-num')[0].innerText
    $('input#job-position')[0].value = $('.card-body .position .rol')[0].innerText
    $('.card-body')[0].classList.toggle('visible')
    $('.edit-form')[0].classList.toggle('visible')
    e.target.classList.toggle('visible')
  })
  

}


/*  */

/* let objNewKoder = {
  name : 'Antonio',
  lastname : 'Servin',
  age: 54,
  position : 'Koder'
}
*/


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
)  */