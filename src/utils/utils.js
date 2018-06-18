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

export function getContentPosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    left: rect.left,
    top: rect.top
  };
}

export function getStarStyle(score) {
  const posY = Math.round(10 - score) * 10;
  return {
    backgroundPosition: `0 ${posY}%`
  };
}

export function getTagString(tags) {
  let tagString = '';
  for (let i = 0, ii = tags.length; i < ii; i += 1) {
    tagString += `${tags[i].name}${i === ii - 1 ? '' : ' / '}`;
  }
  tagString = tagString === '' ? '无' : tagString;
  return tagString;
}

export default {
  processedAuthor,
  processedArray,
  getContentPosition,
  getStarStyle,
  getTagString
};
