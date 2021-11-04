const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navcolor');
    } else {
        navbar.classList.remove('navcolor');
    }
};