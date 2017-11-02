/* https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php - #5 */


function capitalize(x) {
	let newName = "";
	for (let l in x) {
		if (l == 0) {
			newName = x[l].toUpperCase();
		} else if (x[l-1] === " ") {
			newName += x[l].toUpperCase(); 
		} else {
			newName += x[l].toLowerCase();
		}		
	}
	return newName;
}

console.log(capitalize("the quick brown fox"))