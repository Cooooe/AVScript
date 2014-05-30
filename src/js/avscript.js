/*!
 * AVScript Video Engine v1.0.0
 *
 * Copyright 2014 Kang Hyung Won. and other contributors
 * Released under the MIT license
 *
 * Date: 2014-05-29
 */

/**
 * Constructor
 * @param wrapper ::
 * @param option ::
 * @constructor
 */
var AvScript = function(wrapper, option) {
	this._option = {};
	this._wrapper = wrapper;
	this._v = null;
	this._track = null;
	this._src = null;
	this._rand = parseInt(Math.random() * 100000000000000, 10); // video 태그의 id값을 생성함

	if (option) {
		console.log(option);
		this.setOption(option);
	}

	this._init();
};

AvScript.prototype = {

	/**
	 *
	 * @private
	 */
	_init : function() {
	},

	/**
	 *
	 * @returns {AVscript}
	 */
	on : function(src) {
		if ( !this._isDuplicateVideoTag(this._rand) ) {
			this._makeVideoTag();
		}

		if(src) {
			this.setOption("src", src);
		}

		this.setVideoAttribute(this._option);

		return this;
	},

	/**
	 * 옵션값을 설정한다. value 값이 있을 시 option이 key값으로 기존에 있던 option에 추가된다.
	 * @param option
	 * @param value
	 * @returns {AVscript}
	 */
	setOption : function(option, value) {
		if ( value && typeof option.toLowerCase() === "string") {
			this._option[option] = value;
		} else {
			this._option = option;
		}

		return this;
	},

	/**
	 *
	 * @param wrapper
	 * @returns {AVscript}
	 */
	setWrapper : function(wrapper) {
		this._wrapper = wrapper;
		return this;
	},

	/**
	 *
	 * @param param
	 * @returns {AVscript}
	 */
	setVideoAttribute : function(param, value) {
		if( (typeof param).toLowerCase() === "string" && value != undefined ) {
			var temp = {};

			temp[param] = value;

			param = temp;
		}

		var  _v = this._v
			,isSrc = false
			,isTrack = false;

		for( var i in param ) {
			switch(i) {
				case "track" :
					this._track = param[i];
					isTrack = true;
					break;
				case "src" :
					this._src = param[i];
					isSrc = true;
					break;
				default :
					_v.setAttribute(i, param[i]);
					break;
			}
		}

		if (isSrc) {
			this.setVideoSource();
		}

		if (isTrack) {
			this.setVideoTrack();
		}

		this._v = _v;

		return this;
	},

	setVideoTrack : function() {
		var track = this._track;
		console.log(track);
		if (!track) {
			return this;
		}

		var t = document.createElement("track");

		t.src = track;
		t.srclang = "ko";
		t.label = "korean";
		t.default = true;

		this._v.appendChild(t);
	},

	setVideoSource : function() {
		var src = this._src;

		if (!src) {
			return this;
		}

		var s = document.createElement("source");

		s.src = src;

		this._v.appendChild(s);
	},

	/**
	 *
	 * @private
	 */
	_makeVideoTag : function(src) {
		var  v = document.createElement("video")
			,_w = this._wrapper;

		this._v = v;

		this.setOption("data-vid", "VID_" + this._rand);

		_w.appendChild(v);
	},

	/**
	 * check to duplicate video tag
	 * @param id
	 * @returns {boolean}
	 */
	_isDuplicateVideoTag : function(id) {
		if ( document.querySelector("video[data-vid=VID_" + id + "]") ) {
			return true;
		}

		return false;
	},
	_getVideoExtention : function(src) {
		return src.split(".")[1];
	}
};


// ==========================================================================================//


var _Util = function() {};

_Util.prototype = {

	/**
	 * load to javascript file
	 * @param jsFileName :: javascript filename
	 */
	jsLoad : function(jsFileName) {
		var s = document.createElement("script");
		s.src = jsFileName;
		s.type = "text/javascript";

		document.getElementsByTagName("script")[0].insertBefore(s);
	}
};

window._U = new _Util();