document.addEventListener("DOMContentLoaded", function () {
  var el_autohide = document.querySelector(".autohide");
  var navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (!el_autohide) return;

  var last_scroll_top = 0;
  var TOP_THRESHOLD = 80;
  var DIRECTION_THRESHOLD = 5;

  window.addEventListener("scroll", function () {
    var scroll_top = Math.max(window.scrollY, 0);

    if (scroll_top < TOP_THRESHOLD) {
      el_autohide.classList.remove("scrolled-down");
      el_autohide.classList.add("scrolled-up");
    } else if (scroll_top < last_scroll_top - DIRECTION_THRESHOLD) {
      el_autohide.classList.remove("scrolled-down");
      el_autohide.classList.add("scrolled-up");
    } else if (scroll_top > last_scroll_top + DIRECTION_THRESHOLD) {
      el_autohide.classList.remove("scrolled-up");
      el_autohide.classList.add("scrolled-down");
    }

    last_scroll_top = scroll_top;
  }, { passive: true });
});
