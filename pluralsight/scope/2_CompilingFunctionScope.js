let foo = "bar"; //global scope foo

function bar() {
	let foo = "baz"; //local scope foo - different variable than global scope
}

function baz(foo) { //parameter foo becomes local variable - third foo variable in program
	foo = "bam";
	bam = "yay";
}

//Compilier first goes for scope-related issues (compilation phase), then uses that scope
//to compile the rest of the program (execution phase). In case of line 1, "let foo" is the 
//compilation phase, while "foo = bar" is the excecution phase

//lhs: left hand side; rhs: right hand side. Ex. line 1: foo is lhs reference, "bar" is rhs