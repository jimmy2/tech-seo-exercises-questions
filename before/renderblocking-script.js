document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.add-to-cart');

    addToCartButton.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('show-mobile-nav');
    });
});