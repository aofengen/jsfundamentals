//Loops

/*
lcv = loop control variable

for loop
------------------------
for (initialize var; have a boolean expression; break condition) {
	some code
}

while loop
------------------------
while (have a boolean expression) {
	some code
}

for in (for each) loop
------------------------



do while loop
------------------------


runs at least once
*/

//initialize var; have a boolean expression; break condition
for (var i=0; i < 10; i++) {
	console.log(i);
}

//Challenge: using a for loop count to 20 by two's
for (var i=0; i <= 20; i += 2) {
	console.log(i);
}

var name = "Kenn";

for (var i=0; i<name.length; i++) {
	console.log(name[i]);
}

//initialize lcv outside of loop
var j = 0;

while (j<5) {
//break condition
	j++;
	console.log(j);
}

// while(true) {
// 	console.log("runs once");
// 	return false;
// }

//Challenge: create a while loop that counts to 100 by 10's

var x = 10;
while (x < 101) {
	console.log(x);
	x += 10;
}

//Challenge: capitalize and replace first letter of string

var studentName = "smita";
//   lcv      collection
for (var m in studentName) {
	if (m==0) {
	studentName = studentName.replace(studentName[m], studentName[m].toUpperCase());
	}
}
console.log(studentName);