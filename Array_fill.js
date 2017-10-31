let x = [1, 2, 3, 4, 5]

console.log(x.fill(1)); //[ 1, 1, 1, 1, 1 ]
console.log(x.fill(3)); //[ 3, 3, 3, 3, 3 ]
console.log(x.fill("a")); //[ 'a', 'a', 'a', 'a', 'a' ]

let y = ["b", "c", "d"];

console.log(y.fill("z")); //[ 'z', 'z', 'z' ]