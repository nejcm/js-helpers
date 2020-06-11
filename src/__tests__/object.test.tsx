import * as helpers from '../lib/object';

describe('object', () => {
  it('should return null for null or undefined object', () => {
    const obj = null;
    expect(helpers.filterEmpty(obj)).toEqual(null);
  });

  it('should return object with filtered empty values', () => {
    const obj = {
      k1: 1,
      k2: null,
      k3: undefined,
    };
    expect(helpers.filterEmpty(obj)).toEqual({k1: 1});
  });

  it('should return null for null object', () => {
    const obj = null;
    expect(helpers.get(obj, 'level1.level2.value')).toEqual(null);
  });

  it('should return object value', () => {
    const obj = {
      level1: {
        level2: {
          value: 1,
        },
        value: null,
        value2: undefined,
      },
    };
    expect(helpers.get(obj, 'level1.level2.value')).toEqual(
      obj.level1.level2.value,
    );
    expect(helpers.get(obj, 'level1.value')).toEqual(obj.level1.value);
    expect(helpers.get(obj, 'level1.value2')).toEqual(obj.level1.value2);
  });

  it('should return object value from array', () => {
    const obj = {
      level1: {
        level2: {
          value: 1,
        },
      },
    };
    expect(helpers.get(obj, ['level1', 'level2', 'value'])).toEqual(
      obj.level1.level2.value,
    );
  });

  it('should return object values from array of keys', () => {
    const obj = {
      level1: {
        level2: 1,
      },
      k1: 10,
      k2: 20,
    };
    expect(helpers.getMultiple(obj, ['level1.level2', 'k2'])).toEqual([1, 20]);
  });

  it('should return empty array for empty array of keys', () => {
    const obj = {
      level1: {
        level2: 1,
      },
      k1: 10,
    };
    expect(helpers.getMultiple(obj, [])).toEqual([]);
  });

  it('should flattern an object', () => {
    const obj = {
      k1: 1,
      k2: {
        k3: 3,
      },
    };
    expect(helpers.flatten(obj)).toEqual({
      k1: 1,
      'k2.k3': 3,
    });
  });

  it('should flattern an object with prefix', () => {
    const obj = {
      k1: 1,
      k2: {
        k3: 3,
      },
    };
    expect(helpers.flatten(obj, 'a')).toEqual({
      'a.k1': 1,
      'a.k2.k3': 3,
    });
  });

  it('should flattern an empty object', () => {
    expect(helpers.flatten(null)).toEqual(null);
  });

  it('should return json from object', () => {
    const obj = {
      k1: 1,
      k2: {
        k3: 3,
      },
    };
    expect(helpers.toJson(obj)).toEqual(JSON.stringify(obj));
  });

  it('should return undefined', () => {
    expect(helpers.toJson(undefined)).toBeUndefined();
  });
});
