//Functions

function greeting() {
	console.log("Good Morning!");
}

greeting();

//Challenge: Create a function that says "Day 4 feeling great!"

function day4() {
	console.log("Day 4 feeling great!");
}

day4();

//Functions with parameters

function greeting2(name) {
	console.log("Time to start coding " + name);
}

greeting2("Jay");

function sum2(num1, num2) {
	console.log(num1+num2);
}

sum2(3,4);

//scope

var fname = "Aj";

// function hello(fname) {
// 	lname = "Hephner"; //hoisted variable, automatically given global scope (no var declaration) - DO NOT USE
// 	console.log(fname + " " + lname);
// }
// //console.log(lname); Breaks due to attempted use of local variable
// hello();

if (1==1) {
	let sum = 1+1; //let creates a local variable within the global program, allows reuse of variables outside of functions
	console.log(sum);
}

//console.log(sum); Breaks due to attempted use of "let" variable

//Challenge: Create a function called capitalize() and use the for loop we created yesterday to capitalize names

function capitalize(sName) {
	for (let m in sName) {
		if (m==0) {
			sName = sName.replace(sName[m], sName[m].toUpperCase());
		}
	}
	return sName;
}
var studentName = "aaron";
console.log(capitalize(studentName));
//Void Functions


//BRONZE CHALLENGE

function location(x,y) {
	var z = x + " " + y;
	console.log(z);
}

location("Westfield", "Indiana");

//SILVER CHALLENGE
function totalBillPayment(array) {
	var x = 0;
	for (var i = 0; i < array.length; i++) {
		x += array[i];
	}
	return x;
}
var billsArray = [40, 75, 107, 30, 70];
var z = totalBillPayment(billsArray);
console.log("I will pay $" + z + " in bills this month");

//GOLD CHALLENGE
function oddOrEven() {
	var y = Math.floor((Math.random() * 100) + 1);
	console.log(y);
	if (y===0) {
		console.log("Neither")
	} else if (y%2==1) {
		console.log("Odd");
	} else {
		console.log("Even");
	}
}

// var number = Math.floor((Math.random() * 100) + 1);
// console.log(number);
oddOrEven();