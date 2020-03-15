/**
 *  Convert color value from hex to rgba
 *
 * @param {String} hex Hex color value
 * @param {Number} a Opacity
 * @param {String} toString Convert to string
 * @returns {String} rgba color value
 */
export const hex2rgba = (hex, a = 1) => {
  let c = hex.substring(1).split('');
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = `0x${c.join('')}`;
  return [(c >> 16) & 255, (c >> 8) & 255, c & 255, a];
  //return `rgba(${rgba.join(',')})`;
};

/**
 *  Retrieve color lightness
 *
 * @param {String} hex - hex color value
 * @returns {Number} color lightness from 0 to 1
 */
export const lightness = (hex) => {
  const rgba = hex2rgba(hex, 1);
  return parseFloat(
    ((rgba[0] * 0.2126 + rgba[1] * 0.7152 + rgba[2] * 0.0722) / 255).toFixed(6),
  );
};
