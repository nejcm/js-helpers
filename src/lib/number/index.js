/**
 *  Parse string to integer with fallback
 *
 * @param {String} value string
 * @param {Number} fallback Fallback value
 * @param {Number} radix Radix value
 * @returns {Number} Parsed value
 */
export const parse2Integer = (value, fallback, radix = 10) => {
  const number = parseInt(value, radix);
  return isNaN(number) ? fallback : number;
};

/**
 *  Parse string to float with fallback
 *
 * @param {String} value string
 * @param {Number} fallback Fallback value
 * @returns {Number} Parsed value
 */
export const parse2Float = (value, fallback) => {
  const number = parseFloat(value);
  return isNaN(number) ? fallback : number;
};
