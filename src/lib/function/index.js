/**
 *  Checks if function
 *
 * @param {Function} func Function
 * @returns {Bool} Is function
 */
export const isFunction = (func) => {
  return func && typeof func === 'function';
};

/**
 *  Runs a function
 *
 * @param {Function} func Function
 * @param {Any} [...args] Arguments
 * @returns {Any} Runned function result
 */
export const runFunction = (func, ...args) => {
  if (isFunction(func)) {
    return func(...args);
  }
};
