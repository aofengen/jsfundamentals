//Conditionals

/*
	Chaining conditional operators
	------------------------------
	&&, ||
*/
var name = "kenn";

if ("Kenn" == name) {
	console.log("Hey your name is " + name);
} else {
	console.log("What is your name?");
};

//Challenge: Create an if statement that checks if the users name does not have a capital letter,
//Rebuild thier name with the capitalized first letter

var newName = "bob";
console.log(newName);
var firstLetter = newName[0];
console.log(firstLetter);

if (firstLetter !== firstLetter.toUpperCase())  {
	newName = newName[0].toUpperCase() + newName[1] + newName[2];
	console.log(newName);
	
} else {
	console.log(newName);
};

var fname = "kenn";

if (fname[0] != fname[0].toUpperCase) {
	fname = fname[0].toUpperCase() + fname[1] + fname[2] + fname[3];
	console.log("Horrible punctuation, you need to uppercase the first letter like this: " + fname);
} else {
	console.log("Great punctuation!")
}

var age = 16;

if (age >= 18) {
	console.log("Yay you can vote!");
} else if (age >=21) {
	console.log("Yay you can drink beer!");
} else if (age >=25) {
	console.log("Yay you get lower rates on your car rental.")
} else {
	console.log("Sorry too young to do anything");
}