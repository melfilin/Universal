const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
});

const swiper2 = new Swiper('.article-slider__container', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  navigation: {
    prevEl: '.article-slider__button--prev',
    nextEl: '.article-slider__button--next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
