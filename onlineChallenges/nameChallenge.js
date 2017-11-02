let x = "BRANDON";
let y = "BRETT";

function change() {
	let z = x.slice(0,1);
	x = y.slice(y.length-1, y.length) + x.slice(1,x.length);
	y = y.slice(0, y.length-1) + z;
	console.log(x + " " + y)
}

change();