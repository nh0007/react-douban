export function processedAuthor(value) {
  if (value[0] && value[0].name) {
    let newValue = '';
    for (let i = 0, ii = value.length; i < ii; i += 1) {
      newValue += `${value[i].name} `;
    }
    return newValue;
  }
  return value.join();
}

export function processedArray(array, length) {
  const num = array.length;
  const chunkedArray = [];
  for (let i = 0, j = 0; i < num; i += length, j += 1) {
    chunkedArray[j] = array.slice(i, i + length);
  }
  return chunkedArray;
}

export default {
  processedAuthor,
  processedArray
};
