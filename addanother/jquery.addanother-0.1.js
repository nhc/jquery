(function($) {

	$.fn.addanother = function(options) {
		$this = $(this);
	
		var opts = $.extend({}, $.fn.addanother.defaults, options);
		
		/**
		**	First add the default ui icons 
		**/
		$this.append( opts.morebutton ).append( opts.lessbutton ).css({display:'block'});
		
		/**
		**	Register event listeners to added images
		**/
		return this.each(function(){
			
				var blocks = 1;
			
				$('.an-more').live('click',function(){
					/**
					**	Add another block
					**/
					clone = $this.clone();
					clone.find('input').attr('value','');
					$('.attr-block:last-child').after( clone );
					blocks++;
				});
				
				$('.an-less').live('click',function(){
					/**
					**	Remove block
					**/
					if( blocks > 1 ){
						$(this).parent($this.selector).remove();
						blocks--;
					}
				});
				
		});
		
    };

	function debug($obj) {
		if (window.console && window.console.log)
		window.console.log('plugin selection count: ' + $obj.size());
	};

	/**
	**	Make defaults available publicly so they can be changed at any time
	**/
	$.fn.addanother.defaults = {
		morebutton: $('<img>',{ src: 'add.png', width: '25px', class: 'an-more' }),
		lessbutton: $('<img>',{ src: 'remove.png', width: '25px', class: 'an-less' })
	};
	
	
	/**
	**	Other public functions
	**/
	
	$.fn.outerHTML = function() {
	    return $('<div>').append( this.eq(0).clone() ).html();
	};
	
})(jQuery);