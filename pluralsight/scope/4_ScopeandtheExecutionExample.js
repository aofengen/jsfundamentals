let foo = "bar";

function bar() {  //registers the function 
	let foo = "baz"; //lhs reference to LOCAL variable foo (AKA shadowing)

	function baz(foo) { //registers the function within the scope of bar and initializes foo
		foo = "bam"; //third foo variable, second level of local scope
		bam = "yay"; //no declaration, so compilier attempts to go up in scope to find variable
								 //bam is then declared as a GLOBAL scope variable, and is accessible in all scopes
								 //compilier essentially runs let bam = "yay" as if it were on line 2
	}
	baz(); //rhs reference within local scope only
}

bar();  //rhs definition, attempts to execute function bar
foo;  //??? = bar
bam;  //??? = yay because bam is auto-initialized as global variable
baz(); //??? = undefined (reference error)

//something becomes an rhs reference if it's not an lhs reference (not having a declaration var/let)
//