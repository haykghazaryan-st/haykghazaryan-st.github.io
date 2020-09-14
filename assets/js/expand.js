$(document).ready(function () {
  const menuItems = $(".sidenav-link");

  menuItems.click(function (e) {
    const href = $(this).attr("href");
    const offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: offsetTop - 50,
        },
        300
      );
    e.preventDefault();
  });

  const scrollItems = menuItems.map(function () {
    const item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  $(window).scroll(function () {
    const fromTop = $(this).scrollTop() + 50;
    let cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });

    cur = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : "";
    menuItems
      .removeClass("active")
      .filter("[href='#" + id + "']")
      .addClass("active");
  });
});
