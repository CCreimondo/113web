// JavaScript Document
        var sUserAgent = navigator.userAgent;
        var fAppVersion = parseFloat(navigator.appVersion);
        var isOprea = sUserAgent.indexOf("Opera") > -1;
        var isIE = sUserAgent.indexOf("compatible") > -1
        && sUserAgent.indexOf("MSIE") > -1
        && !isOprea;
        function winClose() {
            window.top.opener = null;
            window.close();
            }

        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+)");
            reIE.test(sUserAgent);
            var FIEVersion = parseFloat(RegExp["$1"]);
            if (FIEVersion <= 9.0) {
                alert("-_-|||抱歉！本网站暂不支持您的浏览器！为了提高体验，请换用Chrome，要不IE11.");
                winClose();
            }
        }