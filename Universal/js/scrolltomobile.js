const navbarMenu = document.querySelectorAll('.mobile-menu');

navbarMenu.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobile();
    const el = document.querySelector(e.target.dataset.id);
    console.log(el);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
