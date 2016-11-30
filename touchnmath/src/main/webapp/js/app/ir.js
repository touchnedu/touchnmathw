(function(){
	
	$('header').load('sub/ir_header.html');
	$('aside').load('sub/ir_aside.html');
	
	$(window).resize(function() {
		var width = $(document).width();
		if(width > 1023)
			$('.aside-move').css('left', '0px');
	});
	
}());

