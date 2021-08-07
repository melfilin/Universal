const form = document.querySelector('.modal__form');
const textarea = document.querySelector('.modal__form');
const button = document.querySelector('.modal__button');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  setErrorValues();
  const isValid = getValidForm();
  const formData = new FormData(form);
  if (isValid) {
    sendForm(formData);
  } else {
    setErrorValues();
  }
}

async function sendForm(formData) {
  button.innerHTML = '<div class="loader loader__quart"></div>';
  const res = await fetch('send.php', {
    body: formData,
    method: 'POST',
  });
  if (res.ok) {
    modalClose();
    successOpen();
    button.innerHTML = 'Отправить';
  } else {
    modalClose();
    successOpen();
    button.innerHTML = 'Отправить';
  }
  resetForm();
}

function resetForm() {
  const inputs = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');
  textarea.value = '';
  inputs.forEach((input) => (input.value = ''));
  Object.keys(values).forEach((value) => (values[value] = ''));
}

const successForm = document.querySelector('.success-form__wrapper');

modalOverlay.addEventListener('click', successClose);
modalCloseBtn.forEach((close) => close.addEventListener('click', successClose));

function successOpen() {
  document.body.style.overflow = 'hidden';
  successForm.classList.add('success-form__wrapper--visible');
  modalOverlay.classList.add('modal__overlay--visible');
}

function successClose() {
  document.body.style.overflow = 'auto';
  successForm.classList.remove('success-form__wrapper--visible');
  modalOverlay.classList.remove('modal__overlay--visible');
}
