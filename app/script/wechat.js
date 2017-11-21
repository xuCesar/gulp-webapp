(function(){

  //正式环境获取微信接口
  if(!init.isTest){
    $.ajax({
      url:'http://mobilecampaign.lorealparis.com.cn/Interface/WeiXinOAuth/Signature.loreal',
      data:{url:init.site.url},
      success:function(config){
        console.log(config);
        var wxConfig={
          debug: false,
          appId: config.message.AppKey,
          timestamp:config.message.timestamp,
          nonceStr: config.message.nonceStr,
          signature: config.message.signature,
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo']
        };
        wx.config(wxConfig);
      }
    });

    //绑定微信分享事件
    try{
      wx.ready(function(){

        //设置分享后的回调函数
        var callback={
          success:function (msg){
            msg=JSON.stringify(msg).toLowerCase();
            if(msg.indexOf('timeline')>-1){

              //分享到朋友圈
            }else if(msg.indexOf('message')>-1){

              //分享到给朋友
            }
          }
        };
        wx.onMenuShareTimeline($.extend({},init.data.share.wechat,callback));
        wx.onMenuShareAppMessage($.extend({},init.data.share.wechat,callback));
      });

    }catch(e){
      var msg='错误：微信js-sdk未引用或者错误!';
      try{
        console.log(msg);
      }catch(e){
        alert(msg);
      }
      return;
    }
  }


})();
