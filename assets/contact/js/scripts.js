// Toggle navbar on mobile devices
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// Auto hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }
    prevScrollpos = currentScrollPos;
}
$(window).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

// Google maps

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(10.7735561,106.6606763), zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}



