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
