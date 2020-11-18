// slick slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 5000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
    $('.slider2').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 3000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: true,
    });
});