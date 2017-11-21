#gulp-webapp

 基于[Yeoman](http://yeoman.io) 的前端模块 [webapp](https://github.com/yeoman/generator-webapp)的重构。

##增加常用插件

  * [Jquery](https://github.com/jquery/jquery) Jquery
  * [Swiper](http://www.idangero.us/swiper/api/) 滑动组件
  * [animate.css](http://daneden.github.io/animate.css/)   css动画库
  * ~~[pace.js](http://github.hubspot.com/pace/) 基于监控网站请求的loading~~
  * [preload.js](http://createjs.com/) 基于creatjs的loading

## 环境

###全局安装gulp
    npm install -g gulp

###全局安装yoman
    npm install -g yo
    
###全局安装bower
    npm install -g bower
    
###安装项目用到的bower
    bower install
    
###安装项目用到的npm插件
    npm install

## Gulp命令

### 开始编辑模式
    gulp serve

### 发布产品代码
    gulp build

### 发布产品代码-不压缩html、css、js，不重命名资源文件。
    gulp maxbuild
    
