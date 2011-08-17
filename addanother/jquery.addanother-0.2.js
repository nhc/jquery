/*!
 * jQuery Addanother plugin
 * Version: 0.2 (AUG-2011)
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery v1.6.2 or later
 */

(function($) {
	
	$.fn.addanother = function(options) {
	
		var options = { 
					morebutton: $('<img>',{ src: '/themes/admin/assets/images/icons/tick_new.png', width: '25px', class: 'mb' }).click(morehandler),
					lessbutton: $('<img>',{ src: '/themes/admin/assets/images/icons/cross_new.png', width: '25px', class: 'lb' }).click(lesshandler)
		};
		
		var sel = $(this).selector, cnt = 1;
		var opts = $.extend({}, $.fn.addanother.defaults, options);
			
		var $original = $(this).css({display:'block'});
		
		return this.each(function(){
			var $this = $(this);
			$this.append( opts.morebutton.clone(true) ).append( opts.lessbutton.clone(true) );
		});
		
		function morehandler(){
			cl = $original.clone(true);
			cl.find('input').attr('value','');
			$(sel+':last-child').after( cl );
			cnt++
		}
		function lesshandler(){
			if( cnt > 1 ){
				$(this).parent(sel).remove();
				cnt--;
			}
		}
    };


	/**
	**	Other public functions
	**/
	
	$.fn.outerHTML = function() {
	    return $('<div>').append( this.eq(0).clone() ).html();
	};
	
	function log() {
		if (window.console && window.console.log)
			window.console.log('[addanother] ' + Array.prototype.join.call(arguments,' '));
	};
})(jQuery);
