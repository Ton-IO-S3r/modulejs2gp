console.log('BOM - Browser Object Model')

let koders =[
  {
    id: 1,
    name: 'Jorge',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laborum tempore maxime aliquam nemo cumque',
    git: '/dered-dev',
    imgKoder:'https://avatars.githubusercontent.com/u/2187296?v=4'
  },
  {
    id: 2,
    name: 'Antonio',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laborum tempore maxime aliquam nemo cumque',
    git: '/Ton-IO-S3r',
    imgKoder:'https://avatars.githubusercontent.com/u/44756702?v=4'
  },
  {
    id: 3,
    name: 'Aaron',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laborum tempore maxime aliquam nemo cumque',
    git: '/AaronMendozaG',
    imgKoder:'https://avatars.githubusercontent.com/u/82552793?v=4'
  },
  {
    id: 4,
    name: 'Ferdinand',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laborum tempore maxime aliquam nemo cumque',
    git: '/Ferdinand-Bracho',
    imgKoder:'https://avatars.githubusercontent.com/u/82552824?v=4'
  },
  {
    id: 5,
    name: 'Yair',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laborum tempore maxime aliquam nemo cumque',
    git: '/yairavalos',
    imgKoder:'https://avatars.githubusercontent.com/u/82552876?v=4'
  },
];
if (window.location.pathname === '/pages/clase.html') {
  const domList = document.querySelector('.domList')
  let acc=''
  koders.forEach(koder=>{
    let {id, name, git} = koder
    acc += `
        <li class="list-group-item d-flex justify-content-between">
         <h3>${name}</h3>
         <div>
          <a class="btn btn-info profile mx-4" href='/pages/koder.html?idkoder=${id}'>Profile</a>
          <a class="btn btn-secondary mx-4 github" href="https://github.com${git}" target='_blank'>Github</a>
         </div> 
        </li>
    `
    
  })
  domList.innerHTML=acc
}
if (window.location.pathname === '/pages/koder.html') {
  let search = window.location.search;
  let idkoder = parseInt(search.slice(search.indexOf('=')+1))
  console.log(idkoder)

  let koderObject = koders.filter(koder => koder.id == idkoder)[0]

  console.log(koderObject)

  const printKoder = (objKoder)=>{
    let {id, name, bio, git, imgKoder}=objKoder
    document.querySelector('.card-img-top').setAttribute('src',`${imgKoder}`)
    document.querySelector('.card-title').innerText = `Koder ${id}: ${name}`
    document.querySelector('.card-text').innerText = bio
    document.querySelector('.btn-primary').innerText = git
    document.querySelector('.btn-primary').setAttribute('href',`https://github.com${git}`)
    document.querySelector('.btn-primary').setAttribute('target',`_blank`)
  }
  printKoder(koderObject)
}


/**
 * AJAX. Asyncronous Java Script And XML
 * JSON
 * XHR -> xmlhttprequest
 * Fetch
 */


// Instanciarlo
// Abrir la conexion
// Enviar la petición

const printPosts = (arr) => {
  let acc = ''
  arr.forEach(post => {
      acc += `
      <li class="list-group-item d-flex justify-content-between">
          <p class="pr-4">${post.id}</p> <br>
          <p class="pr-4">${post.title}</p>
          <p class="pr-4">${post.body}</p>
          <a href="/post.html?idpost=${post.id}" class="pr-4">Ver post</a>
          
      </li>
      `
  });
  let list__koders = document.querySelector('.list__koders')
  list__koders.innerHTML = acc
}

const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/posts/')
request.addEventListener('readystatechange', () => {
  if(request.readyState !== 4) {
      return 
  } else {
      if(request.status >= 200 && request.status <= 299){
          const response  = request
          const objectResponse = JSON.parse(response.responseText)
          console.log(objectResponse)
          printPosts(objectResponse)
      } else {
          console.log('No se pudo ejecutar')
      }
  } 
})
request.send()