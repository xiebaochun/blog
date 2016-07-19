;(function(w,d){
	function jQuery(selector) {
		return new _jQuery(selector);
	}
	function _jQuery(selector){
		this._doms = [];
		if(/^#/.test( selector )) {
			if(document.querySelector){
				//console.log('use the querySelector')
				this._pushElement(document.querySelector(selector));	
			}else{
				//console.log('use the getElementById')
				this._pushElement(document.getElementById(selector.replace(/^#/,'')));
			}
		}else if(/^\./.test( selector )) {
			this._pushElement(this.getElementByClass(selector.replace(/^\./,'')));
		}else{
			this._pushElement(document.getElementsByTagName(selector));
		}
		return this;
	}
	var p = _jQuery.prototype;
	p._dom = null;
	p._doms = [];
	// p.init = function(selector){
	// 	if(/^#/.test( selector )) {
	// 		if(document.querySelector){
	// 			//console.log('use the querySelector')
	// 			this._pushElement(document.querySelector(selector));	
	// 		}else{
	// 			//console.log('use the getElementById')
	// 			this._pushElement(document.getElementById(selector.replace(/^#/,'')));
	// 		}
	// 	}else if(/^\./.test( selector )) {
	// 		this._pushElement(p.getElementByClass(selector.replace(/^\./,'')));
	// 	}else{
	// 		this._pushElement(document.getElementsByTagName(selector));
	// 	}
	// 	return this;
	// }
	//p.init.prototype = p;
	p.each = function( o, cb ) {
		//console.log(typeof o);
		if(Array.isArray(o)){ 
			var length = o.length, i = 0;
			for( ; i < length; i++){
				cb.call( o[i], i, o[i] );
			}
		}else{
			var name;
			for(name in o){
				cb.call(o[name], name, o[name]);
			}
		}
		return o;
	}
	p._pushElement = function(elem){

		if(elem instanceof HTMLCollection || Array.isArray(elem)){
			var name,arr=[];
			for(name in elem){
				if(name == 'length') break;
				arr.push(elem[name]);
			}
			this._doms = this._doms.concat(arr).unique();
		}else{
	 		this._doms.push(elem);
		}
		this._dom = this._doms[0] || {};
	}
	p.getElementByClass = function(className, parent) {
		parent || (parent = document);
		var descendants= parent.getElementsByTagName('*'), i=-1, e, result=[];
		while (e=descendants[++i]) {
		  ((' '+(e['class']||e.className)+' ').indexOf(' '+className+' ') > -1) && result.push(e);
		}
		return result;
	}
	p.on = function(event, selector,callback){
		var targets = jQuery(selector)._doms;
		//console.log(targets);
		this.each(this._doms,function(index,dom){
			dom.addEventListener(event,function(event){
				//console.log(event.target);
				for(var i in targets){
					if(targets[i] == event.target){
						//console.log('find the elem');
						callback.call(event.target, event);
					}
				}
			});
		});
	}
	p.click = function(callback){
		var name;
		for(name in this._doms){
			this._doms[name].addEventListener('click',function(event){
				callback.call(this, event);
			});
		}
	}
	Array.prototype.unique = function(){
		var l=this.length,r=[],s={};
		for(var i= 0;i<l;i++){
			if(!s[this[i]]){
				r.push(this[i]);
				s[this[i]] = true;
			}
		}
		return r;
	}
	window['jQuery'] = window['$'] = jQuery;
})(window,document);


