(() => {
  const header = document.querySelector('.navbar');
  const button = document.querySelector('.arrow-up');

  window.onscroll = () => {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      button.classList.add('active');
    }
    if (scrolled < coords) {
      button.classList.remove('active');
    }
  };

  button.addEventListener('click', (e) => {
    header.scrollIntoView({
      behavior: 'smooth',
    });
  });
})();
