/* https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php - #8 */

function findPrimes(x) {
	let primeChecks = [2, 3, 5, 7];
	if (x == 1) {
		return false;
	} else if (primeChecks.includes(x)) {
		return true;
	} else if (x%2==0 || x%3==0 || x%5==0 || x%7==0) {
		return false;
	} else {
		return true;
	}
}
console.log(findPrimes(5))

//Find all prime numbers from 1-100
let primeArray = [];
for (let i = 1; i <= 100; i++) {
	let prime = findPrimes(i);
	if (prime == true) {
		primeArray.push(i);
	}
}

console.log(primeArray);