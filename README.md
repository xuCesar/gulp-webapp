#gulp-webapp

 基于[Yeoman](http://yeoman.io) 的前端模块 [webapp](https://github.com/yeoman/generator-webapp)的重构。

### 增加常用插件

  * [Jquery](https://github.com/jquery/jquery) Jquery
  * [Swiper](http://www.idangero.us/swiper/api/) 滑动组件
  * [animate.css](http://daneden.github.io/animate.css/)   css动画库
  * ~~[pace.js](http://github.hubspot.com/pace/) 基于监控网站请求的loading~~
  * [preload.js](http://createjs.com/) 基于creatjs的loading

### 环境依赖

  * gulp  : npm install -g gulp
  * yoman : npm install -g yo 
  * bower : npm install -g bower

### 项目依赖
  
  * npm : npm install
  * bower : bower install

### Gulp命令

  * 开始编辑模式 : gulp serve
  * 发布产品代码 : gulp build (压缩文件，并重命名)
  * 发布产品代码 : gulp minbuild (不压缩文件，不重命名)
    
