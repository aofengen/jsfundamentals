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