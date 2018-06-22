import { observable, action, computed, flow } from 'mobx';
import { getCurrentTagMusics } from '../../apis';

const musicTags = [
  '华语',
  '欧美',
  '日韩',
  '流行',
  '摇滚',
  '民谣',
  '原声',
  '轻音乐',
  '古典',
  '粤语',
  'R&B'
];

class MusicStore {
  musicTags = musicTags;
  @observable currentMusicTag = musicTags[0];
  @observable tagMusics = new Map();

  @action
  setCurrentMusicTag = tag => {
    if (tag !== this.currentMusicTag) {
      this.currentMusicTag = tag;
    }
  };

  @computed
  get currentTagMusicList() {
    const currentTagMusics = this.tagMusics.get(this.currentMusicTag);
    return currentTagMusics || [];
  }

  setTagMusics = flow(
    function*(tag, start, count, isAfresh = false) {
      const oldData = this.tagMusics.get(tag);
      if (oldData && !isAfresh) return;
      try {
        const response = yield getCurrentTagMusics(tag, start, count);
        const data = response.data.musics;
        this.tagMusics.set(tag, data);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );
}

const musicStore = new MusicStore();
export default musicStore;
