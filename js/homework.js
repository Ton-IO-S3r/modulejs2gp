// *
//  * Ejercicio 1
//  * Dado el siguiente array de objetos generar
//  * Funcion que pinte mi lista de deseos
const viewWishList = (wishListArray) =>{
  var wishlistContent = '';
  wishListArray.forEach((wish,index) =>{
    let {iditem,name,description,price,imgurl} = wish
    wishlistContent += `
      <tr class=" table-light">
          <th scope="row">${iditem}</th>
          <td>${name}</td>
          <td>${description}</td>
          <td>$ ${price}</td>
          <td><img src="${imgurl}" alt=""></td>
      </tr>
    `
  })
  let wishListTable = document.querySelector('.table-wishlist tbody');
  wishListTable.innerHTML=wishlistContent;
}
//  * Funcion que ordene por id mi lista de deseos
const sortByID = (objArray) => objArray.sort((a, b) => a.iditem < b.iditem ? -1 : a.iditem > b.iditem ? 1 : 0);
//  * Funcion que ordene por nombre de producto mi lista de deseos
const sortByName = (objArray) => objArray.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0);
//  * Funcion que ordene por precio mi lista de deseos
const sortByPrice = (objArray) => objArray.sort((a, b) => a.price < b.price ? -1 : a.price > b.price ? 1 : 0);

 let wishList = [
  {
      iditem : 1,
      name : 'Adidas Grand Court',
      description : 'Adidas Grand Court Base EE7905 Tenis para Hombre',
      price : 859,
      imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
  },
  {
      iditem : 3,
      name : 'Nike Carreras',
      description : 'Nike Carreras de mujer',
      price : 1200,
      imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
  },
  {
      iditem : 2,
      name : 'Nike Metcon',
      description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
      price : 990,
      imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
  }
]

viewWishList(wishList)
debugger
sortByID(wishList)
viewWishList(wishList)
debugger
sortByName(wishList)
viewWishList(wishList)
debugger
sortByPrice(wishList)
viewWishList(wishList)
/**
* Estudiar Eventos 
* https://www.w3schools.com/js/js_events.asp
* https://developer.mozilla.org/es/docs/Web/Events
* https://www.javascripttutorial.net/javascript-dom/javascript-events/
*/