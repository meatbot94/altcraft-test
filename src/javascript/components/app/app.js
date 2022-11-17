import Body from '../body';

export default class App extends Body {
  constructor(passengers, maleAvatarApi, femaleAvatarApi) {
    super();
    this._passengers = passengers;
    this._maleAvatarApi = maleAvatarApi;
    this._femaleAvatarApi = femaleAvatarApi;
  }

  _passPassengers = () => this._passengers;
}
