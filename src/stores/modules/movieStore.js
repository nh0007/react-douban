import { observable, action, computed, flow } from 'mobx';
import { processedArray } from '../../utils/utils';
import { getCurrentTypeMovies, getCurrentTagMovies } from '../../apis';

const movieTypes = [
  { value: 'in_theaters', text: '正在热映' },
  { value: 'coming_soon', text: '即将上映' }
];

const movieTags = [
  '热门',
  '最新',
  '经典',
  '华语',
  '欧美',
  '韩国',
  '日本',
  '动作',
  '喜剧',
  '爱情',
  '科幻',
  '悬疑',
  '恐怖',
  '动画',
  '可播放',
  '豆瓣高分',
  '冷门佳片'
];

class MovieStore {
  movieTypes = movieTypes;
  @observable currentMovieType = movieTypes[0];
  @observable typeMovies = new Map();
  movieTags = movieTags;
  @observable currentMovieTag = movieTags[0];
  @observable tagMovies = new Map();

  @action
  setCurrentMovieType = type => {
    if (type.value !== this.currentMovieType.value) {
      this.currentMovieType = type;
    }
  };

  @action
  setCurrentMovieTag = tag => {
    if (tag !== this.currentMovieTag) {
      this.currentMovieTag = tag;
    }
  };

  @computed
  get currentTypeMovieList() {
    const currentTypeMovies = this.typeMovies.get(this.currentMovieType.value);
    if (!currentTypeMovies) {
      return [];
    }
    return processedArray(currentTypeMovies, 12);
  }

  @computed
  get currentTagMovieList() {
    const currentTagMovies = this.tagMovies.get(this.currentMovieTag);
    if (!currentTagMovies) {
      return [];
    }
    return processedArray(currentTagMovies, 10);
  }

  setTypeMovies = flow(
    function*(type, start, count, isAfresh = false) {
      const oldData = this.typeMovies.get(type.value);
      if (oldData && !isAfresh) return;
      try {
        const response = yield getCurrentTypeMovies(type.value, start, count);
        const data = response.data.subjects;
        this.typeMovies.set(type.value, data);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );

  setTagMovies = flow(
    function*(tag, start, count, isAfresh = false) {
      const oldData = this.tagMovies.get(tag);
      if (oldData && !isAfresh) return;
      try {
        const response = yield getCurrentTagMovies(tag, start, count);
        const data = response.data.subjects;
        this.tagMovies.set(tag, data);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );
}

const movieStore = new MovieStore();
export default movieStore;
