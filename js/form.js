const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const textarea = form.querySelector('textarea');
  const button = document.querySelector('button[type="submit"]');
  const valodator = new Validator(form);
  form.addEventListener('submit', formSubmit);

  function formSubmit(e) {
    e.preventDefault();
    valodator.checkErrorValues();
    const isValid = valodator.getValidForm();
    const formData = new FormData(form);
    if (isValid) {
      sendForm(formData);
    } else {
      valodator.checkErrorValues();
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
    resetForm(form);
  }

  function resetForm(form) {
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    if (textarea) {
      textarea.value = '';
    }
    inputs.forEach((input) => (input.value = ''));
    valodator.resetValues();
  }

  const successForm = document.querySelector('.success-form__wrapper');

  modalOverlay.addEventListener('click', successClose);
  modalCloseBtn.forEach((close) =>
    close.addEventListener('click', successClose)
  );

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
});
