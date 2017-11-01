//A pure function will give the same result from the same arguments every time it is called.
//Example

function pure() {
    return 3 + 3;
}

console.log("Pure: " + pure()); 
//Pure: 6

//An impure function may give a different result each time it is called, even using the same arguments

function impure() {
	return Math.random() + 3;
}

console.log("Impure 1: " + impure());
console.log("Impure 2: " + impure());
console.log("Impure 3: " + impure());
console.log("Impure 4: " + impure());

// Impure 1: 3.1304895575941103
// Impure 2: 3.650162586451274
// Impure 3: 3.0824463903034935
// Impure 4: 3.722834674401409