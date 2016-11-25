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
  	
  	clickAttr = $(this).attr('id');
  	$('.indent > li').css('color', '#a3aab4');
  	$('#load-history').children('span').css('color', '#a3aab4');
  	$(this).css('color', '#fff');
  	
  	loadContent($(this).attr('id'))
  });
  
  /* 연혁 & 마일스톤 */
  $('#load-history').bind('click', function() {
  	$('#content').load('sub/history.html');
  	$('.indent > li').css('color', '#a3aab4');
  	$(this).children('span').css('color', '#fff');
  	clickAttr = ""
  });
  
  /* 사업 계획서 */
  $('#business-plan').bind('click', function(e) {
  	e.preventDefault();
  	window.open('files/business_plan.pdf', '_blank');
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
  	var appVideoUrl = "https://www.youtube.com/watch?v=4brnOfFBlVM";
  	window.open(appVideoUrl, '_blank');
  });
  
  /* 발표 영상 */
  $('#presentation').bind('click', function(e) {
  	e.preventDefault();
  	var preVideoUrl = "https://www.youtube.com/watch?v=MtHM-wCDM30";
  	window.open(preVideoUrl, '_blank');
  });
  
  loadContent('down-w');
  clickAttr = "down-w";
  
});


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
	case "member":
		$('#content').load('sub/member.html');
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
		
	case "traffic-w":
		$('#content').load('sub/traffic-w.html');
		break;
	case "traffic-d":
		$('#content').load('sub/traffic-m.html');
		break;
	}
}