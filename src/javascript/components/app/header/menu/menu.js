import Header from '../header';

export default class Menu extends Header {
  constructor(
    menu,
    menuButton,
    menuCurrent,
    menuCaret,
    { menuCaretRotated },
    menuOptions,
    { menuOptionsVisible },
    menuOptionNodeList,
    menuOverlay,
    { menuOverlayEnabled },
  ) {
    super();
    this._menu = menu;
    this._button = menuButton;
    this._current = menuCurrent;
    this._caret = menuCaret;
    this._caretRotatedClass = menuCaretRotated;
    this._options = menuOptions;
    this._optionsVisibleClass = menuOptionsVisible;
    this._optionNodeList = menuOptionNodeList;
    this._overlay = menuOverlay;
    this._overlayEnabledClass = menuOverlayEnabled;
  }

  _enableOption(optionNodeList) {
    optionNodeList.forEach((option) => {
      option.addEventListener('click', () => {
        this._current.textContent = option.textContent;
      });
    });
  }

  _enableOverlay(overlay) {
    overlay.addEventListener('click', () => {
      this._options.classList.remove(this._optionsVisibleClass);
      this._caret.classList.remove(this._caretRotatedClass);
      this._overlay.classList.remove(this._overlayEnabledClass);
    });
  }

  _toggleOptions(button) {
    button.addEventListener('click', () => {
      this._options.classList.toggle(this._optionsVisibleClass);
      this._caret.classList.toggle(this._caretRotatedClass);
      this._overlay.classList.toggle(this._overlayEnabledClass);
    });
  }

  enable() {
    this._toggleOptions(this._button);
    this._enableOverlay(this._overlay);
    this._enableOption(this._optionNodeList);
  }
}
