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

export function getSongArray(songs) {
  const songArray = songs.split('\n').map(song => song.slice(3));
  return songArray.slice(0, 4);
}

// 处理后台返回的起止时间格式，同一天的话返回这种格式：x月x日 19:30 - 21:30
// 不同天的话返回这种格式：x月x日 至 y月y日
export function getDateString(startTime, endTime) {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const startMonth = startDate.getMonth() + 1;
  const endMonth = endDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const startHour = startDate.getHours();
  const endHour = endDate.getHours();
  const startMinute = startDate.getMinutes();
  const endMinute = endDate.getMinutes();
  const timeArray = [startHour, endHour, startMinute, endMinute];
  for (let i = 0, ii = timeArray.length; i < ii; i += 1) {
    if (timeArray[i] < 10) {
      timeArray[i] = `0${timeArray}`;
    }
  }
  if (startMonth === endMonth && startDay === endDay) {
    return `${startMonth}月${startDay}日  ${timeArray[0]}:${timeArray[2]} - ${
      timeArray[1]
    }:${timeArray[2]}`;
  }
  return `${startMonth}月${startDay}日  至  ${endMonth}月${endDay}日`;
}

export default {
  processedAuthor,
  processedArray,
  getContentPosition,
  getStarStyle,
  getTagString,
  getSongArray,
  getDateString
};
