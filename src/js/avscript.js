/*!
 * AVScript Video Engine v1.0.0
 *
 * Copyright 2014 Kang Hyung Won. and other contributors
 * Released under the MIT license
 *
 * Date: 2014-05-29
 */

/**
 * 생성자
 * @param option 객체 생성 시 옵션 정의
 * @constructor
 */
var AVscript = function(option) {
	this.option = {};

	if ( option ) {
		this.option = option;
	}

	this.init();
};

AVscript.prototype = {
	init : function() {
		console.log(_U);
	},
	setOption : function(option) {
		this.option = option;
		return this;
	}
};


// ==========================================================================================//


var _Util = function() {};

_Util.prototype = {
	/**
	 * javascript 파일을 로드한다
	 * @param jsFileName :: 파일명
	 */
	jsLoad : function(jsFileName) {
		var s = document.createElement("script");
		s.src = jsFileName;
		s.type = "text/javascript";

		document.getElementsByTagName("script")[0].insertBefore(s);
	}
};

window._U = new _Util();