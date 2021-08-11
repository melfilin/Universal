class Validator {
  constructor(form) {
    this.form = form;
    this.inputs = form.querySelectorAll('input');
    this.textareas = form.querySelectorAll('textarea');
    this.errors = {};
    this.values = {};
    this.inputs.forEach((input) => this.initField(input));
    this.textareas.forEach((textarea) => this.initField(textarea));
  }

  initField(field) {
    this.values[field.name] = '';
    const parent = field.closest('.parent');
    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    parent.insertAdjacentElement('beforeend', label);
    if (field.name === 'checkbox') {
      field.addEventListener('input', this.selectHandler.bind(this));
      return;
    }
    field.addEventListener('input', this.inputHandler.bind(this));
    field.addEventListener('change', this.inputHandler.bind(this));
    field.addEventListener('blur', this.onBlur.bind(this));
    field.addEventListener('focus', this.onFocus.bind(this));
  }

  resetValues() {
    Object.keys(this.values).forEach((value) => (this.values[value] = ''));
  }

  inputHandler(e) {
    console.log(e);
    const value = e.target.value;
    const name = e.target.name;
    this.values[name] = value;
    this.getErrors(name);
  }

  selectHandler(e) {
    const value = e.target.checked;
    const name = e.target.name;
    this.values[name] = value;
    this.getErrors(name);
  }

  onBlur(e) {
    const name = e.target.name;
    this.getErrors(name);
  }

  onFocus(e) {
    const label = document.querySelector(`label[for="${e.target.name}"]`);
    label.innerText = '';
  }

  getErrors(name) {
    switch (name) {
      case 'name':
        if (this.values[name]) {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        if (this.values[name]?.length < 2) {
          this.setErrors(name, 'Имя должно быть более 2 символов');
        }
        if (!this.values[name]) {
          this.setErrors(name, 'Введите имя');
        }
        break;

      case 'message':
        if (this.values[name]) {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        if (this.values[name]?.length < 50) {
          this.setErrors(name, 'Сообщение должно быть более 50 символов');
        }
        if (!this.values[name]) {
          this.setErrors(name, 'Введите сообщение');
        }
        break;

      case 'select':
        if (this.values[name]) {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        if (!this.values[name]) {
          this.setErrors(name, 'Выберите тему');
        }
        break;
      case 'email':
        if (!this.values[name]) {
          this.setErrors(name, 'Введите email');
        }
        if (!this.validateEmail(this.values[name]) && this.values[name]) {
          this.setErrors(name, 'Введите корректный email');
        }
        if (this.validateEmail(this.values[name])) {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        break;

      case 'checkbox':
        if (!this.values[name]) {
          this.setErrors(name, 'Согласитесь с правилами');
        } else {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        break;
      case 'phone':
        this.values[name] = this.values[name]?.replace(/[a-zа-яё]/gi, '');
        if (this.values[name]?.length > 18) {
          const temp = this.values[name].split('');
          temp.pop();
          this.values[name] = temp.join('');
        }
        if (!this.values[name]) {
          this.setErrors(name, 'Введите телефон');
        }
        if (!this.validatePhone(this.values[name]) && this.values[name]) {
          this.setErrors(name, 'Введите корректный номер телефона');
        }
        if (this.validatePhone(this.values[name])) {
          this.setErrors(name, '');
          this.errors[name] = '';
        }
        break;

      default:
        break;
    }
  }

  setErrors(name, error) {
    const label = this.form.querySelector(`label[for="${name}"]`);
    if (error) {
      this.errors[name] = error;
      label.style.display = 'block';
    }
    label.innerText = error;
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    const re =
      /^(\+7)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(phone);
  }

  getValidForm() {
    const valid = Object.keys(this.errors).map((err) => {
      if (this.errors[err]) {
        return false;
      } else {
        return true;
      }
    });

    return !valid.includes(false);
  }

  checkErrorValues() {
    Object.keys(this.values).forEach((value) => {
      if (!this.values[value]) {
        this.getErrors(value);
      }
    });
  }
}
