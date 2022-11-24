let header = document.querySelector('header')

window.addEventListener('scroll', function(){
header.classList.toggle('sticky', window.scrollY > 0)

})

let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')
let ico = document.querySelector('.ico i')

menu.onclick = function() {
  
  menu.classList.toggle('ico');
  navbar.classList.toggle('open')
}