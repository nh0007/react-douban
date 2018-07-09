# react-douban

> A React project

## 技术栈

React + Mobx + react-router + axios + Sass + ES6/7

## 博文地址

#### [基于React搭建一个简易版豆瓣](https://juejin.im/post/5b41b1be51882519790c6c12)

## 项目运行

- 克隆项目

```shell
git clone https://github.com/nh0007/react-douban.git
```

- 进入项目根目录，安装依赖

```shell
npm install 
or 
yarn install
```

- 运行项目

```shell
npm start
or
yarn start
```

- 等待运行完毕后，浏览器会自动弹出访问页，即可看到项目运行效果。

## 代码大致结构

```shell
├── apis  // 资源请求方法
├── assets  // 图片资源、样式
├── components  // 项目组件
│   ├── App  // 根组件
│   ├── Book  // 书本组件
│       ├── BookTag
│       ├── BookTagContent
│       ├── BookTagMoreContent
│       └── BookTypeContent
│   ├── City  // 同城活动组件
│   ├── Common  // 公用、基础组件
│       ├── CommonModal
│       ├── CommonSlider
│       └── CommonTagList
│   ├── Header  // 头部组件
│   ├── Main  // 主内容区域组件
│   ├── Movie  // 电影组件
│       ├── MovieTagContent
│       └── MovieTypeContent
│   ├── Music  // 音乐组件
│       └── MusicTagContent
├── stores  // 状态管理
├── utils  // 工具函数等
└── index.js  // 入口文件
```

## 项目截图

读书页：
![bookTagContent](https://github.com/nh0007/react-douban/blob/master/screenshot/bookTagContent.png)

![bookTagMoreContent](https://github.com/nh0007/react-douban/blob/master/screenshot/bookTagMoreContent.png)

![bookTypeContent](https://github.com/nh0007/react-douban/blob/master/screenshot/bookTypeContent.png)

电影页：
![movieTagContent](https://github.com/nh0007/react-douban/blob/master/screenshot/movieTagContent.png)

![movieTypeContent](https://github.com/nh0007/react-douban/blob/master/screenshot/movieTypeContent.png)

音乐页：
![musicTagContent](https://github.com/nh0007/react-douban/blob/master/screenshot/musicTagContent.png)

同城活动页：
![cityActivity](https://github.com/nh0007/react-douban/blob/master/screenshot/cityActivity.png)

搜索页：
![search](https://github.com/nh0007/react-douban/blob/master/screenshot/search.png)

## 结语
若项目出现啥问题或者有更好的实现，欢迎交流。另外，欢迎star~
