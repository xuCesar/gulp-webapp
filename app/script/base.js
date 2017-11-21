'use strict';
String.format = function(src) {
    if (arguments.length === 0) {
        return null;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function(m, i) {
        return args[i];
    });
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function getQueryParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}


function browseInWechat() {
    return /MicroMessenger/i.test(navigator.userAgent);
}

function CheckMobile(mobile) {
  if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile))) {
    return false;
  } else {
    return true;
  }
}