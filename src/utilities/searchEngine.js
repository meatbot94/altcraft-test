export default class SearchEngine {
  _searchAll(passengers, inputValue) {
    const result = [];

    for (let i = 0; i < passengers.length; i + 1) {
      const passenger = passengers[i];

      if (passenger.name.includes(inputValue)) {
        result.push(passenger);
      }
    }

    return result;
  }

  _filter(passenger) {
    return passenger !== undefined;
  }

  _select(passenger) {
    const {
      id, survived, name, gender, age,
    } = passenger;

    if (
      id !== null
      && survived !== null
      && name !== null
      && name !== ''
      && gender !== null
      && gender !== ''
      && age !== null
    ) {
      return {
        id,
        survived,
        name,
        gender,
        age: Math.round(age),
      };
    }
  }

  search(passengers, inputValue, option) {
    let result;
    if (option.toLowerCase() === 'everybody') {
      result = this._searchAll(passengers.map(this._select).filter(this._filter), inputValue);
    }
    return result;
  }
}
