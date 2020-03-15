import * as helpers from '../lib/color';

describe('color', () => {
  it('should convert hex to rgba', () => {
    const hex = '#fff';
    expect(helpers.hex2rgba(hex, 0.5)).toEqual([255, 255, 255, 0.5]);
  });

  it('should convert hex to rgba with default opacity', () => {
    const hex = '#000000';
    expect(helpers.hex2rgba(hex)).toEqual([0, 0, 0, 1]);
  });

  it('should calculate the lightnes of the color', () => {
    const hex = '#fafafa';
    expect(helpers.lightness(hex) > 0.9).toBeTruthy();
  });
});
