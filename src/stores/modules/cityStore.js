import { observable, action, flow } from 'mobx';
import { getCities } from '../../apis';

const activityTypes = [
  { value: 'music', text: '音乐' },
  { value: 'drama', text: '戏剧' },
  { value: 'exhibition', text: '展览' },
  { value: 'salon', text: '讲座' },
  { value: 'party', text: '聚会' },
  { value: 'sports', text: '运动' },
  { value: 'travel', text: '旅行' },
  { value: 'commonweal', text: '公益' },
  { value: 'film', text: '电影' }
];

const dayTypes = [
  { value: 'today', text: '今天' },
  { value: 'tomorrow', text: '明天' },
  { value: 'weekend', text: '周末' },
  { value: 'week', text: '最近一周' }
];

class CityStore {
  activityTypes = activityTypes;
  dayTypes = dayTypes;
  @observable cities = [];
  @observable currentCity = {};

  @action
  setCurrentCity = city => {
    if (city.id !== this.currentCity.id) {
      this.currentCity = city;
    }
  };

  setCities = flow(
    function*(start, count, isAfresh = false) {
      if (this.cities.length !== 0 && !isAfresh) {
        return;
      }
      try {
        const response = yield getCities(start, count);
        const data = response.data.locs;
        this.cities = data;
        this.setCurrentCity(data[0]);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );
}

const cityStore = new CityStore();
export default cityStore;
