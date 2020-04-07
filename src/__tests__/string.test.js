import * as helpers from '../lib/string';

describe('string', () => {
  it('should return a generated password', () => {
    const len = 20;
    expect(helpers.randomPassword(len).length).toBe(len);
  });

  it('should return a generated password with default length', () => {
    expect(helpers.randomPassword().length).toBe(15);
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
    expect(helpers.reverseCamelCase(str)).toEqual('hello Mike');
  });

  it('should return same value for null or undefined string', () => {
    const str = null;
    expect(helpers.reverseCamelCase(str)).toEqual(str);
  });

  it('should return an abbriviation', () => {
    const str = 'ABC';
    expect(helpers.reverseCamelCase(str, true)).toEqual(str);
  });
});
