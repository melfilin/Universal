(() => {
  const forms = document.querySelectorAll('form');

  const select = new Select('#select', {
    placeholder: 'Выбери тему',
    data: [
      { id: '1', value: 'Сss' },
      { id: '2', value: 'JavaScript' },
      { id: '3', value: 'Html' },
      { id: '4', value: 'WebDesign' },
    ],
    onSelect(item) {
      const input = document.querySelector('[name="select"]');
      input.value = item.value;
      input.dispatchEvent(new Event('change'));
    },
  });

  forms.forEach((form) => {
    const textarea = form.querySelector('textarea');
    const button = form.querySelector('button[type="submit"]');
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
      if (button) {
        tempText = button.innerText;
        button.innerHTML = '<div class="loader loader__quart"></div>';
      }
      const res = await fetch('send.php', {
        body: formData,
        method: 'POST',
      });
      if (res.ok) {
        modalClose();
        successOpen();
      } else {
        modalClose();
        successOpen();
      }
      if (button) {
        button.innerHTML = tempText;
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
    modalCloseBtn.forEach((close) => {
      if (successClose) {
        close.addEventListener('click', successClose);
      }
    });

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
})();
