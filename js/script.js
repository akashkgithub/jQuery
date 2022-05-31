$(document).ready(function() {
	$("#hidden").hover(function() {
		$(this).css("color", "black");
	}, 
	function() {
		//$(this).hide();
		$(this).css("color", "white");
	});

	$("button").click(function() {
		alert("I'm alerting you");
	})
});