export default class Body {
  constructor() {
    this._screenWidth = window.screen.width;
    this._screenHeight = window.screen.height;
  }

  _getScreenWidth = () => this._screenWidth;

  _getScreenHeight = () => this._screenHeight;
}
