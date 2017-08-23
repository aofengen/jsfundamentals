$(document).ready(function(){
	//first and last
	$("#example-one li:first").css({border: "2px solid blue"});
	$("#example-one li:last").css({border: "2px solid red"});	

	//odd and even
	$("#example-two li:odd").css("background-color", "#EEE");
	$("#example-two li:even").css("background-color", "#CCC");
});