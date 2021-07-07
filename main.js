//'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) 
    navbar.classList.add('navbar--dark');
    else 
      navbar.classList.remove('navbar--dark');
    
});

// Handle scrolling when tapping on navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');//?
  const scrollto= document.querySelector(link);
  scrollto.scrollIntoView();
});

//contactMe btn scroll to <section 'contact'>

const contactme=document.querySelector('.home__contact');
contactme.addEventListener('click', (event)=>{
  
  const scrollto= document.querySelector('#contact');
  scrollto.scrollIntoView();
});
