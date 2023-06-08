// FROM INDEX.HTML

// For About Us Slider
var swiper = new Swiper(".blog-slider", {
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

jQuery(".funfact-number").each(function () {
  var $this = jQuery(this);
  var parts = $this.text().match(/^(\d+)(.*)/);
  if (parts.length < 2) return;

  var scale = 20;
  var delay = 50;
  var end = 0 + parts[1];
  var next = 0;
  var suffix = parts[2];

  var runUp = function () {
    var show = Math.ceil(next);
    $this.text("" + show + suffix);
    if (show == end) return;
    next = next + (end - next) / scale;
    window.setTimeout(runUp, delay);
  };
  runUp();
});

// For Smooth scroll behavior.
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        300,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// For FAQ Section
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

//? Parallax
if (window.innerWidth > 768) {
  let header = document.querySelector("header");
  let search = document.querySelector(".form-search");
  let searchInitialY = search.offsetTop;
  let searchBg = search.querySelector(".search-bg");
  let searchInput = search.querySelector(".form-search input");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    let headerTranslateY = (value - searchInitialY) * -0.5;
    if (value < searchInitialY) {
      headerTranslateY = 0;
    }
    header.style.transition = "transform 1s ease-out, opacity 0.5s ease-out";
    header.style.transform = `translateY(${headerTranslateY}px) scale(${
      value < 250 && !searchInput.matches(":focus") ? 1 + value / 250 : 1.5
    })`;
    header.style.opacity = `${1 - value / 200}`;

    search.style.transition = "transform 1s ease-out, opacity 0.25s ease-out";
    search.style.transform = `scale(${
      value < 250 && !searchInput.matches(":focus") ? 1 - value / 250 : 0.1
    })`;
    search.style.opacity = `${1 - value / 200}`;

    let bgTranslateY = (value - searchInitialY) * -0.25;
    if (value < searchInitialY) {
      bgTranslateY = 0;
    }
    searchBg.style.transform = `translateY(${bgTranslateY}px)`;

    if (value > 0) {
      header.style.position = "fixed";
    } else {
      header.style.position = "absolute";
    }
  });

  searchInput.addEventListener("focus", () => {
    header.style.transition = "none";
    search.style.transition = "none";
  });

  searchInput.addEventListener("blur", () => {
    header.style.transition = "transform 1s ease-out, opacity 0.5s ease-out";
    search.style.transition = "transform 1s ease-out, opacity 0.25s ease-out";
  });
}

setTimeout(function () {
  document.getElementById("preloader").style.display = "none";
}, 2000);

// Scroll Reveal Effect
const sr = ScrollReveal({
  distance: "80px",
  duration: 2600,
  delay: 450,
  reset: true,
});
if (window.innerWidth > 768) {
  sr.reveal(".site-navbar-top", { delay: 2300, origin: "top" });
  sr.reveal(".site-navbar", { delay: 2100, origin: "top", reset: false });
  sr.reveal("header", { delay: 2700, origin: "top", reset: false });
  sr.reveal(".form-search", {
    delay: 2700,
    origin: "left",
    reset: false,
  });
}

sr.reveal(".site-navbar-top", { delay: 2300, origin: "top" });
sr.reveal(".site-navbar", { delay: 2100, origin: "top", reset: false });
sr.reveal("header", { delay: 2700, origin: "top", reset: false });
sr.reveal(".form-search", { delay: 2700, origin: "left", reset: false });
// sr.reveal(".scroll", { delay: 2800, origin: "bottom", distance: "40px" });
// sr.reveal(".scroll span", {
//   delay: 2800,
//   origin: "bottom",
//   distance: "40px",
// });
// sr.reveal(".video-play-button", {
//   delay: 800,
//   origin: "bottom",
//   distance: "40px",
// });

sr.reveal(".section-title", {
  delay: 200,
  origin: "right",
  duration: 1600,
});

sr.reveal(".blog-slider__img", {
  delay: 100,
  origin: "left",
  // beforeReveal: function (el) {
  //   el.style.transform = "rotate(-45deg)";
  // },
  // afterReveal: function (el) {
  //   el.style.transform = "rotate(0deg)";
  // },
});
sr.reveal(".blog-slider__pagination", { delay: 100, origin: "top" });

sr.reveal(".image-flip", { delay: 300, origin: "left" });

sr.reveal(".book", { delay: 300, origin: "left" });

sr.reveal("#class-section p", {
  delay: 400,
  origin: "bottom",
});

sr.reveal(".at-funfact-wrap", { delay: 300, origin: "top" });

sr.reveal(".portfolio-wrap img", { delay: 300, origin: "left" });

sr.reveal(".logos", { delay: 100, origin: "top" });

