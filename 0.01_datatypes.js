// data types

//Strings
//Strings are a collection of characters 

// console.log("What a Wonderful world.");
// console.log('Hello you guys');
// console.log("it's a wonderful day");
// console.log('Thomas said "I think grass is green"'.toUpperCase());
// console.log('Couldn\'t things get any better'.length); // "\" escapes a string

// Challenge: create a string that has your name and use the to lower case function to make sure each character is lower case
var myName = "Aaron Ofengender"
console.log(myName);
console.log(myName.toLowerCase());

//			 012345678910 
console.log("jay jackson"[0].toUpperCase());
console.log("jay"[0].toUpperCase() + "jay"[1] + "jay"[2])//string concatenation

//Challenge: uppercase the m in Home and put the string back together using string concatenation
var word = "Home";
console.log(word);
console.log(word[0] + word[1] + word[2].toUpperCase()+ word[3]);

console.log(typeof("ufbreuifrn"));

//Numbers (aka Integers)
console.log(typeof(484));
console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(2/5);
console.log(2%5);

//Booleans (true/false)
console.log(true);
/*
Conditional operators: <, >, <=, >=, ==, ===, !, !=, !==, ||, &&
*/
console.log(4 == 5);
console.log("Test".length > "ego".length);
console.log(1 == "1");
console.log(1 === "1");
