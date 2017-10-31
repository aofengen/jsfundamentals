let x = [1, 2, 3, 4, 5];
let y = [-1, 2, 3, 4, 5];

function positiveNumbers(element, index, array) {
	return element >= 0
}

console.log(x.every(positiveNumbers)); //true. All elements of array x are positive numbers.
console.log(y.every(positiveNumbers)); //false. Not all elements of array y are positive numbers.