const modal = document.querySelector('.modal__dialog');
const modalOverlay = document.querySelector('.modal__overlay');
const navbarButton = document.querySelector('.navbar-button');
const navbarButtonMobile = document.querySelector('.navbar-button__mobile');
const modalCloseBtn = document.querySelectorAll('.modal__close');
const partner = document.querySelector('.footer-social__item--partner');

if (partner) {
  partner.addEventListener('click', modalOpen);
}
modalOverlay.addEventListener('click', modalClose);
navbarButton.addEventListener('click', modalOpen);
navbarButtonMobile.addEventListener('click', () => {
  closeMobile();
  modalOpen();
});
modalCloseBtn.forEach((close) => close.addEventListener('click', modalClose));
document.addEventListener('keydown', clickDocument);

function modalOpen() {
  document.documentElement.style = 'margin-right: 17px';
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal__dialog--visible');
  modalOverlay.classList.add('modal__overlay--visible');
}

function modalClose() {
  document.documentElement.style = 'margin-right: 0';
  document.body.style.overflow = 'auto';
  modal.classList.remove('modal__dialog--visible');
  modalOverlay.classList.remove('modal__overlay--visible');
}

function clickDocument(e) {
  if (e.keyCode !== 27) return;
  modalClose();
  successClose();
}
