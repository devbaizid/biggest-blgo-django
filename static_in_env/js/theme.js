'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // ---------------------------------------------- //
    // Search Bar
    // ---------------------------------------------- //
    document.querySelector('.search-btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.search-area').style.display = 'block';
    });
    document.querySelector('.search-area .close-btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.search-area').style.display = 'none';
    });

    // ---------------------------------------------- //
    // Navbar Toggle Button
    // ---------------------------------------------- //
    document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.navbar-toggler').classList.toggle('active');
    });

    // ---------------------------------------------- //
    // Lightbox
    // ---------------------------------------------- //
    const lightbox = GLightbox({
        touchNavigation: true,
    });
});
