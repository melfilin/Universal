const inputs = document.querySelectorAll('input');

const errors = {};
const values = {};

inputs.forEach((input) => {
  values[input.name] = '';
  const parent = input.closest('.parent');
  const label = document.createElement('label');
  label.setAttribute('for', input.name);
  parent.insertAdjacentElement('beforeend', label);
  input.addEventListener('input', inputHandler);
  input.addEventListener('blur', onBlur);
  input.addEventListener('focus', onFocus);
});

function inputHandler(e) {
  const value = e.target.value;
  const name = e.target.name;
  values[name] = value;
  getErrors(name);
}

function onBlur(e) {
  const name = e.target.name;
  getErrors(name);
}

function onFocus(e) {
  const label = document.querySelector(`label[for="${e.target.name}"]`);
  label.innerText = '';
}

function getErrors(name) {
  switch (name) {
    case 'name':
      if (values[name]) {
        setErrors(name, '');
        errors[name] = '';
      }
      if (values[name]?.length < 2) {
        setErrors(name, 'Имя должно быть более 2 символов');
      }
      if (!values[name]) {
        setErrors(name, 'Введите имя');
      }
      break;
    case 'email':
      if (!values[name]) {
        setErrors(name, 'Введите email');
      }
      if (!validateEmail(values[name]) && values[name]) {
        setErrors(name, 'Введите корректный email');
      }
      if (validateEmail(values[name])) {
        setErrors(name, '');
        errors[name] = '';
      }
      break;
    case 'phone':
      values[name] = values[name]?.replace(/[a-zа-яё]/gi, '');
      if (values[name]?.length > 18) {
        const temp = values[name].split('');
        temp.pop();
        values[name] = temp.join('');
      }
      if (!values[name]) {
        setErrors(name, 'Введите телефон');
      }
      if (!validatePhone(values[name]) && values[name]) {
        setErrors(name, 'Введите корректный номер телефона');
      }
      if (validatePhone(values[name])) {
        setErrors(name, '');
        errors[name] = '';
      }
      break;

    default:
      break;
  }
}

function setErrors(name, error) {
  const label = document.querySelector(`label[for="${name}"]`);
  if (error) {
    errors[name] = error;
    label.style.display = 'block';
  }
  label.innerText = error;
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re =
    /^(\+7)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return re.test(phone);
}

function getValidForm() {
  const valid = Object.keys(errors).map((err) => {
    if (errors[err]) {
      return false;
    } else {
      return true;
    }
  });

  return !valid.includes(false);
}

function setErrorValues() {
  Object.keys(values).forEach((value) => {
    if (!values[value]) {
      getErrors(value);
    }
  });
}
