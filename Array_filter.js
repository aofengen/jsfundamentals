let x = [1,3,7,10,15,46];

let y = x.filter(function(number) {
	return number > 8;
});

console.log(y); //[ 10, 15, 46 ]

let z = x.filter(function(number) {
	return number > 1;
});

console.log(z); //[ 3, 7, 10, 15, 46 ]

//ES6 - Arrow function
let a = x.filter(number => number > 8);
console.log(a); //[ 10, 15, 46 ]