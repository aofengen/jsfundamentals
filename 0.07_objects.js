//Objects

let food = {
	pies: ["Pecan", "Blueberry", "Cherry", "Key Lime"],
	newPies: [],
	getPies: function() {
		return this.pies; //this = food object, in this instance
	},
	pieName: function(array) {
		for(let i = 0; i<array.length; i++) { //return this.pies.forEach(function(x){console.log([x] + " pie")});
			let newPie = array[i] + " pie";
			array.splice(i, 1, newPie);
			//this.newPies.push(newPie);
		}
		return array;
	},
	newPie: function(array) {
		let newArray = [];
		for (let i = 0; i<array.length; i++) {
			newArray.push(array[i] + " pie");
		}
		return newArray;
	}
	/*
	getPieNames: function() {
	this.pies.forEach(function(pie){
		food.pieNames.push(pie + " pie");
	})
	return this.pieNames;
}
	*/
}

//console.log(food.pies[0] + " pie");

//Challenge: iterate over the pie array and print out each pie, and add "pie" to them using forEach methon

// food.pies.forEach(function(a){console.log(a + " pie");})

console.log(food.getPies());

//Challenge: Create a method inside of the object food that appends " pie" to the different pies in the arrays list
//console.log(food.pieName(food.pies));

//Challenge: Create a method that adds thepies to a new array in the food object

console.log(food.newPies);
food.newPies = food.newPie(food.pies);
console.log(food.newPies);
//console.log(food.newPie(food.pies));