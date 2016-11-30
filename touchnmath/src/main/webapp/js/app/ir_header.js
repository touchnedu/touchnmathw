(function(){
	$('#mLogoBtn').bind('click', function(e) {
		e.preventDefault();
		location.reload();
	});
	
	$('#mMenuBtn').click(function(e) {
		e.preventDefault();
		var aside = $('aside');
		if (aside.hasClass('aside-move')){
			aside.animate({'left':'0px'}).removeClass('aside-move');
		} else {
			aside.animate({'left':'-320px'}).addClass('aside-move');
		}
	});
	
}());

