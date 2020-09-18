function initYear() {
  $("#year").text(new Date().getFullYear());
}

$(document).ready(function () {
  // initYear();

  $('.splash').on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if(!isMenuOpen) {
      $('.logo').toggle();
    }
  });

  let isMenuOpen = false;
  // TOGGLE MENU ACTIVE STATE
  $('.nav-toggle').click(function (e) {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;
    $('body').toggleClass("overflow-hidden");   
    if(isMenuOpen) {
      $('.logo').toggle();
    }
    
    $('#menu').attr('hidden', !isMenuOpen);
    $(this).attr('aria-expanded', isMenuOpen);
    $('#nav').toggleClass('nav-open');
  });
  // menuToggle.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   isMenuOpen = !isMenuOpen;

  //   // toggle a11y attributes and active class
  //   menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  //   menu.hidden = !isMenuOpen;
  //   logo.hidden = !isMenuOpen;
  //   nav.classList.toggle("nav-open");
  // });

  // TRAP TAB INSIDE NAV WHEN OPEN
  // nav.addEventListener("keydown", (e) => {
  //   // abort if menu isn't open or modifier keys are pressed
  //   if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
  //     return;
  //   }

  //   // listen for tab press and move focus
  //   // if we're on either end of the navigation
  //   const menuLinks = menu.querySelectorAll(".nav__link");
  //   if (e.keyCode === 9) {
  //     if (e.shiftKey) {
  //       if (document.activeElement === menuLinks[0]) {
  //         menuToggle.focus();
  //         e.preventDefault();
  //       }
  //     } else if (document.activeElement === menuToggle) {
  //       menuLinks[0].focus();
  //       e.preventDefault();
  //     }
  //   }
  // });
});
