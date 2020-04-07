/**
 *  Runs a function
 *
 * @param {Function} func Function
 * @param {Any} [...args] Arguments
 * @returns {Any} Runned function result
 */
export const runFunction = (func, ...args) => {
  if (func && typeof func === 'function') {
    return func(...args);
  }
};

/**
 *  Returns a curried function
 *
 * @param {Function} func Function
 * @returns {Any} Curried function
 */
export const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...argsLeft) => {
        return curried(...args, ...argsLeft);
      };
    }
  };
};
