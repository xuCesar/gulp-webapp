
function initSwiper(){
    //swiper0 配置
    init.swiper0 = new Swiper('#swiper0', {
        direction: 'vertical',
        onInit:function(swiper){
            updateSwiper(swiper);
        },
        onSlideChangeStart:function(swiper){
            updateSwiper(swiper);
        }
    });
}
    
preloader.init({
    vt:1
})
preloader.addAssets(config.assets, 'images/');
// preloader.addAssets(config.media, 'media/');
preloader.onLoadProgress = function(e){
    console.log((e * 100 | 0) + '%')
}

preloader.onLoadComplete = function(res){

    loadCompelete()
}


function loadCompelete(){
    initSwiper()
}

preloader.load();


$(function() {

    //窗口响应事件
    //windowResized();
    //$(window).resize(function() {
    //    windowResized();
    //});
    //弹窗
    $('.js-popupBtn').on('click', function () {
        var name = $(this).attr('data-popupname');
        $('#' + name).fadeIn();
    });
    //关闭
    $('.js-popupClose').on('click', function () {
        var name = $(this).attr('data-popupname');
        $('#' + name).fadeOut();
    });

});
