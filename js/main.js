/*======== Show menu ========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


/*======== Menu show  ========*/
/*======== validate if constant exists ========*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    }) 
}


/*======== Menu Hidden ========*/
/*======== Validate if constant exists ========*/ 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*========  Remove Menu Mobile ========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
})


sr.reveal(`.about-left, .about-right, .skill-title, 
            .contact-container`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.skill-list `,{
    origin: 'left',
})



