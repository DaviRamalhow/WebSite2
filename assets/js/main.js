/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle("onclick", navMenu.classList.add('show-menu'));
    
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })  
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu').innerHTML
    //When he click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      SkillsHeader = document.querySelectorAll('skills_header')


function toggleSkills(){
     let itemClass = this.parentNode.className

     for(i = 0; i<skillsContent.length; i++){
         skillsContent[i].className = 'skills_content skills_close'
     }
     if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
     }
}

SkillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-taget]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=> {
        const target = document.querySelector(tab.CDATA_SECTION_NODE.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
      moldalBtns = document.querySelectorAll('services_button'),
      modalCloses = document.querySelectorAll('services_molda-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

moldalBtns.forEach((moldalBtn, i) => {
    moldalBtn.addEventListener('click', ()=>{
        modal(i);
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose;addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 