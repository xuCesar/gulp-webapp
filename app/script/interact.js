'use strict';

//网站接口
//var apiMenu={
//    getAreaTemp:function(cb){
//        $.ajax({
//            url:'http://lorealmen.tsv3.com/openclass/GetComfortMax',
//            error:function(){
//                cb({area:1,temp:16});
//            },
//            success:function(e){
//                var regionNum,temp;
//                regionNum = $.inArray(e.region,data.allArea);
//                temp = parseInt(e.temperature);
//                cb({area:regionNum,temp:temp});
//            }
//        });
//    }
//};

//切换slide 设置CSS动画
function updateSwiper(swiper){
    $(swiper.slides[swiper.previousIndex]).find('.animated').not('.f-not').addClass('js-an');
    $(swiper.slides[swiper.activeIndex]).find('.animated').not('.f-not,.swiper-slide:not(.swiper-slide-active) .animated').removeClass('js-an');
}


//fix: 在ios微信下双击右侧边缘会上移
(function()
{
    var agent = navigator.userAgent.toLowerCase();        //检测是否是ios
    var iLastTouch = null;                                //缓存上一次tap的时间
    if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0)
    {
        document.body.addEventListener('touchend', function(event)
        {
            var iNow = new Date()
                .getTime();
            iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
            var delta = iNow - iLastTouch;
            if (delta < 500 && delta > 0)
            {
                event.preventDefault();
                return false;
            }
            iLastTouch = iNow;
        }, false);
    }

})();
