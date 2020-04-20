import * as helpers from '../lib/var';

describe('var', () => {
  it('should return true for defineded values', () => {
    const zero = 0;
    const string = 'Test';
    const falseValue = false;
    expect(helpers.isDefined(zero)).toBeTruthy();
    expect(helpers.isDefined(string)).toBeTruthy();
    expect(helpers.isDefined(falseValue)).toBeTruthy();
  });
  it('should return false for undefineded or null values', () => {
    const undefinedValue = undefined;
    const nullValue = null;
    expect(helpers.isDefined(undefinedValue)).toBeFalsy();
    expect(helpers.isDefined(nullValue)).toBeFalsy();
  });
});
