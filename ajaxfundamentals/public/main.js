$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(data){
		let planetsList = data.results;
		let planetNames = [];
		for (let i = 0; i < planetsList.length; i++) {
			planetNames.push(planetsList[i].name);
		}
		for (let i = 0; i < planetNames.length; i++) {
			let table = document.getElementById("planetTable");
			let row = document.createElement('tr');
			let cell = document.createElement('td');
			// cell.appendChild(document.createTextNode(planetNames[i]);
			// row.appendChild(cell)
			table.appendChild(row).appendChild(cell).appendChild(document.createTextNode(planetNames[i]));
		}
	})
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/starships/',
	}).done(function(data){
		let shipList = data.results;
		let shipNames = [];
		for (let i = 0; i < shipList.length; i++) {
			shipNames.push(shipList[i].name);
		}
		for (let i = 0; i < shipNames.length; i++) {
			let table = document.getElementById("shipTable");
			let row = document.createElement('tr');
			let cell = document.createElement('td');
			// cell.appendChild(document.createTextNode(shipNames[i]));
			// row.appendChild(cell)
			table.appendChild(row).appendChild(cell).appendChild(document.createTextNode(shipNames[i]));
		}
	})
})

		//each of these work as well
		// for(let planet in planets.results){
		// 	console.log(planets.results[planet].name);
		// }
		// for (let planet of planets.results){
		// 	console.log(planet.name);
		// }
		// planets.results.forEach(function(planet){
		// 	console.log(planet.name)
		// })