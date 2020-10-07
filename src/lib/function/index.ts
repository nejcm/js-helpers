/**
 *  Runs a function
 *
 * @param {Function} func Function
 * @param {Any} [...args] Arguments
 * @returns {Any} Runned function result
 */
export const runFunction = (func: unknown, ...args: unknown[]): unknown => {
  if (func && typeof func === 'function') {
    return func(...args);
  }
  return undefined;
};

/**
 *  Returns a curried function
 *
 * @param {Function} func Function
 * @returns {Any} Curried function
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const curry = (func: Function): Function => {
  return function curried(...args: unknown[]) {
    if (args.length >= func.length) return func(...args);
    return (...argsLeft: unknown[]) => {
      return curried(...args, ...argsLeft);
    };
  };
};
