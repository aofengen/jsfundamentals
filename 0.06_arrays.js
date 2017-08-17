//Arrays

let students = ["Thomas", "Madyson", "Brandon", "Leon", 23, true, ["Jackson", "Perry"]];

console.log(typeof(students));

console.log(students[2]);

//Challenge: Grab the nexted array out of the students array and grab Perry then print to console Hello Perry the Platypus.

// var array = students[6];
// console.log("Hello" + array[1] + "the Platypus");

console.log("Hello " + students[6][1] + " the Platypus");

let arrOfFood = ["Quesadilla", "Pecan pie", "potato", "CheeseCake", "Shrimp Pasta"];

//adds item to end of array
arrOfFood.push("NY Style Pizza");

//insert item into specific spot of array (index # for new item, #of items to remove, items to add)
arrOfFood.splice(1, 0, "Blueberry Pie");
arrOfFood.splice(2, 1, "Sweet Potato");
arrOfFood.splice(4, 2);

//deletes item from end of array
arrOfFood.pop();

//of prints out the value instead of the index number of an array
// for (let i of arrOfFood) {
// 	console.log(i);
// }

//callback within function; same end result of for loop above
arrOfFood.forEach(function(foodItem, banana){
	console.log(banana);
	console.log(foodItem);
}) 

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

function removemult3sand5s(array) {
	for (i = 0; i < array.length; i++) {
		if ((array[i]%3) == 0 || (array[i]%5) == 0) {
			array.splice(i);
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
var array1 = removemult3sand5s(newArray);
var array2 = change1s(array1);
console.log(array2);