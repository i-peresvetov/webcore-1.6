(function () {
    "use strict";
    const breakpoint = window.matchMedia("(min-width:768px)");
    let mySwiper;
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
    const enableSwiper = function () {
      mySwiper = new Swiper(".swiper-container", {
        loop: false,
        // slidesPerView: 1.5,
        slidesPerView: "auto",
        centeredSlides: true,
        // a11y: true,
        keyboardControl: true,
        grabCursor: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        spaceBetween: 16,
      });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();