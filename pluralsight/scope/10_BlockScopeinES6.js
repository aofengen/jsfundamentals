//LET: the let keyword was introduced with ES6. It declares a variable like the keyword var. It introduces something called
//Block Scope. When let is used, the compilier will attach that variable to the block of code it appears in rather than a function

function exampleOne() {
	function foo() {
		var bar = "bar";
		for (let i=0; i<bar.length; i++){
			console.log(bar.charAt(i));
		}
		console.log(i); //throws Reference error
	}
}

foo();

//In the above example, the variable i is declared ONLY within the for loop, rather than the entire function. When it is 
//called outside of the for loop block of code, an error is thrown because there is no variable i at that point.

function exampleTwo() {
	function foo(bar) {
		if (bar) {
			let baz = bar;
			if (baz) {
				let bam = baz;
			}
			console.log(bam); //Error
		}
		console.log(baz); //Error
	}

	foo("bar");
}

//In this example, the variables baz and bam are specifically assigned to the if statements bar and baz, respectively. They
//do not exist outside of the scope of the block of code in which they are assigned.