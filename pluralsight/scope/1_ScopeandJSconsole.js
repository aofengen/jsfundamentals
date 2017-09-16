let foo = "bar"; //technically two statements (let foo; foo = "bar") in compiler

function bar() {
	let foo = "baz";
}

function baz(foo) {
	foo = "bam";
	bam = "yay";
}

//JS compiliers do not act in a top-down methodology, but rather a dynamic methodology making
//best guess assumptions about what a specific line of code. After several uses of that code, it
//attempts to judge whether or not the guess was correct, and adjusts accordingly if necessary.