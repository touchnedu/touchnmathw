(function(){
	$('#mMenuBtn').bind('click', function(e) {
		e.preventDefault();
		var aside = $('aside');
		if (aside.hasClass('aside-move')){
      aside.animate({'left':'0px'}).removeClass('aside-move');
		} else {
      aside.animate({'left':'-320px'}).addClass('aside-move');
		}
	});
	
	$('.indent > li').bind('click', function() {
		$('#mMenuBtn').trigger('click');
	});
	
}());
