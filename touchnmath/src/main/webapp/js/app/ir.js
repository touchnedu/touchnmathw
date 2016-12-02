(function(){
	
	$('header').load('sub/ir_header.html');
	$('aside').load('sub/ir_aside.html');
	
	$(window).resize(function() {
		var width = $(document).width();
		if(mobileFilter() && width > 1023)
			$('.aside-move').css('left', '0px');
	});
	
}());

function mobileFilter() {
  var filter = "win16|win32|win64|mac|macintel";
  if(navigator.platform) {
    if(filter.indexOf(navigator.platform.toLowerCase()) < 0)  
      return true;
    else
      return false;
  }
}

