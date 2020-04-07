const isArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Parameter is not an array!');
  }
};

/**
 * Returns a reordered array
 * @param {Array} array Array to reorder
 * @param {Integer} index Index of item to reorder
 * @param {Integer} destination New index of item to reorder
 * @returns {Array} Reordered array
 */
export const reorder = (array, index, destination) => {
  if (!array) {
    return array;
  }
  isArray(array);
  const result = [...array];
  const [removed] = result.splice(index, 1);
  result.splice(destination, 0, removed);
  return result;
};

/**
 * Returns the last index of an item in array based on a condition
 * @param {Array} array Array
 * @param {Function} predicate Condition
 * @returns {Number} Last index
 */
export const findIndexReverse = (array, predicate) => {
  if (!array) {
    return array;
  }
  isArray(array);
  for (let i = array.length - 1; i >= 0; --i) {
    const x = array[i];
    if (!predicate || predicate(x)) {
      return i;
    }
  }
};

/**
 * Returns the last item in array based on a condition
 * @param {Array} array Array
 * @param {Function} predicate Condition
 * @returns {Any} Last element
 */
export const findReverse = (array, predicate) => {
  if (!array) {
    return array;
  }
  isArray(array);
  const index = findIndexReverse(array, predicate);
  return index ? array[index] : index;
};

/**
 * Check if an array contains every value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Bool} Does it contain all
 */
export const containsAll = (array, values) => {
  if (!array) {
    return array;
  }
  isArray(array);
  values = Array.isArray(values) ? values : [values];
  return values.every((val) => array.includes(val));
};

/**
 * Check if an array contains any value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Bool} Does it contain any
 */
export const containsAny = (array, values) => {
  if (!array) {
    return array;
  }
  isArray(array);
  values = Array.isArray(values) ? values : [values];
  return values.some((val) => array.includes(val));
};

/**
 * Returns a grouped array based on a criteria
 * @param {Array} array Array to group
 * @param {Function} criteria Criteria to group by
 * @returns {Object} Grouped array
 */
export const groupBy = (array, criteria) => {
  if (!array) {
    return array;
  }
  isArray(array);
  return array.reduce((result, item) => {
    const key =
      typeof criteria === 'function' ? criteria(item) : item[criteria];
    (result[key] = result[key] || []).push(item);
    return result;
  }, {});
};
