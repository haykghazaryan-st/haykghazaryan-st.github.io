$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    appendArrows: $(".slider-arrows"),
    prevArrow: $(".slie-prev"),
    nextArrow: $(".slie-next"),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
