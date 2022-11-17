export default class FormValidator {
  constructor(form, input, { inputError }, submit, { submitDisabled }) {
    this._form = form;
    this._input = input;
    this._inputErrorClass = inputError;
    this._submit = submit;
    this._submitDisabledClass = submitDisabled;
  }

  _toggleSubmit() {
    this._submit.disabled = !this._form.checkValidity();
    this._submit.classList.toggle(this._submitDisabledClass, !this._form.checkValidity());
  }

  _toggleInput() {
    if (this._input.validity.valid) {
      this._input.classList.remove(this._inputErrorClass);
    } else {
      this._input.classList.add(this._inputErrorClass);
    }
  }

  enable() {
    this._input.addEventListener('input', () => {
      this._toggleInput();
      this._toggleSubmit();
    });
  }
}
