export declare type Obj = {
    [key: string]: unknown;
} | null | undefined;
/**
 * Filter out undefined or empty values
 * @param {Object} obj Object to filter
 * @returns {Object} The filtered object.
 */
export declare const filterEmpty: (obj: Obj) => Obj;
/**
 *  Get object value
 *
 * @param {Object} obj - object
 * @param {String|Array} path - array or string of parameters
 * @param {Any} fallback - fallback if undefined
 * @returns {Any} Object value
 */
export declare const get: (obj: Obj, path: string | string[], fallback?: unknown) => unknown;
/**
 * Get multiple object values
 *
 * @param {Object} obj - object
 * @param {Array} arr - array of keys
 * @returns {Array|null} The array of values.
 */
export declare const getMultiple: (obj: Obj, arr: unknown[]) => unknown[];
/**
 *  Flatten object
 *
 * @param {Object} obj - object
 * @param {String} prefix - prefix
 * @returns {Object} Flattened object
 */
export declare const flatten: (obj: Obj, prefix?: string) => Obj;
/**
 *  Convert object to json
 * @param {Object} data - data
 * @returns {String} Json value
 */
export declare const toJson: (data: Obj) => string | null | undefined;
