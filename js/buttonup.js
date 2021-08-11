(() => {
  const header = document.querySelector('.navbar');
  const button = document.querySelector('.arrow-up');
  button.addEventListener('click', (e) => {
    header.scrollIntoView({
      behavior: 'smooth',
    });
  });
})();
