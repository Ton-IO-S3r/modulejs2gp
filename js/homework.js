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
let enrolledKoders=[];

const printKodersTable = (KoderListArray, selector, table_type) =>{
  var KoderlistContent = '';
  KoderListArray.forEach((Koder,index) =>{
    let {id,name} = Koder
    KoderlistContent += `
      <tr class=" table-light">
          <th scope="row">${id}</th>
          <td>${name}</td>
          <td><button onclick="${table_type === 'candidates' ? 'EnrollKoder':'WithdrawKoder'}(${id})">${table_type === 'candidates' ? 'Inscribir':'Dar de baja'}</button></td>
      </tr>
    `
  })
  let KoderListTable = document.querySelector(selector);
  KoderListTable.innerHTML=KoderlistContent;
}


const EnrollKoder = (koderID)=>{
  let koder2Enroll = candidates.filter(koder => koder.id == koderID)
  enrolledKoders.push(koder2Enroll[0])
  removeKoderFromArray(koderID,candidates)
  printKodersTable(candidates,'.table-Koderlist tbody','candidates')
  printKodersTable(enrolledKoders,'.table-enrolled tbody','enrolled')
}

const WithdrawKoder = (koderID) =>{
  let koder2Withdraw = enrolledKoders.filter(koder => koder.id == koderID)
  candidates.push(koder2Withdraw[0])
  removeKoderFromArray(koderID,enrolledKoders)
  printKodersTable(candidates,'.table-Koderlist tbody','candidates')
  printKodersTable(enrolledKoders,'.table-enrolled tbody','enrolled')
}

const removeKoderFromArray = (koderID, array)=>{
  array.forEach((item, index) =>{
      if(item.id == koderID) array.splice(index,1)
  })
  return array
}

let showCandidatesBtn = document.querySelector('.showKoders')
showCandidatesBtn.addEventListener('click', ()=>{
  printKodersTable(candidates,'.table-Koderlist tbody','candidates')
})