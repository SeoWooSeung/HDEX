$(function () {

    $('.main_slide').slick({
        arrows: true,
        autoplay: false,
        pauseOnHover: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // fade: true,
    });

    $('.btn').on('click', function () {
        $('.right_banner').toggleClass('on')
    })

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 800) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on')
            $('.Header').removeClass('on')
        }
    });
});