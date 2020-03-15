import * as helpers from '../lib/number';

describe('numbers', () => {
  it('should return integer from string', () => {
    const result = 250;
    expect(helpers.parse2Integer(`${result}`)).toEqual(result);
  });

  it('should return undefined', () => {
    const result = 'aaa';
    expect(helpers.parse2Integer(result)).toBeUndefined();
  });

  it('should return a fallback', () => {
    const result = 'aaa';
    const fallback = 15;
    expect(helpers.parse2Integer(result, fallback)).toEqual(fallback);
  });

  it('should return float from string', () => {
    const result = 250.88;
    expect(helpers.parse2Float(`${result}`)).toEqual(result);
  });

  it('should return a fallback', () => {
    const result = 'aaa';
    const fallback = 15;
    expect(helpers.parse2Float(result, fallback)).toEqual(fallback);
  });
});
