(() => {
  const background = document.querySelector('.hero');
  console.log(background);
  background.style.backgroundImage = `linear-gradient(
    0deg,
    rgba(38, 45, 51, 0.75),
    rgba(38, 45, 51, 0.75)
  ),
  url(../img/article-hero/back-2.webp)
  `;
})();
