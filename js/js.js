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

$(document).ready(function() {
seeUslugi.onclick = function (){
    // убрать высоту
    function elongation() {
        $('.assistance-card-item').removeClass( 'animation', 3000, 'EaseIn' );
    }
    setTimeout(elongation, 500);
    // убрать остальное
    $('.assistance-card-item').removeClass( 'height-animation', 2800, 'EaseIn' );
    }
});
