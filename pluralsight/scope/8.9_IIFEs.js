//IIFE = Immediately-Invoked Function Expression. Literally, a function which runs immediately after it is compiled

var foo = "foo";

(function() {
	var foo = "foo2";
	console.log(foo) //foo2
})(); //"()" after a function denotes an IIFE

console.log(foo); //foo

//IIFEs allow a layer of scope to be created in order to hide items from other parts of the application.
//IIFEs are usually (but not always!) anonymously declared functions, which is bad practice. They can be 
//useful in specific situations, such as keeping a specific variable(s) separate from the rest of the code.
//It is better practice to give an IIFE a name such as "IIFE"

var foo = "foo";
(function(bar) {
	var foo = "bar";
	console.log(foo); //foo
})(foo);

console.log(foo); //foo
