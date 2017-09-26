//theoretical dynamic scoping
function foo() {
	console.log(bar);  //dynamic!
}

function baz() {
	var bar = "bar";
	foo();
}

baz();

//dynamic scoping is a runtime decision, whereas lexical scoping is an author-time decision.