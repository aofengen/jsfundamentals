//BRONZE AND SILVER
var age = 16;

if (age >= 18) {
	console.log("Yay you can vote!");
} else if (age >=21) {
	console.log("Yay you can drink beer!");
} else if (age >=25) {
	console.log("Yay you get lower rates on your car rental.")
} else {
	console.log("Sorry too young to do anything");
}

//GOLD

for (i = 1; i <= 100; i++){
	printNumber(i);
}

function printNumber(y) {	
	if ((y % 3) == 0 && (y % 5) == 0) {
		console.log("FizzBizz");
	} else if ((y % 3) == 0) {
		console.log("Fizz");
	} else if ((y % 5) == 0) {
		console.log("Bizz");
	} else {
		console.log(y);
	}
}
