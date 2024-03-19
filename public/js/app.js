let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let navbar = document.querySelector('navbar');
let navLinks = document.querySelectorAll('navbar a');

hamburger.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  nav.classList.toggle('nav-width');
  navbar.classList.toggle('navbar-display');
  hamburger.classList.toggle('hamburger-click');
}

// Define the media query
let mediaQuery = window.matchMedia('(max-width: 800px)');

function handleMediaChange(event) {
  if (event.matches) {
    // Add event listener for small screens
    navLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  } else {
    // Remove event listener for larger screens
    navLinks.forEach(link => {
      link.removeEventListener('click', toggleMenu);
    });
  }
}

// Initial check of the media query
handleMediaChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addEventListener('change', handleMediaChange);
