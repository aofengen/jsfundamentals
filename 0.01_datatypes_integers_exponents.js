var x = 2;
var y = 2;
console.log(expFunction(x,y));

x = 3;
y = 2;

console.log(expFunction(x,y));

function expFunction(a, b) {
	return Math.pow(a, b)
}