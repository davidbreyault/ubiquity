const burgerButton = document.querySelector('.btn');
const headerMenu = document.querySelector('.header-navbar');
const headerMenuLinks = document.querySelectorAll('.header-navbar a');
const arrowsSlider = document.querySelector('.arrows-container .container');

function showArrowsSlider() {
    window.innerWidth >= 992 ? arrowsSlider.style.display = 'flex' : arrowsSlider.style.display = 'none';
}

function linksVisibility() {
    if (window.innerWidth < 768) {
        headerMenuLinks.forEach((link) => {
            link.style.visibility = 'hidden';
        })
        burgerButton.addEventListener('click', () => {
            headerMenuLinks.forEach((link) => {
                link.style.visibility = 'visible';
            })    
        })
    }
}

burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
    burgerButton.classList.toggle('toggle');
})

window.addEventListener('resize', () => {
    showArrowsSlider();
    if (window.innerWidth >= 768 && headerMenu.classList.contains('open')) {
        headerMenu.classList.remove('open');
        burgerButton.classList.remove('toggle');
    }
})

showArrowsSlider();
linksVisibility();