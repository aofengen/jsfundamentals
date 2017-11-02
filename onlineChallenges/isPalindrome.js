/* https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php - #2 */

function isPalindrome(x) {
	if (x == "") {
		return "nothing entered!";
	}	else {
		let newString = ""
		let y = x.toString();
		for (i = y.length; i > 0; i--) {
			newString += y.slice(i-1, i);
		}
		return newString === x;
	}
}

console.log(isPalindrome("hih")) //true
console.log(isPalindrome("hdih")) //false