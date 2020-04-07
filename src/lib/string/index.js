/**
 *  Generate random password string
 * @param {Number} [length=15] Password length
 * @returns {String} Generated password
 */
export const randomPassword = (length = 15) => {
  const pattern = /[a-zA-Z0-9_\-+.#$%&/()]/;
  return Array(length)
    .fill(null)
    .map(() => {
      let result;
      for (;;) {
        result = String.fromCharCode(Math.floor(Math.random() * 256));
        if (pattern.test(result)) {
          break;
        }
      }
      return result;
    })
    .join('');
};

/**
 *  Replace keys in string with object properties
 * @param {String} str String to replace
 * @param {Object} obj Object with values
 * @returns {String} Returned string
 */
export const replace = (str, obj) => {
  if (!str || !obj) {
    return str;
  }
  return str.replace(/{{(\w+)}}/g, (_, k) => {
    return obj[k];
  });
};

/**
 *  Convert camelCase to words
 * @param {String} str String to convert
 * @param {Bool} allowAbbreviations Are abbreviations allowed
 * @returns {String} Converted string
 */
export const reverseCamelCase = (str, allowAbbreviations = false) => {
  if (!str) {
    return str;
  }
  return allowAbbreviations
    ? str.replace(/([^.|\s|^A-Z])([A-Z])/g, '$1 $2')
    : str.replace(/([A-Z])/g, ' $1');
};