// sr.reveal("p", { delay: 300, origin: "left" });
const paragraphs = document.querySelectorAll(
  "p:not(#faq p, #footer-section p)"
);

sr.reveal(paragraphs, { delay: 300, origin: "left" });

sr.reveal("#footer-section", { delay: 100, origin: "top" });

// sr.reveal(".owl-carousel", { delay: 300, origin: "top" });

// sr.reveal(".input-container", { delay: 300, origin: "top" });

window.addEventListener("DOMContentLoaded", function () {
  let arrowUpIcon = document.querySelector(".arrow-up");

  arrowUpIcon.addEventListener("click", scrollToTop);
  arrowUpIcon.addEventListener("touchstart", scrollToTop);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// For active class
let menuItems = document.querySelectorAll(".site-menu li");
let section = document.querySelectorAll("section");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// function activeMenu() {
//   let scrollPosition = document.documentElement.scrollTop;

//   section.forEach(function (current) {
//     if (
//       current.offsetTop <= scrollPosition &&
//       current.offsetTop + current.offsetHeight > scrollPosition
//     ) {
//       menuItems.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       document
//         .querySelector('a[href="#' + current.getAttribute("id") + '"]')
//         .classList.add("active");
//     }
//   });
// }

// function activeMenu() {
//   let len = sec.length;
//   while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
//   menuItems.forEach(ltx.classList.remove("active"));
//   menuItems[len].classList.add("active");
// }

// Heart Animation on Click
let anchors = document.querySelectorAll("button.heart");

Array.prototype.forEach.call(anchors, function (anchor) {
  anchor.addEventListener("click", explode);
});

function explode(e) {
  [].map.call(anchors, function (el) {
    el.classList.toggle("active");
  });
  let x = e.clientX;
  let y = e.clientY;
  let c = document.createElement("canvas");
  let ctx = c.getContext("2d");
  let ratio = window.devicePixelRatio;
  let particles = [];

  c.style.position = "fixed";
  c.style.left = x - 50 + "px";
  c.style.top = y - 50 + "px";
  c.style.pointerEvents = "none";
  c.style.width = 100 + "px";
  c.style.height = 100 + "px";
  c.width = 100 * ratio;
  c.height = 100 * ratio;

  document.body.appendChild(c);

  function Particle() {
    return {
      x: c.width / 2,
      y: c.height / 2,
      radius: 10,
      color: "rgb(" + [r(100, 255), r(100, 255), r(100, 255)].join(",") + ")",
      rotation: r(0, 360, true),
      speed: 4,
      friction: 0.9,
      opacity: r(0, 0.5, true),
      yVel: 0,
      gravity: 0,
    };
  }

  for (let i = 0; ++i < 15; ) {
    particles.push(Particle());
  }

  function render() {
    ctx.clearRect(0, 0, c.width, c.height);

    particles.forEach(function (p, i) {
      angleTools.moveOnAngle(p, p.speed);

      p.opacity -= 0.01;
      p.speed *= p.friction;
      p.radius *= p.friction;

      p.yVel += p.gravity;
      p.y += p.yVel;

      if (p.opacity < 0) return;
      if (p.radius < 0) return;

      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    });
  }

  (function renderLoop() {
    requestAnimationFrame(renderLoop);
    render();
  })();

  setTimeout(function () {
    document.body.removeChild(c);
  }, 3000);
}

let angleTools = {
  getAngle: function (t, n) {
    let a = n.x - t.x,
      e = n.y - t.y;
    return (Math.atan2(e, a) / Math.PI) * 180;
  },
  getDistance: function (t, n) {
    let a = t.x - n.x,
      e = t.y - n.y;
    return Math.sqrt(a * a + e * e);
  },
  moveOnAngle: function (t, n) {
    let a = this.getOneFrameDistance(t, n);
    (t.x += a.x), (t.y += a.y);
  },
  getOneFrameDistance: function (t, n) {
    return {
      x: n * Math.cos((t.rotation * Math.PI) / 180),
      y: n * Math.sin((t.rotation * Math.PI) / 180),
    };
  },
};
function r(a, b, c) {
  return parseFloat(
    (Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(
      c ? c : 0
    )
  );
}

(function (window, $) {
  $(function () {
    $(".ripple").on("click", function (event) {
      event.preventDefault();

      var $div = $("<div/>"),
        btnOffset = $(this).offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

      $div.addClass("ripple-effect");
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - $ripple.height() / 2,
          left: xPos - $ripple.width() / 2,
          background: $(this).data("ripple-color"),
        })
        .appendTo($(this));

      window.setTimeout(function () {
        $div.remove();
      }, 2000);
    });
  });
})(window, jQuery);
