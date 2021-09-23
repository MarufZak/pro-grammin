const headerSlider = new Swiper('.slider',{
    wrapperClass: "slider-wrapper",
    slideClass: "slider-slide",
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    mousewheel: {
        sensitivity: 1   
    }
});
headerSlider.disable();

const wrapper = document.querySelector('.wrapper');
const intro = document.querySelector('.intro');
const introButton = document.querySelector('.intro__button');
const pro = document.querySelector('.pro');
const proContent = pro.querySelector('.pro__content');
const slider = document.querySelector('.slider');
const proContentBorder = pro.querySelector('.pro__content-border');
const nav = document.querySelector('.nav');
const navTitle = nav.querySelector('.nav__title');
const navList = nav.querySelector('.nav__list');
const navItems = nav.querySelectorAll('.nav__item');
const navButton = nav.querySelector('.nav__title');
const navCancel = nav.querySelector('.cancel');


introButton.addEventListener('click',()=>{
    intro.classList.add('slide');
    headerSlider.enable();
    slider.classList.add('active');
    navTitle.classList.add('active');
})

particlesJS.load('particles-js', '../script/particlesjs-config (1).json', function() {
    console.log('callback - particles.js config loaded');
});


const BORDER_PART_NUMBER = 10;
for (let i = 0; i < BORDER_PART_NUMBER; i++) {
    createBorderPart();
}

function createBorderPart() {
    let part = document.createElement('div');
    part.classList.add('pro__content-border-part');
    proContentBorder.append(part);
}

navTitle.addEventListener('click',(e)=>{
    navList.classList.add('active');
    wrapper.classList.add('active');
})

window.addEventListener('click',(e)=>{
    
        if (!e.target.closest('.nav') && !e.target.closest('.nav__list')) {
            navItems.forEach(item=>{
                item.classList.remove('active');
            })
            navList.classList.remove('active');
            wrapper.classList.remove('active')
        } 
    
        if (e.target.closest('.nav__title')) {
            navItems.forEach(item=>{
                item.classList.add('active');
            })
            navList.classList.add('active');
            wrapper.classList.add('active')
        } 
        
        // if(!e.target.closest('.nav') && !e.target.closest('.nav__list')){
        //     navItems.forEach(item=>{
        //         item.classList.remove('active');
        //     })
        //     navList.classList.remove('active');
        //     wrapper.classList.remove('active')
        // }
    
})

navCancel.addEventListener('click',()=>{
    navItems.forEach(item=>{
        item.classList.remove('active');
    })
    navList.classList.remove('active');
    wrapper.classList.remove('active')
})