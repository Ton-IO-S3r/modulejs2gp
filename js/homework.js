let koders =[
  {
      id: 10,
      name: 'Antonio',
  },
  {
      id: 5,
      name: 'Ferdinand',
  },
  {
      id: 3,
      name: 'Rosa',
  },
  {
      id: 1,
      name: 'Yair',
  },
  {
      id: 2,
      name: 'Victor',
  },
  {
      id: 8,
      name: 'Omar'
  },
]
let candidates = [...koders];
let enrolledKoders=[
  {
    id: 48,
    name: 'Pedro'
  }
];

const kodersTables = document.querySelectorAll('.table')
const resetBtn = document.querySelector('.reset')
const showCandidatesBtn = document.querySelector('.showKoders')

resetBtn.addEventListener('click', ()=>{
  // candidates = [...koders]
  
  candidates = candidates.concat(enrolledKoders)
  enrolledKoders = []
  
  printKoders()
})

showCandidatesBtn.addEventListener('click', ()=>{
  printKoders()
})


kodersTables.forEach((table)=>{
  table.addEventListener('click',(event)=>{
    var myElement = event.target;
    myElement.dataset.id != undefined && myElement.classList.contains('enroll') ? EnrollKoder(myElement.dataset.id) : myElement.dataset.id != undefined && myElement.classList.contains('withdraw') ? WithdrawKoder(myElement.dataset.id) : ''
  })
})


const printKodersTable = (KoderListArray, selector, table_type) =>{
  var KoderlistContent = '';
  KoderListArray.forEach((Koder,index) =>{
    let {id,name} = Koder
    KoderlistContent += `
      <tr class=" table-light">
          <th scope="row">${id}</th>
          <td>${name}</td>
          <td><button class="btn btn-${table_type === 'candidates' ? 'primary enroll':'secondary withdraw'}" data-id=${id}>${table_type === 'candidates' ? 'Inscribir':'Dar de baja'}</button></td>
      </tr>
    `
  })
  let KoderListTable = document.querySelector(selector);
  KoderListTable.innerHTML=KoderlistContent;
}
const printKoders = ()=>{
  printKodersTable(candidates,'.table-Koderlist tbody','candidates')
  printKodersTable(enrolledKoders,'.table-enrolled tbody','enrolled')
}

const EnrollKoder = (koderID)=>{
  let koder2Enroll = candidates.filter(koder => koder.id == koderID)
  enrolledKoders.push(koder2Enroll[0])
  removeKoderFromArray(koderID,candidates)
  printKoders()
}

const WithdrawKoder = (koderID) =>{
  let koder2Withdraw = enrolledKoders.filter(koder => koder.id == koderID)
  candidates.push(koder2Withdraw[0])
  removeKoderFromArray(koderID,enrolledKoders)
  printKoders();
}

const removeKoderFromArray = (koderID, array)=>{
  array.forEach((item, index) =>{
      if(item.id == koderID) array.splice(index,1)
  })
  return array
}

let loginForm = document.querySelector('#formLogin')
loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // console.log('click en enviar')
  if(document.querySelector('#idkoder').value === "") {
      console.log('Escribe un ID de Koder')
      return
  }
  if(isNaN(document.querySelector('#idkoder').value)) {
    console.log('Escribe un ID válido -> Solo se permiten números.')
    return
  }
  
  if(document.querySelector('#namekoder').value === "") {
      console.log('Escribe el nombre del Koder')
      return
  } 

  let idkoder = parseInt(document.querySelector('#idkoder').value)
  let namekoder = document.querySelector('#namekoder').value
  console.log(idkoder,namekoder)
  
  if(candidates.concat(enrolledKoders).filter(koder => koder.id===idkoder).length > 0){
    console.log('El ID ya existe')
    return
  }
  document.querySelector('#idkoder').value =''
  document.querySelector('#namekoder').value=''
  candidates.push({id: idkoder,name: namekoder})
  printKoders()
})


