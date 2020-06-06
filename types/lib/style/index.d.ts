/**
 *  Convert measure value to valid css
 * @param {String|Number} value Measure value
 * @param {String} unit Measure unit (px|pt|em|rem|vh|vw ...) https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
 * @returns {String} Css value
 */
export declare const measure2Css: (value: string | number, unit?: string) => string | undefined;
