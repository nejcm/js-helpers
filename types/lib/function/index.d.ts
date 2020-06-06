/**
 *  Runs a function
 *
 * @param {Function} func Function
 * @param {Any} [...args] Arguments
 * @returns {Any} Runned function result
 */
export declare const runFunction: (func: unknown, ...args: unknown[]) => unknown;
/**
 *  Returns a curried function
 *
 * @param {Function} func Function
 * @returns {Any} Curried function
 */
export declare const curry: (func: Function) => Function;
