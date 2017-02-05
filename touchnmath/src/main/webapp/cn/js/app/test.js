(function (){
	$('#test-btn').bind('click', function() {
		$.getJSON('/test/testCall.do', function(result) {
			if(result.data == "success") {
				alert("성공");
			}
		});
	});
	
}());