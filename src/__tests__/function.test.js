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

  it('should return curried function', () => {
    const argL = 10;
    const argW = 8;
    const argH = 5;
    const func = (l, w, h) => 2 * l * w + 2 * l * h + 2 * w * h;
    const curried = helpers.curry(func);

    expect(curried).toBeDefined();
    expect(typeof curried === 'function').toBeTruthy();
    expect(typeof curried(argL) === 'function').toBeTruthy();
    expect(typeof curried(argL, argW) === 'function').toBeTruthy();
    expect(curried(argL)(argW)(argH)).toEqual(func(argL, argW, argH));
  });
});
