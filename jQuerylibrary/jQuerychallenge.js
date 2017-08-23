$(function(){
	$('.box').css('height', '40em');
	$('.box').css('width', '50%');
	$('.box').css('background-color', '#e5e5e5');
	$('.box').css('padding', '20px');
	$('.box').css('border-radius', '10px');
	$('#nameList').css('list-style-type', 'none');
});

// let input = document.getElementById("input");
// let output = document.getElementById("output");

let input = $('.input');
let output = $('output');

$('button').click(function capitalize() {
	let newName = "";
	for (let l in input) {
		if (l == 0) {
			newName = input[l].toUpperCase();
		}// else if (input.value[l-1] === " ") {
		// 	newName += input.value[l].toUpperCase();} //SUPER BONUS CHALLENGE: makes character after blank space uppercase
		else {
			newName += input[l].toLowerCase();
		}		
	}
	console.log(newName);
	output = "Capitalized Name: " + newName;
// 	// addNameToList(newName);
// 	document.getElementById("input").value = null; //Challenge 2: clear the form after button click
});

//Challenge: find out how to have a conditional target the "enter key"
//so that once it's pressed it can sumbit the form

// function searchKeyPress (e) {
// 	e = e || window.event //redunancy check in case event isn't passed to function
// 	if (e.keyCode == 13) { //13 = enter key
// 		document.getElementById("submitButton").click();
// 		return false;
// 	}
// 	return true;
// }

// //Challenge 3: add names used to a list and display list w/o bullet points

// function addNameToList(name) {
// 	let list = document.getElementById("nameList");
// 	let entry = document.createElement('li');
// 	entry.appendChild(document.createTextNode(name));
// 	list.appendChild(entry);
// }