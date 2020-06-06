import * as helpers from '../lib/url';

describe('url', () => {
  it('should return a serialized object with removed empty values', () => {
    const obj = {
      key: 123,
      key2: 'hei',
      key3: null,
    };
    expect(helpers.serialize(obj)).toEqual('key=123&key2=hei');
  });

  it('should return empty string for null object', () => {
    const obj = (null as unknown) as helpers.Obj;
    expect(helpers.serialize(obj)).toEqual('');
  });

  it('should return string with empty values', () => {
    const obj = {
      key: 123,
      key2: 'hei',
      key3: null,
    };
    expect(helpers.serialize(obj, false)).toEqual('key=123&key2=hei&key3=null');
  });

  it('should return a deserialized string', () => {
    const str = 'key=123&key2=hei';
    expect(helpers.deserialize(str)).toEqual({
      key: '123',
      key2: 'hei',
    });
  });

  it('should return empty object for emptry string', () => {
    const str = (null as unknown) as string;
    expect(helpers.deserialize(str)).toEqual({});
  });

  it('should return true for pushHistoryState', () => {
    expect(helpers.pushHistoryState({}, 'Title', '/new-path')).toBeTruthy();
  });

  it('should return false for same pushHistoryState', () => {
    helpers.pushHistoryState({}, 'Title', '/new-path-1', 'queryString=1');
    expect(
      helpers.pushHistoryState({}, 'Title', '/new-path-1', 'queryString=1'),
    ).toBeFalsy();
  });

  it('should return true for replaceHistoryState', () => {
    expect(
      helpers.replaceHistoryState({}, 'Title', '/new-path-2', 'queryString=1'),
    ).toBeTruthy();
  });

  it('should return false for same replaceHistoryState', () => {
    helpers.replaceHistoryState({}, 'Title', '/new-path-3');
    expect(helpers.replaceHistoryState({}, 'Title', '/new-path-3')).toBeFalsy();
  });
});
