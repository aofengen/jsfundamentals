let $name = ('#nameField');
let $email = ('#emailField')

$(document).ready(function(){
	let names;
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	}).done(function(data){
		names = data;
		console.log(data);
		console.log(names);
	})
	console.log("hello");
	console.log(names)

	$(submitButton).click(function(){
		let person = {
			name: $name.val();
			email: $email.val();
		}
	}
	$.ajax({
		type: "POST",
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		data: person
	}).done(function(info){
		console.log(info);
	})
})	



