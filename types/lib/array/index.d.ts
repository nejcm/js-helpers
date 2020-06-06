export declare type Arr<T> = T[] | undefined | null;
/**
 * Returns a reordered array
 * @param {Array} array Array to reorder
 * @param {Integer} index Index of item to reorder
 * @param {Integer} destination New index of item to reorder
 * @returns {Array} Reordered array
 */
export declare const reorder: <T>(array: Arr<T>, index: number, destination: number) => Arr<T>;
/**
 * Returns the last index of an item in array based on a condition
 * @param {Array} array Array
 * @param {Function} predicate Condition
 * @returns {Number} Last index
 */
export declare const findIndexReverse: <T>(array: Arr<T>, predicate?: ((x: T) => boolean) | undefined) => number;
/**
 * Returns the last item in array based on a condition
 * @param {Array} array Array
 * @param {Function} predicate Condition
 * @returns {Any} Last element
 */
export declare const findReverse: <T>(array: Arr<T>, predicate?: ((x: T) => boolean) | undefined) => T | null | undefined;
/**
 * Check if an array contains every value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Boolean} Does it contain all elements
 */
export declare const containsAll: <T>(array: Arr<T>, values: T | T[]) => boolean;
/**
 * Check if an array contains any value
 * @param {Array} array Array to check
 * @param {Array|Any} values Values to check
 * @returns {Boolean} Does it contain any elements
 */
export declare const containsAny: <T>(array: Arr<T>, values: T | T[]) => boolean;
/**
 * Returns a grouped array based on a criteria
 * @param {Array} array Array to group
 * @param {Function} criteria Criteria to group by
 * @returns {Object} Grouped array
 */
export declare const groupBy: <T>(array: Arr<T>, criteria: string | number | ((x: T) => string | number | boolean)) => {
    [key: string]: T[];
} | null | undefined;
