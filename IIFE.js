//IIFE = Immediately-Invoked Function Expression; self-caling method

// let i = 4;
// console.log(i);
// (function(){
// 	var arraigh= [];

// 	arraigh.push(i, i+1, i+2);
// 	console.log(arraigh[0]);
// 	console.log(arraigh[1]);
// 	console.log(arraigh[2]);
// })();
// console.log(i);


//Challenge: fix the code to use superSecret outside of the function
// (function(){
// 	var superSecret = 195;
// })();
// console.log(superSecret);

let x = (function(){
	var superSecret = 195;
	return superSecret
})();
console.log(x);