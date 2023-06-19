const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

function changeHamburger () {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
}

hamburger.addEventListener('click', () => {
    changeHamburger ();
});

nav.addEventListener('click', () => {
    changeHamburger ();
})
