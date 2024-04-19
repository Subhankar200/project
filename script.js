document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    const container = document.querySelector('.container');

    menu.addEventListener('click', function() {
        container.classList.toggle('show-menu');
    });
});

// JavaScript for toggling the navigation menu
document.getElementById("hamburger").addEventListener("click", function() {
    var nav = document.querySelector("nav ul");
    nav.classList.toggle("open"); // Toggle the "open" class
});

