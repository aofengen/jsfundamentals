let foo = "bar";

function bar() {
	let foo = "baz";
}

function baz(foo) {
	foo = "bam"; //lhs reference for foo, then assigns value bam to variable foo WITHIN THIS FUNCTION
	bam = "yay";
}

//There is no declaration of the variable bam in local scope, so compilier goes to global scope.
//Because bam is a lhs reference, compilier creates a variable called bam in the global scope
//This is an example of scope leakage. Writing in strict mode prevents this issue.

//Without using var/let/const, variables become undeclared. We want to prevent this occurance
//at all possible. Undeclared is different than undefined.