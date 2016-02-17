setInterval(function(){
	if($("#display div").css("color") == "rgb(255, 255, 0)")
		$("#display div").css("color", "black")
	else 
		$("#display div").css("color", "yellow")
},500);
$("#pad button").on('click', function(){
	if($("#display div").text() == "0"){
		$("#display div").text("");
	}
	
	if($(this).hasClass("btn-danger") === true) {
		var result = eval($("#display div").text()); 
		$("#display div").text(result);
	} else {
		$("#display div").append($(this).text());
	}
});
