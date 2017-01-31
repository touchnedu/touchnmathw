$(document).ready(function(){
  $('.drop-menu > div > a, .triangle').bind('click', function() {
  	var subMenu = $(this).parent().next('ul');
    $(this).parent().toggleClass('change-bg');
    if(subMenu.is(":visible")) {
    	$(this).parent().children('.triangle').text('▼');
    } else {
    	$(this).parent().children('.triangle').text('▲');
    }
    
    subMenu.slideToggle();
    	
  });
  
  var clickAttr = "";
  $('.indent > li').click(function() {
  	if($(this).attr('id') == clickAttr)
  		return;
  	
  	if(mobileFilter() && $(document).width() < 1024)
  		moveAside();
  	else
  		moveOrigin();
  	
  	var aside = $('aside');
		if(!aside.hasClass('aside-move')){
			if(mobileFilter() && $(document).width() < 1024) {
				aside.animate({'left':'-320px'});
				aside.addClass('aside-move');
			}
		} 
  	
  	clickAttr = $(this).attr('id');
  	$('.indent > li').css('color', '#a3aab4');
  	$('#load-history').children('span').css('color', '#a3aab4');
  	$(this).css('color', '#fff');
  	
  	loadContent($(this).attr('id'));
  	
  });

  $('.menu-btn').mouseover(function() {
  	if(mobileFilter())
  		return;
  	if(!$(this).hasClass('change-bg'))
  		$(this).css('background-color', '#2a2f3b')
  });
  
  $('.menu-btn').mouseout(function() {
  	if(mobileFilter())
  		return;
  	if(!$(this).hasClass('change-bg'))
  		$(this).css('background-color', '#232730')
  });
  
  clickAttr = "default_sub";
  loadContent(clickAttr);
  
});

function moveAside() {
	$('aside').animate({'left':'-320px'}).addClass('aside-move');
}

function moveOrigin() {
	$('aside').animate({'left':'0px'}).removeClass('aside-move');
}

function mobileFilter() {
  var filter = "win16|win32|win64|mac|macintel";
  if(navigator.platform) {
    if(filter.indexOf(navigator.platform.toLowerCase()) < 0)  
      return true;
    else
      return false;
  }
}

function loadContent(id) {
	$('#content').empty();
	$('#content').load('sub/township_' + id + '.html');
}