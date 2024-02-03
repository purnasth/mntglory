// $(document).ready(function () {
//   var silder = $("#testimonials .owl-carousel");
//   silder.owlCarousel({
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: false,
//     items: 1,
//     stagePadding: 20,
//     center: true,
//     nav: false,
//     margin: 50,
//     dots: true,
//     loop: true,
//     responsive: {
//       0: { items: 1 },
//       480: { items: 2 },
//       575: { items: 2 },
//       768: { items: 2 },
//       991: { items: 3 },
//       1200: { items: 4 },
//     },
//   });
// });

// var myLink = document.querySelector('a[href="#"]');
// myLink.addEventListener("click", function (e) {
//   e.preventDefault();
// });

(function ($) {
  "use strict";

  // testimonial Active
  $(".testi-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: true,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });
})(jQuery);
