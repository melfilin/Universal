const navbarMenu = document.querySelectorAll('.mobile-menu');

navbarMenu.forEach((link) => {
  link.addEventListener('click', (e) => {
    closeMobile();
    const el = document.querySelector(e.target.dataset.id);
    el.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
