const sliderMain = document.querySelector(".swiper-block");
//const breakpointMob = window.matchMedia('(max-width:767px)');
let swiperMain;

const initMainSwiper = (slider, loop) => {
  swiperMain = new Swiper(slider, {
    slidesPerView: 1,
    loop: loop,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    /*     breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 13,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
    breakpointsBase: "container", */
  });
};

const initSliderMain = () => {
  initMainSwiper(sliderMain, false);
};

export { initSliderMain };
