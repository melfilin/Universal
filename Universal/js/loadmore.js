(() => {
  const hideComments = document.querySelectorAll(
    '.comments-block__item--disnone'
  );
  const loadBtn = document.querySelector('.comments-block__button');

  loadBtn.addEventListener('click', () => {
    hideComments.forEach((comment) => {
      comment.classList.toggle('comments-block__item--disnone');
      loadBtn.style.display = 'none';
    });
  });
})();
