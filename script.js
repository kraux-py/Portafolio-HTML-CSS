document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 480) {
            navbar.classList.remove('active');
        }
    });
});
