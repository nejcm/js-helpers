import * as helpers from '../lib/string';

describe('string', () => {
  it('should return a generated password', () => {
    const len = 20;
    expect(helpers.randomPassword(len).length).toBe(len);
  });

  it('should return a generated password with default length', () => {
    expect(helpers.randomPassword().length).toBe(15);
  });

  it('should shorten string with ellipsis', () => {
    const str = 'Hello!';
    expect(helpers.ellipsis(str, 2)).toEqual('He...');
  });

  it('should return null for null string', () => {
    const str = null;
    expect(helpers.ellipsis(str, 2)).toEqual(str);
  });

  it('should not return string with ellipsis for shorter strings', () => {
    const str = 'Short!';
    expect(helpers.ellipsis(str, 20)).toEqual(str);
  });

  it('should return string with replaced values', () => {
    const str = 'Hello {{name}}!';
    const val = 'Mike';
    expect(helpers.replace(str, {name: val})).toEqual(`Hello ${val}!`);
  });

  it('should return null for empty string', () => {
    const str = null;
    expect(helpers.replace(str, {name: '1'})).toEqual(null);
  });

  it('should return sentence from camel case word', () => {
    const str = 'helloMike';
    expect(helpers.camelCase2Word(str)).toEqual('hello Mike');
  });

  it('should return an abbriviation', () => {
    const str = 'ABC';
    expect(helpers.camelCase2Word(str, true)).toEqual(str);
  });
});
