//  анимация якоря
//  menu yakor
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({
                scrollTop: top,
            },
            500
        );
    });
});

// slick slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 3000,
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

// Смотреть все услуги
seeUslugi.onclick = function (){
    $('.assistance-card-item').removeClass( 'animation', 5000, 'EaseIn' );
    seeUslugi.style.display = "none";
}