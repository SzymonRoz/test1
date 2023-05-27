document.addEventListener('DOMContentLoaded', function(){
const nav= document.querySelector('.navbar')
const allNavItems = document.querySelectorAll('.nav-link')
const navbar = document.querySelector('.navbar-collapse')
function addShadow(){

  if (window.scrollY>=100){
    nav.classList.add('shadow-bg')
  }  else{
    nav.classList.remove('shadow-bg')
  }
}

allNavItems.forEach(item => item.addEventListener('click', () => navbar.classList.remove('show')))
























window.addEventListener('scroll', addShadow)



})











// const navbar = document.querySelector('.navbar-collapse')
// const link = document.querySelector('a')
// function removeShow(){
// if (a='click'){
//   navbar.classList.remove('show')
// }
// }