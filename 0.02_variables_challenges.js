//BRONZE CHALLENGE
var playerNumber = 10;
var teamNumber = 12;
var position = 3;
var wins = 16;
var losses = 4;

console.log("BRONZE");
console.log("My number is " + playerNumber);
console.log("My team number is " + teamNumber);
console.log("My poistion is " + position + ", first base.");
console.log("My team has " + wins + " wins this season");
console.log("My team has " + losses + " losses this season");
console.log("");
//SILVER CHALLENGE

console.log("SILVER");
var myNumber = 0;
myNumber += 10; //myNumber = (myNumber + 10);
console.log(myNumber);
myNumber -= 1;  //myNumber = (myNumber - 1);
console.log(myNumber);
myNumber *= 9;  //myNumber = (myNumber * 9);
console.log(myNumber);
myNumber /= 7;  //myNumber = (myNumber/7);
console.log(myNumber);
console.log("");

//GOLD CHALLENGE - Lifetime Supply
var currentAge = 29;
var maxAge = 100;
var amountPerDay = 3;
var lifetimeSupply = ((maxAge-currentAge)*365);
console.log("GOLD");
console.log("You will need " + lifetimeSupply + " cookies to last you until the ripe old age of " + maxAge + ".");