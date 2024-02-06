$(function () {
  $(".main_slide").slick({
    arrows: true,
    autoplay: false,
    pauseOnHover: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // fade: true,
  });

  $(".btn").on("click", function () {
    $(".right_banner").toggleClass("on");
  });

  $(".totop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 800) {
      $(".totop").addClass("on");
      $(".header").addClass("");
    } else {
      $(".totop").removeClass("on");
      $(".header").removeClass("");
    }
  });

  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".mbt").on("click", function () {
    $(".gnb").toggleClass("on");
    $(".h1").toggleClass("on");
    $(".header").toggleClass("on");
    $(".icon").toggleClass("on");
  });
});
