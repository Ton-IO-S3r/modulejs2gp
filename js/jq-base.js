console.log('jquery class')


//Shorthand document ready
$(()=>{
  console.log('Document Ready')

  for (let i = 0; i < 10; i++) {
    $('ul').append(`<li></li>`)
    $('ol').prepend(`<li></li>`)
    
  }
  $('.content').html(`<p>Hello Koders</p>`).css({'background': 'red', 'color':'white'})
    $('body').prepend(`<h1></h1>`)
    $('h1').text('Learning jquery')
})