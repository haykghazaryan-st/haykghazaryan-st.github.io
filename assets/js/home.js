$(document).ready(function () {
  // var header = document.getElementById("header");
  // var main = document.getElementsByTagName("main")[0];
  // var sticky = main.offsetTop;

  // window.onscroll = function () {
  //   myFunction();
  // };

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
  $(".slider").slick({
    slidesToShow: 2,
    appendArrows: $(".slider-arrows"),
    prevArrow: $(".slie-prev"),
    nextArrow: $(".slie-next"),
  });
});
