export const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const multiplier = 1024;

/**
 *  Converting bytes to human readable values
 *
 * @param {Integer} bytes - bytes
 * @param {Integer} decimals - number od decimal places
 * @returns {String} Converted value
 */
export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return '0 B';
  }
  const dm = decimals < 0 ? 0 : decimals;
  const i = Math.floor(Math.log(bytes) / Math.log(multiplier));
  return `${parseFloat((bytes / multiplier ** i).toFixed(dm))} ${sizes[i]}`;
};

/**
 *  Convert bytes
 *
 * @param {Integer} bytes Bytes
 * @param {String} from Number od decimal places
 * @param {String} to Number od decimal places
 * @param {Integer} decimals Number od decimal places
 * @returns {Decimal} Converted value
 */
export const convertBytes = (bytes, from = 'B', to = 'MB', decimals = 2) => {
  if (!bytes) {
    return bytes;
  }
  const dm = decimals < 0 ? 0 : decimals;
  const i = sizes.indexOf(to) - sizes.indexOf(from);
  return i === 0 ? bytes : parseFloat((bytes / multiplier ** i).toFixed(dm));
};
