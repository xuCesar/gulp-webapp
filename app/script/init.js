/**
 * 页面第一个加载的JS，发布后会内嵌在HTML中
 * 检查、设置网站状态,设置基础字体，跳转link 等。
 * isTest: 是否在测试服务器
 * init.psd.p(): PSD的源文件的高宽比
 */


var init={
    isTest:window.location.href.indexOf('loreal')==-1,
    site:{
        url:window.location.href.split('#')[0],
        getPath:function(){
            return this.url.substring(0,this.url.lastIndexOf('/')+1)
        }
    },
    psd:{
        w:640 , // PSD 宽
        h:1008, // PSD 高
        p:function(){  //高宽比
            return this.h/this.w;
        }
    }
};


var config = {};
config.assets = {

body:  'body.jpg',
horizontal_tip: 'horizontal_tip.png',
logo:  'logo.jpg',
share_img:  'share_img.jpg',



// ani_flower: {type: 'ani', prefix: "flower/flower_000", suffix: ".jpg", start:0, end: 41}

};


config.media = {
    bgm: 'bgm.mp3',
};


//窗口变化时改变容器大小
//function windowResized() {
//    var w = window,
//        d = document,
//        e = d.documentElement,
//        g = d.getElementsByTagName('body')[0],
//        x = w.innerWidth || e.clientWidth || g.clientWidth;
//    if(document.getElementById('warp')){document.getElementById('warp').style.height = x * init.psd.p()+'px'}
//}
//windowResized();
