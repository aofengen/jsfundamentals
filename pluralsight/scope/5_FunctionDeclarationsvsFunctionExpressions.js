let foo = function bar() { //function expression
	let foo = "baz";

	function baz(foo) { //function declaration
		foo = bar;
		foo; //function...
	}
	baz();
};

foo();  //
bar();  //ERROR!

//Line 1 is not a function declaration because the keyword function is not present at the beginning
//of the statement. It is a function expression instead. It is also a named function expression
//as opposed to an anonymous function expression. Function expressions are localized to their own
//scope, while function declarations are available globally throughout the program

/*Major negatives to using anonymous function expression:
1. no way to refer to function within itself (recursion, editing, etc.)
2. Makes debugging much harder (hard to find when anonymous)
3. No self-documentation of code (no easy way to identify what the function does)
*/

let foo;

try {
	foo.length;
}
catch (err) {
	console.log(err); //type error
}

console.log(err) //reference error

//Try-catch is known as block scope. Parameter of err is only available within the catch clause.