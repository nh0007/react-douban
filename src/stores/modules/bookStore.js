import { observable, action, flow } from 'mobx';
import { getCurrentTagBooks, getCurrentTypeBooks } from '../../apis';

const bookTags = [
  {
    tagName: '文学',
    subTags: [
      '小说',
      '随笔',
      '散文',
      '诗歌',
      '童话',
      '名著',
      '港台',
      '外国文学',
      '中国文学',
      '日本文学',
      '古典文学'
    ]
  },
  {
    tagName: '流行',
    subTags: [
      '漫画',
      '推理',
      '绘本',
      '青春',
      '科幻',
      '言情',
      '武侠',
      '奇幻',
      '悬疑',
      '穿越',
      '魔幻',
      '校园'
    ]
  },
  {
    tagName: '文化',
    subTags: [
      '历史',
      '哲学',
      '传记',
      '设计',
      '建筑',
      '电影',
      '回忆录',
      '音乐',
      '心理学',
      '社会学',
      '国学',
      '艺术史'
    ]
  },
  {
    tagName: '生活',
    subTags: [
      '旅行',
      '励志',
      '职场',
      '美食',
      '教育',
      '灵修',
      '健康',
      '家居',
      '爱情',
      '女性',
      '摄影'
    ]
  },
  {
    tagName: '经管',
    subTags: [
      '经济学',
      '管理',
      '商业',
      '金融',
      '营销',
      '理财',
      '股票',
      '企业史',
      '创业',
      '投资',
      '广告',
      '策划'
    ]
  },
  {
    tagName: '科技',
    subTags: [
      '科普',
      '互联网',
      '编程',
      '交互设计',
      '算法',
      '通信',
      '神经网络',
      '用户体验',
      '程序',
      '科技',
      'web'
    ]
  }
];

const bookTypes = ['虚构类', '非虚构类'];

class BookStore {
  bookTags = bookTags;
  @observable currentBookTags = bookTags[0];
  @observable currentBookTag = bookTags[0].subTags[0];
  @observable tagBooks = new Map();
  @observable displayContentPosition = null;

  bookTypes = bookTypes;
  @observable currentBookType = bookTypes[0];
  @observable typeBooks = new Map();

  @action
  setCurrentBookTags = tags => {
    if (tags.tagName !== this.currentBookTags.tagName) {
      this.currentBookTags = tags;
    }
  };

  @action
  setCurrentBookTag = tag => {
    if (tag !== this.currentBookTag) {
      this.currentBookTag = tag;
    }
  };

  @action
  setDisplayContentPosition = position => {
    this.displayContentPosition = position;
  };

  setTagBooks = flow(
    function*(tag, start, count, isAfresh = false, isMerge = false) {
      const oldData = this.tagBooks.get(tag);
      if (oldData && !isAfresh) return;
      try {
        const response = yield getCurrentTagBooks(tag, start, count);
        const data = response.data.books;
        if (isMerge) {
          this.tagBooks.set(tag, oldData.concat(data));
        } else {
          this.tagBooks.set(tag, data);
        }
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );

  @action
  setCurrentBookType = type => {
    if (type !== this.currentBookType) {
      this.currentBookType = type;
    }
  };

  setTypeBooks = flow(
    function*(type, start, count, isAfresh = false) {
      const oldData = this.typeBooks.get(type);
      if (oldData && !isAfresh) return;
      try {
        const response = yield getCurrentTypeBooks(type, start, count);
        const data = response.data.books;
        this.typeBooks.set(type, data);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );
}

const bookStore = new BookStore();
export default bookStore;
