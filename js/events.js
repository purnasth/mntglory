/*==================================================
        [ Owl Carousel ]
        ==================================================*/
jQuery("#events-section .owl-carousel").each(function () {
  var app_slider = jQuery(this);
  app_slider.owlCarousel({
    items: app_slider.data("desk_num"),
    loop: app_slider.data("loop"),
    margin: app_slider.data("margin"),
    nav: app_slider.data("nav"),
    dots: app_slider.data("dots"),
    autoplay: app_slider.data("autoplay"),
    animateOut: app_slider.data("animate"),
    autoplayTimeout: app_slider.data("autoplay-timeout"),
    navText: [
      "<i class='ion-ios-arrow-back'></i><span></span>",
      "<span></span><i class='ion-ios-arrow-forward'></i>",
    ],
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: app_slider.data("mob_sm"),
        nav: false,
      },
      // breakpoint from 480 up
      480: {
        items: app_slider.data("mob_num"),
        nav: false,
      },
      // breakpoint from 786 up
      767: {
        items: app_slider.data("tab_num"),
      },
      // breakpoint from 1023 up
      1024: {
        items: app_slider.data("lap_num"),
      },
      1199: {
        items: app_slider.data("desk_num"),
      },
    },
  });
});
