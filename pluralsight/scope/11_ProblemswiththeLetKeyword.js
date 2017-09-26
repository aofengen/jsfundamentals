//Problems with let keyword:

//1. the let keyword does not hoist any variable declarations. Thus using let in the middle of a large code block will cause an
//error when attempting to reference the variable at any time before it is declared. Placing all let variable declarations at the
//top of any code blocks rectifies this issue. 

function exampleOne() {
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

//2. It also creates an extra task when refactoring/debugging. Since the scope of the variable is no longer the entire function,
//but rather a certain block of code, you have to figure out exactly which blocks of code the variable is valid within.

function exampleTwo() {
	function foo(bar) {
		let (baz=bar) {
			console.log(baz); //bar
		}
		console.log(baz); //ERROR
	}

	foo("bar");
}

//This is known as a let block, thus showing exactly where the let variable is valid, but was rejected by the group that oversees JS.
//Here is another attempt:

function exampleThree() {
	function foo(bar) {
		/*let*/ { let (baz=bar)
			console.log(baz); //bar
		}
		console.log(baz); //ERROR
	}

	foo("bar");
}

