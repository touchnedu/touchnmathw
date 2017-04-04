(function(){
	var mobileValue = 0;
	
	$('#download-btn').bind('click', function(event) {
		event.preventDefault();
		var url = "https://play.google.com/store/apps/details?id=com.touchnedu.gradea.studya.math";
		window.open(url, '_blank'); 
	});
	$('#link-to-ir, .down-num > div').bind('click', function(event) {
		event.preventDefault();
		window.open('ir.html', '_blank');
	});
	$('#bill-img-pc, #bill-popup img').bind('click', function() {
		window.open('billing.html', '_blank');
	});
	$('#bill-text').bind('click', function(e) {
		e.preventDefault();
		location.href = 'billing_m.html';
	});
	$('#logo').bind('click', function(e) {
		e.preventDefault();
		window.location.replace("http://www.touchnedu.com/");
	});
	
	$('#language-icon > img').mouseover(function() {
		if(mobileCheck() == "m")
			return;
		$('#language-icon > img').css('content', 'url("../images/languages_icon_off.png")');
		$('#language-box').fadeIn();
	});
	$('#div-language').mouseleave(function() {
		$('#language-box').fadeOut();
		$('#language-icon > img').css('content', 'url("../images/languages_icon_on.png")');
	});
	$('#language-box div').bind('click', function() { 
		var thisAttr = $(this).attr('id');
		if(thisAttr == "language-kor")
			return;
		if(thisAttr == "language-eng")
			window.location.replace("http://www.touchnedu.com/en/");
		else if(thisAttr == "language-chn")
			window.location.replace("http://www.touchnedu.com/cn/");
		else if(thisAttr == "language-vnm")
			window.location.replace("http://touchnmath.vn");
		else if(thisAttr == "language-jpn")
			window.location.replace("http://www.touchnmath.com/jp/");
	});
	$('#language-icon img').bind('click', function() {
		if(mobileCheck() == "pc")
			return;
		if(mobileValue == 0) {
			$('#language-box').fadeIn();
			$('#language-icon > img').css('content', 'url("../images/languages_icon_off.png")');
			mobileValue = 1;
		} else {
			$('#language-box').fadeOut();
			$('#language-icon > img').css('content', 'url("../images/languages_icon_on.png")');
			mobileValue = 0;
		}
	});
	
	if(getCookie('bill-popup') != 'done') 
		$("#bill-popup").show();
	
	
	$('#popup-closeBtn').bind('click', function() {
		if($('#no-more').prop('checked'))
			setCookie('bill-popup', 'done', 24);
		$('#bill-popup').hide();
	});
	
	$('.slider-review').bxSlider({
		slideWidth: 800,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0
	});
	
	var windowWidth = $(window).width();
	logoImgResize(windowWidth);
	
	$(window).resize(function() {
		logoImgResize($(window).width());
	});
	
	loadSheet();
	
}());

function mobileCheck() {
	var filter = "win16|win32|win64|mac|macintel"; 
	if(navigator.platform) { 
		if(filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
			return "m";
		} else { 
			return "pc"; 
		}
	}
}

function logoImgResize(width) {
	if(width > 1023) {
		$('#logo > img').attr('src', 'images/menu_logo_110.png');
		$('.footer-logo > img').attr('src', 'images/menu_logo_110.png');
	} else {
		$('#logo > img').attr('src', 'images/menu_logo.png');
		$('.footer-logo > img').attr('src', 'images/menu_logo.png');
	}
}

function loadSheet() {
	var dataId = "1KNZp0K56oZGtBxUlIXh_C2UT8USBuzmwqHWbTAL4LlY";
	var convertUrl = "https://spreadsheets.google.com/feeds/list/" 
									 + dataId 
									 + "/od6/public/values?alt=json-in-script&gid=0&callback=?";
	
	var downloadNumber = 0; 
	$.getJSON(convertUrl, function(result) {
		var data = result.feed.entry;
		
		for(var i in data) {
			downloadNumber = (data[0].content.$t).substring(8);
		}
		downloadNumber = calculateNumber(downloadNumber);
		$('.down-num').children('div').eq(0).text(downloadNumber.substr(0, 1));
		$('.down-num').children('div').eq(1).text(downloadNumber.substr(1, 1));
		$('.down-num').children('div').eq(2).text(downloadNumber.substr(2, 1));
		$('.down-num').children('div').eq(3).text(downloadNumber.substr(3, 1));
		$('.down-num').children('div').eq(4).text(downloadNumber.substr(4, 1));
		$('.down-num').children('div').eq(5).text(downloadNumber.substr(5, 1));
		$('.down-num').children('div').eq(6).text(downloadNumber.substr(6, 1));
	});
}

function calculateNumber(number) {
	if((number * 1) > 999999) {
		return number;
	} else if((number * 1) < 1000000 && (number * 1) > 99999) {
		return "0" + number;
	} else if((number * 1) < 100000 && (number * 1) > 9999) {
		return "00" + number;
	} else if((number * 1) < 10000 && (number * 1) > 999) {
		return "000" + number;
	} else if((number * 1) < 1000 && (number * 1) > 99) {
		return "0000" + number;
	} else if((number * 1) < 100 && (number * 1) > 9) {
		return "00000" + number;
	} else {
		return "000000" + number;
	}
}

function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while(x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return '';
}

function setCookie(name, value, expirehours, domain) {
	var today = new Date();
	today.setTime(today.getTime() + (60 * 60 * 1000 * expirehours));
	document.cookie = name + "=" + escape(value) + "; path=/; expires="
																									+ today.toGMTString() + ";";
	if (domain) {
		document.cookie += "domain=" + domain + ";";
	}
}

