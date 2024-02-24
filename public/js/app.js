let hamburger=document.querySelector('.hamburger');
let nav=document.querySelector('nav');
let navbar=document.querySelector('navbar');


hamburger.addEventListener('click',()=>{
  nav.classList.toggle('nav-width');
  navbar.classList.toggle('navbar-display');
  hamburger.classList.toggle('hamburger-click');
})