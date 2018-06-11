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

export default {
  processedAuthor
};
