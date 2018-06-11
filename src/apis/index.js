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

export default {
  getSearchData
};
