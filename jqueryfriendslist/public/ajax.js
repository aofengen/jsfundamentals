let $friends = $('#friends');
let $name = $('#name');
let $age = $('#age');

let friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" + 
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends) {
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},

		error: function(){
			alert("error loading friends");
		}
	});

	$('#add_friend').click(function(){
		console.log("hi");
		let friend = {
			name: $name.val(),
			age: $age.val()
		};
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			},
			error: function(){
				alert('error saving order');
			}
		});
	});

		//delegate allows you to remove items that were loaded by other students
	$friends.delegate('.remove', 'click', function(){
		let $li = $(this).closest('li');
		//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					console.log('yo');
					$(this).remove();
				});
			}
		});
	});
});

// $(document).ready(function(){
// 	alert("Hello World");
// });