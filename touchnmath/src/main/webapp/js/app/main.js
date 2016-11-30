(function(){
	$('#download-btn').bind('click', function(event) {
		event.preventDefault();
		var url = "https://play.google.com/store/apps/details?id=com.touchnedu.gradea.studya.math";
		window.open(url, '_blank'); 
	});
	$('#link-to-ir, .down-num > div').bind('click', function(event) {
		event.preventDefault();
		window.open('ir.html', '_blank');
	});
	$('#logo').bind('click', function(e) {
		e.preventDefault();
		location.reload();
	});
	
	loadSheet();
	
}());

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