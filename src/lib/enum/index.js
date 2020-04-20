import {get} from '../object';

class Enum {
  constructor(obj) {
    this._enum = obj;
    Object.keys(obj).map((key) => (this[key] = obj[key]));
    // eslint-disable-next-line no-constructor-return
    return this;
  }

  has = (key) => {
    return this.hasOwnProperty(key);
  };

  getValue = (key, ...rest) => {
    return get(this, [key, ...rest]);
  };

  all = (...exclude) => {
    const hasAny = exclude && exclude.length;
    return Object.keys(this._enum).filter(
      (key) =>
        key !== 'properties' &&
        key !== 'methods' &&
        (!hasAny || !exclude.includes(this._enum[key])),
    );
  };

  // Iterator
  [Symbol.iterator] = () => {
    const keys = Object.keys(this);
    const vals = this._enum;
    let i = 0;
    const len = keys.length;

    return {
      next() {
        const result = {value: undefined, done: false};
        if (i < len) {
          result.value = vals[keys[i]];
          i++;
        } else {
          result.done = true;
        }
        return result;
      },
    };
  };

  getProperty = (value, property, fallback) => {
    return this.getValue('properties', value, property) || fallback;
  };

  getPropertyByKey = (key, property, fallback) => {
    const value = this.getValue(key);
    return this.getProperty(value, property, fallback);
  };
}

export default Enum;
