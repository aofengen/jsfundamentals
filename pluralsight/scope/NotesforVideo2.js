//Notes for Video 2 on the "let" keyword
//Video Link: https://www.youtube.com/watch?v=sayGv-FjhAU

let x = "hi";
console.log("#1: " + x);

function exampleOne() {
	//console.log(x);
	let x = 3;
	console.log("#3: " + x);
	clearConsole();
	clearConsole();
	
	for (let i = 5; i < 6; i++) {
		console.log("#4: " + i);
		// let y = 3;
		var y = 3;
	}
	clearConsole();
	clearConsole();
	//console.log(i);
	console.log(y);
}

console.log("#2: " + x);
clearConsole();
clearConsole();

exampleOne();

function clearConsole() {
	console.log("-------------------------------------------------------");
	console.log("-------------------------------------------------------");
}

function constDefine() {
var z = "hi";
console.log(z);
z = "hello";
console.log(z);
}

constDefine();