/**
 *加载与进度插件
 *@ author yuchenbo
 */

(function($){

	$.fn.loading = function(type,msg){

		if(msg == undefined){
			msg = type;
			type = 'twin';
		}

		type = type || 'twin';

		var isBig = type.indexOf('-big') > -1;
		if(this.find('.mask').length == 0){
			var loadingHtml = [];
			if(this.find('.mask-blur').length == 0){
				loadingHtml.push('<div class="mask">');
				loadingHtml.push('<div class="jm-spin '+(isBig ? jm-spin-big : '')+'"><i class="'+type+'"></i><span>'+msg+'</span></div>');
				loadingHtml.push('</div>');
			}else{
				loadingHtml.push('<div class="jm-spin '+(isBig ? jm-spin-big : '')+'"><i class="'+type+'"></i><span>'+msg+'</span></div>');
			}

			if(this.css('position') === 'static'){
				this.css('position','relative');
			}

			this.append(loadingHtml.join(''));

			this.find('.mask').width(this.innerWidth());
            this.find('.mask').height(this.innerHeight());
		}


	    $.fn.loaded = function () {
	        var loadingMask = this.find('.mask');
	        loadingMask.fadeOut(100, function(){
	            loadingMask.remove();
	        });
	    };

	     $.fn.blurLoaded = function () {
	        var loadingMask = this.find('.jm-spin'),
	        	loadingBlur = this.find('.mask-blur');
	        loadingMask.fadeOut(100, function(){
	            loadingMask.remove();
	            loadingBlur.removeClass('mask-blur');
	        });
	    };
		
	};

})(jQuery);