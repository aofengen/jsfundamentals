let x = [0, 1, 2, 3];
let y = x.entries();

console.log(y.next().value); //[0,0]
console.log(y.next().value); //[1,1]
console.log(y.next().value); //[2,2]
console.log(y.next().value); //[3,3]

//Array.entries returns all index/value pairs of an array as an object. next().value must be used to display each index/value
//pair out of the object. Each next.value displays the next successive index/value pair.