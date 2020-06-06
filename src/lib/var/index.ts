/**
 * Check that value is not null or undefined.
 * @param {Any} value Value to check
 * @returns {Boolean} Is value defined.
 */
export const isDefined = (value: unknown): boolean =>
  value !== null && value !== undefined;
