(() => {
  const navbarMenu = document.querySelectorAll('.navbar-menu');
  const addComment = document.querySelector('.comments-top__right');

  if (addComment) {
    const form = document.getElementById('comment-form');
    addComment.addEventListener('click', () => {
      form.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }

  navbarMenu.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.dataset.id;

      const el = document.querySelector(id);
      el.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
})();
