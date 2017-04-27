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
  $('.indent > li').bind('click', function() {
  	if($(this).attr('id') == clickAttr)
  		return;
  	
  	if(mobileFilter() && $(document).width() < 1024)
  		moveAside();
  	
  	clickAttr = $(this).attr('id');
  	$('.indent > li').css('color', '#a3aab4');
  	$('#load-history').children('span').css('color', '#a3aab4');
  	$(this).css('color', '#fff');
  	
  	loadContent($(this).attr('id'))
  });
  
  /* 연혁 & 마일스톤 */
  $('#load-history').bind('click', function() {
  	if(mobileFilter() && $(document).width() < 1024) 
  		moveAside();
  	
  	$('#content').load('sub/history.html');
  	$('.indent > li').css('color', '#a3aab4');
  	$(this).children('span').css('color', '#fff');
  	clickAttr = ""
  });
  
  /* 사업 계획서 */
  $('#business-plan').bind('click', function(e) {
  	e.preventDefault();
  	window.open('http://touchnedu.cafe24.com/business_plan.pdf', '_blank');
  });
  
  /* 사업 개요*/
  $('#business-info').bind('click', function(e) {
  	e.preventDefault();
  	var infoUrl = "http://touchnedu.cafe24.com/files/touchnedu_info.pptx"
  	window.open(infoUrl, '_blank');
  });
  
  /* 앱 실행 영상 */
  $('#app-video').bind('click', function(e) {
  	e.preventDefault();
  	var appVideoUrl = "https://youtu.be/82DC6UnMvIc";
  	window.open(appVideoUrl, '_blank');
  });
  
  /* 발표 영상 */
  $('#presentation').bind('click', function(e) {
  	e.preventDefault();
  	var preVideoUrl = "https://www.youtube.com/watch?v=MtHM-wCDM30";
  	window.open(preVideoUrl, '_blank');
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
  
  /* 사업계획서, 사업개요 - 롤오버 이미지 변경 */
  $('.rollover').mouseover(function() {
  	if(mobileFilter())
  		return;
		$(this).attr('src', $(this).attr('src').replace('off', 'on'));
	});
  
  $('.rollover').mouseout(function() {
  	if(mobileFilter())
  		return;
  	$(this).attr('src', $(this).attr('src').replace('on', 'off'));
  });
  
  loadContent('down-w');
  clickAttr = "down-w";
  
});

function moveAside() {
	$('aside').animate({'left':'-320px'}).addClass('aside-move');
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
	switch(id) {
		case "down-w":
			$('#content').load('sub/download-weekly.html');
			break;
		case "down-m":
			$('#content').load('sub/download-monthly.html');
			break;
		case "down-mau":
			$('#content').load('sub/download-mau.html');
			break;
		case "dau-d":
			$('#content').load('sub/dau-d.html');
			break;
		case "dau-w":
			$('#content').load('sub/dau-w.html');
			break;
		case "graph-w":
			$('#content').load('sub/graph-w.html');
			break;
		case "member":
			$('#content').load('sub/member.html');
			break;
		case "member-ratio":
			$('#content').load('sub/member-ratio.html');
			break;
		case "member-mau":
			$('#content').load('sub/member-mau.html');
			break;
			
		case "mau-w":
			$('#content').load('sub/mau-w.html');
			break;
		case "mau-d":
			window.open('sub/mau-d.html', '_blank');
			break;
			
		case "wau-w":
			$('#content').load('sub/wau-w.html');
			break;
		case "wau-d":
			window.open('sub/wau-d.html', '_blank');
			break;
			
		case "stick-1":
			$('#content').load('sub/stick-1.html');
			break;
			
		case "stick-2":
			$('#content').load('sub/stick-2.html');
			break;
			
		case "stick-3":
			$('#content').load('sub/stick-3.html');
			break;
			
		case "traffic-w":
			$('#content').load('sub/traffic-w.html');
			break;
		case "traffic-d":
			$('#content').load('sub/traffic-m.html');
			break;
	}
}