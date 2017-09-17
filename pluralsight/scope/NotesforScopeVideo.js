//Notes for video on Scope
//video link: https://www.youtube.com/watch?v=VCfUslDD_qg&feature=youtu.be

'use strict'

let hit = "home run";

function getHit() {
	let hit = "single";
	console.log("#2: " + hit);
}

function makeOut(i, out) {
	console.log("#" + i + ": " + "first " + out);
	out = "HE GONE!";
	console.log("second " + out);
	strikeouts = "KKKKKKKKKK";
	console.log(strikeouts);
}

console.log("#1: " + hit); //#1

clearConsole();
clearConsole();


getHit();                  //#2

clearConsole();
clearConsole();


//console.log(strikeouts);

makeOut(3, "FOUL BALL!"); //#3

clearConsole();
clearConsole();

makeOut(4);                //#4 


clearConsole();
clearConsole();

console.log("#5: " + strikeouts); //#5




function clearConsole() {
	console.log("-------------------------------------------------------");
	console.log("-------------------------------------------------------");
}