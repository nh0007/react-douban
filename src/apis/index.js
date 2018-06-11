import axios from 'axios';

export function getSearchData(keyword, moduleType, start = 0, count = 6) {
  return axios.get(`/${moduleType}/search`, {
    params: {
      q: keyword,
      start,
      count
    }
  });
}

export function getCurrentTagBooks(tag, start = 0, count = 40) {
  return axios.get('/book/search', {
    params: {
      tag,
      start,
      count
    }
  });
}

export function getCurrentTypeBooks(type, start = 0, count = 12) {
  return axios.get('/book/search', {
    params: {
      q: type,
      start,
      count
    }
  });
}

export default {
  getSearchData,
  getCurrentTagBooks,
  getCurrentTypeBooks
};
