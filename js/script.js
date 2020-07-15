$(function() {
    $(".comments__slider").slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
    $('.burger').on('click', function() {
        $('.burger,.welcome__nav').toggleClass('active')
        $('body').toggleClass('lock')
    })
    let scrollOffset;
    $(window).on('scroll', function() {
        scrollOffset = $(window).scrollTop();
        if (scrollOffset > 0) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    })
})