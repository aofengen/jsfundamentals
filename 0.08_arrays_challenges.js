//BRONZE

let hobbies = ["videogames", "baseball", "fantasy baseball", "fantasy football"];

//SILVER
let cars = ["Charger", "i3", "Porsche"];
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

//GOLD
console.log("");
let giantArray = [hobbies, cars, [0, 1, 2, 3], ["a", "b", "c", "d"]];
for (let i = 0; i < giantArray.length; i++) {
	for (let j = 0; j < giantArray[i].length; j++){
		console.log(giantArray[i][j]);
	}
}

//Bonus Challenge

var newArray = makeArray();
console.log(newArray);
var numberOfPrimes = isPrimeNumber(newArray)
console.log(numberOfPrimes);

function makeArray() {
	var array = []
	for (var i = 0; i < 15; i++) {
		let x = Math.floor((Math.random() * 51));
		array.push(x);
	}
	return array;
}

function isPrimeNumber(array) {
	var primeArray = []
	for (var i = 0; i < array.length; i++) {
		if (i==1 || (array[i]%2)!=0 && (array[i]%3)!=0 && (array[i]%5)!=0 && (array[i]%7)!=0) {
			primeArray.push(array[i]);
		}
	}
	return primeArray.length-1;
}

//Bonus Challenge Two

function makeArray2() {
	var array = [];
	for (i=5; i < 46; i++) {
		array.push(i);
	}
	return array;
}

function removeMult3sAnd5s(array) {
	for (i = 0; i < array.length; i++) {
		if ((array[i]%3) == 0 || (array[i]%5) == 0) {
			array.splice(i, 1);
		}
	}
	return array;
}

function change1s(array) {
	for (i = 0; i < array.length; i++) {
		if ((array[i]%10) == 1) {
			array[i] = 0;
		}
	}
	return array;
}
var newArray = makeArray2();
console.log(newArray);
var array1 = removeMult3sAnd5s(newArray);
var array2 = change1s(array1);
console.log(array2);

//Bonus challenge 3
let x = ["hi", "bye", "hello", "goodbye", "sup?"];
let y = [1, 2, 3, 4, 5];
let z = [];
let j = 0;
for (i = 0; i < x.length; i++) {
	z.push(x[i] + "-" + y[j]);
	j++;
}
console.log(z);

//Bonus Challenge 4

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let word = "";
let x1 = []
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++){
		let y = Math.floor(Math.random() * alphabet.length);
		word += alphabet[y]
		alphabet.splice(y, 1);
	}
	x1.push(word);
	word = "";
}
console.log(x1);
console.log(alphabet);//shows unused letter