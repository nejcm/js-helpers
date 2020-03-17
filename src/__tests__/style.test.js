import * as helpers from '../lib/style';

describe('style', () => {
  it('should return indefined for null value', () => {
    const val = 0;
    expect(helpers.measure2Css(val)).toBeUndefined();
  });

  it('should return same value for string', () => {
    const val = '3rem';
    expect(helpers.measure2Css(val)).toEqual(val);
  });

  it('should return pixel value from number', () => {
    const val = 3;
    expect(helpers.measure2Css(val)).toEqual('3px');
  });
});
