let x = [1,2,3];
x.concat(x);

let y = x.map(function(z) {
	return z * 2;
});

console.log(y); //[ 2, 4, 6 ]

let z = x.map(array => array * 3);
console.log(z); //[ 3, 6, 9 ]