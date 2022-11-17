import App from '../app';

export default class Header extends App {
  constructor(passengers, header, form, input, menuCurrent) {
    super(passengers);
    this._header = header;
    this._form = form;
    this._input = input;
    this._current = menuCurrent;
  }

  enable(searchEngine, renderer) {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      renderer.render(
        searchEngine.search(this._passengers, this._input.value, this._current.textContent),
      );
      // render(search(this._passengers, this._input.value, this._current.textContent));
    });
  }
}
