// TESTIMONI
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
});
