const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
});

/* menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
}); */