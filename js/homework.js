/**
 * AJAX. Asyncronous Java Script And XML
 * JSON
 * XHR -> xmlhttprequest
 * Fetch
 */
const getUserName = id => users.filter(user => user.id == id)[0]
const getCommentsLength = idpost => comments.filter(comment => comment.postId == idpost).length
const printPosts = (arr) => {
  let acc = ''
  arr.forEach(post => {
      acc += `
      <li class="list-group-item py-5">
          <div class="d-flex justify-content-start align-items-start mt-1">
            <h2 class="pr-4 ">${post.id}</h2>
            <h2  class="pr-4 ms-3">${post.title}</h2>
          </div>
          <p class="pr-4 ">${post.body}</p>
          <div class="d-flex justify-content-between ">
            <div>
              <a href="/pages/user.html?userId=${post.userId}" class="nav-link name">${getUserName(post.userId).name}</a>
            </div>
            <div class="d-flex justify-content-around">
              <!-- <a href="/pages/post.html?idpost=${post.id}" class="nav-link pr-4 watch">Ver post</a> -->
              <a href="/pages/post.html?idpost=${post.id}" class="nav-link pr-4 watch">Comentarios (${getCommentsLength(post.id)}) </a>
            </div>
          </div>
          
      </li>
      `
  });
  let list__koders = document.querySelector('.list__koders')
  list__koders.innerHTML = acc
}

const printPost = (objPost)=>{
  let {id, userId, title, body} = objPost
  document.querySelector('.card-title').innerText = title
  document.querySelector('.card-text.name').innerText = userId
  document.querySelector('.card-text.body').innerText = body
}

const printUser = (objUser)=>{
  let {id, name, phone, email, website, address, company}=objUser
  document.querySelector('.card-title').innerText = name
  document.querySelector('.card-text.phone').innerText = "Tel.: " + phone
  document.querySelector('.list-group-item.address').innerText = "Ciudad: " + address.city
  document.querySelector('.list-group-item.company').innerText = "Compañia: " + company.name
  document.querySelector('.card-link.mail').innerText = email
  document.querySelector('.card-link.webpage').innerText = website
}
const printComments = (comments) => {
  
  let acc='<h3>Comentarios</h3>';
  comments.forEach(comment => {
    let {id, postId, name, email, body} = comment
    acc += `
      <li class="list-group-item py-5">
          <div class="d-flex justify-content-between align-items-center mt-1">
            <h4 class="pr-4 ">${name}</h4>
            <h5  class="pr-4 ms-3">${email}</h5>
          </div>
          <p class="pr-4 ">${body}</p>  
      </li>
      `
  });
  let list__comments = document.querySelector('.list__comments')
  list__comments.innerHTML = acc
}

const requestPosts = new XMLHttpRequest()
requestPosts.addEventListener('readystatechange', () => {
  if(requestPosts.readyState !== 4) {
      return 
  } else {
      if(requestPosts.status >= 200 && requestPosts.status <= 299){
          const response  = requestPosts.responseText
          const objResponse = JSON.parse(response)
          console.log(objResponse)
          printPosts(objResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})

let users =[];
const requestUsers = new XMLHttpRequest()
requestUsers.addEventListener('readystatechange', () => {
  if(requestUsers.readyState !== 4) {
      return 
  } else {
      if(requestUsers.status >= 200 && requestUsers.status <= 299){
          const response  = requestUsers.responseText
          const usersResponse = JSON.parse(response)
          users = [...usersResponse]
          console.log(users )
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
  
let comments =[];
const requestComments = new XMLHttpRequest()
requestComments.addEventListener('readystatechange', () => {
  if(requestComments.readyState !== 4) {
      return 
  } else {
      if(requestComments.status >= 200 && requestComments.status <= 299){
          const response  = requestComments.responseText
          const commentsResponse = JSON.parse(response)
          comments = [...commentsResponse]
          console.log(comments )
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})

let commentsById=[]
const requestCommentsById = new XMLHttpRequest()
requestCommentsById.addEventListener('readystatechange', () => {
  if(requestCommentsById.readyState !== 4) {
      return 
  } else {
      if(requestCommentsById.status >= 200 && requestCommentsById.status <= 299){
          const response  = requestCommentsById.responseText
          const commentsResponse = JSON.parse(response)
          commentsById = [...commentsResponse]
          console.log(commentsById )
          printComments(commentsById)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})

const requestUser = new XMLHttpRequest()
requestUser.addEventListener('readystatechange',()=>{
  if (requestUser.readyState !== 4) {
    return
  }else{
    if (requestUser.status>=200 && requestUser.status<=299) {
      const response = requestUser.responseText
      const userResponse = JSON.parse(response)
      const user = userResponse
      console.log(user)
      printUser(user)
    } else {
      console.log('No se pudo ejecutar')
    }
  }
})

const requestPost = new XMLHttpRequest()
requestPost.addEventListener('readystatechange',()=>{
  if (requestPost.readyState !== 4) {
    return
  }else{
    if (requestPost.status>=200 && requestPost.status<=299) {
      const response = requestPost.responseText
      const postResponse = JSON.parse(response)
      const post = postResponse
      console.log(post)
      printPost(post)
    } else {
      console.log('No se pudo ejecutar')
    }
  }
})



/* Pagina principal - Lista de Posts */
if (window.location.pathname === '/pages/tareas.html') {
  // Abrir la conexion a POSTS
  requestPosts.open('GET','https://jsonplaceholder.typicode.com/posts/')
  // Enviar la petición
  requestPosts.send()
  
  // Abrir la conexion a USERS
  requestUsers.open('GET','https://jsonplaceholder.typicode.com/users/')
  // Enviar la petición
  requestUsers.send()
  
  // Abrir la conexion a COMMENTS
  requestComments.open('GET','https://jsonplaceholder.typicode.com/comments/')
  // Enviar la petición
  requestComments.send()
}


/* Pagina Usuario */
if (window.location.pathname === '/pages/user.html') {
  let search = window.location.search;
  let idUser = parseInt(search.slice(search.indexOf('=')+1))
  console.log(idUser)

  
  // Abrir la conexion a USER
  requestUser.open('GET',`https://jsonplaceholder.typicode.com/users/${idUser}`)
  // Enviar la petición
  requestUser.send()  
}
/* Pagina Post */
if (window.location.pathname === '/pages/post.html') {
  let search = window.location.search;
  let idPost = parseInt(search.slice(search.indexOf('=')+1))
  console.log(idPost)


  // Abrir la conexion a POST
  requestPost.open('GET',`https://jsonplaceholder.typicode.com/posts/${idPost}`)
  // Enviar la petición
  requestPost.send()
  // Abrir la conexion a COMMENTS
  requestCommentsById.open('GET',`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`)
  // Enviar la petición
  requestCommentsById.send()

  
}