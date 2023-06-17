const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
});

nav.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
})
