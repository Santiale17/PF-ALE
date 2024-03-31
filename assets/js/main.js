/**
 * Template Name: Techie - v4.7.0
 * Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
function updateTimer() {
  future  = Date.parse("Aug 16, 2022 19:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div class="offset-1 col-5 offset-md-0 col-md-3 text-center">' + d + '<span> días</span></div>' +
      '<div class="col-5 col-md-3 text-center">' + h + '<span> horas</span></div>' +
      '<div class="offset-1 col-5 offset-md-0 col-md-3 text-center">' + m + '<span> minutos</span></div>' +
      '<div class="col-5 col-md-3 text-center">' + s + '<span> segundos</span></div>' ;
}
// setInterval('updateTimer()', 1000 );


(function () {
  "use strict";

  /**
   * Easy selector helper function
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

  setInterval(function () {
    var countDownDate = new Date("Aug 16, 2023 19:00:00").getTime();

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    let timerDays = document.querySelector("#days");
    let timerHours = document.querySelector("#hours");
    let timerMinutes = document.querySelector("#minutes");
    let timerSeconds = document.querySelector("#seconds");
    // let daysTitle = document.querySelector("#timer-days");
    let hoursText = document.querySelector("#hoursText");
    let minutesText = document.querySelector("#minutesText");
    let secondsText = document.querySelector("#secondsText");
    let daysText = document.querySelector("#daysText");
    timerDays.innerHTML = days;
    // daysTitle.innerHTML = `Faltan ${days} ${days > 1 ? "dias" : "dia"}`;
    daysText.innerHTML = `${days > 1 ? "Dias" : "Dia"}`;
    hoursText.innerHTML = `${hours > 1 ? "Horas" : "Hora"}`;
    minutesText.innerHTML = `${minutes > 1 ? "Minutos" : "Minuto"}`;
    secondsText.innerHTML = `${seconds > 1 ? "Segundos" : "Segundo"}`;
    timerHours.innerHTML = hours;
    timerMinutes.innerHTML = minutes;
    timerSeconds.innerHTML = seconds;

    let form = document.querySelector(".googleForm");

    if (timeleft <= 0) {
      timerDays.style.display = "none";
      timerHours.style.display = "none";
      timerMinutes.style.display = "none";
      timerSeconds.style.display = "none";
      hoursText.style.display = "none";
      minutesText.style.display = "none";
      daysText.style.display = "none";
      secondsText.style.display = "none";
      secondsText.style.display = "none";
      // daysTitle.style.display = "none";

      /* form.innerHTML = `<div class="row googleForm">
            <p class="candado abierto" style="background-color: #a0cc3a;; border-radius: 15px; padding: 10px; text-align: center; width: fit-content; margin: 10px auto; color: white;">
              <i class='bx bxs-lock-open' ></i>            Inscribite!
            </p>
          </div>`; */
      /* form.innerHTML = `<div class="row googleForm">
      <button type="button" class="btn btn-get-started form-button">
        <a style="color: #edf2ef">
          <b><i class='bx bxs-lock-open'></i>    Proxima tanda en!</b>
        </a>
      </button>
    </div>` */
    form.innerHTML = `<button type="button" class="btn btn-get-started form-button">
    <a href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSeD1_hDNc564n7Kh17xFss0Q3BB7z7Smt7VAY9RFEq9L-XOCA/viewform" target="_blank" rel="noreferrer noopener" style="color: #edf2ef">
      <b>Inscribite!</b>
    </a>
  </button>`
      return;
    }
  }, 1000);

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 800,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

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
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
