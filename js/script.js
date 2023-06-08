$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outside offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
(function () {
  "use strict";

  /**
   * ///? Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: ".portfolio-details-lightbox",
    width: "90%",
    height: "90vh",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();

/*--------------------------------------------------------------
# MOTTO HOVER ANIMATION
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# SCROLL
--------------------------------------------------------------*/
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

/*--------------------------------------------------------------
    # PARALLAX
    --------------------------------------------------------------*/

// POSITION OF THE HEADER IS FIXED
//       let header = document.querySelector("header");
// let search = document.querySelector(".form-search");
// let searchInitialY = search.offsetTop;

// window.addEventListener("scroll", () => {
//   let value = window.scrollY;
//   header.style.transition =
//     "transform 0.5s ease-out, opacity 0.25s ease-out";
//   header.style.transform = `scale(${1 - value / 500})`;
//   header.style.opacity = `${1 - value / 200}`;

//   let searchTranslateY = (value - searchInitialY) * -0.5;
//   if (value < searchInitialY) {
//     searchTranslateY = 0;
//   }
//   search.style.transition =
//     "transform 0.5s ease-out, opacity 0.25s ease-out";
//   search.style.transform = `translateY(${searchTranslateY}px) scale(${1 - value / 500})`;
//   // search.style.opacity = `${1 - value / 200}`;

//   if (value > 0) {
//     header.style.position = "fixed";
//   } else {
//     header.style.position = "absolute";
//   }
// });

// ZOOM OUT EFFECT
// let header = document.querySelector("header");
// let search = document.querySelector(".form-search");
// let searchInitialY = search.offsetTop;
// let searchBg = search.querySelector(".search-bg");

// window.addEventListener("scroll", () => {
//   let value = window.scrollY;
//   header.style.transition =
//     "transform 0.5s ease-out, opacity 0.25s ease-out";
//   header.style.transform = `scale(${1 - value / 500})`;
//   header.style.opacity = `${1 - value / 200}`;

//   let searchTranslateY = (value - searchInitialY) * -0.5;
//   if (value < searchInitialY) {
//     searchTranslateY = 0;
//   }
//   search.style.transition =
//     "transform 0.5s ease-out, opacity 0.25s ease-out";
//   search.style.transform = `translateY(${searchTranslateY}px) scale(${1 - value / 500})`;
//   search.style.opacity = `${1 - value / 200}`;

//   let bgTranslateY = (value - searchInitialY) * -0.25;
//   if (value < searchInitialY) {
//     bgTranslateY = 0;
//   }
//   searchBg.style.transform = `translateY(${bgTranslateY}px)`;

//   if (value > 0) {
//     header.style.position = "fixed";
//   } else {
//     header.style.position = "absolute";
//   }
// });

// let header = document.querySelector("header");
// let search = document.querySelector(".form-search");
// let searchInitialY = search.offsetTop;
// let searchBg = search.querySelector(".search-bg");

// window.addEventListener("scroll", () => {
//   let value = window.scrollY;

//   let headerTranslateY = (value - searchInitialY) * -0.5;
//   if (value < searchInitialY) {
//     headerTranslateY = 0;
//   }
//   header.style.transition = "transform 1s ease-out, opacity 0.5s ease-out";
//   header.style.transform = `translateY(${headerTranslateY}px) scale(${
//     value < 250 ? 1 + value / 250 : 1.5
//   })`;
//   header.style.opacity = `${1 - value / 200}`;

//   search.style.transition = "transform 1s ease-out, opacity 0.25s ease-out";
//   search.style.transform = `scale(${value < 250 ? 1 - value / 250 : 0.1})`;
//   search.style.opacity = `${1 - value / 200}`;

//   let bgTranslateY = (value - searchInitialY) * -0.25;
//   if (value < searchInitialY) {
//     bgTranslateY = 0;
//   }
//   searchBg.style.transform = `translateY(${bgTranslateY}px)`;

//   if (value > 0) {
//     header.style.position = "fixed";
//   } else {
//     header.style.position = "absolute";
//   }
// });

var swiper = new swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

// Our team book animation
$(document).ready(function () {
  $(".search-query").hide();
  $(".search-query").fadeIn({ queue: false, duration: "slow" });
  $(".search-query").animate({ "margin-top": "-100px" }, 2000);
});

// PRELOADER
// window.addEventListener("load", () => {
//     const preloader = document.querySelector("#preloader");
//     preloader.style.display = "none";
// });

/**
 * Preloader
 */
// let preloader = select("#preloader");
// if (preloader) {
//   window.addEventListener("load", () => {
//     preloader.remove();
//   });
// }


console.log("wtf");