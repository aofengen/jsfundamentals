let x = [1,2,3];

x.forEach(function(number) {
	console.log(number);
});
//1
//2
//3

x.forEach(function(number) {
	console.log(number += 1);
})
// 2
// 3
// 4