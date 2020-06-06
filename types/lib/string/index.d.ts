/**
 *  Generate random password string
 * @param {Number} [length=15] Password length
 * @returns {String} Generated password
 */
export declare const randomPassword: (length?: number) => string;
/**
 *  Replace keys in string with object properties
 * @param {String} str String to replace
 * @param {Object} obj Object with values
 * @returns {String} Returned string
 */
export declare const replace: (str: string, obj: {
    [key: string]: string | number | boolean;
}) => string;
/**
 *  Convert camelCase to words
 * @param {String} str String to convert
 * @param {Bool} allowAbbreviations Are abbreviations allowed
 * @returns {String} Converted string
 */
export declare const reverseCamelCase: (str: string, allowAbbreviations?: boolean) => string;
