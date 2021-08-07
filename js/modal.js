const modal = document.querySelector('.modal__dialog');
const modalOverlay = document.querySelector('.modal__overlay');
const navbarButton = document.querySelector('.navbar-button');
const modalCloseBtn = document.querySelectorAll('.modal__close');

modalOverlay.addEventListener('click', modalClose);
navbarButton.addEventListener('click', modalOpen);
modalCloseBtn.forEach((close) => close.addEventListener('click', modalClose));
document.addEventListener('keydown', clickDocument);

function modalOpen() {
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal__dialog--visible');
  modalOverlay.classList.add('modal__overlay--visible');
}

function modalClose() {
  document.body.style.overflow = 'auto';
  modal.classList.remove('modal__dialog--visible');
  modalOverlay.classList.remove('modal__overlay--visible');
}

function clickDocument(e) {
  if (e.keyCode !== 27) return;
  modalClose();
  successClose();
}
