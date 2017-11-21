'use strict';
function trackEvent(name,action) {
  ga('send', 'event', 'mowomenday', name, action);
  //console.log("name="+name+" action="+action);
}

function trackPageview(screenIndex) {
  //var label = String.format('P{0}', screenIndex + 1);
  ga('send', 'pageview', screenIndex);
  //console.log("pv="+screenIndex);
}

$(function() {
    $('[data-track]').on('click',function(e) {
      var tid = $(this).attr('data-track');
      var params = trackParams[tid];
      trackEvent(params.name,params.action);
    })
});

