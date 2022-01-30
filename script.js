const showMenu = (toggleId,navId) =>{
  const toggle=document.getElementById(toggleId),
  nav=document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 