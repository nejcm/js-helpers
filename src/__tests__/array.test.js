import * as helpers from '../lib/array';

describe('array', () => {
  it('should throw error', () => {
    const array = 10;
    expect(() => helpers.reorder(array, 0, 1)).toThrow();
  });

  it('should reorder array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.reorder(array, 0, 4)).toEqual([20, 30, 40, 50, 10, 60]);
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

  it('should return chunked array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    expect(helpers.chunk(array, 4)).toEqual([
      [10, 20, 30, 40],
      [50, 60],
    ]);
  });
});
