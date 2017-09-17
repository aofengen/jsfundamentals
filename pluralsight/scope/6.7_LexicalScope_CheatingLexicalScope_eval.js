//Lexical Scope vs Dyanmic Scope - models of scope used in many languages
//JS uses Lexical Scope, but does not use Dynamic Scope

//Lexical refers to the fact that a level of scope is declared once and cannot change. 

function foo () {
	let bar = "bar";

	function baz() {
		console.log(bar); //lexical!
	}
	baz();
}
foo();

//This is an example of nesting scope levels, where no overlapping of scope levels exists.
//These are author-time decisions, made when the code is written, and cannot change when executed.

let bar = "bar";

function foo(str) {
	eval(str); //cheating!
	console.log(bar); //42
}

foo("var bar = 42;");

//eval keyword translates strings into executable code. Because bar was passed as a string into
//the variable as a parameter, eval takes that string and re-assigns bar as 42, instead of using
//the global value. Outside of the function, bar still has the value of bar. Eval causes a decline
//in speed and performance, however. eval has its benefits, but can cause great confusion.
//When in doubt, do not use.

//The with keyword

let obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
	a = b + c;
	c = b - a;
	d = 3; //?
}

obj.d; //undefined
d; //3 -- oops!

//with allows a shorthand reference to an object attribute. However, if the attribute is not already
//declared, the compilier will create the attribute as a global variable instead. In addition,
//using the with keyword creates an additional layer of lexical scope, which causes performance
//issues within a program.