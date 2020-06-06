import {filterEmpty} from '../object';

export type Value =
  | string
  | number
  | boolean
  | {[key: string]: unknown}
  | null
  | undefined;
export type Obj = {
  [key: string]: Value;
};

export const serialize = (obj: Obj, removeEmpty = true): string => {
  const o = (removeEmpty ? filterEmpty(obj) : obj) as Obj;
  if (!o) {
    return '';
  }
  return Object.keys(o)
    .map((key: string) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(o[key]))}`;
    })
    .join('&');
};

export const deserialize = (queryString: string): Obj => {
  if (!queryString) {
    return {};
  }
  const urlParams = new URLSearchParams(queryString);
  // return Object.fromEntries(urlParams.entries());
  const result = {};
  urlParams.forEach((value, key) => {
    result[key] = value;
  });
  return result;
};

export const pushHistoryState = (
  obj: Obj,
  title: string,
  path: string,
  queryString?: string,
): boolean => {
  let url = path;
  if (queryString) {
    url = `${url}?${queryString}`;
  }
  const old = `${window.location.pathname}${window.location.search}`;
  if (old === url) {
    return false;
  }
  window.history.pushState(obj, title, url);
  return true;
};

export const replaceHistoryState = (
  obj: Obj,
  title: string,
  path: string,
  queryString?: string,
): boolean => {
  let url = path;
  if (queryString) {
    url = `${url}?${queryString}`;
  }
  const old = `${window.location.pathname}${window.location.search}`;
  if (old === url) {
    return false;
  }
  window.history.replaceState(obj, title, url);
  return true;
};
