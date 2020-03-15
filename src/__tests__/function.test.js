import * as helpers from '../lib/function';

describe('function', () => {
  it('should return true for function', () => {
    const func = () => 'Hello!';
    expect(helpers.isFunction(func)).toBeTruthy();
  });

  it('should return false for string', () => {
    const func = 'Hello!';
    expect(helpers.isFunction(func)).toBeFalsy();
  });

  it('should run the function and return result', () => {
    const func = () => 'Hello!';
    expect(helpers.runFunction(func)).toEqual('Hello!');
  });

  it('should return undefined', () => {
    const func = 'Hello!';
    expect(helpers.runFunction(func)).toBeUndefined();
  });
});
