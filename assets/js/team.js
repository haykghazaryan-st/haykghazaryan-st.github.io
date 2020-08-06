$(document).ready(function () {
    $('.sidenav-link').click(function() {
        $('html, body').animate({
            scrollTop: $(this.dataset.id).offset().top
        }, 300);
    });

    $(".slider").slick({
        slidesToShow: 2,
        appendArrows: $('.slider-arrows'),
        prevArrow: $('.slie-prev'),
        nextArrow: $('.slie-next')
      });
});