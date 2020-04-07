import * as helpers from '../lib/array';

describe('array', () => {
  it('should throw error', () => {
    const array = 10;
    expect(() => helpers.reorder(array, 0, 1)).toThrow();
  });

  it('should return same value for null or undefined array from reorder', () => {
    const array = undefined;
    expect(helpers.reorder(array, 0, 1)).toEqual(array);
  });

  it('should reorder array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.reorder(array, 0, 4)).toEqual([20, 30, 40, 50, 10, 60]);
  });

  it('should return same value for null or undefined array from findReverse', () => {
    const array = undefined;
    expect(helpers.findReverse(array)).toEqual(array);
  });

  it('should find reverse item in array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.findReverse(array)).toEqual(60);
  });

  it('should return reverse item in array that meets condition', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.findReverse(array, (item) => item < 35)).toEqual(30);
  });

  it('should not return reverse item in array because of the condition', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.findReverse(array, (item) => item > 60)).toBeUndefined();
  });

  it('should return same value for null or undefined array from findIndexReverse', () => {
    const array = undefined;
    expect(helpers.findIndexReverse(array)).toEqual(array);
  });

  it('should find reverse item index in array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.findIndexReverse(array)).toEqual(5);
  });

  it('should return reverse item index in array that meets condition', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.findIndexReverse(array, (item) => item < 35)).toEqual(2);
  });

  it('should not return reverse item index in array because of the condition', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(
      helpers.findIndexReverse(array, (item) => item > 60),
    ).toBeUndefined();
  });

  it('should return same value for null or undefined array from containsAll', () => {
    const array = undefined;
    const contains = [10, 40, 50];
    expect(helpers.containsAll(array, contains)).toEqual(array);
  });

  it('should return true for array that contains all elements', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = [10, 40, 50];
    expect(helpers.containsAll(array, contains)).toBeTruthy();
  });

  it('should return false for array that does not contain all elements', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = [10, 40, 70];
    expect(helpers.containsAll(array, contains)).toBeFalsy();
  });

  it('should return false for array that does not contain all elements with single value supplied', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = 5;
    expect(helpers.containsAll(array, contains)).toBeFalsy();
  });

  it('should return same value for null or undefined array from containsAny', () => {
    const array = null;
    const contains = [10, 70, 80];
    expect(helpers.containsAny(array, contains)).toEqual(array);
  });

  it('should return true for array that contains any of the elements', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = [10, 70, 80];
    expect(helpers.containsAny(array, contains)).toBeTruthy();
  });

  it('should return false for array that does not contain any of the elements', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = [15, 35, 45];
    expect(helpers.containsAny(array, contains)).toBeFalsy();
  });

  it('should return false for array that does not contain any of the elements with single value supplied', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const contains = 25;
    expect(helpers.containsAny(array, contains)).toBeFalsy();
  });

  it('should return same value for null or undefined array from groupBy', () => {
    const array = null;
    expect(helpers.groupBy(array, 'group')).toEqual(array);
  });

  it('should return grouped array by value', () => {
    const array = [
      {group: 1, value: 0},
      {group: 1, value: 1},
      {group: 2, value: 2},
      {group: 1, value: 3},
    ];
    expect(helpers.groupBy(array, 'group')).toEqual({
      1: [
        {group: 1, value: 0},
        {group: 1, value: 1},
        {group: 1, value: 3},
      ],
      2: [{group: 2, value: 2}],
    });
  });

  it('should return grouped array by condition', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.groupBy(array, (item) => item > 20)).toEqual({
      false: [10, 20],
      true: [30, 40, 50, 60],
    });
  });
});
