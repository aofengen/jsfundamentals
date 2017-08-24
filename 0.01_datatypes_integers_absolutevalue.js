function absoluteValue() {
	let x = 1;
	let y = -1;
	console.log(x, y);
	x.abs(); //returns the absolute value of x: 1
	y.abs(); //returns the absolute value of y: 1
	if (x === y) {
		console.log("the absolute value of the two numbers match");
	} else {
		console.log("the absolute value of the two numbers do not match");
	}
}	