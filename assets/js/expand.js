$(document).ready(function () {
  $(".sidenav-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(this.dataset.id).offset().top,
      },
      300
    );
  });
});
