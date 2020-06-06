export type Arr<T> = T[] | undefined | null;

const isArray = (arr: unknown): void => {
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
export const reorder = <T>(
  array: Arr<T>,
  index: number,
  destination: number,
): Arr<T> => {
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
export const findIndexReverse = <T>(
  array: Arr<T>,
  predicate?: (x: T) => boolean,
): number => {
  if (!array) {
    return -1;
  }
  isArray(array);
  for (let i = array.length - 1; i >= 0; --i) {
    if (!predicate || predicate(array[i])) {
      return i;
    }
  }
  return -1;
};

/**
 * Returns the last item in array based on a condition
 * @param {Array} array Array
 * @param {Function} predicate Condition
 * @returns {Any} Last element
 */
export const findReverse = <T>(
  array: Arr<T>,
  predicate?: (x: T) => boolean,
): T | undefined | null => {
  if (!array) {
    return array;
  }
  isArray(array);
  const index = findIndexReverse(array, predicate);
  return index > -1 ? array[index] : undefined;
};

/**
 * Check if an array contains every value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Boolean} Does it contain all elements
 */
export const containsAll = <T>(array: Arr<T>, values: T[] | T): boolean => {
  if (!array) {
    return false;
  }
  isArray(array);
  values = Array.isArray(values) ? values : [values];
  return values.every((val) => array.includes(val));
};

/**
 * Check if an array contains any value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Boolean} Does it contain any elements
 */
export const containsAny = <T>(array: Arr<T>, values: T[] | T): boolean => {
  if (!array) {
    return false;
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
export const groupBy = <T>(
  array: Arr<T>,
  criteria: ((x: T) => string | number | boolean) | string | number,
): {[key: string]: T[]} | null | undefined => {
  if (!array) {
    return array;
  }
  isArray(array);
  return array.reduce((result, item) => {
    const key = (typeof criteria === 'function'
      ? criteria(item)
      : item[criteria]
    ).toString();
    (result[key] = result[key] || []).push(item);
    return result;
  }, {});
};
