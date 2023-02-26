$(document).ready(function () {
  $(".owl-carousel .carousel-item").each(function () {
    $(this).parent().append($(this).clone());
  });

  $(".owl-carousel").owlCarousel({
    slideBy: 1,
    navText: [
      `<svg width="36" height="27" viewBox="0 0 36 27"><use xlink:href="#arrow-left" /></svg>`,
      `<svg width="36" height="27" viewBox="0 0 36 27"><use xlink:href="#arrow-right" /></svg>`,
    ],
    responsive: {
      0: { items: 1, margin: 20, dots: true, dotsEach: 1 },
      576: { items: 2, margin: 20, dots: true, dotsEach: 1 },
      768: { items: 2, margin: 20, nav: true, dots: false },
      1200: { items: 2, margin: 50, nav: true, dots: false },
      1800: { items: 3, margin: 75, nav: true, dots: false },
    },
    dots: false,
  });

});
