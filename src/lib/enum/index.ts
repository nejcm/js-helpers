import {get} from '../object';

export type Value = string | number;
export type Key = string | number;

export interface EnumObject {
  properties?: {[key: string]: unknown};
  [key: string]: unknown;
}

export interface Enum extends EnumObject {
  all: (...exclude: Value[]) => Value[];
  getValue: (keys: string | string[], fallback?: Value) => Value;
  getProperty: (
    value: Value,
    propKeys: string | string[],
    fallback?: Value,
  ) => Value;
  getPropertyByKey: (
    key: Value,
    propKeys: string | string[],
    fallback?: Value,
  ) => Value;
  [Symbol.iterator](): Pick<Iterator<unknown>, 'next'>;
}

const enumerable = (obj: EnumObject): Enum => {
  const all = (...exclude: Value[]): Value[] => {
    const hasAny = exclude && exclude.length;
    return Object.keys(obj).filter(
      (key: Key) =>
        key !== 'properties' &&
        (!hasAny || !exclude.includes(obj[key] as Value)),
    );
  };

  const getValue = (keys: string | string[], fallback?: Value): Value =>
    get(obj, keys, fallback) as Value;

  const getProperty = (
    value: Value,
    propKeys: string | string[],
    fallback?: Value,
  ): Value => {
    const keys = Array.isArray(propKeys)
      ? ['properties', `${value}`, ...propKeys]
      : `properties.${value}.${propKeys}`;
    return getValue(keys, fallback);
  };

  const getPropertyByKey = (
    key: Value,
    propKeys: string | string[],
    fallback?: Value,
  ): Value => {
    const value = getValue(`${key}`);
    return getProperty(value, propKeys, fallback);
  };

  return {
    ...obj,
    all,
    getValue,
    getProperty,
    getPropertyByKey,
    // iterator
    [Symbol.iterator]: () => {
      const vals = all();
      const keys = Object.keys(vals);
      const len = keys.length;
      let i = 0;

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
    },
  };
};

export default enumerable;
