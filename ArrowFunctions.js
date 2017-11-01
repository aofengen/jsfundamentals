//ES5 - old way
let x = [1,2,3];
x.concat(x);

let y = x.map(function(array) {
	return array * 2;
});

console.log(y); //[ 2, 4, 6 ]

//ES6 - Arrow function
let z = x.map(array => array * 2);
console.log(z); //[ 2, 4, 6 ]

/*The goal of Arrow Functions is to address and resolve several common pain points of traditional Function Expression:

Lexical this binding;

Shorter syntactical form (() => {} vs. function () {})*/
//http://tc39wiki.calculist.org/es6/arrow-functions/

//Example: (taken from src/app/services/email.service.ts in Team_ForHire repository)

//ES5 - dynamic binding of this

let that = this;
	let deleted = confirm("Are you sure you want to delete this ticket?");
	if (deleted === true && firebase.auth().currentUser.uid === this.ticket.id) {
		this.ticketService.getPostID("openIssues", this.index).then(function(data) { //1
			firebase.database().ref('openIssues/' + data).remove();	
			that.email.sendMail("deleted.", that.studentName, that.desc, that.category);//2
			that.router.navigate(['/ticket']);
		})
	}

//1: this refers to the component in which it is used
//2: this refers to the callback method. 

//ES6 - lexical binding of this

let that = this; //no longer needed
let deleted = confirm("Are you sure you want to delete this ticket?");
if (deleted === true && firebase.auth().currentUser.uid === this.ticket.id) {
	this.ticketService.getPostID("openIssues", this.index).then(data => { //1
		firebase.database().ref('openIssues/' + data).remove();	
		this.email.sendMail("deleted.", this.studentName, this.desc, this.category); //2
		this.router.navigate(['/ticket']);
	})
}

//this refers to the component in both 1 and 2. Its value no longer changes depending on the location in which it is used.