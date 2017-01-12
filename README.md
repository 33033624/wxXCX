## 微信小程序-豆瓣电影项目
###项目树

```

├── README.md
├── app.js
├── app.json
├── app.wxss
├── images
│   ├── avatar
│   │   └── 1.png
│   └── icon
│       ├── arrow-right.png
│       ├── none-star.png
│       ├── star.png
│       └── xx.png
├── pages
│   ├── movies
│   │   ├── more-movie
│   │   │   ├── more-movie.js
│   │   │   ├── more-movie.json
│   │   │   ├── more-movie.wxml
│   │   │   └── more-movie.wxss
│   │   ├── movie
│   │   │   ├── movie-template.wxml
│   │   │   └── movie-template.wxss
│   │   ├── movie-detail
│   │   │   ├── class
│   │   │   │   └── Movie.js
│   │   │   ├── movie-detail.js
│   │   │   ├── movie-detail.json
│   │   │   ├── movie-detail.wxml
│   │   │   └── movie-detail.wxss
│   │   ├── movie-grid
│   │   │   ├── movie-grid-template.wxml
│   │   │   └── movie-grid-template.wxss
│   │   ├── movie-list
│   │   │   ├── movie-list-template.wxml
│   │   │   └── movie-list-template.wxss
│   │   ├── movies.js
│   │   ├── movies.json
│   │   ├── movies.wxml
│   │   ├── movies.wxss
│   │   └── stars
│   │       ├── stars-template.wxml
│   │       └── stars-template.wxss
│   └── welcome
│       ├── welcome.js
│       ├── welcome.json
│       ├── welcome.wxml
│       └── welcome.wxss
├── screenshots
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
└── utils
    └── util.js
```
### 效果图
![image](https://github.com/songhaoreact/weixin/blob/master/screenshots/1.png)
![image](https://github.com/songhaoreact/weixin/blob/master/screenshots/2.png)
![image](https://github.com/songhaoreact/weixin/blob/master/screenshots/3.png)
### 功能说明
接口访问来自豆瓣api,目前功能有
搜索功能
下拉刷新
上拉加载
### 代码说明
部分采用es6语言，组件化，模块化开发。
### 安装说明

```
git clone https://github.com/songhaoreact/weixin.git
cd weixin
可以真机运行也可以ide运行
补充说明：
screenshots文件夹不需要，只是github上的效果图。
readme也是github上面的，都不需要。
运行前删掉screenshots和readme.md文件就行。
项目来自慕课网实战,api采用豆瓣公共api接口。
如果demo对你有帮助的话，帮忙点个star。
```
