/* https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php - #1 */

function changeWithArray(x) {
	let newNumber = ""
	let y = Array.from(x.toString());
	for (let i = y.length; i > 0; i--) {
		newNumber += y.pop().toString();
	}
	return Number.parseInt(newNumber);
}

function changeWithStrings(x) {	
	let newNumber = ""
	let y = x.toString();
	for (i = y.length; i > 0; i--) {
		newNumber += y.slice(i-1, i);
	}
	return Number.parseInt(newNumber);
}

console.log(changeWithArray(34258));
console.log(changeWithStrings(34258));

function changeWithoutLoops(x) {
	return x.toString().split("").reverse().join("");
}

console.log(changeWithoutLoops(3434))