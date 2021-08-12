const navbar = document.querySelector('.mobile-menu');
const close = document.querySelector('.modal__close-mobile');
const open = document.querySelector('.navbar-menu__button');

close.addEventListener('click', closeMobile);
open.addEventListener('click', openMobile);

function closeMobile() {
  document.body.style.overflow = 'auto';
  navbar.classList.remove('mobile-menu--visible');
}

function openMobile() {
  document.body.style.overflow = 'hidden';
  navbar.classList.add('mobile-menu--visible');
}
