/**
 * Filter out undefined or empty values
 * @param {Object} obj Object to filter
 * @returns {Object} The filtered object.
 */
export const filterEmpty = (obj) => {
  Object.keys(obj || {}).forEach((key) => {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key];
    }
  });
  return obj;
};

/**
 *  Get object value
 *
 * @param {Object} obj - object
 * @param {String|Array} path - array or string of parameters
 * @param {Any} fallback - fallback if undefined
 * @returns {Any} Object value
 */
export const get = (obj, path, fallback) => {
  if (!obj) {
    return fallback || obj;
  }
  const pathArr = typeof path === 'string' ? path.split('.') : path;
  const value = pathArr.reduce(
    (xs, x) => (xs && xs[x] !== null ? xs[x] : null),
    obj,
  );
  return value !== undefined ? value : fallback;
};

/**
 * Get multiple object values
 *
 * @param {Object} o - object
 * @param {Array} arr - array of keys
 * @returns {Array|null} The array of values.
 */
export const getMultiple = (o, arr = []) => arr.map((key) => get(o, key));

/**
 *  Flatten object
 *
 * @param {Object} obj - object
 * @param {String} prefix - prefix
 * @returns {Object} Flattened object
 */
export const flatten = (obj, prefix = '') =>
  Object.keys(obj || {}).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flatten(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});

/**
 *  Convert object to json
 * @param {Object} data - data
 * @returns {String} Json value
 */
export const toJson = (data) => (data ? JSON.stringify(data) : undefined);
