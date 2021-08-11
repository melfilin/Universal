(() => {
  const navbarMenu = document.querySelectorAll('.navbar-menu');
  navbarMenu.forEach((link) => {
    link.addEventListener('click', (e) => {
      const el = document.querySelector(e.target.dataset.id);
      el.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
})();
