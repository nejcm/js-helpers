import {filterEmpty} from '../object';

/**
 * Serialize an object into a query string
 * @param {Object} obj Object to serialize
 * @param {Bool} removeEmpty Remove empty
 * @returns {String} The query string.
 */
export const serialize = (obj, removeEmpty = true) => {
  if (!obj) {
    return '';
  }
  if (removeEmpty) {
    obj = filterEmpty(obj);
  }
  return Object.keys(obj)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
    })
    .join('&');
};

/**
 * De-serialize a query string into an object
 * @param {String} queryString Query string to deserialize
 * @returns {Object} The query object.
 */
export const deserialize = (queryString) => {
  if (!queryString) {
    return {};
  }
  const urlParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlParams.entries());
};

/**
 * Update url
 * @param {Object} obj Object
 * @param {String} title Title
 * @param {String} path Path
 * @param {String} queryString Query string
 * @returns {Bool} Success
 */
export const pushHistoryState = (obj, title, path, queryString) => {
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

/**
 * Replace url
 * @param {Object} obj Object
 * @param {String} title Title
 * @param {String} path Path
 * @param {String} queryString Query string
 * @returns {Bool} Success
 */
export const replaceHistoryState = (obj, title, path, queryString) => {
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
