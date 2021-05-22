console.log('BOM - Browser Object Model')

let koders =[
  {
    id: 1,
    name: 'Jorge',
    bio: 'lorem lorem lorem  lorem',
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
]
if (window.location.pathname='clase.html') {
  const domList = document.querySelector('.domList')
  let acc=''
  koders.forEach(koder=>{
    let {id, name, bio, git, imgKoder} = koder
    acc += `
        <li>${name}</li>

    `
    
  })
  domList.innerHTML=acc
}


let search = window.location.search;
let idkoder = parseInt(search.slice(search.indexOf('=')+1))
console.log(idkoder)

let koderObject = koders.filter(koder => koder.id == idkoder)[0]

console.log(koderObject)

const printKoder = (objKoder)=>{
  let {id, name, bio, git, imgKoder}=objKoder
  document.querySelector('.card-img-top').setAttribute('src',`${imgKoder}`)
  document.querySelector('.card-title').innerText = `${id}: ${name}`
  document.querySelector('.card-text').innerText = bio
  document.querySelector('.btn-primary').innerText = git
  document.querySelector('.btn-primary').setAttribute('href',`https://github.com${git}`)
  document.querySelector('.btn-primary').setAttribute('target',`_blank`)
}
printKoder(koderObject)
