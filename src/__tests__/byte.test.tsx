import * as helpers from '../lib/byte';

const multiplier = helpers.multiplier;

describe('byte', () => {
  it('should return 0 bytes', () => {
    const bytes = 0;
    expect(helpers.formatBytes(bytes)).toEqual('0 B');
  });

  it('should return kilo bytes', () => {
    const result = 3.1;
    const bytes = result * multiplier;
    expect(helpers.formatBytes(bytes)).toEqual(`${result} KB`);
  });

  it('should return mega bytes with 3 decimal', () => {
    const result = 2.333;
    const bytes = result * multiplier * multiplier;
    expect(helpers.formatBytes(bytes, 3)).toEqual(`${result} MB`);
  });

  it('should return 0 decimals with wrong decimal value provided', () => {
    const result = 2.333;
    const bytes = result * multiplier * multiplier;
    expect(helpers.formatBytes(bytes, -1)).toEqual(`${2} MB`);
  });

  it('should return mega bytes from bytes', () => {
    const result = 5.62;
    const bytes = result * multiplier * multiplier;
    expect(helpers.convertBytes(bytes)).toEqual(result);
  });

  it('should return 0 bytes', () => {
    const bytes = 0;
    expect(helpers.convertBytes(bytes)).toEqual(bytes);
  });

  it('should return value bytes because of wrong value provided', () => {
    const bytes = 9200000;
    // Just for testing purposes
    const from = ('YY' as unknown) as helpers.Sizes;
    const to = ('PB' as unknown) as helpers.Sizes;
    expect(helpers.convertBytes(bytes, from, to)).toEqual(bytes);
  });

  it('should return 0 decimals with wrong decimal value provided', () => {
    const result = 2.34;
    const bytes = result * multiplier * multiplier;
    expect(helpers.convertBytes(bytes, 'B', 'MB', -1)).toEqual(2);
  });

  it('should return bytes from kilo bytes with 1 decimal', () => {
    const kb = 4.8;
    const result = kb * multiplier;
    expect(helpers.convertBytes(kb, 'KB', 'B', 1)).toEqual(result);
  });
});
