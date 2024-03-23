let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let navbar = document.querySelector('navbar');
let navLinks = document.querySelectorAll('navbar a');

hamburger.addEventListener('click',toggleMenu)

navLinks.forEach((link)=>{
link.addEventListener('click',removeMenu)
})

function toggleMenu(){
  nav.classList.toggle('nav-width');
  navbar.classList.toggle('navbar-display');
  hamburger.classList.toggle('hamburger-click');
}

function removeMenu(){
  nav.classList.remove('nav-width');
  navbar.classList.remove('navbar-display');
  hamburger.classList.remove('hamburger-click');
}