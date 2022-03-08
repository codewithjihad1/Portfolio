
// Vanilla tilt Effects
VanillaTilt.init(document.querySelectorAll(".header-social ul li a"), {
    max: 40,
    speed: 400,
    scale: 1.2
});

// Button Hover Effects
let ripple = function rippleEffect(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;

    this.style.setProperty('--x', x + 'px');
    this.style.setProperty('--y', y + 'px');
}

const aboutBtn = document.querySelector(".button");
aboutBtn.onmousemove = ripple;

let heroBtn = document.querySelector('.hero-btn button');
heroBtn.onmousemove = ripple;

let contactBtn = document.querySelector('.contact-btn button');
contactBtn.onmousemove = ripple;


// Navigation menu
let body = document.querySelector("body");
let menuBar = document.querySelector('.menu-button')
let cancelBtn = document.querySelector(".cancel-btn")

menuBar.addEventListener('click', () => {
    body.classList.add("navShow");
    menuBar.style.opacity = "0"
})

cancelBtn.addEventListener('click', () => {
    body.classList.remove('navShow')
    menuBar.style.opacity = "1"
})


// sticy nav
let navbar = document.querySelector('nav');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('sticky')
    }else {
        navbar.classList.remove('sticky')
    }
}