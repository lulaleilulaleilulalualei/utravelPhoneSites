
const tool = {
	isEmptyObject: function(obj) {//判定是否为空对象
        for(let key in obj ) {
            return false
        }
        return true
    },
    getUrlParam:function(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        let r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    },
     trim: function (strs) { 
        if(Object.prototype.toString.call(strs) === "[object String]") {
 			return strs.replace(/(^\s*)|(\s*$)/g, '');
 		}
    },
    rem:function () {
            var docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
            recalc();
            window.addEventListener(resizeEvt, recalc, false);
    },
    randomNum:function(min, max) {
    	return Math.floor(Math.random()*(max-min)+min)
    },
    hasClass: function(ele, cName) {
        return !!ele.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
    },
    addClass: function(ele, cName) {
        if( !this.hasClass( ele,cName ) ){
            ele.className += " " + cName
        }
    },
    removeClass: function(ele, cName) {
        if( this.hasClass( ele,cName ) ){
            ele.className = ele.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " )
        }
    },
    openApp: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        //微信  
        if(ua.match(/MicroMessenger/i) == 'micromessenger') {

            window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bcw.utravel";
            
        } else { //非微信浏览器 
            if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                var loadDateTime = new Date();
                window.setTimeout(function() {
                    var timeOutDateTime = new Date();
                    if(timeOutDateTime - loadDateTime < 5000) {
                        window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bcw.utravel"; //ios下载地址   
                    } else {
                        window.close();
                    }
                }, 2000);
                window.location = "ulvjia://";
            } else if(navigator.userAgent.match(/android/i)) {
                var state = null;
                try {
                    window.location = 'ulvjia://';
                    setTimeout(function() {
                        window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bcw.utravel"; //android下载地址  

                    }, 500);
                } catch(e) {}
            }
        }
    }
}

export default tool;