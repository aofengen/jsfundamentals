//BRONZE - Create a person object with different properties describing them

let Aaron = {
	age: "29",
	height: "70in",
	weight: "270lbs",
	hairColor: "black",
	getAge: function() {
		return this.age;
	}, 
	getHeight: function() {
		return this.height;
	},
	getWeight: function() {
		return this.weight;
	},
	getHairColor: function() {
		return this.hairColor;
	}
}

//SILVER - Add methods for each of the properties above that returns the value of the property

let x = Aaron.getAge();
let y = Aaron.getHeight();
let z = Aaron.getWeight();
let a = Aaron.getHairColor();
console.log(x, y, z, a);

//GOLD - Create a child object that inherits all of the properties and methods from your person 
//object. Then add to the child object without adding to the parent object