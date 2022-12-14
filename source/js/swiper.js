const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 1,
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
