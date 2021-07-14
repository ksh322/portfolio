'use strict';

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
  navbarMenu.classList.remove('open');//open?
  const scrollto= document.querySelector(link);
  scrollto.scrollIntoView({ behavior: 'smooth' });
});


//navgar toggle for small screen 
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', (event) => {
  navbarMenu.classList.toggle('open');
});


//contactMe btn scroll to <section id='contact'>

const contactme=document.querySelector('.home__contact');
contactme.addEventListener('click', (event)=>{
  
  scrollIntoView('#contact');
});

//make home slowly fade to transparent as window scrolls down
const home= document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity= 1- window.scrollY / homeheight ;
});

//show arrowup buttton when scrollingup
const arrow=document.querySelector('.arrowup');

document.addEventListener('scroll',()=>{
  if (window.scrollY >homeheight/2)
    arrow.classList.add('visible');
  else
    arrow.classList.remove('visible');
});
//handle click on arrowup button=>scrolltotop

arrow.addEventListener('click',(event)=>{
  scrollIntoView('#home');
});

function scrollIntoView(selector){
  const scrollto= document.querySelector(selector);
  scrollto.scrollIntoView({ behavior: 'smooth' });
  
}

//Projects

const workBtnContainer=document.querySelector('.work__categories');
const projectContainer=document.querySelector('.work__projects');
const projects=document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(event)=>{
  const filter= event.target.dataset.filter||event.target.parentNode.dataset.filter;
  console.log(filter);
  if (filter==null)
    return;
  
    //remove selection from the previous item and select new one
  const active= document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  event.target.classList.add('selected');
  projects.forEach((project)=>{
    if (filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
      }
  });
  
});

//1모든 섹션요소를 가지고온다
//2intersectionObserver을 이용해 모든 섹션을 관찰
//3 보여지는 섹션에 해당하는 메뉴아이템 활성화

const sectionID=['#home','#about','#skills','#work','#contact',];
const sections = sectionID.map(id=>document.querySelector(id));
const navitems = sectionID.map(id=>document.querySelector(`[data-link="${id}"]`));
console.log(navitems);

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,

};

const observerCallback=(entries, observer)=>{
  entries.forEach(entry=>{});
  console.log(entry.target);
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section =>observer(section));


