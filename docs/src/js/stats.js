document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  document.querySelectorAll("[data-years-since]").forEach(function (el) {
    var since = parseInt(el.dataset.yearsSince, 10);
    if (!isNaN(since)) el.textContent = (year - since) + "+";
  });
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = year;
  });
  document.querySelectorAll("[data-cta-location]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "cta_click", { location: el.dataset.ctaLocation });
      }
    });
  });
});
